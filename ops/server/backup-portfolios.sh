#!/usr/bin/env bash
set -Eeuo pipefail

backup_root="${PORTFOLIO_BACKUP_ROOT:-/home/work/backups/portfolio}"
retention_days="${PORTFOLIO_BACKUP_RETENTION_DAYS:-14}"
timestamp="$(date -u +%Y%m%dT%H%M%SZ)"
backup_dir="${backup_root}/${timestamp}"
lock_file="/home/work/.locks/portfolio-backup.lock"

mkdir -p "$backup_root" "$(dirname "$lock_file")"
exec 9>"$lock_file"
flock -n 9 || {
  echo "backup_status=skipped reason=already_running" >&2
  exit 1
}

umask 077
mkdir -p "$backup_dir/git" "$backup_dir/config" "$backup_dir/data"

cleanup_failed_backup() {
  local exit_code=$?
  if (( exit_code != 0 )); then
    case "$backup_dir" in
      "$backup_root"/*) rm -rf -- "$backup_dir" ;;
      *)
        echo "backup_cleanup=skipped reason=unexpected_path path=${backup_dir}" >&2
        ;;
    esac
    echo "backup_status=failed timestamp=${timestamp}" >&2
  fi
  exit "$exit_code"
}
trap cleanup_failed_backup EXIT

for app in bio techzone quakecurrent; do
  git_dir="/home/work/git/${app}.git"
  git --git-dir="$git_dir" bundle create "$backup_dir/git/${app}.bundle" --all
  git bundle verify "$backup_dir/git/${app}.bundle" >/dev/null
done

sudo -n cat /etc/caddy/Caddyfile > "$backup_dir/config/Caddyfile"
install -m 0600 /home/work/bin/deploy-portfolio.sh "$backup_dir/config/deploy-portfolio.sh"
install -m 0600 /home/work/bin/github-actions-dispatch.sh \
  "$backup_dir/config/github-actions-dispatch.sh"

(
  cd /home/work/portfolio/techzone
  docker compose \
    --env-file .env.server \
    -f docker-compose.yml \
    -f compose.server.yml \
    exec -T postgres \
    pg_dumpall --clean --if-exists --username=canvas
) | gzip -9 > "$backup_dir/data/techzone-postgres.sql.gz"

(
  cd /home/work/portfolio/quakecurrent
  docker compose \
    --env-file .env.production \
    -f compose.production.yml \
    exec -T postgis \
    pg_dump --clean --if-exists --create \
    --username=quakecurrent --dbname=quakecurrent
) | gzip -9 > "$backup_dir/data/quakecurrent-postgis.sql.gz"

docker run --rm \
  --volume techzone_minio-data:/source:ro \
  --volume "$backup_dir/data:/backup" \
  alpine:3.22 \
  tar -C /source -czf /backup/techzone-minio.tgz .

gzip -t "$backup_dir/data/techzone-postgres.sql.gz"
gzip -t "$backup_dir/data/quakecurrent-postgis.sql.gz"
tar -tzf "$backup_dir/data/techzone-minio.tgz" >/dev/null

(
  cd "$backup_dir"
  find git config data -type f -print0 \
    | sort -z \
    | xargs -0 sha256sum > SHA256SUMS
  sha256sum --check SHA256SUMS >/dev/null
)

ln -sfn "$backup_dir" "$backup_root/latest"
while IFS= read -r -d '' expired_dir; do
  case "$expired_dir" in
    "$backup_root"/*) rm -rf -- "$expired_dir" ;;
    *)
      echo "backup_retention=skipped reason=unexpected_path path=${expired_dir}" >&2
      ;;
  esac
done < <(
  find "$backup_root" \
    -mindepth 1 -maxdepth 1 -type d \
    -mtime "+${retention_days}" \
    -print0
)

trap - EXIT
echo "backup_status=ok timestamp=${timestamp} path=${backup_dir}"

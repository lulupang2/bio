#!/usr/bin/env bash
set -uo pipefail

backup_root="${PORTFOLIO_BACKUP_ROOT:-/home/work/backups/portfolio}"
failures=()

check_url() {
  local name="$1"
  local url="$2"
  if ! curl \
    --fail --silent --show-error \
    --max-time 15 \
    --retry 2 --retry-delay 2 --retry-all-errors \
    "$url" >/dev/null; then
    failures+=("url:${name}")
  fi
}

check_url bio https://bio.jisung.lol/
check_url techzone-storefront https://techzone.jisung.lol/
check_url techzone-admin https://techzone.jisung.lol/admin/
check_url quakecurrent-web https://quake.jisung.lol/
check_url quakecurrent-api https://quake-api.jisung.lol/readyz

if ! systemctl is-active --quiet caddy; then
  failures+=("service:caddy")
fi

mapfile -t unhealthy_containers < <(
  docker ps --filter health=unhealthy --format '{{.Names}}'
)
for container in "${unhealthy_containers[@]}"; do
  [[ -n "$container" ]] && failures+=("container:${container}")
done

if ! find "$backup_root" \
  -mindepth 1 -maxdepth 1 -type d \
  -mmin -2160 \
  -print -quit 2>/dev/null | grep -q .; then
  failures+=("backup:older_than_36h")
fi

checked_at="$(date -u +%Y-%m-%dT%H:%M:%SZ)"
if (( ${#failures[@]} > 0 )); then
  printf 'monitor_status=failed checked_at=%s failures=%s\n' \
    "$checked_at" "$(IFS=,; echo "${failures[*]}")" >&2
  exit 1
fi

echo "monitor_status=ok checked_at=${checked_at}"

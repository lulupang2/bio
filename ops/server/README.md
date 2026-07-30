# Portfolio server operations

The production host runs Caddy directly on Rocky Linux and runs the three
portfolio applications with Docker Compose.

## Backup

`portfolio-backup.timer` runs once a day and stores a private, checksummed
backup under `/home/work/backups/portfolio`.

Each backup contains:

- Git bundles for Bio, TECHZONE, and QuakeCurrent
- the Caddy and deployment script configuration
- a logical dump of every TECHZONE PostgreSQL database and role
- a logical QuakeCurrent PostGIS dump
- the TECHZONE MinIO media volume

Backups older than 14 days are removed. Redis, RabbitMQ, caches, and generated
containers are intentionally excluded because they are rebuilt from the
repositories and system-of-record data.

Useful commands:

```bash
sudo systemctl start portfolio-backup.service
sudo systemctl status portfolio-backup.service
sudo journalctl -u portfolio-backup.service --since today
```

## Availability monitoring

`portfolio-monitor.timer` checks the three public sites, the QuakeCurrent API,
Caddy, unhealthy Docker containers, and backup freshness every five minutes.
A failure is visible as a failed `portfolio-monitor.service` run and is written
to the system journal.

```bash
sudo systemctl status portfolio-monitor.service
sudo journalctl -u portfolio-monitor.service --since today
```

An external notification channel can later be attached with a systemd
`OnFailure=` unit without changing the checks.

## Restore verification

Before relying on a backup, verify its manifest:

```bash
cd /home/work/backups/portfolio/latest
sha256sum --check SHA256SUMS
git bundle verify git/bio.bundle
gzip -t data/techzone-postgres.sql.gz
gzip -t data/quakecurrent-postgis.sql.gz
tar -tzf data/techzone-minio.tgz >/dev/null
```

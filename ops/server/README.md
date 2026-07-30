# 포트폴리오 서버 운영

프로덕션 서버는 Rocky Linux에 Caddy를 직접 설치해 사용하며, 세 포트폴리오
애플리케이션은 Docker Compose로 실행합니다.

## 백업

`portfolio-backup.timer`는 매일 한 번 실행되며, 체크섬이 포함된 비공개 백업을
`/home/work/backups/portfolio`에 저장합니다.

각 백업에는 다음 항목이 포함됩니다.

- Bio, TECHZONE, QuakeCurrent의 Git 번들
- Caddy 설정과 배포 스크립트
- TECHZONE의 모든 PostgreSQL 데이터베이스와 역할에 대한 논리 덤프
- QuakeCurrent PostGIS 논리 덤프
- TECHZONE MinIO 미디어 볼륨

14일이 지난 백업은 자동으로 삭제합니다. Redis, RabbitMQ, 캐시와 생성된
컨테이너는 저장소와 원본 데이터로 다시 구성할 수 있으므로 백업에서 제외합니다.

주요 명령은 다음과 같습니다.

```bash
sudo systemctl start portfolio-backup.service
sudo systemctl status portfolio-backup.service
sudo journalctl -u portfolio-backup.service --since today
```

## 가용성 점검

`portfolio-monitor.timer`는 5분마다 세 공개 사이트, QuakeCurrent API, Caddy,
비정상 Docker 컨테이너와 백업 최신 상태를 점검합니다. 실패하면
`portfolio-monitor.service`가 실패 상태가 되고 시스템 저널에 원인이 기록됩니다.

```bash
sudo systemctl status portfolio-monitor.service
sudo journalctl -u portfolio-monitor.service --since today
```

외부 알림이 필요하면 기존 점검 스크립트를 변경하지 않고 systemd `OnFailure=`
유닛을 연결할 수 있습니다.

## 복원 검증

백업을 사용하기 전에 체크섬과 각 데이터 파일을 검증합니다.

```bash
cd /home/work/backups/portfolio/latest
sha256sum --check SHA256SUMS
git bundle list-heads git/bio.bundle
gzip -t data/techzone-postgres.sql.gz
gzip -t data/quakecurrent-postgis.sql.gz
tar -tzf data/techzone-minio.tgz >/dev/null
```

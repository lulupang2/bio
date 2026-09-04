# 배포와 운영

`main` 브랜치에 푸시하면 GitHub Actions가 검증 후 프로덕션 서버에 자동 배포합니다.

## CI 파이프라인 (.github/workflows/deploy-production.yml)

1. Node 26 런타임 검증 (`.nvmrc`, `package.json` engines와 일치)
2. `npm ci` → `npm test` → `npm run build`
   - 테스트 실패 또는 빌드·dist 검증 실패 시 배포 중단
3. 제한된 프로덕션 SSH 키 구성
4. 프로덕션 Git(`work@호스트:/home/work/git/bio.git`)에 불변 커밋 푸시
5. 원격에서 `deploy-portfolio.sh bio <SHA>` 실행으로 배포·검증

`concurrency: bio-production`으로 배포는 직렬화되고, `environment: production` 승인을
거칩니다.

## 컨테이너 구성

- `deploy/Dockerfile`: 멀티스테이지 빌드. `node:26-alpine`에서 `npm ci` + 빌드 후
  `nginx:1.29-alpine`에 `dist/`만 복사합니다. 헬스체크 포함.
- `deploy/nginx.conf`:
  - 모든 비파일 요청을 `index.html`로 폴백 (SPA 직접 진입 지원)
  - 정적 자산(css/js/이미지/폰트) 7일 캐시
- `compose.production.yml`: `127.0.0.1:18081:80` 바인드(외부 직접 노출 없음),
  `no-new-privileges`, 로그 로테이션(10MB × 3)
- TLS와 리버스 프록시는 호스트의 Caddy(Rocky Linux)가 담당합니다.

## 빌드 파이프라인

`npm run build`는 다음을 순서대로 실행합니다.

```
vite build                          # 번들 + 메타 토큰 치환
node scripts/build-sitemap.mjs      # dist/sitemap.xml · robots.txt
node scripts/build-worker.mjs       # dist/server/index.js (Cloudflare Worker)
node scripts/verify-dist.mjs        # 산출물 무결성 검증
```

`build-worker.mjs`가 만드는 Worker는 Cloudflare Pages/Workers로 서빙할 때 쓰는 SPA
폴백입니다 — 파일이면 그대로, 아니면 `index.html`을 반환합니다. 현재 주 배포 경로는
nginx이며 Worker는 대체 서빙 옵션입니다.

## 서버 운영 스크립트 (ops/server/)

| 파일 | 역할 |
| --- | --- |
| `backup-portfolios.sh` | bio·techzone·quakecurrent Git 번들 백업 |
| `check-portfolios.sh` | 각 서비스 URL 헬스체크 |
| `portfolio-backup.{service,timer}` | 백업 주기 실행 systemd 유닛 |
| `portfolio-monitor.{service,timer}` | 모니터링 주기 실행 systemd 유닛 |

상세 사용법은 [ops/server/README.md](../ops/server/README.md) 참고.

## 공개 주소

- 포트폴리오: `https://bio.jisung.lol/`
- TECHZONE: `https://techzone.jisung.lol/`
- QuakeCurrent: `https://quake.jisung.lol/`

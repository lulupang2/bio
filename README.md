# 개발자 포트폴리오

React·Next.js 기반의 웹·모바일 실무 경험과 풀스택 프로젝트를 소개하는 한국어
포트폴리오입니다.

## 실행 방법

```bash
npm install
npm run dev
npm run build
npm test
```

## 문서

콘텐츠 SSOT 스펙, 아키텍처, SEO·메타데이터, 배포·운영, 품질 게이트 상세는 [docs/](docs/README.md)에서
관리합니다.

## 프로젝트 구조

화면 문구, 메뉴, 메타데이터, 프로필과 프로젝트 공개 상태는
`src/content/portfolio.js`가 단일 원본(SSOT)으로 관리하며, `src/content/i18n.js`에서
영문 변환을 처리합니다. `App.svelte`는 경로와 테마를 관리하고 `src/pages`의 홈·상세·404 페이지를 선택합니다. 반복 UI는 `src/components`, 전역 스타일은 `src/styles`에서 역할별로 관리합니다. Vite는 빌드 시 같은 콘텐츠 객체의 메타데이터를 `index.html`에 주입합니다. 상세 스키마는 [docs/content-spec.md](docs/content-spec.md)를 참고하세요.

프로젝트 표시 순서와 내용은 `portfolio.projects` 배열에서 관리합니다.
`published`는 프로젝트 상세 공개 여부를, `liveUrl`은 외부 데모 링크 노출을
제어합니다.

## 공개 프로젝트

| 프로젝트 | 상세 페이지 | 데모 |
| --- | --- | --- |
| TECHZONE | `/projects/techzone` | <https://techzone.jisung.lol/> |
| QuakeCurrent | `/projects/quakecurrent` | <https://quake.jisung.lol/> |
| Signal Archive | `/projects/signal-archive` | <https://signal.jisung.lol/> |
| Assembly ERP | `/projects/assembly-erp` | <https://erp.jisung.lol/> |
| SummerGear | `/projects/summergear` | <https://sg.jisung.lol/> (테스트 데모) |
| PricePulse | `/projects/pricepulse` | 로컬 검증, 공개 데모 없음 |
| GrantFit | `/projects/grantfit` | 공개 데모 없음 |
| 자취방 수리 접수 | `/projects/room-repair` | 로컬 검증, 공개 데모 없음 |

상세 페이지 공개와 원본 서비스 배포는 별개입니다. 공개 데모가 없는 프로젝트의 화면·아키텍처 자료에는 검증 범위를 명시합니다.

## 배포

`main` 브랜치에 변경 사항을 푸시하면 GitHub Actions가 프로덕션 서버에 자동
배포합니다. 프로덕션에서는 Rocky Linux의 Caddy가 TLS와 리버스 프록시를
담당하고, Bio 애플리케이션은 Docker Compose로 실행됩니다.

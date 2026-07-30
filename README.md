# 개발자 포트폴리오

React·Next.js 기반의 웹·모바일 실무 경험과 풀스택 프로젝트를 소개하는 한국어
포트폴리오입니다.

## 실행 방법

```bash
npm install
npm run dev
npm run build
```

## 프로젝트 구조

화면 문구, 메뉴, 메타데이터, 프로필과 프로젝트 공개 상태는
`src/content/portfolio.js`에서 관리합니다. `App.svelte`는 경로와 테마를
관리하고 `src/pages`의 홈·상세·404 페이지를 선택합니다. 반복 UI는
`src/components`, 전역 스타일은 `src/styles`에서 역할별로 관리합니다.
Vite는 같은 콘텐츠 객체의 메타데이터를 `index.html`에 주입합니다.

프로젝트 표시 순서와 내용은 `portfolio.projects` 배열에서 관리합니다.
`published`는 프로젝트 상세 공개 여부를, `liveUrl`은 외부 데모 링크 노출을
제어합니다.

## 공개 프로젝트

- `/projects/techzone`: 고객 스토어와 관리자 OMS/WMS·MSA 프로젝트 상세
- `/projects/quakecurrent`: 지진 수집·실시간 복구·지도 데이터 프로젝트 상세

두 프로젝트의 상세 페이지와 라이브 데모가 모두 공개되어 있습니다.

- TECHZONE: <https://techzone.jisung.lol/>
- QuakeCurrent: <https://quake.jisung.lol/>

## 배포

`main` 브랜치에 변경 사항을 푸시하면 GitHub Actions가 프로덕션 서버에 자동
배포합니다. 프로덕션에서는 Rocky Linux의 Caddy가 TLS와 리버스 프록시를
담당하고, Bio 애플리케이션은 Docker Compose로 실행됩니다.

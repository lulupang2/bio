# 개발자 포트폴리오

React·Next.js 실무 경험을 바탕으로 풀스택으로 확장하는 프론트엔드 개발자
한국어 포트폴리오입니다.

## 실행

```bash
npm install
npm run dev
npm run build
```

화면 문구, 메뉴, 메타데이터, 프로필과 프로젝트 공개 상태는 모두
`src/content/portfolio.js`에서 관리합니다. `App.svelte`는 경로와 테마를 관리하고,
`src/pages`의 홈·상세·404 페이지를 선택합니다. 반복 UI는 `src/components`,
전역 스타일은 `src/styles`에서 역할별로 관리합니다. Vite는 같은 콘텐츠 객체의
메타데이터를 `index.html`에 주입합니다.

프로젝트는 `portfolio.projects` 배열에서 표시 순서와 내용을 관리합니다. 각
프로젝트의 `published`는 Case Study 공개 여부를, `liveUrl`은 외부 데모 링크
노출을 제어합니다.

- `/projects/techzone`: 고객 스토어와 관리자 OMS/WMS·MSA Case Study
- `/projects/quakecurrent`: 지진 수집·실시간 복구·지도 데이터 Case Study

두 프로젝트의 Case Study는 공개되어 있고 라이브 배포는 준비 중입니다. 배포가
완료되면 해당 객체의 `liveUrl`만 입력해 상세 페이지의 `Live Demo` 링크를
활성화합니다.

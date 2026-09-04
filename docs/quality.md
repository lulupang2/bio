# 테스트와 품질 게이트

콘텐츠가 곧 제품인 포트폴리오 특성상, 품질 게이트는 "콘텐츠·빌드 산출물의 무결성"에
집중합니다.

## 콘텐츠 무결성 테스트 (tests/content.test.js)

vitest(node 환경)로 `src/content/portfolio.js` 및 `src/content/i18n.js`를 검증합니다. 스키마 상세는 [콘텐츠 SSOT 스펙](content-spec.md)을 참고하세요.

1. **필수 필드**: 공개 프로젝트마다 title·slug·summary·cover·coverAlt·liveUrl·repositoryUrl·screenshots 존재, 스크린샷마다 src·alt 존재
2. **자산 실존**: cover와 스크린샷 경로가 `public/`에 실제 파일로 존재
3. **경로 일치**: `collectSitePaths()` 결과가 홈 + 공개 프로젝트 라우트와 일치하고, 각 경로가 `findPublishedProjectByPath()`로 조회 가능
4. **비공개 차단**: `published !== true` 프로젝트는 라우팅에서 조회되지 않음
5. **프로덕션 URL**: `portfolio.site.url` 형식 검증 (`https://bio.jisung.lol`, canonical·sitemap 기준)
6. **다국어(i18n) 무결성**: 영문 라우트(`/en`, `/en/projects/*`) 경로 파싱 및 본문 번역 객체 생성 정상 동작 검증

```bash
npm test          # vitest run
npm test -- --watch   # 개발 중 감시 모드
```

## 빌드 산출물 검증 (scripts/verify-dist.mjs)

빌드 마지막 단계에서 자동 실행됩니다.

- `dist/`에 index.html, sitemap.xml, robots.txt, favicon.svg, manifest.webmanifest,
  server/index.js 존재 확인
- `index.html`에 치환되지 않은 `__TOKEN__` 잔존 검사
- canonical·og:url 링크, JSON-LD 스크립트 존재 확인

실패 시 비영 종료 코드로 빌드가 중단됩니다.

## CI 게이트

`deploy-production.yml`에서 배포 전 `npm test` → `npm run build`(verify-dist 포함)가
필수입니다. 테스트나 산출물 검증 실패는 프로덕션 푸시 전에 차단됩니다.

## 수동 점검 체크리스트

- `npm run dev`에서 프로젝트 카드 클릭 시 리로드 없이 전환, `<head>` 메타 갱신 확인
- 뒤로가기 시 스크롤 위치 복원 확인
- `npm run build` 후 `dist/sitemap.xml`의 URL이 프로덕션 도메인 기준인지 확인
- 존재하지 않는 경로 접근 시 404 화면과 `noindex` 메타 확인

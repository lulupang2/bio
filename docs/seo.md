# SEO와 메타데이터

검색·공유 노출을 위한 메타 시스템입니다. 원칙은 하나입니다.
**빌드 시 정적 메타는 크롤러와 직접 진입을 책임지고, 런타임 갱신은 SPA 내비게이션을
책임진다.** 모든 값의 원본은 `src/content/portfolio.js`입니다.

## 빌드 시 메타 (index.html)

`vite.config.js`의 `contentMetadataPlugin`이 `index.html`의 토큰을 치환합니다.

| 토큰 | 값 원본 |
| --- | --- |
| `__SITE_TITLE__` / `__SOCIAL_TITLE__` | `siteMetadata.title` / `socialTitle` |
| `__SITE_NAME__` | `portfolio.site.title` (og:site_name 전용) |
| `__SITE_URL__` | `portfolio.site.url` (`https://bio.jisung.lol`) |
| `__SOCIAL_IMAGE__` | `siteMetadata.socialImage` (`/og.png`) |
| `__HOME_JSON_LD__` | `homeJsonLd` 직렬화 |

치환 결과에는 canonical, og:url, og:site_name, favicon, manifest 링크가 포함됩니다.
토큰 잔존 여부는 빌드 후 `scripts/verify-dist.mjs`가 검사합니다.

## 런타임 동적 갱신 (App.svelte)

`applyRouteMeta(project, isNotFound)`가 라우트마다 `<head>`를 갱신합니다.

- **프로젝트 상세**: title, description(= `project.summary`), og:* / twitter:* 전체,
  canonical(`{site.url}/projects/{slug}`), og:image(`project.cover`를 절대 URL로 변환)
- **404**: `<meta name="robots" content="noindex">` 추가, canonical은 홈으로
- **홈**: 기본값 복원, noindex 제거

`App.svelte`는 `document.querySelector`로 기존 요소를 갱신합니다. 요소를 새로 만들지
않으므로 빌드 시 치환된 정적 메타와 런타임 메타가 항상 같은 슬롯을 씁니다.

## JSON-LD 구조화 데이터

- 홈: `Person`(GitHub 연결) + `WebSite` — 빌드 시 `index.html`에 주입
  (`id="jsonld-home"`)
- 프로젝트 상세: `CreativeWork`(name·url·description·image) — 라우트 전환 시
  `jsonld-home` 요소의 `textContent`만 교체합니다. 요소를 지우지 않아 어떤 라우트에서도
  갱신이 가능합니다.

데이터 생성은 `portfolio.js`의 `homeJsonLd`와 `projectJsonLd()`가 담당해
`vite.config.js`와 `App.svelte`가 같은 정의를 공유합니다.

## sitemap과 robots

`scripts/build-sitemap.mjs`가 빌드 후 `dist/`에 생성합니다.

- URL 목록은 `collectSitePaths(portfolio)`에서 파생됩니다 — 기본 경로(`/*`)와 영문 경로(`/en/*`)를 모두 포함하며, `published === true`인 프로젝트만 포함됩니다. 프로젝트를 비공개하면 sitemap에서도 자동으로 빠집니다.
- `robots.txt`는 전체 허용과 `Sitemap:` 라인만 포함합니다.
- 기준 URL은 `portfolio.site.url` 하나입니다. 도메인이 바뀌면 그 값만 수정합니다.

자세한 필드 명세는 [콘텐츠 SSOT 스펙](content-spec.md)을 확인하세요.

## favicon과 manifest

- `public/favicon.svg`: `</>` 형태 SVG 마크
- `public/manifest.webmanifest`: 앱 이름, 테마 컬러, 아이콘 선언
- `index.html`에서 각각 `rel="icon"`, `rel="manifest"`로 연결합니다.

## 점검 방법

```bash
npm run build
# dist/sitemap.xml, dist/robots.txt 생성 확인
npm run preview
# http://localhost:4173/projects/techzone 에서 메타 태그 확인
```

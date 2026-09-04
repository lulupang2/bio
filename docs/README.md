# 문서 목차

Bio 포트폴리오(`bio.jisung.lol`)의 구조와 운영을 설명하는 문서입니다.

| 문서 | 내용 |
| --- | --- |
| [콘텐츠 SSOT 스펙](content-spec.md) | 데이터 스키마, 프로젝트 필수 필드, i18n 확장 규칙, 무결성 제약 |
| [아키텍처](architecture.md) | 콘텐츠 SSOT 흐름, SPA 라우팅, 테마, 메타 주입 파이프라인 |
| [SEO와 메타데이터](seo.md) | sitemap·robots, JSON-LD, 동적 메타 갱신, favicon·manifest |
| [배포와 운영](deployment.md) | CI 파이프라인, Docker·nginx, Cloudflare Worker, 서버 구성 |
| [테스트와 품질 게이트](quality.md) | vitest 콘텐츠 무결성 테스트, dist 검증, CI 게이트 |

서버 백업·모니터링 스크립트 상세는 [ops/server/README.md](../ops/server/README.md)를
참고하세요.

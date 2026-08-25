import { portfolio as koreanPortfolio } from './portfolio.js';

const clone = (value) => structuredClone(value);

const phraseMap = new Map([
  ['문제 정의', 'Problem definition'],
  ['주요 구현', 'Key implementation'],
  ['검증과 경계', 'Validation and boundaries'],
  ['고객 경험과 운영 도메인을 이벤트로 연결했습니다.', 'Connected customer experience and operations through domain events.'],
  ['스토어와 관리자 앱은 Gateway를 통해 서비스에 접근하고, 구매 상태 전이는 도메인 서비스가 소유합니다. 서비스별 PostgreSQL과 RabbitMQ를 분리해 데이터 소유권과 비동기 처리를 명확히 했습니다.', 'The storefront and admin apps access services through a gateway, while domain services own purchase state transitions. Separate PostgreSQL schemas and RabbitMQ flows make ownership and asynchronous processing explicit.'],
  ['사용자와 운영자 진입점', 'Customer and operator entry points'],
  ['구매와 물류 상태 전이', 'Purchase and fulfillment state transitions'],
  ['소유권과 장애 복구', 'Ownership and failure recovery'],
  ['Product·Variant·SKU 기준을 Catalog와 Inventory 계약으로 통일했습니다.', 'Unified Product, Variant, and SKU semantics across the Catalog and Inventory contracts.'],
  ['Order가 Saga를 조정하고 각 서비스는 자신의 상태와 보상 작업을 소유합니다.', 'Order coordinates the Saga while each service owns its state and compensating actions.'],
  ['Outbox·Inbox와 DLQ로 메시지 중복과 일시 장애 후 복구를 검증했습니다.', 'Verified recovery from duplicate messages and transient failures with Outbox, Inbox, and DLQ.'],
  ['스토어부터 운영·데이터 계층까지 전체 토폴로지', 'Full topology from storefront to operations and data layers'],
  ['클라이언트, Gateway, 도메인 서비스, 메시징, 서비스별 저장소와 운영 계층을 위에서 아래로 배치했습니다. 화살표 라벨은 계층 사이의 주된 통신 방식과 상태 전달 경계를 의미합니다.', 'The topology maps clients, gateway, domain services, messaging, owned storage, and operations from top to bottom. Arrow labels show the primary communication method and state boundary between layers.'],
  ['상품 탐색 · 장바구니 · 주문', 'Product discovery · cart · checkout'],
  ['상품 · 주문 · 재고 · 배송 운영', 'Product · order · inventory · fulfillment operations'],
  ['웹 번들을 사용하는 하이브리드 앱', 'Hybrid app using the web bundle'],
  ['라우팅 · 요청 ID · Rate limit', 'Routing · request ID · rate limit'],
  ['Presigned URL과 정적 자산 전달', 'Presigned URLs and static asset delivery'],
  ['회원 · 세션 · 권한', 'Members · sessions · permissions'],
  ['상품 · Variant · SKU', 'Products · variants · SKUs'],
  ['게스트 · 회원 장바구니', 'Guest and member carts'],
  ['주문 스냅샷 · Saga', 'Order snapshot · Saga'],
  ['승인 · 취소 · 환불', 'Authorization · cancellation · refund'],
  ['예약 · 원장 · 창고', 'Reservation · ledger · warehouse'],
  ['출고 · 배송 · 반품', 'Fulfillment · delivery · returns'],
  ['공급사 · 발주 · 입고', 'Suppliers · purchase orders · receiving'],
  ['주문 상태 알림', 'Order status notifications'],
  ['검색 인덱스 · 필터', 'Search index · filters'],
  ['업로드 자산 메타데이터', 'Uploaded asset metadata'],
  ['운영 Projection · KPI', 'Operations projection · KPIs'],
  ['이벤트 라우팅 · 재시도 · DLQ', 'Event routing · retries · DLQ'],
  ['DB 트랜잭션과 메시지의 원자성', 'Atomicity between DB transactions and messages'],
  ['캐시 · 지연 작업 · 예약 만료', 'Cache · delayed jobs · reservation expiry'],
  ['서비스가 소유하는 독립 PostgreSQL 스키마', 'Independent PostgreSQL schemas owned by each service'],
  ['상품 이미지와 미디어 자산', 'Product images and media assets'],
  ['로그 · 메트릭 · 분산 추적', 'Logs · metrics · distributed tracing'],
  ['로컬·운영 배포 계약', 'Local and production delivery contract'],
  ['서비스별 데이터 소유권', 'Service-level data ownership'],
  ['다른 서비스 DB를 직접 읽지 않고 API·이벤트 계약으로 상태를 전달합니다.', 'Services exchange state through API and event contracts instead of reading another service database directly.'],
  ['동기와 비동기 분리', 'Synchronous and asynchronous boundaries'],
  ['사용자 응답은 REST로, 후속 처리와 Projection은 메시지 이벤트로 연결합니다.', 'User responses use REST; follow-up processing and projections use message events.'],
  ['복구 가능한 이벤트 처리', 'Recoverable event processing'],
  ['Outbox·Inbox·멱등 키·DLQ를 통해 중복과 일시 장애를 제어합니다.', 'Control duplicates and transient failures with Outbox, Inbox, idempotency keys, and DLQ.'],
  ['AI 협업 개발', 'AI-assisted development'],
  ['기획과 설계', 'Planning and architecture'],
  ['구현과 리팩터링', 'Implementation and refactoring'],
  ['검증과 문서화', 'Validation and documentation'],
  ['지진 수직 슬라이스 검증', 'Earthquake vertical-slice validation'],
  ['탐색 상태와 URL 설계', 'Exploration state and URL design'],
  ['실시간 복구와 계약 자동화', 'Realtime recovery and contract automation'],
  ['재현 가능한 검증 환경', 'Reproducible verification environment'],
  ['포트폴리오 증거 정리', 'Portfolio evidence and documentation'],
  ['아이디어에서 운영 가능한 커머스까지', 'From idea to an operable commerce platform'],
  ['지진 피드에서 복구 가능한 데이터 제품까지', 'From an earthquake feed to a recoverable data product'],
  ['Variant 예약 · 원장', 'Variant reservation · ledger'],
  ['멱등성 · 재시도', 'Idempotency · retries'],
  ['수집 원본과 실시간 신호를 분리해 복구 가능한 흐름을 만들었습니다.', 'Separated ingestion source data from realtime signals to build a recoverable flow.'],
  ['USGS 원본은 Celery가 멱등 수집해 PostGIS에 저장합니다. FastAPI는 REST 스냅샷과 작은 WebSocket 변경 신호를 분리하고, 웹은 마지막 sequence 이후를 REST로 보충해 연결 중단을 복구합니다.', 'Celery idempotently ingests the USGS source into PostGIS. FastAPI separates REST snapshots from compact WebSocket change signals, while the web client catches up through REST after the last sequence.'],
  ['조건부 요청과 멱등 저장', 'Conditional requests and idempotent writes'],
  ['60초 수집 · 정규화', '60-second ingestion · normalization'],
  ['지진 원본 · 공간 질의', 'Earthquake source · spatial queries'],
  ['스냅샷과 변경 신호 분리', 'Snapshot and change-signal separation'],
  ['URL 상태와 재연결 복구', 'URL state and reconnect recovery'],
  ['시간 · 규모 · 깊이', 'Time · magnitude · depth'],
  ['Last sequence 이후 복구', 'Recovery after the last sequence'],
  ['3D · 2D 지도 시각화', '3D · 2D map visualization'],
  ['PostgreSQL을 영속 원본으로, Redis를 잠금·브로커·실시간 전달 계층으로 분리했습니다.', 'PostgreSQL is the durable source of truth; Redis is isolated for locks, brokering, and realtime delivery.'],
  ['WebSocket은 전체 데이터를 보내지 않고 변경 sequence만 전달해 전송량을 줄였습니다.', 'WebSocket sends only change sequences instead of the full dataset to reduce transfer size.'],
  ['FastAPI OpenAPI에서 TypeScript client를 생성해 Python과 웹의 계약 drift를 차단했습니다.', 'Generated the TypeScript client from FastAPI OpenAPI to prevent contract drift between Python and the web.'],
  ['외부 피드에서 실시간 지도까지 전체 토폴로지', 'Full topology from external feed to realtime map'],
  ['USGS 원본 수집, 비동기 처리, PostGIS 원본 저장, REST·WebSocket 전달과 지도 렌더링을 계층별로 분리했습니다. 각 연결 라벨은 다음 계층에 전달되는 데이터의 형태를 보여줍니다.', 'Separated USGS ingestion, asynchronous processing, PostGIS storage, REST/WebSocket delivery, and map rendering by layer. Connection labels show the shape of data passed to the next layer.'],
  ['최근 지진 GeoJSON 원본', 'Recent earthquake GeoJSON source'],
  ['주기 수집 스케줄', 'Scheduled ingestion'],
  ['정규화 · 중복 판단 · upsert', 'Normalization · deduplication · upsert'],
  ['지진 사건 · geometry · sequence', 'Earthquake events · geometry · sequence'],
  ['재연결 catch-up 기준점', 'Reconnect catch-up cursor'],
  ['목록 · 통계 · 상세 · catch-up', 'List · stats · detail · catch-up'],
  ['작은 변경 sequence 알림', 'Compact change-sequence signal'],
  ['OpenAPI 기반 TypeScript 계약', 'OpenAPI-based TypeScript contract'],
  ['SSR shell · 탐색 화면 · 상세', 'SSR shell · exploration · detail'],
  ['시간 · 규모 · 깊이 상태 보존', 'Persisted time · magnitude · depth state'],
  ['3D·2D 지도와 지진 레이어', '3D/2D map and earthquake layers'],
  ['API · Worker · DB · Redis 재현', 'Reproducible API · worker · DB · Redis'],
  ['Python·API·웹·브라우저 검증', 'Python · API · web · browser verification'],
  ['동일 의존성과 API 계약 재생성', 'Recreated contracts with identical dependencies'],
  ['영속 원본과 실시간 계층 분리', 'Separate durable source and realtime layer'],
  ['PostgreSQL은 사실의 원본, Redis는 작업·잠금·신호 전달 역할만 담당합니다.', 'PostgreSQL is the source of truth; Redis handles jobs, locks, and signal delivery only.'],
  ['전체 데이터는 REST로 받고 WebSocket은 변경 sequence만 전달합니다.', 'The full snapshot arrives over REST; WebSocket carries change sequences only.'],
  ['계약 기반 프론트엔드', 'Contract-driven frontend'],
  ['제품 범위와 비범위, 기술 선택과 상태의 소유자를 결정했습니다. AI가 제안한 코드는 타입·계약·브라우저 테스트와 실제 화면 검토를 거쳐 수정하거나 제외했으며, 검증되지 않은 운영 성능은 프로젝트 범위에서 명시적으로 분리했습니다.', 'I decided the product scope, non-scope, technology choices, and state ownership. AI suggestions were amended or rejected after type, contract, browser, and visual review; unverified production performance stays explicitly out of scope.'],
  ['아이디어 탐색, 구현 초안, 오류 분석과 문서 구조화에 AI를 활용하고, 각 결과는 Prototype → Plan → Autopilot → Review 사이클의 실행 결과로 검토했습니다.', 'I used AI for ideation, implementation drafts, error analysis, and documentation structure, then reviewed each result through the Prototype → Plan → Autopilot → Review cycle.'],
  ['서비스 방향과 우선순위, 기술 선택과 서비스 경계를 결정하고 AI가 제안한 결과를 검토했습니다. 실제 사용자 흐름과 통합 테스트 결과를 확인하며 수정 방향과 최종 수용 여부를 판단했습니다.', 'I set service direction, priorities, technology choices, and boundaries, then reviewed AI proposals against user flows and integration tests before accepting them.'],
  ['대화로 요구사항을 구체화하고 PRD·SSOT·아키텍처와 데이터 모델 초안을 반복해서 정리했습니다.', 'Structured requirements through conversation and iterated on PRD, SSOT, architecture, and data-model drafts.'],
  ['화면과 API 코드 초안, 구조 전환과 반복 작업에 활용하고 서비스 경계에 맞게 검토·수정했습니다.', 'Used AI for UI/API drafts, structural changes, and repetitive work, then reviewed and adapted the output to service boundaries.'],
  ['통합·보안·E2E·장애 복구 시나리오와 로그 분석을 보조받고 결과를 기준으로 결함을 보완했습니다.', 'Used AI to assist with integration, security, E2E, recovery scenarios, and log analysis, then fixed defects based on the results.'],
  ['문제와 범위 정의', 'Problem and scope definition'],
  ['시각 중심의 포트폴리오 아이디어를 Tech·IT 커머스로 구체화하고, 고객 경험과 MSA 역량을 함께 보여주는 범위를 정했습니다.', 'Turned a visual portfolio idea into a technology-focused commerce product and defined a scope that demonstrates both customer experience and MSA capability.'],
  ['고객 구매 경험 구축', 'Building the customer purchase experience'],
  ['SPA 프로토타입에서 Next.js App Router 기반 스토어로 전환하고 탐색, 상품 상세, 장바구니, 견적, 주문과 비회원 조회를 연결했습니다.', 'Moved from an SPA prototype to a Next.js App Router storefront and connected discovery, product detail, cart, quote, checkout, and guest order lookup.'],
  ['NestJS MSA 전환', 'Transitioning to a NestJS MSA'],
  ['Gateway와 도메인 서비스를 실제 NestJS 구조로 분리하고 Drizzle ORM과 서비스별 PostgreSQL 소유권을 적용했습니다.', 'Separated the gateway and domain services into a real NestJS structure with Drizzle ORM and service-owned PostgreSQL schemas.'],
  ['OMS/WMS 운영 모델 확장', 'Expanding the OMS/WMS operating model'],
  ['상품 Variant·SKU, 다중 창고, 재고 원장, 주문·결제, 출고·배송·반품, 공급사·발주와 관리자 조회 모델을 구현했습니다.', 'Implemented product variants/SKUs, multi-warehouse inventory ledgers, order/payment, fulfillment/delivery/returns, procurement, and admin query models.'],
  ['신뢰성과 보안 강화', 'Strengthening reliability and security'],
  ['재고 선점 경쟁과 예약 만료를 보완하고 Outbox·Inbox, 멱등성, 재시도·DLQ, RBAC, JWT/JWKS와 CSRF를 적용했습니다.', 'Handled inventory reservation races and expiry, then applied Outbox/Inbox, idempotency, retries/DLQ, RBAC, JWT/JWKS, and CSRF.'],
  ['성능과 운영 검증', 'Performance and operations validation'],
  ['React Query·Zustand 상태 경계를 정리하고 Redis 캐시, BullMQ, 구조화 로그와 관측성을 더한 뒤 통합·E2E·장애 복구를 검증했습니다.', 'Clarified React Query/Zustand state boundaries, added Redis cache, BullMQ, structured logs, and observability, then verified integration, E2E, and recovery.'],
  ['지진 수직 슬라이스 검증', 'Validating the earthquake vertical slice'],
  ['USGS 최근 지진 피드를 Celery로 수집하고 PostGIS에 멱등 저장한 뒤 FastAPI REST·WebSocket과 MapLibre/deck.gl 지도까지 연결했습니다.', 'Collected the latest USGS earthquake feed with Celery, stored it idempotently in PostGIS, and connected FastAPI REST/WebSocket to a MapLibre/deck.gl map.'],
  ['시간·규모·깊이 필터를 목록·지도·통계에 동시에 반영하고 URL을 상태 기준으로 사용해 새로고침과 링크 공유를 지원했습니다.', 'Applied time, magnitude, and depth filters to the list, map, and stats while using the URL as the state source for refresh and link sharing.'],
  ['전체 데이터 대신 작은 변경 신호를 전달하고 마지막 sequence 이후를 REST로 복구했습니다. FastAPI에서 OpenAPI와 TypeScript client를 생성해 drift를 차단했습니다.', 'Sent compact change signals instead of the full dataset and recovered after the last sequence through REST. Generated OpenAPI and the TypeScript client from FastAPI to block drift.'],
  ['uv.lock으로 Python 의존성을 고정하고 Python 3.12·3.13, API 컨테이너, 웹·브라우저 검증을 GitHub Actions에서 분리 실행했습니다.', 'Pinned Python dependencies with uv.lock and ran Python 3.12/3.13, API container, web, and browser verification as separate GitHub Actions jobs.'],
  ['프로젝트 브리프와 Build Log에 문제, 판단 기준, 결함과 보류 범위를 기록하고 apps/web·apps/api·packages/api-client 모노레포 경계를 정리했습니다.', 'Recorded problems, decision criteria, defects, and deferred scope in the project brief and Build Log, then clarified the apps/web, apps/api, and packages/api-client monorepo boundaries.'],
  ['TECHZONE 고객 화면, 주문 Saga, 데이터와 운영 조회로 구성된 아키텍처', 'TECHZONE architecture with customer screens, Order Saga, data, and operations queries'],
  ['TECHZONE 전체 시스템 토폴로지', 'TECHZONE full system topology'],
  ['QuakeCurrent 수집, 실시간 전달, 지도 경험으로 구성된 아키텍처', 'QuakeCurrent architecture with ingestion, realtime delivery, and map experience'],
  ['QuakeCurrent 전체 시스템 토폴로지', 'QuakeCurrent full system topology'],
  ['FastAPI OpenAPI에서 TypeScript client를 생성해 API 모델 차이를 차단합니다.', 'Generate the TypeScript client from FastAPI OpenAPI to prevent API model drift.'],
  ['Codex와 Antigravity를 활용한 AI 협업 개발', 'AI-assisted development with Codex and Antigravity'],
  ['요구사항 구조화, UI 시안 탐색, 코드 초안과 반복 리팩터링, 테스트 시나리오 작성과 오류 분석 보조에 AI 도구를 활용했습니다.', 'Used AI tools to structure requirements, explore UI directions, draft code, iterate on refactors, write test scenarios, and analyze errors.'],
  ['Codex를 활용한 반복형 개발과 검토', 'Iterative development and review with Codex'],
  ['지진 수직 슬라이스의 화면과 API 초안을 빠르게 만들고 가장 큰 기술 위험을 확인했습니다.', 'Rapidly built the UI and API draft for the earthquake vertical slice and tested the highest-risk assumptions.'],
  ['OpenAPI 생성, URL 필터 E2E와 CI 반복 작업의 구현·테스트 초안을 보조받았습니다.', 'Used AI assistance for OpenAPI generation, URL-filter E2E, CI automation, and test drafts.'],
  ['지도 로딩, WebSocket 재연결, 경계값 오류를 분석하고 수정 결과를 다시 검증했습니다.', 'Analyzed map loading, WebSocket reconnects, and boundary-value bugs, then re-validated the fixes.'],
]);

const translateDeep = (value) => {
  if (typeof value === 'string') return phraseMap.get(value) ?? value;
  if (Array.isArray(value)) return value.map(translateDeep);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, translateDeep(child)]));
  }
  return value;
};

const englishProjects = (projects) => projects.map((project, index) => {
  const translated = translateDeep(project);
  if (index === 0) {
    Object.assign(translated, {
      status: 'CASE STUDY · LIVE',
      coverAlt: 'TECHZONE storefront home screen',
      category: '01 · COMMERCE · OMS/WMS · MSA',
      cardBadge: 'SCALABLE ARCHITECTURE',
      caseStudyLabel: 'View case study',
      pendingMessage: 'Case study coming soon.',
      summary: 'Built and validated a commerce system where storefront and admin operations connect orders, payments, inventory, fulfillment, delivery, and returns across an event-driven MSA.',
      problem: 'The goal was more than a storefront: product options, orders, payments, inventory reservations, fulfillment, delivery, returns, and operational metrics had to remain consistent across service boundaries.',
      screenshots: [
        { src: '/techzone/storefront-home.png', alt: 'TECHZONE storefront home screen', caption: 'Storefront · CMS-based product discovery', width: 1440, height: 1100 },
        { src: '/techzone/storefront-product-detail.png', alt: 'TECHZONE product detail screen', caption: 'Product detail · Variant and conversion information', width: 1440, height: 1100 },
        { src: '/techzone/admin-dashboard.png', alt: 'TECHZONE admin dashboard', caption: 'Admin CMS · OMS/WMS operating metrics', width: 1440, height: 1100 },
      ],
      highlights: [
        'Built storefront and admin OMS/WMS as independent Next.js applications',
        'Separated Product, Variant, and SKU while standardizing Variant as the inventory unit',
        'Implemented an Order → Payment → Inventory reservation → Fulfillment → Delivery → Returns/Refund Saga',
        'Applied transactional Outbox, Inbox, idempotency, retries, and DLQ',
        'Separated KPI and operational list queries with an Admin Query Projection',
        'Separated server state and UI state with TanStack Query and Zustand',
        'Applied RBAC, audit logs, CSRF, JWT/JWKS, and rate limiting',
        'Defined Docker Compose, Kubernetes, and GitHub Actions delivery contracts',
      ],
      validation: [
        'Integration tests for member/guest purchase flows and price/inventory changes',
        'Recovery verification after RabbitMQ, PostgreSQL, Order, and Inventory failures',
        'Playwright E2E, accessibility, Lighthouse performance, and SEO gates',
        'OpenTelemetry, Prometheus, Tempo, Loki, and Grafana observability stack',
      ],
      detail: { ...translated.detail, backLabel: 'Portfolio', repositoryLabel: 'GitHub', liveLabel: 'Live Demo', eyebrow: 'FEATURED CASE STUDY', problemLabel: '01 · PROBLEM', problemTitle: 'Problem definition', architectureLabel: '02 · ARCHITECTURE', topologyLabel: '03 · SYSTEM TOPOLOGY', processLabel: '04 · PROCESS', processTitle: 'From idea to an operable commerce platform', buildLabel: '05 · BUILD', buildTitle: 'Key implementation', aiLabel: '06 · AI COLLABORATION', validationLabel: '07 · VALIDATION', validationTitle: 'Validation and boundaries' },
    });
  } else {
    Object.assign(translated, {
      status: 'CASE STUDY · LIVE',
      coverAlt: 'QuakeCurrent earthquake data project brief',
      category: '02 · REALTIME DATA · MAP · FULL STACK',
      cardBadge: 'RECOVERABLE DATA FLOW',
      caseStudyLabel: 'View case study',
      pendingMessage: 'Case study coming soon.',
      summary: 'A full-stack data prototype that collects and normalizes USGS earthquake feeds every 60 seconds, then connects REST snapshots and recoverable WebSocket signals to a 2D/3D map.',
      problem: 'The hard part was not drawing earthquakes on a map. Duplicate ingestion, missed updates during reconnects, and contract drift between the Python API and TypeScript UI could break the experience first.',
      screenshots: [
        { src: '/quakecurrent/project-cover.webp', alt: 'QuakeCurrent project brief and globe visual', caption: 'Project brief · Problem and data product scope', width: 1731, height: 909 },
        { src: '/quakecurrent/workflow.webp', alt: 'QuakeCurrent development workflow visual', caption: 'Workflow · Prototype → Plan → Autopilot → Review', width: 1731, height: 909 },
        { src: '/quakecurrent/prototype.webp', alt: 'QuakeCurrent earthquake observation prototype', caption: 'Cycle 01 · Earthquake vertical-slice prototype', width: 1731, height: 909 },
      ],
      highlights: [
        'Collected USGS feeds with conditional requests and idempotent upserts by source + external_id',
        'Used PostgreSQL as the durable source of truth and Redis for locks, broker, and Pub/Sub',
        'Separated REST snapshots from compact WebSocket signals and recovered by sequence',
        'Preserved time, magnitude, and depth filters in the URL for shareable state',
        'Built FastAPI → OpenAPI → TypeScript generation with two drift gates',
        'Verified Python 3.12/3.13 and containers consume the same uv.lock',
        'Organized the monorepo around apps/web, apps/api, and packages/api-client',
      ],
      validation: [
        '14 web model, 12 API client, 15 FastAPI, 4 SSR, and 10 browser tests passed locally',
        'Public CI passed for Python 3.12/3.13 API contracts, API container, and web URL filters',
        'Two FastAPI → OpenAPI → TypeScript contract drift gates passed',
        'Repeated fixture ingestion produced zero new events and zero change signals',
      ],
      detail: { ...translated.detail, backLabel: 'Portfolio', repositoryLabel: 'GitHub', liveLabel: 'Live Demo', eyebrow: 'FULL-STACK DATA CASE STUDY', problemLabel: '01 · PROBLEM', problemTitle: 'Problem definition', architectureLabel: '02 · ARCHITECTURE', topologyLabel: '03 · SYSTEM TOPOLOGY', processLabel: '04 · PROCESS', processTitle: 'From an earthquake feed to a recoverable data product', buildLabel: '05 · BUILD', buildTitle: 'Key implementation', aiLabel: '06 · AI COLLABORATION', validationLabel: '07 · VALIDATION', validationTitle: 'Validation and boundaries' },
    });
  }
  return translated;
});

export const getPortfolio = (locale = 'ko') => {
  if (locale !== 'en') return koreanPortfolio;
  const english = clone(koreanPortfolio);
  english.site = {
    ...english.site,
    title: 'Developer Portfolio',
    description: 'A developer portfolio focused on building interfaces and designing the flow of complete services with React and Next.js.',
    socialDescription: 'Designing polished interfaces and the systems that make them work.',
    socialTech: 'React · Next.js · NestJS · FastAPI',
    locale: 'en_US',
    navigation: [
      { label: 'INTRODUCTION', href: '#top' }, { label: 'ABOUT', href: '#about' }, { label: 'TOOLKIT', href: '#skills' },
      { label: 'EXPERIENCE', href: '#experience' }, { label: 'PROJECTS', href: '#projects' }, { label: 'EDUCATION', href: '#education' }, { label: 'CONTACT', href: '#contact' },
    ],
    labels: { skipLink: 'Skip to content', navigation: 'Primary navigation', githubAria: 'Open GitHub in a new tab', lightTheme: 'Switch to light theme', darkTheme: 'Switch to dark theme', proof: 'Experience summary', backToTop: 'Back to top', notFoundPageTitle: 'Page not found' },
    footer: 'DESIGNED & BUILT AS A FULL-STACK PORTFOLIO / © 2026',
  };
  english.profile = {
    ...english.profile,
    position: 'A frontend developer expanding into full-stack',
    positionLines: ['A frontend developer', 'expanding into full-stack'],
    intro: 'I build web and mobile interfaces with React, Next.js, and React Native. Through TECHZONE commerce operations and the QuakeCurrent realtime data pipeline, I have expanded into backend and data systems.',
    actions: { project: 'View projects', github: 'GitHub' },
    proof: [{ value: '11 mo.', label: 'Frontend practice' }, { value: '5', label: 'Production projects' }, { value: '2', label: 'Full-stack case studies' }],
    about: ['I have built interfaces for commerce, expert matching, reservations, and mobile applications with React, Next.js, and React Native. I connect real service capabilities such as accounts, orders, payments, search, and tickets through REST APIs.', 'In TECHZONE, I connected orders to payment, inventory, fulfillment, delivery, and returns. In QuakeCurrent, I connected ingestion to REST, WebSocket, and 2D/3D mapping. I care about service boundaries and recovery, not just the surface.'],
    principles: [{ title: 'Start with the user flow', description: 'Define what users need to see and do before choosing the technology.' }, { title: 'Make boundaries explicit', description: 'Separate UI state, server state, and data ownership so the system can evolve safely.' }, { title: 'Leave verifiable evidence', description: 'Use builds, tests, performance checks, and recovery scenarios to support implementation decisions.' }],
  };
  english.sections = {
    about: { label: '01 · ABOUT', title: ['I build web and mobile interfaces', 'and connect them to real services.'] },
    skills: { label: '02 · EXPERTISE', title: ['From interfaces to data processing,', 'these are the tools I use.'], summary: 'I build interfaces with React, Next.js, and React Native, and service flows with NestJS, PostgreSQL, Redis, and RabbitMQ.' },
    experience: { label: '03 · SELECTED EXPERIENCE', title: ['Across five production projects,', 'I built interfaces and core features.'], summary: 'I worked on authentication, payments, search, and admin features across commerce, mobile, matching, and reservation services.' },
    project: { label: '04 · SELECTED PROJECTS', title: ['I built commerce operations and realtime data flows', 'from the first screen to the system boundary.'] },
    education: { label: '05 · EDUCATION' },
    contact: { label: 'CONTACT', title: ['Explore the projects and code', 'on GitHub.'], linkLabel: 'GitHub' },
  };
  english.skills = [{ id: 'frontend', kicker: '01 · USER EXPERIENCE', title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'React Native', 'TanStack Query', 'MapLibre · deck.gl'] }, { id: 'backend', kicker: '02 · SERVICE FLOW', title: 'Backend', items: ['NestJS', 'FastAPI', 'REST · WebSocket', 'JWT · RBAC', 'MSA', 'OpenAPI'] }, { id: 'data', kicker: '03 · CONSISTENCY', title: 'Data & Messaging', items: ['PostgreSQL · PostGIS', 'Drizzle ORM', 'Redis', 'RabbitMQ', 'Celery', 'Outbox · Inbox'] }, { id: 'devops', kicker: '04 · DELIVERY', title: 'DevOps & Quality', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'OpenTelemetry', 'Playwright', 'Lighthouse'] }];
  english.experience = { projects: [{ title: 'Ethereum-based specialist commerce platform', period: '2022.03 — 04', description: 'Built admin screens with React and implemented member, token, and order management through REST APIs.', tags: ['React', 'REST API', 'Admin'] }, { title: 'Blockchain-based commerce mobile app', period: '2022.04 — 05', description: 'Renewed the design of a released Android/iOS app and rebuilt its flows with TypeScript and React Native.', tags: ['React Native', 'TypeScript', 'Android · iOS'] }, { title: 'Wi-Fi device rewards application', period: '2022.06 — 09', description: 'Owned the React Native mobile frontend and implemented Android/iOS user flows.', tags: ['React Native', 'Mobile', 'API Integration'] }, { title: 'Expert matching platform', period: '2022.09 — 12', description: 'Built responsive Next.js web/mobile screens, PG payments, catalog/detail flows, and SEO foundations.', tags: ['Next.js', 'Responsive', 'Payment', 'SEO'] }, { title: 'NFT-based concert reservation platform', period: '2022.12', description: 'Implemented search, login, access tokens, tickets, settings, and profile screens with React.', tags: ['React', 'Token Auth', 'Reservation'] }] };
  english.education = { school: 'Korea National Open University', major: 'Computer Science', period: '2024.03 —', status: 'Currently enrolled' };
  english.projects = englishProjects(koreanPortfolio.projects);
  english.notFound = { code: '404', title: 'This page is not public.', description: 'The requested case study does not exist or has not been published yet.', backLabel: 'Back to portfolio' };
  return english;
};

export const localeFromPath = (pathname) => pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'ko';
export const stripLocale = (pathname) => {
  const stripped = pathname.replace(/^\/en(?=\/|$)/, '');
  return stripped || '/';
};
export const localizedPath = (path, locale = 'ko') => locale === 'en' ? `/en${path === '/' ? '' : path}` : path;

import { portfolio as koreanPortfolio } from './portfolio.js';
import { erpEn } from './erp.js';
import { summergearEn } from './summergear.js';
import { pricepulseEn } from './pricepulse.js';
import { grantfitEn } from './grantfit.js';
import { roomRepairEn } from './roomrepair.js';

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
  ['쇼핑몰을 만들며 익힌 화면과 서버의 연결', 'Learning to connect a storefront and its backend'],
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
  ['TECHZONE 고객 화면, 주문 Saga, 데이터와 운영 조회로 구성된 아키텍처', 'TECHZONE architecture with customer screens, Order Saga, data, and operations queries'],
  ['TECHZONE 전체 시스템 토폴로지', 'TECHZONE full system topology'],
  ['QuakeCurrent 수집, 실시간 전달, 지도 경험으로 구성된 아키텍처', 'QuakeCurrent architecture with ingestion, realtime delivery, and map experience'],
  ['QuakeCurrent 전체 시스템 토폴로지', 'QuakeCurrent full system topology'],
  ['FastAPI OpenAPI에서 TypeScript client를 생성해 API 모델 차이를 차단합니다.', 'Generate the TypeScript client from FastAPI OpenAPI to prevent API model drift.'],
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
  if (project.slug === 'assembly-erp') return clone(erpEn);
  if (project.slug === 'summergear') return clone(summergearEn);
  if (project.slug === 'pricepulse') return clone(pricepulseEn);
  if (project.slug === 'grantfit') return clone(grantfitEn);
  if (project.slug === 'room-repair') return clone(roomRepairEn);
  const translated = translateDeep(project);
  if (project.slug === 'techzone' || index === 0) {
    Object.assign(translated, {
      ai: {
        "label": "AI-ASSISTED DEVELOPMENT",
        "title": "Where I used AI and what I checked",
        "tools": [
          "Codex",
          "Antigravity"
        ],
        "summary": "I used Codex and Antigravity to draft requirements, screens, and APIs, and to help with repeated edits and test cases. I decided what to keep by checking the project's data flow and execution results.",
        "responsibility": "I reviewed design decisions such as which service changes an order, payment, or inventory record and how retries work against the documentation and tests. Generated code was not treated as finished without checking purchase flows and recovery behavior.",
        "uses": [
          {
            "title": "Requirements drafts",
            "description": "Used AI to outline checkout, delivery, and returns and identify missing states. I revised those drafts against the PRD and data model."
          },
          {
            "title": "UI and API drafts",
            "description": "Used AI for components, API drafts, and repetitive structural changes, then reviewed data ownership and request/response shapes."
          },
          {
            "title": "Tests and error analysis",
            "description": "Used assistance for duplicate-request, redelivery, and recovery test cases and log analysis. Changes were followed by the relevant checks."
          }
        ]
      },
      process: [
        {
          "step": "01",
          "title": "Use the selected variant throughout checkout",
          "description": "Different colors or capacities can have different prices and stock. I kept product descriptions on Product and used Variant for carts, order snapshots, and inventory. Before checkout, the server quote API recalculates prices, discounts, shipping, and available stock.",
          "outputs": [
            "Product / Variant",
            "Server quote"
          ]
        },
        {
          "step": "02",
          "title": "Share storefront screens between web and Android",
          "description": "I moved the SPA prototype into a Next.js storefront and connected browsing, checkout, and order lookup. The web build uses SSR and product metadata; Android uses a Capacitor build of the same customer screens. This reduces duplicated UI code, with limits on native-specific interactions.",
          "outputs": [
            "Next.js SSR",
            "Capacitor",
            "Shared storefront"
          ]
        },
        {
          "step": "03",
          "title": "Give each service ownership of its data",
          "description": "I separated order, payment, inventory, and other NestJS services behind a gateway. Each service manages its own PostgreSQL data and exchanges state through APIs and events instead of changing another service's tables. The split provides more to study, but also makes the local stack and failure tracing more complicated.",
          "outputs": [
            "NestJS",
            "Service-owned data",
            "APIs / Events"
          ]
        },
        {
          "step": "04",
          "title": "Build a separate read model for admin screens",
          "description": "Admin Query maintains lists and aggregates from domain events, rather than making the dashboard call every service for each view. This introduces a delay between a source update and the displayed result. I included source-total comparisons and a projection rebuild procedure to check that read model.",
          "outputs": [
            "Admin Query",
            "Projection",
            "Source-total checks"
          ]
        },
        {
          "step": "05",
          "title": "Handle the gap between saving and publishing",
          "description": "An order can be committed before its event reaches RabbitMQ. I write the domain change and outbox record in one transaction, then mark publication complete only after broker confirmation. Consumers deduplicate by inbox event ID, while command APIs use idempotency keys for retries.",
          "outputs": [
            "Outbox / Inbox",
            "Publisher confirm",
            "Idempotency keys"
          ]
        },
        {
          "step": "06",
          "title": "Test checkout separately from failure recovery",
          "description": "Integration tests cover member and guest checkout, changed prices, and duplicate requests. Resilience tests stop RabbitMQ, commit an order, then restart the broker to check outbox delivery and Saga recovery. Payment, shipping, and SMS use mock adapters, so these checks do not establish real provider integration.",
          "outputs": [
            "Checkout tests",
            "RabbitMQ recovery",
            "Mock adapters"
          ]
        }
      ],
      status: 'PERSONAL LEARNING PROJECT',
      coverAlt: 'TECHZONE storefront home screen',
      gallery: {
        ...translated.gallery,
        tagline: 'From product discovery to orders and returns',
        summary: 'Built product browsing, checkout, inventory, and fulfillment features to practice data flow and failure recovery across services.',
        alt: 'TECHZONE storefront product discovery screen',
        caption: 'Storefront demo · Product discovery',
      },
      category: '01 · COMMERCE · OMS/WMS · MSA',
      cardBadge: 'SCALABLE ARCHITECTURE',
      caseStudyLabel: 'View case study',
      pendingMessage: 'Case study coming soon.',
      summary: 'A personal project for learning how to build a commerce system. I connected product browsing, orders, payments, inventory, fulfillment, and returns, then tested event handling and failure recovery between services.',
      problem: "This personal project follows an order through payment, stock reservation, and fulfillment. The main concerns are consistent variant pricing and stock, plus missing or duplicate events after an order is saved. Payments use a mock adapter rather than a real payment provider.",
      screenshots: [
        { src: '/techzone/storefront-home.png', alt: 'TECHZONE storefront home screen', caption: 'Storefront demo · CMS-based product discovery', width: 1440, height: 1100 },
        { src: '/techzone/storefront-product-detail.png', alt: 'TECHZONE product detail screen', caption: 'Product detail demo · Options and purchase information', width: 1440, height: 1100 },
        { src: '/techzone/admin-dashboard.png', alt: 'TECHZONE admin dashboard', caption: 'Admin demo · Order and inventory metrics', width: 1440, height: 1100 },
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
        'Implementation record: integration tests for member/guest checkout, changed prices and stock, and duplicate requests',
        'Failure scenario: outbox redelivery and order Saga recovery after a RabbitMQ outage',
        'Playwright checkout, accessibility, and Lighthouse checks configured; these are not real-user performance measurements',
        'OpenTelemetry and Grafana tooling configured for logs, metrics, and distributed traces',
        'Payment, shipping, and SMS use mock adapters; this does not verify real provider approvals or deliveries',
      ],
      role: { summary: 'Designed and implemented the Next.js storefront, NestJS domain services, RabbitMQ event architecture, and local deployment configuration as a solo engineer.', items: ['Built independent Next.js storefront and admin CMS applications', 'Implemented NestJS domain services for Catalog, Cart, Order, and Stock with API Gateway routing', 'Designed RabbitMQ choreography Saga orchestration with Transactional Outbox and Inbox patterns', 'Modeled Variant-based stock reservation, order confirmation, payment approval, and returns state transitions', 'Orchestrated local distributed services using Docker Compose and Kubernetes manifests'] },
      decisions: [
        { title: 'Choreography Saga for Distributed Workflows', context: 'A centralized orchestrator can become a single point of failure and increase coupling between commerce services.', decision: 'Each domain service subscribes to RabbitMQ events and owns its local state transitions.', impact: 'Removed synchronous cross-service dependencies and enabled asynchronous workflow coordination.' },
        { title: 'Independent Database Ownership per Domain Service', context: 'Shared databases make schema changes across service boundaries dependent and difficult to deploy independently.', decision: 'Assigned separate PostgreSQL databases to Order, Catalog, and Stock services and disallowed direct cross-service access.', impact: 'Maintained domain ownership and independent migration boundaries.' },
        { title: 'Temporary Inventory Reservation before Payment', context: 'Deducting stock before payment risks inconsistencies on abandonment, while waiting until payment can permit overselling.', decision: 'Reserved stock at order acceptance and committed the deduction after payment confirmation.', impact: 'Provides an explicit reservation and release path for concurrent order scenarios.' },
      ],
      troubleshooting: [
        { title: 'Compensating for a Failed Saga Step', problem: 'A payment failure after order acceptance can leave reserved inventory unavailable.', cause: 'Distributed workflows cannot rely on a shared transaction across services.', solution: 'The design publishes an order-cancelled compensation event after payment failure for the Stock service to release the reservation; validation uses the configured mock adapters.' },
        { title: 'Duplicate Event Delivery', problem: 'At-least-once RabbitMQ delivery can present the same payment completion event more than once.', cause: 'A consumer acknowledgement may be lost during a network interruption, causing broker redelivery.', solution: 'The Inbox pattern records event identifiers transactionally so a previously processed event is ignored on redelivery.' },
      ],
      outcome: { summary: 'Implemented a portfolio commerce system for practicing order, inventory, and fulfillment workflows across microservices.', results: ['Built independent storefront and operations applications with asynchronous domain-service flows', 'Configured mock payment and shipping adapters and documented their verification boundaries', 'Recorded integration and failure-recovery scenarios for duplicate requests and message redelivery'], learnings: ['Distributed systems require explicit compensation and idempotency, not only a successful-path workflow', 'Mock-provider checks do not demonstrate real payment authorization or shipping integration'] },
      detail: { ...translated.detail, backLabel: 'Portfolio', repositoryLabel: 'GitHub', liveLabel: 'Live Demo', eyebrow: 'PERSONAL PROJECT · COMMERCE', problemLabel: '01 · PROBLEM', problemTitle: 'Problem definition', roleLabel: '02 · ROLE & SCOPE', roleTitle: 'Solo Full-Stack Architecture and Implementation', architectureLabel: '03 · ARCHITECTURE', topologyLabel: '04 · SYSTEM TOPOLOGY', processLabel: '05 · PROCESS', processTitle: 'Learning to connect a storefront and its backend', decisionsLabel: '06 · TECHNICAL DECISIONS', decisionsTitle: 'Architecture Decisions for Distributed Workflows', troubleshootingLabel: '07 · TROUBLESHOOTING', troubleshootingTitle: 'Recovery Scenarios and Idempotency', buildLabel: 'BUILD HIGHLIGHTS', buildTitle: 'Key implementation', aiLabel: 'AI COLLABORATION', validationLabel: 'VALIDATION', validationTitle: 'Tests and observations', outcomeLabel: '08 · RESULTS & RETROSPECTIVE', outcomeTitle: 'Outcomes and Limitations' },
    });
  } else if (project.slug === 'quakecurrent' || index === 1) {
    Object.assign(translated, {
      ai: {
        "label": "AI-ASSISTED DEVELOPMENT",
        "title": "Using Codex for drafts and debugging",
        "tools": [
          "Codex"
        ],
        "summary": "I used Codex to draft ingestion and map code, write tests, and analyze errors. Work started with a small feed-to-screen flow, followed by checks and revisions to filters and reconnection behavior.",
        "responsibility": "I defined the API contract, URL state, and recovery sequence rules and reviewed the proposed code. Passing type checks did not replace checking map loading and reconnection in a browser.",
        "uses": [
          {
            "title": "The first connected flow",
            "description": "Used assistance to draft the USGS-to-API-to-map path and inspect how data changes between stages."
          },
          {
            "title": "Repeatable checks",
            "description": "Used AI for OpenAPI generation, filter tests, and CI drafts, with checks to expose mismatches between generated contracts and code."
          },
          {
            "title": "Reproducing errors",
            "description": "Used AI to analyze map loading, filter edge cases, and reconnect issues, then checked proposed fixes in tests and the interface."
          }
        ]
      },
      process: [
        {
          "step": "01",
          "title": "Connect one earthquake feed to the map",
          "description": "I limited the initial scope to USGS earthquakes instead of adding several types of natural events. Celery ingests the feed into PostGIS, and FastAPI supplies the map. Re-ingesting the same fixture checks that unchanged events do not create duplicate records or change signals.",
          "outputs": [
            "USGS",
            "Celery / PostGIS",
            "Duplicate-ingestion check"
          ]
        },
        {
          "step": "02",
          "title": "Keep the map and list on the same filters",
          "description": "Time, magnitude, and depth filters live in the URL and drive the list, map, and statistics together. Filtering currently runs in the browser over the received snapshot. Refreshing and sharing preserve those conditions, but a bounded snapshot is not a complete record of every earthquake in the period.",
          "outputs": [
            "URL filters",
            "Map and list sync",
            "Bounded snapshot"
          ]
        },
        {
          "step": "03",
          "title": "Recover from the last processed update",
          "description": "WebSocket carries compact change signals rather than complete event data. The client remembers its processed sequence and uses REST to fetch later changes when reconnecting. PostgreSQL's change log is the recovery source; Redis signals are not treated as durable history.",
          "outputs": [
            "WebSocket signals",
            "REST catch-up",
            "Sequence"
          ]
        },
        {
          "step": "04",
          "title": "Keep the Python API and web types in step",
          "description": "I generate OpenAPI and the TypeScript client from FastAPI schemas, with drift checks that fail when the outputs no longer match. Python dependencies are locked with uv.lock. Separate API, container, web, and browser checks make the failing part easier to identify.",
          "outputs": [
            "OpenAPI generation",
            "uv.lock",
            "CI"
          ]
        },
        {
          "step": "05",
          "title": "Document what recovery does not guarantee",
          "description": "The Build Log records defects and deferred work alongside the implementation. Recovering missing updates on reconnect is different from immediately detecting every lost signal on an open connection; the latter is not guaranteed. Local and CI results are also kept separate from production performance claims.",
          "outputs": [
            "Build Log",
            "Defects and deferred work",
            "Verification scope"
          ]
        }
      ],
      status: 'PERSONAL LEARNING PROJECT',
      coverAlt: 'QuakeCurrent earthquake data project brief',
      gallery: {
        ...translated.gallery,
        tagline: 'Earthquake feeds and realtime mapping',
        summary: 'Collected public earthquake data and displayed it on a map to learn how APIs, realtime updates, and reconnect recovery work together.',
        alt: 'QuakeCurrent concept artwork showing a globe and earthquake signals',
        caption: 'Earthquake observation · Project concept artwork',
      },
      category: '02 · REALTIME DATA · MAP · FULL STACK',
      cardBadge: 'RECOVERABLE DATA FLOW',
      caseStudyLabel: 'View case study',
      pendingMessage: 'Case study coming soon.',
      summary: 'A personal project for learning realtime data processing. I collected and normalized USGS earthquake feeds every 60 seconds, connected them to a 2D/3D map through REST and WebSocket, and implemented recovery for missed updates.',
      problem: "A feed can repeat or revise an event, and a browser connection can drop at any time. I store events and their change history in the database so the interface can catch up from the last processed update.",
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
        'Initial implementation record: 14 web model, 12 API client, 15 FastAPI, 4 SSR, and 10 browser tests passed locally',
        'CI record at that stage: Python 3.12/3.13 API contracts, API container, and web URL-filter checks passed',
        'Recorded passes for two FastAPI → OpenAPI → TypeScript generated-contract drift checks',
        'Recorded fixture re-ingestion produced zero new events and zero change signals',
        'These are historical implementation results, not checks of the current deployment or long-term production performance',
      ],
      role: { summary: 'Designed and implemented the USGS ingestion workers, PostGIS storage, FastAPI REST/WebSocket API, Next.js map interface, and generated API contracts as a solo full-stack project.', items: ['Built idempotent 60-second USGS GeoJSON ingestion with Celery Beat', 'Separated PostgreSQL/PostGIS persistence from Redis broker, locking, and Pub/Sub responsibilities', 'Implemented FastAPI REST snapshots and sequence-based WebSocket update signals', 'Developed a Next.js earthquake map using MapLibre/deck.gl with URL-persisted filters', 'Generated a TypeScript client from OpenAPI and added contract drift checks'] },
      decisions: [
        { title: 'Client-Side Filtering for a Small Snapshot', context: 'The initial active-event snapshot was around 45 KB, making repeated server requests unnecessary for interactive filters.', decision: 'Kept the snapshot in browser memory and applied time, magnitude, and depth filters client-side.', impact: 'Enabled immediate filter changes while preserving shareable URL query state.' },
        { title: 'Use replaceState for Filter URL Changes', context: 'Pushing every filter adjustment into browser history would pollute the back-navigation stack.', decision: 'Updated filter query parameters with replaceState rather than pushState.', impact: 'Kept shareable and refreshable filter URLs without adding an entry for every interaction.' },
        { title: 'Generate TypeScript Client from OpenAPI', context: 'Maintaining Python and TypeScript API shapes separately risks silent contract drift.', decision: 'Generated the TypeScript client from FastAPI OpenAPI output and checked generated artifacts in CI.', impact: 'Added an automated way to detect client/server contract mismatches.' },
      ],
      troubleshooting: [
        { title: 'Earthquake Markers Visible through the Globe', problem: 'Markers on the far side of the globe appeared on top of the sphere.', cause: 'Point-layer depth sorting did not account for camera-relative globe occlusion.', solution: 'Computed camera-view and surface-normal relationships to exclude markers behind the globe and applied depth ordering.' },
        { title: 'Empty USGS Feature Array during Feed Gaps', problem: 'The renderer raised an exception when the external feed returned an empty feature list.', cause: 'The client assumed that each valid snapshot contains at least one earthquake feature.', solution: 'Handled empty snapshots explicitly and displayed a fallback state while retaining metadata from the last valid snapshot.' },
      ],
      outcome: { summary: 'Connected public USGS feed ingestion, PostGIS persistence, sequence-based realtime recovery, and interactive map visualization.', results: ['Recorded idempotent fixture re-ingestion with no new events or change signals', 'Configured CI checks for generated FastAPI OpenAPI and TypeScript client contracts', 'Recorded low-memory Docker deployment and public demo availability'], learnings: ['Globe rendering must account for observer viewpoint and surface occlusion, not only map projection', 'External feeds require empty and repeated data to be treated as expected boundary cases', 'Historical test records should not be generalized into current operational performance claims'] },
      detail: { ...translated.detail, backLabel: 'Portfolio', repositoryLabel: 'GitHub', liveLabel: 'Live Demo', eyebrow: 'PERSONAL PROJECT · REALTIME DATA', problemLabel: '01 · PROBLEM', problemTitle: 'Problem definition', roleLabel: '02 · ROLE & SCOPE', roleTitle: 'Solo Full-Stack Implementation from Ingestion to Map', architectureLabel: '03 · ARCHITECTURE', topologyLabel: '04 · SYSTEM TOPOLOGY', processLabel: '05 · PROCESS', processTitle: 'Learning data collection, updates, and recovery', decisionsLabel: '06 · TECHNICAL DECISIONS', decisionsTitle: 'Technical Choices for Realtime Data and Maps', troubleshootingLabel: '07 · TROUBLESHOOTING', troubleshootingTitle: 'Globe Occlusion and Empty-Feed Recovery', buildLabel: 'BUILD HIGHLIGHTS', buildTitle: 'Key implementation', aiLabel: 'AI COLLABORATION', validationLabel: 'VALIDATION', validationTitle: 'Validation and boundaries', outcomeLabel: '08 · RESULTS & RETROSPECTIVE', outcomeTitle: 'Outcomes and Learnings' },
    });
  } else if (project.slug === 'signal-archive' || index === 2) {
    Object.assign(translated, {
      ai: {
        "label": "RAG WORKFLOW",
        "title": "Connecting retrieved evidence to an answer",
        "tools": [
          "LangGraph.js",
          "Vitest",
          "Playwright"
        ],
        "summary": "Question parsing, retrieval, evidence assembly, and citation checks are separate steps with defined outputs. This makes missing evidence or mismatched references easier to locate. Fake-model flow tests are kept separate from real-model answer evaluation.",
        "responsibility": "The design distinguishes insufficient evidence from implementation failures. Answers must not cite unretrieved material or silently expand the requested period. Limited data and pending provider evaluation are not presented as a finished AI service.",
        "uses": [
          {
            "title": "Question and date range",
            "description": "Parse the requested comparison or update summary and its date range into structured fields for retrieval."
          },
          {
            "title": "Evidence assembly",
            "description": "Connect retrieved revisions and chunks with their source metadata. Report insufficient evidence when the material does not support the request."
          },
          {
            "title": "Citation checks",
            "description": "Compare citation identifiers with the actual retrieval results. A response matching the schema is checked separately from a response supported by evidence."
          }
        ]
      },
      process: [
        {
          "step": "01",
          "title": "Separate source support from data coverage",
          "description": "GitHub, npm, arXiv, and other sources have different response formats and usage conditions, so each has its own collector. I normalize publication time, canonical URL, and external ID, while checking metadata and body-use rules separately. A working adapter does not by itself mean enough data has been collected.",
          "outputs": [
            "Source collectors",
            "Publication time",
            "Usage conditions"
          ]
        },
        {
          "step": "02",
          "title": "Keep collection jobs out of page requests",
          "description": "The API, worker, and web app share TypeBox contracts. BullMQ workers handle collection and reprocessing, while PostgreSQL stores source records and processed data. Redis delivers jobs; it is not the durable store for searchable documents.",
          "outputs": [
            "TypeBox",
            "BullMQ",
            "PostgreSQL"
          ]
        },
        {
          "step": "03",
          "title": "Preserve originals before preparing search data",
          "description": "I keep the source response as a raw item and process it into searchable documents separately. Content fingerprints group exact and near duplicates, and heading-aware chunking splits the text. Revision and chunk identifiers remain attached so an answer's evidence can be traced back.",
          "outputs": [
            "Raw items",
            "Duplicate groups",
            "Revision / Chunk"
          ]
        },
        {
          "step": "04",
          "title": "Check citations against retrieved passages",
          "description": "Retrieval combines keyword and vector search within the requested time range. Citation checks compare an answer's references with the chunks actually retrieved. If there is not enough evidence, the response reports insufficient_evidence rather than silently widening the date range.",
          "outputs": [
            "Keyword and vector search",
            "Date filters",
            "Citation checks"
          ]
        },
        {
          "step": "05",
          "title": "Distinguish passing tests from useful answers",
          "description": "Seeded database data and a fake model make API and browser regression tests repeatable. They check retrieval and citation behavior, not the quality of answers to real questions. Limited initial data, provider approval, and the remaining golden-set evaluation are documented separately.",
          "outputs": [
            "Seeded DB",
            "Fake model",
            "Pending quality evaluation"
          ]
        }
      ],
      status: 'PERSONAL LEARNING PROJECT',
      coverAlt: 'Signal Archive technology intelligence source status dashboard',
      gallery: {
        ...translated.gallery,
        tagline: 'Technical search with source-grounded answers',
        summary: 'Learned RAG by connecting collection, retrieval, and citation checks. The small initial dataset currently limits the answers it can provide.',
        alt: 'Signal Archive example answer with linked citations',
        caption: 'Q&A example · Answers and source citations',
      },
      category: '03 · TECH INTELLIGENCE · DATA PIPELINE · RAG',
      cardBadge: 'PIPELINE & RAG PoC',
      caseStudyLabel: 'View case study',
      pendingMessage: 'Case study coming soon.',
      summary:
        'A personal learning prototype for technical search and source-grounded Q&A. I implemented collection, retrieval, and citation checks. The initial dataset is small, so answers remain limited; the case study documents the implementation and remaining work.',
      problem: "Retrieving a document does not mean it is enough to answer the question. Several sources may repeat the same material, or the document may fall outside the requested dates. Collection, deduplication, date filtering, and citation checks are separate so those differences can be inspected.",
      screenshots: [
        { src: '/signal-archive/overview.webp', alt: 'Signal Archive technology intelligence source status dashboard', caption: 'Dashboard · Verified data source status and freshness tracking', width: 1024, height: 640 },
        { src: '/signal-archive/qa-panel.webp', alt: 'Signal Archive evidence-grounded AI question-answering panel', caption: 'Q&A · Trend analysis grounded in time filters and citation provenance', width: 1024, height: 640 },
        { src: '/signal-archive/topics.webp', alt: 'Signal Archive canonical technology topic catalog screen', caption: 'Topic Catalog · Exploring canonical taxonomies and linked evidence', width: 1024, height: 640 },
        { src: '/signal-archive/status.webp', alt: 'Signal Archive pipeline system health screen', caption: 'System Health · Realtime readiness of API and data-processing layers', width: 1024, height: 640 },
      ],
      highlights: [
        '[Implemented] Collector adapters and SSRF defenses across approved technical sources including GitHub, npm, arXiv, Reddit, and Hugging Face',
        '[Implemented] PostgreSQL authoritative store separated from Redis + BullMQ for job delivery, scheduling, and concurrency caps',
        '[Implemented] TypeBox single-source contracts synchronizing Elysia API, BullMQ Worker, and SvelteKit Web runtime validation and TypeScript types',
        '[Implemented] Data pipeline featuring lexical fingerprint deduplication, heading-aware chunking, and deterministic topic classification',
        '[Implemented] Time-filtered PostgreSQL FTS + exact cosine vector hybrid retrieval with provenance citation validation',
        '[Implemented] Bounded on-demand technical evidence acquisition with limits and persisted-document re-search',
        '[Security] Hardened with CORS, rate limits, prompt-injection defense, and private network egress protection',
        '[DevOps] Docker Compose, GHCR images, and SSH rollback deployment pipeline',
      ],
      validation: [
        'Initial implementation record: 51 API unit/contract, 152 collector, 33 web unit tests, and Playwright E2E passed',
        'Regression checks use a seeded database and fake model, separate from real-model answer evaluation',
        'Limited initial data can produce insufficient_evidence for real questions',
        'Provider approval and golden-set answer evaluation were still pending at the recorded stage',
        'Full excerpts require verified attribution and usage conditions; citations stay metadata-focused until then',
      ],
      role: { summary: 'Designed and implemented public technical-source collectors, Node.js Elysia API, BullMQ workers, PostgreSQL/pgvector search, and SvelteKit UI in a monorepo.', items: ['Built source-specific collectors with policy-based URL and SSRF guards', 'Managed collection delivery, locks, and retries with Redis and BullMQ', 'Implemented normalization, lexical deduplication, heading-aware chunking, and pgvector embeddings', 'Built PostgreSQL full-text and exact cosine vector retrieval with citation checks', 'Developed a technical-intelligence dashboard and evidence-grounded Q&A interface'] },
      decisions: [
        { title: 'Elysia on Node.js Runtime', context: 'Some Bun ecosystem compatibility issues constrained Playwright-based checks and package integration.', decision: 'Kept Elysia while moving the backend runtime to Node.js.', impact: 'Preserved the lightweight API framework while improving ecosystem compatibility.' },
        { title: 'TypeBox as a Single API Contract', context: 'Separately maintained runtime validators and TypeScript interfaces can drift across the API, workers, and web app.', decision: 'Shared TypeBox schemas across the Elysia API, BullMQ workers, and SvelteKit client.', impact: 'Kept static types and runtime input validation derived from the same contract.' },
        { title: 'Bounded Live Evidence Acquisition for Corpus Gaps', context: 'An initially small corpus can return insufficient_evidence for a relevant question and time range.', decision: 'Added bounded on-demand technical evidence acquisition with explicit policy, request, time, and byte limits, followed by one lexical re-search of persisted material.', impact: 'Added a controlled way to address corpus gaps without removing acquisition and evidence boundaries.' },
      ],
      troubleshooting: [
        { title: 'Embedding API Budget Risk during Evaluation', problem: 'Repeatedly embedding duplicate or previously evaluated documents could exceed the external API budget.', cause: 'Duplicate documents and uncached evaluation reruns repeated paid embedding requests.', solution: 'Filtered duplicate material before embedding and introduced offline evaluation with cached results to isolate repeated checks.' },
        { title: 'SSRF Risk in External Source Collection', problem: 'A malicious source URL could direct server-side collection requests to internal addresses or metadata endpoints.', cause: 'Unvalidated URLs passed into outbound HTTP requests can reach private network targets.', solution: 'Applied policy-based URL validation and private-network blocking to outbound collection transports.' },
        { title: 'Insufficient Local Search Evidence', problem: 'The local corpus did not always contain enough material matching a question and its requested date range.', cause: 'The initial corpus size and topic coverage did not span every possible query.', solution: 'Separated bounded on-demand acquisition from the local search path and re-searched persisted documents when eligible evidence was acquired.' },
      ],
      outcome: { summary: 'Built a RAG data pipeline connecting heterogeneous source collection, normalization, retrieval, and citation validation.', results: ['Expanded collector implementation to include Reddit and Hugging Face alongside GitHub, npm, arXiv, and Stack Exchange', 'Added bounded live technical evidence acquisition for local corpus gaps', 'Recorded a proof of concept with API, collector, web, and Playwright regression checks'], learnings: ['Passing tests do not establish real-corpus coverage or answer quality; fixture regression and answer evaluation are distinct', 'Budget limits, source terms, and SSRF guards are core constraints for external collection', 'Provider approval and golden-set evaluation remained open at the recorded stage, so this is not presented as a production-grade RAG service'] },
      detail: { ...translated.detail, backLabel: 'Portfolio', repositoryLabel: 'GitHub', liveLabel: 'Live Demo', eyebrow: 'PERSONAL PROJECT · SEARCH & RAG', problemLabel: '01 · PROBLEM', problemTitle: 'Problem definition', roleLabel: '02 · ROLE & SCOPE', roleTitle: 'Solo Implementation of Data Collection and RAG Search', architectureLabel: '03 · ARCHITECTURE', topologyLabel: '04 · SYSTEM TOPOLOGY', processLabel: '05 · PROCESS', processTitle: 'Learning collection, search, and citation checks', decisionsLabel: '06 · TECHNICAL DECISIONS', decisionsTitle: 'Technical Choices for Provenance and Safe Collection', troubleshootingLabel: '07 · TROUBLESHOOTING', troubleshootingTitle: 'Corpus Gaps, Cost, and SSRF Risks', buildLabel: 'BUILD HIGHLIGHTS', buildTitle: 'Key implementation', aiLabel: 'ANSWER FLOW', validationLabel: 'VALIDATION', validationTitle: 'Validation and boundaries', outcomeLabel: '08 · RESULTS & RETROSPECTIVE', outcomeTitle: 'Outcomes and Remaining Limits' },
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
    description: 'Web and mobile development experience with React, Next.js, and React Native, alongside personal projects for learning backend and data systems.',
    socialDescription: 'Web and mobile experience, personal projects, and notes on what I learned building them.',
    socialTech: 'React · Next.js · NestJS · FastAPI',
    locale: 'en_US',
    navigation: [
      { label: 'INTRODUCTION', href: '#top' }, { label: 'ABOUT', href: '#about' }, { label: 'TOOLKIT', href: '#skills' },
      { label: 'WORK EXPERIENCE', href: '#experience' }, { label: 'PERSONAL PROJECTS', href: '#projects' }, { label: 'EDUCATION', href: '#education' }, { label: 'GITHUB', href: '#contact' },
    ],
    labels: { skipLink: 'Skip to content', navigation: 'Primary navigation', githubAria: 'Open GitHub in a new tab', lightTheme: 'Switch to light theme', darkTheme: 'Switch to dark theme', proof: 'Experience summary', backToTop: 'Back to top', notFoundPageTitle: 'Page not found' },
    footer: 'JISUNG · DEVELOPMENT PORTFOLIO / © 2026',
  };
  english.profile = {
    ...english.profile,
    position: 'A frontend developer expanding into full-stack',
    positionLines: ['A frontend developer', 'expanding into full-stack'],
    intro: 'I have built web and mobile interfaces with React, Next.js, and React Native. Through personal projects, I am extending that experience into backend development and data processing.',
    actions: { project: 'View personal projects', github: 'GitHub' },
    proof: [{ value: '2 yrs', label: 'Web · app development' }, { value: '5', label: 'Work projects contributed to' }, { value: '5', label: 'Personal projects' }],
    about: ['In professional projects, I built web and mobile interfaces and connected APIs for accounts, payments, search, and reservations. I considered both the user journey and how the interface responds as state changes.', 'In personal projects, I explore how data is stored and passed between parts of an application. Commerce, earthquake mapping, technical search, and manufacturing workflows give me different ways to practice APIs, realtime communication, and data handling. I document both implementation details and limitations.'],
    workflow: {
      label: 'HOW I BUILD',
      note: 'Build something small. Check it. Improve it.',
      steps: [
        { title: 'Prototype', description: 'Start with a small version of the core feature.', evidence: 'QuakeCurrent · From ingestion to map', projectSlug: 'quakecurrent' },
        { title: 'Plan', description: 'Define scope, data structures, and edge cases.', evidence: 'Assembly ERP · Production and stock rules', projectSlug: 'assembly-erp' },
        { title: 'Autopilot', description: 'Automate tests and repetitive tasks.', evidence: 'QuakeCurrent · Generated API contracts', projectSlug: 'quakecurrent' },
        { title: 'Review', description: 'Check behavior and limitations, then iterate.', evidence: 'Assembly ERP · Partial production and retries', projectSlug: 'assembly-erp' },
      ],
    },
  };
  english.sections = {
    about: { label: '02 · ABOUT', title: ['From building interfaces', 'to understanding the whole application.'] },
    skills: { label: '03 · TOOLKIT', title: ['Tools I have used,', 'skills I keep developing.'], summary: 'I used React, Next.js, and React Native in professional web and mobile projects. I am learning backend, data, and deployment tools through personal projects.' },
    experience: { label: '04 · WORK EXPERIENCE', title: ['The roles I took on.', 'The services I helped build.'], summary: 'I contributed frontend development to commerce, mobile, expert-matching, and reservation projects.' },
    project: { label: '01 · PERSONAL PROJECTS', title: ['Learning by building,', 'and documenting the process.'], summary: 'Personal projects designed and built for learning and this portfolio.', note: 'Explore the implementation, learning notes, demos, and source code.' },
    education: { label: '05 · EDUCATION' },
    contact: { label: 'GITHUB', title: ['Explore the code', 'and development notes on GitHub.'], linkLabel: 'Explore GitHub' },
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

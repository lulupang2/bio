const shared = {
  title: 'Assembly ERP',
  slug: 'assembly-erp',
  published: true,
  liveUrl: 'https://erp.jisung.lol/',
  repositoryUrl: 'https://github.com/lulupang2/erp_l',
  cover: '/assembly-erp/production.png',
  coverPosition: 'top',
  category: '04 · MANUFACTURING ERP · INVENTORY',
  cardBadge: 'TRANSACTION INTEGRITY',
  stack: ['SvelteKit', 'Go Fiber', 'PostgreSQL', 'sqlc', 'Neon', 'Docker'],
};

export const erpKo = {
  ...shared,
  status: '학습·포트폴리오 프로젝트',
  coverAlt: 'Assembly ERP 실제 데모의 생산 지시 목록과 양품·불량 현황',
  caseStudyLabel: '제작 과정과 상세 보기',
  gallery: {
    tagline: '부품 입고부터 생산·재고 관리까지',
    summary: '제조 업무를 주제로 데이터 정합성과 트랜잭션을 학습했습니다. 부품 입고·부분 생산·불량 처리를 구현하고, 재시도와 동시 요청을 테스트했습니다.',
    image: shared.cover,
    alt: 'Assembly ERP의 생산 지시 목록과 양품·불량 수량',
    caption: '제조 데모 · 생산 지시와 재고 흐름',
    position: 'top right',
  },
  summary: '제조 업무의 데이터 처리를 학습하기 위해 만든 개인 ERP 프로젝트입니다. 품목·BOM·입고·생산·재고 이력을 연결하고, Go 트랜잭션과 멱등 요청으로 중복 제출과 동시 생산을 처리하는 방법을 다뤘습니다.',
  problem: "생산 실적 한 건을 등록하면 부품 소비, 양품·불량 수량, 완제품 재고와 이력이 함께 바뀝니다. v1에서는 이 변경을 하나의 트랜잭션으로 처리하고, 같은 요청을 다시 보내거나 생산 요청이 겹쳐도 수량이 맞도록 하는 데 집중했습니다.",
  screenshots: [{ src: shared.cover, alt: '조립 제조 ERP 생산 지시 화면', caption: '실제 로컬 데모 · 생산 계획과 양품·불량·잔여 수량 조회', width: 1440, height: 1000 }],
  process: [
    {
      "step": "01",
      "title": "Prototype",
      "description": "먼저 품목과 BOM을 등록하고, 부품을 입고한 뒤 생산 실적이 재고 이력에 반영되는 흐름을 연결했습니다. v1은 단일 조직·단일 재고 위치로 범위를 좁혔습니다. 화면마다 숫자가 바뀌는 것보다 생산 한 건의 수량이 끝까지 맞는지를 기준으로 삼았습니다.",
      "outputs": [
        "입고부터 생산까지",
        "v1 데모"
      ]
    },
    {
      "step": "02",
      "title": "Plan",
      "description": "생산 수량에서 양품과 불량을 나눴습니다. 자재는 둘을 합친 수량만큼 소비하고, 완제품 재고에는 양품만 더합니다. 실적·집계·재고·이력은 한 트랜잭션에 묶고, 동시 요청에서는 생산 지시를 먼저 잠근 뒤 재고를 UUID 순서로 잠그도록 정했습니다.",
      "outputs": [
        "양품·불량 수량",
        "트랜잭션",
        "잠금 순서"
      ]
    },
    {
      "step": "03",
      "title": "Autopilot",
      "description": "SQL에서 sqlc로 Go 쿼리 코드를 생성하고, Goose로 스키마 변경을 관리했습니다. 입고와 생산 요청에는 멱등 키와 요청 해시를 사용합니다. 서버 응답을 받지 못한 경우 원래 입력과 키를 보존해 재시도해도 같은 작업이 두 번 반영되지 않게 했습니다.",
      "outputs": [
        "sqlc / Goose",
        "멱등 키",
        "통합 테스트"
      ]
    },
    {
      "step": "04",
      "title": "Review",
      "description": "v1 검증 기록에서는 부분 생산·불량·중복 제출 후 실적과 재고 이력을 대조했습니다. Neon 연결은 TLS뿐 아니라 유휴 후 데이터가 유지되는지도 확인했습니다. 여기서 설명하는 결과는 v1의 기록이며, 후속 공장 흐름 확장이나 운영 부하까지 검증했다는 의미는 아닙니다.",
      "outputs": [
        "부분 생산",
        "재시도",
        "Neon 연결"
      ]
    }
  ],  highlights: [
    'SvelteKit 업무 화면과 Go Fiber API를 분리하고 명시적 DTO·OpenAPI 계약 사용',
    '생산 지시 잠금 후 UUID 순서로 재고를 잠가 동시 생산의 충돌 처리',
    '생산 실적·집계·재고 잔액·이력·요청 키를 한 트랜잭션으로 커밋',
    '입고·생산 지시·실적 등록의 멱등 키와 요청 해시로 중복 제출 제어',
    '응답 유실 시 원래 입력과 요청 키를 보존해 안전한 재시도 지원',
  ],
  validation: [
    '2026-09-11 기록 기준: 로컬 PostgreSQL 통합 테스트와 브라우저 업무 흐름 검증',
    '전용 Neon DB의 TLS 연결, 마이그레이션, 유휴 후 데이터 유지 확인',
    '단일 조직·단일 재고 위치의 포트폴리오 데모이며 앱 내 인증은 비범위',
    'erp.jisung.lol 공개 배포 완료 · HTTPS 200 응답 확인, 운영 부하 검증과는 구분',
  ],
  detail: { backLabel: 'Portfolio', repositoryLabel: 'GitHub', liveLabel: 'Live Demo', eyebrow: 'PERSONAL PROJECT · MANUFACTURING', problemLabel: '01 · PROBLEM', problemTitle: '생산과 재고를 함께 맞추는 문제', processLabel: '02 · PROCESS', processTitle: '제조 업무로 익힌 트랜잭션과 재시도 처리', buildLabel: '03 · BUILD', buildTitle: '주요 구현', validationLabel: '04 · VALIDATION', validationTitle: '검증과 경계' },
};

export const erpEn = {
  ...shared,
  status: 'PERSONAL LEARNING PROJECT',
  coverAlt: 'Assembly ERP demo production orders with good and defective output quantities',
  caseStudyLabel: 'View case study',
  gallery: {
    tagline: 'From inbound stock to production and inventory',
    summary: 'Used manufacturing workflows to learn data consistency and transactions. Implemented inbound stock, partial production, and defects, then tested retries and concurrent requests.',
    image: shared.cover,
    alt: 'Assembly ERP production orders with good and defective quantities',
    caption: 'Manufacturing demo · Production orders and inventory',
    position: 'top right',
  },
  summary: 'A personal ERP project for learning data handling in manufacturing workflows. I connected items, BOMs, inbound stock, production, and inventory history, using Go transactions and idempotent requests to handle duplicate submissions and concurrent production.',
  problem: "One production entry changes component consumption, good and defective output, finished-goods stock, and history together. Version 1 focuses on committing these changes in one transaction and keeping quantities consistent across duplicate or concurrent requests.",
  screenshots: [{ src: shared.cover, alt: 'Assembly ERP production order screen in Korean', caption: 'Actual local demo · Production plans, good output, defects, and remaining quantities', width: 1440, height: 1000 }],
  process: [
    {
      "step": "01",
      "title": "Prototype",
      "description": "I connected item and BOM setup, component receipts, production results, and inventory history first. Version 1 is limited to one organization and one stock location. The check was whether the quantities for a production entry stayed consistent across the flow, not just whether each screen updated.",
      "outputs": [
        "Receipt to production",
        "v1 demo"
      ]
    },
    {
      "step": "02",
      "title": "Plan",
      "description": "I separated good and defective output. Both consume components, but only good output increases finished-goods stock. Results, aggregates, balances, and history commit in one transaction. Concurrent requests lock the production order first, then inventory rows in UUID order.",
      "outputs": [
        "Good and defective output",
        "Transactions",
        "Lock ordering"
      ]
    },
    {
      "step": "03",
      "title": "Autopilot",
      "description": "sqlc generates Go query code from SQL, and Goose manages schema changes. Receipt and production requests carry idempotency keys and request hashes. If a response is lost, the interface keeps the original input and key so a retry does not apply the same operation twice.",
      "outputs": [
        "sqlc / Goose",
        "Idempotency keys",
        "Integration tests"
      ]
    },
    {
      "step": "04",
      "title": "Review",
      "description": "The v1 verification record compares production results with inventory history after partial production, defects, and duplicate submissions. Neon checks cover TLS and data preservation after idle resume. These are v1 results, not verification of later factory-workflow extensions or production load.",
      "outputs": [
        "Partial production",
        "Retries",
        "Neon connection"
      ]
    }
  ],  highlights: [
    'Separate SvelteKit workflow UI and Go Fiber API with explicit DTOs and OpenAPI contracts',
    'Production-order locks followed by UUID-ordered inventory locks for concurrent operations',
    'Atomic commit of production results, aggregates, balances, ledger entries, and request keys',
    'Idempotency keys and request hashes for inbound stock, orders, and production results',
    'Original input and request key preserved for retry after a lost response',
  ],
  validation: [
    'Recorded September 11, 2026: local PostgreSQL integration and browser workflow checks',
    'Dedicated Neon database verified for TLS, migrations, and data preservation after idle resume',
    'Single-organization, single-location portfolio demo; in-app authentication is out of scope',
    'Public deployment at erp.jisung.lol with HTTPS 200 verified; this is not production load validation',
  ],
  detail: { backLabel: 'Portfolio', repositoryLabel: 'GitHub', liveLabel: 'Live Demo', eyebrow: 'PERSONAL PROJECT · MANUFACTURING', problemLabel: '01 · PROBLEM', problemTitle: 'Keeping production and inventory consistent', processLabel: '02 · PROCESS', processTitle: 'Learning transactions and retries through manufacturing', buildLabel: '03 · BUILD', buildTitle: 'Key implementation', validationLabel: '04 · VALIDATION', validationTitle: 'Validation and boundaries' },
};

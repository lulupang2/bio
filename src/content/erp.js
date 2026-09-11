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
  status: 'CASE STUDY · LIVE',
  coverAlt: 'Assembly ERP 실제 데모의 생산 지시 목록과 양품·불량 현황',
  caseStudyLabel: '제작 과정과 상세 보기',
  summary: '품목·BOM·부품 입고부터 부분 생산과 불량 처리, 재고 이력까지 연결한 조립 제조 ERP입니다. Go 트랜잭션과 멱등 요청으로 중복 처리와 동시 생산의 재고 정합성을 다뤘습니다.',
  problem: '생산 실적은 숫자 하나의 수정으로 끝나지 않습니다. 부품 소비, 양품·불량 수량, 재고 잔액과 이력이 함께 일치해야 합니다. 단일 조직·단일 재고 위치의 데모로 범위를 좁혀, 중복 제출과 동시 생산에서도 이 흐름이 하나의 트랜잭션으로 완료되도록 구현했습니다.',
  screenshots: [{ src: shared.cover, alt: '조립 제조 ERP 생산 지시 화면', caption: '실제 로컬 데모 · 생산 계획과 양품·불량·잔여 수량 조회', width: 1440, height: 1000 }],
  process: [
    { step: '01', title: 'Prototype', description: '품목 → BOM → 입고 → 생산 → 재고 이력의 수직 흐름을 로컬 PostgreSQL로 연결했습니다.', outputs: ['업무 흐름', '로컬 데모'] },
    { step: '02', title: 'Plan', description: '생산 지시와 재고 잠금 순서, 수량 검증, 중복 요청 계약을 정하고 OpenAPI와 ADR로 기록했습니다.', outputs: ['OpenAPI', 'ADR', '잠금 순서'] },
    { step: '03', title: 'Autopilot', description: 'sqlc 생성 쿼리, Goose 마이그레이션과 격리된 DB 통합 테스트로 반복 검증을 구성했습니다.', outputs: ['sqlc', 'Goose', '통합 테스트'] },
    { step: '04', title: 'Review', description: '부분 생산·불량·요청 재시도와 Neon TLS 연결·유휴 복귀를 확인했습니다. 공개 데모를 배포하고 HTTPS 응답도 확인했습니다.', outputs: ['브라우저 검증', 'Neon 검증', '공개 데모'] },
  ],
  highlights: [
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
  detail: { backLabel: 'Portfolio', repositoryLabel: 'GitHub', liveLabel: 'Live Demo', eyebrow: 'MANUFACTURING & INVENTORY', problemLabel: '01 · PROBLEM', problemTitle: '생산과 재고를 함께 맞추는 문제', processLabel: '02 · PROCESS', processTitle: '작은 업무 흐름부터 실패 경로 검증까지', buildLabel: '03 · BUILD', buildTitle: '주요 구현', validationLabel: '04 · VALIDATION', validationTitle: '검증과 경계' },
};

export const erpEn = {
  ...shared,
  status: 'CASE STUDY · LIVE',
  coverAlt: 'Assembly ERP demo production orders with good and defective output quantities',
  caseStudyLabel: 'View case study',
  summary: 'An assembly manufacturing ERP connecting items, BOMs, inbound stock, partial production, defects, and inventory history. Go transactions and idempotent requests protect inventory consistency during retries and concurrent production.',
  problem: 'Recording production changes component consumption, good and defective quantities, inventory balances, and the ledger together. This single-organization, single-location demo focuses on committing those changes atomically, including duplicate submissions and concurrent production.',
  screenshots: [{ src: shared.cover, alt: 'Assembly ERP production order screen in Korean', caption: 'Actual local demo · Production plans, good output, defects, and remaining quantities', width: 1440, height: 1000 }],
  process: [
    { step: '01', title: 'Prototype', description: 'Connected items, BOMs, inbound stock, production, and inventory history using local PostgreSQL.', outputs: ['Vertical workflow', 'Local demo'] },
    { step: '02', title: 'Plan', description: 'Defined order and inventory lock ordering, quantity checks, and duplicate-request contracts in OpenAPI and ADRs.', outputs: ['OpenAPI', 'ADRs', 'Lock ordering'] },
    { step: '03', title: 'Autopilot', description: 'Made checks repeatable through sqlc queries, Goose migrations, and isolated database integration tests.', outputs: ['sqlc', 'Goose', 'Integration tests'] },
    { step: '04', title: 'Review', description: 'Verified partial production, defects, retries, Neon TLS, and idle recovery. Deployed the public demo and checked its HTTPS response.', outputs: ['Browser checks', 'Neon checks', 'Public demo'] },
  ],
  highlights: [
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
  detail: { backLabel: 'Portfolio', repositoryLabel: 'GitHub', liveLabel: 'Live Demo', eyebrow: 'MANUFACTURING & INVENTORY', problemLabel: '01 · PROBLEM', problemTitle: 'Keeping production and inventory consistent', processLabel: '02 · PROCESS', processTitle: 'From a vertical workflow to failure-path verification', buildLabel: '03 · BUILD', buildTitle: 'Key implementation', validationLabel: '04 · VALIDATION', validationTitle: 'Validation and boundaries' },
};

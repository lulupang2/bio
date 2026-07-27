export const portfolio = {
  profile: {
    name: '지성인',
    position: '풀스택으로 확장하는 프론트엔드 개발자',
    intro:
      'React와 Next.js 기반의 웹·모바일 프론트엔드 실무 경험을 바탕으로, 백엔드와 데이터 흐름까지 이해하는 개발자로 성장하고 있습니다.',
    github: 'https://github.com/lulupang2',
    proof: [
      { value: '11개월', label: '프론트엔드 실무' },
      { value: '5개', label: '상용 프로젝트 참여' },
      { value: '1개', label: 'End-to-End Case Study' },
    ],
    about: [
      'React, Next.js, React Native를 사용해 쇼핑몰, 전문가 매칭, 예약 플랫폼과 모바일 애플리케이션의 사용자 화면을 구현했습니다. REST API를 기반으로 회원·주문·결제·검색·티켓과 같은 실제 서비스 기능을 연결했습니다.',
      '현재는 TECHZONE 프로젝트를 통해 NestJS, PostgreSQL, RabbitMQ, Redis, Docker까지 영역을 넓혔습니다. 화면을 만드는 데서 멈추지 않고 주문이 결제·재고·배송·반품으로 이어지는 전체 흐름을 설계하고 검증하는 것을 목표로 합니다.',
    ],
    principles: [
      {
        title: '사용자 흐름부터 봅니다',
        description: '기술보다 먼저 사용자가 무엇을 보고 어떤 행동을 이어가는지 정의합니다.',
      },
      {
        title: '경계를 명확하게 만듭니다',
        description: '화면, 서버 상태, 데이터 소유권을 구분해 변경에 강한 구조를 만듭니다.',
      },
      {
        title: '검증 가능한 결과를 남깁니다',
        description: '빌드, 테스트, 성능과 복구 시나리오로 구현의 근거를 남깁니다.',
      },
    ],
  },
  skills: [
    {
      id: 'frontend',
      kicker: '01 · USER EXPERIENCE',
      title: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'React Native', 'TanStack Query', 'Zustand'],
    },
    {
      id: 'backend',
      kicker: '02 · SERVICE FLOW',
      title: 'Backend',
      items: ['NestJS', 'REST API', 'JWT · RBAC', 'MSA', 'OpenAPI', 'BullMQ'],
    },
    {
      id: 'data',
      kicker: '03 · CONSISTENCY',
      title: 'Data & Messaging',
      items: ['PostgreSQL', 'Drizzle ORM', 'Redis', 'RabbitMQ', 'Outbox · Inbox', 'DLQ'],
    },
    {
      id: 'devops',
      kicker: '04 · DELIVERY',
      title: 'DevOps & Quality',
      items: ['Docker', 'Kubernetes', 'GitHub Actions', 'OpenTelemetry', 'Playwright', 'Lighthouse'],
    },
  ],
  experience: {
    company: 'highdev',
    period: '2022.03 — 2023.01',
    duration: '11개월',
    role: '프론트엔드 개발팀 팀원 · React / Next.js / React Native',
    projects: [
      {
        title: '이더리움 기반 전문 쇼핑몰 플랫폼',
        period: '2022.03 — 04',
        description:
          'React로 관리자 화면을 개발하고 REST API 기반 회원·토큰·주문 관리 기능을 구현했습니다.',
        tags: ['React', 'REST API', 'Admin'],
      },
      {
        title: '블록체인 기반 쇼핑몰 모바일 앱',
        period: '2022.04 — 05',
        description:
          '출시된 Android·iOS 앱의 디자인을 리뉴얼하고 TypeScript 기반 React Native 코드로 재구성했습니다.',
        tags: ['React Native', 'TypeScript', 'Android · iOS'],
      },
      {
        title: 'Wi-Fi 단말기 보상 애플리케이션',
        period: '2022.06 — 09',
        description:
          'React Native 기반 모바일 프론트엔드를 담당해 Android·iOS 사용자 흐름을 구현했습니다.',
        tags: ['React Native', 'Mobile', 'API Integration'],
      },
      {
        title: '전문가 매칭 플랫폼',
        period: '2022.09 — 12',
        description:
          'Next.js 기반 웹·모바일 반응형 화면과 PG 결제, 서비스 목록·상세, SEO 최적화를 구현했습니다.',
        tags: ['Next.js', 'Responsive', 'Payment', 'SEO'],
      },
      {
        title: 'NFT 기반 콘서트 예약 플랫폼',
        period: '2022.12',
        description:
          'React로 검색, 로그인, 액세스 토큰, 티켓, 설정과 내 정보 화면을 구현했습니다.',
        tags: ['React', 'Token Auth', 'Reservation'],
      },
    ],
  },
  education: {
    school: '한국방송통신대학교',
    major: '컴퓨터과학과',
    period: '2024.03 —',
    status: '재학 중',
  },
  project: {
    title: 'TECHZONE',
    slug: 'techzone',
    published: false,
    status: 'NCP 공개 배포 준비 중',
    liveUrl: '',
    repositoryUrl: 'https://github.com/lulupang2/ecommerce',
    cover: '/techzone/storefront-home.png',
    summary:
      '테크·IT 기기 쇼핑몰을 주제로 고객 스토어, 관리자 OMS/WMS, NestJS 기반 MSA와 이벤트 신뢰성까지 한 흐름으로 구현한 커머스 플랫폼입니다.',
    problem:
      '고객 화면만 구현한 쇼핑몰이 아니라 상품 옵션, 주문, 결제, 재고 예약, 출고, 배송, 반품과 관리자 지표가 서로 다른 서비스 사이에서 일관되게 이어지는 운영 시스템을 만들고자 했습니다.',
    stack: [
      'Next.js',
      'TypeScript',
      'NestJS',
      'Drizzle ORM',
      'PostgreSQL',
      'RabbitMQ',
      'Redis',
      'Docker',
      'Kubernetes',
      'OpenTelemetry',
    ],
    highlights: [
      '고객 스토어와 관리자 OMS/WMS를 독립 Next.js 앱으로 구성',
      'Product·Variant·SKU를 분리하고 주문·재고 기준을 Variant로 통일',
      '주문→결제→재고 예약→출고→배송→반품·환불 Saga 구현',
      'Transactional Outbox·Inbox·멱등성·재시도·DLQ 적용',
      'Admin Query Projection으로 KPI와 운영 목록 조회 분리',
      'TanStack Query와 Zustand로 서버 상태와 UI 상태 분리',
      'RBAC·감사로그·CSRF·JWT/JWKS·rate limit 적용',
      'Docker Compose, Kubernetes, GitHub Actions 배포 계약 구성',
    ],
    validation: [
      '회원·비회원 구매와 가격·재고 변경 방어 통합 테스트',
      'RabbitMQ·PostgreSQL·Order·Inventory 장애 후 복구 검증',
      'Playwright E2E, 접근성, Lighthouse 성능·SEO 게이트',
      'OpenTelemetry·Prometheus·Tempo·Loki·Grafana 관측성 구성',
    ],
    screenshots: [
      {
        src: '/techzone/storefront-home.png',
        alt: 'TECHZONE 고객 스토어 홈 화면',
        caption: '고객 스토어 · CMS 기반 상품 탐색',
      },
      {
        src: '/techzone/storefront-product-detail.png',
        alt: 'TECHZONE 상품 상세 화면',
        caption: '상품 상세 · Variant와 구매 전환 정보',
      },
      {
        src: '/techzone/admin-dashboard.png',
        alt: 'TECHZONE 관리자 대시보드',
        caption: 'Admin CMS · OMS/WMS 운영 지표',
      },
    ],
  },
};

export const isProjectRouteAvailable = (pathname, project) =>
  pathname === `/projects/${project.slug}` && project.published === true;

// Single source of truth for all editable portfolio content.
export const portfolio = {
  site: {
    title: '개발자 포트폴리오',
    systemLabel: 'PORTFOLIO SYSTEM / 2026',
    status: 'OPEN TO WORK',
    description:
      'React와 Next.js 실무 경험을 바탕으로 서비스 전체의 흐름을 설계하는 개발자 포트폴리오입니다.',
    socialDescription: '화면의 완성도와 시스템의 흐름을 함께 설계합니다.',
    socialTech: 'React · Next.js · NestJS · FastAPI',
    socialImage: '/og.png',
    locale: 'ko_KR',
    themeColor: '#fdfdfd',
    footer: 'DESIGNED & BUILT AS A FULL-STACK PORTFOLIO / © 2026',
    navigation: [
      { label: 'INTRODUCTION', href: '#top' },
      { label: 'ABOUT', href: '#about' },
      { label: 'TOOLKIT', href: '#skills' },
      { label: 'EXPERIENCE', href: '#experience' },
      { label: 'PROJECTS', href: '#projects' },
      { label: 'EDUCATION', href: '#education' },
      { label: 'CONTACT', href: '#contact' },
    ],
    labels: {
      skipLink: '본문으로 바로가기',
      navigation: '주요 메뉴',
      githubAria: 'GitHub 새 창에서 열기',
      lightTheme: '라이트 테마로 전환',
      darkTheme: '다크 테마로 전환',
      proof: '개발 경험 요약',
      backToTop: '맨 위로',
      notFoundPageTitle: '페이지를 찾을 수 없습니다',
    },
  },
  profile: {
    position: '풀스택으로 확장하는 프론트엔드 개발자',
    positionLines: ['풀스택으로 확장하는', '프론트엔드 개발자'],
    kicker: 'FRONTEND · FULLSTACK · COMMERCE',
    intro:
      'React·Next.js·React Native로 웹·모바일 화면을 구현해 왔습니다. TECHZONE의 커머스 운영 흐름과 QuakeCurrent의 실시간 데이터 파이프라인을 만들며 백엔드·데이터 영역까지 확장했습니다.',
    github: 'https://github.com/lulupang2',
    actions: {
      project: '프로젝트 보기',
      github: 'GitHub',
    },
    proof: [
      { value: '11개월', label: '프론트엔드 실무' },
      { value: '5개', label: '상용 프로젝트 참여' },
      { value: '2개', label: 'Full-stack Case Study' },
    ],
    about: [
      'React, Next.js, React Native를 사용해 쇼핑몰, 전문가 매칭, 예약 플랫폼과 모바일 애플리케이션의 사용자 화면을 구현했습니다. REST API를 기반으로 회원·주문·결제·검색·티켓과 같은 실제 서비스 기능을 연결했습니다.',
      'TECHZONE에서는 주문이 결제·재고·배송·반품으로 이어지는 커머스 운영 흐름을, QuakeCurrent에서는 지진 피드 수집부터 REST·WebSocket·3D 지도까지 이어지는 데이터 흐름을 구현했습니다. 화면을 만드는 데서 멈추지 않고 서비스 전체의 경계와 실패 복구까지 검증합니다.',
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
  sections: {
    about: {
      label: '01 · ABOUT',
      title: ['웹·모바일 화면을 만들고', '서비스 기능을 연결했습니다.'],
    },
    skills: {
      label: '02 · EXPERTISE',
      title: ['화면부터 데이터 처리까지', '이 기술들을 사용했습니다.'],
      summary:
        'React·Next.js·React Native로 화면을 만들고 NestJS·PostgreSQL·Redis·RabbitMQ로 API와 데이터 흐름을 구현했습니다.',
    },
    experience: {
      label: '03 · SELECTED EXPERIENCE',
      title: ['실무 프로젝트 다섯 개에서', '화면과 핵심 기능을 구현했습니다.'],
      summary: '쇼핑몰, 모바일 앱, 전문가 매칭과 예약 서비스에서 인증, 결제, 검색과 관리자 기능을 맡았습니다.',
    },
    project: {
      label: '04 · SELECTED PROJECTS',
      title: ['커머스 운영과 실시간 데이터 흐름을', '처음부터 끝까지 구현했습니다.'],
    },
    education: {
      label: '05 · EDUCATION',
    },
    contact: {
      label: 'CONTACT',
      title: ['구현한 프로젝트와 코드는', 'GitHub에서 확인할 수 있습니다.'],
      linkLabel: 'GitHub',
    },
  },
  skills: [
    {
      id: 'frontend',
      kicker: '01 · USER EXPERIENCE',
      title: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'React Native', 'TanStack Query', 'MapLibre · deck.gl'],
    },
    {
      id: 'backend',
      kicker: '02 · SERVICE FLOW',
      title: 'Backend',
      items: ['NestJS', 'FastAPI', 'REST · WebSocket', 'JWT · RBAC', 'MSA', 'OpenAPI'],
    },
    {
      id: 'data',
      kicker: '03 · CONSISTENCY',
      title: 'Data & Messaging',
      items: ['PostgreSQL · PostGIS', 'Drizzle ORM', 'Redis', 'RabbitMQ', 'Celery', 'Outbox · Inbox'],
    },
    {
      id: 'devops',
      kicker: '04 · DELIVERY',
      title: 'DevOps & Quality',
      items: ['Docker', 'Kubernetes', 'GitHub Actions', 'OpenTelemetry', 'Playwright', 'Lighthouse'],
    },
  ],
  experience: {
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
  projects: [
    {
    title: 'TECHZONE',
    slug: 'techzone',
    published: true,
    status: 'CASE STUDY · LIVE 공개',
    liveUrl: 'https://techzone.jisung.lol/',
    repositoryUrl: 'https://github.com/lulupang2/ecommerce',
    cover: '/techzone/storefront-home.png',
    coverAlt: 'TECHZONE 고객 스토어 홈 화면',
    coverPosition: 'top left',
    category: '01 · COMMERCE · OMS/WMS · MSA',
    cardBadge: 'SCALABLE ARCHITECTURE',
    caseStudyLabel: '제작 과정과 상세 보기',
    pendingMessage: 'Case Study 공개 준비 중입니다.',
    summary:
      '고객 스토어와 관리자 앱을 만들고, 주문·결제·재고·배송·반품이 이어지는 MSA와 이벤트 처리·장애 복구를 구현하고 검증했습니다.',
    problem:
      '고객 화면만 구현한 쇼핑몰이 아니라 상품 옵션, 주문, 결제, 재고 예약, 출고, 배송, 반품과 관리자 지표가 서로 다른 서비스 사이에서 일관되게 이어지는 운영 시스템을 만들고자 했습니다.',
    architecture: {
      title: '고객 경험과 운영 도메인을 이벤트로 연결했습니다.',
      description:
        '스토어와 관리자 앱은 Gateway를 통해 서비스에 접근하고, 구매 상태 전이는 도메인 서비스가 소유합니다. 서비스별 PostgreSQL과 RabbitMQ를 분리해 데이터 소유권과 비동기 처리를 명확히 했습니다.',
      ariaLabel: 'TECHZONE 고객 화면, 주문 Saga, 데이터와 운영 조회로 구성된 아키텍처',
      lanes: [
        {
          id: 'techzone-entry',
          kicker: '01',
          title: 'Experience',
          description: '사용자와 운영자 진입점',
          nodes: [
            {
              title: 'Next.js Apps',
              description: 'Storefront · Admin CMS',
              tone: 'frontend',
            },
            {
              title: 'API Gateway',
              description: 'JWT · RBAC · Rate limit',
              tone: 'gateway',
            },
            {
              title: 'NestJS Services',
              description: 'Catalog · Cart · Order',
              tone: 'service',
            },
          ],
        },
        {
          id: 'techzone-saga',
          kicker: '02',
          title: 'Order Saga',
          description: '구매와 물류 상태 전이',
          nodes: [
            { title: 'Order', description: '주문 스냅샷 · Saga' },
            { title: 'Payment', description: '승인 · 취소 · 환불' },
            { title: 'Inventory', description: 'Variant 예약 · 원장' },
            { title: 'Fulfillment', description: '출고 · 배송 · 반품' },
          ],
        },
        {
          id: 'techzone-data',
          kicker: '03',
          title: 'Data & Reliability',
          description: '소유권과 장애 복구',
          nodes: [
            {
              title: 'Service Databases',
              description: 'PostgreSQL · Drizzle',
              tone: 'data',
            },
            {
              title: 'RabbitMQ',
              description: 'Domain events · DLQ',
              tone: 'realtime',
            },
            {
              title: 'Outbox · Inbox',
              description: '멱등성 · 재시도',
              tone: 'data',
            },
            {
              title: 'Admin Query',
              description: 'Projection · KPI',
              tone: 'service',
            },
          ],
        },
      ],
      notes: [
        'Product·Variant·SKU 기준을 Catalog와 Inventory 계약으로 통일했습니다.',
        'Order가 Saga를 조정하고 각 서비스는 자신의 상태와 보상 작업을 소유합니다.',
        'Outbox·Inbox와 DLQ로 메시지 중복과 일시 장애 후 복구를 검증했습니다.',
      ],
    },
    topology: {
      title: '스토어부터 운영·데이터 계층까지 전체 토폴로지',
      description:
        '클라이언트, Gateway, 도메인 서비스, 메시징, 서비스별 저장소와 운영 계층을 위에서 아래로 배치했습니다. 화살표 라벨은 계층 사이의 주된 통신 방식과 상태 전달 경계를 의미합니다.',
      ariaLabel: 'TECHZONE 전체 시스템 토폴로지',
      layers: [
        {
          kicker: 'LAYER 01',
          title: 'Client Applications',
          icon: 'clients',
          nodes: [
            {
              title: 'Storefront',
              description: '상품 탐색 · 장바구니 · 주문',
              tags: ['Next.js', 'TanStack Query'],
            },
            {
              title: 'Admin CMS',
              description: '상품 · 주문 · 재고 · 배송 운영',
              tags: ['Next.js', 'TanStack Table'],
            },
            {
              title: 'Mobile Shell',
              description: '웹 번들을 사용하는 하이브리드 앱',
              tags: ['Capacitor', 'Android'],
            },
          ],
          connection: 'HTTPS · JSON API',
        },
        {
          kicker: 'LAYER 02',
          title: 'Edge & Identity',
          icon: 'edge',
          nodes: [
            {
              title: 'API Gateway',
              description: '라우팅 · 요청 ID · Rate limit',
              tags: ['NestJS', 'OpenAPI'],
            },
            {
              title: 'Auth Boundary',
              description: 'JWT/JWKS · RBAC · CSRF',
              tags: ['Access Token', 'Role'],
            },
            {
              title: 'Media Access',
              description: 'Presigned URL과 정적 자산 전달',
              tags: ['MinIO', 'S3 API'],
            },
          ],
          connection: 'REST commands · authenticated context',
        },
        {
          kicker: 'LAYER 03',
          title: 'Domain Services',
          icon: 'services',
          nodes: [
            { title: 'Auth', description: '회원 · 세션 · 권한' },
            { title: 'Catalog', description: '상품 · Variant · SKU' },
            { title: 'Cart', description: '게스트 · 회원 장바구니' },
            { title: 'Order', description: '주문 스냅샷 · Saga' },
            { title: 'Payment', description: '승인 · 취소 · 환불' },
            { title: 'Inventory', description: '예약 · 원장 · 창고' },
            { title: 'Fulfillment', description: '출고 · 배송 · 반품' },
            { title: 'Procurement', description: '공급사 · 발주 · 입고' },
            { title: 'Notification', description: '주문 상태 알림' },
            { title: 'Search', description: '검색 인덱스 · 필터' },
            { title: 'Media', description: '업로드 자산 메타데이터' },
            { title: 'Admin Query', description: '운영 Projection · KPI' },
          ],
          connection: 'domain events · async commands',
        },
        {
          kicker: 'LAYER 04',
          title: 'Messaging & Processing',
          icon: 'messaging',
          tone: 'event',
          nodes: [
            {
              title: 'RabbitMQ',
              description: '이벤트 라우팅 · 재시도 · DLQ',
              tags: ['Topic', 'Consumer'],
            },
            {
              title: 'Outbox · Inbox',
              description: 'DB 트랜잭션과 메시지의 원자성',
              tags: ['Idempotency', 'Replay'],
            },
            {
              title: 'Redis · BullMQ',
              description: '캐시 · 지연 작업 · 예약 만료',
              tags: ['Cache', 'Job Queue'],
            },
          ],
          connection: 'owned persistence · read projections',
        },
        {
          kicker: 'LAYER 05',
          title: 'Data & Operations',
          icon: 'data',
          tone: 'data',
          nodes: [
            {
              title: 'Service Databases',
              description: '서비스가 소유하는 독립 PostgreSQL 스키마',
              tags: ['PostgreSQL', 'Drizzle'],
              wide: true,
            },
            {
              title: 'Object Storage',
              description: '상품 이미지와 미디어 자산',
              tags: ['MinIO', 'S3'],
            },
            {
              title: 'Observability',
              description: '로그 · 메트릭 · 분산 추적',
              tags: ['Prometheus', 'Tempo', 'Loki', 'Grafana'],
              wide: true,
            },
            {
              title: 'Delivery Runtime',
              description: '로컬·운영 배포 계약',
              tags: ['Docker', 'Kubernetes', 'GitHub Actions'],
            },
          ],
        },
      ],
      legend: [
        {
          title: '서비스별 데이터 소유권',
          description: '다른 서비스 DB를 직접 읽지 않고 API·이벤트 계약으로 상태를 전달합니다.',
        },
        {
          title: '동기와 비동기 분리',
          description: '사용자 응답은 REST로, 후속 처리와 Projection은 메시지 이벤트로 연결합니다.',
        },
        {
          title: '복구 가능한 이벤트 처리',
          description: 'Outbox·Inbox·멱등 키·DLQ를 통해 중복과 일시 장애를 제어합니다.',
        },
      ],
    },
    ai: {
      label: 'AI-ASSISTED DEVELOPMENT',
      title: 'Codex와 Antigravity를 활용한 AI 협업 개발',
      tools: ['Codex', 'Antigravity'],
      summary:
        '요구사항 구조화, UI 시안 탐색, 코드 초안과 반복 리팩터링, 테스트 시나리오 작성과 오류 분석 보조에 AI 도구를 활용했습니다.',
      responsibility:
        '서비스 방향과 우선순위, 기술 선택과 서비스 경계를 결정하고 AI가 제안한 결과를 검토했습니다. 실제 사용자 흐름과 통합 테스트 결과를 확인하며 수정 방향과 최종 수용 여부를 판단했습니다.',
      uses: [
        {
          title: '기획과 설계',
          description: '대화로 요구사항을 구체화하고 PRD·SSOT·아키텍처와 데이터 모델 초안을 반복해서 정리했습니다.',
        },
        {
          title: '구현과 리팩터링',
          description: '화면과 API 코드 초안, 구조 전환과 반복 작업에 활용하고 서비스 경계에 맞게 검토·수정했습니다.',
        },
        {
          title: '검증과 문서화',
          description: '통합·보안·E2E·장애 복구 시나리오와 로그 분석을 보조받고 결과를 기준으로 결함을 보완했습니다.',
        },
      ],
    },
    process: [
      {
        step: '01',
        title: '문제와 범위 정의',
        description:
          '시각 중심의 포트폴리오 아이디어를 Tech·IT 커머스로 구체화하고, 고객 경험과 MSA 역량을 함께 보여주는 범위를 정했습니다.',
        outputs: ['PRD', 'SSOT', 'Architecture', 'Data Model'],
      },
      {
        step: '02',
        title: '고객 구매 경험 구축',
        description:
          'SPA 프로토타입에서 Next.js App Router 기반 스토어로 전환하고 탐색, 상품 상세, 장바구니, 견적, 주문과 비회원 조회를 연결했습니다.',
        outputs: ['Next.js', 'SSR · SEO', 'Checkout', 'Capacitor Shell'],
      },
      {
        step: '03',
        title: 'NestJS MSA 전환',
        description:
          'Gateway와 도메인 서비스를 실제 NestJS 구조로 분리하고 Drizzle ORM과 서비스별 PostgreSQL 소유권을 적용했습니다.',
        outputs: ['NestJS', 'Drizzle ORM', '13 Services', 'OpenAPI'],
      },
      {
        step: '04',
        title: 'OMS/WMS 운영 모델 확장',
        description:
          '상품 Variant·SKU, 다중 창고, 재고 원장, 주문·결제, 출고·배송·반품, 공급사·발주와 관리자 조회 모델을 구현했습니다.',
        outputs: ['OMS/WMS', 'Inventory Ledger', 'Fulfillment', 'Admin Query'],
      },
      {
        step: '05',
        title: '신뢰성과 보안 강화',
        description:
          '재고 선점 경쟁과 예약 만료를 보완하고 Outbox·Inbox, 멱등성, 재시도·DLQ, RBAC, JWT/JWKS와 CSRF를 적용했습니다.',
        outputs: ['Saga', 'Outbox · Inbox', 'Idempotency', 'RBAC · CSRF'],
      },
      {
        step: '06',
        title: '성능과 운영 검증',
        description:
          'React Query·Zustand 상태 경계를 정리하고 Redis 캐시, BullMQ, 구조화 로그와 관측성을 더한 뒤 통합·E2E·장애 복구를 검증했습니다.',
        outputs: ['TanStack Query', 'Redis · BullMQ', 'OpenTelemetry', 'CI Gates'],
      },
    ],
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
        width: 1440,
        height: 1100,
      },
      {
        src: '/techzone/storefront-product-detail.png',
        alt: 'TECHZONE 상품 상세 화면',
        caption: '상품 상세 · Variant와 구매 전환 정보',
        width: 1440,
        height: 1100,
      },
      {
        src: '/techzone/admin-dashboard.png',
        alt: 'TECHZONE 관리자 대시보드',
        caption: 'Admin CMS · OMS/WMS 운영 지표',
        width: 1440,
        height: 1100,
      },
    ],
    detail: {
      backLabel: 'Portfolio',
      repositoryLabel: 'GitHub',
      liveLabel: 'Live Demo',
      eyebrow: 'FEATURED CASE STUDY',
      problemLabel: '01 · PROBLEM',
      problemTitle: '문제 정의',
      architectureLabel: '02 · ARCHITECTURE',
      topologyLabel: '03 · SYSTEM TOPOLOGY',
      processLabel: '04 · PROCESS',
      processTitle: '아이디어에서 운영 가능한 커머스까지',
      buildLabel: '05 · BUILD',
      buildTitle: '주요 구현',
      aiLabel: '06 · AI COLLABORATION',
      validationLabel: '07 · VALIDATION',
      validationTitle: '검증과 운영',
    },
    },
    {
      title: 'QuakeCurrent',
      slug: 'quakecurrent',
      published: true,
      status: 'CASE STUDY · LIVE 공개',
      liveUrl: 'https://quake.jisung.lol/',
      repositoryUrl: 'https://github.com/lulupang2/QuakeCurrent',
      cover: '/quakecurrent/project-cover.webp',
      coverAlt: 'QuakeCurrent 지진 데이터 프로젝트 브리프',
      coverPosition: 'center',
      category: '02 · REALTIME DATA · MAP · FULL STACK',
      cardBadge: 'RECOVERABLE DATA FLOW',
      caseStudyLabel: '제작 과정과 상세 보기',
      pendingMessage: 'Case Study 공개 준비 중입니다.',
      summary:
        'USGS 지진 피드를 60초마다 수집·정규화하고, REST 스냅샷과 복구 가능한 WebSocket 변경 신호를 3D·2D 지도에 연결한 풀스택 데이터 프로토타입입니다.',
      problem:
        '지진을 지도에 표시하는 것보다 같은 사건의 중복 적재, 연결이 끊긴 사이의 변경 누락, Python API와 TypeScript 화면 사이의 계약 불일치가 사용자 경험을 먼저 무너뜨릴 수 있다고 보았습니다. 수집부터 복구·계약 검증까지 하나의 수직 슬라이스로 연결했습니다.',
      architecture: {
        title: '수집 원본과 실시간 신호를 분리해 복구 가능한 흐름을 만들었습니다.',
        description:
          'USGS 원본은 Celery가 멱등 수집해 PostGIS에 저장합니다. FastAPI는 REST 스냅샷과 작은 WebSocket 변경 신호를 분리하고, 웹은 마지막 sequence 이후를 REST로 보충해 연결 중단을 복구합니다.',
        ariaLabel: 'QuakeCurrent 수집, 실시간 전달, 지도 경험으로 구성된 아키텍처',
        lanes: [
          {
            id: 'quake-ingestion',
            kicker: '01',
            title: 'Ingestion',
            description: '조건부 요청과 멱등 저장',
            nodes: [
              { title: 'USGS GeoJSON', description: 'ETag · Last-Modified', tone: 'frontend' },
              { title: 'Celery Worker', description: '60초 수집 · 정규화', tone: 'service' },
              {
                title: 'PostgreSQL · PostGIS',
                description: '지진 원본 · 공간 질의',
                tone: 'data',
              },
            ],
          },
          {
            id: 'quake-delivery',
            kicker: '02',
            title: 'API & Realtime',
            description: '스냅샷과 변경 신호 분리',
            nodes: [
              { title: 'Redis', description: 'Lock · Broker · Pub/Sub', tone: 'data' },
              { title: 'FastAPI', description: 'REST · WebSocket', tone: 'gateway' },
              {
                title: 'OpenAPI Client',
                description: 'Generated TypeScript',
                tone: 'service',
              },
            ],
          },
          {
            id: 'quake-experience',
            kicker: '03',
            title: 'Web Experience',
            description: 'URL 상태와 재연결 복구',
            nodes: [
              { title: 'URL Filter State', description: '시간 · 규모 · 깊이' },
              { title: 'REST Catch-up', description: 'Last sequence 이후 복구', tone: 'realtime' },
              {
                title: 'MapLibre · deck.gl',
                description: '3D · 2D 지도 시각화',
                tone: 'frontend',
              },
            ],
          },
        ],
        notes: [
          'PostgreSQL을 영속 원본으로, Redis를 잠금·브로커·실시간 전달 계층으로 분리했습니다.',
          'WebSocket은 전체 데이터를 보내지 않고 변경 sequence만 전달해 전송량을 줄였습니다.',
          'FastAPI OpenAPI에서 TypeScript client를 생성해 Python과 웹의 계약 drift를 차단했습니다.',
        ],
      },
      topology: {
        title: '외부 피드에서 실시간 지도까지 전체 토폴로지',
        description:
          'USGS 원본 수집, 비동기 처리, PostGIS 원본 저장, REST·WebSocket 전달과 지도 렌더링을 계층별로 분리했습니다. 각 연결 라벨은 다음 계층에 전달되는 데이터의 형태를 보여줍니다.',
        ariaLabel: 'QuakeCurrent 전체 시스템 토폴로지',
        layers: [
          {
            kicker: 'LAYER 01',
            title: 'External Source',
            icon: 'clients',
            nodes: [
              {
                title: 'USGS Earthquake Feed',
                description: '최근 지진 GeoJSON 원본',
                tags: ['GeoJSON', 'ETag', 'Last-Modified'],
                wide: true,
              },
            ],
            connection: 'conditional GET · 60-second schedule',
          },
          {
            kicker: 'LAYER 02',
            title: 'Ingestion & Tasks',
            icon: 'processing',
            nodes: [
              {
                title: 'Celery Beat',
                description: '주기 수집 스케줄',
                tags: ['Scheduler'],
              },
              {
                title: 'Celery Worker',
                description: '정규화 · 중복 판단 · upsert',
                tags: ['Python', 'Task'],
              },
              {
                title: 'Redis',
                description: 'Broker · Lock · Pub/Sub',
                tags: ['Queue', 'Realtime'],
              },
            ],
            connection: 'normalized event · idempotent upsert',
          },
          {
            kicker: 'LAYER 03',
            title: 'Source of Truth',
            icon: 'data',
            tone: 'data',
            nodes: [
              {
                title: 'PostgreSQL · PostGIS',
                description: '지진 사건 · geometry · sequence',
                tags: ['Spatial Index', 'Durable Data'],
                wide: true,
              },
              {
                title: 'Event Sequence',
                description: '재연결 catch-up 기준점',
                tags: ['Monotonic ID', 'Recovery'],
              },
            ],
            connection: 'spatial query · snapshot · change sequence',
          },
          {
            kicker: 'LAYER 04',
            title: 'API & Realtime Delivery',
            icon: 'edge',
            tone: 'event',
            nodes: [
              {
                title: 'FastAPI REST',
                description: '목록 · 통계 · 상세 · catch-up',
                tags: ['REST', 'OpenAPI'],
              },
              {
                title: 'WebSocket Signal',
                description: '작은 변경 sequence 알림',
                tags: ['Compact Event', 'Reconnect'],
              },
              {
                title: 'Generated API Client',
                description: 'OpenAPI 기반 TypeScript 계약',
                tags: ['Type Safety', 'Drift Gate'],
              },
            ],
            connection: 'JSON snapshot · compact realtime signal',
          },
          {
            kicker: 'LAYER 05',
            title: 'Web Experience',
            icon: 'clients',
            nodes: [
              {
                title: 'Next.js Application',
                description: 'SSR shell · 탐색 화면 · 상세',
                tags: ['React', 'TypeScript'],
              },
              {
                title: 'URL Filter State',
                description: '시간 · 규모 · 깊이 상태 보존',
                tags: ['Shareable URL', 'History'],
              },
              {
                title: 'MapLibre · deck.gl',
                description: '3D·2D 지도와 지진 레이어',
                tags: ['WebGL', 'Map'],
              },
            ],
            connection: 'containerized delivery · contract gates',
          },
          {
            kicker: 'LAYER 06',
            title: 'Runtime & Quality',
            icon: 'runtime',
            nodes: [
              {
                title: 'Docker Runtime',
                description: 'API · Worker · DB · Redis 재현',
                tags: ['Compose', 'Container'],
              },
              {
                title: 'GitHub Actions',
                description: 'Python·API·웹·브라우저 검증',
                tags: ['CI Matrix', 'E2E'],
              },
              {
                title: 'Locked Contracts',
                description: '동일 의존성과 API 계약 재생성',
                tags: ['uv.lock', 'OpenAPI'],
              },
            ],
          },
        ],
        legend: [
          {
            title: '영속 원본과 실시간 계층 분리',
            description: 'PostgreSQL은 사실의 원본, Redis는 작업·잠금·신호 전달 역할만 담당합니다.',
          },
          {
            title: '스냅샷과 변경 신호 분리',
            description: '전체 데이터는 REST로 받고 WebSocket은 변경 sequence만 전달합니다.',
          },
          {
            title: '계약 기반 프론트엔드',
            description: 'FastAPI OpenAPI에서 TypeScript client를 생성해 API 모델 차이를 차단합니다.',
          },
        ],
      },
      ai: {
        label: 'AI-ASSISTED DEVELOPMENT',
        title: 'Codex를 활용한 반복형 개발과 검토',
        tools: ['Codex'],
        summary:
          '아이디어 탐색, 구현 초안, 오류 분석과 문서 구조화에 AI를 활용하고, 각 결과는 Prototype → Plan → Autopilot → Review 사이클의 실행 결과로 검토했습니다.',
        responsibility:
          '제품 범위와 비범위, 기술 선택과 상태의 소유자를 결정했습니다. AI가 제안한 코드는 타입·계약·브라우저 테스트와 실제 화면 검토를 거쳐 수정하거나 제외했으며, 검증되지 않은 운영 성능은 프로젝트 범위에서 명시적으로 분리했습니다.',
        uses: [
          {
            title: 'Prototype',
            description: '지진 수직 슬라이스의 화면과 API 초안을 빠르게 만들고 가장 큰 기술 위험을 확인했습니다.',
          },
          {
            title: 'Autopilot',
            description: 'OpenAPI 생성, URL 필터 E2E와 CI 반복 작업의 구현·테스트 초안을 보조받았습니다.',
          },
          {
            title: 'Review',
            description: '지도 로딩, WebSocket 재연결, 경계값 오류를 분석하고 수정 결과를 다시 검증했습니다.',
          },
        ],
      },
      process: [
        {
          step: '01',
          title: '지진 수직 슬라이스 검증',
          description:
            'USGS 최근 지진 피드를 Celery로 수집하고 PostGIS에 멱등 저장한 뒤 FastAPI REST·WebSocket과 MapLibre/deck.gl 지도까지 연결했습니다.',
          outputs: ['USGS', 'Celery', 'PostGIS', '3D · 2D Map'],
        },
        {
          step: '02',
          title: '탐색 상태와 URL 설계',
          description:
            '시간·규모·깊이 필터를 목록·지도·통계에 동시에 반영하고 URL을 상태 기준으로 사용해 새로고침과 링크 공유를 지원했습니다.',
          outputs: ['URL State', 'Responsive Filter', 'Map Sync', 'E2E'],
        },
        {
          step: '03',
          title: '실시간 복구와 계약 자동화',
          description:
            '전체 데이터 대신 작은 변경 신호를 전달하고 마지막 sequence 이후를 REST로 복구했습니다. FastAPI에서 OpenAPI와 TypeScript client를 생성해 drift를 차단했습니다.',
          outputs: ['REST Catch-up', 'WebSocket', 'OpenAPI', 'TypeScript Client'],
        },
        {
          step: '04',
          title: '재현 가능한 검증 환경',
          description:
            'uv.lock으로 Python 의존성을 고정하고 Python 3.12·3.13, API 컨테이너, 웹·브라우저 검증을 GitHub Actions에서 분리 실행했습니다.',
          outputs: ['uv.lock', 'Python 3.12 · 3.13', 'Container', 'GitHub Actions'],
        },
        {
          step: '05',
          title: '포트폴리오 증거 정리',
          description:
            '프로젝트 브리프와 Build Log에 문제, 판단 기준, 결함과 보류 범위를 기록하고 apps/web·apps/api·packages/api-client 모노레포 경계를 정리했습니다.',
          outputs: ['Project Brief', 'Build Log', 'Monorepo', 'Explicit Scope'],
        },
      ],
      stack: [
        'Next.js',
        'React',
        'TypeScript',
        'FastAPI',
        'PostgreSQL · PostGIS',
        'Celery',
        'Redis',
        'MapLibre · deck.gl',
        'OpenAPI',
        'GitHub Actions',
      ],
      highlights: [
        'USGS 피드를 조건부 요청으로 수집하고 source + external_id 기준 멱등 upsert 적용',
        'PostgreSQL을 영속 원본으로 두고 Redis를 lock·broker·Pub/Sub 역할로 분리',
        'REST snapshot과 compact WebSocket signal을 분리하고 sequence 기반 재연결 복구',
        '시간·규모·깊이 필터를 URL에 보존해 공유·새로고침·뒤로 가기 상태 일치',
        'FastAPI → OpenAPI → TypeScript client 생성과 2단계 drift gate 구성',
        'Python 3.12·3.13과 컨테이너가 동일한 uv.lock을 소비하도록 검증',
        'apps/web·apps/api·packages/api-client 경계의 모노레포 구성',
      ],
      validation: [
        '웹 모델 14개, API client 12개, FastAPI 15개, SSR 4개, 브라우저 10개 로컬 통과',
        'Python 3.12·3.13 API 계약, API 컨테이너와 웹·URL 필터 공개 CI 통과',
        'FastAPI → OpenAPI → TypeScript 계약 drift gate 2개 통과',
        '동일 fixture 재수집 시 신규 사건과 변경 신호 0건으로 멱등성 확인',
      ],
      screenshots: [
        {
          src: '/quakecurrent/project-cover.webp',
          alt: 'QuakeCurrent 프로젝트 문제 정의와 지구본 비주얼',
          caption: 'Project Brief · 문제 정의와 데이터 제품 범위',
          width: 1731,
          height: 909,
        },
        {
          src: '/quakecurrent/workflow.webp',
          alt: 'QuakeCurrent Prototype Plan Autopilot Review 워크플로우 비주얼',
          caption: 'Workflow · Prototype → Plan → Autopilot → Review',
          width: 1731,
          height: 909,
        },
        {
          src: '/quakecurrent/prototype.webp',
          alt: 'QuakeCurrent 초기 지진 관측 프로토타입 비주얼',
          caption: 'Cycle 01 · 지진 수직 슬라이스 프로토타입',
          width: 1731,
          height: 909,
        },
      ],
      detail: {
        backLabel: 'Portfolio',
        repositoryLabel: 'GitHub',
        liveLabel: 'Live Demo',
        eyebrow: 'FULL-STACK DATA CASE STUDY',
        problemLabel: '01 · PROBLEM',
        problemTitle: '문제 정의',
        architectureLabel: '02 · ARCHITECTURE',
        topologyLabel: '03 · SYSTEM TOPOLOGY',
        processLabel: '04 · PROCESS',
        processTitle: '지진 피드에서 복구 가능한 데이터 제품까지',
        buildLabel: '05 · BUILD',
        buildTitle: '주요 구현',
        aiLabel: '06 · AI COLLABORATION',
        validationLabel: '07 · VALIDATION',
        validationTitle: '검증과 경계',
      },
    },
  ],
  notFound: {
    code: '404',
    title: '공개되지 않은 페이지입니다.',
    description: '요청한 Case Study가 없거나 아직 공개되지 않았습니다.',
    backLabel: '포트폴리오로 돌아가기',
  },
};

export const siteMetadata = {
  title: `${portfolio.profile.position} | ${portfolio.site.title}`,
  description: portfolio.site.description,
  socialTitle: `${portfolio.profile.position} | ${portfolio.site.title}`,
  socialDescription: portfolio.site.socialDescription,
  socialTech: portfolio.site.socialTech,
  socialImage: portfolio.site.socialImage,
  locale: portfolio.site.locale,
  themeColor: portfolio.site.themeColor,
};

export const normalizePathname = (pathname) => {
  const normalized = pathname.replace(/\/+$/, '');
  return normalized || '/';
};

export const findPublishedProjectByPath = (pathname, projects) => {
  const normalizedPath = normalizePathname(pathname);
  return projects.find(
    (project) => normalizedPath === `/projects/${project.slug}` && project.published === true,
  );
};

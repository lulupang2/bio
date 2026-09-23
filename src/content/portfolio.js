// Single source of truth for all editable portfolio content.
import { erpKo } from './erp.js';
import { summergearKo } from './summergear.js';

export const portfolio = {
  site: {
    url: 'https://bio.jisung.lol',
    title: '개발자 포트폴리오',
    systemLabel: 'PORTFOLIO SYSTEM / 2026',
    status: 'OPEN TO WORK',
    description:
      'React·Next.js·React Native 기반 웹·앱 개발 경험과, 서버·데이터 처리를 학습하며 만든 개인 프로젝트를 소개합니다.',
    socialDescription: '웹·앱 개발 경험과 개인 프로젝트에서 배우고 구현한 과정을 담았습니다.',
    socialTech: 'React · Next.js · NestJS · FastAPI',
    socialImage: '/og.png',
    locale: 'ko_KR',
    themeColor: '#fdfdfd',
    footer: 'JISUNG · DEVELOPMENT PORTFOLIO / © 2026',
    navigation: [
      { label: 'INTRODUCTION', href: '#top' },
      { label: 'ABOUT', href: '#about' },
      { label: 'TOOLKIT', href: '#skills' },
      { label: 'WORK EXPERIENCE', href: '#experience' },
      { label: 'PERSONAL PROJECTS', href: '#projects' },
      { label: 'EDUCATION', href: '#education' },
      { label: 'GITHUB', href: '#contact' },
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
    kicker: 'FRONTEND · FULLSTACK',
    intro:
      'React·Next.js·React Native로 웹과 앱을 개발해 왔습니다. 화면을 만드는 경험을 바탕으로, 개인 프로젝트에서 서버와 데이터 처리까지 직접 구현하며 개발 범위를 넓히고 있습니다.',
    github: 'https://github.com/lulupang2',
    actions: {
      project: '개인 프로젝트 보기',
      github: 'GitHub',
    },
    proof: [
      { value: '2년', label: '웹·앱 개발' },
      { value: '5개', label: '실무 프로젝트 참여' },
      { value: '5개', label: '개인 프로젝트' },
    ],
    about: [
      '실무에서는 웹과 앱의 사용자 화면을 개발하고, API를 연결해 회원·결제·검색·예약 기능을 구현했습니다. 사용자가 기능을 이용하는 과정과 화면의 상태 변화를 함께 고려하며 작업했습니다.',
      '개인 프로젝트에서는 화면 뒤에서 데이터가 저장되고 전달되는 과정을 직접 만들어 보고 있습니다. 쇼핑몰, 지진 지도, 자료 검색, 제조 업무를 주제로 API·실시간 통신·데이터 처리를 연습하고, 구현한 내용과 아직 부족한 점을 함께 기록합니다.',
    ],
    workflow: {
      label: 'HOW I BUILD',
      note: '작게 만들고, 확인하고, 다시 개선합니다.',
      steps: [
        { title: 'Prototype', description: '핵심 기능을 작게 만들어 먼저 확인합니다.', evidence: 'QuakeCurrent · 수집부터 지도까지', projectSlug: 'quakecurrent' },
        { title: 'Plan', description: '구현 범위와 데이터 구조, 예외 상황을 정리합니다.', evidence: 'Assembly ERP · 생산·재고 처리 규칙', projectSlug: 'assembly-erp' },
        { title: 'Autopilot', description: '테스트와 반복 작업을 자동화합니다.', evidence: 'QuakeCurrent · API 계약 자동 생성', projectSlug: 'quakecurrent' },
        { title: 'Review', description: '동작과 한계를 확인하고 다음 구현에 반영합니다.', evidence: 'Assembly ERP · 부분 생산·재시도 확인', projectSlug: 'assembly-erp' },
      ],
    },
  },
  sections: {
    about: {
      label: '02 · ABOUT',
      title: ['화면을 만드는 경험에서,', '서비스를 이해하는 경험으로.'],
    },
    skills: {
      label: '03 · TOOLKIT',
      title: ['화면부터 서버까지,', '직접 써 보며 익혔습니다.'],
      summary:
        '실무에서는 React·Next.js·React Native로 웹과 앱을 개발했습니다. 서버·데이터·배포 기술은 개인 프로젝트에 적용하며 학습하고 있습니다.',
    },
    experience: {
      label: '04 · WORK EXPERIENCE',
      title: ['실무에서 맡았던 역할과,', '함께 만든 서비스입니다.'],
      summary: '쇼핑몰, 모바일 앱, 전문가 매칭과 예약 서비스에 참여하며 프론트엔드 개발을 담당했습니다.',
    },
    project: {
      label: '01 · PERSONAL PROJECTS',
      title: ['직접 만들고 실험하며,', '배운 것을 기록합니다.'],
      summary: '학습과 포트폴리오를 위해 직접 설계·구현한 개인 프로젝트입니다.',
      note: '구현 내용과 학습 과정, 데모와 소스 코드를 함께 정리했습니다.',
    },
    education: {
      label: '05 · EDUCATION',
    },
    contact: {
      label: 'GITHUB',
      title: ['코드와 개발 기록을', 'GitHub에서 확인하세요.'],
      linkLabel: 'GitHub 둘러보기',
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
    status: '학습·포트폴리오 프로젝트',
    liveUrl: 'https://techzone.jisung.lol/',
    repositoryUrl: 'https://github.com/lulupang2/ecommerce',
    cover: '/techzone/storefront-home.png',
    coverAlt: 'TECHZONE 고객 스토어 홈 화면',
    coverPosition: 'top left',
    category: '01 · COMMERCE · OMS/WMS · MSA',
    gallery: {
      tagline: '상품 탐색부터 주문·반품까지',
      summary: '상품을 고르고 주문하는 화면부터 재고·배송 관리까지 구현했습니다. 여러 서비스 사이의 데이터 흐름과 장애 복구를 연습했습니다.',
      image: '/techzone/storefront-home.png',
      alt: 'TECHZONE 고객 스토어의 상품 탐색 화면',
      caption: '스토어 데모 · 상품 탐색 화면',
    },
    cardBadge: 'SCALABLE ARCHITECTURE',
    caseStudyLabel: '제작 과정과 상세 보기',
    pendingMessage: 'Case Study 공개 준비 중입니다.',
    summary:
      '프론트엔드와 백엔드 연결을 연습하기 위해 만든 개인 커머스 프로젝트입니다. 상품 탐색부터 주문·결제·재고·배송·반품까지 구현하고, 서비스 간 이벤트 처리와 실패 후 복구를 테스트했습니다.',
    problem:
      "주문 한 건이 결제·재고 예약·출고로 이어지는 구조를 구현했습니다. 여기서 중요한 부분은 상품 옵션의 가격과 재고 기준을 맞추는 일, 그리고 주문 저장 후 이벤트가 전달되지 않거나 중복 전달되는 경우를 처리하는 일이었습니다. 실제 PG 연동이 아닌 Mock 결제를 사용하는 개인 프로젝트입니다.",
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
      "label": "AI-ASSISTED DEVELOPMENT",
      "title": "AI에 맡긴 작업과 검토한 부분",
      "tools": [
        "Codex",
        "Antigravity"
      ],
      "summary": "요구사항과 화면·API 코드의 초안을 만드는 데 Codex와 Antigravity를 사용했습니다. 반복 수정과 테스트 케이스 정리에도 도움을 받았고, 적용 여부는 프로젝트의 데이터 흐름과 실행 결과를 보고 결정했습니다.",
      "responsibility": "주문·결제·재고를 어디서 변경할지, 재시도를 어떻게 처리할지 같은 설계 판단은 문서와 테스트를 함께 보며 검토했습니다. 코드가 생성됐다는 사실을 구현 완료로 보지 않고 구매 흐름과 장애 복구 결과를 확인했습니다.",
      "uses": [
        {
          "title": "요구사항 초안",
          "description": "구매·배송·반품 흐름을 정리하고 빠진 상태와 예외를 찾는 데 사용했습니다. 초안은 PRD와 데이터 모델을 맞춰 보며 수정했습니다."
        },
        {
          "title": "화면·API 구현",
          "description": "컴포넌트와 API 초안, 반복되는 구조 변경에 사용했습니다. 서비스가 소유한 데이터와 요청·응답 형식이 맞는지 검토했습니다."
        },
        {
          "title": "테스트와 오류 분석",
          "description": "중복 요청·메시지 재전달·장애 복구의 테스트 케이스와 로그 분석을 보조받았습니다. 수정 후에는 관련 검사를 다시 실행하는 방식으로 작업했습니다."
        }
      ]
    },
    process: [
      {
        "step": "01",
        "title": "상품 옵션을 주문과 재고의 기준으로",
        "description": "같은 상품이라도 색상이나 용량이 다르면 가격과 재고가 달라집니다. 상품 설명은 Product에 두고, 장바구니·주문·재고는 Variant를 참조하도록 맞췄습니다. 주문 전에는 서버의 quote API가 가격·쿠폰·배송비·가용 재고를 다시 계산하게 했습니다.",
        "outputs": [
          "Product / Variant",
          "서버 quote"
        ]
      },
      {
        "step": "02",
        "title": "웹과 앱에서 구매 화면 공유",
        "description": "SPA 프로토타입을 Next.js 스토어로 옮기면서 상품 탐색부터 주문 조회까지 연결했습니다. 웹은 SSR과 상품별 메타데이터를 사용하고, Android는 같은 고객 화면을 Capacitor용으로 빌드합니다. 화면 중복은 줄지만 네이티브 중심의 사용성에는 제약이 있는 선택입니다.",
        "outputs": [
          "Next.js SSR",
          "Capacitor",
          "공유 고객 화면"
        ]
      },
      {
        "step": "03",
        "title": "서비스마다 변경할 데이터를 구분",
        "description": "Gateway 뒤에 주문·결제·재고 등의 NestJS 서비스를 나누고, 각 서비스가 자기 PostgreSQL 데이터를 관리하도록 했습니다. 다른 서비스의 DB를 직접 수정하지 않고 API와 이벤트로 상태를 전달합니다. 학습 범위는 넓어졌지만 서비스가 늘어난 만큼 실행 환경과 장애 추적도 복잡해졌습니다.",
        "outputs": [
          "NestJS",
          "서비스별 DB",
          "API / 이벤트"
        ]
      },
      {
        "step": "04",
        "title": "관리자 조회를 별도 읽기 모델로 분리",
        "description": "관리자 화면에서 주문·결제·재고 서비스를 매번 모아서 조회하지 않도록 Admin Query에 읽기 모델을 뒀습니다. 이벤트를 받아 목록과 집계를 갱신하므로 원본 변경이 바로 보이지 않을 수 있습니다. 이 차이를 확인할 수 있도록 원본 합계 대조와 projection 재생성 절차를 함께 마련했습니다.",
        "outputs": [
          "Admin Query",
          "Projection",
          "원본 합계 대조"
        ]
      },
      {
        "step": "05",
        "title": "주문 저장과 이벤트 발행 사이의 유실 처리",
        "description": "주문만 저장되고 메시지는 발행되지 않는 경우를 다루기 위해 DB 변경과 outbox 기록을 같은 트랜잭션에 넣었습니다. 발행기는 RabbitMQ의 확인을 받은 뒤 완료 처리하고, 수신 측은 inbox의 event ID로 중복을 걸러냅니다. API 재시도에는 별도의 멱등 키를 사용합니다.",
        "outputs": [
          "Outbox / Inbox",
          "Publisher confirm",
          "멱등 키"
        ]
      },
      {
        "step": "06",
        "title": "정상 구매와 장애 후 복구를 따로 확인",
        "description": "회원·비회원 구매, 주문 직전 가격 변경, 중복 요청을 통합 테스트로 확인했습니다. RabbitMQ를 멈춘 상태에서 주문을 저장한 뒤 다시 실행해 outbox와 Saga가 이어지는지도 검사합니다. 결제·택배·SMS는 Mock adapter를 사용하므로 실제 외부 서비스 연동 검증과는 구분합니다.",
        "outputs": [
          "구매 통합 테스트",
          "RabbitMQ 복구",
          "Mock adapter"
        ]
      }
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
      '구현 기록: 회원·비회원 구매, 가격·재고 변경과 중복 요청의 통합 테스트',
      '장애 시나리오: RabbitMQ 중단 후 outbox 재발행과 주문 Saga 복구 검사',
      'Playwright 구매 흐름과 접근성·Lighthouse 검사 구성. 실제 사용자의 성능 지표와는 구분',
      '로그·메트릭·분산 추적을 위한 OpenTelemetry와 Grafana 계열 도구 구성',
      '결제·택배·SMS는 Mock adapter 사용. 실제 PG 승인이나 배송 연동을 검증한 결과가 아님',
    ],
    screenshots: [
      {
        src: '/techzone/storefront-home.png',
        alt: 'TECHZONE 고객 스토어 홈 화면',
        caption: '스토어 데모 · CMS 기반 상품 탐색',
        width: 1440,
        height: 1100,
      },
      {
        src: '/techzone/storefront-product-detail.png',
        alt: 'TECHZONE 상품 상세 화면',
        caption: '상품 상세 데모 · 옵션 선택과 구매 정보',
        width: 1440,
        height: 1100,
      },
      {
        src: '/techzone/admin-dashboard.png',
        alt: 'TECHZONE 관리자 대시보드',
        caption: '관리자 데모 · 주문·재고 지표 화면',
        width: 1440,
        height: 1100,
      },
    ],
    detail: {
      backLabel: 'Portfolio',
      repositoryLabel: 'GitHub',
      liveLabel: 'Live Demo',
      eyebrow: 'PERSONAL PROJECT · COMMERCE',
      problemLabel: '01 · PROBLEM',
      problemTitle: '문제 정의',
      architectureLabel: '02 · ARCHITECTURE',
      topologyLabel: '03 · SYSTEM TOPOLOGY',
      processLabel: '04 · PROCESS',
      processTitle: '쇼핑몰을 만들며 익힌 화면과 서버의 연결',
      buildLabel: '05 · BUILD',
      buildTitle: '주요 구현',
      aiLabel: '06 · AI COLLABORATION',
      validationLabel: '07 · VALIDATION',
      validationTitle: '테스트와 확인한 내용',
    },
    },
    {
      title: 'QuakeCurrent',
      slug: 'quakecurrent',
      published: true,
      status: '학습·포트폴리오 프로젝트',
      liveUrl: 'https://quake.jisung.lol/',
      repositoryUrl: 'https://github.com/lulupang2/QuakeCurrent',
      cover: '/quakecurrent/project-cover.webp',
      coverAlt: 'QuakeCurrent 지진 데이터 프로젝트 브리프',
      coverPosition: 'center',
      category: '02 · REALTIME DATA · MAP · FULL STACK',
      gallery: {
        tagline: '지진 데이터 수집과 실시간 지도',
        summary: '공개 지진 데이터를 수집해 지도에 표시하는 프로젝트입니다. API·실시간 통신·재연결 복구를 하나의 흐름으로 연결하며 학습했습니다.',
        image: '/quakecurrent/prototype.webp',
        alt: '지구본과 지진 신호로 표현한 QuakeCurrent 콘셉트 이미지',
        caption: '지진 관측 · 프로젝트 콘셉트 이미지',
        position: 'left center',
      },
      cardBadge: 'RECOVERABLE DATA FLOW',
      caseStudyLabel: '제작 과정과 상세 보기',
      pendingMessage: 'Case Study 공개 준비 중입니다.',
      summary:
        '실시간 데이터 처리를 학습하기 위해 만든 개인 프로젝트입니다. USGS 지진 피드를 60초마다 수집·정규화하고, REST API와 WebSocket을 통해 3D·2D 지도에 연결했습니다. 연결 중단 후 누락된 변경을 복구하는 방법도 다뤘습니다.',
      problem:
        "외부 피드는 같은 사건을 반복해서 보내거나 내용을 수정할 수 있고, 브라우저 연결은 언제든 끊길 수 있습니다. 수집한 사건과 변경 기록을 DB에 남기고, 화면은 마지막으로 처리한 변경 이후부터 다시 따라갈 수 있도록 나눴습니다.",
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
        "label": "AI-ASSISTED DEVELOPMENT",
        "title": "코드 초안과 오류 분석에 사용한 도구",
        "tools": [
          "Codex"
        ],
        "summary": "Codex로 수집·지도 화면의 코드 초안과 테스트를 작성하고 오류를 분석했습니다. 한 번에 기능을 늘리기보다 수집한 데이터가 화면까지 오는 작은 흐름을 만든 뒤, 필터와 재연결 동작을 확인하며 수정했습니다.",
        "responsibility": "API 계약과 URL 상태, 복구에 사용할 sequence의 기준을 정하고 제안된 코드를 검토했습니다. 타입 검사를 통과해도 실제 지도 로딩이나 브라우저 재연결은 별도로 확인해야 한다는 기준을 유지했습니다.",
        "uses": [
          {
            "title": "처음 연결하는 흐름",
            "description": "USGS 수집부터 API·지도 표시까지 이어지는 초안을 만들고, 데이터가 어느 단계에서 달라지는지 확인하는 데 사용했습니다."
          },
          {
            "title": "반복 검사",
            "description": "OpenAPI 생성과 필터 테스트, CI 설정의 초안을 보조받았습니다. 생성된 계약이 코드와 어긋나면 검사에서 드러나도록 했습니다."
          },
          {
            "title": "오류 재현",
            "description": "지도 로딩·필터 경계값·재연결 문제를 분석하는 데 사용했습니다. 제안된 수정은 관련 테스트와 화면에서 다시 확인했습니다."
          }
        ]
      },
      process: [
        {
          "step": "01",
          "title": "수집한 지진 한 건을 지도까지 연결",
          "description": "처음부터 여러 자연현상을 다루지 않고 USGS 지진 피드로 범위를 좁혔습니다. Celery로 받은 데이터를 PostGIS에 저장하고 FastAPI를 거쳐 지도에 표시했습니다. 같은 피드를 다시 수집했을 때 사건과 변경 기록이 중복으로 생기지 않는지도 확인했습니다.",
          "outputs": [
            "USGS",
            "Celery / PostGIS",
            "중복 수집 검사"
          ]
        },
        {
          "step": "02",
          "title": "필터를 바꿔도 목록과 지도가 같은 결과를 보도록",
          "description": "시간·규모·깊이 필터는 URL에 저장하고 목록·지도·통계가 같은 조건을 사용하게 했습니다. 현재는 받은 스냅샷 안에서 브라우저가 필터를 계산합니다. 새로고침과 링크 공유는 지원하지만, 제한된 스냅샷이 해당 시간대의 모든 지진을 포함한다고 가정하지는 않습니다.",
          "outputs": [
            "URL 필터",
            "목록·지도 동기화",
            "제한된 스냅샷"
          ]
        },
        {
          "step": "03",
          "title": "연결이 끊겨도 마지막 처리 지점부터 복구",
          "description": "WebSocket은 전체 사건 데이터 대신 작은 변경 신호를 보냅니다. 클라이언트는 처리한 sequence를 기억하고, 재연결할 때 REST로 그 이후의 변경을 가져옵니다. PostgreSQL 변경 기록이 복구 기준이며 Redis 신호 자체를 영구 기록으로 쓰지는 않습니다.",
          "outputs": [
            "WebSocket 신호",
            "REST catch-up",
            "Sequence"
          ]
        },
        {
          "step": "04",
          "title": "Python API 변경이 웹 타입에도 반영되도록",
          "description": "FastAPI 스키마에서 OpenAPI와 TypeScript client를 생성하고, 생성물이 원본과 다르면 검사가 실패하게 했습니다. Python 의존성은 uv.lock으로 고정했습니다. API·컨테이너·웹·브라우저 검사를 나눠 어느 부분에서 실패했는지 확인할 수 있게 했습니다.",
          "outputs": [
            "OpenAPI 생성",
            "uv.lock",
            "CI"
          ]
        },
        {
          "step": "05",
          "title": "복구되는 경우와 남은 한계를 구분",
          "description": "Build Log에는 구현 내용뿐 아니라 발견한 결함과 보류 항목도 남겼습니다. 재연결 시 누락을 보충하는 동작과, 연결이 유지되는 동안 모든 신호 유실을 즉시 감지하는 것은 다릅니다. 후자는 보장하지 않으며 로컬·CI 통과도 운영 트래픽 성능으로 표현하지 않았습니다.",
          "outputs": [
            "Build Log",
            "결함·보류 기록",
            "검증 범위"
          ]
        }
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
        '초기 구현 기록: 웹 모델 14개, API client 12개, FastAPI 15개, SSR 4개, 브라우저 10개 로컬 통과',
        '당시 CI 기록: Python 3.12·3.13 API 계약, API 컨테이너와 웹·URL 필터 검사 통과',
        'FastAPI → OpenAPI → TypeScript 생성물 차이를 검사하는 단계 2개 통과 기록',
        '동일 fixture를 다시 수집했을 때 신규 사건과 변경 신호가 0건인 것을 확인한 기록',
        '위 수치는 해당 구현 시점의 결과이며, 현재 배포 상태나 장기 운영 성능을 뜻하지 않음',
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
        eyebrow: 'PERSONAL PROJECT · REALTIME DATA',
        problemLabel: '01 · PROBLEM',
        problemTitle: '문제 정의',
        architectureLabel: '02 · ARCHITECTURE',
        topologyLabel: '03 · SYSTEM TOPOLOGY',
        processLabel: '04 · PROCESS',
        processTitle: '지진 데이터로 익힌 수집·갱신·복구',
        buildLabel: '05 · BUILD',
        buildTitle: '주요 구현',
        aiLabel: '06 · AI COLLABORATION',
        validationLabel: '07 · VALIDATION',
        validationTitle: '검증과 경계',
      },
    },
    {
      title: 'Signal Archive',
      slug: 'signal-archive',
      published: true,
      status: '학습·포트폴리오 프로젝트',
      liveUrl: 'https://signal.jisung.lol/',
      repositoryUrl: 'https://github.com/lulupang2/tech_p',
      cover: '/signal-archive/overview.webp',
      coverAlt: 'Signal Archive 기술 인텔리전스 소스 현황 대시보드',
      coverPosition: 'center',
      category: '03 · TECH INTELLIGENCE · DATA PIPELINE · RAG',
      gallery: {
        tagline: '기술 자료 검색과 출처 기반 답변',
        summary: '기술 자료 수집·검색·출처 확인을 연결하며 RAG 구조를 학습했습니다. 현재는 수집 데이터가 적어 답변에 제약이 있습니다.',
        image: '/signal-archive/qa-panel.webp',
        alt: 'Signal Archive 질의응답 패널의 답변과 인용 출처',
        caption: '질의응답 예시 · 답변과 인용 출처',
      },
      cardBadge: 'PIPELINE & RAG PoC',
      caseStudyLabel: '제작 과정과 상세 보기',
      pendingMessage: 'Case Study 공개 준비 중입니다.',
      summary:
        '기술 자료 수집과 출처 기반 질의응답을 연습한 개인 프로젝트입니다. 수집·검색·인용 검증을 구현했으며, 현재는 수집 데이터가 적어 답변이 제한될 수 있습니다. 구현한 구조와 남은 과제를 함께 정리했습니다.',
      problem:
        "자료가 검색됐다는 이유만으로 질문에 답할 근거가 충분한 것은 아닙니다. 같은 자료가 여러 소스에 중복될 수 있고, 질문에서 지정한 기간과 맞지 않을 수도 있습니다. 수집·중복 정리·기간 필터·인용 검사를 나눠 이 차이를 확인할 수 있도록 만들었습니다.",
      architecture: {
        title: '수집·처리 파이프라인과 근거 기반 질의 계층을 모노레포로 격리했습니다.',
        description:
          'SvelteKit 웹, Node 기반 Elysia API, BullMQ 워커, PostgreSQL + pgvector를 pnpm workspaces와 Turborepo로 구성했습니다. 큐는 작업 전달만 담당하고 데이터 영속 완료 상태는 PostgreSQL에 기록합니다.',
        ariaLabel: 'Signal Archive 수집, 전달, 저장, RAG 질의 구조',
        lanes: [
          {
            id: 'signal-ingestion',
            kicker: '01',
            title: 'Ingestion',
            description: '공개 소스 수집과 안전한 적재',
            nodes: [
              { title: '11 Tech Sources', description: 'GitHub · npm · arXiv · Blogs', tone: 'frontend' },
              { title: 'Collector Workers', description: 'SSRF guard · Rate limiter', tone: 'service' },
              { title: 'Raw Ingestion', description: 'Immutable raw item upsert', tone: 'data' },
            ],
          },
          {
            id: 'signal-processing',
            kicker: '02',
            title: 'Processing',
            description: '정규화와 중복 제거 파이프라인',
            nodes: [
              { title: 'Redis · BullMQ', description: '작업 전달 · 멱등 스케줄러', tone: 'realtime' },
              { title: 'Lexical Dedup', description: 'Exact & Near clustering', tone: 'service' },
              { title: 'Topic & Chunker', description: 'Taxonomy · Heading-aware', tone: 'service' },
              { title: 'Embedding Port', description: 'OpenAI-compatible adapter', tone: 'gateway' },
            ],
          },
          {
            id: 'signal-serving',
            kicker: '03',
            title: 'Serving & RAG',
            description: '하이브리드 검색과 인용 검증',
            nodes: [
              { title: 'PostgreSQL · pgvector', description: 'FTS tsvector · Cosine vector', tone: 'data' },
              { title: 'Elysia API', description: 'Node runtime · TypeBox 계약', tone: 'gateway' },
              { title: 'SvelteKit Web', description: '질문·인용·출처 현황 UI', tone: 'frontend' },
            ],
          },
        ],
        notes: [
          'PostgreSQL을 신뢰 원본으로 두고 Redis + BullMQ는 작업 전달·동시성 제어만 담당합니다.',
          'TypeBox 단일 계약을 정의해 API, 워커, 웹 전반의 런타임 검증과 TypeScript 타입을 동기화했습니다.',
          'chat provider 승인과 production corpus gate 전까지 운영 출시는 보류된 상태를 명시했습니다.',
        ],
      },
      topology: {
        title: '외부 기술 소스에서 근거 기반 질의까지의 토폴로지',
        description:
          '공개 기술 데이터 수집, BullMQ 작업 분배, PostgreSQL pgvector 저장, 하이브리드 검색과 인용 조립 UI까지 계층별 역할을 분리했습니다.',
        ariaLabel: 'Signal Archive 전체 시스템 토폴로지',
        layers: [
          {
            kicker: 'LAYER 01',
            title: 'External Sources',
            icon: 'clients',
            nodes: [
              { title: 'GitHub Releases & Search', description: 'API v3 · 조건부 ETag 수집' },
              { title: 'Stack Exchange & npm', description: '질의별 rate limit & backoff 준수' },
              { title: 'arXiv & Discourse', description: '3초 대기 간격 & 라이선스별 수집' },
              { title: 'Chrome & React Blogs', description: '공통 RSS/HTTP article 수집기' },
            ],
            connection: 'Hardened HTTP · Rate limit · Cursor',
          },
          {
            kicker: 'LAYER 02',
            title: 'Collection & Dispatch',
            icon: 'gateway',
            nodes: [
              { title: 'Collector Ports', description: 'SSRF 방어 · Host allowlist 검증', tone: 'service' },
              { title: 'Redis · BullMQ', description: '소스별 동시성 상한 & 분배', tone: 'realtime' },
              { title: 'Raw Item Upsert', description: 'source + external_id 자연키 적재', tone: 'data' },
            ],
            connection: 'Versioned job payload · Redis queue',
          },
          {
            kicker: 'LAYER 03',
            title: 'Normalization & Pipeline',
            icon: 'services',
            nodes: [
              { title: 'Document Normalizer', description: '결정적 스키마 변환 · Script 제거' },
              { title: 'Lexical Clustering', description: 'EXP-004 Jaccard 0.80 디둡 클러스터', tone: 'service' },
              { title: 'Heading Chunker', description: '코드 블록·테이블 보존 & 토큰 산출' },
            ],
            connection: 'Immutable document revision & chunk ordinal',
          },
          {
            kicker: 'LAYER 04',
            title: 'Authoritative Storage',
            icon: 'data',
            nodes: [
              { title: 'PostgreSQL 17', description: '불변 revision · Provenance 보존', tone: 'data' },
              { title: 'pgvector Extension', description: '1024차원 임베딩 코사인 검색', tone: 'data' },
              { title: 'Full-Text Search', description: 'tsvector / ts_rank 전문 검색', tone: 'data' },
            ],
            connection: 'Drizzle ORM · SQL migration · pgvector',
          },
          {
            kicker: 'LAYER 05',
            title: 'API & RAG Workflow',
            icon: 'gateway',
            nodes: [
              { title: 'Elysia on Node', description: 'REST API · 알 수 없는 필드 거부', tone: 'gateway' },
              { title: 'Query & Time Parser', description: '의도 분석 & 기간 경계 강제' },
              { title: 'Citation Validator', description: '허위 인용 차단 & 라이선스 검증', tone: 'service' },
            ],
            connection: 'TypeBox runtime validation · JSON over HTTP',
          },
          {
            kicker: 'LAYER 06',
            title: 'Web Experience',
            icon: 'clients',
            nodes: [
              { title: 'SvelteKit Dashboard', description: '검증된 소스 현황 & 토픽 탐색', tone: 'frontend' },
              { title: 'Grounded Q&A', description: '기간 설정 & 클릭 가능한 인용 출처', tone: 'frontend' },
              { title: 'Coverage & Health', description: '소스 최신성 경고 & 준비 상태', tone: 'frontend' },
            ],
            connection: 'Typed API Client · Responsive UI',
          },
        ],
        legend: [
          {
            title: '큐와 영속 원본의 분리',
            description: 'Redis + BullMQ는 큐 전달만 맡고, 처리 완료와 비즈니스 상태는 PostgreSQL이 기록합니다.',
          },
          {
            title: '외부 입력 무신뢰 원칙',
            description: '외부 수집 데이터와 모델 생성 텍스트를 모두 검증해 임의 생성된 출처를 차단합니다.',
          },
          {
            title: 'TypeBox 단일 출처 계약',
            description: 'API 요청·응답, 이벤트, 큐 작업 스키마를 단일 정의에서 공유해 drift를 방지합니다.',
          },
        ],
      },
      ai: {
        "label": "RAG WORKFLOW",
        "title": "검색 근거를 답변과 연결하는 과정",
        "tools": [
          "LangGraph.js",
          "Vitest",
          "Playwright"
        ],
        "summary": "질문 해석·검색·근거 구성·인용 검사를 단계로 나눴습니다. 각 단계가 반환하는 형식을 고정해 어디에서 자료가 부족하거나 인용이 어긋나는지 확인할 수 있도록 했습니다. fake model을 사용한 흐름 검사와 실제 모델의 답변 품질 평가는 구분합니다.",
        "responsibility": "근거가 부족한 경우와 구현이 실패한 경우를 구분해 응답하도록 설계했습니다. 검색되지 않은 자료를 인용하거나 사용자가 정한 기간을 임의로 넓히지 않는 것이 기준입니다. 초기 데이터와 모델 제공자 검증이 부족한 상태를 완료된 AI 서비스로 표현하지 않았습니다.",
        "uses": [
          {
            "title": "질문과 기간 해석",
            "description": "질문에서 비교·최근 업데이트 등의 의도와 조회 기간을 구조화합니다. 뒤의 검색 단계는 이 조건을 사용합니다."
          },
          {
            "title": "검색 근거 구성",
            "description": "검색된 문서의 revision·chunk와 출처 정보를 답변 근거로 묶습니다. 자료가 부족하면 그 상태를 응답에 남깁니다."
          },
          {
            "title": "인용 검사",
            "description": "답변의 인용 식별자를 실제 검색 결과와 대조합니다. 응답이 문법적으로 맞는 것과 근거에 맞는 것은 별도로 검사합니다."
          }
        ]
      },
      process: [
        {
          "step": "01",
          "title": "소스마다 가져올 수 있는 데이터부터 구분",
          "description": "GitHub·npm·arXiv처럼 응답 형식과 이용 조건이 다른 소스를 각각 수집기로 나눴습니다. 게시 시각·원문 URL·외부 ID를 공통 필드로 정리하되, 수집 가능한 메타데이터와 본문 저장·표시 범위는 따로 확인했습니다. 수집기를 만들었다는 사실과 실제 데이터가 충분히 쌓였다는 것은 구분했습니다.",
          "outputs": [
            "소스별 수집기",
            "게시 시각",
            "이용 조건"
          ]
        },
        {
          "step": "02",
          "title": "수집 작업과 화면 요청을 분리",
          "description": "API·worker·웹이 주고받는 형식을 TypeBox로 공유했습니다. 수집과 재처리는 BullMQ worker에 두고, PostgreSQL에는 원본과 처리 결과를 남깁니다. Redis는 작업 전달에 사용하며 검색 데이터의 최종 저장소로 취급하지 않습니다.",
          "outputs": [
            "TypeBox",
            "BullMQ",
            "PostgreSQL"
          ]
        },
        {
          "step": "03",
          "title": "원본을 보존하고 중복 문서를 정리",
          "description": "외부 응답은 raw item으로 보존하고 검색용 문서로 변환하는 단계를 나눴습니다. 내용의 핑거프린트로 완전·유사 중복을 묶고, 제목 구조를 기준으로 본문을 청크로 나눕니다. 답변의 출처를 따라갈 수 있도록 revision과 chunk 식별자도 유지했습니다.",
          "outputs": [
            "Raw item",
            "중복 그룹",
            "Revision / Chunk"
          ]
        },
        {
          "step": "04",
          "title": "검색 결과와 답변의 인용을 대조",
          "description": "키워드 검색과 벡터 검색을 함께 사용하고, 질문의 기간 조건에 맞는 문서를 추립니다. 답변의 인용 번호가 실제로 검색된 청크에 있는지 검사합니다. 근거가 부족하면 조회 기간을 임의로 늘리지 않고 insufficient_evidence를 반환하도록 했습니다.",
          "outputs": [
            "키워드·벡터 검색",
            "기간 필터",
            "인용 검사"
          ]
        },
        {
          "step": "05",
          "title": "테스트 통과와 답변 품질을 따로 판단",
          "description": "준비된 DB 데이터와 fake model로 API·브라우저 흐름을 반복 검사했습니다. 이 검사는 검색·인용 처리의 회귀를 확인하는 용도이며 실제 질문에 좋은 답을 한다는 증거는 아닙니다. 초기 데이터 부족과 모델 제공자·골든셋 검증이 남아 있다는 점을 별도로 기록했습니다.",
          "outputs": [
            "Seeded DB",
            "Fake model",
            "남은 품질 평가"
          ]
        }
      ],
      stack: [
        'TypeScript',
        'SvelteKit',
        'Node.js',
        'Elysia',
        'PostgreSQL · pgvector',
        'Drizzle ORM',
        'Redis · BullMQ',
        'Turborepo',
        'Docker',
        'Playwright',
      ],
      highlights: [
        '[구현 완료] GitHub, npm, arXiv, Stack Exchange 등 11개 기술 소스 수집기 및 SSRF 방어 구현',
        '[구현 완료] PostgreSQL을 신뢰 원본으로 두고 Redis + BullMQ를 작업 전달·예약·동시성 제어 계층으로 분리',
        '[구현 완료] TypeBox 단일 계약으로 Elysia API, BullMQ Worker, SvelteKit Web 간 타입과 런타임 검증 동기화',
        '[구현 완료] 정규화, 어휘 핑거프린트 기반 중복 클러스터링, heading-aware 청킹 및 결정적 토픽 분류 구축',
        '[구현 완료] 기간 필터 우선의 PostgreSQL FTS + exact cosine vector 하이브리드 검색 및 인용 검증 설계',
        '[보안 적용] CORS, rate limiting, 프롬프트 인젝션 방어, 비공개 네트워크 접근 차단 등 보안 hardening 적용',
        '[배포 구성] Docker Compose, GHCR 이미지, SSH 기반 롤백 지원 프로덕션 배포 파이프라인 구성',
      ],
      validation: [
        '초기 구현 기록: API 단위·계약 51개, 수집기 152개, 웹 단위 33개와 Playwright E2E 통과',
        '준비된 DB와 fake model을 사용한 회귀 검사이며 실제 모델의 답변 품질 평가와는 구분',
        '초기 수집 자료가 적어 실제 질문에서 insufficient_evidence가 발생하는 한계',
        '기록 시점에 모델 제공자 승인과 골든셋 기반 답변 품질 검증이 남아 있었음',
        '본문 발췌는 출처·이용 조건 표시 검증 후 노출하는 범위로 두고, 검증 전에는 메타데이터 중심으로 인용',
      ],
      screenshots: [
        {
          src: '/signal-archive/overview.webp',
          alt: 'Signal Archive 기술 인텔리전스 소스 현황 대시보드',
          caption: '대시보드 · 검증된 데이터 소스 현황과 최신성 추적',
          width: 1024,
          height: 640,
        },
        {
          src: '/signal-archive/qa-panel.webp',
          alt: 'Signal Archive 근거 기반 AI 질의응답 패널',
          caption: '질의응답 · 기간 필터와 인용 출처 기반 기술 트렌드 분석',
          width: 1024,
          height: 640,
        },
        {
          src: '/signal-archive/topics.webp',
          alt: 'Signal Archive 기술 토픽 카탈로그 화면',
          caption: '토픽 카탈로그 · 표준화된 기술 분류와 연결된 근거 탐색',
          width: 1024,
          height: 640,
        },
        {
          src: '/signal-archive/status.webp',
          alt: 'Signal Archive 파이프라인 시스템 상태 화면',
          caption: '시스템 상태 · API와 데이터 처리 계층의 실시간 헬스체크',
          width: 1024,
          height: 640,
        },
      ],
      detail: {
        backLabel: 'Portfolio',
        repositoryLabel: 'GitHub',
        liveLabel: 'Live Demo',
        eyebrow: 'PERSONAL PROJECT · SEARCH & RAG',
        problemLabel: '01 · PROBLEM',
        problemTitle: '문제 정의',
        architectureLabel: '02 · ARCHITECTURE',
        topologyLabel: '03 · SYSTEM TOPOLOGY',
        processLabel: '04 · PROCESS',
        processTitle: '자료 수집부터 검색·인용 검증까지',
        buildLabel: '05 · BUILD',
        buildTitle: '주요 구현',
        aiLabel: '06 · ANSWER FLOW',
        validationLabel: '07 · VALIDATION',
        validationTitle: '검증과 경계',
      },
    },
    erpKo,
    summergearKo,
  ],
  notFound: {
    code: '404',
    title: '공개되지 않은 페이지입니다.',
    description: '요청한 Case Study가 없거나 아직 공개되지 않았습니다.',
    backLabel: '포트폴리오로 돌아가기',
  },
};

export const siteMetadata = {
  url: portfolio.site.url,
  title: `${portfolio.profile.position} | ${portfolio.site.title}`,
  description: portfolio.site.description,
  socialTitle: `${portfolio.profile.position} | ${portfolio.site.title}`,
  socialDescription: portfolio.site.socialDescription,
  socialTech: portfolio.site.socialTech,
  socialImage: portfolio.site.socialImage,
  locale: portfolio.site.locale,
  themeColor: portfolio.site.themeColor,
};

export const homeJsonLd = (source = portfolio, locale = 'ko') => [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'lulupang2',
    url: `${source.site.url}${locale === 'en' ? '/en' : ''}`,
    jobTitle: source.profile.position,
    sameAs: [source.profile.github],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${source.profile.position} | ${source.site.title}`,
    url: `${source.site.url}${locale === 'en' ? '/en' : ''}`,
    description: source.site.description,
    inLanguage: source.site.locale.startsWith('en') ? 'en' : 'ko',
  },
];

export const projectJsonLd = (project, source = portfolio, locale = 'ko') => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: project.title,
  url: `${source.site.url}${locale === 'en' ? '/en' : ''}/projects/${project.slug}`,
  description: project.summary,
  image: new URL(project.cover, source.site.url).toString(),
  inLanguage: source.site.locale.startsWith('en') ? 'en' : 'ko',
});

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

export const collectSitePaths = ({ projects }) => [
  '/',
  ...projects.filter((project) => project.published === true).map((project) => `/projects/${project.slug}`),
];

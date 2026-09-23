const shared = {
  title: 'SummerGear',
  slug: 'summergear',
  published: true,
  liveUrl: 'https://sg.jisung.lol/',
  repositoryUrl: 'https://github.com/lulupang2/social_commerce',
  cover: '/summergear/home.png',
  coverPosition: 'top',
  category: '05 · WEB & MOBILE · MARKETPLACE',
  cardBadge: 'WEBVIEW & TRANSACTIONS',
  stack: ['Next.js', 'Expo / React Native', 'Go Fiber', 'PostgreSQL', 'River', 'Zod', 'Docker'],
};

export const summergearKo = {
  ...shared,
  status: '학습·포트폴리오 프로젝트 · 테스트 데모',
  coverAlt: 'SummerGear 공개 테스트 홈의 종목 선택과 테스트 장비 목록',
  caseStudyLabel: '제작 과정과 상세 보기',
  gallery: {
    tagline: '스포츠 장비 거래를 웹과 앱으로',
    summary: '서핑·테니스 장비 거래를 주제로 Next.js 화면과 Expo WebView를 연결했습니다. Go API와 River 작업 큐로 주문·재고·테스트 결제의 상태 처리를 학습하고 있습니다.',
    image: shared.cover,
    alt: 'SummerGear 테스트 데모의 장비 탐색 화면',
    caption: '공개 테스트 데모 · 테스트 상품과 임시 이미지',
    position: 'top',
  },
  summary: '서핑·테니스 중고 장비 거래와 커뮤니티를 주제로 만든 개인 프로젝트입니다. Next.js 웹과 Expo WebView 앱이 화면·도메인 계약을 공유하고, Go API와 PostgreSQL 기반 River 작업 큐로 거래 기능을 확장하고 있습니다. 공개 데모는 테스트 데이터와 토스페이먼츠 테스트 환경을 사용합니다.',
  problem: "웹과 앱에서 거래 화면은 공유하되 사진 선택 같은 기기 기능은 따로 연결해야 했습니다. 거래 처리에서는 브라우저에 표시된 완료 상태를 그대로 믿지 않고, 서버의 주문·재고와 PG 결과를 대조하도록 나눴습니다. 현재 공개 환경은 테스트 데이터와 테스트 결제를 사용하는 데모입니다.",
  screenshots: [
    { src: shared.cover, alt: 'SummerGear 장비 탐색 홈', caption: '공개 테스트 홈 · 실제 고객 상품이 아닌 테스트 데이터', width: 960, height: 600 },
    { src: '/summergear/listing.png', alt: 'SummerGear 토스 테스트 전용 서프보드 상세 화면', caption: '모바일 웹 상세 · 테스트 승인·취소용 상품, 앱 실기기 캡처 아님', width: 480, height: 900, displayWidth: 480 },
  ],
  process: [
    {
      "step": "01",
      "title": "Prototype",
      "description": "장비 탐색·상세·판매 등록은 Next.js에 두고 Expo 앱이 WebView로 같은 화면을 열도록 했습니다. 사진 선택과 햅틱은 메시지 브릿지로 기기 쪽에 요청합니다. 웹 코드는 공유할 수 있지만 기기 권한과 앱 복귀 동작은 별도로 확인해야 합니다.",
      "outputs": [
        "공유 화면",
        "사진 선택 브릿지"
      ]
    },
    {
      "step": "02",
      "title": "Plan",
      "description": "웹과 앱이 쓰는 입력 형식은 공통 패키지의 Zod 스키마로 맞췄습니다. Go로 옮기는 매물 기능은 세션에서 소유자를 확인하고, 이미지 업로드 URL도 권한 검사 후 발급합니다. 기존 Supabase 경로와 Go 경로가 함께 남아 있어 인증 전환을 완료한 상태로 표현하지 않았습니다.",
      "outputs": [
        "Zod",
        "Go 서비스 세션",
        "이미지 권한"
      ]
    },
    {
      "step": "03",
      "title": "Autopilot",
      "description": "브라우저의 결제 완료 화면만으로 주문을 승인하지 않고 서버가 주문 금액과 결제 결과를 대조하도록 했습니다. 응답이 불명확하거나 취소 처리가 남은 경우는 River worker가 다시 조회합니다. DB 마이그레이션은 API 시작과 분리된 단계로 실행합니다.",
      "outputs": [
        "결제 결과 대조",
        "River 재시도",
        "독립 마이그레이션"
      ]
    },
    {
      "step": "04",
      "title": "Review",
      "description": "2026-09-23 테스트 배포 기록에서는 간편결제 승인 후 주문·예약 재고를 대조하고, 전체 취소 후 재고가 돌아오는 것을 확인했습니다. 중복 취소와 사용자 결제 취소도 구분해 확인했습니다. 실제 OAuth·모바일 실기기·PG가 직접 보낸 웹훅 수신은 아직 검증이 남아 있습니다.",
      "outputs": [
        "테스트 승인·취소",
        "재고 복원",
        "남은 검증"
      ]
    }
  ],  highlights: [
    'Next.js 웹과 Expo WebView 앱에서 TypeScript·Zod 도메인 계약 공유',
    '사진 선택·햅틱 등 기기 기능을 웹 메시지와 연결하는 네이티브 브릿지 코드',
    'Go 서비스 세션과 CSRF·소유권 검사, 매물 이미지의 서명 URL 업로드 계약',
    '주문·재고 예약·전체 취소 처리와 River 기반 결제 상태 재확인',
    'API·worker·migration·web 역할별 Docker 구성과 독립 마이그레이션 단계',
  ],
  validation: [
    '2026-09-23 포트폴리오 추가 시 공개 홈·매물 상세의 읽기 전용 접근과 화면 캡처 확인',
    '저장소의 배포 기록: 토스 테스트 간편결제 승인·전체 취소·결과 대조, 테스트 DB의 재고 복원 확인',
    '공개 데모는 PostgreSQL fixture 환경이며 실제 Supabase Storage/RLS 서비스 연결과 구분',
    '실제 네이버·카카오 OAuth, 모바일 WebView 실기기 흐름, PG 직접 웹훅 전달은 미검증',
    '실결제·판매자 정산·상용 운영 성과는 범위 밖이며, 진행 중인 거래 코드는 GitHub main과 차이가 있을 수 있음',
  ],
  detail: { backLabel: 'Portfolio', repositoryLabel: 'GitHub', liveLabel: 'Test Demo', eyebrow: 'PERSONAL PROJECT · WEB & MOBILE', problemLabel: '01 · PROBLEM', problemTitle: '화면은 공유하고, 거래 규칙은 서버에서', processLabel: '02 · PROCESS', processTitle: '장비 탐색에서 테스트 결제까지', buildLabel: '03 · BUILD', buildTitle: '주요 구현', validationLabel: '04 · VALIDATION', validationTitle: '확인한 내용과 남은 검증' },
};

export const summergearEn = {
  ...shared,
  status: 'PERSONAL PROJECT · TEST DEMO',
  coverAlt: 'SummerGear public test home with sport filters and test equipment',
  caseStudyLabel: 'View case study',
  gallery: {
    tagline: 'Sports gear trading across web and mobile',
    summary: 'Connected Next.js screens to an Expo WebView for surf and tennis equipment trading. Exploring order, inventory, and test-payment states with a Go API and River jobs.',
    image: shared.cover,
    alt: 'Equipment discovery on the SummerGear test demo',
    caption: 'Public test demo · Test product and placeholder images',
    position: 'top',
  },
  summary: 'A personal project exploring secondhand surf and tennis equipment trading and community features. A Next.js web app and Expo WebView share screens and domain contracts, while a Go API and PostgreSQL-backed River jobs support the evolving transaction flow. The public demo uses fixture data and Toss Payments test mode.',
  problem: "Web and mobile share trading screens, but device features such as photo selection need a separate bridge. For transactions, the server compares order and inventory state with provider results rather than trusting a browser completion screen. The public environment uses fixture data and test payments.",
  screenshots: [
    { src: shared.cover, alt: 'SummerGear equipment discovery home in Korean', caption: 'Public test home with fixture data, not real customer listings', width: 960, height: 600 },
    { src: '/summergear/listing.png', alt: 'SummerGear test surfboard detail in Korean', caption: 'Mobile web detail for payment testing, not a native-device capture', width: 480, height: 900, displayWidth: 480 },
  ],
  process: [
    {
      "step": "01",
      "title": "Prototype",
      "description": "Discovery, listing details, and selling screens live in Next.js; the Expo app opens the same interface in a WebView. Photo selection and haptics go through a message bridge to native code. Sharing screens does not remove the need to check device permissions and app-resume behavior separately.",
      "outputs": [
        "Shared screens",
        "Photo-selection bridge"
      ]
    },
    {
      "step": "02",
      "title": "Plan",
      "description": "Shared Zod schemas keep web and mobile input formats aligned. Listing features moving to Go derive ownership from the service session and issue upload URLs after permission checks. Legacy Supabase paths still coexist with Go paths, so the authentication migration is not described as complete.",
      "outputs": [
        "Zod",
        "Go sessions",
        "Image permissions"
      ]
    },
    {
      "step": "03",
      "title": "Autopilot",
      "description": "A payment callback in the browser is not enough to approve an order. The server compares the stored order amount with the provider result, and River jobs revisit uncertain results or pending cancellations. Database migration runs as a separate step, not during API startup.",
      "outputs": [
        "Payment reconciliation",
        "River retries",
        "Separate migration"
      ]
    },
    {
      "step": "04",
      "title": "Review",
      "description": "The September 23, 2026 test deployment record compares approved payments with orders and reserved stock, then checks inventory restoration after full cancellation. Duplicate cancellation and user-aborted payment are separate cases. Real OAuth, native-device flows, and provider-originated webhook delivery still need verification.",
      "outputs": [
        "Test approval and cancellation",
        "Stock restoration",
        "Remaining checks"
      ]
    }
  ],  highlights: [
    'Shared TypeScript and Zod domain contracts across Next.js and Expo WebView',
    'Native bridge code for photo selection, haptics, and web messages',
    'Go service sessions, CSRF and ownership checks, and signed-URL listing image contracts',
    'Order reservations, full cancellations, and payment reconciliation through River',
    'Separate API, worker, migration, and web Docker roles with a dedicated migration step',
  ],
  validation: [
    'Portfolio check on September 23, 2026: read-only access to public home and listing detail, with screenshots captured',
    'Repository deployment record: Toss test quick-transfer approval, full cancellation, result reconciliation, and fixture inventory restoration',
    'The public demo uses a PostgreSQL fixture, not verified integration with real Supabase Storage/RLS services',
    'Real Naver/Kakao OAuth, native-device WebView flows, and provider-originated webhook delivery remain unverified',
    'Live payments, seller payouts, and commercial usage are out of scope; in-progress transaction code may differ from GitHub main',
  ],
  detail: { backLabel: 'Portfolio', repositoryLabel: 'GitHub', liveLabel: 'Test Demo', eyebrow: 'PERSONAL PROJECT · WEB & MOBILE', problemLabel: '01 · PROBLEM', problemTitle: 'Shared screens, server-owned transaction rules', processLabel: '02 · PROCESS', processTitle: 'From gear discovery to test payments', buildLabel: '03 · BUILD', buildTitle: 'Key implementation', validationLabel: '04 · VALIDATION', validationTitle: 'Evidence and remaining checks' },
};

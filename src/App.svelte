<script>
  import { onMount } from 'svelte';
  import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Check,
    ChevronRight,
    CircleDot,
    Clock3,
    Code2,
    Database,
    Github,
    GraduationCap,
    Layers3,
    Menu,
    ServerCog,
    ShieldCheck,
    Sparkles,
    X,
  } from 'lucide-svelte';
  import { isProjectRouteAvailable, portfolio } from './content.js';

  let pathname = '/';
  let mobileMenuOpen = false;

  const navItems = [
    { label: '소개', href: '#about' },
    { label: '기술', href: '#skills' },
    { label: '경력', href: '#experience' },
    { label: '프로젝트', href: '#project' },
    { label: '학력', href: '#education' },
  ];

  const iconMap = {
    frontend: Code2,
    backend: ServerCog,
    data: Database,
    devops: Layers3,
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  onMount(() => {
    pathname = window.location.pathname;
    const handlePopState = () => (pathname = window.location.pathname);
    window.addEventListener('popstate', handlePopState);

    const ogImage = document.querySelector('meta[property="og:image"]');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    const absoluteOg = new URL('/og.png', window.location.origin).toString();
    ogImage?.setAttribute('content', absoluteOg);
    twitterImage?.setAttribute('content', absoluteOg);

    return () => window.removeEventListener('popstate', handlePopState);
  });

  $: projectIsVisible = isProjectRouteAvailable(pathname, portfolio.project);
  $: isNotFound = pathname !== '/' && !projectIsVisible;
</script>

<svelte:head>
  <title>
    {projectIsVisible
      ? `${portfolio.project.title} | ${portfolio.profile.name}`
      : isNotFound
        ? `페이지를 찾을 수 없습니다 | ${portfolio.profile.name}`
        : `${portfolio.profile.name} | ${portfolio.profile.position}`}
  </title>
</svelte:head>

<a class="skip-link" href="#main-content">본문으로 바로가기</a>

{#if pathname === '/'}
  <header class="site-header">
    <div class="shell header-inner">
      <a class="brand" href="#top" aria-label="홈으로 이동">
        <span>JSI</span>
        <small>PORTFOLIO</small>
      </a>

      <nav class="desktop-nav" aria-label="주요 메뉴">
        {#each navItems as item}
          <a href={item.href}>{item.label}</a>
        {/each}
      </nav>

      <div class="header-actions">
        <a
          class="github-link"
          href={portfolio.profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="지성인 GitHub 새 창에서 열기"
        >
          <Github size={18} />
          <span>GitHub</span>
        </a>
        <button
          class="menu-button"
          type="button"
          aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={mobileMenuOpen}
          on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
        >
          {#if mobileMenuOpen}<X size={22} />{:else}<Menu size={22} />{/if}
        </button>
      </div>
    </div>

    {#if mobileMenuOpen}
      <nav class="mobile-nav" aria-label="모바일 메뉴">
        {#each navItems as item}
          <a href={item.href} on:click={() => (mobileMenuOpen = false)}>{item.label}</a>
        {/each}
      </nav>
    {/if}
  </header>

  <main id="main-content">
    <section id="top" class="hero section">
      <div class="hero-glow glow-one"></div>
      <div class="hero-glow glow-two"></div>
      <div class="shell hero-grid">
        <div class="hero-copy">
          <p class="eyebrow"><span></span> FRONTEND TO FULLSTACK</p>
          <h1>
            화면의 완성도와<br />
            <em>시스템의 흐름</em>을<br />
            함께 설계합니다.
          </h1>
          <p class="hero-description">{portfolio.profile.intro}</p>
          <div class="hero-buttons">
            <a class="button button-primary" href="#project">
              프로젝트 보기 <ArrowRight size={18} />
            </a>
            <a
              class="button button-secondary"
              href={portfolio.profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} /> GitHub
            </a>
          </div>
          <div class="hero-proof" aria-label="주요 경력 요약">
            {#each portfolio.profile.proof as item}
              <div>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            {/each}
          </div>
        </div>

        <div class="hero-panel" aria-label="개발자 프로필 요약">
          <div class="panel-top">
            <span class="availability"><i></i> OPEN TO WORK</span>
            <span class="panel-index">01 / PROFILE</span>
          </div>
          <div class="monogram" aria-hidden="true">JSI</div>
          <div class="panel-identity">
            <p>{portfolio.profile.name}</p>
            <h2>{portfolio.profile.position}</h2>
          </div>
          <dl class="profile-specs">
            <div>
              <dt>FOCUS</dt>
              <dd>Web · Commerce · System</dd>
            </div>
            <div>
              <dt>STACK</dt>
              <dd>React · Next.js · NestJS</dd>
            </div>
            <div>
              <dt>METHOD</dt>
              <dd>UX first, evidence driven</dd>
            </div>
          </dl>
          <div class="panel-lines" aria-hidden="true"><span></span><span></span><span></span></div>
        </div>
      </div>
    </section>

    <section id="about" class="section about-section">
      <div class="shell two-column">
        <div class="section-heading sticky-heading">
          <p class="section-number">01</p>
          <p class="eyebrow">ABOUT</p>
          <h2>검증된 프론트엔드 경험에서<br />서비스 전체로 확장합니다.</h2>
        </div>
        <div class="about-content">
          {#each portfolio.profile.about as paragraph}
            <p>{paragraph}</p>
          {/each}
          <div class="principles">
            {#each portfolio.profile.principles as principle, index}
              <article>
                <span>0{index + 1}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            {/each}
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="section muted-section">
      <div class="shell">
        <div class="section-heading horizontal-heading">
          <div>
            <p class="section-number">02</p>
            <p class="eyebrow">SKILLS</p>
            <h2>기술은 목적보다<br />문제를 기준으로 선택합니다.</h2>
          </div>
          <p>실무에서 다룬 프론트엔드 기술과 TECHZONE을 통해 확장한 백엔드·운영 기술입니다.</p>
        </div>

        <div class="skill-grid">
          {#each portfolio.skills as skill}
            <article class="skill-card">
              <div class="skill-icon">
                <svelte:component this={iconMap[skill.id]} size={22} strokeWidth={1.8} />
              </div>
              <p class="skill-kicker">{skill.kicker}</p>
              <h3>{skill.title}</h3>
              <ul>
                {#each skill.items as item}
                  <li>{item}</li>
                {/each}
              </ul>
            </article>
          {/each}
        </div>
      </div>
    </section>

    <section id="experience" class="section">
      <div class="shell">
        <div class="section-heading horizontal-heading experience-heading">
          <div>
            <p class="section-number">03</p>
            <p class="eyebrow">EXPERIENCE</p>
            <h2>짧은 기간에도 다양한<br />제품 환경을 경험했습니다.</h2>
          </div>
          <div class="career-summary">
            <strong>{portfolio.experience.company}</strong>
            <span>{portfolio.experience.period} · {portfolio.experience.duration}</span>
            <p>{portfolio.experience.role}</p>
          </div>
        </div>

        <div class="experience-list">
          {#each portfolio.experience.projects as project, index}
            <article class="experience-row">
              <div class="experience-index">{String(index + 1).padStart(2, '0')}</div>
              <div class="experience-main">
                <div class="experience-title-row">
                  <h3>{project.title}</h3>
                  <span>{project.period}</span>
                </div>
                <p>{project.description}</p>
                <div class="tag-list">
                  {#each project.tags as tag}<span>{tag}</span>{/each}
                </div>
              </div>
            </article>
          {/each}
        </div>
      </div>
    </section>

    <section id="project" class="section project-section">
      <div class="shell">
        <div class="section-heading project-heading">
          <p class="section-number">04</p>
          <p class="eyebrow">FEATURED PROJECT</p>
          <h2>하나의 프로젝트를<br />끝까지 깊게 만들었습니다.</h2>
        </div>

        <article class="project-card">
          <div class="project-visual">
            <img
              src={portfolio.project.cover}
              alt="TECHZONE 고객 스토어 홈 화면"
              width="1440"
              height="900"
              loading="lazy"
            />
            <div class="project-status"><Clock3 size={16} /> {portfolio.project.status}</div>
          </div>
          <div class="project-copy">
            <div>
              <p class="project-label">COMMERCE · OMS/WMS · MSA</p>
              <h3>{portfolio.project.title}</h3>
              <p>{portfolio.project.summary}</p>
            </div>
            <ul class="project-points">
              {#each portfolio.project.highlights.slice(0, 4) as item}
                <li><Check size={16} /> {item}</li>
              {/each}
            </ul>
            <div class="project-footer">
              <div class="tag-list">
                {#each portfolio.project.stack.slice(0, 6) as tag}<span>{tag}</span>{/each}
              </div>
              {#if portfolio.project.published}
                <a class="project-link" href={`/projects/${portfolio.project.slug}`}>
                  Case Study <ArrowUpRight size={17} />
                </a>
              {:else}
                <span class="project-pending">배포 완료 후 상세 Case Study를 공개합니다.</span>
              {/if}
            </div>
          </div>
        </article>
      </div>
    </section>

    <section id="education" class="section education-section">
      <div class="shell education-grid">
        <div class="section-heading">
          <p class="section-number">05</p>
          <p class="eyebrow">EDUCATION</p>
          <h2>기초를 다시 쌓으며<br />실무 경험을 확장합니다.</h2>
        </div>
        <article class="education-card">
          <GraduationCap size={28} />
          <div>
            <p>{portfolio.education.period}</p>
            <h3>{portfolio.education.school}</h3>
            <span>{portfolio.education.major}</span>
          </div>
          <small>{portfolio.education.status}</small>
        </article>
      </div>
    </section>

    <section id="contact" class="section contact-section">
      <div class="shell contact-inner">
        <div>
          <p class="eyebrow light-eyebrow">CONTACT</p>
          <h2>더 나은 사용자 경험과<br />안정적인 흐름을 함께 만들고 싶습니다.</h2>
        </div>
        <a
          class="contact-button"
          href={portfolio.profile.github}
          target="_blank"
          rel="noreferrer"
        >
          <Github size={22} />
          GitHub에서 작업 보기
          <ArrowUpRight size={20} />
        </a>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="shell footer-inner">
      <p>© 2026 {portfolio.profile.name}. Built with intention.</p>
      <button type="button" on:click={scrollToTop}>맨 위로 <ArrowUpRight size={15} /></button>
    </div>
  </footer>
{:else if projectIsVisible}
  <header class="detail-header">
    <div class="shell">
      <a href="/"><ArrowLeft size={18} /> Portfolio</a>
      <a href={portfolio.project.repositoryUrl} target="_blank" rel="noreferrer">
        GitHub <ArrowUpRight size={16} />
      </a>
    </div>
  </header>

  <main id="main-content" class="detail-main">
    <section class="detail-hero">
      <div class="shell">
        <p class="eyebrow">FEATURED CASE STUDY</p>
        <h1>{portfolio.project.title}</h1>
        <p>{portfolio.project.summary}</p>
        <div class="tag-list detail-tags">
          {#each portfolio.project.stack as tag}<span>{tag}</span>{/each}
        </div>
      </div>
    </section>

    <section class="detail-gallery shell">
      {#each portfolio.project.screenshots as image}
        <figure>
          <img src={image.src} alt={image.alt} width="1440" height="900" />
          <figcaption>{image.caption}</figcaption>
        </figure>
      {/each}
    </section>

    <section class="detail-content shell">
      <article>
        <p class="section-number">01</p>
        <h2>문제 정의</h2>
        <p>{portfolio.project.problem}</p>
      </article>
      <article>
        <p class="section-number">02</p>
        <h2>주요 구현</h2>
        <ul>
          {#each portfolio.project.highlights as item}
            <li><CircleDot size={16} /> {item}</li>
          {/each}
        </ul>
      </article>
      <article>
        <p class="section-number">03</p>
        <h2>검증과 운영</h2>
        <ul>
          {#each portfolio.project.validation as item}
            <li><ShieldCheck size={17} /> {item}</li>
          {/each}
        </ul>
      </article>
    </section>
  </main>
{:else}
  <main id="main-content" class="not-found">
    <div>
      <span>404</span>
      <h1>아직 공개되지 않은 페이지입니다.</h1>
      <p>TECHZONE Case Study는 라이브 데모 배포 후 공개할 예정입니다.</p>
      <a class="button button-primary" href="/"><ArrowLeft size={18} /> 포트폴리오로 돌아가기</a>
    </div>
  </main>
{/if}

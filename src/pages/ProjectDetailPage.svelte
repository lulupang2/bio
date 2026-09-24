<script>
  import { ArrowLeft, ArrowUpRight, CircleDot, ShieldCheck, Sparkles } from '@lucide/svelte';
  import ArchitectureDiagram from '../components/ArchitectureDiagram.svelte';
  import TopologyDiagram from '../components/TopologyDiagram.svelte';
  import { localizedPath } from '../content/i18n.js';

  export let project;
  export let locale = 'ko';
</script>

<header class="detail-header">
  <div class="detail-shell">
    <a href={localizedPath('/', locale)}><ArrowLeft size={18} /> {project.detail?.backLabel || 'Portfolio'}</a>
    <div class="detail-header-actions">
      <a href={localizedPath(`/projects/${project.slug}`, locale === 'en' ? 'ko' : 'en')}>
        {locale === 'en' ? 'KO' : 'EN'} <ArrowUpRight size={16} />
      </a>
      {#if project.liveUrl}
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          {project.detail?.liveLabel || (locale === 'en' ? 'Live Demo' : '데모 열기')} <ArrowUpRight size={16} />
        </a>
      {/if}
      {#if project.repositoryUrl}
        <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
          {project.detail?.repositoryLabel || 'GitHub'} <ArrowUpRight size={16} />
        </a>
      {/if}
    </div>
  </div>
</header>

<main id="main-content" class="detail-main">
  <!-- 01. Introduction / Hero -->
  <section class="detail-hero">
    <div class="detail-shell">
      <p class="section-label">{locale === 'en' ? 'INTRODUCTION' : '소개'}</p>
      <p class="section-label">{project.detail?.eyebrow || 'CASE STUDY'}</p>
      <h1>{project.title}</h1>
      <p>{project.summary}</p>
      {#if project.ai}
        <div class="detail-ai-badge">
          <Sparkles size={16} />
          <span>{project.ai.label}</span>
          <strong>{project.ai.tools.join(' · ')}</strong>
        </div>
      {/if}
    </div>
  </section>

  <!-- 02. Problem -->
  <section class="case-section problem-section detail-shell">
    <div class="case-heading">
      <p class="section-label">{project.detail?.problemLabel || (locale === 'en' ? '01 · PROBLEM' : '01 · 문제 정의')}</p>
      <h2>{project.detail?.problemTitle || (locale === 'en' ? 'Problem Definition' : '문제 정의')}</h2>
    </div>
    <div class="case-copy">
      <p>{project.problem}</p>
    </div>
  </section>

  <!-- 03. Role & Scope -->
  {#if project.role}
    <section class="case-section role-section detail-shell">
      <div class="case-heading">
        <p class="section-label">{project.detail?.roleLabel || (locale === 'en' ? '02 · ROLE & SCOPE' : '02 · 담당 역할')}</p>
        <h2>{project.detail?.roleTitle || (locale === 'en' ? 'Role & Implementation Scope' : '담당 역할과 수행 범위')}</h2>
      </div>
      <div class="case-copy">
        {#if typeof project.role === 'string'}
          <p>{project.role}</p>
        {:else}
          {#if project.role.summary}
            <p>{project.role.summary}</p>
          {/if}
          {#if project.role.items && project.role.items.length > 0}
            <ul class="detail-bullets">
              {#each project.role.items as item}
                <li><CircleDot size={16} /> <span>{item}</span></li>
              {/each}
            </ul>
          {/if}
        {/if}
      </div>
    </section>
  {/if}
  <section class="case-section stack-section detail-shell">
    <div class="case-heading">
      <p class="section-label">{locale === 'en' ? 'STACK' : '기술 스택'}</p>
      <h2>{locale === 'en' ? 'Technologies Used' : '사용 기술'}</h2>
    </div>
    <div class="tag-list detail-tags">
      {#each project.stack as tag}<span>{tag}</span>{/each}
    </div>
  </section>


  <!-- Preserved Architecture Diagram -->
  {#if project.architecture}
    <section class="case-section architecture-section detail-shell">
      <p class="section-label">{project.detail?.architectureLabel || 'ARCHITECTURE'}</p>
      <ArchitectureDiagram architecture={project.architecture} />
    </section>
  {/if}

  <!-- Preserved Topology Diagram -->
  {#if project.topology}
    <section class="case-section topology-section detail-shell">
      <p class="section-label">{project.detail?.topologyLabel || 'SYSTEM TOPOLOGY'}</p>
      <TopologyDiagram topology={project.topology} locale={locale} />
    </section>
  {/if}

  <!-- Gallery / Visuals -->
  {#if project.screenshots && project.screenshots.length > 0}
    <section class="detail-gallery detail-shell" aria-label={`${project.title} visuals`}>
      {#each project.screenshots as image}
        <figure>
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            style={image.displayWidth ? `display:block;max-width:${image.displayWidth}px;margin-inline:auto` : undefined}
            loading="lazy"
            decoding="async"
          />
          <figcaption>{image.caption}</figcaption>
        </figure>
      {/each}
    </section>
  {/if}

  <!-- 04. Process -->
  {#if project.process && project.process.length > 0}
    <section class="case-section detail-shell">
      <div class="case-heading">
        <p class="section-label">{project.detail?.processLabel || (locale === 'en' ? '03 · PROCESS' : '03 · 개발 과정')}</p>
        <h2>{project.detail?.processTitle || (locale === 'en' ? 'Development Process' : '개발 과정')}</h2>
      </div>

      <ol class="process-list">
        {#each project.process as phase}
          <li>
            <span class="process-step">{phase.step}</span>
            <div>
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
              <div class="tag-list process-outputs">
                {#each phase.outputs as output}<span>{output}</span>{/each}
              </div>
            </div>
          </li>
        {/each}
      </ol>
    </section>
  {/if}

  <!-- 05. Technical Decisions -->
  {#if project.decisions && project.decisions.length > 0}
    <section class="case-section decisions-section detail-shell">
      <div class="case-heading">
        <p class="section-label">{project.detail?.decisionsLabel || (locale === 'en' ? '04 · TECHNICAL DECISIONS' : '04 · 기술적 의사결정')}</p>
        <h2>{project.detail?.decisionsTitle || (locale === 'en' ? 'Key Technical Decisions' : '주요 기술적 의사결정')}</h2>
      </div>
      <div class="decisions-grid">
        {#each project.decisions as decision}
          <article class="decision-card">
            <h3>{decision.title}</h3>
            {#if decision.context}
              <p class="decision-item"><strong>{locale === 'en' ? 'Context: ' : '배경: '}</strong>{decision.context}</p>
            {/if}
            <p class="decision-item"><strong>{locale === 'en' ? 'Decision: ' : '결정: '}</strong>{decision.decision}</p>
            {#if decision.impact}
              <p class="decision-item"><strong>{locale === 'en' ? 'Impact: ' : '결과 및 영향: '}</strong>{decision.impact}</p>
            {/if}
          </article>
        {/each}
      </div>
    </section>
  {/if}

  <!-- 06. Troubleshooting -->
  {#if project.troubleshooting && project.troubleshooting.length > 0}
    <section class="case-section troubleshooting-section detail-shell">
      <div class="case-heading">
        <p class="section-label">{project.detail?.troubleshootingLabel || (locale === 'en' ? '05 · TROUBLESHOOTING' : '05 · 트러블슈팅')}</p>
        <h2>{project.detail?.troubleshootingTitle || (locale === 'en' ? 'Troubleshooting & Engineering Challenges' : '엔지니어링 난제와 문제 해결')}</h2>
      </div>
      <div class="troubleshooting-grid">
        {#each project.troubleshooting as issue}
          <article class="troubleshooting-card">
            <h3>{issue.title}</h3>
            {#if issue.problem}
              <p class="trouble-item"><strong>{locale === 'en' ? 'Problem: ' : '증상: '}</strong>{issue.problem}</p>
            {/if}
            {#if issue.cause}
              <p class="trouble-item"><strong>{locale === 'en' ? 'Cause: ' : '원인: '}</strong>{issue.cause}</p>
            {/if}
            {#if issue.solution}
              <p class="trouble-item"><strong>{locale === 'en' ? 'Solution: ' : '해결: '}</strong>{issue.solution}</p>
            {/if}
          </article>
        {/each}
      </div>
    </section>
  {/if}

  <!-- Preserved AI Collaboration -->
  {#if project.ai}
    <section class="ai-collaboration detail-shell">
      <div class="ai-heading">
        <div>
          <p class="section-label">{project.detail?.aiLabel || (locale === 'en' ? 'AI COLLABORATION' : 'AI 협업')}</p>
          <h2>{project.ai.title}</h2>
        </div>
        <div class="tag-list ai-tools">
          {#each project.ai.tools as tool}<span>{tool}</span>{/each}
        </div>
      </div>

      <p class="ai-summary">{project.ai.summary}</p>

      <div class="ai-use-grid">
        {#each project.ai.uses as use, index}
          <article>
            <span>0{index + 1}</span>
            <h3>{use.title}</h3>
            <p>{use.description}</p>
          </article>
        {/each}
      </div>

      <div class="responsibility-note">
        <strong>{locale === 'en' ? 'Developer role and responsibility' : '개발자 역할과 책임'}</strong>
        <p>{project.ai.responsibility}</p>
      </div>
    </section>
  {/if}

  <!-- Preserved Highlights & Validation -->
  {#if (project.highlights && project.highlights.length > 0) || (project.validation && project.validation.length > 0)}
    <section class="detail-content detail-shell">
      {#if project.highlights && project.highlights.length > 0}
        <article>
          <p class="section-label">{project.detail?.buildLabel || (locale === 'en' ? '06 · BUILD' : '06 · 주요 구현')}</p>
          <h2>{project.detail?.buildTitle || (locale === 'en' ? 'Key Implementation' : '주요 구현')}</h2>
          <ul>
            {#each project.highlights as item}
              <li><CircleDot size={16} /> <span>{item}</span></li>
            {/each}
          </ul>
        </article>
      {/if}
      {#if project.validation && project.validation.length > 0}
        <article>
          <p class="section-label">{project.detail?.validationLabel || (locale === 'en' ? '07 · VALIDATION' : '07 · 검증과 경계')}</p>
          <h2>{project.detail?.validationTitle || (locale === 'en' ? 'Validation & Boundaries' : '검증과 경계')}</h2>
          <ul>
            {#each project.validation as item}
              <li><ShieldCheck size={17} /> <span>{item}</span></li>
            {/each}
          </ul>
        </article>
      {/if}
    </section>
  {/if}

  <!-- 08. Outcome & Retrospective -->
  {#if project.outcome}
    <section class="case-section outcome-section detail-shell">
      <div class="case-heading">
        <p class="section-label">{project.detail?.outcomeLabel || (locale === 'en' ? '08 · RESULTS & RETROSPECTIVE' : '08 · 결과와 배움')}</p>
        <h2>{project.detail?.outcomeTitle || (locale === 'en' ? 'Outcomes & Retrospective' : '프로젝트 결과와 배움')}</h2>
      </div>
      <div class="outcome-content">
        {#if typeof project.outcome === 'string'}
          <p class="outcome-summary">{project.outcome}</p>
        {:else}
          {#if project.outcome.summary}
            <p class="outcome-summary">{project.outcome.summary}</p>
          {/if}
          <div class="outcome-grid">
            {#if project.outcome.results && project.outcome.results.length > 0}
              <article class="outcome-card">
                <h3>{locale === 'en' ? 'Key Outcomes' : '주요 성과'}</h3>
                <ul>
                  {#each project.outcome.results as item}
                    <li><CircleDot size={16} /> <span>{item}</span></li>
                  {/each}
                </ul>
              </article>
            {/if}
            {#if project.outcome.learnings && project.outcome.learnings.length > 0}
              <article class="outcome-card">
                <h3>{locale === 'en' ? 'Learnings & Boundaries' : '배운 점과 한계'}</h3>
                <ul>
                  {#each project.outcome.learnings as item}
                    <li><ShieldCheck size={17} /> <span>{item}</span></li>
                  {/each}
                </ul>
              </article>
            {/if}
          </div>
        {/if}
      </div>
    </section>
  {/if}
</main>

<script>
  import { ArrowLeft, ArrowUpRight, CircleDot, ShieldCheck, Sparkles } from 'lucide-svelte';

  export let project;
</script>

<header class="detail-header">
  <div class="detail-shell">
    <a href="/"><ArrowLeft size={18} /> {project.detail.backLabel}</a>
    <div class="detail-header-actions">
      {#if project.liveUrl}
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          {project.detail.liveLabel} <ArrowUpRight size={16} />
        </a>
      {/if}
      {#if project.repositoryUrl}
        <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
          {project.detail.repositoryLabel} <ArrowUpRight size={16} />
        </a>
      {/if}
    </div>
  </div>
</header>

<main id="main-content" class="detail-main">
  <section class="detail-hero">
    <div class="detail-shell">
      <p class="section-label">{project.detail.eyebrow}</p>
      <h1>{project.title}</h1>
      <p>{project.summary}</p>
      {#if project.ai}
        <div class="detail-ai-badge">
          <Sparkles size={16} />
          <span>{project.ai.label}</span>
          <strong>{project.ai.tools.join(' · ')}</strong>
        </div>
      {/if}
      <div class="tag-list detail-tags">
        {#each project.stack as tag}<span>{tag}</span>{/each}
      </div>
    </div>
  </section>

  <section class="detail-gallery detail-shell">
    {#each project.screenshots as image}
      <figure>
        <img
          src={image.src}
          alt={image.alt}
          width={image.width ?? 1440}
          height={image.height ?? 900}
          loading="lazy"
          decoding="async"
        />
        <figcaption>{image.caption}</figcaption>
      </figure>
    {/each}
  </section>

  <section class="case-section problem-section detail-shell">
    <div class="case-heading">
      <p class="section-label">{project.detail.problemLabel}</p>
      <h2>{project.detail.problemTitle}</h2>
    </div>
    <div class="case-copy">
      <p>{project.problem}</p>
    </div>
  </section>

  <section class="case-section detail-shell">
    <div class="case-heading">
      <p class="section-label">{project.detail.processLabel}</p>
      <h2>{project.detail.processTitle}</h2>
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

  {#if project.ai}
    <section class="ai-collaboration detail-shell">
      <div class="ai-heading">
        <div>
          <p class="section-label">{project.detail.aiLabel}</p>
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
        <strong>개발자 역할과 책임</strong>
        <p>{project.ai.responsibility}</p>
      </div>
    </section>
  {/if}

  <section class="detail-content detail-shell">
    <article>
      <p class="section-label">{project.detail.buildLabel}</p>
      <h2>{project.detail.buildTitle}</h2>
      <ul>
        {#each project.highlights as item}
          <li><CircleDot size={16} /> {item}</li>
        {/each}
      </ul>
    </article>
    <article>
      <p class="section-label">{project.detail.validationLabel}</p>
      <h2>{project.detail.validationTitle}</h2>
      <ul>
        {#each project.validation as item}
          <li><ShieldCheck size={17} /> {item}</li>
        {/each}
      </ul>
    </article>
  </section>
</main>

<script>
  import { ArrowUpRight, ExternalLink, GitFork as Github, Sparkles } from '@lucide/svelte';

  export let project;

  $: categoryLabel = project.category.split(' · ').slice(1, 2)[0] || project.category;
  $: coverWidth = project.screenshots?.[0]?.width ?? 16;
  $: coverHeight = project.screenshots?.[0]?.height ?? 9;
  $: coverStyle = `--project-cover-ratio: ${coverWidth} / ${coverHeight}; --project-cover-position: ${project.coverPosition ?? 'center'};`;
</script>

<article class:project-disabled={!project.published} class="featured-project" data-project={project.slug}>
  {#if project.cover}
    {#if project.published}
      <a class="project-thumbnail" href={`/projects/${project.slug}`} style={coverStyle}>
        <img
          src={project.cover}
          alt={project.coverAlt}
          width={coverWidth}
          height={coverHeight}
          loading="lazy"
          decoding="async"
        />
        <span class="project-thumbnail-label">
          {project.caseStudyLabel} <ArrowUpRight size={15} aria-hidden="true" />
        </span>
      </a>
    {:else}
      <div class="project-thumbnail project-thumbnail-disabled" style={coverStyle}>
        <img
          src={project.cover}
          alt={project.coverAlt}
          width={coverWidth}
          height={coverHeight}
          loading="lazy"
          decoding="async"
        />
        <span class="project-thumbnail-label">{project.pendingMessage}</span>
      </div>
    {/if}
  {/if}

  <div class="project-meta">
    <span class="project-type">{categoryLabel}</span>
    <span class="project-badge"><Sparkles size={13} /> {project.cardBadge ?? project.status}</span>
  </div>

  <h3>{project.title}</h3>

  <p class="project-summary">{project.summary}</p>

  <p class="project-stack">{project.stack.slice(0, 5).join(', ')}</p>

  <div class="project-actions">
    {#if project.published && !project.cover}
      <a class="project-link" href={`/projects/${project.slug}`}>
        {project.caseStudyLabel} <ArrowUpRight size={16} />
      </a>
    {:else if !project.published}
      <span class="project-pending">{project.pendingMessage}</span>
    {/if}

    {#if project.liveUrl}
      <a
        class="project-link project-live-link"
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} ${project.detail.liveLabel} 새 창에서 열기`}
      >
        <ExternalLink size={16} aria-hidden="true" /> {project.detail.liveLabel}
        <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    {/if}

    {#if project.repositoryUrl}
      <a
        class="project-link project-source-link"
        href={project.repositoryUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} ${project.detail.repositoryLabel} 새 창에서 열기`}
      >
        <Github size={16} aria-hidden="true" /> {project.detail.repositoryLabel}
        <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    {/if}
  </div>
</article>

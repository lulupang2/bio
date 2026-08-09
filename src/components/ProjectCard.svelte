<script>
  import { ArrowUpRight, GitFork as Github, Sparkles } from '@lucide/svelte';

  export let project;

  $: categoryLabel = project.category.split(' · ').slice(1, 2)[0] || project.category;
</script>

<article class:project-disabled={!project.published} class="featured-project" data-project={project.slug}>
  <div class="project-meta">
    <span class="project-type">{categoryLabel}</span>
    <span class="project-badge"><Sparkles size={13} /> {project.cardBadge ?? project.status}</span>
  </div>

  <h3>
    {#if project.published}
      <a href={`/projects/${project.slug}`}>{project.title}</a>
    {:else}
      {project.title}
    {/if}
  </h3>

  <p class="project-summary">{project.summary}</p>

  <p class="project-stack">{project.stack.slice(0, 5).join(', ')}</p>

  <div class="project-actions">
    {#if project.published}
      <a class="project-link" href={`/projects/${project.slug}`}>
        {project.caseStudyLabel} <ArrowUpRight size={16} />
      </a>
    {:else}
      <span class="project-pending">{project.pendingMessage}</span>
    {/if}

    {#if project.repositoryUrl}
      <a
        class="project-link project-source-link"
        href={project.repositoryUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={16} /> Source Repository <ArrowUpRight size={15} />
      </a>
    {/if}
  </div>
</article>

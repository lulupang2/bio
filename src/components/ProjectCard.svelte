<script>
  import { ArrowUpRight, Check, Clock3, Sparkles } from '@lucide/svelte';

  export let project;
  const CARD_HIGHLIGHT_LIMIT = 3;
  const CARD_STACK_LIMIT = 5;
</script>

<article class:project-disabled={!project.published} class="featured-project" data-project={project.slug}>
  {#if project.published}
    <a
      class="project-image project-image-link"
      href={`/projects/${project.slug}`}
      aria-label={`${project.title} ${project.caseStudyLabel}`}
    >
      <img
        src={project.cover}
        alt={project.coverAlt}
        width="1440"
        height="900"
        loading="lazy"
        decoding="async"
        style={`object-position: ${project.coverPosition ?? 'center'}`}
      />
      <span class="project-status"><Clock3 size={15} /> {project.status}</span>
    </a>
  {:else}
    <div class="project-image">
      <img
        src={project.cover}
        alt={project.coverAlt}
        width="1440"
        height="900"
        loading="lazy"
        decoding="async"
        style={`object-position: ${project.coverPosition ?? 'center'}`}
      />
      <span class="project-status"><Clock3 size={15} /> {project.status}</span>
    </div>
  {/if}

  <div class="project-body">
    <p class="project-category">{project.category}</p>
    {#if project.ai}
      <div class="project-ai-disclosure" aria-label="AI 활용 안내">
        <Sparkles size={15} />
        <span>{project.ai.label}</span>
        <strong>{project.ai.tools.join(' · ')}</strong>
      </div>
    {/if}
    <h3>
      {#if project.published}
        <a href={`/projects/${project.slug}`}>{project.title}</a>
      {:else}
        {project.title}
      {/if}
    </h3>
    <p>{project.summary}</p>

    <ul class="project-points">
      {#each project.highlights.slice(0, CARD_HIGHLIGHT_LIMIT) as item}
        <li><Check size={15} /> {item}</li>
      {/each}
    </ul>

    <div class="tag-list project-tags">
      {#each project.stack.slice(0, CARD_STACK_LIMIT) as tag}<span>{tag}</span>{/each}
    </div>

    {#if project.published}
      <a class="project-link" href={`/projects/${project.slug}`}>
        {project.caseStudyLabel} <ArrowUpRight size={17} />
      </a>
    {:else}
      <div class="project-pending">
        <Clock3 size={16} />
        {project.pendingMessage}
      </div>
    {/if}
  </div>
</article>

<script>
  export let section;
  export let variant = 'default';
</script>

<div
  class="section-title-row"
  class:compact-title={Boolean(section.summary)}
  class:project-heading={variant === 'project'}
>
  <div>
    <p class="section-label">{section.label}</p>
    <h2>{section.title.join(' ')}</h2>
  </div>

  {#if section.summary}
    <p class="section-summary">{section.summary}</p>
  {/if}

  <slot />
</div>

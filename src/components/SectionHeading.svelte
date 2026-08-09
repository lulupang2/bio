<script>
  export let section;
</script>

<div class="section-title-row">
  <div class="section-index">
    <p class="section-label">{section.label}</p>
    <span aria-hidden="true"></span>
  </div>

  <h2>
    {#each section.title as line}
      <span>{line}</span>
    {/each}
  </h2>

  {#if section.summary}
    <p class="section-summary">{section.summary}</p>
  {/if}
</div>

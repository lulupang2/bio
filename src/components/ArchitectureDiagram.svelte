<script>
  export let architecture;
</script>

<div class="architecture-heading">
  <h2>{architecture.title}</h2>
  <p>{architecture.description}</p>
</div>

<div
  class="architecture-diagram"
  role="group"
  aria-label={architecture.ariaLabel ?? architecture.title}
>
  {#each architecture.lanes as lane}
    <section class="architecture-lane" aria-labelledby={`architecture-${lane.id}`}>
      <header>
        <span>{lane.kicker}</span>
        <div>
          <h3 id={`architecture-${lane.id}`}>{lane.title}</h3>
          <p>{lane.description}</p>
        </div>
      </header>

      <div class="architecture-flow">
        {#each lane.nodes as node, index}
          <article class="architecture-node" data-tone={node.tone ?? 'default'}>
            <strong>{node.title}</strong>
            <span>{node.description}</span>
          </article>
          {#if index < lane.nodes.length - 1}
            <span class="architecture-arrow" aria-hidden="true">→</span>
          {/if}
        {/each}
      </div>
    </section>
  {/each}
</div>

{#if architecture.notes?.length}
  <ul class="architecture-notes">
    {#each architecture.notes as note}
      <li>{note}</li>
    {/each}
  </ul>
{/if}

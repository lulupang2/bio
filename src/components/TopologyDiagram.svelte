<script>
  import {
    Activity,
    Boxes,
    CloudCog,
    Database,
    Globe2,
    Network,
    RadioTower,
    ServerCog,
  } from '@lucide/svelte';

  export let topology;
  export let locale = 'ko';

  const icons = {
    clients: Globe2,
    edge: Network,
    services: Boxes,
    messaging: RadioTower,
    data: Database,
    runtime: CloudCog,
    processing: ServerCog,
    observability: Activity,
  };
</script>

<div class="topology-heading">
  <h2>{topology.title}</h2>
  <p>{topology.description}</p>
</div>

<div class="topology-map" role="group" aria-label={topology.ariaLabel ?? topology.title}>
  {#each topology.layers as layer, layerIndex}
    <section class="topology-layer" data-tone={layer.tone ?? 'default'}>
      <header>
        <span class="topology-layer-icon" aria-hidden="true">
          <svelte:component this={icons[layer.icon] ?? Network} size={18} strokeWidth={1.8} />
        </span>
        <div>
          <p>{layer.kicker}</p>
          <h3>{layer.title}</h3>
        </div>
      </header>

      <div class="topology-nodes">
        {#each layer.nodes as node}
          <article class:topology-node-wide={node.wide}>
            <strong>{node.title}</strong>
            <span>{node.description}</span>
            {#if node.tags?.length}
              <div class="topology-node-tags" aria-label={`${node.title} ${locale === 'en' ? 'technologies' : '기술'}`}>
                {#each node.tags as tag}<small>{tag}</small>{/each}
              </div>
            {/if}
          </article>
        {/each}
      </div>
    </section>

    {#if layerIndex < topology.layers.length - 1}
      <div class="topology-connector" aria-hidden="true">
        <span>{layer.connection}</span>
        <i>↓</i>
      </div>
    {/if}
  {/each}
</div>

{#if topology.legend?.length}
  <div class="topology-legend" aria-label={locale === 'en' ? 'Core topology principles' : '토폴로지 핵심 설계 원칙'}>
    {#each topology.legend as item}
      <div>
        <strong>{item.title}</strong>
        <span>{item.description}</span>
      </div>
    {/each}
  </div>
{/if}

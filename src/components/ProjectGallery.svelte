<script>
  import { localizedPath } from '../content/i18n.js';
  export let projects;
  export let locale = 'ko';
  let selected = 0;
  $: active = projects[selected] ?? projects[0];
</script>
<div class="atlas-gallery">
  <div class="atlas-project-list" aria-label={locale === 'en' ? 'Select a project' : '프로젝트 선택'}>
    {#each projects as project, index}
      <button class="atlas-project-row" class:selected={selected === index} aria-pressed={selected === index} aria-controls="project-preview" on:mouseenter={() => selected = index} on:focus={() => selected = index} on:click={() => selected = index}>
        <span class="atlas-project-number">0{index + 1}<small>{project.category.split(' · ').slice(1).join(' / ')}</small></span>
        <span class="atlas-project-title">{project.title}</span>
        <span class="atlas-project-arrow" aria-hidden="true">↗</span>
      </button>
    {/each}
    <p class="atlas-list-note">{locale === 'en' ? 'Independent projects. From interface to infrastructure.' : '화면에서 인프라까지, 직접 만들고 운영한 프로젝트.'}</p>
  </div>
  <div id="project-preview" class="atlas-preview">
    <div class="atlas-image-stage">
      {#each projects as project, index}
        <img class:active={selected === index} src={project.cover} alt={selected === index ? project.coverAlt : ''} aria-hidden={selected !== index} style={`object-position:${project.coverPosition ?? 'top'}`} decoding="async" />
      {/each}
    </div>
    <div class="atlas-preview-copy" aria-live="polite" aria-atomic="true">
      <p class="atlas-preview-category">{active.category}</p>
      <h3>{active.title}</h3>
      <p>{active.summary}</p>
      <small>{active.stack.slice(0, 5).join(' / ')}</small>
    </div>
    <div class="atlas-preview-links">
      {#if active.published}<a href={localizedPath(`/projects/${active.slug}`, locale)}>{locale === 'en' ? 'CASE STUDY' : '제작 과정'} ↗</a>{/if}
      {#if active.liveUrl}<a href={active.liveUrl} target="_blank" rel="noopener noreferrer">LIVE SITE ↗</a>{/if}
      {#if active.repositoryUrl}<a href={active.repositoryUrl} target="_blank" rel="noopener noreferrer">GITHUB ↗</a>{/if}
    </div>
  </div>
</div>

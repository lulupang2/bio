<script>
  import { onMount, tick } from 'svelte';
  import { localizedPath } from '../content/i18n.js';

  export let projects;
  export let locale = 'ko';

  let selected = 0;
  let mobile = false;
  let hoverTimer;
  let gallery;
  let preloadImages = false;
  let imageStates = {};

  const setImageState = (slug, state) => {
    imageStates = { ...imageStates, [slug]: state };
  };
  const imageLoaded = async (event, slug) => {
    const image = event.currentTarget;
    try {
      await image.decode();
      setImageState(slug, 'loaded');
    } catch {
      setImageState(slug, 'error');
    }
  };

  const cancelHover = () => clearTimeout(hoverTimer);
  const previewOnHover = (event, index) => {
    cancelHover();
    if (mobile || event.pointerType !== 'mouse') return;
    // Keep a preview stable while someone is using its links with the keyboard.
    if (document.activeElement?.closest('.atlas-preview')) return;
    hoverTimer = setTimeout(() => { selected = index; }, 150);
  };

  const previewOnFocus = (event, index) => {
    cancelHover();
    if (!mobile && event.currentTarget.matches(':focus-visible')) selected = index;
  };

  const selectProject = async (index, button) => {
    cancelHover();
    selected = mobile && selected === index ? null : index;
    if (!mobile || selected === null) return;
    await tick();
    await new Promise(requestAnimationFrame);
    // Closing an earlier panel can move the selected heading above the viewport.
    if (button.getBoundingClientRect().top < 80) {
      button.scrollIntoView({ block: 'start', behavior: 'instant' });
    }
  };

  onMount(() => {
    const query = window.matchMedia('(max-width: 800px)');
    const syncLayout = () => {
      cancelHover();
      mobile = query.matches;
      if (!mobile && selected === null) selected = 0;
    };
    syncLayout();
    query.addEventListener('change', syncLayout);
    // Warm the four previews as the gallery approaches, before hover or touch.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        preloadImages = true;
        observer.disconnect();
      }
    }, { rootMargin: '300px' });
    observer.observe(gallery);
    return () => {
      cancelHover();
      query.removeEventListener('change', syncLayout);
      observer.disconnect();
    };
  });
</script>

<div bind:this={gallery} class="atlas-gallery" style={`--project-count:${projects.length}`}>
  {#each projects as project, index (project.slug)}
    <div class="atlas-project-item">
      <h3 class="atlas-project-heading" style={`--project-row:${index + 1}`}>
        <button
          id={`project-select-${project.slug}`}
          type="button"
          class="atlas-project-row"
          class:selected={selected === index}
          aria-expanded={selected === index}
          aria-controls={`project-preview-${project.slug}`}
          on:pointerenter={(event) => previewOnHover(event, index)}
          on:pointerleave={cancelHover}
          on:focus={(event) => previewOnFocus(event, index)}
          on:click={(event) => selectProject(index, event.currentTarget)}
        >
          <span class="atlas-project-number">{String(index + 1).padStart(2, '0')}</span>
          <span class="atlas-project-name">
            <span class="atlas-project-title">{project.title}</span>
            <span class="atlas-project-tagline">{project.gallery.tagline}</span>
          </span>
          <span class="atlas-project-indicator" aria-hidden="true">{selected === index ? '−' : '+'}</span>
        </button>
      </h3>

      <section
        id={`project-preview-${project.slug}`}
        class="atlas-preview"
        aria-labelledby={`project-select-${project.slug}`}
        hidden={selected !== index}
      >
        <div class="atlas-preview-content">
          <figure class="atlas-preview-figure">
            <div class="atlas-image-stage" aria-busy={imageStates[project.slug] !== 'loaded' && imageStates[project.slug] !== 'error'}>
              {#if imageStates[project.slug] !== 'loaded'}
                <span class="atlas-image-placeholder" role="status">
                  {imageStates[project.slug] === 'error'
                    ? (locale === 'en' ? 'Image unavailable. Explore the project using the links below.' : '이미지를 불러오지 못했습니다. 아래 링크에서 프로젝트를 확인해 주세요.')
                    : (locale === 'en' ? 'Loading preview…' : '미리보기를 불러오는 중…')}
                </span>
              {/if}
              <img
                class:ready={imageStates[project.slug] === 'loaded'}
                src={project.gallery.image}
                alt={project.gallery.alt}
                style={`object-position:${project.gallery.position ?? 'top'}`}
                loading={preloadImages || selected === index ? 'eager' : 'lazy'}
                decoding="async"
                on:load={(event) => imageLoaded(event, project.slug)}
                on:error={() => setImageState(project.slug, 'error')}
              />
            </div>
            <figcaption>
              <span>{project.gallery.caption}</span>
              <span class="atlas-image-index" aria-hidden="true">{String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
            </figcaption>
          </figure>
          <div class="atlas-preview-copy">
            <p class="atlas-preview-summary">{project.gallery.summary}</p>
            <p class="atlas-preview-stack">{project.stack.slice(0, 5).join(' / ')}</p>
          </div>
          <div class="atlas-preview-links">
            {#if project.published}
              <a class="atlas-case-link" href={localizedPath(`/projects/${project.slug}`, locale)}>
                {locale === 'en' ? 'Case study' : '제작 과정 보기'} <span aria-hidden="true">↗</span>
              </a>
            {/if}
            {#if project.liveUrl}
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">{locale === 'en' ? 'Live demo' : '데모 열기'} <span aria-hidden="true">↗</span></a>
            {/if}
            {#if project.repositoryUrl}
              <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            {/if}
          </div>
        </div>
      </section>
    </div>
  {/each}
  <p class="atlas-list-note">{locale === 'en' ? 'Independent projects. From interface to infrastructure.' : '화면에서 인프라까지, 직접 구현하고 검증한 프로젝트.'}</p>
</div>

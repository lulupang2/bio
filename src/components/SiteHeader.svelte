<script>
  import { localizedPath } from '../content/i18n.js';
  export let site;
  export let github;
  export let theme = 'light';
  export let onToggleTheme = () => {};
  export let locale = 'ko';
  let open = false;
  let toggle;
  $: navigation = ['#top', '#projects', '#about', '#skills', '#experience', '#education', '#contact']
    .map((href) => site.navigation.find((item) => item.href === href)).filter(Boolean);
  const close = () => { open = false; };
  const escape = (event) => {
    if (event.key === 'Escape' && open) { close(); toggle?.focus(); }
  };
</script>
<svelte:window on:keydown={escape} />
<header class="atlas-header">
  <button bind:this={toggle} class="atlas-menu-toggle" aria-expanded={open} aria-controls="atlas-menu" on:click={() => open = !open}>
    <span aria-hidden="true">{open ? '−' : '+'}</span> {open ? (locale === 'en' ? 'CLOSE' : '닫기') : 'MENU'}
  </button>
  <a class="atlas-wordmark" href="#top" on:click={close}>JISUNG<span>WEB & APP DEVELOPER</span></a>
  <div class="atlas-header-actions">
    <a href={localizedPath('/', locale === 'en' ? 'ko' : 'en')} aria-label={locale === 'en' ? '한국어 버전' : 'English version'}>{locale === 'en' ? 'KO' : 'EN'}</a>
    <button on:click={onToggleTheme} aria-label={theme === 'light' ? site.labels.darkTheme : site.labels.lightTheme}>{theme === 'light' ? '◐' : '◑'}</button>
    <a href="#contact" on:click={close}>CONTACT ↗</a>
  </div>
</header>
<nav id="atlas-menu" class="atlas-menu" class:open inert={!open} aria-label={site.labels.navigation}>
  {#each navigation as item, index}
    <a href={item.href} on:click={close} style={`--order:${index}`}><small>0{index + 1}</small>{item.label}<span>↗</span></a>
  {/each}
  <a class="atlas-menu-github" href={github} target="_blank" rel="noopener noreferrer">GITHUB ↗</a>
</nav>

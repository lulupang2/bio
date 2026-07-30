<script>
  import { Github, Moon, Sun } from 'lucide-svelte';

  export let site;
  export let github;
  export let theme = 'light';
  export let onToggleTheme = () => {};
</script>

<header class="top-bar">
  <span class="availability">
    <i></i>
    {site.status}
  </span>

  <div class="top-actions">
    <a
      class="round-action"
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={site.labels.githubAria}
    >
      <Github size={19} />
    </a>
    <button
      class="round-action"
      type="button"
      on:click={onToggleTheme}
      aria-label={theme === 'light'
        ? site.labels.darkTheme
        : site.labels.lightTheme}
    >
      {#if theme === 'light'}<Moon size={19} />{:else}<Sun size={19} />{/if}
    </button>
  </div>
</header>

<nav class="section-nav" aria-label={site.labels.navigation}>
  {#each site.navigation as item}
    <a href={item.href}>{item.label}</a>
  {/each}
</nav>

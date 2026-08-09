<script>
  import { onMount } from 'svelte';
  import { ArrowUpRight, GitFork as Github, Moon, Sun } from '@lucide/svelte';

  export let site;
  export let github;
  export let theme = 'light';
  export let onToggleTheme = () => {};

  let activeHref = '#top';

  onMount(() => {
    const sections = site.navigation
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) activeHref = `#${visible.target.id}`;
      },
      { rootMargin: '-18% 0px -62% 0px', threshold: [0, 0.2, 0.55] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  });
</script>

<aside class="site-rail">
  <div class="rail-inner">
    <div>
      <p class="system-label">{site.systemLabel}</p>

      <nav class="section-nav" aria-label={site.labels.navigation}>
        {#each site.navigation as item}
          <a
            href={item.href}
            class:is-active={activeHref === item.href}
            aria-current={activeHref === item.href ? 'location' : undefined}
          >
            <span aria-hidden="true">→</span>
            {item.label}
          </a>
        {/each}
      </nav>
    </div>

    <div class="rail-footer">
      <span class="availability">
        <i aria-hidden="true"></i>
        {site.status}
      </span>

      <div class="rail-actions">
        <a
          class="rail-action"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={site.labels.githubAria}
        >
          <Github size={16} />
          <span>GITHUB</span>
          <ArrowUpRight size={14} />
        </a>
        <button
          class="rail-action"
          type="button"
          on:click={onToggleTheme}
          aria-label={theme === 'light' ? site.labels.darkTheme : site.labels.lightTheme}
        >
          {#if theme === 'light'}<Moon size={15} />{:else}<Sun size={15} />{/if}
          <span>THEME</span>
        </button>
      </div>
    </div>
  </div>
</aside>

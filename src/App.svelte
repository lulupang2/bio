<script>
  import { onMount } from 'svelte';
  import {
    findPublishedProjectByPath,
    normalizePathname,
    portfolio,
    siteMetadata,
  } from './content/portfolio.js';
  import HomePage from './pages/HomePage.svelte';
  import NotFoundPage from './pages/NotFoundPage.svelte';
  import ProjectDetailPage from './pages/ProjectDetailPage.svelte';

  let pathname = typeof window === 'undefined' ? '/' : window.location.pathname;
  let theme = 'light';
  let scrollProgress = 0;

  const setTheme = (nextTheme) => {
    theme = nextTheme;
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem('portfolio-theme', nextTheme);
  };

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  onMount(() => {
    pathname = window.location.pathname;
    const savedTheme = localStorage.getItem('portfolio-theme');
    setTheme(savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

    const handlePopState = () => (pathname = window.location.pathname);
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0;
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const ogImage = document.querySelector('meta[property="og:image"]');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    const absoluteOg = new URL(siteMetadata.socialImage, window.location.origin).toString();
    ogImage?.setAttribute('content', absoluteOg);
    twitterImage?.setAttribute('content', absoluteOg);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('scroll', handleScroll);
    };
  });

  $: normalizedPath = normalizePathname(pathname);
  $: selectedProject = findPublishedProjectByPath(normalizedPath, portfolio.projects);
  $: isNotFound = normalizedPath !== '/' && !selectedProject;
</script>

<svelte:head>
  <title>
    {selectedProject
      ? `${selectedProject.title} | ${portfolio.site.title}`
      : isNotFound
        ? `${portfolio.site.labels.notFoundPageTitle} | ${portfolio.site.title}`
        : siteMetadata.title}
  </title>
</svelte:head>

<a class="skip-link" href="#main-content">{portfolio.site.labels.skipLink}</a>
<div class="scroll-progress" style={`width: ${scrollProgress}%`}></div>

{#if normalizedPath === '/'}
  <HomePage {portfolio} {theme} onToggleTheme={toggleTheme} />
{:else if selectedProject}
  <ProjectDetailPage project={selectedProject} />
{:else}
  <NotFoundPage notFound={portfolio.notFound} />
{/if}

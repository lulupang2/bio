<script>
  import { onMount, tick } from 'svelte';
  import {
    findPublishedProjectByPath,
    homeJsonLd,
    normalizePathname,
    portfolio,
    projectJsonLd,
    siteMetadata,
  } from './content/portfolio.js';
  import { getPortfolio, localeFromPath, localizedPath, stripLocale } from './content/i18n.js';
  import HomePage from './pages/HomePage.svelte';
  import NotFoundPage from './pages/NotFoundPage.svelte';
  import ProjectDetailPage from './pages/ProjectDetailPage.svelte';

  let pathname = typeof window === 'undefined' ? '/' : window.location.pathname;
  let locale = localeFromPath(pathname);
  $: currentPortfolio = getPortfolio(locale);
  let theme = 'light';
  let scrollProgress = 0;

  const siteUrl = portfolio.site.url;
  const scrollPositions = new Map();

  const setTheme = (nextTheme) => {
    theme = nextTheme;
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem('portfolio-theme', nextTheme);
  };

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const setMetaContent = (selector, content) => {
    document.querySelector(selector)?.setAttribute('content', content);
  };

  const setNoindex = (enabled) => {
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (enabled && !robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      robotsMeta.setAttribute('content', 'noindex');
      document.head.appendChild(robotsMeta);
    }
    if (!enabled) robotsMeta?.remove();
  };

  const setJsonLd = (data) => {
    const script = document.getElementById('jsonld-home');
    if (script) script.textContent = JSON.stringify(data);
  };

  const applyRouteMeta = (project, notFound) => {
    if (typeof document === 'undefined') return;
    const canonical = document.querySelector('link[rel="canonical"]');
    if (project) {
      const projectUrl = `${siteUrl}${localizedPath(`/projects/${project.slug}`, locale)}`;
      const image = new URL(project.cover, siteUrl).toString();
      const title = `${project.title} | ${currentPortfolio.site.title}`;
      document.querySelector('meta[name="description"]')?.setAttribute('content', project.summary);
      setMetaContent('meta[property="og:title"]', title);
      setMetaContent('meta[property="og:description"]', project.summary);
      setMetaContent('meta[property="og:image"]', image);
      setMetaContent('meta[property="og:url"]', projectUrl);
      setMetaContent('meta[name="twitter:title"]', title);
      setMetaContent('meta[name="twitter:description"]', project.summary);
      setMetaContent('meta[name="twitter:image"]', image);
      canonical?.setAttribute('href', projectUrl);
      setNoindex(false);
      setJsonLd(projectJsonLd(project, currentPortfolio, locale));
    } else if (notFound) {
      canonical?.setAttribute('href', `${siteUrl}${localizedPath('/', locale)}`);
      setNoindex(true);
      setJsonLd(homeJsonLd(currentPortfolio, locale));
    } else {
      document.querySelector('meta[name="description"]')?.setAttribute('content', siteMetadata.description);
      const localizedMetadata = locale === 'en' ? getPortfolio('en') : portfolio;
      const localizedSiteMetadata = {
        ...siteMetadata,
        title: `${localizedMetadata.profile.position} | ${localizedMetadata.site.title}`,
        description: localizedMetadata.site.description,
        socialTitle: `${localizedMetadata.profile.position} | ${localizedMetadata.site.title}`,
        socialDescription: localizedMetadata.site.socialDescription,
        socialTech: localizedMetadata.site.socialTech,
        socialImage: localizedMetadata.site.socialImage,
      };
      setMetaContent('meta[property="og:title"]', localizedSiteMetadata.socialTitle);
      setMetaContent('meta[property="og:description"]', localizedSiteMetadata.socialDescription);
      setMetaContent('meta[property="og:image"]', new URL(localizedSiteMetadata.socialImage, siteUrl).toString());
      setMetaContent('meta[property="og:url"]', `${siteUrl}${localizedPath('/', locale)}`);
      setMetaContent('meta[name="twitter:title"]', localizedSiteMetadata.socialTitle);
      setMetaContent('meta[name="twitter:description"]', localizedSiteMetadata.socialTech);
      setMetaContent('meta[name="twitter:image"]', new URL(localizedSiteMetadata.socialImage, siteUrl).toString());
      canonical?.setAttribute('href', `${siteUrl}${localizedPath('/', locale)}`);
      setNoindex(false);
      setJsonLd(homeJsonLd(currentPortfolio, locale));
    }
  };

  const scrollToHash = (hash) => {
    const target = document.getElementById(hash.slice(1));
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    target?.scrollIntoView({ behavior, block: 'start' });
  };

  const navigateTo = (url) => {
    const nextPath = normalizePathname(url.pathname);
    const samePath = normalizePathname(pathname) === nextPath;
    if (samePath) {
      if (url.hash) scrollToHash(url.hash);
      else window.scrollTo({ top: 0 });
      history.pushState({ path: nextPath }, '', url.href);
      return;
    }
    scrollPositions.set(normalizePathname(pathname), window.scrollY);
    history.pushState({ path: nextPath }, '', url.href);
    pathname = nextPath;
    tick().then(() => {
      if (url.hash) scrollToHash(url.hash);
      else window.scrollTo(0, 0);
    });
  };

  const handleInternalClick = (event) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const anchor = event.target.closest('a');
    if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return;
    if (!anchor.getAttribute('href')) return;
    let url;
    try {
      url = new URL(anchor.href, window.location.origin);
    } catch {
      return;
    }
    if (url.origin !== window.location.origin) return;
    event.preventDefault();
    navigateTo(url);
  };

  onMount(() => {
    pathname = window.location.pathname;
    locale = localeFromPath(pathname);
    const savedTheme = localStorage.getItem('portfolio-theme');
    setTheme(savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';

    const handlePopState = () => {
      pathname = window.location.pathname;
      locale = localeFromPath(pathname);
      tick().then(() => {
        const savedScroll = scrollPositions.get(normalizePathname(pathname));
        window.scrollTo(0, savedScroll ?? 0);
      });
    };
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0;
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleInternalClick);
    handleScroll();

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleInternalClick);
    };
  });

  $: locale = localeFromPath(pathname);
  $: if (typeof document !== 'undefined') {
    document.documentElement.lang = locale === 'en' ? 'en' : 'ko';
  }
  $: normalizedPath = normalizePathname(stripLocale(pathname));
  $: selectedProject = findPublishedProjectByPath(normalizedPath, currentPortfolio.projects);
  $: isNotFound = normalizedPath !== '/' && !selectedProject;
  $: applyRouteMeta(selectedProject, isNotFound);
</script>

<svelte:head>
  <title>
    {selectedProject
      ? `${selectedProject.title} | ${currentPortfolio.site.title}`
      : isNotFound
        ? `${currentPortfolio.site.labels.notFoundPageTitle} | ${currentPortfolio.site.title}`
        : `${currentPortfolio.profile.position} | ${currentPortfolio.site.title}`}
  </title>
</svelte:head>

<a class="skip-link" href="#main-content">{currentPortfolio.site.labels.skipLink}</a>
<div class="scroll-progress" style={`width: ${scrollProgress}%`}></div>

{#if normalizedPath === '/'}
  <HomePage portfolio={currentPortfolio} {theme} {locale} onToggleTheme={toggleTheme} />
{:else if selectedProject}
  <ProjectDetailPage project={selectedProject} {locale} />
{:else}
  <NotFoundPage notFound={currentPortfolio.notFound} locale={locale} />
{/if}

<script>
  import {
    ArrowRight,
    ArrowUpRight,
    GitFork as Github,
  } from '@lucide/svelte';
  import ProjectCard from '../components/ProjectCard.svelte';
  import SectionHeading from '../components/SectionHeading.svelte';
  import SiteHeader from '../components/SiteHeader.svelte';
  import { localizedPath } from '../content/i18n.js';

  export let portfolio;
  export let theme = 'light';
  export let locale = 'ko';
  export let onToggleTheme = () => {};

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  const reveal = (node) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.classList.add('is-visible');
      return {};
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(node);
    return { destroy: () => observer.disconnect() };
  };
</script>

<div class="page-wrap">
  <SiteHeader site={portfolio.site} github={portfolio.profile.github} {theme} {locale} {onToggleTheme} />

  <div class="content-column">
    <main id="main-content">
      <section id="top" class="profile-card reveal is-visible">
        <p class="profile-kicker"><i aria-hidden="true"></i>[{portfolio.profile.kicker}]</p>
        <h1>
          <span>{portfolio.profile.positionLines[0]}</span>
          <mark>{portfolio.profile.positionLines[1]}</mark>
        </h1>
        <p class="profile-intro">{portfolio.profile.intro}</p>

        <div class="profile-actions">
          <a class="button button-primary" href="#projects">
            {portfolio.profile.actions.project} <ArrowRight size={17} />
          </a>
          <a
            class="button button-secondary"
            href={portfolio.profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={17} /> {portfolio.profile.actions.github}
          </a>
        </div>

        <div class="proof-grid" aria-label={portfolio.site.labels.proof}>
          {#each portfolio.profile.proof as item}
            <div>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          {/each}
        </div>
      </section>

      <section id="about" class="editorial-section reveal" use:reveal>
        <SectionHeading section={portfolio.sections.about} />

      <div class="about-copy">
        {#each portfolio.profile.about as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>

      <div class="principle-grid">
        {#each portfolio.profile.principles as principle, index}
          <article>
            <span>0{index + 1}</span>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </article>
        {/each}
      </div>
      </section>

      <section id="skills" class="editorial-section reveal" use:reveal>
        <SectionHeading section={portfolio.sections.skills} />

      <div class="skills-list">
        {#each portfolio.skills as skill}
          <article class="skill-group">
            <div>
              <span>{skill.kicker}</span>
              <h3>{skill.title}</h3>
            </div>
            <ul>
              {#each skill.items as item}
                <li>{item}</li>
              {/each}
            </ul>
          </article>
        {/each}
      </div>
      </section>

      <section id="experience" class="editorial-section reveal" use:reveal>
        <SectionHeading section={portfolio.sections.experience} />

      <div class="experience-grid">
        {#each portfolio.experience.projects as project, index}
          <article class="experience-card">
            <div class="experience-top">
              <span>0{index + 1}</span>
              <small>{project.period}</small>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div class="tag-list">
              {#each project.tags as tag}<span>{tag}</span>{/each}
            </div>
          </article>
        {/each}
      </div>
      </section>

      <section id="projects" class="editorial-section project-section reveal" use:reveal>
        <SectionHeading section={portfolio.sections.project} />

      <div class="projects-list">
        {#each portfolio.projects as project}
          <ProjectCard {project} {locale} />
        {/each}
      </div>
      </section>

      <section id="education" class="linear-section education-section reveal" use:reveal>
        <div class="section-index">
          <p class="section-label">{portfolio.sections.education.label}</p>
          <span aria-hidden="true"></span>
        </div>
        <div class="education-row">
          <span class="education-status">{portfolio.education.status}</span>
          <div>
          <h2>{portfolio.education.school}</h2>
            <p>{portfolio.education.major}</p>
          </div>
          <small>{portfolio.education.period}</small>
        </div>
      </section>

      <section id="contact" class="linear-section contact-card reveal" use:reveal>
        <div class="section-index">
          <p class="section-label">{portfolio.sections.contact.label}</p>
          <span aria-hidden="true"></span>
        </div>
        <div class="contact-content">
          <h2>{portfolio.sections.contact.title.join(' ')}</h2>
          <a
            class="contact-link"
            href={portfolio.profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={19} />
            {portfolio.sections.contact.linkLabel}
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>{portfolio.site.footer}</p>
      <button type="button" on:click={scrollToTop}>
        {portfolio.site.labels.backToTop} <ArrowUpRight size={14} />
      </button>
    </footer>
  </div>
</div>

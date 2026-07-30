<script>
  import {
    ArrowRight,
    ArrowUpRight,
    GitFork as Github,
    GraduationCap,
    Layers3,
  } from '@lucide/svelte';
  import ProjectCard from '../components/ProjectCard.svelte';
  import SectionHeading from '../components/SectionHeading.svelte';
  import SiteHeader from '../components/SiteHeader.svelte';

  export let portfolio;
  export let theme = 'light';
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

<div class="ambient ambient-one" aria-hidden="true"></div>
<div class="ambient ambient-two" aria-hidden="true"></div>

<div class="page-wrap">
  <SiteHeader site={portfolio.site} github={portfolio.profile.github} {theme} {onToggleTheme} />

  <main id="main-content">
    <section id="top" class="profile-card reveal is-visible">
      <p class="profile-kicker">{portfolio.profile.kicker}</p>
      <h1>{portfolio.profile.position}</h1>
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
      <SectionHeading section={portfolio.sections.project} variant="project">
        <Layers3 size={30} strokeWidth={1.5} />
      </SectionHeading>

      <div class="projects-list">
        {#each portfolio.projects as project}
          <ProjectCard {project} />
        {/each}
      </div>
    </section>

    <section id="education" class="meta-grid reveal" use:reveal>
      <article class="meta-card">
        <div class="meta-icon"><GraduationCap size={24} /></div>
        <div>
          <p class="section-label">{portfolio.sections.education.label}</p>
          <h2>{portfolio.education.school}</h2>
          <p>{portfolio.education.major} · {portfolio.education.status}</p>
        </div>
        <small>{portfolio.education.period}</small>
      </article>

      <article class="contact-card">
        <div>
          <p class="section-label">{portfolio.sections.contact.label}</p>
          <h2>{portfolio.sections.contact.title.join(' ')}</h2>
        </div>
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
      </article>
    </section>
  </main>

  <footer class="footer">
    <p>{portfolio.site.footer}</p>
    <button type="button" on:click={scrollToTop}>
      {portfolio.site.labels.backToTop} <ArrowUpRight size={14} />
    </button>
  </footer>
</div>

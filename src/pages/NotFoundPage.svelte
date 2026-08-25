<script>
  import { ArrowLeft } from '@lucide/svelte';

  export let notFound;
  export let locale = 'ko';
</script>

<main id="main-content" class="not-found">
  <div>
    <span>{notFound.code}</span>
    <h1>{notFound.title}</h1>
    <p>{notFound.description}</p>
    <a class="button button-primary" href={locale === 'en' ? '/en' : '/'}>
      <ArrowLeft size={18} /> {notFound.backLabel}
    </a>
  </div>
</main>

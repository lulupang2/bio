import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { siteMetadata } from './src/content/portfolio.js';

const metadataTokens = {
  __SITE_TITLE__: siteMetadata.title,
  __SITE_DESCRIPTION__: siteMetadata.description,
  __SITE_THEME_COLOR__: siteMetadata.themeColor,
  __SITE_LOCALE__: siteMetadata.locale,
  __SOCIAL_TITLE__: siteMetadata.socialTitle,
  __SOCIAL_DESCRIPTION__: siteMetadata.socialDescription,
  __SOCIAL_TECH__: siteMetadata.socialTech,
  __SOCIAL_IMAGE__: siteMetadata.socialImage,
};

const contentMetadataPlugin = {
  name: 'portfolio-content-metadata',
  transformIndexHtml(html) {
    return Object.entries(metadataTokens).reduce(
      (output, [token, value]) => output.replaceAll(token, value),
      html,
    );
  },
};

export default defineConfig({
  plugins: [svelte(), contentMetadataPlugin],
});

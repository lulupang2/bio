import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { homeJsonLd, portfolio, siteMetadata } from './src/content/portfolio.js';

const metadataTokens = {
  __SITE_TITLE__: siteMetadata.title,
  __SITE_NAME__: portfolio.site.title,
  __SITE_DESCRIPTION__: siteMetadata.description,
  __SITE_THEME_COLOR__: siteMetadata.themeColor,
  __SITE_LOCALE__: siteMetadata.locale,
  __SITE_URL__: siteMetadata.url,
  __SOCIAL_TITLE__: siteMetadata.socialTitle,
  __SOCIAL_DESCRIPTION__: siteMetadata.socialDescription,
  __SOCIAL_TECH__: siteMetadata.socialTech,
  __SOCIAL_IMAGE__: siteMetadata.socialImage,
  __HOME_JSON_LD__: JSON.stringify(homeJsonLd(portfolio)),
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

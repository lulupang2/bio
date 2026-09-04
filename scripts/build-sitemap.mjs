import { mkdir, writeFile } from 'node:fs/promises';
import { collectSitePaths, portfolio } from '../src/content/portfolio.js';

const siteUrl = portfolio.site.url;
const paths = [
  ...collectSitePaths(portfolio),
  '/en',
  ...collectSitePaths(portfolio).filter((path) => path !== '/').map((path) => `/en${path}`),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`).join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

const distDir = new URL('../dist/', import.meta.url);
await mkdir(distDir, { recursive: true });
await writeFile(new URL('sitemap.xml', distDir), sitemap);
await writeFile(new URL('robots.txt', distDir), robots);

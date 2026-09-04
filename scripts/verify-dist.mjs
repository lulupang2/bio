import { existsSync, readFileSync } from 'node:fs';

const distDir = new URL('../dist/', import.meta.url);
const failures = [];

const requireFile = (relativePath) => {
  if (!existsSync(new URL(relativePath, distDir))) {
    failures.push(`dist/${relativePath} 누락`);
  }
};

requireFile('index.html');
requireFile('sitemap.xml');
requireFile('robots.txt');
requireFile('favicon.svg');
requireFile('manifest.webmanifest');
requireFile('server/index.js');

const indexHtml = readFileSync(new URL('index.html', distDir), 'utf8');
const leftoverToken = indexHtml.match(/__[A-Z_]+__/);
if (leftoverToken) failures.push(`index.html에 치환되지 않은 토큰 잔존: ${leftoverToken[0]}`);
if (!indexHtml.includes('rel="canonical"')) failures.push('index.html에 canonical 링크 없음');
if (!indexHtml.includes('property="og:url"')) failures.push('index.html에 og:url 없음');
if (!indexHtml.includes('application/ld+json')) failures.push('index.html에 JSON-LD 없음');

if (failures.length > 0) {
  console.error(`verify-dist 실패:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}

console.log('verify-dist 통과');

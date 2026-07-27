import { mkdir, writeFile } from 'node:fs/promises';

const source = `const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);
    const direct = await env.ASSETS.fetch(request);

    if (direct.status !== 404 || /\\.[a-z0-9]+$/i.test(url.pathname)) {
      return direct;
    }

    const fallback = new URL('/index.html', request.url);
    return env.ASSETS.fetch(new Request(fallback, request));
  },
};

export default worker;
`;

await mkdir(new URL('../dist/server/', import.meta.url), { recursive: true });
await writeFile(new URL('../dist/server/index.js', import.meta.url), source);

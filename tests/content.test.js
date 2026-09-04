import { existsSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
  collectSitePaths,
  findPublishedProjectByPath,
  portfolio,
} from '../src/content/portfolio.js';
import { getPortfolio, localeFromPath, localizedPath, stripLocale } from '../src/content/i18n.js';

const publicFileExists = (publicPath) => existsSync(new URL(`../public${publicPath}`, import.meta.url));

const REQUIRED_PROJECT_FIELDS = [
  'title',
  'slug',
  'summary',
  'cover',
  'coverAlt',
  'liveUrl',
  'repositoryUrl',
  'screenshots',
];

const publishedProjects = portfolio.projects.filter((project) => project.published === true);

describe('portfolio content', () => {
  it('has a production site URL for canonical and sitemap generation', () => {
    expect(portfolio.site.url).toMatch(/^https:\/\/bio\.jisung\.lol$/);
  });

  it('publishes at least one project', () => {
    expect(publishedProjects.length).toBeGreaterThan(0);
  });

  it.each(publishedProjects)('$slug has all required fields', (project) => {
    for (const field of REQUIRED_PROJECT_FIELDS) {
      expect(project[field], `${project.slug}.${field}`).toBeTruthy();
    }
    expect(project.screenshots.length).toBeGreaterThan(0);
    for (const screenshot of project.screenshots) {
      expect(screenshot.src, `${project.slug} screenshot src`).toBeTruthy();
      expect(screenshot.alt, `${project.slug} screenshot alt`).toBeTruthy();
    }
  });

  it.each(publishedProjects)('$slug image assets exist in public/', (project) => {
    expect(publicFileExists(project.cover), project.cover).toBe(true);
    for (const screenshot of project.screenshots) {
      expect(publicFileExists(screenshot.src), screenshot.src).toBe(true);
    }
  });
});

describe('site paths', () => {
  it('collects home plus every published project route', () => {
    const expected = [
      '/',
      ...publishedProjects.map((project) => `/projects/${project.slug}`),
    ];
    expect(collectSitePaths(portfolio)).toEqual(expected);
  });

  it('resolves every collected path through the router lookup', () => {
    for (const path of collectSitePaths(portfolio)) {
      if (path === '/') continue;
      expect(findPublishedProjectByPath(path, portfolio.projects), path).toBeTruthy();
    }
  });

  it('hides unpublished projects from routing', () => {
    for (const project of portfolio.projects.filter((entry) => entry.published !== true)) {
      expect(findPublishedProjectByPath(`/projects/${project.slug}`, portfolio.projects)).toBeUndefined();
    }
  });
});

describe('English locale', () => {
  it('resolves the English home and project paths', () => {
    const english = getPortfolio('en');
    expect(localeFromPath('/en')).toBe('en');
    expect(localeFromPath('/en/projects/techzone')).toBe('en');
    expect(stripLocale('/en/projects/techzone')).toBe('/projects/techzone');
    expect(localizedPath('/', 'en')).toBe('/en');
    expect(localizedPath('/projects/techzone', 'en')).toBe('/en/projects/techzone');
    expect(english.profile.intro).toMatch(/React/);
    expect(english.projects[0].summary).toMatch(/commerce system/);
    expect(english.projects[1].detail.problemTitle).toBe('Problem definition');
    expect(english.projects[2].detail.problemTitle).toBe('Problem definition');
    expect(english.projects[2].summary).toMatch(/learning prototype/i);
  });
});

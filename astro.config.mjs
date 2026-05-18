import { defineConfig } from 'astro/config';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const isPages = process.env.GITHUB_ACTIONS === 'true';
const base = isPages && repo ? `/${repo}` : '/';

export default defineConfig({
  site: 'https://caseycantwell.com',
  base,
  output: 'static',
});

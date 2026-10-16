import type { SkillGroup } from 'types'

export const SKILLS: SkillGroup[] = [
	{ name: 'Languages', items: ['TypeScript', 'JavaScript', 'HTML', 'CSS'] },
	{ name: 'Frontend', items: ['React 18/19', 'Next.js', 'Vue 3', 'Jotai', 'TanStack Query', 'MobX', 'styled-components', 'UnoCSS'] },
	{ name: 'Platforms', items: ['In-app WebView', 'LINE LIFF', 'Micro-frontends (module federation)', 'Node.js BFF'] },
	{ name: 'Design systems', items: ['Component libraries', 'Design tokens', 'Dark mode', 'Storybook'] },
	{ name: 'Build and tooling', items: ['Vite', 'Rollup', 'Rolldown', 'esbuild', 'pnpm monorepos'] },
	{ name: 'Testing', items: ['Vitest', 'Jest', 'Playwright', 'MSW'] },
	{ name: 'Delivery', items: ['GitLab CI/CD', 'Docker', 'Unleash feature flags', 'A/B testing', 'Sentry', 'GA4, Braze, Jitsu'] },
]

export const RESUME_SKILLS: SkillGroup[] = [
	{ name: 'Frontend', items: ['TypeScript', 'React 18/19', 'Vue 3', 'Next.js', 'Jotai', 'TanStack Query', 'MobX', 'styled-components'] },
	{ name: 'Platforms', items: ['In-app WebView', 'LINE LIFF', 'Micro-frontends', 'Design systems', 'Node.js BFF'] },
	{ name: 'Tooling', items: ['Vite', 'Rollup', 'Rolldown', 'pnpm monorepos', 'Vitest', 'Jest', 'Playwright', 'MSW'] },
	{ name: 'Delivery', items: ['GitLab CI/CD', 'Docker', 'Unleash A/B testing', 'Sentry', 'GA4', 'Braze'] },
]

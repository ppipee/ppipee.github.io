import type { SkillGroup } from 'types'

const FRONTEND: SkillGroup = { name: 'Frontend', items: ['TypeScript', 'React', 'HTML', 'CSS'] }

const FAMILIAR: SkillGroup = { name: 'Familiar with', items: ['Vue', 'Go', 'Python', 'Node.js', 'AST tooling'] }

const AI: SkillGroup = {
	name: 'AI-assisted engineering',
	items: ['Claude Code and Cursor agent skills', 'AI code review rules (Bugbot)', 'LLM integration (LiteLLM)'],
}

export const SKILLS: SkillGroup[] = [
	FRONTEND,
	FAMILIAR,
	AI,
	{ name: 'Platforms', items: ['In-app WebView', 'LINE LIFF', 'Micro-frontends (module federation)', 'Design systems'] },
	{ name: 'Build and tooling', items: ['Vite', 'Rollup', 'Rolldown', 'esbuild', 'pnpm monorepos'] },
	{ name: 'Testing', items: ['Vitest', 'Jest', 'Playwright', 'MSW'] },
	{ name: 'Delivery', items: ['GitLab CI/CD', 'Docker', 'Unleash feature flags', 'A/B testing', 'Sentry'] },
]

export const RESUME_SKILLS: SkillGroup[] = [
	FRONTEND,
	FAMILIAR,
	AI,
	{ name: 'Platforms', items: ['In-app WebView', 'LINE LIFF', 'Micro-frontends', 'Design systems'] },
	{ name: 'Tooling', items: ['Vite', 'Rollup', 'pnpm monorepos', 'Playwright', 'GitLab CI/CD', 'Unleash A/B testing'] },
]

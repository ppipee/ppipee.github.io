import type { Proposal } from 'types'

export const PROPOSALS: Proposal[] = [
	{
		title: 'Kyo Rollup',
		status: 'shipped',
		tools: ['Rollup', 'esbuild', 'TypeScript'],
		kind: 'Guide',
		year: '2021',
		cvLine:
			'Built and documented a shared Rollup preset library (CJS, ESM, UMD and dual builds) with plugins for package exports, NodeNext-safe type imports, source-map paths and lodash interop.',
	},
	{
		title: 'Wongnai dark mode (OKR Q1 2022)',
		status: 'shipped',
		kind: 'Tech design',
		year: '2022',
		cvLine:
			'Sole owner of the dark-mode OKR: mapped legacy colours to Design System 2.0 and migrated all 1,743 CSS colours across 728 files, bringing 113 of 118 pages to dark-mode support.',
	},
	{
		title: 'Cinnamon CLI and boilerplates (OKR Q2 2022)',
		status: 'shipped',
		tools: ['Node.js', 'CLI', 'npm'],
		kind: 'Tech design',
		year: '2022',
		cvLine:
			'Led the CLI part of a six-person boilerplate OKR: built @lmwn/cinnamon, which clones built-in or custom boilerplates and merges package templates and chained dependencies.',
	},
	{
		title: 'LINE MAN Automate Script',
		status: 'shipped',
		tools: ['React', 'TypeScript', 'CI/CD'],
		kind: 'RFC',
		year: '2022',
		cvLine:
			'Co-authored the RFC for a VPN-only web app that lets operations staff run bulk coupon and reward scripts with their own admin token, replacing scripts only developers could run, then built the tool.',
	},
	{
		title: 'Budibase hosting',
		kind: 'RFC',
		year: '2022',
		cvLine:
			'Co-authored a low-code platform evaluation and a proposal to self-host Budibase on AWS after measuring about 5x faster queries than the cloud plan.',
	},
	{
		title: 'New LINE MAN admin (React micro-frontends)',
		status: 'shipped',
		tools: ['single-spa', 'Vue 3', 'React', 'OIDC'],
		kind: 'RFC',
		year: '2023',
		cvLine:
			'Wrote the RFC and schema design for a micro-frontend admin shell that loads the legacy Vue 2 admin and the automation tool under one auth, then led the migration, shared state, CI and domain move.',
		resumeLine:
			'Wrote the RFC for the new LINE MAN admin (micro-frontend shell over the legacy Vue 2 admin) and led its migration, CI and production hosting re-architecture.',
	},
	{
		title: 'Core Analytic',
		status: 'shipped',
		tools: ['TypeScript', 'Analytics'],
		kind: 'Tech design',
		year: '2023',
		cvLine:
			'Designed and built a shared analytics library for screen names and click sources (session-backed screen stack, previous-screen and view-time tracking).',
	},
	{
		title: 'Google Fleet Engine trip tracking',
		status: 'shipped',
		tools: ['Google Maps', 'Fleet Engine', 'Service worker'],
		kind: 'POC',
		year: '2023',
		cvLine:
			'Prototyped, then shipped live trip tracking on the web with Google On-Demand Rides and Deliveries (journey-sharing map, token fetching, request-header injection through a service worker).',
	},
	{
		title: 'Web loading measurement',
		status: 'partial',
		kind: 'POC',
		year: '2024',
		cvLine:
			'Prototyped a "ready to use" metric for webviews that waits for tagged API calls and in-view images through a MutationObserver instead of relying on window.onload.',
	},
	{
		title: 'Steak Management',
		status: 'shipped',
		tools: ['Jotai', 'TanStack Query', 'TypeScript'],
		kind: 'RFC',
		year: '2024',
		cvLine:
			'Proposed replacing React Query plus Recoil with one in-house Jotai-based state and data library to remove cross-library sync renders; it later shipped as @lmwn/steak-management.',
	},
	{
		title: 'Google Ad Manager on campaign pages',
		status: 'shipped',
		tools: ['Google Ad Manager', 'React'],
		kind: 'POC',
		year: '2024',
		cvLine:
			'Designed an ad-banner section type for campaign pages backed by Google Ad Manager, including the admin config and ads.txt, then shipped it.',
	},
	{
		title: 'VIP recurring subscription, frontend scope',
		status: 'shipped',
		kind: 'Tech design',
		year: '2025',
		cvLine:
			'Wrote the page-by-page frontend design and estimate for the VIP recurring subscription (browse, checkout, manage, cancel, re-subscribe, suspend, errors) before leading its build.',
	},
	{
		title: 'QR PromptPay for self pickup',
		kind: 'POC',
		year: '2025',
		cvLine:
			'Wrote the frontend design and scope for QR PromptPay payment on self-pickup orders (QR page with countdown, help center, ordering-flow and error changes) and added its E2E test.',
	},
	{
		title: 'styled-components to Linaria',
		kind: 'POC',
		year: '2025',
		cvLine:
			'Compared Linaria, Pigment CSS and vanilla-extract as zero-runtime replacements for styled-components and prototyped a compatible wrapper with build plugins.',
	},
	{
		title: 'LMWN pnpm store and migration guide',
		status: 'shipped',
		tools: ['pnpm', 'GitLab CI', 'S3'],
		kind: 'Guide',
		year: '2025',
		cvLine:
			'Built and documented a shared pnpm package store and CI cache for frontend projects, with a step-by-step Yarn and npm migration guide.',
	},
	{
		title: 'RFC template for LINE MAN Web',
		kind: 'Guide',
		year: '2025',
		cvLine:
			'Created the frontend RFC template covering design-system impact, caching, native bridges, API errors, feature flags and security (CORS allowlists, XSS sanitizing).',
	},
	{
		title: 'Web E2E project structure',
		status: 'shipped',
		tools: ['Playwright', 'TypeScript'],
		kind: 'Tech design',
		year: '2025',
		cvLine:
			'Redesigned the Playwright E2E monorepo around page objects and reusable journeys built on fixtures so QA can write tests faster.',
	},
	{
		title: 'Group Ordering split bill',
		status: 'shipped',
		tools: ['React', 'Payments'],
		kind: 'POC',
		year: '2025',
		cvLine:
			'Designed the participant join and cart-lock flow for split-bill Group Ordering with platform-specific payment rules for LIFF and the app, then shipped it in 2026.',
	},
	{
		title: 'Braze in the LINE MAN webview',
		status: 'shipped',
		tools: ['Braze', 'JWT', 'Analytics'],
		kind: 'POC',
		year: '2026',
		cvLine:
			'Prototyped and then shipped Braze in the webview: attribute sync with the app, event naming, property flattening under Braze limits, session wipe on close and JWT-based SDK auth.',
	},
	{
		title: 'Frontend recruitment service',
		status: 'shipped',
		tools: ['Bun', 'Hono', 'Okta', 'LiteLLM'],
		kind: 'RFC',
		year: '2026',
		cvLine:
			'Proposed and built a service that issues temporary, budget-capped LLM keys to live-coding candidates behind Okta-protected admin APIs and a rate-limited completion proxy.',
		resumeLine:
			'Proposed and built a recruitment service that gives live-coding candidates temporary, budget-capped LLM access.',
	},
	{
		title: 'AI-generated E2E tests',
		kind: 'POC',
		year: '2026',
		cvLine:
			'Prototyped generating Playwright E2E tests from a screen recording with an AI agent following repo conventions.',
	},
]

const findProposal = (title: string) => {
	const proposal = PROPOSALS.find((item) => item.title === title)
	if (!proposal) throw new Error(`Unknown proposal: ${title}`)
	return proposal
}

export const RESUME_PROPOSALS: Proposal[] = [
	'New LINE MAN admin (React micro-frontends)',
	'Frontend recruitment service',
]
	.map(findProposal)
	.map((item) => ({ ...item, resumeLine: `${item.resumeLine} (${item.kind}, ${item.year})` }))

export const RESUME_PROPOSAL_NAMES: Proposal[] = [
	'Braze in the LINE MAN webview',
	'Group Ordering split bill',
	'styled-components to Linaria',
	'Steak Management',
	'Google Ad Manager on campaign pages',
	'Web loading measurement',
	'Google Fleet Engine trip tracking',
	'Core Analytic',
].map(findProposal)

export const SHIPPED_IN_WORK = ['Wongnai dark mode (OKR Q1 2022)', 'VIP recurring subscription, frontend scope']

export const BUILT_PROPOSALS: Proposal[] = PROPOSALS.filter(
	(item) => item.status === 'shipped' && !SHIPPED_IN_WORK.includes(item.title),
).reverse()

export const OPEN_PROPOSALS: Proposal[] = PROPOSALS.filter((item) => item.status !== 'shipped').reverse()

import BarcampLogo from 'assets/images/barcamp.png'
import LmwnLogo from 'assets/images/lmwn.png'

import type { Experience } from 'types'

export const EXPERIENCE: Experience[] = [
	{
		company: 'LINE MAN Wongnai',
		role: 'Senior Software Engineer II, Frontend',
		period: '2020 – Present',
		logo: LmwnLogo,
		summary:
			'Joined Wongnai as a part-time frontend engineer in 2020 and went full-time in May 2021. Worked on Wongnai.com and its shared libraries, then moved to LINE MAN commerce in 2023.',
		promotions: [
			{ title: 'Senior Software Engineer II', period: 'Feb 2026 – Present' },
			{ title: 'Senior Software Engineer', period: 'Jul 2024 – Jan 2026' },
			{ title: 'Junior Software Engineer II', period: 'Apr 2022 – Jun 2024' },
			{ title: 'Junior Software Engineer', period: 'May 2021 – Mar 2022' },
		],
		eras: [
			{
				name: 'LINE MAN',
				period: '2023 – Present',
				focus: 'Commerce flows inside the LINE MAN app, shared SDK and platform tooling',
				highlights: [
					'Led frontend delivery of the LINE MAN VIP subscription: package landing, quote and checkout (QR PromptPay, K PLUS), VIP profile, and manage and cancel flows, later extended to a LINE Premium partnership.',
					'Built Lock Promotion (Lock Deal) from scratch, then shipped bulk purchase, refunds, sorting, filters and flash-deal countdowns through Unleash A/B experiments and Jitsu analytics.',
					'Delivered Group Ordering across the webview, SDK and UI library, from the participant flow to split bill and billing options.',
					'Built payment integrations: TrueMoney on the core SDK and the v2 Select Payment page used by deals, VIP and packages.',
					'Set up the micro-frontend platform behind the new LINE MAN admin, built an internal design and prototyping platform, and led the move from Yarn to pnpm across 10+ repositories.',
				],
				cvHighlights: [
					'Led frontend delivery of the LINE MAN VIP subscription end to end: package landing and detail, quote and checkout (QR PromptPay, K PLUS, payment pre-selection), VIP profile, and manage and cancel flows across the webview, shared SDK, UI and type libraries.',
					'Extended VIP into a LINE Premium partnership with a redemption subscription type, API-driven bonus benefits and reusable partnership cards.',
					'Built Lock Promotion (Lock Deal) from scratch: quote, order creation and detail, My Lock Promotion, deeplink highlighting and payment error fallbacks. Then shipped the grid redesign, sorting and sort-by filter, flash-deal countdown, and bulk purchase, refund and badge flows, each rolled out through Unleash A/B experiments with analytics.',
					'Delivered the frontend of Group Ordering across the webview, SDK and UI library: participant flow (shared cart, order summary, live order status, host notifications), then split bill and billing options.',
					'Built payment integrations: TrueMoney on the core SDK, the v2 Select Payment page (LINE Pay wallet, Rabbit LINE Pay, credit card, auto-registration, unified error handling) and QR PromptPay payment for packages.',
					'Built the LINE Pay digital-wallet merchant KYM flow: camera capture and cropping, ID card, selfie and bank book verification, OTP, pre-registration, application status and QR code pages.',
					'Built core pieces of the new LIFF food ordering (pin address, cart and quote sync, payment app integration), then migrated the remaining LIFF pages to React 18 with code splitting and shipped self pickup on LIFF.',
					'Shipped Single Meal demand shaping, Menu Collection pages with Google Ad Manager banners, and Braze in-app messaging for the webview (SDK controller, auth, message sanitizing, kill switch).',
					'Set up the micro-frontend platform behind the new LINE MAN admin (single-spa, Vue 3 and React fragments, shared OIDC auth, CI/CD, Sentry) and moved users off the legacy admin with a remote-config redirect.',
					'Built an internal design and prototyping platform from scratch: monorepo, playground engine with design inspector and docs matrix, about 60 migrated design-system components and production screens, and a flow mode with flow maps.',
					'Built Steak Management v2, a shared state and data-access library on Jotai and TanStack Query, and used it to extract feature modules in the webview.',
					'Led the Yarn-to-pnpm migration across 10+ repositories with an internal package store and supply-chain safeguards, moved shared libraries to Rolldown, and introduced versioned OTA deploys.',
					'Improved release quality with shared GitLab CI/CD templates used across frontend projects: single-branch CI/CD, release and revert jobs, a Slack and GitLab release-alert tool, and a Playwright E2E monorepo with parallel CI.',
					'Added E2E coverage for pickup on LIFF, menu collection, Single Meal and payment pages.',
					'Brought LINE MAN Design System 3.0 into @lineman/ui and migrated consuming apps.',
					'Introduced Jitsu event tracking for menu collection pages, LM Packages and Food LIFF, and analytics for Group Ordering.',
					'Revamped LM Packages detail and condition views, and added a summary-of-changes page and package tracking.',
					'Built the 2025 Food coupon book with loading and fallback states.',
					'Rebuilt the LMWN careers site as Careers V2.',
					'Built LMWN Cafe with Okta login and a menu collection page.',
					'Wrote agent skills and rules (Claude Code, Cursor) for the prototyping platform, E2E and webview repos, and AI code review (Bugbot) guidelines across the webview, SDK and UI library.',
					'Automated team routines with a Slack bot: pending-review reminders and a change-request approval flow for LINE MAN web.',
					'Designed the 2025 frontend take-home assignment for hiring, alongside the live-coding recruitment service.',
				],
			},
			{
				name: 'Wongnai',
				period: '2021 – 2022',
				resumeLimit: 3,
				focus: 'Wongnai.com, E-Commerce, design systems and internal tools',
				highlights: [
					'Delivered the Business Menu epic on Wongnai.com and the E-Commerce home revamp, Deal 2.0 order pages, and deal, voucher and privilege flows.',
					'Built components and design tokens for Design System 2.0 and delivered Wongnai dark mode end to end.',
					'Built an internal operations automation tool for LINE MAN (bulk coupon, reward, banner and price-engine scripts).',
					'Fixed penetration-test findings (stored and DOM-based XSS) and gated analytics and ads on cookie consent for PDPA across four web apps.',
				],
				cvHighlights: [
					'Delivered the Business Menu epic on Wongnai.com: recommended menu, menu, menu item and photo pages, backed by new BFF APIs, plus a redesigned review section.',
					'Built E-Commerce experiences: the home landing revamp with section-level tracking, Deal 2.0 order history and details, and deal, voucher and privilege flows across web, delivery web and the BFF.',
					'Built components, design tokens, atomic CSS and theming for Ignite (Design System 2.0) and migrated product pages onto it.',
					'Delivered Wongnai dark mode end to end: design-system colour migration, a dark-mode controller, a display-setting API in the Go gateway, and the user-facing theme setting.',
					'Built an internal LINE MAN operations automation tool from scratch: bulk coupon, reward, banner and price-engine scripts with audit logs, page-level authorization, Slack notifications and run reports.',
					'Created kyo-rollup, a shared Rollup and esbuild build package, and rolled it out across the icons, hooks, utils, UI and shared-module libraries.',
					'Built a Chrome extension for inspecting and testing analytics events on the Wongnai web.',
					'Built a Rollup data-qa plugin and rolled it out across the shared build config and component libraries for QA automation.',
					'Fixed web penetration-test findings (stored and DOM-based XSS, autocomplete on sensitive forms) and gated analytics trackers and ads on cookie consent for PDPA across four web apps.',
					'Built the LMWN careers website.',
					'Instrumented analytics and impression tracking across Wongnai.com.',
					'Contributed to the Vue-to-React migration of the LINE MAN food LIFF (OKR Q3 2021).',
				],
			},
			{
				name: 'Wongnai Delivery (part-time)',
				period: '2020 – Apr 2021',
				resumeLimit: 0,
				focus: 'Wongnai Delivery web, Wongnai.com deals and the Wongnai UI library',
				highlights: [
					'Built the self-pickup ordering flow on Wongnai Delivery web (location, cart, checkout, payment and order tracking) in React SSR.',
					'Added order history and reorder across the delivery web and shared modules, and contributed components to the Wongnai UI library.',
				],
				cvHighlights: [
					'Built the self-pickup ordering flow on Wongnai Delivery web (location selection, cart, checkout, payment and live order tracking) in React SSR.',
					'Added order history and reorder across the delivery web, shared modules and types, with a new BFF food-order endpoint.',
					'Contributed photo grid, carousel, layout, modal, stepper and form components to the Wongnai UI library.',
					'Redesigned the deal detail page and added credit-back and flash-deal experiences on Wongnai.com.',
				],
			},
		],
	},
	{
		company: 'Siriraj e-Portfolio (freelance)',
		role: 'Lead Frontend Developer',
		period: 'Feb 2020 – Jul 2023',
		summary:
			'Web e-portfolio and assessment platform for Siriraj medical students and residents, with separate student, teacher and admin views. Wrote 688 of the project’s 732 commits.',
		eras: [
			{
				name: 'Siriraj e-Portfolio',
				period: '2020 – 2023',
				resumeLimit: 1,
				focus: 'React 17, TypeScript, MUI 5, MobX and Recoil, Chart.js, pdfmake, Docker',
				highlights: [
					'Built the assessment flows (EPA, DOPS and procedural skills), exams and 360-degree evaluations, mentorship appointments, and a research timeline.',
					'Generated student transcripts as PDFs and added progression, radar and grading charts.',
				],
				cvHighlights: [
					'Built the assessment flows (EPA, DOPS and procedural skills), exams and revision exams, and 360-degree evaluations with full create, edit and review screens.',
					'Built mentorship appointments, mentee pages and templates, and revamped the research module with a timeline.',
					'Generated student transcripts as PDFs and added progression, radar and grading charts.',
					'Set up releases with semantic versioning, Docker and nginx hosting, Sentry and GA4, and upgraded to React 17, MUI 5 and webpack 5 with code splitting and caching.',
					'Co-wrote the role-based product specs (admin, student, teacher) for the phase 2 modules.',
				],
			},
		],
	},
	{
		company: 'Seek (freelance)',
		role: 'Frontend Developer',
		period: 'Jun – Oct 2022',
		summary: 'Customer website for an activity and event booking platform, built by a multi-developer team.',
		hideOnResume: true,
		eras: [
			{
				name: 'Seek web',
				period: '2022',
				focus: 'Next.js 12, React 18, TypeScript, react-query, styled-components',
				highlights: [
					'Built home banners, profile and children management, and the order participant and payment forms, with server-side rendering and cached data fetching.',
				],
				cvHighlights: [
					'Built home banners, navigation and menu templates, profile and children management, and the order participant and payment forms.',
					'Added server-side rendering with react-query hydration and cached requests, fixed SSR cookie handling, and added SEO meta tags.',
					'Added a number input and icons to the shared Seek design-system package.',
				],
			},
		],
	},
	{
		company: 'Barcamp Bangkhen 2020',
		role: 'Software Engineer, Frontend Architecture',
		period: 'Oct – Nov 2020',
		logo: BarcampLogo,
		summary: 'Set up the frontend system and core pages for the Barcamp Bangkhen website.',
		eras: [],
		hideOnResume: true,
	},
]

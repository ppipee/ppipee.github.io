# LinkedIn copy

Ready to paste. Character counts are under LinkedIn's limits (headline 220, About 2,600, each position 2,000).
Same facts as the site and CV; edit freely.

---

## Headline

Senior Software Engineer II at LINE MAN Wongnai · Frontend, frontend architecture and developer tooling · TypeScript, React

---

## About

I'm a software engineer at LINE MAN Wongnai, where I've worked since 2020. My focus is frontend, frontend architecture and the tooling other frontend engineers build on.

Today I build commerce flows inside the LINE MAN app: the LINE MAN VIP subscription, Lock Deal, Group Ordering, Single Meal, and payment integrations such as TrueMoney and the new Select Payment page. Alongside that I work on the shared SDK, the design system and our build and release tooling.

Things I've built or led:
• The micro-frontend platform behind the new LINE MAN admin, from the RFC to the production hosting re-architecture
• Steak Management, an in-house Jotai and TanStack Query library for state and data access
• The move from Yarn to pnpm across 10+ repositories, with a shared package store and CI cache
• An internal design and prototyping platform with a design inspector and about 60 migrated components
• A recruitment service that gives live-coding candidates temporary, budget-capped LLM access
• Wongnai dark mode, across 1,743 CSS colours in 728 files

I like writing things down before building them, so many of these started as an RFC or a proof of concept.

Since 2020: 2,414 merge requests across 98 repositories.

I also write the agent skills and AI code review rules my teams use with Claude Code and Cursor.

Main stack: TypeScript, React, HTML, CSS. Familiar with Vue, Go, Python, Node.js and AST tooling.

Portfolio, resume and full CV: https://ppipee.github.io

---

## Experience

Company: **LINE MAN Wongnai** (add the positions below as separate roles under the same company)

### Senior Software Engineer II, Frontend
Full-time · Feb 2026 – Present · Bangkok, Thailand

• Grew Lock Deal: bulk purchase, refunds and badges, a grid redesign, sorting and filters, and flash-deal countdowns, each rolled out through Unleash A/B experiments with analytics
• Added TrueMoney payment to the core SDK and built the v2 Select Payment page (LINE Pay wallet, Rabbit LINE Pay, credit card, auto-registration, unified error handling), used by deals, VIP and packages
• Shipped Group Ordering split bill and billing options, and Single Meal demand shaping (empty states, badges, onboarding tooltips, dynamic navigation)
• Brought Braze in-app messaging to the LINE MAN webview: SDK controller, auth, message sanitizing and a kill switch
• Built Steak Management v2 and used it to extract feature modules in the webview; moved shared libraries to Rolldown and introduced versioned OTA deploys
• Built an internal design and prototyping platform from scratch: monorepo, playground engine with design inspector and docs matrix, and a flow mode with flow maps
• Proposed and built a recruitment service for frontend live-coding interviews: temporary, budget-capped LLM keys per candidate, an Okta-protected admin API and a rate-limited completion proxy
• Wrote agent skills and rules (Claude Code, Cursor) for the prototyping platform, E2E and webview repos, and AI code review (Bugbot) guidelines across the webview, SDK and UI library
• Automated team routines with a Slack bot: pending-review reminders and a change-request approval flow for LINE MAN web
• Added E2E coverage for menu collection, Single Meal and payment pages

Skills: TypeScript · React · Frontend Architecture · Developer Tooling · AI-assisted Development

### Senior Software Engineer, Frontend
Full-time · Jul 2024 – Jan 2026

• Led frontend delivery of the LINE MAN VIP subscription end to end: package landing, quote and checkout (QR PromptPay, K PLUS), VIP profile, and manage and cancel flows across the webview, shared SDK, UI and type libraries
• Extended VIP into a LINE Premium partnership with a redemption subscription type and API-driven benefits
• Built Lock Promotion (Lock Deal) from scratch: quote, order creation and detail, My Lock Promotion and payment error fallbacks
• Built the LINE Pay digital-wallet merchant onboarding (KYM) flow: camera capture and cropping, ID card, selfie and bank book verification, OTP, application status and QR code pages
• Led the Yarn-to-pnpm migration across 10+ repositories with an internal package store and supply-chain safeguards, and led the LINE MAN admin hosting re-architecture to production
• Built a universal-link landing app with remote-config templates and a LIFF fallback, and added Google Ad Manager banners to campaign pages
• Shipped self pickup on LIFF and restructured the Playwright E2E monorepo with reusable journeys and parallel CI
• Built LMWN Cafe with Okta login and a menu collection page
• Introduced Jitsu event tracking for menu collection pages, LM Packages and Food LIFF, built the 2025 Food coupon book, and rebuilt the careers site as Careers V2
• Designed the 2025 frontend take-home assignment for hiring and added E2E coverage for pickup on LIFF

Skills: TypeScript · React · Payments · Micro-frontends · pnpm

### Junior Software Engineer II, Frontend
Full-time · Apr 2022 – Jun 2024

• Built an internal operations automation tool for LINE MAN from scratch: bulk coupon, reward, banner and price-engine scripts with audit logs, page-level authorization and Slack notifications
• Built the Wongnai.com E-Commerce home revamp and Deal 2.0 order pages, fixed penetration-test findings (stored and DOM-based XSS) and gated analytics and ads on cookie consent for PDPA across four web apps
• Moved to LINE MAN in 2023 and delivered the frontend of Group Ordering (participant flow, shared cart, live order status, host notifications, analytics) across the webview, SDK and UI library
• Built core pieces of the new LIFF food ordering (pin address, cart and quote sync, payment app) and migrated the remaining LIFF pages to React 18
• Wrote the RFC for the new LINE MAN admin and set up its micro-frontend platform (single-spa, Vue 3 and React fragments, shared OIDC auth, CI/CD, Sentry)
• Shipped QR PromptPay payment for LM Packages, revamped the package detail and condition views with a summary-of-changes page and package tracking, and brought Design System 3.0 into @lineman/ui
• Improved frontend releases with shared GitLab CI/CD templates: single-branch CI/CD, release and revert jobs, and a Slack and GitLab release-alert tool
• Built a Rollup data-qa plugin and rolled it out across the shared build config and component libraries for QA automation

Skills: React · Vue.js · Micro-frontends · Design Systems · LINE LIFF

### Junior Software Engineer, Frontend
Full-time · May 2021 – Mar 2022

• Delivered the Business Menu epic on Wongnai.com (recommended menu, menu, menu item and photo pages) and deal, voucher and privilege experiences
• Built components, design tokens and theming for Ignite (Design System 2.0) and delivered Wongnai dark mode end to end
• Created kyo-rollup, a shared Rollup and esbuild build package used across the Wongnai frontend libraries
• Built the LMWN careers website and a Chrome extension for inspecting analytics events, and instrumented impression tracking across Wongnai.com
• Contributed to the Vue-to-React migration of the LINE MAN food LIFF (OKR Q3 2021)

Skills: React · Design Systems · Rollup · styled-components

### Software Engineer, Frontend (Part-time)
Part-time · Oct 2020 – Apr 2021

• Redesigned the Wongnai.com deal detail page and added flash deals, vouchers and a new privilege modal
• Added Half-Half (Khon La Khrueng) co-payment support to Wongnai.com and Wongnai Delivery web
• Built early Ignite (Design System 2.0) components: dialog, snackbar and toast, searchable dropdown and color builders
• Added an image previewer, bottom sheet and responsive layout helpers to the Wongnai UI library, and a shared footer across Wongnai web apps

Skills: React · TypeScript · Design Systems

---

Company: **Wongnai Media** (now LINE MAN Wongnai). Or add it under LINE MAN Wongnai if you prefer one company block.

### Software Engineer, Frontend Intern
Internship · Apr 2020 – Sep 2020

• Built the self-pickup ordering flow on Wongnai Delivery web (location, cart, checkout, payment and live order tracking) in React SSR
• Added order history and reorder across the delivery web, shared modules and a new BFF food-order endpoint
• Contributed photo grid, carousel, layout, modal, stepper and form components to the Wongnai UI library

Skills: React · MobX · GraphQL · styled-components

---

Company: **Siriraj e-Portfolio** (Freelance)

### Lead Frontend Developer
Freelance · Feb 2020 – Jul 2023

Assessment and e-portfolio platform for Siriraj medical students and residents, with student, teacher and admin views.
• Built assessment flows (EPA, DOPS, procedural skills), exams and 360-degree evaluations, mentorship and a research timeline
• Generated student transcripts as PDFs and added progression, radar and grading charts
• Set up releases, Docker and nginx hosting, Sentry and GA4, and upgraded to React 17, MUI 5 and webpack 5

Skills: React · TypeScript · MUI · MobX

Company: **Seek** (Freelance)

### Frontend Developer
Freelance · Jun 2022 – Oct 2022

• Built profiles with children management and the order participant and payment forms on a Next.js event-booking site, with server-side rendering and cached data fetching

Skills: Next.js · TypeScript · React Query

---

## Volunteering

**Barcamp Bangkhen 2020** · Software Engineer, Frontend Architecture · Oct – Nov 2020
Set up the frontend system and core pages for the Barcamp Bangkhen website.

---

## Education

**Kasetsart University** · B.Eng. Computer Engineering · GPAX 3.38

---

## Skills

Pin these five as top skills:
TypeScript · React · Frontend Architecture · Design Systems · Developer Tooling

Then add:
AI-assisted Development · Claude Code · Cursor · LLM Integration · HTML · CSS · Vue.js · Go · Python · Node.js · Micro-frontends · Abstract Syntax Trees (AST) · Vite · Rollup · Playwright · Vitest · GitLab CI/CD · A/B Testing · LINE LIFF

---

## Featured

• Link: https://ppipee.github.io (title: "Portfolio, resume and CV")
• Link: https://ppipee.github.io/Kittapon-Junsupakul-Resume.pdf (title: "Resume (1 page)")

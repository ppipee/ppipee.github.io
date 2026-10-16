import type { ActivityYear } from 'types'

export const ACTIVITY_SOURCE = 'Merge requests I opened on the company GitLab, counted by creation year, as of Oct 2026.'

export const ACTIVITY: ActivityYear[] = [
	{ year: 2020, mergeRequests: 150, merged: 143, repositories: 14, focus: 'Wongnai Delivery self pickup' },
	{ year: 2021, mergeRequests: 277, merged: 267, repositories: 25, focus: 'Business Menu, Design System 2.0' },
	{ year: 2022, mergeRequests: 232, merged: 224, repositories: 35, focus: 'E-Commerce home, dark mode, ops tool' },
	{ year: 2023, mergeRequests: 373, merged: 342, repositories: 39, focus: 'Group Ordering, LIFF food ordering' },
	{ year: 2024, mergeRequests: 361, merged: 345, repositories: 42, focus: 'LINE Pay merchant KYM, new admin' },
	{ year: 2025, mergeRequests: 461, merged: 433, repositories: 37, focus: 'VIP subscription, Lock Promotion' },
	{ year: 2026, mergeRequests: 560, merged: 501, repositories: 37, focus: 'Lock Deal, payments, prototyping platform' },
]

export const ACTIVITY_TOTAL = { mergeRequests: 2414, merged: 2255, repositories: 98 }

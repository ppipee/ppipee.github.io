export interface ContactLink {
	label: string
	value: string
	href: string
}

export interface Education {
	school: string
	degree: string
	detail: string
	period: string
}

export interface Profile {
	name: string
	nickname: string
	role: string
	location: string
	summary: string
	contacts: ContactLink[]
	privateContacts: ContactLink[]
	education: Education
}

export interface SkillGroup {
	name: string
	items: string[]
}

export interface ExperienceEra {
	name: string
	period: string
	focus: string
	highlights: string[]
	cvHighlights: string[]
	resumeLimit?: number
}

export interface Promotion {
	title: string
	period: string
}

export interface Experience {
	company: string
	role: string
	period: string
	logo?: string
	summary: string
	promotions?: Promotion[]
	eras: ExperienceEra[]
	hideOnResume?: boolean
}

export interface Project {
	name: string
	context: string
	period: string
	tools: string[]
	description: string
	image?: string
	screens?: string[]
	url?: string
	demo?: string
}

export interface ActivityYear {
	year: number
	mergeRequests: number
	merged: number
	repositories: number
	focus: string
}

export interface Proposal {
	title: string
	kind: 'RFC' | 'POC' | 'Tech design' | 'Guide' | 'Investigation'
	year: string
	cvLine: string
	resumeLine?: string
	status?: 'shipped' | 'partial'
	tools?: string[]
}

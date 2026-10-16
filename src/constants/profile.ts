import type { Profile } from 'types'

export const PROFILE: Profile = {
	name: 'Kittapon Junsupakul',
	nickname: 'Pipe',
	role: 'Senior Software Engineer II, Frontend',
	location: 'Bangkok, Thailand',
	summary:
		'Software engineer at LINE MAN Wongnai since 2020, focused on frontend, frontend architecture and developer tooling. I build the commerce flows people use inside the LINE MAN app (subscriptions, deals, group orders and payments) and the shared SDKs, design systems and build tools other teams build on.',
	contacts: [
		{ label: 'Email', value: 'ppipee.kj@hotmail.com', href: 'mailto:ppipee.kj@hotmail.com' },
		{ label: 'LinkedIn', value: 'linkedin.com/in/ppipee', href: 'https://linkedin.com/in/ppipee' },
		{ label: 'GitHub', value: 'github.com/ppipee', href: 'https://github.com/ppipee' },
		{ label: 'Website', value: 'ppipee.github.io', href: 'https://ppipee.github.io' },
	],
	privateContacts: [{ label: 'Phone', value: '+66 92 256 4321', href: 'tel:+66922564321' }],
	education: {
		school: 'Kasetsart University',
		degree: 'B.Eng. Computer Engineering',
		detail: 'GPAX 3.38',
	},
}

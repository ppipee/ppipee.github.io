import DiPlanistraImage from 'assets/images/di-planistra-1.png'
import IwguImage from 'assets/images/iwgu.png'
import KuScheduleImage from 'assets/images/ku-schedule.png'
import PickupImage from 'assets/images/pickup-1.png'
import RainyImage from 'assets/images/rainy-1.png'
import ScanSkinImage from 'assets/images/scanskin.png'
import DarkModeImage from 'assets/images/wn-dark-mode.png'
import TrackingInspectorImage from 'assets/images/wn-tracking-inspector.png'

import type { Project } from 'types'

export const WORK_PROJECTS: Project[] = [
	{
		name: 'LINE MAN VIP subscription',
		context: 'LINE MAN app',
		period: '2025 – 2026',
		tools: ['React', 'TypeScript', 'Shared SDK', 'Unleash'],
		description:
			'Monthly membership sold inside the LINE MAN app: plan selection, checkout, VIP profile, manage and cancel, and a LINE Premium partnership offer.',
	},
	{
		name: 'Lock Promotion',
		context: 'LINE MAN app',
		period: '2025 – 2026',
		tools: ['React', 'TypeScript', 'A/B testing', 'Analytics'],
		description:
			'Lets users lock in a restaurant deal before ordering. Built the first version, then bulk purchase, refunds, sorting, filters and flash-deal countdowns.',
	},
	{
		name: 'Group Ordering',
		context: 'LINE MAN app',
		period: '2023 – 2026',
		tools: ['React', 'TypeScript', 'Design System 3.0'],
		description:
			'Several people add to one food order from their own phones. Built the participant flow, shared cart, live order status, split bill and billing options.',
	},
	{
		name: 'LINE Pay merchant onboarding',
		context: 'LINE Pay digital wallet',
		period: '2024',
		tools: ['React', 'TypeScript', 'Camera API'],
		description:
			'Know-your-merchant web flow: ID card, selfie and bank book capture with cropping, OTP, pre-registration, application status and the merchant QR code.',
	},
	{
		name: 'Siriraj e-Portfolio',
		context: 'Freelance',
		period: '2020 – 2023',
		tools: ['React', 'TypeScript', 'MUI', 'MobX', 'pdfmake'],
		description:
			'Assessment and e-portfolio platform for Siriraj medical students and residents: evaluations, exams, mentorship, research and PDF transcripts. Lead frontend developer.',
	},
	{
		name: 'Seek',
		context: 'Freelance',
		period: '2022',
		tools: ['Next.js', 'TypeScript', 'react-query'],
		description: 'Activity and event booking site. Built profiles with children management, order and payment forms, and server-side rendering.',
	},
	{
		name: 'Wongnai dark mode',
		context: 'Wongnai.com',
		period: 'Dec 2021 – Mar 2022',
		tools: ['React', 'styled-components', 'Design tokens'],
		description:
			'Moved Wongnai web from DS1 and legacy styles to Design System 2.0 tokens so the whole site could switch themes, with a saved theme setting per user.',
		image: DarkModeImage,
	},
	{
		name: 'Wongnai Tracking Inspector',
		context: 'Internal tool',
		period: 'Nov 2021',
		tools: ['Chrome extension', 'React', 'styled-components'],
		description: 'Chrome extension that shows analytics events as they fire on the Wongnai web, used to test tracking before release.',
		image: TrackingInspectorImage,
	},
	{
		name: 'Wongnai pickup web',
		context: 'Wongnai Delivery',
		period: 'May – Jul 2020',
		tools: ['React', 'MobX', 'GraphQL', 'styled-components'],
		description: 'Ordering website for picking up food yourself, from choosing a branch to tracking the order.',
		image: PickupImage,
	},
]

export const SIDE_PROJECTS: Project[] = [
	{
		name: 'Di-Planista',
		context: 'Side project',
		period: 'Nov 2020 – Mar 2021',
		tools: ['React', 'TypeScript', 'MobX', 'Express', 'MongoDB', 'JWT'],
		description: 'Responsive trip planner to create and manage trips, search places with filters and discover other trips.',
		image: DiPlanistraImage,
		demo: 'https://planistra.netlify.app',
	},
	{
		name: 'Rainy',
		context: 'University project',
		period: 'Jan – Apr 2020',
		tools: ['Next.js', 'Redux', 'Material UI'],
		description: 'Rainfall forecasting and visualization site with current meteorological, air quality and rainfall data.',
		image: RainyImage,
		demo: 'https://opendata-app.hii.or.th/rainy',
	},
	{
		name: 'Planistra (IWGU)',
		context: 'University project',
		period: 'Sep – Nov 2019',
		tools: ['React', 'Redux', 'Ant Design', 'GraphQL', 'Express', 'MongoDB'],
		description: 'Trip planner built by a student team using Scrum.',
		image: IwguImage,
		demo: 'https://iwgu.netlify.app',
	},
	{
		name: 'KU Schedule',
		context: 'Side project',
		period: 'Apr 2019',
		tools: ['React', 'Semantic UI'],
		description: 'Generates a class timetable for Kasetsart University students.',
		image: KuScheduleImage,
		demo: 'https://ppipee.github.io/KUSchedule',
	},
	{
		name: 'Scan Skin',
		context: 'Side project',
		period: 'May – Jul 2019',
		tools: ['React', 'Redux', 'Firebase', 'Cheerio', 'Python'],
		description: 'Compares skincare products across top brands.',
		image: ScanSkinImage,
	},
]

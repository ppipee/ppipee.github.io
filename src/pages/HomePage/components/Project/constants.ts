import DiPlanistra1 from 'pages/HomePage/images/di-planistra-1.png'
import Rainy1 from 'pages/HomePage/images/rainy-1.png'
import Pickup1 from 'pages/HomePage/images/pickup-1.png'
import KUSchedule from 'pages/HomePage/images/ku-schedule.png'
import IWGU from 'pages/HomePage/images/iwgu.png'
import ScanSkin from 'pages/HomePage/images/scanskin.png'

export const PROJECTS = [
	{
		name: 'Di-Planista',
		tools: ['React', 'Razzle', 'Typescript', 'MobX', 'Hooks', 'Styled-Component', 'ExpressJs', 'JWT', 'MongoDB'],
		description:
			'A trip planner for create and manage your trips on responsive web. You have also search place with many filter and find trip that you interested.',
		timeRange: 'NOV 2020 - PRESENT',
		image: DiPlanistra1,
		demo: 'https://planistra.netlify.app',
	},
	{
		name: 'Wongnai, Pickup Web',
		tools: ['React', 'Mobx', 'GraphQL', 'Styled-Component'],
		description: 'The ordering website for pick up your food by yourself.',
		timeRange: 'MAY - JUL 2020',
		image: Pickup1,
		demo: 'https://wongnai.com/pickup',
	},
	{
		name: 'Rainy',
		tools: ['NextJS', 'Redux', 'Material-UI'],
		description:
			'The forecasting and visualization rainfall website that includes meteorological, air quality and rainfall at the current time.',
		timeRange: 'JAN - APR 2020',
		image: Rainy1,
		demo: 'https://opendata-app.hii.or.th/rainy',
	},
	{
		name: 'Planistra (IWGU)',
		tools: ['React', 'Redux', 'AntD', 'GraphQL', 'ExpressJS', 'MongoDB'],
		description:
			'A trip planner that can create and manage your trips in your own style. Developed the project with software development process including Scrum and Agile',
		timeRange: 'SEP - NOV 2019',
		image: IWGU,
		demo: 'https://iwgu.netlify.app',
	},
	{
		name: 'KU Schedule',
		tools: ['React', 'Semantic-UI'],
		description: 'The scheduler tool helps you generate a class schedule of Kasetsart University.',
		timeRange: 'APR 2019',
		image: KUSchedule,
		demo: 'https://ppipee.github.io/KUSchedule',
	},
	{
		name: 'Scan Skin',
		tools: ['React', 'Redux', 'Firebase', 'CheerioJS', 'Python'],
		description: 'Skincare comparing website that can compare the differences in each product of top brands.',
		timeRange: 'MAY - JUL 2019',
		image: ScanSkin,
	},
]

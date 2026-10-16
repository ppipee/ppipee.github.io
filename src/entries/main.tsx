import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import HomePage from 'pages/HomePage'
import initAnalytics from 'utils/initAnalytics'

import 'styles/tokens.css'
import 'styles/base.css'
import 'styles/motion.css'

initAnalytics()

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HomePage />
	</StrictMode>,
)

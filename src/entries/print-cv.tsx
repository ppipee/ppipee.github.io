import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import CvPage from 'pages/CvPage'

import 'styles/tokens.css'
import 'styles/base.css'
import 'styles/print.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<CvPage />
	</StrictMode>,
)

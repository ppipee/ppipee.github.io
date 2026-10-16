import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ResumePage from 'pages/ResumePage'

import 'styles/tokens.css'
import 'styles/base.css'
import 'styles/print.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ResumePage />
	</StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import CvPage from 'pages/CvPage'

import 'styles/tokens.css'
import 'styles/base.css'
import 'styles/print.css'

if (new URLSearchParams(window.location.search).has('preview')) document.documentElement.dataset.preview = ''

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<CvPage />
	</StrictMode>,
)

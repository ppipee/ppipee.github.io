import { ANALYTICS_HOST, GA_MEASUREMENT_ID } from 'constants/analytics'

/**
 * Loads GA4 (gtag.js) on the production host only, so local dev and PDF rendering send no hits.
 */
export default function initAnalytics() {
	if (!import.meta.env.PROD || window.location.hostname !== ANALYTICS_HOST || window.gtag) return

	window.dataLayer = window.dataLayer || []
	window.gtag = function gtag() {
		window.dataLayer.push(arguments)
	}
	window.gtag('js', new Date())
	window.gtag('config', GA_MEASUREMENT_ID)

	const script = document.createElement('script')
	script.async = true
	script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
	document.head.appendChild(script)
}

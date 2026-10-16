import type { ANALYTICS_EVENTS } from 'constants/analytics'

type AnalyticsEvent = (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS]

/**
 * Sends a GA4 event when gtag is loaded; does nothing otherwise.
 */
export default function trackEvent(name: AnalyticsEvent, params: Record<string, string | number> = {}) {
	window.gtag?.('event', name, params)
}

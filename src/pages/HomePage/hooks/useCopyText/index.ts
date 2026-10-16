import { useCallback, useEffect, useRef, useState } from 'react'

const RESET_MS = 1800

export default function useCopyText() {
	const [copied, setCopied] = useState(false)
	const timer = useRef<number>(undefined)

	useEffect(() => () => window.clearTimeout(timer.current), [])

	const copy = useCallback(async (text: string) => {
		try {
			await navigator.clipboard.writeText(text)
			setCopied(true)
			window.clearTimeout(timer.current)
			timer.current = window.setTimeout(() => setCopied(false), RESET_MS)
		} catch {
			setCopied(false)
		}
	}, [])

	return { copied, copy }
}

import { useEffect, useRef } from 'react'

import type { ActivityYear } from 'types'

const CELL = 7
const GAP = 3
const REVEAL_MS = 1600

interface Options {
	years: ActivityYear[]
	activeYear: number | null
}

const readColors = (el: HTMLElement) => {
	const style = getComputedStyle(el)
	return {
		on: style.getPropertyValue('--accent-fill').trim(),
		off: style.getPropertyValue('--dot-off').trim(),
		muted: style.getPropertyValue('--line-strong').trim(),
	}
}

export default function useMergeRequestField({ years, activeYear }: Options) {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const progress = useRef(0)
	const active = useRef(activeYear)
	const draw = useRef<() => void>(() => undefined)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return undefined
		const ctx = canvas.getContext('2d')
		if (!ctx) return undefined

		const cells = years.flatMap((year, yearIndex) =>
			Array.from({ length: year.mergeRequests }, (_, index) => ({
				year: year.year,
				merged: Math.floor(((index + 1) * year.merged) / year.mergeRequests) > Math.floor((index * year.merged) / year.mergeRequests),
				tone: 0.5 + (0.5 * yearIndex) / Math.max(1, years.length - 1),
			})),
		)
		const total = cells.length
		let colors = readColors(canvas)

		draw.current = () => {
			const width = canvas.clientWidth
			const columns = Math.max(1, Math.floor((width + GAP) / (CELL + GAP)))
			const rows = Math.ceil(total / columns)
			const height = rows * (CELL + GAP) - GAP
			const ratio = window.devicePixelRatio || 1
			if (canvas.height !== Math.round(height * ratio) || canvas.width !== Math.round(width * ratio)) {
				canvas.width = Math.round(width * ratio)
				canvas.height = Math.round(height * ratio)
				canvas.style.height = `${height}px`
			}
			ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
			ctx.clearRect(0, 0, width, height)
			const visible = Math.floor(total * progress.current)
			cells.forEach((cell, index) => {
				const x = (index % columns) * (CELL + GAP)
				const y = Math.floor(index / columns) * (CELL + GAP)
				const dimmed = active.current !== null && cell.year !== active.current
				const shown = index < visible
				ctx.globalAlpha = !shown ? 1 : dimmed ? 0.14 : cell.merged ? cell.tone : 1
				ctx.fillStyle = !shown ? colors.off : cell.merged ? colors.on : colors.muted
				ctx.beginPath()
				ctx.roundRect(x, y, CELL, CELL, 2)
				ctx.fill()
			})
			ctx.globalAlpha = 1
		}

		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
		let frame = 0
		const start = () => {
			if (reduced) {
				progress.current = 1
				draw.current()
				return
			}
			const began = performance.now()
			const tick = (now: number) => {
				const t = Math.min(1, (now - began) / REVEAL_MS)
				progress.current = 1 - Math.pow(1 - t, 3)
				draw.current()
				if (t < 1) frame = requestAnimationFrame(tick)
			}
			frame = requestAnimationFrame(tick)
		}

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries.some((entry) => entry.isIntersecting)) {
					observer.disconnect()
					start()
				}
			},
			{ threshold: 0.25 },
		)
		observer.observe(canvas)

		const resize = new ResizeObserver(() => draw.current())
		resize.observe(canvas)

		const scheme = window.matchMedia('(prefers-color-scheme: dark)')
		const onScheme = () => {
			colors = readColors(canvas)
			draw.current()
		}
		scheme.addEventListener('change', onScheme)

		draw.current()

		return () => {
			cancelAnimationFrame(frame)
			observer.disconnect()
			resize.disconnect()
			scheme.removeEventListener('change', onScheme)
		}
	}, [years])

	useEffect(() => {
		active.current = activeYear
		draw.current()
	}, [activeYear])

	return canvasRef
}

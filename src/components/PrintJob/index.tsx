import clsx from 'clsx'
import type { ReactNode } from 'react'

import styles from './index.module.css'

interface Props {
	title: ReactNode
	subtitle?: ReactNode
	period?: string
	bullets?: string[]
	children?: ReactNode
	className?: string
}

const PrintJob = ({ title, subtitle, period, bullets = [], children, className }: Props) => (
	<div className={clsx(styles.root, className)}>
		<div className={styles.head}>
			<p className={styles.title}>
				{title}
				{subtitle && <span className={styles.subtitle}> · {subtitle}</span>}
			</p>
			{period && <span className={styles.period}>{period}</span>}
		</div>
		{children}
		{bullets.length > 0 && (
			<ul className={styles.list}>
				{bullets.map((line) => (
					<li key={line}>{line}</li>
				))}
			</ul>
		)}
	</div>
)

export default PrintJob

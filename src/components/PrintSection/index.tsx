import clsx from 'clsx'
import type { ReactNode } from 'react'

import styles from './index.module.css'

interface Props {
	title: string
	children: ReactNode
	className?: string
}

const PrintSection = ({ title, children, className }: Props) => (
	<section className={clsx(styles.root, className)}>
		<h2 className={styles.title}>{title}</h2>
		<div className={styles.body}>{children}</div>
	</section>
)

export default PrintSection

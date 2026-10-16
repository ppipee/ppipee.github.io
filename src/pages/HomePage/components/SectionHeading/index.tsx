import clsx from 'clsx'
import type { ReactNode } from 'react'

import styles from './index.module.css'

interface Props {
	id: string
	title: string
	lede?: ReactNode
	aside?: ReactNode
	className?: string
}

const SectionHeading = ({ id, title, lede, aside, className }: Props) => (
	<div className={clsx(styles.root, 'reveal', className)}>
		<div className={styles.text}>
			<h2 id={id} className={styles.title}>
				{title}
			</h2>
			{lede && <p className={styles.lede}>{lede}</p>}
		</div>
		{aside && <div className={styles.aside}>{aside}</div>}
	</div>
)

export default SectionHeading

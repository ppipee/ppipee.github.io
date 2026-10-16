import clsx from 'clsx'

import type { Promotion } from 'types'

import styles from './index.module.css'

interface Props {
	promotions: Promotion[]
	className?: string
}

const PrintPromotions = ({ promotions, className }: Props) => (
	<ol className={clsx(styles.root, className)}>
		{promotions.map((promotion) => (
			<li key={promotion.title}>
				<span className={styles.title}>{promotion.title}</span>
				<span className={styles.period}>{promotion.period}</span>
			</li>
		))}
	</ol>
)

export default PrintPromotions

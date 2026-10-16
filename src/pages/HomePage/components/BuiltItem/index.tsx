import clsx from 'clsx'

import { HOME_LOCALES } from 'locales'
import type { Proposal } from 'types'

import styles from './index.module.css'

interface Props {
	proposal: Proposal
	className?: string
}

const BuiltItem = ({ proposal, className }: Props) => (
	<li className={clsx(styles.root, 'reveal', className)}>
		<div className={styles.head}>
			<span className={styles.year}>{proposal.year}</span>
			<h4 className={styles.title}>{proposal.title}</h4>
		</div>
		<div className={styles.pills}>
			<span className={styles.kind}>{HOME_LOCALES.startedAs(proposal.kind)}</span>
			<span className={styles.shipped}>{HOME_LOCALES.shipped}</span>
		</div>
		<p className={styles.line}>{proposal.cvLine}</p>
		{proposal.tools?.length ? (
			<ul className={styles.tools}>
				{proposal.tools.map((tool) => (
					<li key={tool} className={styles.tool}>
						{tool}
					</li>
				))}
			</ul>
		) : null}
	</li>
)

export default BuiltItem

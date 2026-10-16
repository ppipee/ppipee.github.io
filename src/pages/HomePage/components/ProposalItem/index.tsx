import clsx from 'clsx'

import { HOME_LOCALES } from 'locales'
import type { Proposal } from 'types'

import styles from './index.module.css'

interface Props {
	proposal: Proposal
	className?: string
}

const ProposalItem = ({ proposal, className }: Props) => (
	<li className={clsx(styles.root, className)}>
		<span className={styles.year}>{proposal.year}</span>
		<div className={styles.body}>
			<div className={styles.head}>
				<h3 className={styles.title}>{proposal.title}</h3>
				<span className={styles.kind}>{proposal.kind}</span>
				{proposal.status === 'partial' && <span className={styles.partial}>{HOME_LOCALES.partlyBuilt}</span>}
			</div>
			<p className={styles.line}>{proposal.cvLine}</p>
		</div>
	</li>
)

export default ProposalItem

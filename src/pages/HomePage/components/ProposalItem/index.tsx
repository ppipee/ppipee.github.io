import clsx from 'clsx'

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
			</div>
			<p className={styles.line}>{proposal.cvLine}</p>
		</div>
	</li>
)

export default ProposalItem

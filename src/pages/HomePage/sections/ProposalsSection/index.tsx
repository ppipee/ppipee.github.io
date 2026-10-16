import clsx from 'clsx'
import { useMemo, useState } from 'react'

import { ANALYTICS_EVENTS } from 'constants/analytics'
import { SECTION_IDS } from 'constants/paths'
import { OPEN_PROPOSALS } from 'constants/proposals'
import { HOME_LOCALES } from 'locales'
import type { Proposal } from 'types'
import trackEvent from 'utils/trackEvent'

import ProposalItem from '../../components/ProposalItem'
import SectionHeading from '../../components/SectionHeading'
import styles from './index.module.css'

type Filter = Proposal['kind'] | 'All'

const ProposalsSection = () => {
	const [filter, setFilter] = useState<Filter>('All')
	const kinds = useMemo(() => ['All', ...new Set(OPEN_PROPOSALS.map((item) => item.kind))] as Filter[], [])
	const items = useMemo(
		() => OPEN_PROPOSALS.filter((item) => filter === 'All' || item.kind === filter),
		[filter],
	)

	return (
		<section className={styles.root} aria-labelledby={SECTION_IDS.proposals}>
			<SectionHeading
				id={SECTION_IDS.proposals}
				title={HOME_LOCALES.proposalsTitle}
				lede={HOME_LOCALES.proposalsLede}
				aside={
					<div className={styles.filters} role="group" aria-label="Filter by type">
						{kinds.map((kind) => {
							const count = kind === 'All' ? OPEN_PROPOSALS.length : OPEN_PROPOSALS.filter((item) => item.kind === kind).length

							return (
								<button
									key={kind}
									type="button"
									className={clsx(styles.filter, filter === kind && styles.on)}
									aria-pressed={filter === kind}
									onClick={() => {
										setFilter(kind)
										trackEvent(ANALYTICS_EVENTS.filterProposals, { kind })
									}}
								>
									{kind === 'All' ? HOME_LOCALES.proposalsAll : kind}
									<span>{count}</span>
								</button>
							)
						})}
					</div>
				}
			/>
			<ul className={clsx(styles.list, 'reveal')}>
				{items.map((item) => (
					<ProposalItem key={item.title} proposal={item} />
				))}
			</ul>
		</section>
	)
}

export default ProposalsSection

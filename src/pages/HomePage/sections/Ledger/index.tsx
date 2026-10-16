import clsx from 'clsx'
import { useState } from 'react'

import { ACTIVITY, ACTIVITY_SOURCE, ACTIVITY_TOTAL } from 'constants/activity'
import { SECTION_IDS } from 'constants/paths'
import { HOME_LOCALES } from 'locales'

import SectionHeading from '../../components/SectionHeading'
import useMergeRequestField from '../../hooks/useMergeRequestField'
import styles from './index.module.css'

const Ledger = () => {
	const [activeYear, setActiveYear] = useState<number | null>(null)
	const canvasRef = useMergeRequestField({ years: ACTIVITY, activeYear })
	const current = ACTIVITY.find((year) => year.year === activeYear)

	return (
		<section className={styles.root} aria-labelledby={SECTION_IDS.ledger}>
			<SectionHeading id={SECTION_IDS.ledger} title={HOME_LOCALES.ledgerTitle} lede={HOME_LOCALES.ledgerLede} />
			<div className={clsx(styles.panel, 'reveal')}>
				<div className={styles.readout} aria-live="polite">
					<p className={styles.big}>{(current?.mergeRequests ?? ACTIVITY_TOTAL.mergeRequests).toLocaleString('en-US')}</p>
					<p className={styles.caption}>
						{current ? `${current.year} · ${current.focus}` : `${HOME_LOCALES.ledgerAll} · 2020 – 2026`}
					</p>
					<p className={styles.sub}>
						{(current?.merged ?? ACTIVITY_TOTAL.merged).toLocaleString('en-US')} {HOME_LOCALES.ledgerMerged} ·{' '}
						{current?.repositories ?? ACTIVITY_TOTAL.repositories} {HOME_LOCALES.ledgerRepos}
					</p>
				</div>
				<canvas ref={canvasRef} className={styles.canvas} role="img" aria-label={`${ACTIVITY_TOTAL.mergeRequests} merge requests from 2020 to 2026, grouped by year`} />
				<ul className={styles.years} onMouseLeave={() => setActiveYear(null)}>
					{ACTIVITY.map((year) => (
						<li key={year.year}>
							<button
								type="button"
								className={clsx(styles.year, activeYear === year.year && styles.active)}
								aria-pressed={activeYear === year.year}
								onMouseEnter={() => setActiveYear(year.year)}
								onFocus={() => setActiveYear(year.year)}
								onClick={() => setActiveYear(activeYear === year.year ? null : year.year)}
							>
								<span className={styles.yearLabel}>{year.year}</span>
								<span className={styles.yearCount}>{year.mergeRequests}</span>
							</button>
						</li>
					))}
				</ul>
				<p className={styles.source}>{ACTIVITY_SOURCE}</p>
			</div>
		</section>
	)
}

export default Ledger

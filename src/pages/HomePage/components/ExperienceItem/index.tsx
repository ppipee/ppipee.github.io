import clsx from 'clsx'

import { HOME_LOCALES } from 'locales'
import type { Experience } from 'types'

import styles from './index.module.css'

interface Props {
	job: Experience
	className?: string
}

const ExperienceItem = ({ job, className }: Props) => (
	<li className={clsx(styles.root, className)}>
		<div className={styles.rail}>
			<div className={styles.sticky}>
				<div className={styles.logo}>{job.logo && <img src={job.logo} alt="" loading="lazy" />}</div>
				<p className={styles.period}>{job.period}</p>
			</div>
		</div>
		<div className={styles.body}>
			<div className={clsx(styles.head, 'reveal')}>
				<h3 className={styles.role}>{job.role}</h3>
				<p className={styles.company}>{job.company}</p>
				<p className={styles.summary}>{job.summary}</p>
				{job.promotions && (
					<ol className={styles.ladder} aria-label="Titles at this company">
						{job.promotions.map((promotion) => (
							<li key={promotion.title}>
								<span className={styles.ladderTitle}>{promotion.title}</span>
								<span className={styles.ladderPeriod}>{promotion.period}</span>
							</li>
						))}
					</ol>
				)}
			</div>
			{job.eras.map((era) => {
				const extra = era.cvHighlights.filter((line) => !era.highlights.includes(line))

				return (
					<div key={era.name} className={clsx(styles.era, 'reveal')}>
						<div className={styles.eraHead}>
							<h4 className={styles.eraName}>{era.name}</h4>
							<span className={styles.eraPeriod}>{era.period}</span>
						</div>
						<p className={styles.focus}>{era.focus}</p>
						<ul className={styles.list}>
							{era.highlights.map((line) => (
								<li key={line}>{line}</li>
							))}
						</ul>
						{extra.length > 0 && (
							<details className={styles.more}>
								<summary>{HOME_LOCALES.showMore(extra.length)}</summary>
								<ul className={styles.list}>
									{extra.map((line) => (
										<li key={line}>{line}</li>
									))}
								</ul>
							</details>
						)}
					</div>
				)
			})}
		</div>
	</li>
)

export default ExperienceItem

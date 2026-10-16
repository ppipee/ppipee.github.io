import clsx from 'clsx'

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
			{job.eras.length > 0 && (
				<ul className={clsx(styles.eras, 'reveal')}>
					{job.eras.map((era) => (
						<li key={era.name} className={styles.era}>
							<span className={styles.eraName}>{era.name}</span>
							<span className={styles.eraPeriod}>{era.period}</span>
							<span className={styles.focus}>{era.focus}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	</li>
)

export default ExperienceItem

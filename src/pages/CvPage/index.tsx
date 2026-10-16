import PrintHeader from 'components/PrintHeader'
import PrintJob from 'components/PrintJob'
import PrintPromotions from 'components/PrintPromotions'
import PrintSection from 'components/PrintSection'
import PrintSheet from 'components/PrintSheet'
import { ACTIVITY, ACTIVITY_TOTAL } from 'constants/activity'
import { EXPERIENCE } from 'constants/experience'
import { PROFILE } from 'constants/profile'
import { SIDE_PROJECTS, WORK_PROJECTS } from 'constants/projects'
import { PROPOSALS } from 'constants/proposals'
import { SKILLS } from 'constants/skills'
import { PRINT_LOCALES } from 'locales'

import styles from './index.module.css'

const STATUS_SUFFIX = {
	shipped: ` · ${PRINT_LOCALES.shipped}`,
	partial: ` · ${PRINT_LOCALES.partlyBuilt}`,
	none: '',
}

const CvPage = () => (
	<PrintSheet className={styles.sheet}>
		<PrintHeader />
		<PrintSection title={PRINT_LOCALES.summary}>
			<p className={styles.text}>{PROFILE.summary}</p>
		</PrintSection>
		<PrintSection title={PRINT_LOCALES.experience}>
			{EXPERIENCE.map((job) => (
				<div key={job.company} className={styles.job}>
					<PrintJob title={job.role} subtitle={job.company} period={job.period}>
						<p className={styles.text}>{job.summary}</p>
						{job.promotions && <PrintPromotions promotions={job.promotions} />}
					</PrintJob>
					{job.eras.map((era) => (
						<PrintJob
							key={era.name}
							title={era.name}
							subtitle={era.focus}
							period={era.period}
							bullets={era.cvHighlights}
						/>
					))}
				</div>
			))}
		</PrintSection>
		<PrintSection title={PRINT_LOCALES.proposals}>
			{PROPOSALS.map((item) => (
				<PrintJob key={item.title} title={item.title} subtitle={`${item.kind}${STATUS_SUFFIX[item.status ?? 'none']}`} period={item.year}>
					<p className={styles.text}>{item.cvLine}</p>
				</PrintJob>
			))}
		</PrintSection>
		<PrintSection title={PRINT_LOCALES.activity}>
			<p className={styles.note}>{PRINT_LOCALES.activityNote}</p>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>{PRINT_LOCALES.year}</th>
						<th>{PRINT_LOCALES.mergeRequests}</th>
						<th>{PRINT_LOCALES.repositories}</th>
						<th>{PRINT_LOCALES.focus}</th>
					</tr>
				</thead>
				<tbody>
					{ACTIVITY.map((year) => (
						<tr key={year.year}>
							<td>{year.year}</td>
							<td>{year.mergeRequests}</td>
							<td>{year.repositories}</td>
							<td>{year.focus}</td>
						</tr>
					))}
					<tr className={styles.total}>
						<td>Total</td>
						<td>{ACTIVITY_TOTAL.mergeRequests.toLocaleString('en-US')}</td>
						<td>{ACTIVITY_TOTAL.repositories}</td>
						<td />
					</tr>
				</tbody>
			</table>
		</PrintSection>
		<PrintSection title={PRINT_LOCALES.work}>
			{WORK_PROJECTS.map((project) => (
				<PrintJob key={project.name} title={project.name} subtitle={project.context} period={project.period}>
					<p className={styles.text}>{project.description}</p>
					<p className={styles.note}>{project.tools.join(' · ')}</p>
				</PrintJob>
			))}
		</PrintSection>
		<PrintSection title={PRINT_LOCALES.projects}>
			{SIDE_PROJECTS.map((project) => (
				<PrintJob key={project.name} title={project.name} subtitle={project.context} period={project.period}>
					<p className={styles.text}>
						{project.description}
						{project.demo && <span className={styles.note}> {project.demo.replace('https://', '')}</span>}
					</p>
				</PrintJob>
			))}
		</PrintSection>
		<PrintSection title={PRINT_LOCALES.skills}>
			<dl className={styles.skills}>
				{SKILLS.map((group) => (
					<div key={group.name}>
						<dt>{group.name}</dt>
						<dd>{group.items.join(', ')}</dd>
					</div>
				))}
			</dl>
		</PrintSection>
		<PrintSection title={PRINT_LOCALES.education}>
			<PrintJob
				title={PROFILE.education.degree}
				subtitle={PROFILE.education.school}
				period={PROFILE.education.detail}
			/>
		</PrintSection>
	</PrintSheet>
)

export default CvPage

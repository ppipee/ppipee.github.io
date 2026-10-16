import PrintHeader from 'components/PrintHeader'
import PrintJob from 'components/PrintJob'
import PrintSection from 'components/PrintSection'
import PrintSheet from 'components/PrintSheet'
import { ACTIVITY_TOTAL } from 'constants/activity'
import { EXPERIENCE } from 'constants/experience'
import { PROFILE } from 'constants/profile'
import { RESUME_PROPOSALS } from 'constants/proposals'
import { RESUME_SKILLS } from 'constants/skills'
import { PRINT_LOCALES } from 'locales'

import styles from './index.module.css'

const ResumePage = () => (
	<PrintSheet>
		<PrintHeader />
		<PrintSection title={PRINT_LOCALES.summary}>
			<p className={styles.summary}>
				{PROFILE.summary} {ACTIVITY_TOTAL.mergeRequests.toLocaleString('en-US')} merge requests across{' '}
				{ACTIVITY_TOTAL.repositories} repositories since 2020.
			</p>
		</PrintSection>
		<PrintSection title={PRINT_LOCALES.experience}>
			{EXPERIENCE.filter((job) => !job.hideOnResume).map((job) =>
				job.eras.length ? (
					job.eras.map((era, index) => (
						<PrintJob
							key={`${job.company}-${era.name}`}
							title={index === 0 ? job.role : `${era.name} team`}
							subtitle={job.eras.length === 1 ? job.company : index === 0 ? `${job.company} · ${era.name} team` : era.focus}
							period={job.eras.length === 1 ? job.period : era.period}
							bullets={era.highlights.slice(0, era.resumeLimit ?? era.highlights.length)}
						/>
					))
				) : (
					<PrintJob key={job.company} title={job.role} subtitle={job.company} period={job.period}>
						<p className={styles.line}>{job.summary}</p>
					</PrintJob>
				),
			)}
		</PrintSection>
		<PrintSection title={PRINT_LOCALES.proposals}>
			<ul className={styles.proposals}>
				{RESUME_PROPOSALS.map((item) => (
					<li key={item.title}>{item.resumeLine}</li>
				))}
			</ul>
		</PrintSection>
		<PrintSection title={PRINT_LOCALES.skills}>
			<dl className={styles.skills}>
				{RESUME_SKILLS.map((group) => (
					<div key={group.name}>
						<dt>{group.name}</dt>
						<dd>{group.items.join(', ')}</dd>
					</div>
				))}
			</dl>
		</PrintSection>
		<PrintSection title={PRINT_LOCALES.education}>
			<PrintJob title={PROFILE.education.degree} subtitle={PROFILE.education.school} period={PROFILE.education.detail} />
		</PrintSection>
		<p className={styles.more}>{PRINT_LOCALES.more}</p>
	</PrintSheet>
)

export default ResumePage

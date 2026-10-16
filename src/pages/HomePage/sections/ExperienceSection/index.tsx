import { EXPERIENCE } from 'constants/experience'
import { CV_PDF_PATH, SECTION_IDS } from 'constants/paths'
import { PROFILE } from 'constants/profile'
import { HOME_LOCALES } from 'locales'

import ExperienceItem from '../../components/ExperienceItem'
import SectionHeading from '../../components/SectionHeading'
import styles from './index.module.css'

const ExperienceSection = () => (
	<section className={styles.root} aria-labelledby={SECTION_IDS.experience}>
		<SectionHeading
			id={SECTION_IDS.experience}
			title={HOME_LOCALES.experienceTitle}
			aside={
				<div className={styles.aside}>
					<p className={styles.education}>
						{PROFILE.education.degree}, {PROFILE.education.school} · {PROFILE.education.detail}
					</p>
					<a className={styles.cvLink} href={CV_PDF_PATH} target="_blank" rel="noopener">
						{HOME_LOCALES.experienceCv}
					</a>
				</div>
			}
		/>
		<ol className={styles.list}>
			{EXPERIENCE.map((job) => (
				<ExperienceItem key={job.company} job={job} />
			))}
		</ol>
	</section>
)

export default ExperienceSection

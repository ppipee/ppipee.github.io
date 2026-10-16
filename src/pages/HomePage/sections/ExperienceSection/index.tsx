import { EXPERIENCE } from 'constants/experience'
import { SECTION_IDS } from 'constants/paths'
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
				<p className={styles.education}>
					{PROFILE.education.degree}, {PROFILE.education.school} · {PROFILE.education.detail}
				</p>
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

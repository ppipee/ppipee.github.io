import { SECTION_IDS } from 'constants/paths'
import { SKILLS } from 'constants/skills'
import { HOME_LOCALES } from 'locales'

import SectionHeading from '../../components/SectionHeading'
import styles from './index.module.css'

const SkillsSection = () => (
	<section className={styles.root} aria-labelledby={SECTION_IDS.skills}>
		<SectionHeading id={SECTION_IDS.skills} title={HOME_LOCALES.skillsTitle} />
		<dl className={`${styles.groups} reveal`}>
			{SKILLS.map((group) => (
				<div key={group.name} className={styles.group}>
					<dt>{group.name}</dt>
					<dd>
						{group.items.map((item) => (
							<span key={item}>{item}</span>
						))}
					</dd>
				</div>
			))}
		</dl>
	</section>
)

export default SkillsSection

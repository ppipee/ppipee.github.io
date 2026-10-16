import { SECTION_IDS } from 'constants/paths'
import { BUILT_PROPOSALS } from 'constants/proposals'
import { SIDE_PROJECTS, WORK_PROJECTS } from 'constants/projects'
import { HOME_LOCALES } from 'locales'

import BuiltItem from '../../components/BuiltItem'
import ProjectRow from '../../components/ProjectRow'
import SectionHeading from '../../components/SectionHeading'
import styles from './index.module.css'

const ProjectsSection = () => (
	<section className={styles.root} aria-labelledby={SECTION_IDS.projects}>
		<SectionHeading id={SECTION_IDS.projects} title={HOME_LOCALES.workTitle} />
		<div className={styles.work}>
			{WORK_PROJECTS.map((project) => (
				<ProjectRow key={project.name} project={project} />
			))}
		</div>
		<div className={styles.builtHead}>
			<h3 className={styles.subTitle}>{HOME_LOCALES.builtTitle}</h3>
			<p className={styles.lede}>{HOME_LOCALES.builtLede}</p>
		</div>
		<ul className={styles.built}>
			{BUILT_PROPOSALS.map((proposal) => (
				<BuiltItem key={proposal.title} proposal={proposal} />
			))}
		</ul>
		<h3 className={styles.subTitle}>{HOME_LOCALES.sideTitle}</h3>
		<div className={styles.side}>
			{SIDE_PROJECTS.map((project) => (
				<ProjectRow key={project.name} project={project} compact />
			))}
		</div>
	</section>
)

export default ProjectsSection

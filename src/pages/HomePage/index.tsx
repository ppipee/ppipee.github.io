import { HOME_LOCALES } from 'locales'

import styles from './index.module.css'
import ContactSection from './sections/ContactSection'
import ExperienceSection from './sections/ExperienceSection'
import Hero from './sections/Hero'
import Ledger from './sections/Ledger'
import Navbar from './sections/Navbar'
import ProjectsSection from './sections/ProjectsSection'
import ProposalsSection from './sections/ProposalsSection'
import SkillsSection from './sections/SkillsSection'

const HomePage = () => (
	<>
		<Navbar />
		<main>
			<Hero />
			<div className={styles.content}>
				<Ledger />
				<ExperienceSection />
				<ProposalsSection />
				<ProjectsSection />
				<SkillsSection />
				<ContactSection />
			</div>
		</main>
		<footer className={styles.footer}>
			<p>{HOME_LOCALES.footer}</p>
		</footer>
	</>
)

export default HomePage

import { RESUME_PDF_PATH, SECTION_IDS } from 'constants/paths'
import { NAV_LOCALES } from 'locales'

import styles from './index.module.css'

const LINKS = [
	{ id: SECTION_IDS.ledger, label: NAV_LOCALES.work },
	{ id: SECTION_IDS.experience, label: NAV_LOCALES.experience },
	{ id: SECTION_IDS.proposals, label: NAV_LOCALES.proposals },
	{ id: SECTION_IDS.projects, label: NAV_LOCALES.projects },
]

const Navbar = () => (
	<header className={styles.root}>
		<nav className={styles.inner} aria-label="Sections">
			<a className={styles.brand} href="#top">
				<span className={styles.mark} aria-hidden="true" />
				Kittapon J.
			</a>
			<ul className={styles.links}>
				{LINKS.map((link) => (
					<li key={link.id}>
						<a href={`#${link.id}`}>{link.label}</a>
					</li>
				))}
			</ul>
			<a className={styles.cta} href={RESUME_PDF_PATH} target="_blank" rel="noopener">
				{NAV_LOCALES.resume}
			</a>
		</nav>
	</header>
)

export default Navbar

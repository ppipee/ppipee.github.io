import CvPreview from 'assets/images/previews/cv-preview.jpg'
import ResumePreview from 'assets/images/previews/resume-preview.jpg'
import { ANALYTICS_EVENTS } from 'constants/analytics'
import { CV_PDF_PATH, RESUME_PDF_PATH, SECTION_IDS } from 'constants/paths'
import { PROFILE } from 'constants/profile'
import { HOME_LOCALES } from 'locales'
import trackEvent from 'utils/trackEvent'

import useCopyText from '../../hooks/useCopyText'
import styles from './index.module.css'

const ContactSection = () => {
	const { copied, copy } = useCopyText()
	const email = PROFILE.contacts.find((contact) => contact.label === 'Email')

	return (
		<section className={`${styles.root} reveal`} aria-labelledby={SECTION_IDS.contact}>
			<div className={styles.text}>
				<h2 id={SECTION_IDS.contact} className={styles.title}>
					{HOME_LOCALES.contactTitle}
				</h2>
				<p className={styles.lede}>{HOME_LOCALES.contactLede}</p>
				{email && (
					<div className={styles.emailRow}>
						<a className={styles.email} href={email.href}>
							{email.value}
						</a>
						<button
							type="button"
							className={styles.copy}
							onClick={() => {
								copy(email.value)
								trackEvent(ANALYTICS_EVENTS.copyEmail, { location: 'contact' })
							}}
						>
							{copied ? HOME_LOCALES.copied : HOME_LOCALES.copyEmail}
						</button>
					</div>
				)}
				<ul className={styles.links}>
					{PROFILE.contacts
						.filter((contact) => contact.label !== 'Email')
						.map((contact) => (
							<li key={contact.label}>
								<a href={contact.href} target="_blank" rel="noopener">
									{contact.label}
								</a>
							</li>
						))}
					<li>
						<a href={RESUME_PDF_PATH} target="_blank" rel="noopener">
							{HOME_LOCALES.downloadResume}
						</a>
					</li>
					<li>
						<a href={CV_PDF_PATH} target="_blank" rel="noopener">
							{HOME_LOCALES.downloadCv}
						</a>
					</li>
				</ul>
			</div>
			<div className={styles.papers}>
				<a className={`${styles.paper} ${styles.back}`} href={CV_PDF_PATH} target="_blank" rel="noopener">
					<img src={CvPreview} alt={HOME_LOCALES.previewAlt('CV')} width={452} height={640} loading="lazy" />
					<span className={styles.tag}>{HOME_LOCALES.cvLabel}</span>
				</a>
				<a className={`${styles.paper} ${styles.front}`} href={RESUME_PDF_PATH} target="_blank" rel="noopener">
					<img src={ResumePreview} alt={HOME_LOCALES.previewAlt('resume')} width={452} height={640} loading="lazy" />
					<span className={styles.tag}>{HOME_LOCALES.resumeLabel}</span>
				</a>
			</div>
		</section>
	)
}

export default ContactSection

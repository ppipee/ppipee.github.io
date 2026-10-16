import type { CSSProperties } from 'react'

import ProfileImage from 'assets/images/profile.jpg'
import { ACTIVITY_TOTAL } from 'constants/activity'
import { CV_PDF_PATH, RESUME_PDF_PATH } from 'constants/paths'
import { PROFILE } from 'constants/profile'
import { HOME_LOCALES } from 'locales'

import useCopyText from '../../hooks/useCopyText'
import styles from './index.module.css'

const delay = (i: number) => ({ '--i': i }) as CSSProperties

const NAME_LINES = ['Kittapon', 'Junsupakul']

const Hero = () => {
	const { copied, copy } = useCopyText()
	const email = PROFILE.contacts.find((contact) => contact.label === 'Email')

	return (
		<section id="top" className={styles.root} aria-labelledby="hero-name">
			<div className={styles.glow} aria-hidden="true" />
			<div className={styles.inner}>
				<div className={styles.text}>
					<p className={`${styles.role} intro`} style={delay(0)}>
						<span className={styles.pulse} aria-hidden="true" />
						{HOME_LOCALES.role}
					</p>
					<h1 id="hero-name" className={styles.name}>
						{NAME_LINES.map((line, index) => (
							<span key={line} className={`${styles.line} mask`} style={delay(index + 1)}>
								<span>{line}</span>
							</span>
						))}
					</h1>
					<p className={`${styles.summary} intro`} style={delay(3)}>
						{PROFILE.summary}
					</p>
					<div className={`${styles.actions} intro`} style={delay(4)}>
						<a className={styles.primary} href={RESUME_PDF_PATH} target="_blank" rel="noopener">
							{HOME_LOCALES.downloadResume}
							<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
								<path d="M8 2.5v8m0 0 3.5-3.5M8 10.5 4.5 7M3 13.5h10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</a>
						<a className={styles.secondary} href={CV_PDF_PATH} target="_blank" rel="noopener">
							{HOME_LOCALES.downloadCv}
						</a>
						{email && (
							<button type="button" className={styles.ghost} onClick={() => copy(email.value)}>
								{copied ? HOME_LOCALES.copied : email.value}
							</button>
						)}
					</div>
					<dl className={`${styles.facts} intro`} style={delay(5)}>
						<div>
							<dt>Since</dt>
							<dd>Apr 2020</dd>
						</div>
						<div>
							<dt>Merge requests</dt>
							<dd>{ACTIVITY_TOTAL.mergeRequests.toLocaleString('en-US')}</dd>
						</div>
						<div>
							<dt>Repositories</dt>
							<dd>{ACTIVITY_TOTAL.repositories}</dd>
						</div>
						<div>
							<dt>Based in</dt>
							<dd>Bangkok</dd>
						</div>
					</dl>
				</div>
				<figure className={`${styles.portrait} intro`} style={delay(2)}>
					<img src={ProfileImage} alt={`Portrait of ${PROFILE.name}`} width={512} height={512} />
					<figcaption className={styles.links}>
						{PROFILE.contacts
							.filter((contact) => contact.label !== 'Email' && contact.label !== 'Website')
							.map((contact) => (
								<a key={contact.label} href={contact.href} target="_blank" rel="noopener">
									{contact.label}
								</a>
							))}
					</figcaption>
				</figure>
			</div>
		</section>
	)
}

export default Hero

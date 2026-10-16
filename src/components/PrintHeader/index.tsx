import clsx from 'clsx'

import { PROFILE } from 'constants/profile'

import styles from './index.module.css'

interface Props {
	className?: string
}

const PrintHeader = ({ className }: Props) => {
	const contacts = [...PROFILE.contacts, ...PROFILE.privateContacts]

	return (
		<header className={clsx(styles.root, className)}>
			<div>
				<h1 className={styles.name}>
					{PROFILE.name} <span className={styles.nickname}>({PROFILE.nickname})</span>
				</h1>
				<p className={styles.role}>
					{PROFILE.role} · LINE MAN Wongnai · {PROFILE.location}
				</p>
			</div>
			<ul className={styles.contacts}>
				{contacts.map((contact) => (
					<li key={contact.label}>
						<a href={contact.href}>{contact.value}</a>
					</li>
				))}
			</ul>
		</header>
	)
}

export default PrintHeader

import clsx from 'clsx'

import styles from './index.module.css'

interface Props {
	variant: 'phone' | 'browser'
	src: string
	alt: string
	url?: string
	className?: string
}

const DeviceFrame = ({ variant, src, alt, url, className }: Props) =>
	variant === 'phone' ? (
		<div className={clsx(styles.phone, className)}>
			<img src={src} alt={alt} loading="lazy" />
		</div>
	) : (
		<div className={clsx(styles.browser, className)}>
			<div className={styles.bar} aria-hidden="true">
				<span className={styles.dots}>
					<i />
					<i />
					<i />
				</span>
				{url && <span className={styles.url}>{url}</span>}
			</div>
			<img src={src} alt={alt} loading="lazy" />
		</div>
	)

export default DeviceFrame

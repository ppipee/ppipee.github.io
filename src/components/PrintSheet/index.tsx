import clsx from 'clsx'
import type { ReactNode } from 'react'

import styles from './index.module.css'

interface Props {
	children: ReactNode
	className?: string
}

const PrintSheet = ({ children, className }: Props) => <div className={clsx(styles.root, className)}>{children}</div>

export default PrintSheet

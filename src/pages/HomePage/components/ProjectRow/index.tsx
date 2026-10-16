import clsx from 'clsx'

import { HOME_LOCALES } from 'locales'
import type { Project } from 'types'

import styles from './index.module.css'

interface Props {
	project: Project
	compact?: boolean
	className?: string
}

const ProjectRow = ({ project, compact = false, className }: Props) => (
	<article className={clsx(styles.root, compact && styles.compact, !project.image && styles.noImage, 'reveal', className)}>
		{project.image && (
			<div className={styles.media}>
				<img src={project.image} alt={`${project.name} screenshot`} loading="lazy" />
			</div>
		)}
		<div className={styles.text}>
			<div className={styles.meta}>
				<span>{project.context}</span>
				<span>{project.period}</span>
			</div>
			<h3 className={styles.name}>{project.name}</h3>
			<p className={styles.description}>{project.description}</p>
			<ul className={styles.tools}>
				{project.tools.map((tool) => (
					<li key={tool}>{tool}</li>
				))}
			</ul>
			{project.demo && (
				<a className={styles.demo} href={project.demo} target="_blank" rel="noopener">
					{HOME_LOCALES.demo}
					<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
						<path d="M6 3h7v7M13 3 4 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</a>
			)}
		</div>
	</article>
)

export default ProjectRow

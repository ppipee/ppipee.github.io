import React from 'react'

import { Container } from 'pages/HomePage/styled'

import ProjectCard from '../ProjectCard'
import Title from '../Title'
import { PROJECTS } from './constants'
import { ProjectList } from './styled'

const Project = () => {
	return (
		<Container>
			<Title id="project">Project</Title>
			<ProjectList>
				{PROJECTS.map((project, index) => (
					<ProjectCard key={`project-${index}`} {...project} />
				))}
			</ProjectList>
		</Container>
	)
}

export default Project

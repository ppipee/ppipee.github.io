import React from 'react'

import { Container } from 'pages/HomePage/styled'

import Gap from 'common/components/Gap'

import Title from '../Title'
import WorkExperienceCard from '../WorkExperienceCard'
import { EXPERIENCE } from './constants'

const WorkExperience = () => {
	return (
		<Container>
			<Gap $type="vertical" $size="24px">
				<Title id="working-experience">Working Experience</Title>
				<Gap $type="vertical" $size="20px">
					{EXPERIENCE.map((exp, index) => (
						<WorkExperienceCard key={`exp-${index}`} {...exp} />
					))}
				</Gap>
			</Gap>
		</Container>
	)
}

export default WorkExperience

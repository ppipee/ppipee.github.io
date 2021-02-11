import useImpressTracker from 'common/hooks/useImpressTracker'
import React from 'react'

import Header from './components/Header'
import PersonalInformation from './components/PersonalInformation'
import Project from './components/Project'
import Skill from './components/Skill'
import WorkExperience from './components/WorkExperience'
import { ContainerWrapper } from './styled'

const HomePage = () => {
	useImpressTracker()

	return (
		<ContainerWrapper>
			<Header />
			<PersonalInformation />
			<Skill />
			<WorkExperience />
			<Project />
		</ContainerWrapper>
	)
}

export default HomePage

import React from 'react'

import Navigate from 'common/components/Link'

import { NavbarContainer, NavbarWrapper } from './styled'

const Navbar = () => {
	return (
		<NavbarWrapper>
			<NavbarContainer $size="8px">
				<Navigate to="profile">Profile</Navigate>
				<Navigate to="skill">Skill</Navigate>
				<Navigate to="working-experience">Experience</Navigate>
				<Navigate to="project">Project</Navigate>
			</NavbarContainer>
		</NavbarWrapper>
	)
}

export default Navbar

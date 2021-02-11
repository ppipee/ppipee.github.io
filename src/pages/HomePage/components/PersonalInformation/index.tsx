import React from 'react'

import { Container } from 'pages/HomePage/styled'

import useTracker from 'common/hooks/useTracker'

import Title from '../Title'
import {
	DATE_OF_BIRTH, EMAIL, FACEBOOK_LINK, GITHUB_LINK, LINKED_IN_LINK, NAME, NICK_NAME, PHONE_NUMBER,
	RESUME_LINK, SURNAME
} from './constants'
import { Button, ButtonContainer, Detail, InfoContainer, Link } from './styled'

const PersonalInformation = () => {
	const tracker = useTracker()

	const trackLinkedIn = () => {
		tracker('profile', 'click', 'LinkedIn')
	}
	const trackFacebook = () => {
		tracker('profile', 'click', 'Facebook')
	}
	const trackGithub = () => {
		tracker('profile', 'click', 'Github')
	}
	const trackResume = () => {
		tracker('profile', 'click', 'Resume')
	}

	return (
		<Container>
			<Title id="profile">Personal Information</Title>
			<InfoContainer>
				<div>
					<Detail>
						<span>Name :</span>
						<span className="text-blue-500">{NAME}</span>
					</Detail>
					<Detail>
						<span>Surname :</span>
						<span className="text-blue-500">{SURNAME}</span>
					</Detail>
					<Detail>
						<span>Nickname :</span>
						<span className="text-blue-500">{NICK_NAME}</span>
					</Detail>
					<Detail>
						<span>Date of birth :</span>
						<span className="text-blue-500">{DATE_OF_BIRTH}</span>
					</Detail>
				</div>
				<div>
					<Detail>
						<span>Facebook :</span>
						<a className="text-blue-500" href={FACEBOOK_LINK} target="_blank" onClick={trackFacebook}>
							Pipe Kittapon
						</a>
					</Detail>
					<Detail>
						<span>LinkedIn :</span>
						<Link className="text-blue-500" href={LINKED_IN_LINK} target="_blank" onClick={trackLinkedIn}>
							Kittapon Junsupakul
						</Link>
					</Detail>
					<Detail>
						<span>Github :</span>
						<Link className="text-blue-500" href={GITHUB_LINK} target="_blank" onClick={trackGithub}>
							ppipee
						</Link>
					</Detail>
					<Detail>
						<span>Email :</span>
						<Link className="text-blue-500" href={`mailto: ${EMAIL}`}>
							{EMAIL}
						</Link>
					</Detail>
					<Detail>
						<span>Tel :</span>
						<Link className="text-blue-500" href="tel:+66922564321">
							{PHONE_NUMBER}
						</Link>
					</Detail>
				</div>
				<div>
					<Detail>Education</Detail>
					<Detail>Kasetsart University</Detail>
					<Detail>B.Eng Computer Engineer</Detail>
					<Detail>GPX 3.33</Detail>
				</div>
				<ButtonContainer $size="12px" $justifyContent="flex-end">
					<a className="text-blue-500" href={RESUME_LINK} target="_blank" onClick={trackResume}>
						<Button>
							Download Resume
						</Button>
					</a>
				</ButtonContainer>
			</InfoContainer>
		</Container>
	)
}

export default PersonalInformation

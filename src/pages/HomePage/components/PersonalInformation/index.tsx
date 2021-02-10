import React from 'react'

import { Container } from 'pages/HomePage/styled'

import Title from '../Title'
import { Detail, InfoContainer } from './styled'

const PersonalInformation = () => {
	return (
		<Container>
			<Title id="profile">Personal Information</Title>
			<InfoContainer>
				<div>
					<Detail>
						<span>Name :</span>
						<span className="text-blue-500">Kittapon</span>
					</Detail>
					<Detail>
						<span>Surname :</span>
						<span className="text-blue-500">Junsupakul</span>
					</Detail>
					<Detail>
						<span>Nickname :</span>
						<span className="text-blue-500">Pipe</span>
					</Detail>
					<Detail>
						<span>Date of birth :</span>
						<span className="text-blue-500">7 September 1998</span>
					</Detail>
				</div>
				<div>
					<Detail>
						<span>Facebook :</span>
						<a className="text-blue-500" href="https://facebook.com/ppipee.k" target="_blank">
							Pipe Kittapon
						</a>
					</Detail>
					<Detail>
						<span>Linkin :</span>
						<a className="text-blue-500" href="https://linkedin.com/in/ppipee" target="_blank">
							Kittapon Junsupakul
						</a>
					</Detail>
					<Detail>
						<span>Github :</span>
						<a className="text-blue-500" href="https://github.com/ppipee" target="_blank">
							ppipee
						</a>
					</Detail>
					<Detail>
						<span>Email :</span>
						<a className="text-blue-500" href="mailto: ppipee.kj@hotmail.com">
							ppipee.kj@hotmail.com
						</a>
					</Detail>
					<Detail>
						<span>Tel :</span>
						<a className="text-blue-500" href="tel:+66922564321">
							0922564321
						</a>
					</Detail>
				</div>
				<div>
					<Detail>Education</Detail>
					<Detail>Kasetsart University</Detail>
					<Detail>B.Eng Computer Engineer</Detail>
					<Detail>GPX 3.33</Detail>
				</div>
			</InfoContainer>
		</Container>
	)
}

export default PersonalInformation

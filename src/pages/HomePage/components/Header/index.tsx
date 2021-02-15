import React from 'react'

import ProfileImg from 'common/images/profile.png'

import { BackgroundCover, HeaderContainer, Image, InfoContainer, NameTitle } from './styled'

const Header = () => {
	return (
		<HeaderContainer>
			<BackgroundCover />
			<Image src={ProfileImg} loading="lazy" />
			<InfoContainer>
				<NameTitle className="rg24 mWeb-rg20" $size="8px" $type="vertical">
					<span>Ppipee Kittapon</span>
					<span>Software Developer</span>
				</NameTitle>
				<div className="rg18 mWeb-rg16">
					<span className="rg24 mWeb-rg20 text-blue-500">❝ </span>
					<span>
						Hi, my name is Pipe. I am a senior at Computer Engineer, Kasetsart University. My passion are develop my
						skills, learn the latest technologies and grow professionally.
					</span>
					<span className="rg24 mWeb-rg20 text-blue-500"> ❞</span>
				</div>
			</InfoContainer>
		</HeaderContainer>
	)
}

export default Header

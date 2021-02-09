import React from 'react'

import Gap from 'common/components/Gap'

import { CardContainer, DetailContainer, Image, ImageWrapper } from './styled'

interface Props {
	at: string
	logo: string
	role: string
	description: string
	timeRange: string
}

const WorkExperienceCard = ({ at, logo, role, description, timeRange }: Props) => {
	return (
		<CardContainer>
			<ImageWrapper>
				<Image src={logo} />
			</ImageWrapper>
			<DetailContainer $type="vertical" $justifyContent="space-between" $size="16px">
				<Gap $type="vertical" $size="6px">
					<span className="rg20">{role}</span>
					<span className="rg18 text-blue-500">{`@${at}`}</span>
					{description && <span className="rg18">{description}</span>}
				</Gap>
				<span className="rg18">{timeRange}</span>
			</DetailContainer>
		</CardContainer>
	)
}

export default WorkExperienceCard

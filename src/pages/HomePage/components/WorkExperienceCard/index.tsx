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
				<Image src={logo} loading="lazy" />
			</ImageWrapper>
			<DetailContainer $type="vertical" $justifyContent="space-between" $size="16px">
				<Gap $type="vertical" $size="6px">
					<span className="rg20 mWeb-rg16">{role}</span>
					<span className="rg18 mWeb-rg14 text-blue-500">{`@${at}`}</span>
					{description && <span className="rg18 mWeb-rg14">{description}</span>}
				</Gap>
				<span className="rg18 mWeb-rg14">{timeRange}</span>
			</DetailContainer>
		</CardContainer>
	)
}

export default WorkExperienceCard

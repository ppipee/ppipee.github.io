import React from 'react'

import Gap from 'common/components/Gap'

import { Badge, CardContainer, Description, Footer, Image } from './styled'

type Props = {
	name: string
	tools: string[]
	description: string
	timeRange: string
	image?: string
	demo?: string
}

const ProjectCard = ({ name, image, tools, description, timeRange, demo }: Props) => {
	return (
		<CardContainer>
			<Gap $type="vertical" $size="16px">
				<Gap $type="vertical" $size="8px">
					<div>{name}</div>
					<Gap $type="grid" $size="6px" $responsive>
						{tools.map((tool, index) => (
							<Badge key={`tool-${index}`}>{tool}</Badge>
						))}
					</Gap>
				</Gap>
				{image && <Image src={image} />}
				<Description>
					<span className="rg24">❝ </span>
					<span>{description}</span>
					<span className="rg24"> ❞</span>
				</Description>
			</Gap>
			<Footer>
				{demo ? (
					<a className="text-blue-500" href={demo}>
						DEMO
					</a>
				) : (
					<div />
				)}
				<span>{timeRange}</span>
			</Footer>
		</CardContainer>
	)
}

export default ProjectCard

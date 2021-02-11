import React from 'react'

import Gap from 'common/components/Gap'
import useTracker from 'common/hooks/useTracker'

import { Badge, CardContainer, Description, Footer, Image, DemoLink } from './styled';

type Props = {
	name: string
	tools: string[]
	description: string
	timeRange: string
	image?: string
	demo?: string
}

const ProjectCard = ({ name, image, tools, description, timeRange, demo }: Props) => {
	const tracker = useTracker()

	const trackDemo = () => {
		tracker('project', 'click', name)
	}

	return (
		<CardContainer>
			<Gap $type="vertical" $size="16px">
				<Gap $type="vertical" $size="10px">
					<div className="rg20">{name}</div>
					<Gap $type="grid" $size="6px" $responsive>
						{tools.map((tool, index) => (
							<Badge key={`tool-${index}`}>{tool}</Badge>
						))}
					</Gap>
				</Gap>
				{image && <Image src={image} loading="lazy" />}
				<Description>
					<span className="rg24 text-blue-500">❝ </span>
					<span>{description}</span>
					<span className="rg24 text-blue-500"> ❞</span>
				</Description>
			</Gap>
			<Footer>
				{demo ? (
					<DemoLink className="text-blue-500" href={demo} target="_blank" onClick={trackDemo}>
						DEMO
					</DemoLink>
				) : (
						<div />
					)}
				<span>{timeRange}</span>
			</Footer>
		</CardContainer>
	)
}

export default ProjectCard

import React from 'react'

import { Container } from 'pages/HomePage/styled'

import Gap from 'common/components/Gap'

import SkillDetail from '../SkillDetail'
import Title from '../Title'
import { HARD_SKILL, SOFT_SKILL } from './constants'
import { SkillContainer, SkillList } from './styled'

const Skill = () => {
	return (
		<Container>
			<Gap $type="vertical" $size="20px">
				<Title id="skill">Skill</Title>
				<SkillContainer $size="16px" $type="vertical">
					<Gap $type="vertical" $size="8px">
						<span className="rg20">Soft Skill ::</span>
						<SkillList>
							{SOFT_SKILL.map((skill, index) => (
								<SkillDetail key={`soft-skill-${index}`}>{skill}</SkillDetail>
							))}
						</SkillList>
					</Gap>
					<Gap $type="vertical" $size="8px">
						<span className="rg20">Hard Skill ::</span>
						<SkillList>
							{HARD_SKILL.map((skills: string[], index) => (
								<SkillDetail key={`soft-skill-${index}`}>{skills.join('  ')}</SkillDetail>
							))}
						</SkillList>
					</Gap>
				</SkillContainer>
			</Gap>
		</Container>
	)
}

export default Skill

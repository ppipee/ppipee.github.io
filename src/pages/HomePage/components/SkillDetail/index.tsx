import React, { ReactNode } from 'react'

import { Text, TextContainer } from './styled'

type Props = {
	children: ReactNode
}

const SkillDetail = ({ children }: Props) => {
	return (
		<TextContainer $size="16px">
			<span className="rg24 text-blue-500">{`>`}</span>
			<Text className="rg18">{children}</Text>
		</TextContainer>
	)
}

export default SkillDetail

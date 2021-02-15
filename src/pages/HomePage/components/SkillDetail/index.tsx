import React, { ReactNode } from 'react'

import { Text, TextContainer } from './styled'

type Props = {
	children: ReactNode
}

const SkillDetail = ({ children }: Props) => {
	return (
		<TextContainer $size="12px">
			<span className="rg18 mWeb-rg16 text-blue-500">{`>`}</span>
			<Text className="rg18 mWeb-rg16">{children}</Text>
		</TextContainer>
	)
}

export default SkillDetail

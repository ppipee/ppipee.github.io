import React, { HTMLAttributes, ReactNode } from 'react'

import { TitleWrapper } from './styled'

interface Props extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}

const Title = ({ children, ...props }: Props) => {
	return <TitleWrapper {...props}>{children}</TitleWrapper>
}

export default Title

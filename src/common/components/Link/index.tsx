import React, { ReactNode } from 'react'
import { Link as Scroll } from 'react-scroll'
import { Link } from 'react-router-dom'

type Props = {
	to: string
	children: ReactNode
}

const Navigate = ({ to, children }: Props) => {
	return (
		<Scroll to={to} smooth={true} duration={500}>
			<Link to={`#${to}`}>{children}</Link>
		</Scroll>
	)
}

export default Navigate

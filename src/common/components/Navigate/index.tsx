import React, { ReactNode } from 'react'
import { Link as Scroll } from 'react-scroll'
import { LinkStyled } from './styled'
import { NAV_HEIGHT as _NAV_HEIGHT } from 'common/styles/constants'

type Props = {
	to: string
	children: ReactNode
}

const NAV_HEIGHT = Number(_NAV_HEIGHT.replace('px', ''))
const PADDING_SPACE = 16

const Navigate = ({ to, children }: Props) => {
	return (
		<LinkStyled className="rg18 mWeb-rg14" to={`#${to}`}>
			<Scroll to={to} smooth={true} duration={500} offset={-(NAV_HEIGHT + PADDING_SPACE)}>
				{children}
			</Scroll>
		</LinkStyled>
	)
}

export default Navigate

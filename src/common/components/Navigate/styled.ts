import { GRAY } from 'common/styles/colors'
import { MOBILE_WIDTH } from 'common/styles/constants'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkStyled = styled(Link)`
	padding: 8px 12px;
	border-radius: 8px;
	cursor: pointer;
	background-color: transparent;
	transition: 0.2s background-color;

	:hover {
		background-color: rgba(255, 255, 255, 0.2);
		color: ${GRAY[200]};
	}

	@media only screen and (max-width: ${MOBILE_WIDTH}) {
		padding: 6px 8px;
	}
`

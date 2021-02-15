import styled from 'styled-components'

import Gap from 'common/components/Gap'
import { GRAY } from 'common/styles/colors'
import { NAV_HEIGHT, MAX_WIDTH, MOBILE_WIDTH } from 'common/styles/constants'

export const NavbarContainer = styled(Gap)`
	height: ${NAV_HEIGHT};
	color: ${GRAY.white};
	width: 100%;
	max-width: ${MAX_WIDTH};
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 0 24px;
	margin: 0 auto;

	@media only screen and (max-width: ${MOBILE_WIDTH}) {
		padding: 0 12px;
		justify-content: center;
	}
`

export const NavbarWrapper = styled.div`
	background-color: ${GRAY[900]};
	width: 100%;
	position: fixed;
`

import styled from 'styled-components'

import Gap from 'common/components/Gap'
import { GRAY } from 'common/styles/colors'

const NAV_HEIGHT = '50px'
const MAX_WIDTH = '768px'

export const NavbarContainer = styled(Gap)`
	height: ${NAV_HEIGHT};
	color: ${GRAY.white};
	width: ${MAX_WIDTH};
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 0 24px;
	margin: 0 auto;
`

export const NavbarWrapper = styled.div`
	background-color: ${GRAY[900]};
	width: 100%;
	position: fixed;
`

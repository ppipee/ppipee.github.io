import styled from 'styled-components'

import { BLUE, GRAY } from 'common/styles/colors'
import { MOBILE_WIDTH } from 'common/styles/constants'

export const TitleWrapper = styled.div`
	padding: 0 12px 12px;
	border-bottom: 2px solid ${GRAY[700]};
	font-size: 24px;
	width: 100%;
	color: ${BLUE[600]};

	@media only screen and (max-width: ${MOBILE_WIDTH}) {
		font-size: 20px;
	}
`

import styled from 'styled-components'

import { MOBILE_WIDTH } from 'common/styles/constants'

export const Detail = styled.div`
	font-size: 18px;
	display: flex;
	justify-content: space-between;
`

export const InfoContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 16px;
	padding: 24px 16px 0;

	@media only screen and (max-width: ${MOBILE_WIDTH}) {
		grid-template-columns: 1fr;
	}
`

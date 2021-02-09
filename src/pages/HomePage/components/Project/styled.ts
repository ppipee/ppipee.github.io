import styled from 'styled-components'

import { MOBILE_WIDTH } from 'common/styles/constants'

export const ProjectList = styled.div`
	padding: 24px 16px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 24px;

	@media only screen and (max-width: ${MOBILE_WIDTH}) {
		grid-template-columns: 1fr;
	}
`

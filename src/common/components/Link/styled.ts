import { GRAY } from 'common/styles/colors'
import styled from 'styled-components'

export const LinkWrapper = styled.span`
	padding: 8px 12px;
	border-radius: 8px;
	cursor: pointer;

	:hover {
		background-color: rgba(255, 255, 255, 0.2);
		color: ${GRAY[200]};
	}
`

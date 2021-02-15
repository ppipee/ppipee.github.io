import styled from 'styled-components'

import { MOBILE_WIDTH } from 'common/styles/constants'
import { BLUE, GRAY } from 'common/styles/colors'
import Gap from 'common/components/Gap'

export const Detail = styled.div`
	font-size: 18px;
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: ${MOBILE_WIDTH}) {
		font-size: 16px;
	}
`

export const InfoContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 16px;
	padding: 24px 16px 0;

	@media only screen and (max-width: ${MOBILE_WIDTH}) {
		padding: 24px 8px 0;
		grid-gap: 12px;
		grid-template-columns: 1fr;
	}
`

export const Link = styled.a`
	cursor: pointer;
	transform: 0.2s all;

	:hover {
		color: ${BLUE[400]};
	}
`

export const ButtonContainer = styled(Gap)`
	margin-top: 24px;

	@media only screen and (max-width: ${MOBILE_WIDTH}) {
		justify-content: center;
	}
`

export const Button = styled.button`
	outline: none;
	box-shadow: none;
	border: none;
	padding: 8px 12px;
	color: ${BLUE[600]};
	background-color: ${BLUE[100]};
	border-radius: 8px;
	cursor: pointer;
	box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
	transition: 0.2s all;

	:hover,
	:focus {
		color: ${GRAY.white};
		background-color: ${BLUE[400]};
		box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12), 0px 8px 8px rgba(0, 0, 0, 0.24);
	}
`

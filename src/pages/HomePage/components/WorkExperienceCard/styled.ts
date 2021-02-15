import styled from 'styled-components'

import Gap from 'common/components/Gap'
import { BLUE, GRAY } from 'common/styles/colors'
import { MOBILE_WIDTH } from 'common/styles/constants'

const CARD_HEIGHT = '180px'
const IMAGE_WIDTH = '180px'
const IMAGE_HEIGHT = '120px'

export const CardContainer = styled.div`
	display: flex;
	background-color: ${GRAY.white};
	border: 1px solid ${GRAY[200]};
	border-radius: 16px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	padding: 16px;
	min-height: ${CARD_HEIGHT};

	@media only screen and (max-width: ${MOBILE_WIDTH}) {
		display: grid;
		grid-gap: 16px;
		grid-template-columns: 1fr;
		margin: 0 8px;
	}
`

export const Image = styled.img`
	display: block;
	margin: auto;
	padding: 8px 16px;
	width: ${IMAGE_WIDTH};

	@media only screen and (max-width: ${MOBILE_WIDTH}) {
		padding: 0;
		height: ${IMAGE_HEIGHT};
		width: auto;
	}
`

export const ImageWrapper = styled.div`
	display: flex;
	align-items: center;
	border-radius: 12px;
	border: 3px solid ${BLUE[400]};
	padding: 12px;
	margin-right: 16px;

	@media only screen and (max-width: ${MOBILE_WIDTH}) {
		margin-right: 0;
	}
`

export const DetailContainer = styled(Gap)`
	flex: 1;
`

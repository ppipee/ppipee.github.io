import styled from 'styled-components'

import Gap from 'common/components/Gap'
import { GRAY } from 'common/styles/colors'
import { MOBILE_WIDTH } from 'common/styles/constants'

const COVER_HEIGHT = '275px'
const COVER_MOBILE_HEIGHT = '200px'
const MAX_WIDTH = '768px'
const IMAGE_SIZE = '215px'
const CONTAINER_SIZE = '325px'

export const BackgroundCover = styled.div`
	background: linear-gradient(to bottom, ${GRAY[900]} 0%, #3d4245 100%);
	height: ${COVER_HEIGHT};
	position: absolute;
	top: 50px;
	left: 0;
	right: 0;
	z-index: -1;

	@media only screen and (max-width: ${MOBILE_WIDTH}) {
		height: ${COVER_MOBILE_HEIGHT};
	}
`

export const HeaderContainer = styled.div`
	padding-top: 166px;
	max-width: ${MAX_WIDTH};
	width: 100%;
	margin: 0 auto;
	min-height: ${CONTAINER_SIZE};
	display: flex;

	@media only screen and (max-width: ${MOBILE_WIDTH}) {
		padding-top: 110px;
		flex-direction: column;
		align-items: center;
	}
`

export const Image = styled.img`
	width: ${IMAGE_SIZE};
	height: ${IMAGE_SIZE};
	border-radius: 50%;
	border: 4px solid ${GRAY.white};
`

export const NameTitle = styled(Gap)`
	font-size: 24px;
	margin-bottom: 60px;
	color: ${GRAY.white};

	@media only screen and (max-width: ${MOBILE_WIDTH}) {
		color: ${GRAY[700]};
		margin-bottom: 24px;
	}
`

export const InfoContainer = styled.div`
	flex: 1;
	padding: 65px 36px 48px 24px;
	margin-left: 48px;

	@media only screen and (max-width: ${MOBILE_WIDTH}) {
		padding: 24px;
		margin-left: 0;
	}
`

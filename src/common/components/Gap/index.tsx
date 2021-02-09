import styled, { css } from 'styled-components'

import { GapProps, GapTypeVariants } from './types'

function applyGapStyle({ $justifyContent, $alignItems, $overflow, $responsive, $wrap }: GapProps) {
	return css`
		${$responsive &&
		css`
			width: 100%;
		`}

		${$justifyContent &&
		css`
			justify-content: ${$justifyContent};
		`}

		${$alignItems &&
		css`
			align-items: ${$alignItems};
		`}

		${$overflow &&
		css`
			overflow: ${$overflow};
		`}

		${$wrap &&
		css`
			flex-wrap: ${$wrap};
		`}
	`
}

function applyGapType({ $size: size, $type: type = GapTypeVariants.Horizontal }: GapProps) {
	switch (type) {
		case GapTypeVariants.Horizontal:
			return css`
				> *:not(:last-child) {
					margin-right: ${size};
				}
			`
		case GapTypeVariants.Vertical:
			return css`
				flex-direction: column;

				> *:not(:last-child) {
					margin-bottom: ${size};
				}
			`
		case GapTypeVariants.Grid:
			return css`
				flex-wrap: wrap;
				align-items: center;
				margin: calc(-${size} / 2);
				> * {
					margin: calc(${size} / 2);
				}
			`
		default:
			return null
	}
}

const Gap = styled.div`
	display: flex;

	${applyGapType}
	${applyGapStyle}
`

export default Gap

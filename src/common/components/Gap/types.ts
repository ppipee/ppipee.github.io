import { HTMLAttributes } from 'react'

import { Property } from 'csstype'

export interface GapProps extends HTMLAttributes<HTMLDivElement> {
	$size: string
	$type?: GapType
	$responsive?: boolean
	$justifyContent?: Property.JustifyContent
	$alignItems?: Property.AlignItems
	$overflow?: Property.Overflow
	$wrap?: Property.FlexWrap
}

export const GapTypeVariants = {
	Vertical: 'vertical',
	Horizontal: 'horizontal',
	Grid: 'grid',
} as const

export type GapType = typeof GapTypeVariants[keyof typeof GapTypeVariants]

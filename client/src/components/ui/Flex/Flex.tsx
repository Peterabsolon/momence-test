/**
 * Dunno why but Rebass Flex does not have gap CSS property
 */

import { Flex as RebassFlex, FlexProps as RebassFlexProps } from 'rebass'
import styled, { css } from 'styled-components'

export interface FlexProps extends RebassFlexProps {
  gap?: number
}

export const Flex = (props: FlexProps) => <StyledRebassFlex {...props} />

const StyledRebassFlex = styled(RebassFlex)<FlexProps>`
  ${({ gap }) => css`
    gap: ${gap}px;
  `}
`

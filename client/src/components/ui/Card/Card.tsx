import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { space, SpaceProps } from 'styled-system'

export interface CardProps extends SpaceProps {
  children: ReactNode
}

export const Card = ({ children, p = 3, ...rest }: CardProps) => {
  return (
    <Wrapper {...rest} p={p}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div<SpaceProps>`
  ${({ theme }) => css`
    background: ${theme.palette.bw['800']};
    border-radius: ${theme.radii.sm};
  `}

  ${space}
`

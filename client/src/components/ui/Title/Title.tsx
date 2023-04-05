import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

export interface TitleProps {
  /**
   * The content
   */
  children: ReactNode

  /**
   * Heading level, e.g. h1, h2, h3
   */
  level?: 1 | 2 | 3

  /**
   * Text align
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right'

  /**
   * The text color
   * Could be typed using this technique but outside of the scope for this demo. (e.g. color: 'palette.red.400')
   * https://javascript.plainenglish.io/advanced-typescript-type-level-nested-object-paths-7f3d8901f29a
   */
  color?: string
}

export const Title = ({ children, level = 1, ...props }: TitleProps) => {
  switch (level) {
    case 1:
      return <H1 {...props}>{children}</H1>
    case 2:
      return <H2 {...props}>{children}</H2>
    case 3:
      return <H3 {...props}>{children}</H3>
    default:
      return null
  }
}

const sharedStyles = ({ align = 'left', color }: Omit<TitleProps, 'children' | 'level'>) => css`
  text-align: ${align};
  color: ${color};
`

const H1 = styled.h1`
  ${sharedStyles}
  font-size: 2.5rem;
`

const H2 = styled.h2`
  ${sharedStyles}
  font-size: 2rem;
`

const H3 = styled.h3`
  ${sharedStyles}
  font-size: 1.5rem;
`

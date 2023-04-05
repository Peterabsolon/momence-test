import styled, { css } from 'styled-components'
import { space, SpaceProps } from 'styled-system'

export type AlertLevel = 'info' | 'warning' | 'success' | 'error'

export interface AlertProps extends SpaceProps {
  level?: AlertLevel
  message: string
}

export const Alert = ({ level = 'info', message, p = 3, ...rest }: AlertProps) => (
  <Wrapper level={level} p={p} {...rest}>
    {message}
  </Wrapper>
)

const Wrapper = styled.div<Omit<AlertProps, 'message'>>`
  border: 1px solid;
  max-width: 360px;
  width: 100%;
  margin: 0 auto;

  ${space}

  ${({ level, theme }) => css`
    border-radius: ${theme.radii.sm};
    background: ${theme.palette.bw['800']};

    ${level === 'info' &&
    css`
      color: ${theme.colors.primary};
    `}

    ${level === 'warning' &&
    css`
      color: ${theme.colors.warning};
    `}
    
    ${level === 'success' &&
    css`
      color: ${theme.colors.success};
    `}

    ${level === 'error' &&
    css`
      color: ${theme.colors.error};
    `}
  `}}
`

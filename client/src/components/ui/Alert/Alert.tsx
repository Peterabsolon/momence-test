import styled, { css } from 'styled-components'

export type AlertLevel = 'info' | 'warning' | 'success' | 'error'

export interface AlertProps {
  level?: AlertLevel
  message: string
}

export const Alert = ({ level = 'info', message }: AlertProps) => <Wrapper level={level}>{message}</Wrapper>

const Wrapper = styled.div<Pick<AlertProps, 'level'>>`
  border: 1px solid;
  max-width: 360px;
  width: 100%;
  margin: 0 auto;
  padding: 12px;
  border-radius: 6px;

  ${({ level, theme }) => {
    console.log({ theme })

    return css`
      ${level === 'info' &&
      css`
        color: ${theme.palette.bw['800']};
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
    `
  }}
`

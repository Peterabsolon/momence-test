import styled, { css } from 'styled-components'

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 16px;
    border-radius: 6px;
    background: ${theme.palette.bw['800']};
  `}
`

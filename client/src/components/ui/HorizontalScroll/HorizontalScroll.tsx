import { ReactNode } from 'react'
import styled from 'styled-components'

export interface HorizontalScrollProps {
  children: ReactNode
}

export const HorizontalScroll = ({ children }: HorizontalScrollProps) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  max-width: calc(100% + 16px);
  overflow-x: auto;
  margin: 0 -8px;
  padding: 0 8px;
`

import { ReactNode } from 'react'
import styled from 'styled-components'

export interface HorizontalScrollProps {
  children: ReactNode
}

export const HorizontalScroll = ({ children }: HorizontalScrollProps) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  max-width: 100%;
  overflow-x: auto;
`

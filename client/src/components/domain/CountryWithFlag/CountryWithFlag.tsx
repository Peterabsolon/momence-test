import styled from 'styled-components'

import { Flex } from '~/components/ui/Flex'

import { getFlagImageUrl } from './CountryWithFlag.utils'

export interface CountryWithFlagProps {
  country: string
  currency?: string
}

export const CountryWithFlag = ({ country, currency }: CountryWithFlagProps) => (
  <Flex alignItems="center">
    <FlagImg src={getFlagImageUrl(country)} isIMF={country === 'IMF'} alt={country} /> {country} {currency}
  </Flex>
)

export const FlagImg = styled.img<{ isIMF: boolean }>`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  margin-top: -4px;
  margin-bottom: ${(props) => (props.isIMF ? '-4px' : '0')};
`

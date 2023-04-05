import { lookup } from 'country-data'

import { ExchangeRate } from '~/api'

export const computeExchangeRate = (rate: ExchangeRate, amount: number) => ({
  ...rate,
  converted: (amount / rate.rate) * rate.amount,
})

export const isMatchingCode = (rate: ExchangeRate, code: string) => (code ? rate.code === code : true)

export const getFlagImageUrl = (rate: ExchangeRate) => {
  let code = ''

  const res = lookup.countries({ name: rate.country })
  if (res[0]) {
    code = res[0].alpha2
  }

  // CNB.cz uses different names for some countries than "country-data", convert here
  else if (rate.country === 'USA') {
    code = 'US'
  } else if (rate.country === 'South Korea') {
    code = 'KR'
  } else if (rate.country === 'EMU') {
    code = 'EU'
  } else if (rate.country === 'Hongkong') {
    code = 'HK'
  }

  if (!code) {
    console.log({ rate, code })
  }

  return {
    ...rate,
    flagIconSrc: `https://www.countryflagicons.com/SHINY/64/${code}.png`,
  }
}

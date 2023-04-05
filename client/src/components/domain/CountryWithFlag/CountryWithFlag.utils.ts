import { lookup } from 'country-data'

export const getFlagImageUrl = (country: string) => {
  let code = ''

  const res = lookup.countries({ name: country })
  if (res[0]) {
    code = res[0].alpha2
  }

  // CNB.cz uses different names for some countries than "country-data", convert here
  else if (country === 'USA') {
    code = 'US'
  } else if (country === 'South Korea') {
    code = 'KR'
  } else if (country === 'EMU') {
    code = 'EU'
  } else if (country === 'Hongkong') {
    code = 'HK'
  }

  return `https://www.countryflagicons.com/SHINY/64/${code}.png`
}

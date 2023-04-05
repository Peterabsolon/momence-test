/* eslint-disable */

import 'styled-components'

import { theme } from '../constants'

interface IPalette {
  main: string
  contrastText: string
}

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

// After a year of being stubborn I have to admit Tailwind is step-up from my beloved styled-components.
// Nowadays I would that or use twin.macro with styled-components https://github.com/ben-rogerson/twin.macro/blob/master/docs/styled-component-guide.md

// More shades could be added here, 100 - 800, for this demo this is enough
export const palette = {
  bw: {
    0: 'black',
    800: 'white',
  },

  red: {
    400: '#fb5858',
  },

  green: {
    400: '#67ff67',
  },

  yellow: {
    400: '#ffff42',
  },
}

export const theme = {
  palette,
  colors: {
    error: palette.red['400'],
    success: palette.green['400'],
    warning: palette.yellow['400'],
  },
}

export const Theme = typeof theme

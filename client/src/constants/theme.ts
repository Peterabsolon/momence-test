// After a year of being stubborn I have to admit Tailwind is step-up from my beloved styled-components.
// Nowadays I would that or use twin.macro with styled-components https://github.com/ben-rogerson/twin.macro/blob/master/docs/styled-component-guide.md

// More shades could be added here, 100 - 800, for this demo this is enough
export const palette = {
  brand: {
    primary: '#6643f0',
    secondary: '#21c2b8',
  },

  bw: {
    0: 'black',
    100: '#ccc',
    200: '#b3b3b3',
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

  blue: {
    400: '#2684FF', // same as react-select uses
  },
}

export const theme = {
  palette,

  colors: {
    primary: palette.brand.primary,
    secondary: palette.brand.secondary,
    error: palette.red['400'],
    success: palette.green['400'],
    warning: palette.yellow['400'],
    focus: palette.blue['400'],
    border: palette.bw[100],
    borderDark: palette.bw[200],
  },

  radii: {
    sm: '4px',
    md: '6px',
    lg: '12px',
  },
}

export const Theme = typeof theme

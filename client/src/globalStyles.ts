import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
    }

    :root {
      font-family: ${theme.fontFamily};
      line-height: 1.5;
      font-weight: 400;
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;

      width: 100%;
      min-height: 100vh;

      /* From https://www.joshwcomeau.com/gradient-generator/ using Momence brand colors */
      background-image: linear-gradient(
        45deg,
        hsl(252deg 85% 60%) 0%,
        hsl(217deg 100% 50%) 20%,
        hsl(212deg 100% 50%) 36%,
        hsl(208deg 100% 50%) 48%,
        hsl(205deg 100% 50%) 59%,
        hsl(200deg 100% 48%) 68%,
        hsl(195deg 100% 45%) 75%,
        hsl(189deg 100% 41%) 83%,
        hsl(183deg 100% 38%) 91%,
        hsl(176deg 71% 45%) 100%
      );
    }

    body {
      margin: 0 ${theme.sidePadding};
    }

    .App {
      width: 100%;
      max-width: ${theme.containerWidth};
      margin: 0 auto;
      min-height: 100vh;
    }

    .App,
    input {
      /* 16px on mobile so there is no zoom when using inputs */
      font-size: 16px;
    }

    @media (min-width: 960px) {
      .App,
      input {
        font-size: 14px;
      }
    }

    .bold {
      font-weight: 600;
    }
  `}
`

import { createGlobalStyle, css } from "styled-components";

// import "react-toastify/dist/ReactToastify.css";

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
        url('/fonts/roboto-v29-latin-300.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/roboto-v29-latin-400.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
        url('/fonts/roboto-v29-latin-700.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: local(''),
        url('/fonts/roboto-v29-latin-900.woff2') format('woff2')
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    vertical-align: baseline;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      background: ${theme.colors.background};
      font-family: ${theme.font.family};
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.weight.regular};
      line-height: 1.5;
    }
    input,
    textarea,
    button {
      font: 500 ${theme.font.sizes.small} ${theme.font.family};
      color: ${theme.colors.gray};
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: ${theme.font.weight.black};
    }
    button {
      cursor: pointer;
    }
    ul,
    ol {
      list-style: none;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    [disabled],
    [readonly] {
      opacity: 0.6;
      cursor: not-allowed;
    }

    /* .Toastify__toast-theme--colored.Toastify__toast--success {
      background: var(--yellow-500) !important;
    }
    .Toastify__toast-theme--colored.Toastify__toast--error {
      background: var(--red-500) !important;
    } */
  `}

`;

export default GlobalStyles;

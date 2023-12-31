import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    font-size: 16px;
  }
  
  body {
    background-color: ${({ theme }) => theme.colors.neutral};
    color: ${({ theme }) => theme.colors.primaryText};
    line-height: 1.5;
    padding-bottom: ${({ theme }) =>
      `calc(${theme.gutters.size4} + 50px)`}; /* Based on navbar height */
    padding-top: ${({ theme }) => theme.gutters.size4};
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    transition: background-color .3s;
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */

    ${({ theme }) => theme.breakpoints.lg} {
      padding-bottom: ${({ theme }) => theme.gutters.size4};
      padding-top: ${({ theme }) =>
        `calc(${theme.gutters.size4} + 60px)`}; /* Based on navbar height */
    }
  }

  button, input, select, textarea {
    font-family: var(--font-lato);
  }
`;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(rgb(35, 155, 255), 0.1);
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    color: rgb(50, 50, 50);
  }

  body {
    padding: 0;
    margin: 0;
    background: rgb(244, 239, 233);
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    font-size: 1rem;
    line-height: 1;
  }

  *, *::before, *::after {
    font: inherit;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    text-decoration: none;
    color: inherit;
    outline: 0;
    background: transparent;
  }
`;

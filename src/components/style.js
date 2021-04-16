import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-display: swap;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: normal;
  }

  html {
    font-display: auto;
    font-weight: normal;
    text-rendering: optimizeLegibility;
    font-kerning: normal;
    text-size-adjust: 100%;
    -webkit-font-kerning: normal;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
  }

  ul {
    margin: 0;
    grid-row: 1;
    grid-column: 1 / 9;
    display: flex;
    list-style: none;

    @media(max-width: 800px) {
      flex-direction: column;
      padding: 24px;
    }
  }

  li {
    flex: 1;
    margin: 0;
    padding: 24px;
    margin-top: 48px;

  }

  body {
    margin: 0;
    padding: 0;
    background-color: rgba(255, 255, 255, 1);

    @media(prefers-color-scheme: dark) {
      background-color: rgba(0, 0, 0, 1);
    }
  }

`;

export default GlobalStyle;

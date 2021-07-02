import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-display: swap;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: normal;
    margin: 0;
    padding: 0;
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
    display: flex;
    flex-direction: row;
    flex: 1;
    list-style: none;
    flex-wrap: wrap;

    @media(max-width: 600px) {
      flex-direction: column;
    }
  }

  li {
    flex: 1 300px;
  }

  path.state {
    &:hover {
      fill: red;
    }
  }

  rect.bar {
    &:hover {
      fill: red;
    }

    @media(prefers-color-scheme: dark) {
      fill: rgba(255, 255, 255, 0.7);
    }
  }

  body {
    background-color: rgba(255, 255, 255, 1);

    @media(prefers-color-scheme: dark) {
      background-color: rgba(0, 0, 0, 1);
    }
  }

`;

export default GlobalStyle;

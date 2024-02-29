"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
      --background: #E4F3EC;
      --title: #0F1811;
      --text: #535755;
      --link: #59615D;
      --non-relevant-text: #9D9E9D;
      --primary-green: #07FF8B;
      --black-green: #072D1B;
      --border: #c0e2ce;
      --divider: rgb(0, 0, 0, 5%);
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;

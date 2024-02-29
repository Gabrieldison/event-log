"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
      --background: #E6E8EB;
      --title: #050505;
      --text: #323332;
      --link: #828583;
      --non-relevant-text: #A4A6A4;
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

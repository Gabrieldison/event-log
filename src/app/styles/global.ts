"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #E6E8EB;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;

export default GlobalStyle;

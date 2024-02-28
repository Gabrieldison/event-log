"use client";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  body {
    background-color: #0B0A0A;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem; /* Ajuste o padding conforme necessário */
  }
`;

export default GlobalStyle;

export const MainContainer = styled.main``;

"use client";

import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgb(0, 0, 0, 5%);
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 10px;

  a {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    color: #828583;
  }
`;

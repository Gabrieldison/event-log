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
  border-bottom: 1px solid var(--divider);
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 10px;

  a {
    position: relative;
    overflow: hidden;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    color: var(--link);

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background-color: var(--primary-green);
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }

    &:hover {
      color: var(--title);
    }
  }
`;

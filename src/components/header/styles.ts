"use client";

import styled from "styled-components";

interface MobileMenuProps {
  isOpen: boolean;
}

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  padding-top: 0.313rem;
  padding-bottom: 0.313rem;
  border-bottom: 1px solid var(--divider);
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 0.625rem;

  @media (max-width: 520px) {
    display: none;
  }

  a {
    position: relative;
    overflow: hidden;
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

    &.active::after {
      width: 100%;
    }

    &:hover {
      color: var(--title);
    }

    &.active {
      color: var(--title);
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  cursor: pointer;

  @media (max-width: 520px) {
    display: block;
    font-size: 1rem;
    font-weight: 500;
    color: var(--link);
  }
`;

export const MobileMenu = styled.div<MobileMenuProps>`
  display: none;
  gap: 0.625rem;
  padding: 1rem;
  width: 100%;

  @media (max-width: 520px) {
    display: flex;
    flex-direction: column;
    background-color: var(--background);
    font-size: 1rem;
    font-weight: 500;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    transition:
      transform 0.3s ease,
      visibility 0.3s ease;

    transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});

    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};

    a {
      /* display: flex;
      align-items: center;
      justify-content: center; */
      font-size: 1rem;
      font-weight: 500;
      color: var(--link);
    }

    a.active {
      background-color: var(--divider);
      color: var(--title);
      padding: 0.313rem;
      border-radius: 3px;
    }
  }
`;

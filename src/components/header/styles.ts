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

  border-bottom: 1px solid var(--divider);

  @media (max-width: 768px) {
    padding: 0.313rem;
  }
`;

export const NavContainer = styled.nav<MobileMenuProps>`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;

  a {
    position: relative;
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

    &:hover,
    &.active {
      color: var(--title);
    }

    @media (max-width: 520px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-size: 1.5rem;
    }
  }

  @media (max-width: 520px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 1rem;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--background);
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 520px) {
    display: block;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--link);
  }
`;

export const CloseButtonMenuMobile = styled.span`
  display: none;

  @media (max-width: 520px) {
    display: flex;
    align-self: end;
    font-weight: 500;
    font-size: 2rem;
    color: var(--black-green);
  }
`;

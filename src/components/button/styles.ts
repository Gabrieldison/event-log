"use client";

import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: var(--primary-green);
  color: var(--black-green);
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  transition:
    transform 0.3s,
    color 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 520px) {
    width: 100%;
    font-size: 1rem;
  }
`;

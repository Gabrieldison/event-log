"use client";

import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: #39c67a;
  color: var(--text);
  border: thin solid var(--non-relevant-text);
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  padding: 8px 16px;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0.9);
  }
`;

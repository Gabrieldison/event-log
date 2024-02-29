"use client";

import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: var(--primary-green);
  color: #063c1f;
  border: 0;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  transition:
    background 0.3s,
    color 0.3s;

  margin-bottom: 20px;

  &:hover {
    background: #1dbf5e;
    color: #05331a;
  }
`;

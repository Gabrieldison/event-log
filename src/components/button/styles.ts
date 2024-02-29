"use client";

import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: var(--primary-green);
  color: var(--black-green);
  border: 0;
  border-radius: 4px;
  padding: 4px 8px;
  line-height: 180%;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  transition:
    transform 0.3s,
    color 0.3s;

  margin-bottom: 15px;

  &:hover {
    transform: scale(1.05);
  }
`;

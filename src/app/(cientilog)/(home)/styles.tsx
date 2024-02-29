"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  width: 100%;
  color: var(--title);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const DateText = styled.span`
  color: var(--non-relevant-text);
  font-size: 0.875rem;
  font-weight: 400;
  margin-bottom: 20px;
  font-style: italic;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    line-height: 180%;
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

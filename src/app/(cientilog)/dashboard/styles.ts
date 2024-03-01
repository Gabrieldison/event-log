"use client";

import styled from "styled-components";

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2rem;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardsContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: stretch;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 10px;

  & .label {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 10px;
  }

  & .count {
    font-size: 4rem;
    font-weight: 800;
    color: var(--black-green);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ArticlesContainer = styled.section`
  width: 100%;
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 16px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

export const Article = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  & .title {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--black-green);
  }

  & .preview {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 40%; /* Ajuste conforme necessário */
  }
`;

export const AwaitingMessage = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: var(--non-relevant-text);
`;

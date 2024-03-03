"use client";

import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h1`
  margin-bottom: 1.25rem;
`;

export const CardsContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1.25rem;
  margin-bottom: 1.25rem;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: 6px;

  & .label {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text);
  }

  & .count {
    font-size: 4rem;
    font-weight: 800;
    color: var(--black-green);
  }
`;

export const ArticlesContainer = styled.section`
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1.25rem;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
  }
`;

export const Article = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border);
  list-style: none;
  margin-bottom: 1.25rem;

  & .title {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--black-green);
    word-break: break-all;
  }

  & .preview {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 40%;

    @media (max-width: 1024px) {
      display: none;
      width: 100%;
    }
  }
`;

export const AwaitingMessage = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: var(--non-relevant-text);
`;

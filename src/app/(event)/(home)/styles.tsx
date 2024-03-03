'use client'

import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const DateText = styled.span`
  color: var(--non-relevant-text);
  font-size: 0.875rem;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 1.25rem;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  p {
    font-size: 1rem;
    font-weight: 400;

    @media (max-width: 520px) {
      font-size: 1.5rem;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: baseline;

    a {
      width: 100%;
    }
  }
`

"use client";

import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 1.25rem;
  margin-bottom: 0.313rem;
`;

export const StyledInput = styled.input`
  padding: 0.625rem;
  font-size: 1rem;
  border-radius: 3px;
  border: 1px solid var(--border);
  background-color: var(--background);
  color: var(--text);

  &:focus {
    outline: thin solid var(--primary-green);
  }

  &::placeholder {
    color: var(--non-relevant-text);
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  font-size: 1rem;
  background-color: var(--background);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 0.625rem;
  font-family: "Raleway", sans-serif;

  &:focus {
    outline: thin solid var(--primary-green);
  }

  &::placeholder {
    color: var(--non-relevant-text);
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  color: #ff0000;
  font-size: 1rem;
  margin-top: 0.313rem;
`;

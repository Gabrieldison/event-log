"use client";

import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 1.125rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 3px;
  background-color: var(--background);
  color: var(--text);

  &:focus {
    outline: thin solid var(--primary-green);
  }

  &::placeholder {
    color: var(--non-relevant-text);
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 250px;
  color: var(--text);
  background-color: var(--background);
  border-radius: 4px;
  border: 1px solid var(--border);
  padding: 8px;
  font-family: "Raleway", sans-serif;

  &:focus {
    outline: thin solid var(--primary-green);
  }

  &::placeholder {
    color: var(--non-relevant-text);
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  color: #ff0000;
  font-size: 14px;
  margin-top: 5px;
`;

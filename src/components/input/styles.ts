"use client";

import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 1rem;
`;

export const StyledInput = styled.input`
  width: 400px;
  padding: 10px 12px;
  border: 1px solid #c0e2ce;
  border-radius: 3px;
  color: var(--text);
  background-color: var(--background);

  &:focus {
    outline: thin solid #39c67a;
  }

  &::placeholder {
    color: var(--non-relevant-text);
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

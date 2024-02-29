import { ChangeEvent } from "react";
import { InputWrapper, Label, StyledInput, StyledTextarea } from "./styles";

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  name: string;
  textarea?: boolean;
  fileInput?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export function Input({
  label,
  placeholder,
  value,
  textarea,
  fileInput,
  name,
  onChange,
}: InputProps) {
  return (
    <InputWrapper>
      <Label htmlFor={name}>{label}</Label>
      {textarea ? (
        <StyledTextarea
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange as (e: ChangeEvent<HTMLTextAreaElement>) => void}
          name={name}
        />
      ) : fileInput ? (
        <>
          <StyledInput
            type="file"
            id={name}
            onChange={onChange as (e: ChangeEvent<HTMLInputElement>) => void}
            name={name}
          />
        </>
      ) : (
        <StyledInput
          type="text"
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange as (e: ChangeEvent<HTMLInputElement>) => void}
          name={name}
        />
      )}
    </InputWrapper>
  );
}

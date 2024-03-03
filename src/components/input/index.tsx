import { ChangeEvent } from "react";
import {
  ErrorMessage,
  InputWrapper,
  Label,
  StyledInput,
  StyledTextarea,
} from "./styles";

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  name: string;
  textarea?: boolean;
  fileInput?: boolean;
  error?: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export function Input({
  label,
  placeholder,
  value,
  textarea,
  fileInput,
  name,
  error,
  onChange,
}: InputProps) {
  return (
    <InputWrapper>
      <Label htmlFor={name}>{label}</Label>
      {textarea ? (
        <StyledTextarea
          id={name}
          placeholder={placeholder}
          maxLength={300}
          value={value}
          onChange={onChange}
          name={name}
        />
      ) : fileInput ? (
        <StyledInput type="file" id={name} onChange={onChange} name={name} />
      ) : (
        <StyledInput
          maxLength={50}
          type="text"
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
      )}

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
}

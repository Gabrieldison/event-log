import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

export function Button({ children }: { children: ReactNode }) {
  return <ButtonContainer>{children}</ButtonContainer>;
}

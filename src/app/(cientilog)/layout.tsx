import Header from "@/components/header";
import { ReactNode } from "react";
import { MainContainer, Wrapper } from "./layout.styles";

export default function CientiLogLayout({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
      <Header />
      <MainContainer>{children}</MainContainer>
    </Wrapper>
  );
}

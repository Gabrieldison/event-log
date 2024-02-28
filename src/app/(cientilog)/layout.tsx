import Header from "@/components/header";
import { ReactNode } from "react";
import { Wrapper } from "./layout.styles";

export default function CientiLogLayout({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
      <Header />
      <main>{children}</main>
    </Wrapper>
  );
}

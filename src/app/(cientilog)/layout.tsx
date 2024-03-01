import { Header } from "@/components/header";
import { EventProvider } from "@/contexts/event-context";
import { ReactNode } from "react";
import { MainContainer, Wrapper } from "./layout.styles";

export default function CientiLogLayout({ children }: { children: ReactNode }) {
  return (
    <EventProvider>
      <Wrapper>
        <Header />
        <MainContainer>{children}</MainContainer>
      </Wrapper>
    </EventProvider>
  );
}

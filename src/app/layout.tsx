import Header from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import GlobalStyle, { MainContainer } from "./styles/global";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Header />
          <MainContainer>{children}</MainContainer>
          <GlobalStyle />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

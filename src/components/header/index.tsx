"use client";

import logo from "@/../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderContainer, NavContainer } from "./styles";

export function Header() {
  const pathname = usePathname();
  return (
    <HeaderContainer>
      <div>
        <Link href="/">
          <Image src={logo} alt="logo image" />
        </Link>
      </div>
      <NavContainer>
        <Link href="/" className={`${pathname === "/" ? "active" : ""}`}>
          Eventos
        </Link>
        <Link
          href="/subscription"
          className={`${pathname === "/subscription" ? "active" : ""}`}
        >
          Inscrições
        </Link>
        <Link
          href="/submission"
          className={`${pathname === "/submission" ? "active" : ""}`}
        >
          Submissões
        </Link>
        <Link
          href="/dashboard"
          className={`${pathname === "/dashboard" ? "active" : ""}`}
        >
          Painel
        </Link>
      </NavContainer>
    </HeaderContainer>
  );
}

"use client";

import logo from "@/../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  HeaderContainer,
  MobileMenu,
  MobileMenuButton,
  NavContainer,
} from "./styles";

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = (href: string) => {
    router.push(href);
    closeMenu();
  };

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logo} alt="logo image" />
      </Link>

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

      <MobileMenuButton onClick={toggleMenu}>Menu</MobileMenuButton>

      <MobileMenu isOpen={isMenuOpen}>
        <Link
          href="/"
          className={`${pathname === "/" ? "active" : ""}`}
          onClick={() => handleLinkClick("/")}
        >
          Eventos
        </Link>
        <Link
          href="/subscription"
          className={`${pathname === "/subscription" ? "active" : ""}`}
          onClick={() => handleLinkClick("/subscription")}
        >
          Inscrições
        </Link>
        <Link
          href="/submission"
          className={`${pathname === "/submission" ? "active" : ""}`}
          onClick={() => handleLinkClick("/submission")}
        >
          Submissões
        </Link>
        <Link
          href="/dashboard"
          className={`${pathname === "/dashboard" ? "active" : ""}`}
          onClick={() => handleLinkClick("/dashboard")}
        >
          Painel
        </Link>
      </MobileMenu>
    </HeaderContainer>
  );
}

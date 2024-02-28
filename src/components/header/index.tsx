import logo from "@/../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { HeaderContainer, NavContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <Link href="/">
          <Image src={logo} alt="logo image" />
        </Link>
      </div>
      <NavContainer>
        <Link href="/">Eventos</Link>
        <Link href="/registration">Inscrições</Link>
        <Link href="/submission">Submissões</Link>
        <Link href="/dashboard">DashBoard</Link>
      </NavContainer>
    </HeaderContainer>
  );
}

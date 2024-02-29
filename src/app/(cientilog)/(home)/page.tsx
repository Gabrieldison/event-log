import { Button } from "@/components/button";
import Link from "next/link";
import { Actions, Container, DateText, Description, Title } from "./styles";

export default function Home() {
  return (
    <Container>
      <Title>Conferência Científica: Mudanças Climáticas Globais</Title>

      <DateText>Riacho de Santana • 20 a 22 de Setembro de 2025</DateText>

      <Description>
        <p>
          Bem-vindo à Conferência Científica sobre Mudanças Climáticas:
          Inovações e Soluções Globais. Este evento pioneiro reúne
          especialistas, acadêmicos e entusiastas preocupados com o meio
          ambiente para discutir e desenvolver estratégias inovadoras no
          enfrentamento das crescentes ameaças das mudanças climáticas.
        </p>
        <p>
          Durante nossa conferência, os participantes terão a oportunidade única
          de explorar pesquisas de ponta, compartilhar descobertas e colaborar
          em projetos que impulsionem a sustentabilidade global. A agenda
          incluirá palestras inspiradoras, apresentações de artigos científicos
          e painéis de discussão sobre temas como mitigação de carbono,
          adaptação climática e desenvolvimento de tecnologias verdes.
        </p>
        <p>
          Convidamos pesquisadores, acadêmicos, profissionais da indústria e
          defensores do meio ambiente a participarem ativamente, submetendo seus
          artigos científicos inovadores. Além disso, oferecemos a oportunidade
          de se inscreverem para participar presencialmente ou virtualmente,
          garantindo que a troca de conhecimento e experiências seja acessível a
          todos.
        </p>
        <p>
          Este é um chamado à ação! Junte-se a nós enquanto exploramos soluções
          concretas para as mudanças climáticas e trabalhamos juntos em direção
          a um futuro mais sustentável.
        </p>
      </Description>

      <Actions>
        <Link href="/subscription">
          <Button>Inscreva-se!</Button>
        </Link>

        <Link href="/submission">
          <Button>Faça sua submissão</Button>
        </Link>
      </Actions>
    </Container>
  );
}

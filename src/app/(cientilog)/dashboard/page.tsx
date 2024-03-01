"use client";

import { useEventContext } from "@/contexts/event-context";
import { Container } from "./styles";

export default function Dashboard() {
  const { subscribers, articles } = useEventContext();

  return (
    <Container>
      <h1>Painel administrativo</h1>

      <section>
        <h2>Total de inscritos</h2>

        {subscribers.length > 0 ? (
          <p>{subscribers.length}</p>
        ) : (
          <p>Nenhum inscrito no momento.</p>
        )}
      </section>

      <section>
        <h2>Artigos Submetidos</h2>
        {articles.length > 0 ? (
          <ul>
            {articles.map((article, index) => (
              <li key={index}>
                Título: {article.title}, Resumo: {article.resume}, Arquivo:{" "}
                {article.uploadArticle.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum artigo submetido no momento.</p>
        )}
      </section>
    </Container>
  );
}

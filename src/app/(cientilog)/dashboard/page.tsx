"use client";

import { useEventContext } from "@/contexts/event-context";
import {
  Article,
  ArticlesContainer,
  AwaitingMessage,
  Card,
  CardsContainer,
  DashboardContainer,
  Title,
} from "./styles";

export default function Dashboard() {
  const { subscribers, articles } = useEventContext();

  return (
    <main>
      <Title>Painel administrativo</Title>

      <DashboardContainer>
        <CardsContainer>
          <Card>
            <span className="label">Total de inscritos</span>
            {subscribers.length > 0 ? (
              <div className="count">
                <span>+</span>
                <span>{subscribers.length}</span>
              </div>
            ) : (
              <AwaitingMessage>Nenhum inscrito no momento</AwaitingMessage>
            )}
          </Card>
          <Card>
            <span className="label">Total de artigos</span>
            {articles.length > 0 ? (
              <div className="count">
                <span>+</span>
                <span>{articles.length}</span>
              </div>
            ) : (
              <AwaitingMessage>Nenhum artigo submetido</AwaitingMessage>
            )}
          </Card>
        </CardsContainer>

        <ArticlesContainer>
          <h2>Lista de artigos submetidos</h2>

          {articles.length > 0 ? (
            <ul>
              {articles.map((article) => (
                <Article>
                  <span className="title">{article.title}</span>
                  <span className="preview">{article.resume}</span>
                </Article>
              ))}
            </ul>
          ) : (
            <AwaitingMessage>
              Nenhum artigo submetido no momento
            </AwaitingMessage>
          )}
        </ArticlesContainer>
      </DashboardContainer>
    </main>
  );
}

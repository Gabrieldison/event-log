'use client'

import { useEventContext } from '@/contexts/event-context'
import {
  Article,
  ArticlesContainer,
  AwaitingMessage,
  Card,
  CardsContainer,
  Container,
  Title,
} from './styles'

export default function Dashboard() {
  const { subscribers, articles } = useEventContext()

  return (
    <Container>
      <Title>Painel administrativo</Title>

      <CardsContainer>
        <Card>
          <span className="label">Total de inscritos</span>

          {subscribers.length > 0 ? (
            <span className="count">{subscribers.length}</span>
          ) : (
            <AwaitingMessage>Nenhum inscrito no momento</AwaitingMessage>
          )}
        </Card>
        <Card>
          <span className="label">Total de artigos</span>

          {articles.length > 0 ? (
            <span className="count">{articles.length}</span>
          ) : (
            <AwaitingMessage>Nenhum artigo submetido</AwaitingMessage>
          )}
        </Card>
      </CardsContainer>

      <ArticlesContainer>
        <h2>Lista de artigos</h2>

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
          <AwaitingMessage>Nenhum artigo submetido no momento</AwaitingMessage>
        )}
      </ArticlesContainer>
    </Container>
  )
}

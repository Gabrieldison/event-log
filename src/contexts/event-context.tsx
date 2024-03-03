'use client'

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface Subscriber {
  name: string
  email: string
  affiliation: string
}

interface Article {
  title: string
  resume: string
  uploadArticle: string
}

interface EventContextProps {
  subscribers: Subscriber[]
  articles: Article[]
  registerNewSubscriber: (data: Subscriber) => void
  submitArticle: (data: Article) => void
}

const EventContext = createContext<EventContextProps | undefined>(undefined)

export const EventProvider = ({ children }: { children: ReactNode }) => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    const storedSubscribers = localStorage.getItem('subscribers')
    const storedArticles = localStorage.getItem('articles')

    if (storedSubscribers) {
      setSubscribers(JSON.parse(storedSubscribers))
    }

    if (storedArticles) {
      setArticles(JSON.parse(storedArticles))
    }
  }, [])

  const registerNewSubscriber = (data: Subscriber) => {
    const newSubscribers = [...subscribers, data]
    setSubscribers(newSubscribers)
    localStorage.setItem('subscribers', JSON.stringify(newSubscribers))
  }

  const submitArticle = (data: Article) => {
    const newArticles = [...articles, data]
    setArticles(newArticles)
    localStorage.setItem('articles', JSON.stringify(newArticles))
  }

  const contextValue: EventContextProps = {
    subscribers,
    articles,
    registerNewSubscriber,
    submitArticle,
  }

  return (
    <EventContext.Provider value={contextValue}>
      {children}
    </EventContext.Provider>
  )
}

export const useEventContext = () => {
  const context = useContext(EventContext)
  if (!context) {
    throw new Error('useEventContext must be used within a DataEventProvider')
  }
  return context
}

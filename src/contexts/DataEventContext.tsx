"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface DataEventContextProps {
  subscribers: any[];
  articles: any[];
  registerNewSubscriber: (data: any) => void;
  submitArticle: (data: any) => void;
}

const DataEventContext = createContext<DataEventContextProps | undefined>(
  undefined
);

export const DataEventProvider = ({ children }: { children: ReactNode }) => {
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    // Recuperar dados do localStorage ao montar o componente
    const storedSubscribers = localStorage.getItem("subscribers");
    const storedArticles = localStorage.getItem("articles");

    if (storedSubscribers) {
      setSubscribers(JSON.parse(storedSubscribers));
    }

    if (storedArticles) {
      setArticles(JSON.parse(storedArticles));
    }
  }, []);

  const registerNewSubscriber = (data: any) => {
    const newSubscribers = [...subscribers, data];
    setSubscribers(newSubscribers);
    // Atualizar dados no localStorage
    localStorage.setItem("subscribers", JSON.stringify(newSubscribers));
  };

  const submitArticle = (data: any) => {
    const newArticles = [...articles, data];
    setArticles(newArticles);
    // Atualizar dados no localStorage
    localStorage.setItem("articles", JSON.stringify(newArticles));
  };

  const contextValue: DataEventContextProps = {
    subscribers,
    articles,
    registerNewSubscriber,
    submitArticle,
  };

  return (
    <DataEventContext.Provider value={contextValue}>
      {children}
    </DataEventContext.Provider>
  );
};

export const useDataEventContext = () => {
  const context = useContext(DataEventContext);
  if (!context) {
    throw new Error(
      "useDataEventContext must be used within a DataEventProvider"
    );
  }
  return context;
};

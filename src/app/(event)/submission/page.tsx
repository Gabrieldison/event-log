"use client";

import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { Input } from "@/components/input";
import { useEventContext } from "@/contexts/event-context";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { Container, Title } from "./styles";

export default function Submission() {
  const { submitArticle } = useEventContext();

  const [title, setTitle] = useState("");
  const [resume, setResume] = useState("");
  const [uploadArticle, setUploadArticle] = useState("");

  const [erroTitle, setErrorTitle] = useState("");
  const [erroResume, setErrorResume] = useState("");
  const [erroUploadArticle, setErrorUploadArticle] = useState("");

  const resetForm = () => {
    setTitle("");
    setResume("");
    setUploadArticle("");
  };

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
    setErrorTitle("");
  };

  const handleResumeChange = (event: any) => {
    setResume(event.target.value);
    setErrorResume("");
  };

  const handleUploadChange = (event: any) => {
    const file = event.target.files[0];
    setUploadArticle(file);
    setErrorUploadArticle("");
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!title.trim()) {
      setErrorTitle("O titulo é obrigatorio");
      return;
    }

    if (!resume.trim()) {
      setErrorResume("O Resumo é obrigatorio");
      return;
    }

    if (!uploadArticle) {
      setErrorUploadArticle("Faça o upload do artigo.");
      return;
    }

    submitArticle({ title, resume, uploadArticle });

    toast.success("Seu artigo foi enviado com sucesso");

    resetForm();
  };

  return (
    <Container>
      <Toaster position="top-right" richColors theme="light" duration={1000} />

      <Form onSubmit={handleSubmit}>
        <Title>Submissão</Title>

        <Input
          label="Titulo"
          name="title"
          placeholder="Aquecimento global"
          onChange={handleTitleChange}
          value={title}
          error={erroTitle}
        />

        <Input
          label="Resumo"
          textarea
          name="resume"
          onChange={handleResumeChange}
          placeholder="Este artigo se trata sobre o..."
          value={resume}
          error={erroResume}
        />

        <Input
          label="Envio de arquivo"
          fileInput
          name="upload"
          onChange={handleUploadChange}
          value={uploadArticle}
          error={erroUploadArticle}
        />

        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
}

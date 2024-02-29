"use client";

import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { Input } from "@/components/input";
import { MaxContainer, MinContainer } from "./styles";

export default function Submission() {
  return (
    <MaxContainer>
      <MinContainer>
        <h1>Submissão</h1>

        <Form onSubmit={() => {}}>
          <Input label="Titulo" name="" onChange={() => {}} value="" />

          <Input label="Resumo" textarea name="" onChange={() => {}} value="" />

          <Input
            label="Upload do artigo"
            fileInput
            name=""
            onChange={() => {}}
            value=""
          />

          <Button>Enviar</Button>
        </Form>
      </MinContainer>
    </MaxContainer>
  );
}

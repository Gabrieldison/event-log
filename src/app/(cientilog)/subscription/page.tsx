"use client";

import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { Input } from "@/components/input";
import { MaxContainer, MinContainer } from "./styles";

export default function Subscription() {
  return (
    <MaxContainer>
      <MinContainer>
        <h1>Inscrição</h1>

        <Form onSubmit={() => {}}>
          <Input
            label="Nome"
            placeholder="João..."
            name=""
            onChange={() => {}}
            value=""
          />

          <Input
            label="Email"
            placeholder="João..."
            name=""
            onChange={() => {}}
            value=""
          />

          <Input
            label="Afiliação"
            placeholder="João..."
            name=""
            onChange={() => {}}
            value=""
          />

          <Button>Inscrever-se</Button>
        </Form>
      </MinContainer>
    </MaxContainer>
  );
}

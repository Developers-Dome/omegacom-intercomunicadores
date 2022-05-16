import { Title } from "@components/Title";
import React, { useEffect, useState } from "react";
import { LabelInput } from "./LabelInput";
import { Container, Content, FormContainer } from "./styles";

export function Form() {

  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  if (typeof window !== "undefined") {
    useEffect(() => {
      window.addEventListener("resize", () => {
        setWidth(() => window.innerWidth);
      });
    }, [window]);
  }

  return (
    <Container>
      <Content>
        <div>
          {width > 1024 ? (
            <h2>
              Descubra o melhor intercomunicador para seu negócio!
            </h2>
          ) : (
            <Title>Fale conosco</Title>
          )}
        </div>
        <FormContainer>
          <LabelInput
            name="nome"
            type="text"
            label="Nome"
            placeholder="ex: Paulo André"
            mandatory
          />
          <LabelInput
            name="email"
            type="email"
            label="E-mail"
            placeholder="ex: pauloandre@gmail.com"
            mandatory
          />
          <LabelInput
            name="celular"
            type="text"
            label="Celular"
            placeholder="ex: (15) 98181-8181"
            mandatory
          />
          <LabelInput
            name="mensagem"
            type="textarea"
            label="Mensagem"
            placeholder="Sua mensagem aqui..."
            mandatory
          />

          <button type="submit">ENVIAR</button>
        </FormContainer>
      </Content>
    </Container>
  );
}

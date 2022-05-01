import React from "react";

import { Container } from "./styles";

import { Title } from "@components/Title";
import { Accordion } from "./Accordion";

export function AccordionContainer() {
  return (
    <Container>
      <Title>FAQ</Title>
      <Accordion title="Pergunta numero 1" description="Descrição" />
    </Container>
  );
}

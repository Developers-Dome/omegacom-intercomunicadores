import React from "react";

import { Container } from "./styles";

import { Title } from "@components/Title";
import { Accordion } from "./Accordion";

const props = [
  {
    title: "Tem interferencia?",
    description: "Não possui interferencia."
  },
  {
    title: "É resistente a água??",
    description: "Sim, é resistente a chuvas e respingos."
  },
  {
    title: "Possui acionamento por vóz?",
    description: "Sim, possuindo dois modelos, por vóz e por botão."
  },
  {
    title: "É difícil a instalação?",
    description: "Super simples, só é necessário plugar os fios em seus devidos lugares."
  },
  {
    title: "Tem garantia?",
    description: "Garantia de no minimo 12 meses, podendo ser extendida."
  },
]

export function AccordionContainer() {
  return (
    <Container>
      <Title>FAQ</Title>
      {
        props.map(accordion => (
          <Accordion key={accordion.title} title={accordion.title} description={accordion.description} />
        ))
      }
    </Container>
  );
}

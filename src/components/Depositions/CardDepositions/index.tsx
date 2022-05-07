import Image from "next/image";
import React from "react";
import { Container } from "./styles";

interface CardDepositionsProps {
  props: {
    name: string;
    content: string;
    stars: string;
  };
}

export function CardDepositions({ props }: CardDepositionsProps) {
  return (
    <Container>
      <div>
        <Image src={props.stars} alt="Estrelas" layout="fill" />
      </div>

      <p>{props.name}</p>

      <span>{props.content}</span>
    </Container>
  );
}

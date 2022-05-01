import Image from "next/image";
import React from "react";
import { Container } from "./styles";

interface CardDepoimentoProps {
  props: {
    name: string;
    content: string;
    stars: string;
  };
}

export function CardDepoimento({ props }: CardDepoimentoProps) {
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

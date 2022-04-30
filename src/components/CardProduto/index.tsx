
import LinkItem from "@components/Link";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Container } from "./styles";

interface CardProdutoProps {
  props: {
    img: string;
    model: string;
    link: string;
  };
}

export function CardProduto({ props }: CardProdutoProps) {
  return (
    <Container>
      <div>
        <Image src={props.img} alt="Produt" layout="fill" />
      </div>

      <p>{props.model}</p>

      <LinkItem href={props.link} transparent icon={<FaArrowRight />} fullWidth>
        VER MODELO
      </LinkItem>
    </Container>
  );
}

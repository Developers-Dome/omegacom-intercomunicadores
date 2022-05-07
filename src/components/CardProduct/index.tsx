
import LinkItem from "@components/Button";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Container } from "./styles";

interface CardCardProductProps {
  props: {
    img: string;
    model: string;
    link: string;
  };
}

export function CardProduct({ props }: CardCardProductProps) {
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

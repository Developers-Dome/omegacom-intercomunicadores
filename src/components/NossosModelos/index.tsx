// Libs
import React from "react";

// Styles
import { Container } from "./styles";

// Components
import { CardProduto } from "@components/CardProduto";

const props = [
  {
    img: "/components/CardProduto/Image.png",
    model: "Asd",
    link: "#",
  },
  {
    img: "/components/CardProduto/Image.png",
    model: "Asd",
    link: "#",
  },
  {
    img: "/components/CardProduto/Image.png",
    model: "Asd",
    link: "#",
  },
  {
    img: "/components/CardProduto/Image.png",
    model: "Asd",
    link: "#",
  },
  {
    img: "/components/CardProduto/Image.png",
    model: "Asd",
    link: "#",
  },
  {
    img: "/components/CardProduto/Image.png",
    model: "Asd",
    link: "#",
  },
  {
    img: "/components/CardProduto/Image.png",
    model: "Asd",
    link: "#",
  },
  {
    img: "/components/CardProduto/Image.png",
    model: "Asd",
    link: "#",
  },
];

export function NossosModelos() {
  return (
    <Container>
      {Object.values(props).map((card) => (
        <CardProduto key={card.model} props={card} />
      ))}
    </Container>
  );
}

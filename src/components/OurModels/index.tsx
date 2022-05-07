// Libs
import React from "react";

// Styles
import { Container } from "./styles";

// Components
import { CardProduct } from "@components/CardProduct";

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

export function OurModels() {
  return (
    <Container>
      {Object.values(props).map((card) => (
        <CardProduct key={card.model} props={card} />
      ))}
    </Container>
  );
}

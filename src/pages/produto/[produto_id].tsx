import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { Title } from "@components/Title";
import { PresentationProduct } from "@components/PresentationProduct";
import { MainModels } from "@components/MainModels";

import { Container } from "./styles";

interface ProdutoProps {
  [key: string]: string;
}

export default function Produto({ slug }: ProdutoProps) {
  const staticContent = {
    "intercomunicador-1-via": {
      title: "Intercomunicador 1 via",
      images: [
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
        "/components/CardProduto/Image.png",
      ],
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea qui itaque officiis saepe perspiciatis dolore beatae recusandae, tempore pariatur doloribus, possimus, repellendus in minima unde voluptas nihil quam corporis quas!",
      differentials: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
      linkBuy: "#",
      linkManual: "#",
      specification:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea qui itaque officiis saepe perspiciatis dolore beatae recusandae, tempore pariatur doloribus, possimus, repellendus in minima unde voluptas nihil quam corporis quasLorem ipsum, dolor sit amet consectetur adipisicing elit. Ea qui itaque officiis saepe perspiciatis dolore beatae recusandae, tempore pariatur doloribus, possimus, repellendus in minima unde voluptas nihil quam corporis quasLorem ipsum, dolor sit amet consectetur adipisicing elit. Ea qui itaque officiis saepe perspiciatis dolore beatae recusandae, tempore pariatur doloribus, possimus, repellendus in minima unde voluptas nihil quam corporis quas!",
    },
  };

  const displayContent = staticContent[slug];

  return (
    <>
      <Container>
        <Title small>{displayContent.title}</Title>

        <PresentationProduct props={displayContent} />

        <Title small>Modelos relacionados</Title>
        <MainModels />
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["/produto/intercomunicador-1-via"] || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const slug = params.produto_id;

  return {
    props: {
      slug,
    },
  };
};

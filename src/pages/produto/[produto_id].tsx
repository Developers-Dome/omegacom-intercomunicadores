import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { Title } from "@components/Title";
import { PresentationProduct } from "@components/PresentationProduct";
import { MainModels } from "@components/MainModels";

import styled from "styled-components";

import c from "@styles/colors.json";
import f from "@styles/typograph.json";

const Container = styled.main`
  padding: 110px 0 60px 0;

  display: flex;
  flex-direction: column;
  gap: 40px;

  > h1 {
    font-family: Montserrat, sans-serif;
    font-size: ${f.h3.fontSize};
    line-height: ${f.h3.lineHeight};
    color: ${c.neutral500};
    text-align: center;
  }
  > p {
    font-family: Montserrat, sans-serif;
    font-size: ${f.paragraphSmall.fontSize};
    line-height: ${f.paragraphSmall.lineHeight};
    color: ${c.neutral500};
    text-align: justify;
  }

  @media (min-width: 1023px) {
    p {
      font-size: ${f.paragraphLarge.fontSize};
      line-height: ${f.paragraphLarge.lineHeight};
    }
  }
`;

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
    <Container>
      <Title small>{displayContent.title}</Title>

      <PresentationProduct props={displayContent} />

      <Title small>Modelos relacionados</Title>
      <MainModels />
    </Container>
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

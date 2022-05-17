import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

import { Title } from "@components/Title";
import { PresentationProduct } from "@components/PresentationProduct";
import { MainModels } from "@components/MainModels";

import { Container } from "./styles";

interface ProdutoProps {
  [key: string]: string;
}

export default function Produto({slug}: ProdutoProps) {

  const staticContent = {
    aa: {
      title: "asdas",
    },
  };

  const displayContent = staticContent[slug];

  console.log(displayContent);

  return (
    <>
    
    </>
    // <Container>
    //   <h1>Intercomunicador de 1 via - Lotérica</h1>

    //   <PresentationProduct />

    //   <Title small>ESPECIFICAÇÕES</Title>

    //   <p style={{maxWidth: "1440px", padding: "0 5%", margin: "0 auto"}}>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorum
    //     odit officia animi, porro ducimus neque minima unde ex delectus. Ipsum
    //     maxime illo dolore deleniti assumenda obcaecati, necessitatibus modi.
    //     Recusandae?Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //     Aliquid dolorum odit officia animi, porro ducimus neque minima unde ex
    //     delectus. Ipsum maxime illo dolore deleniti assumenda obcaecati,
    //     necessitatibus modi. Recusandae?Lorem ipsum dolor sit amet consectetur
    //     adipisicing elit. Aliquid dolorum odit officia animi, porro ducimus
    //     neque minima unde ex delectus. Ipsum maxime illo dolore deleniti
    //     assumenda obcaecati, necessitatibus modi. Recusandae?Lorem ipsum dolor
    //     sit amet consectetur adipisicing elit. Aliquid dolorum odit officia
    //     animi, porro ducimus neque minima unde ex delectus. Ipsum maxime illo
    //     dolore deleniti assumenda obcaecati, necessitatibus modi.
    //     Recusandae?Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //     Aliquid dolorum odit officia animi, porro ducimus neque minima unde ex
    //     delectus. Ipsum maxime illo dolore deleniti assumenda obcaecati,
    //     necessitatibus modi. Recusandae?
    //   </p>

    //   <Title small>Modelos relacionados</Title>
    //   <MainModels />
    // </Container>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: ["/produto/aa", "/produto/bb"] || [],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const slug = params.produto_id;

  return {
    props: {
      slug,
    },
  };
};

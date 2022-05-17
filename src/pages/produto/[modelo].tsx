import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

import { Title } from "@components/Title";
import { PresentationProduct } from "@components/PresentationProduct"

interface ProdutoProps {
  [key: string]: {
    title: string;
  };
}

export default function Produto({ slug }: ProdutoProps) {
  const staticContent = {
    aa: {
      title: "asdas",
    },
  };

  const visibleData = staticContent.aa;

  return (
    <>
      <Title>Intercomunicador de 1 via - Lotérica</Title>

      <PresentationProduct />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["/produto/aa", "/produto/bb"] || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params;

  return {
    props: {
      slug,
    },
  };
};

// Libs
import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

// Styles

// Images

// Components
import { NossosModelos } from "@components/NossosModelos";
import { Title } from "@components/Title";



const Produtos: NextPage = () => {
  return (
    <>
      <Head>
        <title>Título da página</title>
      </Head>
      <Title>Nossos modelos</Title>

    <NossosModelos />
    </>
  );
};

export default Produtos;

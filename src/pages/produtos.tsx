// Libs
import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

// Styles
import styled from "styled-components";

const Container = styled.main`
  padding-top: 20px;

  @media (min-width: 1024px) {
    padding-top: 120px;
  }
`;

// Components
import { NossosModelos } from "@components/NossosModelos";
import { Title } from "@components/Title";

const Produtos: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>OmegaCom | Produtos</title>
      </Head>
      <Title>Nossos modelos</Title>
      <NossosModelos />
    </Container>
  );
};

export default Produtos;

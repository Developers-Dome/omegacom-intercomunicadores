// Libs
import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

// Imgs
import Fav from "../../public/favicon.png";

// Styles
import styled from "styled-components";

const Container = styled.main`
  padding-top: 20px;

  @media (min-width: 1024px) {
    padding-top: 120px;
  }
`;

// Components
import { OurModels } from "@components/OurModels";
import { Title } from "@components/Title";

const Produtos: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>OmegaCom | Produtos</title>
        <link rel="shortcut icon" href={Fav.src} type="image/x-icon" />
      </Head>
      <Title>Nossos modelos</Title>
      <OurModels />
    </Container>
  );
};

export default Produtos;

// Libs
import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { Formulario } from "@components/Formulario";

// Styles
import styled from "styled-components";

const Container = styled.main`
  @media (min-width: 1024px) {
    padding-top: 70px;
  }
`;

// Images

// Components

const Contato: NextPage = () => {
  return (
    <Container>
    <Head>
      <title>OmegaCom | Contato</title>
    </Head>

    <Formulario />
    </Container>
  );
};

export default Contato;

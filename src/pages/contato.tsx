// Libs
import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { Form } from "@components/Form";

// Imgs
import Fav from '../../public/favicon.png'

// Styles
import styled from "styled-components";

const Container = styled.main`
  @media (min-width: 1024px) {
    padding-top: 70px;
  }
`;

const Contato: NextPage = () => {
  return (
    <Container>
    <Head>
      <title>OmegaCom | Contato</title>
      <link rel="shortcut icon" href={Fav.src} type="image/x-icon" />
    </Head>

    <Form />
    </Container>
  );
};

export default Contato;

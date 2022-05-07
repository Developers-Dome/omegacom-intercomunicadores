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
import { AccordionContainer } from "@components/AccordionContainer";

const FAQ: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>OmegaCom | FAQ</title>
        <link rel="shortcut icon" href={Fav.src} type="image/x-icon" />
      </Head>
      <AccordionContainer />
    </Container>
  );
};

export default FAQ;

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

// Images

// Components
import { AccordionContainer } from "@components/AccordionContainer";

const FAQ: NextPage = () => {
  return (
    <Container>
    <Head>
      <title>OmegaCom | FAQ</title>
    </Head>
    <AccordionContainer />
    </Container>
  );
};

export default FAQ;

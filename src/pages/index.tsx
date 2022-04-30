// Libs
import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

// Images

// Components
import { Hero } from "../components/Hero";
import { Differentials } from "@components/Differentials";
import { PrincipaisProdutos } from "@components/PrincipaisProdutos";
import { Depoimentos } from "@components/Depoimentos";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>OmegaCom Intercomunicadores</title>
      </Head>
      <Hero />
      <Differentials />
      <PrincipaisProdutos />
      <Depoimentos />
    </>
  );
};

export default Home;

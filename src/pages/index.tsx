// Libs
import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

// Imgs
import Fav from "../../public/favicon.png";

// Components
import { Hero } from "../components/Hero";
import { Differentials } from "@components/Differentials";
import { MainModels } from "@components/MainModels";
import { Depositions } from "@components/Depositions";
import { Title } from "@components/Title";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>OmegaCom Intercomunicadores</title>
        <link rel="shortcut icon" href={Fav.src} type="image/x-icon" />
      </Head>
      <Hero />
      <Differentials />
      <Title>Principais modelos</Title>
      <MainModels />
      <Depositions />
    </>
  );
};

export default Home;

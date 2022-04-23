// Libs
import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

// Styles

// Images

// Components
import { Hero } from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Título da página</title>
      </Head>
      <Hero />
    </>
  );
};

export default Home;

// Libs
import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

// Styles

// Images

// Components
import Differentials from "@components/Differentials";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Título da página</title>
      </Head>
      <Differentials />
    </>
  );
};

export default Home;

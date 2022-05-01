import React from "react";
import type { AppProps } from "next/app";
import GlobalStyled from "../styles/GlobalStyled.js";
import Navbar from "@components/Navbar/";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <GlobalStyled />
    </>
  );
}

export default MyApp;

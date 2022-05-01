import React from "react";
import type { AppProps } from "next/app";
import GlobalStyled from "../styles/GlobalStyled.js";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyled />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

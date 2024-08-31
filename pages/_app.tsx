import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import Header1 from "../components/header1";
import Footer1 from "../components/footer1";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Williams Blog</title>
        <link rel="icon" href="williams20logo3transparent20bgroundpng@2x.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Header1/>
      <Component {...pageProps} />
      <Footer1/>
    </Fragment>
  );
}

export default MyApp;

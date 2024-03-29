import "../styles/tailwind.css";
import "../styles/slick.css";
import Head from "next/head";
import LinkedInAds from "../components/AdScripts/LinkedInAds";
import { useState, useEffect } from 'react';



function MyApp({ Component, pageProps }) {

  return (
    <>

      <LinkedInAds />

      <Head>


        <link
          key="carousel-styles"
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/react-responsive-carousel/lib/styles/carousel.min.css"
        />

      </Head>
      <Component {...pageProps} />

    </>
  );
}

export default MyApp;

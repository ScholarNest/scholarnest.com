import "../styles/tailwind.css";
import "../styles/slick.css";
import Head from "next/head";
import CookieConsentBanner from "../components/CookieConsentBanner";
import FacebookPixel from "../components/AdScripts/FacebookPixel";
import LinkedInAds from "../components/AdScripts/LinkedInAds";
import GoogleTagManager from "../components/AdScripts/GoogleTagManager";
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  return (
    <>
    <FacebookPixel />
    <LinkedInAds />
    <GoogleTagManager />
      <CookieConsentBanner />
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

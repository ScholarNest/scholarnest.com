import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import LazyHero from "../components/LazyHero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Services from "../components/Services";
import CookieConsentBanner from "../components/CookieConsentBanner";
import TagManager from 'react-gtm-module'
import {useEffect} from 'react'
export default function Home() {
  const tagManagerArgs = {
    gtmId: 'GTM-PVPKPSDT'
  }
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []); 
  return (
    <>
      <SeoHead title='Build your Business and Career with us | Scholarnest India' description='Elevate your tech capabilities with our expert services. From staff augmentation to cloud computing and technology consulting, we specialize in Spark & Databricks training and data engineering. Unlock the power of data-driven innovation.' />
      <CookieConsentBanner />

      <Layout>
        <LazyHero />
        <Services/>
        <Feature />
        {/* <CookieConsentBanner /> */}
        {/* <LinkedInAds /> */}
      </Layout>

    </>
  );
}

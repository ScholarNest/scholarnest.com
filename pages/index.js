import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import LazyHero from "../components/LazyHero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Services from "../components/Services";
import LinkedInAds from "../components/AdScripts/LinkedInAds";
import CookieConsentBanner from "../components/CookieConsentBanner";
import GoogleTagManagerAll from "../components/AdScripts/GoogleTagManagerAll";

export default function Home() {
  return (
    <>
      <SeoHead title='Build your Business and Career with us | Scholarnest India' description='Elevate your tech capabilities with our expert services. From staff augmentation to cloud computing and technology consulting, we specialize in Spark & Databricks training and data engineering. Unlock the power of data-driven innovation.' />
      <CookieConsentBanner />
      <GoogleTagManagerAll />
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

import Feature from "../components/Feature";
import Pricing from "../components/Pricing";

import LazyHero from "../components/LazyHero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Services from "../components/Services";
export default function Home() {
  return (
    <>
      <SeoHead title='Scholar Nest' />
      <Layout>
        <LazyHero />
        <Services/>
        <Feature />
      </Layout>
    </>
  );
}

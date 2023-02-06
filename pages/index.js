import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Services from "../components/Services";
export default function Home() {
  return (
    <>
      <SeoHead title='Scholar Nest' />
      <Layout>
        <Hero />
        <Services/>
        <Feature />
      </Layout>
    </>
  );
}

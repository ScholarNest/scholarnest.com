import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import AcademySolution from "../components/Solutions/AcademySolution";
import SeoHead from "../components/SeoHead";
import CookieConsentBanner from "../components/CookieConsentBanner";
import GoogleTagManagerAll from "../components/AdScripts/GoogleTagManagerAll";

function Academy() {
 
  return (
    <>
        <SeoHead title="Boost Your Data Engineering Skills with Pyspark & Databricks" description="Elevate your expertise with PySpark Certification. Dive into data engineering using Databricks Cloud and harness the power of Apache Kafka. Our comprehensive training empowers you to excel in modern data ecosystems."/>
        <CookieConsentBanner />
        <GoogleTagManagerAll />

      <Header />
      <div>
      <AcademySolution />
      </div>
      <Footer />
    </>
  );
}
export default  Academy;
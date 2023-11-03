import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import AcademySolution from "../components/Solutions/AcademySolution";
import SeoHead from "../components/SeoHead";
import CookieConsentBanner from "../components/CookieConsentBanner";
import TagManager from 'react-gtm-module'
import {useEffect} from 'react'
function Academy() {
  const tagManagerArgs = {
    gtmId: 'GTM-PVPKPSDT'
  }
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []); 
  return (
    <>
        <SeoHead title="Boost Your Data Engineering Skills with Pyspark & Databricks" description="Elevate your expertise with PySpark Certification. Dive into data engineering using Databricks Cloud and harness the power of Apache Kafka. Our comprehensive training empowers you to excel in modern data ecosystems."/>
        <CookieConsentBanner />

      <Header />
      <div>
      <AcademySolution />
      </div>
      <Footer />
    </>
  );
}
export default  Academy;
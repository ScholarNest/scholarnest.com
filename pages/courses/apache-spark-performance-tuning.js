import React from 'react';
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import PerformanceTunningComponent from '../../components/courses/PerformanceTunningComponent'
import SeoHead from "../../components/SeoHead";
import CookieConsentBanner from "../../components/CookieConsentBanner";
const PerformanceTunning = () => {
  return (
    <>
        <SeoHead title="Master Spark Performance Tuning on Databricks Cloud" description="Unlock advanced Spark performance tuning techniques on Databricks Cloud with ScholarNest's self-paced courses. Optimize your Spark experience now - ScholaNest"/>
     <CookieConsentBanner />
      <Header />
       <PerformanceTunningComponent />
   
      <Footer />
    </>
  )
}

export default PerformanceTunning;
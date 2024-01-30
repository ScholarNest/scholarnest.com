import React from 'react'

import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import MasteringDatabricksCloud from "../../components/courses/MasteringDatabricksCloud"
import SeoHead from "../../components/SeoHead";
import CookieConsentBanner from "../../components/CookieConsentBanner";
function MasteringDatabricks() {
const title='Mastering Databricks Cloud: Propel Your Data Engineering Skills'
const description='Unlock the full potential of Databricks Cloud with our comprehensive course. Dive into data engineering, PySpark, and Azure Databricks learning. Enroll now for a transformative learning experience.'
  return (

    <>
      <SeoHead title={title} description={description}/>
     <CookieConsentBanner />
      <Header />
       <MasteringDatabricksCloud />
   
      <Footer />
    </>
  );
}
export default MasteringDatabricks;
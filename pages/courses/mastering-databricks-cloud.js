import React from 'react'

import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import MasteringDatabricksCloud from "../../components/courses/MasteringDatabricksCloud"
import SeoHead from "../../components/SeoHead";
import CookieConsentBanner from "../../components/CookieConsentBanner";
function MasteringDatabricks() {
  return (
    <>
      <SeoHead />
     <CookieConsentBanner />
      <Header />
       <MasteringDatabricksCloud />
   
      <Footer />
    </>
  );
}
export default MasteringDatabricks;
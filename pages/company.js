import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import CompanyTemplate from "../components/CompanyTemplate";
import SeoHead from "../components/SeoHead";
import CookieConsentBanner from "../components/CookieConsentBanner";
import TagManager from 'react-gtm-module'
import {useEffect} from 'react'
function company() {
  const tagManagerArgs = {
    gtmId: 'GTM-PVPKPSDT'
  }
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []); 
  return (
    <>
     <SeoHead />
     <CookieConsentBanner />

      <Header />
      <div >
      <CompanyTemplate /> 
      </div>
      <Footer />
    </>
  );
}
export default company;

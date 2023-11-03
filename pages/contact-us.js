import ContactUs_ from "../components/ContactUs";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import SeoHead from "../components/SeoHead";
import CookieConsentBanner from "../components/CookieConsentBanner";
import TagManager from 'react-gtm-module'
import {useEffect} from 'react'
function ContactUs() {
  const tagManagerArgs = {
    gtmId: 'GTM-PVPKPSDT'
  }
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []); 
  return(
  <>
  <SeoHead />
  <CookieConsentBanner />

  <Header/>

  <ContactUs_/>

  <Footer/>
  </>
  )
}

export default ContactUs;

import ContactUs_ from "../components/ContactUs";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import SeoHead from "../components/SeoHead";
import CookieConsentBanner from "../components/CookieConsentBanner";
import GoogleTagManagerAll from "../components/AdScripts/GoogleTagManagerAll";

function ContactUs() {
  return(
  <>
  <SeoHead />
  <CookieConsentBanner />
  <GoogleTagManagerAll />

  <Header/>

  <ContactUs_/>

  <Footer/>
  </>
  )
}

export default ContactUs;

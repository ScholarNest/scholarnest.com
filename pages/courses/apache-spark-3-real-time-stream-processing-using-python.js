import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import ApacheSpark3Container from "../../components/courses/ApacheSpark3Container"
import SeoHead from "../../components/SeoHead";
import CookieConsentBanner from "../../components/CookieConsentBanner";
function ApacheSpark3() {
  return (
    <>
      <SeoHead />
     <CookieConsentBanner />
      <Header />
       <ApacheSpark3Container />
   
      <Footer />
    </>
  );
}
export default ApacheSpark3;
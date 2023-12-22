import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import DatabricksCertifiedAssociateDev from "../../components/courses/DatabricksCertifiedAssociateDev"
import SeoHead from "../../components/SeoHead";
import CookieConsentBanner from "../../components/CookieConsentBanner";
function DatabricksCertifiedAssociate() {
  return (
    <>
      <SeoHead />
     <CookieConsentBanner />
      <Header />
       <DatabricksCertifiedAssociateDev />
   
      <Footer />
    </>
  );
}
export default DatabricksCertifiedAssociate;
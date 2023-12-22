import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import DatabricksDataEngineer from "../../components/courses/DatabricksDataEngineer"
import SeoHead from "../../components/SeoHead";
import CookieConsentBanner from "../../components/CookieConsentBanner";
function DatabricksData() {
  return (
    <>
      <SeoHead />
     <CookieConsentBanner />
      <Header />
       <DatabricksDataEngineer />
   
      <Footer />
    </>
  );
}
export default DatabricksData;
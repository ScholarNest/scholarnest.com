import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import CompanyTemplate from "../components/CompanyTemplate";
import SeoHead from "../components/SeoHead";
import CookieConsentBanner from "../components/CookieConsentBanner";

function company() {
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

import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import DatabricksDataEngineer from "../../components/courses/DatabricksDataEngineer"
import SeoHead from "../../components/SeoHead";
import CookieConsentBanner from "../../components/CookieConsentBanner";
function DatabricksData() {
  const title='Databricks Data Engineer Certification Practice Test';
  const description='Prepare for success in the Databricks Data Engineer Associate Certification exam with our practice test. Boost your confidence and knowledge. Start now!  ';
  return (
    <>
    <SeoHead title={title} description={description}/>
     <CookieConsentBanner />
      <Header />
       <DatabricksDataEngineer />
   
      <Footer />
    </>
  );
}
export default DatabricksData;
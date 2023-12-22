import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import LearningAWSContainer from "../../components/courses/LearningAWSContainer"
import SeoHead from "../../components/SeoHead";
import CookieConsentBanner from "../../components/CookieConsentBanner";
function LearningAWS() {
  return (
    <>
      <SeoHead />
     <CookieConsentBanner />
      <Header />
       <LearningAWSContainer />
   
      <Footer />
    </>
  );
}
export default LearningAWS;
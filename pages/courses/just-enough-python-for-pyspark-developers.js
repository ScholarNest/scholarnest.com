import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import JustPythonForPyspark from "../../components/courses/JustPythonForPyspark"
import SeoHead from "../../components/SeoHead";
import CookieConsentBanner from "../../components/CookieConsentBanner";
function PythonForPyspark() {
  return (
    <>
      <SeoHead />
     <CookieConsentBanner />
      <Header />
       <JustPythonForPyspark />
   
      <Footer />
    </>
  );
}
export default PythonForPyspark;
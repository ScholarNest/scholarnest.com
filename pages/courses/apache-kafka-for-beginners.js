import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import ApacheKafkaForBegginer from "../../components/courses/ApacheKafkaForBegginer"
import SeoHead from "../../components/SeoHead";
import CookieConsentBanner from "../../components/CookieConsentBanner";
function ApacheKafka() {
  return (
    <>
      <SeoHead />
     <CookieConsentBanner />
      <Header />
       <ApacheKafkaForBegginer />
   
      <Footer />
    </>
  );
}
export default ApacheKafka;
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import ApacheSpark3Container from "../../components/courses/ApacheSpark3Container"
import SeoHead from "../../components/SeoHead";
import CookieConsentBanner from "../../components/CookieConsentBanner";

function ApacheSpark3() {
  const title='Apache Spark 3 Real-Time Stream Processing - ScholarNest';
  const description='Master real-time stream processing with Apache Spark 3 using Python. Learn essential skills for efficient data streaming. Enroll in our comprehensive course now';
  return (
    <>
  <SeoHead title={title} description={description}/>
     <CookieConsentBanner />
      <Header />
       <ApacheSpark3Container />
   
      <Footer />
    </>
  );
}
export default ApacheSpark3;
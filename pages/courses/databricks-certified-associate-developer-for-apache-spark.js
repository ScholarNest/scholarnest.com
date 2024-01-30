import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import DatabricksCertifiedAssociateDev from "../../components/courses/DatabricksCertifiedAssociateDev"
import SeoHead from "../../components/SeoHead";
import CookieConsentBanner from "../../components/CookieConsentBanner";
function DatabricksCertifiedAssociate() {
  const title='Databricks Certified Associate Developer | Apache Spark 3.0';
  const description='Gain expertise in Apache Spark with our Databricks Certified Associate Developer course. Elevate your skills for success. Enroll now at ScholarNest Technologies';
  return (
    <>
      <SeoHead title={title} description={description}/>
     <CookieConsentBanner />
      <Header />
       <DatabricksCertifiedAssociateDev />
   
      <Footer />
    </>
  );
}
export default DatabricksCertifiedAssociate;
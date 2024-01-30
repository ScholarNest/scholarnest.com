import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import ApacheKafkaForBegginer from "../../components/courses/ApacheKafkaForBegginer"
import SeoHead from "../../components/SeoHead";
import CookieConsentBanner from "../../components/CookieConsentBanner";
function ApacheKafka() {
  const title='Apache Kafka for Beginners Course - ScholarNest India';
  const description='Learn Apache Kafka from scratch with our beginner-friendly course. Gain practical skills in real-world scenarios. Enroll now for a comprehensive learning experience.';
  return (
    <>
      
   <SeoHead title={title} description={description}/>
     <CookieConsentBanner />
      <Header />
       <ApacheKafkaForBegginer />
   
      <Footer />
    </>
  );
}
export default ApacheKafka;
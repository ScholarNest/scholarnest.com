import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import LearningAWSContainer from "../../components/courses/LearningAWSContainer"
import SeoHead from "../../components/SeoHead";
import CookieConsentBanner from "../../components/CookieConsentBanner";
function LearningAWS() {
  const title='Learning AWS Cloud Fundamentals - ScholarNest India';
  const description='Master the fundamentals of AWS Cloud with our comprehensive course. Gain practical skills and knowledge to excel in cloud computing. Enroll now for success!';
  return (
    <>
   <SeoHead title={title} description={description}/>
     <CookieConsentBanner />
      <Header />
       <LearningAWSContainer />
   
      <Footer />
    </>
  );
}
export default LearningAWS;
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import JustPythonForPyspark from "../../components/courses/JustPythonForPyspark"
import SeoHead from "../../components/SeoHead";
import CookieConsentBanner from "../../components/CookieConsentBanner";
function PythonForPyspark() {
  const title='Just Enough Python for PySpark - ScholarNest India';
  const description="Enhance your PySpark skills with our 'Just Enough Python for PySpark' course. Learn the essential Python concepts tailored for PySpark developers. Enroll now!";
  return (
    <>
     <SeoHead title={title} description={description}/>
      <CookieConsentBanner />
      <Header />
       <JustPythonForPyspark />
   
      <Footer />
    </>
  );
}
export default PythonForPyspark;
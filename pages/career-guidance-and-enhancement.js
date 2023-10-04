import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Careers from "../components/Careers";
import SeoHead from "../components/SeoHead";
import CookieConsentBanner from "../components/CookieConsentBanner";

function Career() {
  return (
    <>
    <SeoHead title="Career Guidance and Enhancement for Working Professionals" description="Unlock your potential with expert career guidance, fostering career growth and enhancement. Navigate a path to success with personalized strategies and opportunities for professional advancement."  />
    <CookieConsentBanner />
      <Header />
      <div >
      <Careers/>
      </div>
      <Footer />
    </>
  );
}
export default Career;

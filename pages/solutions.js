import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Solutions from "../components/Solutions";
import SeoHead from "../components/SeoHead";
import CookieConsentBanner from "../components/CookieConsentBanner";

function solutions() {
  return (
    <>
      <SeoHead title="Unlock Success with Expert Solution | Scholarnest India" description="Discover the power of staff augmentation, managed services, and technology consulting at Scholarnest. Elevate your business with tailored solutions, expert guidance, and seamless operations for sustained growth and success." />
      <CookieConsentBanner />
      <Header />
      <Solutions />

      <Footer />
    </>
  );
}

export default solutions;

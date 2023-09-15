import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import PrivacyTemplate from "../components/PrivacyTemplate";
import SeoHead from "../components/SeoHead";

function privacy() {
  

  return (
    <>
    <SeoHead  title='Privacy Policy: Your Data Security Matters | ScholarNest' description="Review ScholarNest's privacy policy to learn how we protect your personal information and ensure data security. Trust in our commitment to safeguarding your privacy." />
      <Header />
 <PrivacyTemplate />
      <Footer />
    </>
  );
}

export default privacy;

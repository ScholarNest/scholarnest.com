import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import StaffAugmentations from "../components/Solutions/StaffAugmentations";
import SeoHead from "../components/SeoHead";
import CookieConsentBanner from "../components/CookieConsentBanner";
import GoogleTagManagerAll from "../components/AdScripts/GoogleTagManagerAll";

function StaffAugmentation() {
  
  return (
    <>
      <SeoHead title="IT Staff Augmentation Services and Staffing Solutions" description="Optimize workforce flexibility and drive growth through our tailored staff augmentation services. Enhance your team's capabilities with strategic staff augmentation solutions." />
      <CookieConsentBanner />
      <GoogleTagManagerAll />

      <Header />
      <div >
      <StaffAugmentations />
      </div>
      <Footer />
    </>
  );
}
export default  StaffAugmentation;
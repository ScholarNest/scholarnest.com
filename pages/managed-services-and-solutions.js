import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ManagedServices from "../components/Solutions/ManagedServices";
import SeoHead from "../components/SeoHead";
import CookieConsentBanner from "../components/CookieConsentBanner";
import GoogleTagManagerAll from "../components/AdScripts/GoogleTagManagerAll";

function ManageServices() {


  return (
    <>
    <SeoHead title="Comprehensive Managed Services for your Business" description="Unlock the potential of your data-driven projects with our Managed Services in data science, cloud computing, and data engineering. Our expertise ensures seamless operations and optimized performance for your critical data initiatives." />
    <CookieConsentBanner />
    <GoogleTagManagerAll />

      <Header />
      <div>
      <ManagedServices  />
      </div>
      <Footer />
    </>
  );
}
export default  ManageServices;
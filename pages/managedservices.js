import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ManagedServices from "../components/Solutions/ManagedServices";
import SeoHead from "../components/SeoHead";

function ManageServices() {


  return (
    <>
    <SeoHead title="Comprehensive Managed Services for your Business" description="Unlock the potential of your data-driven projects with our Managed Services in data science, cloud computing, and data engineering. Our expertise ensures seamless operations and optimized performance for your critical data initiatives." />
      <Header />
      <div>
      <ManagedServices  />
      </div>
      <Footer />
    </>
  );
}
export default  ManageServices;
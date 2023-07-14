import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ManagedServices from "../components/ManagedServices";

function ManageServices() {


  return (
    <>
      <Header />
      <div style={{marginTop:"91px"}}>
      <ManagedServices  />
      </div>
      <Footer />
    </>
  );
}
export default  ManageServices;
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ManageService from "../components/ManageService";

function ManageServices() {


  return (
    <>
      <Header />
      <div style={{marginTop:"91px"}}>
      <ManageService  />
      </div>
      <Footer />
    </>
  );
}
export default  ManageServices;
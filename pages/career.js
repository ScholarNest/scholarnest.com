import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Careers from "../components/Careers";

function Career() {
  return (
    <>
      <Header />
      <div style={{paddingTop:'5%',paddingBottom:'25%'}}>
      <Careers/>
      </div>
      <Footer />
    </>
  );
}
export default Career;

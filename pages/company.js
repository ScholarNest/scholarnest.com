import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import CompanyTemplate from "../components/CompanyTemplate";
import SeoHead from "../components/SeoHead";

function company() {
  return (
    <>
     <SeoHead />
      <Header />
      <div >
      <CompanyTemplate /> 
      </div>
      <Footer />
    </>
  );
}
export default company;

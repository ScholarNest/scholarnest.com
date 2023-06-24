import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import CompanyTemplate from "../components/CompanyTemplate";

function company() {
  return (
    <>
      <Header />
      <div  style={{marginTop:"90px"}}>
      <CompanyTemplate /> 
      </div>
      <Footer />
    </>
  );
}
export default company;

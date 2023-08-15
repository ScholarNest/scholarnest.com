import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import AcademySolution from "../components/Solutions/AcademySolution";

function Academy() {
 
  return (
    <>
      <Header />
      <div style={{marginTop:"91px"}}>
      <AcademySolution />
      </div>
      <Footer />
    </>
  );
}
export default  Academy;
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ExternalJob from "../components/Solutions/externalJob";

function ExternalJobs() {
  const props={

    
  }
  return (
    <>
      <Header />
      <div style={{marginTop:"91px"}}>
      <ExternalJob props={props} />
      </div>
      <Footer />
    </>
  );
}
export default   ExternalJobs;
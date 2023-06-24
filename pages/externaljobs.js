import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ExternalJob from "../components/externalJob";

function ExternalJobs() {
  const props={
    name:"External Jobs",
    img:"/assets/dataengineering.jpg",
    details:"Job openings are a measure of demand that takes into account actual growth and estimated replacement needs. Both job postings and job openings are helpful for assessing the demand for an occupation but it's important to understand the strengths and weaknesses of each."
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
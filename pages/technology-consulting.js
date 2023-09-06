import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import TechnologyConsultings from "../components/Solutions/TechnologyConsultings";
import SeoHead from "../components/SeoHead";

function TechnologyConsulting() {
  
  return (
    <>
          <SeoHead title='Technology Consulting Solutions & Services | Scholarnest' description="Unlock growth with Scholarnest's cutting-edge Technology Consulting Solutions & Services. Empowering businesses with innovative strategies and expert guidance. Explore our technology strategy consulting & tech solutions today." />
      <Header />
      <div >
      <TechnologyConsultings />
      </div>
      <Footer />
    </>
  );
}
export default  TechnologyConsulting;
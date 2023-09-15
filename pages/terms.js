import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import TermTemplate from "../components/TermTemplate";
import SeoHead from "../components/SeoHead";

function terms() {
  

  return (
    <>
    <SeoHead title='Terms & Conditions: Policies and Guidelines | ScholarNest' description="Read our comprehensive terms and conditions to understand the policies and guidelines governing your use of ScholarNest's services. Stay informed about our commitment to quality and fairness." />
      <Header />
 <TermTemplate />
      <Footer />
    </>
  );
}

export default terms;

import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import StaffAugmentations from "../components/StaffAugmentations";

function StaffAugmentation() {
  
  return (
    <>
      <Header />
      <div style={{marginTop:"112px"}}>
      <StaffAugmentations />
      </div>
      <Footer />
    </>
  );
}
export default  StaffAugmentation;
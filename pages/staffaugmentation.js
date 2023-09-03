import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import StaffAugmentations from "../components/Solutions/StaffAugmentations";
import SeoHead from "../components/SeoHead";

function StaffAugmentation() {
  
  return (
    <>
      <SeoHead title="IT Staff Augmentation Services and Staffing Solutions" description="Optimize workforce flexibility and drive growth through our tailored staff augmentation services. Enhance your team's capabilities with strategic staff augmentation solutions." />
      <Header />
      <div >
      <StaffAugmentations />
      </div>
      <Footer />
    </>
  );
}
export default  StaffAugmentation;
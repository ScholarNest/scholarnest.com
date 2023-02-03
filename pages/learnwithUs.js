import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Learnwithus from "../components/Learcwithus";

function learnWithUs() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "5%", paddingBottom: "25%" }}>
        <Learnwithus />
      </div>
      <Footer />
    </>
  );
}

export default learnWithUs;

import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Solutions from "../components/Solutions";

function solutions() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "5%", paddingBottom: "25%" }}>
        <Solutions />
      </div>
      <Footer />
    </>
  );
}

export default solutions;

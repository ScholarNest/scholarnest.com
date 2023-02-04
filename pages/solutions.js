import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Solutions from "../components/Solutions";

function solutions() {
  return (
    <>
      <Header />
      <div
        style={{
          paddingTop: "10%",
          paddingBottom: "25%",
          alignSelf: "center",
        }}
      >
        <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
          <h1>Solutions</h1>
        </div>
        <Solutions />
      </div>
      <Footer />
    </>
  );
}

export default solutions;

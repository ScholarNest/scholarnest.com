import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import CareerTemplate from "../components/Layout/CareerTemplate";
import { useRouter } from 'next/router';
import React, { useEffect } from "react";

import SeoHead from "../components/SeoHead";

function ApplyNow() {
 
  // console.log("Data is",props.router.query.message)/
  return (
    <>
     <SeoHead />
       <Header />
      <div >
      <CareerTemplate />

      </div>
      <Footer />
      {/* <Header />
      <div style={{marginTop:"112px"}}>
      </div>
      <Footer /> */}
    </>
  );
}
export default ApplyNow;

import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import InternTemplate from "../components/Layout/InternTemplate";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";
import SeoHead from "../components/SeoHead";


function ApplyInternship(props) {
  

  // console.log("Data is",props.router.query.message)/
  return (
    <>

<SeoHead />
       <Header />
      <div >
      < InternTemplate />

      </div>
      <Footer />
      {/* <Header />
      <div style={{marginTop:"112px"}}>
      </div>
      <Footer /> */}
    </>
  );
}
export default ApplyInternship;

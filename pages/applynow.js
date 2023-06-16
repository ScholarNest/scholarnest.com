import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import CareerTemplate from "../components/Layout/CareerTemplate";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";


function ApplyNow(props) {
  const router = useRouter();

  useEffect(() => {
    console.log("data is",router.query);
}, [router.query]);


  // console.log("Data is",props.router.query.message)/
  return (
    <>
       <Header />
      <div style={{marginTop:"112px"}}>
      <CareerTemplate props={router.query} />

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
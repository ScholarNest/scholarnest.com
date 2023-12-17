import React from 'react'

import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import MasteringDatabricksCloud from "../../components/courses/MasteringDatabricksCloud"

function masteringDatabricks() {
  return (
    <>
      <Header />
       <MasteringDatabricksCloud />
   
      <Footer />
    </>
  );
}
export default masteringDatabricks;
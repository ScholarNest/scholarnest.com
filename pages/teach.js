import React from 'react'
import Header from "../components/Layout/Header";
import Teach from "../components/Teach"
import Footer from "../components/Layout/Footer";
import SeoHead from "../components/SeoHead";
import CookieConsentBanner from "../components/CookieConsentBanner";

 const teach = () => {
  return (
    <>
    <SeoHead title='Become an Instructor with ScholarNest and Foster Growth' description='Join ScholarNest as an instructor and play a pivotal role in nurturing growth. Share your knowledge, empower students, and help them excel in their learning journey.' />
    <CookieConsentBanner />
    <Header />
    <Teach />
    <Footer />
    </>
    
  )
}
export default teach;
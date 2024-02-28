import React from 'react'
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import MoreAcademyInfo from "../../components/MoreAcademyInfo";
import SeoHead from "../../components/SeoHead";
import FacebookPixel from "../../components/AdScripts/FacebookPixel";
import GoogleTagManager from "../../components/AdScripts/GoogleTagManager";
import CookieConsentBanner from "../../components/CookieConsentBanner";

const MoreAcademy = () => {
  const isSelf = true;
  const btnName = "Buy Now(Coming Soon)";
  // const link = "https://www.scholarnest.in/pages/checkout-certified-big-data-engineer-ilt";
  const link = "#";
  return (
    <>

      <SeoHead title="Instructor-Led Live Course: Data Engineering with PySpark" description="Join our instructor-led live course on Spark and Databricks to become a data engineering expert. Benefit from real-time guidance, hands-on experience, and interactive sessions to master data engineering." />
      <FacebookPixel />

      <GoogleTagManager />
      <CookieConsentBanner />
      <Header />
      <MoreAcademyInfo link={link} btnName={btnName} isSelf={isSelf} />
      <Footer />
    </>
  )
}
export default MoreAcademy;
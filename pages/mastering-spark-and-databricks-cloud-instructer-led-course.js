import React from 'react'
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import MoreAcademyInfo from "../components/MoreAcademyInfo";
import SeoHead from "../components/SeoHead";

 const MoreAcademy = () => {
  const isSelf=true;
  const link="https://www.scholarnest.in/pages/checkout-certified-big-data-engineer-ilt";
  return (
  <>
    <SeoHead title="Instructor-Led Live Course: Data Engineering with PySpark" description="Join our instructor-led live course on Spark and Databricks to become a data engineering expert. Benefit from real-time guidance, hands-on experience, and interactive sessions to master data engineering." />
    <Header />
    <MoreAcademyInfo link={link} isSelf={isSelf}/>
    <Footer />
    </>
  )
}
export default  MoreAcademy;
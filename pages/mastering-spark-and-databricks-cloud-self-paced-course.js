import React from 'react'
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import MoreAcademyInfo from "../components/MoreAcademyInfo";
import SeoHead from "../components/SeoHead";

const MasterData = () => {
  return (
    <>
      <SeoHead title='Master Data Engineering with PySpark - Self-Paced Course' description="Enhance your data engineering skills with our self-paced course on Spark and Databricks. Learn at your own pace and master the fundamentals of data engineering with industry-standard tools and real-world applications." />

      <Header />
      <MoreAcademyInfo />
      <Footer />
    </>
  )
}
export default MasterData;
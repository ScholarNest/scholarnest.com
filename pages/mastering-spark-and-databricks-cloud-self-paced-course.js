import React from 'react'
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import MoreAcademyInfo from "../components/MoreAcademyInfo";
import SeoHead from "../components/SeoHead";

const MasterData = () => {
  const link="https://www.scholarnest.in/order?ct=d63c7586-29c1-4cd4-bbc6-f47afb6577f4";
  const isSelf=false;
  const btnName="Buy Self-paced Version for $329";
  return (
    <>
      <SeoHead title='Master Data Engineering with PySpark - Self-Paced Course' description="Enhance your data engineering skills with our self-paced course on Spark and Databricks. Learn at your own pace and master the fundamentals of data engineering with industry-standard tools and real-world applications." />

      <Header />
      <MoreAcademyInfo link={link} isSelf={isSelf} btnName={btnName} />
      <Footer />
    </>
  )
}
export default MasterData;
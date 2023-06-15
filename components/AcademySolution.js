import React from 'react'
import { useRouter } from "next/router";
import classes from "./style/solutions.module.css";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { motion } from "framer-motion";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { MdAdsClick } from 'react-icons/md';
import { CiCompass1 } from 'react-icons/ci';
import { CiSliderVertical } from 'react-icons/ci';
import { Card, Grid, Text, Link, Row } from "@nextui-org/react";
import Image from 'next/image';

const AcademySolution = () => {
  const router = useRouter();

  const h3style = {
    fontSize: "20px",
    fontWeight: "bold-500",
    color: "black"
  }
  const solDivstyle = {
    backgroundColor: "white",
    cursor: "pointer",
    opacity: "0.7",
    borderRadius: "10px",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"

  }

  return (
    <>
      <div>
        <img style={{ height: "110vh", width: "100vw" }} src="/assets/academy.jpg" alt="Solution" />
        <div style={{ width: "500px", position: "relative", bottom: "50px", margin: "0 auto", backgroundColor: "white" }}>
          <h1 class={classes.heading} >Academy</h1>

        </div>
        <p class="text-center" style={{ position: "relative", bottom: "40px", margin: "auto 3vw" }}>Self Paced, instructor Led, resume review, mock interviews, Mentorship call, project internships, Corporate bootcamps, profile registration. </p>
        <br />
        <div style={{ padding: "0", margin: "auto 0" }} className="row">
          <div className="col-6" style={{ backgroundColor: "purple" }}>

            <h2 class={classes.caseheading}>How do we help you with our managed services </h2>
            <h3 class={classes.subheading}>Automation enabled releases into production environments with the click of a button </h3>

            <button onClick={() => router.push("/academy#learnMore")} class="btn my-4" style={{ marginLeft: "10%", border: "1px solid white", display: "flex", flexDirection: "row", color: "white" }}>Learn more  <AiOutlineArrowRight style={{ marginLeft: "4px", marginTop: "5px" }} /></button>

          </div>
          <div style={{ padding: "0", margin: "auto 0" }} className="col-6">
            <img src="/assets/pexels.jpg" alt="Solution" />

          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />


      {/* Cards for each solution */}
      <div id="learnMore" className="mx-auto  px-4 row justify-center text-start " style={{ borderBottom: "1px solid white" }}>

        <h1 style={{ fontSize: "30px" }} class="text-center my-3">Our Course Offerings</h1>


        <div className=" col-4  p-1">
          <a href="https://www.scholarnest.in/bundles/mastering-spark-and-databricks-cloud">
            <div className={classes.styleDiv}>
              <Image width={600}
                height={400} src="/assets/dataengineering.jpg" />
              <br />
              <h3 style={h3style} >Course Bundle - Master Data Engineering</h3>

              <p>8 Courses</p>

              <p>8 self-placed courses worth $xyz</p>
            </div>
          </a>

        </div>
        <div className=" col-4 p-1">
          <a href="https://www.scholarnest.in/courses/mastering-pyspark">
            <div className={classes.styleDiv}>
              <Image width={600}
                height={400} src="/assets/pyspark.png" />
              <br />

              <h3 style={h3style} >Mastering PySpark</h3>
              <br />
              <p>Self-Placed/Instructor Lead</p>
            </div>
          </a>



        </div>

        <div className=" col-4  p-1">
          <a href="https://www.scholarnest.in/courses/mastering-databricks-cloud">
            <div className={classes.styleDiv}>
              <Image width={600}
                height={400} src="/assets/data.jpg" />
              <br />
              <h3 style={h3style} >Mastering Databricks Cloud</h3>

              <br />

              <p>Self-placed Learning</p>
            </div>

          </a>
        </div>
    

      </div>
      <a href="https://www.scholarnest.in/collections">
      <button  className='px-3 py-3 fw-semibold btn btn-danger rounded-pill mx-4 my-4'>View more courses</button>
      </a>
      <br />
     

      <h1 style={{ fontSize: "30px" }} class="text-center my-3">Upcoming Courses</h1>
      <br />
      <div className={classes.banner}>
      <div className={classes.content}>
        <h4>Apache kafka for Beginners</h4>
        <p>Starting from 10/08/2023</p>
      </div>
      <p className={classes.extraText}>@ScholarNest.com</p>

      <div>

      </div>
    </div>
      <br />
      <br />
      <br />
      {/* Case Studies */}
      {/* <h1 style={{ fontSize: "30px" }} class="text-center my-3">Case Studies</h1>

      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">

        <motion.div style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} >

          <Card.Body css={{ py: "$2" }}>
            <img src="/assets/learn1.jpg" alt="1" />
          </Card.Body>
          <Card.Footer>
            <Link
              icon
              color="primary"
              target="_blank"
              href="https://github.com/nextui-org/nextui"
            >
              How freewill drives new innovation through partnership.
            </Link>
          </Card.Footer>

        </motion.div>


        <motion.div style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>


          <Card.Body css={{ py: "$2" }}>
            <img src="/assets/learn2.jpg" alt="1" />
          </Card.Body>
          <Card.Footer>
            <Link
              icon
              color="primary"
              target="_blank"
              href="https://github.com/nextui-org/nextui"
            >
              Delivering transformative consumer experiences
            </Link>
          </Card.Footer>

        </motion.div>


        <motion.div style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>

          <Card.Body css={{ py: "$2" }}>
            <img src="/assets/learn3.jpg" alt="1" />
          </Card.Body>
          <Card.Footer>
            <Link
              icon
              color="primary"
              target="_blank"
              href="https://github.com/nextui-org/nextui"
            >
              How a global cruise company realised digital transformation.
            </Link>
          </Card.Footer>

        </motion.div>

      </div> */}
      <br />
      <br />
      <br />
      <br />
      <br />

    </>
  )
}
export default AcademySolution;
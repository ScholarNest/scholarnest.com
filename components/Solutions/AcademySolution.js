import React from 'react'
import { useRouter } from "next/router";
import classes from "../style/solutions.module.css";
import { AiOutlineArrowRight } from 'react-icons/ai';
import TestiMoni from './Testimoni.js'
import Image from 'next/image';

const AcademySolution = () => {
  const router = useRouter();

  

  return (
    <>
      <div>
        <Image height="500px" width="1100px" layout="responsive"  src="/assets/solutions/Academy.jpg" alt="Academy Solution" />
        <div className={classes.bannerDetails}>
          <h1 class={classes.heading} >Academy</h1>

        </div>
        <p class={classes.det+" text-center"} >We help individuals and organizations with an integrated set of interactive online learning system that provide trainers, learners, and others involved in education with information, tools, and resources to streamline professional skills and knowledge development across all functions and roles.</p>
        <br />
        <div style={{ padding: "0", margin: "auto 0" }} className="row">
          <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12"  style={{ backgroundColor: "purple" }}>

            <h2 class={classes.caseheading}>How do we help you with our managed services </h2>
            <h3 class={classes.subheading}>Automation enabled releases into production environments with the click of a button </h3>

            <button onClick={() => router.push("/academy#learnMore")} class="btn my-4" style={{ marginLeft: "10%", border: "1px solid white", display: "flex", flexDirection: "row", color: "white" }}>Learn more  <AiOutlineArrowRight style={{ marginLeft: "4px", marginTop: "5px" }} /></button>

          </div>
          <div style={{ padding: "0", margin: "auto 0" }} className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12" >
            <img src="/assets/solutions/business-mirror.jpg" alt="Solution" />

          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />


      {/* Cards for each solution */}
      <div id="learnMore" className={classes.solutionsBox+" mx-auto justify-content-center  row text-start  p-3"} >

        <h1 class={classes.head+ " text-center my-3"}>Our Course Offerings</h1>


        <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-lg-4 p-xl-4 p-md-3 p-sm-2 p-1">
          <a href="https://www.scholarnest.in/bundles/mastering-spark-and-databricks-cloud">
            <div className={classes.styleDiv}>
              <Image width={600}
                height={400} src="/assets/dataengineering.jpg" />
              <br />
              <h3 class={classes.h3style} >Course Bundle - Master Data Engineering</h3>

              <p>8 Courses</p>

              {/* <p>8 self-placed courses worth $xyz</p> */}
            </div>
          </a>

        </div>
        <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-lg-4 p-xl-4 p-md-3 p-sm-2 p-1">
          <a href="https://www.scholarnest.in/courses/mastering-pyspark">
            <div className={classes.styleDiv}>
              <Image width={600}
                height={400} src="/assets/pyspark.png" />
              <br />

              <h3 class={classes.h3style} >Mastering PySpark</h3>
              <br />
              <p>Self-Placed/Instructor Lead</p>
            </div>
          </a>



        </div>

        <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-lg-4 p-xl-4 p-md-3 p-sm-2 p-1">
          <a href="https://www.scholarnest.in/courses/mastering-databricks-cloud">
            <div className={classes.styleDiv}>
              <Image width={600}
                height={400} src="/assets/data.jpg" />
              <br />
              <h3 class={classes.h3style} >Mastering Databricks Cloud</h3>

              <br />

              <p>Self-placed Learning</p>
            </div>

          </a>
        </div>
    

      </div>
      <a href="https://www.scholarnest.in/collections">
      <button  className='px-lg-3 px-xl-3 px-md-3 px-sm-1 px-1 py-lg-3 py-xl-3 py-md-3 py-1 py-sm-2 fw-semibold btn btn-danger rounded-pill mx-4 my-4'>View more courses</button>
      </a>
      <br />
     

      <h1  class={classes.head+" text-center my-3"}>Upcoming Courses</h1>
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
      <h1  class={classes.head+" text-center my-3"}>What Our Customer Say</h1>
      <br />

  <TestiMoni />
      <br />
      <br />
      <br />
      <br />
      <br />

    </>
  )
}
export default AcademySolution;
import React,{useMemo,useState} from 'react'
import { useRouter } from "next/router";
import classes from "../style/solutions.module.css";
import { AiOutlineArrowRight } from 'react-icons/ai';
import TestiMoni from './Testimoni.js'
import Image from 'next/image';

import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";

const AcademySolution = () => {
  const router = useRouter();
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  
 const courseList=[
  {
    heading:"Course Bundle - Master Data Engineering",
    desc:"8 self-placed courses",
    link:"https://www.scholarnest.in/bundles/mastering-spark-and-databricks-cloud",
    imgPath:"/assets/solutions/AcademySolutions/1.png"
  },
  {
    heading:"Mastering PySpark",
    desc:"Self-Placed",
    imgPath:"/assets/solutions/AcademySolutions/2.jpg",
    link:"https://www.scholarnest.in/courses/mastering-pyspark"
  },
  {
    heading:"Mastering Databricks Cloud",
    desc:"Self-placed Learning",
    imgPath:"/assets/solutions/AcademySolutions/3.jpg",
    link:"https://www.scholarnest.in/courses/mastering-databricks-cloud"
  },
  {
    heading:"Databricks Certified Associate Developer for Apache Spark 3.0",
    desc:"Self-placed Exam Practice Test",
    imgPath:"/assets/solutions/AcademySolutions/4.jpg",
    link:"https://www.scholarnest.in/courses/databricks-certified-associate-developer-for-apache-spark"
  },
  {
    heading:"Databricks Data Engineer Assoicate Certification Practice Test",
    desc:"Self-placed Exam Practice Test",
    imgPath:"/assets/solutions/AcademySolutions/5.jpg",
    link:"https://www.scholarnest.in/courses/databricks-data-engineer-associate-certification-practice-test"
  },
  {
    heading:"Apache Kafka for Begginers",
    desc:"Latest course on Apache Kafka",
    imgPath:"/assets/solutions/AcademySolutions/6.jpg",
    link:"https://www.scholarnest.in/courses/apache-kafka-for-beginners"
  },
 ]
  const upcomingCourse=[
    {
      heading:"Course Bundle - Master Data Engineering",
      desc:"Instructor Led Course",
      imgPath:"/assets/solutions/AcademySolutions/1.png",
      date:"13/10/2023"
    },
    {
      heading:"Mastering PySpark",
      desc:"Instructor Led Course",
      imgPath:"/assets/solutions/AcademySolutions/2.jpg",
      date:"Soon...."
    }
  ]
  const Faqs = [
    {
      id: "faq1",
      ques: "How will these courses benefit my career?",
      ans: "Mastering PySpark and Databricks is highly valuable in the data engineering and analytics field. These skills are sought after by companies dealing with large datasets, making you an asset for roles related to data processing, analysis, and transformation. Your proficiency can lead to enhanced job opportunities and career growth."
    },
    {
      id: "faq2",
      ques: "How can Databricks enhance my data engineering skills?",
      ans: "Databricks offers a unified platform for data engineering tasks, enabling you to process, transform, and analyze data seamlessly. Learning Databricks equips you with the skills to handle complex data engineering workflows efficiently."
    },
    {
      id: "faq3",
      ques: "Are the courses self-paced or instructor-led?",
      ans: "We offer both options. Our self-paced courses allow you to learn at your convenience, while our instructor-led courses provide guided learning with real-time interaction and support."
    },
    {
      id: "faq4",
      ques: " How do I enroll in a course?",
      ans: "Enrolling is simple. Visit our course page, select the course that aligns with your goals, and follow the enrollment instructions. If you need any help or assistance, please don't hesitate to contact our support team."
    }
  ]

  return (
    <>
      <div>
        <Image height="500px" width="1100px" layout="responsive"  src="/assets/solutions/AcademySolutions/banner2.png" alt="Data Engineering with Spark and DataBricks" />
        <div className={classes.bannerDetails}>
          <h2 class={classes.heading} >Welcome to Our Academy: Your Gateway to Learning Excellence</h2>

        </div>
        <p class={classes.det+" text-center"} >We provide individuals and organizations with a cohesive and interactive online learning ecosystem. This platform equips trainers, learners, and education stakeholders with information, tools, and resources for seamless skill and knowledge enhancement across various functions and roles.</p>
    
        {/* <div style={{ padding: "0", margin: "auto 0" }} className="row">
          <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12"  style={{ backgroundColor: "purple" }}>

            <h2 class={classes.caseheading}>How do we help you with our managed services </h2>
            <h3 class={classes.subheading}>Automation enabled releases into production environments with the click of a button </h3>

            <button onClick={() => router.push("/academy#learnMore")} class="btn my-4" style={{ marginLeft: "10%", border: "1px solid white", display: "flex", flexDirection: "row", color: "white" }}>Learn more  <AiOutlineArrowRight style={{ marginLeft: "4px", marginTop: "5px" }} /></button>

          </div>
          <div style={{ padding: "0", margin: "auto 0" }} className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12" >
            <img src="/assets/solutions/business-mirror.jpg" alt="Solution" />

          </div>
        </div> */}
      </div>
      <div className={classes.topbannerDetailsInAcademy+ " " + " text-light flex flex-col items-start row-start-2 sm:row-start-1"}>
              <h1 className="  font-medium leading-normal">
              Become a Data Engineering Expert with Spark | <strong style={{color:"#F53855"}}>  Databricks </strong>
                            </h1>
              <p style={{ color: "white"}} className=" mb-xl-7  mb-lg-6 mb-1  mb-lg-6 mb-sm-1">
              Get Master Certification in Data Engineering for Apache Spark, Azure Databricks, Stream Processing, and Kafka, progressing from basic to advanced levels. Choose between self-paced or instructor-led options.    </p>

              <button class={classes.btn +" btn mt-sm-2"}><a href="https://www.scholarnest.in/collections">Enquire for Lead Instructor </a> </button>

            </div>
      
      


      {/* Cards for each solution */}
      <div id="learnMore"  style={{ backgroundColor: "rgb(251 251 249)"}} className={classes.solutionsBox+" mx-auto justify-content-center  row text-start  p-3"} >

        <h2 class={classes.head+ " text-center my-3"}>Self Page Course Offerings</h2>

         {
          courseList.map((data,index)=>{
            return(
            <div  className=" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-lg-4 p-xl-4 p-md-3 p-sm-2 p-1">
            <a href={data.link}>
              <div className={classes.styleDiv+" h-100"}>
                <Image width={600}
                  height={400} src={data.imgPath} />
                <br />
                <h3 class={classes.h3style} >{data.heading}</h3>
  
                <p class="my-2">{data.desc}</p>
  
                {/* <p>8 self-placed courses worth $xyz</p> */}
              </div>
            </a>
  
          </div>    )
          })
         }
 
      </div>


      <a href="https://www.scholarnest.in/collections">
      <button  className='px-lg-3 px-xl-3 px-md-3 px-sm-1 px-1 py-lg-3 py-xl-3 py-md-3 py-1 py-sm-2 fw-semibold btn btn-danger rounded-pill mx-4 my-4'>View more courses</button>
      </a>
      <br />
     

      <h2  class={classes.head+" text-center my-3"}>Instructor Based Live Courses</h2>
      <br />
      <div className={" mx-auto justify-content-center  row text-start  p-2"} >
 
 {
  upcomingCourse.map((data)=>{
   return(
<div className=" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-lg-4 p-xl-4 p-md-2 p-sm-2 p-1">
    <div className={classes.styleDiv + " h-100"}>
      <Image width={600}
        height={400} src={data.imgPath} />
      <br />
  
      <h3 class={classes.h3style+" mb-1"} >{data.heading}</h3>

      <p>{data.desc}</p>

      <p class={classes.anchorTag+" d-flex text-info fw-bold my-2"} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mt-1 mr-2 bi bi-calendar-check" viewBox="0 0 16 16">
  <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg> {data.date}</p>
     </div>


</div>
   )
  })
 }

<div style={{ backgroundColor: "rgb(251 251 249)" }} className="container-fluid  ">
        <br />
        <h2 class={classes.head + " text-center my-3"} >Frequently Asked Questions</h2>
        <br />
        {
          Faqs.map((quest) => {
            function openSolution(ques_id) {
              const elem = document.getElementById(ques_id)
              if (elem.style.display === "none") {
                elem.style.display = "flex";
              } else {
                elem.style.display = "none";
              }
            }
            return (
              <div class="my-2 border" >
                <div style={{ cursor: "pointer" }} onClick={() => { openSolution(quest.id) }} className="row rounded mx-auto bg-light p-3 w-100 justify-content-between question">
                  <h3 class={classes.h3style + " col-10 d-flex"}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi me-2 bi-cursor" viewBox="0 0 16 16">
                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z" />
                  </svg> {quest.ques}</h3>
                  <a class="col-1  text-end" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi align-self-end bi-caret-down-fill" viewBox="0 0 16 16">
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </a>
                </div>
                <div style={{display:"none"}} class={classes.Faqs + " p-3 w-100 mx-auto"} id={quest.id}>
                  <p>{quest.ans} </p>
                </div>
              </div>
            )
          })
        }

<br />


      </div>


</div>
      <br />
      <br />
      <br />
      <h2  class={classes.head+" text-center my-3"}>What Our Learners Say</h2>
      <br />

  <TestiMoni />
      <br />
      <br />
      <ScrollAnimationWrapper className="w-full">
        <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
          <div style={{ backgroundColor: "rgb(251 251 249)" }} className={classes.letsConnect + " rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500"}>
            <div className="flex flex-col  w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
              <h2 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                Connect with us to <br />  Collaborate!
              </h2>
              <p>Lets discover the digital world with us.</p>
            </div>
            <button className={
              "py-2 lg:py-4 px-8 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none"} onClick={() => router.push("/contactUs")}> <p class="text-white-500"> Get Started </p> </button>
          </div>
     
        </motion.div>
      </ScrollAnimationWrapper>
      <br />
      <br />
      <br />

    </>
  )
}
export default AcademySolution;
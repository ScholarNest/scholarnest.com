import React,{useMemo,useState} from 'react'
import { useRouter } from "next/router";
import classes from "../style/solutions.module.css";
import { AiOutlineArrowRight } from 'react-icons/ai';
import TestiMoni from './Testimoni.js'
import Image from 'next/image';
import ImageLoader from '../Layout/ImageLoader'
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
const AcademySolution = () => {
  const router = useRouter();
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  
 const courseList=[
  {
    heading:"Course Bundle - Master Data Engineering",
    desc:"8 Self-paced courses",
    link:"courses/mastering-spark-and-databricks-cloud-self-paced-course",
    imgPath:"/assets/solutions/AcademySolutions/1.png"
  },
  {
    heading:"Mastering PySpark",
    desc:"Self-paced",
    imgPath:"/assets/solutions/AcademySolutions/2.png",
    link:"/courses/mastering-pyspark"
  },
  {
    heading:"Mastering Databricks Cloud",
    desc:"Self-paced Learning",
    imgPath:"/assets/solutions/AcademySolutions/3.png",
    link:"/courses/mastering-databricks-cloud"
  },
  {
    heading:"Databricks Certified Associate Developer for Apache Spark 3.0",
    desc:"Self-paced Exam Practice Test",
    imgPath:"/assets/solutions/AcademySolutions/4.png",
    link:"courses/databricks-certified-associate-developer-for-apache-spark"
  },
  {
    heading:"Databricks Data Engineer Assoicate Certification Practice Test",
    desc:"Self-paced Exam Practice Test",
    imgPath:"/assets/solutions/AcademySolutions/5.png",
    link:"courses/databricks-data-engineer-associate-certification-practice-test"
  },
  {
    heading:"Apache Kafka for Begginers",
    desc:"Latest course on Apache Kafka",
    imgPath:"/assets/solutions/AcademySolutions/6.png",
    link:"courses/apache-kafka-for-beginners"
  },
  {
    heading:"AWS Cloud Practitioner",
    desc:"Self-paced Learning",
    imgPath:"/assets/solutions/AcademySolutions/8.jpg",
    link:"courses/learning-aws-cloud-fundamentals"
  },
  {
    heading:"Just Enough Python for PySpark Developers",
    desc:"Self-paced Learning",
    imgPath:"/assets/solutions/AcademySolutions/9.jpg",
    link:"courses/just-enough-python-for-pyspark-developers"
  },
  {
    heading:"Apache Spark 3 - Real-time Stream Processing using Python",
    desc:"Self-paced Learning",
    imgPath:"/assets/solutions/AcademySolutions/10.png",
    link:"courses/apache-spark-3-real-time-stream-processing-using-python"
  },

 ]
  const upcomingCourse=[
    {
      heading:"Course Bundle - Master Data Engineering",
      desc:"Instructor-led Course",
      imgPath:"/assets/solutions/AcademySolutions/upcomingcourse1.png",
      date:"17/09/2023"
    }
    // {
    //   heading:"Mastering PySpark",
    //   desc:"Instructor Led Course",
    //   imgPath:"/assets/solutions/AcademySolutions/2.jpg",
    //   date:"Soon...."
    // }
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
const blurDataURL="data:image/jpeg;base64,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NFU1NTUF1NNTRTUNTUUtS0tTUC1LS1m0UtZtW1m1FLWbS1LUVLWbVtZtZC1m0tZtRS1m0tZtRS1m0tZtQLWbS1m1NFtZtLWbTUW1m1LU1ZWKuqzprcZxrTU01UaEGhpWVVFEFRoQBRARBnV1WsaWM6sEajUYjUVmtRqMRqKzWo3K5xuUR0jcc43KNtxqMStSitytRiVqUG4srErUFalaYi6Dems6ug0us6aitaus6aDWms6aDWms6aKumpqairqaamgupqamoq2s6WpailqWlrNqBalprNqKWs2lqWoqWpaWs2opazaWs2opazaWs2siWs2lrNrNqlrNpazagWpalrNqyJVtTWbTWsYa01nTVTG9XWNXWomN6azq60mNCaaqNCCjQgqKIAzprOro1jWtSsSrKJjcajEqyqzW41GI1FZrUblc41KrLrK1K5ytyo1HSVqOcrUorpFjErUorcqysyrKDcq6xKug3q6xq6DWrrOmitaus6aDWms6aK1prOmoLpqamirqaamoLqampqKus6WpopalqWpqKWpaWs2opazaWpayqWs2razaglrNpazazVLWbS1i1m1otZtLWbWQtZtS1m1uQLWbSstSM1dQFRTUAXVlZBMdJV1z1ZWomOmrrEq60mNaus6arONjOmqY0JpomOWrKwazrpjrKsrnK1KqWOkrUrnK1KMWOkqxiVqVpitxqMRqKzXSVuVylblFjpK1K5ytSiukrUrnK1KK3K1K5ytSg3q6xq6K3q6xq6DWrrOmg1q6zpoNaazpqK1prOmgums6airqammimmpqagammpailqWpalqKWs2lqWopazaWs2opazaWs2s1S1i1bWLWLWktZtLWbWVLWLS1mtyKlqKjSVKgK5gAAAAAAALq6yrcqNausLrSY3q656uqmN6axq6GOYDi2qysiyjrK3K4ytyt6xY6ytSucrUqudjpKsYlalaZsblblc5W5RI6StSucrUo06SrKxK1KDcrUrnGpRW9XWNXQb1dY1dBrV1nTQa1dZ00VrTWdNBrU1NNRV1NTTQXU1NNRTU01NRTUtNZtFW1m01LWVLWbS1LUVLWbVtZtZqpazaWs2s2qlrNpazaw0lrFq2sNyKIClRKrKsUAVkAAAAAAAAABRFalABrUFQXRAHJQABqVkWUdpWpXLmtytSudjrK1K5ytStMWNytyucrUqsukrcrnK1KK6SrKxK1FVuVdYlalBrWtYlXQb01nV0GtXWNXRWtNZ1dBdNTTUVdNTTQXU1NNRV1NTU0F1NNTUUtTS1nUVbWbS1LUUtZtLWbWVLWbS1m1m1pLWbS1m1z60lrFq2sWtSLEoI0oiorFSoqKwAAAAAAAAAAAAAAAAogugAgAAAAN81hZcVLHaVqVy5rcrUrnY6StSsStStMWOkrUrnK1Ko6StSsSrKK6SrKxK1KK1q6zq6DWqzq6DWms6ug1prOroq6ammgumpqaitamppoLqampqKuppqaimpaazailqWlrNrKlqWlrNrNqpazaWs2udutQtYtW1i1ZGolrINqIAlRKqKxUAVkAAAAAAAAAAAAAAAAAAAAAAAAABZcdJXJqVZUsdpWpXKVuVqVzsdJWpXOVqVpl1lalc5WpRW5WpWJVlBuLrOrqjWrrOrorRrOroNaazog1ommirpqamg1qammoq6iaaimppqaimpaazailqWlrNrNUtZtLWbXO1YWs2lrNqRpLWKtrLcaARUEVFSoiorFABAAAAAAAAAAAAAAAAAAAAAAAAAAAAGua6SuLfNWVmx1lalc5W5W2LHSVqVzlalEdJWpWJVlVW9VmLoNaus6ug1prKitaazqguiaIqmpoC6moIqpoiAgiKWpaWpWapazaWs2sWtFrNKlZVKxa1axa1GolQGlEAQQRWaICsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyoA6StyuMrpK1KxY6StyuUrcrTLpK1K5ytSityrrMWA0rK6DWrrIDQgK0agCiCKCCAIIogiKVmrWazapazSpXOtJUpUqxWbWatZajQAogCsoioM1AFZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG5WFgldZWpXOVuVpl0lajEaijcViNRRpWVBpWVBRAGhBFUQQBAUBGVEESqVmrWa52qM1UqKlZq1mtRqM1AaURUEEVFQRUGagCsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANSukco6RYzXSNRiNRpGo1GY1AVUUFVAVVQBQAAEUBEBFRFRFRmqlQqOdaRKtSis1mtVmtRYyA0oioIIqKgioMVAFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABY3GI3FiVuNxiNxWWosSLFVVRQVUUFAAAFVFRAARUBGQRUrNVmotRhpKlWs1VSsVusVqNRAFBFQQRUVBFRWKgAgAAAAAAAAAAAAAAAAAAAD//Z";

  return (
    <>
      <div>
      <div class={classes.detailOnTopOfBanner}>
      <Image  placeholder="blur" blurDataURL={blurDataURL} loading="lazy" height="500px" width="1100px" layout="responsive"  src="/assets/solutions/AcademySolutions/scholarnest-website-academy-page-1100X600.jpg" alt="Data Engineering with Spark and DataBricks" />
    
      <div className={classes.overlayContent}>
      <h3> Become a Data Engineering Expert with Spark | <strong style={{color:"#F53855"}}>  Databricks </strong>  
 </h3>


        <p>Get Master Certification in Data Engineering for Apache Spark, Azure Databricks, Stream Processing, and Kafka, progressing from basic to advanced levels. Choose between self-paced or instructor-led options.</p>
        <button class={classes.btn +" btn mt-sm-3"}><a href="courses/mastering-spark-and-databricks-cloud-self-paced-course">Enquire about the Courses </a> </button>

      </div>
      </div>
        {/* <div className={classes.bannerDetails}>
          <h2 class={classes.heading} >ScholarNest Academy: Your Gateway to Learning Excellence</h2>

        </div>
        <p class={classes.det+" text-center"} >We provide individuals and organizations with a cohesive and interactive online learning ecosystem. This platform equips trainers, learners, and education stakeholders with information, tools, and resources for seamless skill and knowledge enhancement across various functions and roles.</p>
     */}
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
      


      {/* Cards for each solution */}
      <div id="learnMore"  style={{ backgroundColor: "rgb(251 251 249)"}} className={classes.solutionsBox+" mx-auto justify-content-center  row text-start  p-3"} >

        <h2 class={classes.head+ " text-center my-3"}>Self-paced Courses</h2>         {
          courseList.map((data,index)=>{
            return(
            <div  className=" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-lg-4 p-xl-4 p-md-3 p-sm-2 p-1">
            <a href={data.link}>
              <div className={classes.styleDiv+" h-100"}>
                <Image width={600}
                  height={300} src={data.imgPath} />
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


      {/* <a href="https://www.scholarnest.in/collections">
      <button  className='px-lg-3 px-xl-3 px-md-3 px-sm-1 px-1 py-lg-3 py-xl-3 py-md-3 py-1 py-sm-2 fw-semibold btn btn-danger rounded-pill mx-4 my-4'>View more courses</button>
      </a>
      <br />
      */}

      <h2  class={classes.head+" text-center my-3"}>Instructor-led Live Courses</h2>
      <br />
      <div className={" mx-auto   row text-start  p-2"} >
 
 {
  upcomingCourse.map((data)=>{
   return(
<div className=" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-lg-4 p-xl-4 p-md-2 p-sm-2 p-1">
  <a href="courses/mastering-spark-and-databricks-cloud-instructor-led-course">
    <div className={classes.styleDiv + " h-100"}>
      <Image width={600}
        height={300} src={data.imgPath} />
      <br />
  
      <h3 class={classes.h3style+" mb-1"} >{data.heading}</h3>

      <p>{data.desc}</p>

      <p class={classes.anchorTag+" d-flex text-info fw-bold my-2"} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mt-1 mr-2 bi bi-calendar-check" viewBox="0 0 16 16">
  <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg> {data.date}</p>
     </div>
     </a>

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
              "py-2 lg:py-4 px-8 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none"} onClick={() => router.push("/contact-us")}> <p class="text-white-500"> Get Started </p> </button>
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
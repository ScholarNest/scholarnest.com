import React from 'react'
import { useRouter } from "next/router";
import classes from "../style/solutions.module.css";
import { AiOutlineArrowRight } from 'react-icons/ai';
import TestiMoni from './Testimoni.js'
import Image from 'next/image';

const AcademySolution = () => {
  const router = useRouter();
 const courseList=[
  {
    heading:"Course Bundle - Master Data Engineering",
    desc:"8 self-placed courses",
    link:"https://www.scholarnest.in/bundles/mastering-spark-and-databricks-cloud",
    imgPath:"/assets/solutions/AcademySolutions/1.png"
  },
  {
    heading:"Mastering PySpark",
    desc:"Self-Placed/Instructor Lead",
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
      heading:"Apache Kafka Advance",
      desc:"Apache Kafka's advanced features and concepts enable it to handle complex data streaming scenarios with high reliability and scalability.",
      imgPath:"/assets/solutions/AcademySolutions/upcoming1.png",
      date:"13/10/2023"
    },
    {
      heading:"Apache Kafka Advance",
      desc:"Apache Kafka's advanced features and concepts enable it to handle complex data streaming scenarios with high reliability and scalability.",
      imgPath:"/assets/solutions/AcademySolutions/upcoming1.png",
      date:"13/10/2023"
    },
    {
      heading:"Apache Kafka Advance",
      desc:"Apache Kafka's advanced features and concepts enable it to handle complex data streaming scenarios with high reliability and scalability.",
      imgPath:"/assets/solutions/AcademySolutions/upcoming1.png",
      date:"13/10/2023"
    }
  ]


  return (
    <>
      <div>
        <Image height="500px" width="1100px" layout="responsive"  src="/assets/apache.jpg" alt="Academy Solution" />
        <div className={classes.bannerDetails}>
          <h1 class={classes.heading} >Academy</h1>

        </div>
        <p class={classes.det+" text-center"} >We help individuals and organizations with an integrated set of interactive online learning system that provide trainers, learners, and others involved in education with information, tools, and resources to streamline professional skills and knowledge development across all functions and roles.</p>
    
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
              Master Data Engineering with Spark | Databricks
              </h1>
              <p style={{ color: "white"}} className="mt-xl-3 mb-xl-7 mt-lg-4 mb-lg-6 mt-2 mb-1 mt-md-3 mb-lg-6 mt-sm-2 mb-sm-1">
              Master Certified Data Engineer for Apache Spark, Azure Databricks, Stream Processing, and Kafka from beginners to advanced - Self Paced or Instructor-led
              </p>

              <button class={classes.btn +" btn mt-sm-2"}>Get Started </button>

            </div>
      
      


      {/* Cards for each solution */}
      <div id="learnMore"  style={{ backgroundColor: "rgb(251 251 249)"}} className={classes.solutionsBox+" mx-auto justify-content-center  row text-start  p-3"} >

        <h1 class={classes.head+ " text-center my-3"}>Our Course Offerings</h1>

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
     

      <h1  class={classes.head+" text-center my-3"}>Upcoming Courses</h1>
      <br />
      <div className={" mx-auto justify-content-center  row text-start  p-2"} >
 
 {
  upcomingCourse.map((data)=>{
   return(
<div className=" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-lg-4 p-xl-4 p-md-2 p-sm-2 p-1">
    <div className={classes.styleDiv}>
      <Image width={600}
        height={400} src={data.imgPath} />
      <br />
      <hr />
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



</div>
      <br />
      <br />
      <br />
      <h1  class={classes.head+" text-center my-3"}>What Our Learners Say</h1>
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
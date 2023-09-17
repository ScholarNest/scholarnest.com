import React from 'react'
import Image from 'next/image';

import classes from "./style/moreAcademy.module.css";
const MoreAcademyInfo = () => {
  const courseList = [
    {
      heading: "Course Bundle - Master Data Engineering",
      desc: "8 self-paced courses",
      link: "https://www.scholarnest.in/bundles/mastering-spark-and-databricks-cloud",
      price: "$149",
      imgPath: "/assets/solutions/AcademySolutions/1.png"
    },
    {
      heading: "Mastering PySpark",
      desc: "Self-Paced",
      imgPath: "/assets/solutions/AcademySolutions/2.jpg",
      price: "$149",
      link: "https://www.scholarnest.in/courses/mastering-pyspark"
    },
    {
      heading: "Mastering Databricks Cloud",
      desc: "Self-paced Learning",
      imgPath: "/assets/solutions/AcademySolutions/3.jpg",
      price: "$36.79",
      link: "https://www.scholarnest.in/courses/mastering-databricks-cloud"
    },
    {
      heading: "Databricks Certified Associate Developer for Apache Spark 3.0",
      desc: "Self-paced Exam Practice Test",
      imgPath: "/assets/solutions/AcademySolutions/4.jpg",
      price: "$36.79",
      link: "https://www.scholarnest.in/courses/databricks-certified-associate-developer-for-apache-spark"
    },
    {
      heading: "Databricks Data Engineer Assoicate Certification Practice Test",
      desc: "Self-paced Exam Practice Test",
      imgPath: "/assets/solutions/AcademySolutions/5.jpg",
      price: "$24.79",
      link: "https://www.scholarnest.in/courses/databricks-data-engineer-associate-certification-practice-test"
    },
    {
      heading: "Apache Kafka for Begginers",
      desc: "Latest course on Apache Kafka",
      imgPath: "/assets/solutions/AcademySolutions/6.jpg",
      price: "$24.79",
      link: "https://www.scholarnest.in/courses/apache-kafka-for-beginners"
    },
  ]
  const IndcourseList = [
  
    {
      heading: "Mastering PySpark",
      desc: "Self-paced/Instructor-led",
      imgPath: "/assets/solutions/AcademySolutions/2.jpg",
      price: "$149",
      link: "https://www.scholarnest.in/courses/mastering-pyspark"
    },
    {
      heading: "Mastering Databricks Cloud",
      desc: "Self-paced Learning",
      imgPath: "/assets/solutions/AcademySolutions/3.jpg",
      price: "$36.79",
      link: "https://www.scholarnest.in/courses/mastering-databricks-cloud"
    },
    
    {
      heading: "Apache Kafka for Begginers",
    
      imgPath: "/assets/solutions/AcademySolutions/6.jpg",
      price: "$24.79",
      link: "https://www.scholarnest.in/courses/apache-kafka-for-beginners"
    },
  ]
  const Faqs = [
    {
      id: "faq1",
      ques: "How long can I access the course material?",
      ans: "We provide lifetime access to the course material."
    },
    {
      id: "faq2",
      ques: "Do you have refund policy?",
      ans: "Yes. You can ask for a refund within 7 days of your purchase or before completing 15% of any course material, whichever is earlier. We provide a refund after deducting 6% of payment processing charges."
    },
    {
      id: "faq3",
      ques: "How do you provide support?",
      ans: "We offer both options. Our self-paced courses allow you to learn at your convenience, while our instructor-led courses provide guided learning with real-time interaction and support."
    }
  ]
  return (
    <>
      <div className={classes.banner + " d-flex justify-content-center align-items-center"}>
        <div class="mx-auto w-75">
          <h1> Master Data Engineering with Spark | Databricks</h1>

          <p class="text-white">   Master Certified Data Engineer for Apache Spark, Azure Databricks, Stream Processing, and Kafka from beginners to advanced - Self Paced or Instructor-led
          </p>
          <div class="row gap-2 justify-content-center">
            <button class="col-sm-5 col-md-4  col-8 btn btn-rounded btn-warning p-2 mx-2"> <a href="https://www.scholarnest.in/order?ct=d63c7586-29c1-4cd4-bbc6-f47afb6577f4"> Buy Self Pace Version for $329  </a></button>
            <button class="col-sm-5  col-md-4 col-8 btn btn-rounded btn-warning p-2 mx-2"><a href="https://docs.google.com/forms/d/e/1FAIpQLSczeKG6-u1esN6_N8dQSFD3C8_BVg9jj3uJEoBU-37jn5IYhw/viewform"> Enquire for Instructor-led Program </a></button>
          </div>
          <br />
        </div>
      </div>
      <br />
      <br />
      <div className="row mx-4">
        <div className={classes.secondDiv + " col-12 col-sm-12 col-md-6 h-100"}>
          <h2>What you'll learn</h2>
          <br />
          <p class="my-1"> Mastering Data Engineering with Spark and Databricks is a comprehensive course bundle that will help you become proficient in Apache Spark programming and Databricks Cloud Platform, Structured Streaming, Apache Kafka, Spark Developer and Databricks Data Engineer Certification.
          </p>

        </div>
        <div className=" col-12 col-sm-12 col-md-6">
          <p class="d-flex my-3"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi mt-1 mr-2 bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg> Learn Apache Spark and PySpark programming from beginner to advanced</p>
          <hr />
          <p class="d-flex my-3"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi mt-1 mr-2 bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg> Master Databricks Cloud, Lakehouse Architecture and other Databricks Tools.</p>
          <hr />
          
          
          <p class="d-flex my-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" fill="currentColor" class="bi mt-1 mr-2 bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
            Prepare and Practice for Spark Developer Associate and Data Engineer Associate Certifications</p>
          <hr />
          <p class="d-flex my-3"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi mt-1 mr-2 bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg> Learn Apache Kafka and Spark Structured Streaming 
           </p>
          <hr />
          <p class="d-flex my-3"> 
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi mt-1 mr-2 bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
            Bonus learning with Python Programming and AWS Cloud Fundamentals.</p>
          <hr />
        </div>

      </div>
      <br />
      <br />
      <br />
      {/* 3rd Section */}

      <div style={{ backgroundColor: "rgb(251 251 249)" }} className={classes.courseBox + " mx-auto justify-content-center  row text-start  p-3"} >

        <h2 class={"  my-2"}>Included Course</h2>
        <p class="mb-1">Lifetime access for 8 courses worth $470.79</p>

        {
          courseList.map((data, index) => {
            return (
              <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-lg-4 p-xl-4 p-md-3 p-sm-2 p-1">
                <a href={data.link}>
                  <div className={classes.styleDiv + " h-100"}>
                    <Image width={600}
                      height={300} src={data.imgPath} />
                    <br />
                    <h3 class={classes.h3style} >{data.heading}</h3>

                    <p class="my-2">{data.desc}</p>
                    <p class="my-2 fw-bold">{data.price}</p>

                    {/* <p>8 self-placed courses worth $xyz</p> */}
                  </div>
                </a>

              </div>

            )
          })
        }




        <a href="https://www.scholarnest.in/collections">
          <button className='px-lg-3 px-xl-3 px-md-3 px-sm-1 px-1 py-lg-3 py-xl-3 py-md-3 py-1 py-sm-2 fw-semibold btn btn-danger rounded-pill mx-4 my-4'>View more courses</button>
        </a>
      </div>
      <br />
      <br />
      <div className={classes.div4}>
        <br />
        <h2 class={" my-2 mx-3"}>Features & Support</h2>
        <br />
        <div className="row mx-0 justify-content-center">
          <div className={classes.featureBox + " col-10 col-sm-6 col-lg-3 col-md-4 bg-white border"}>
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" class="mx-auto my-3" viewBox="0 0 448 512"><path d="M347.1 215.4c11.7-32.6 45.4-126.9 45.4-157.1 0-26.6-15.7-48.9-43.7-48.9-44.6 0-84.6 131.7-97.1 163.1C242 144 196.6 0 156.6 0c-31.1 0-45.7 22.9-45.7 51.7 0 35.3 34.2 126.8 46.6 162-6.3-2.3-13.1-4.3-20-4.3-23.4 0-48.3 29.1-48.3 52.6 0 8.9 4.9 21.4 8 29.7-36.9 10-51.1 34.6-51.1 71.7C46 435.6 114.4 512 210.6 512c118 0 191.4-88.6 191.4-202.9 0-43.1-6.9-82-54.9-93.7zM311.7 108c4-12.3 21.1-64.3 37.1-64.3 8.6 0 10.9 8.9 10.9 16 0 19.1-38.6 124.6-47.1 148l-34-6 33.1-93.7zM142.3 48.3c0-11.9 14.5-45.7 46.3 47.1l34.6 100.3c-15.6-1.3-27.7-3-35.4 1.4-10.9-28.8-45.5-119.7-45.5-148.8zM140 244c29.3 0 67.1 94.6 67.1 107.4 0 5.1-4.9 11.4-10.6 11.4-20.9 0-76.9-76.9-76.9-97.7.1-7.7 12.7-21.1 20.4-21.1zm184.3 186.3c-29.1 32-66.3 48.6-109.7 48.6-59.4 0-106.3-32.6-128.9-88.3-17.1-43.4 3.8-68.3 20.6-68.3 11.4 0 54.3 60.3 54.3 73.1 0 4.9-7.7 8.3-11.7 8.3-16.1 0-22.4-15.5-51.1-51.4-29.7 29.7 20.5 86.9 58.3 86.9 26.1 0 43.1-24.2 38-42 3.7 0 8.3.3 11.7-.6 1.1 27.1 9.1 59.4 41.7 61.7 0-.9 2-7.1 2-7.4 0-17.4-10.6-32.6-10.6-50.3 0-28.3 21.7-55.7 43.7-71.7 8-6 17.7-9.7 27.1-13.1 9.7-3.7 20-8 27.4-15.4-1.1-11.2-5.7-21.1-16.9-21.1-27.7 0-120.6 4-120.6-39.7 0-6.7.1-13.1 17.4-13.1 32.3 0 114.3 8 138.3 29.1 18.1 16.1 24.3 113.2-31 174.7zm-98.6-126c9.7 3.1 19.7 4 29.7 6-7.4 5.4-14 12-20.3 19.1-2.8-8.5-6.2-16.8-9.4-25.1z" /></svg>
            <h3 class="my-3 fw-bold"> Total Support</h3>
            <p> We provide support throughout your learning and answer every question in our discussion and Q&A forum. You may also avail of one-to-one technical support calls for blocker issues. </p></div>
          <div className={classes.featureBox + " col-10 col-sm-6 col-lg-3 bg-white border col-md-4"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi mx-auto my-3 bi-mortarboard-fill" viewBox="0 0 16 16">
              <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
              <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
            </svg>
            <h3 class="my-3 fw-bold">Certification Ready</h3>
            <p>The course covers the Apache Spark Developer Associate and Databricks Certified Data Engineer Associate certification exam curriculum. By the end of the course, you will be ready to take the certification exam. </p></div>
          <div className={classes.featureBox + " col-10 col-sm-6 col-lg-3 bg-white border col-md-4"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi mx-auto my-3 bi-cup-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899l-.866 3.9Z" />
            </svg>
            <h3 class="my-3 fw-bold"> Capstone Project</h3>
            <p> The course includes many hands-on assignments/solutions and a major real-life capstone project with the complete solution, source code, and explanation. </p></div>
        </div>
        <br />
      </div>
      <br />
      <br />
      {/* Section 4 */}
      <div class={classes.div3}>
        <h2 class="text-center">Course FAQ</h2>
        <br />
        <div className={classes.faqDiv + " mx-auto"}>

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
                <div class="my-2" >
                  <div style={{ cursor: "pointer" }} onClick={() => { openSolution(quest.id) }} className="row rounded mx-auto  p-3 w-100 justify-content-between question">
                    <h3 class={classes.h3style + " col-10 d-flex"}> {quest.ques}</h3>
                    <a class="col-1  text-end" >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi align-self-end bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                      </svg>
                    </a>
                  </div>
                  <div style={{ display: "none" }} class={classes.Faqs + " px-4 mx-auto "} id={quest.id}>
                    <p>{quest.ans} </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <br />
      <br />
      <div class={classes.div4 + " d-flex justify-content-center align-items-center"}>
        <div>
          <br />
          <h2 class="text-center">Enroll now and get started today</h2>
          <br />
          <div class="d-flex justify-content-center">
            <button class="btn rounded-pill btn-warning px-5 p-2 mx-auto text-center"> <a href="https://www.scholarnest.in/order?ct=6a421523-c128-411f-9fa0-578357e21a21"> Buy for $320 </a></button>
          </div>
          <br />
        </div>
      </div>
      <br />
      <br />
      <div style={{ backgroundColor: "rgb(251 251 249)" }} className="row mx-4">
        <div className={classes.secondDiv + " col-12 col-sm-12 col-md-6 p-2 h-100"}>
          <h2>Schedule a free call</h2>
          <br />
          <p class="my-1">Get in touch with your course coordinator to learn more about the course, instructor-led course options, discount offers, course bundles, and additional payment methods.
          </p>

        </div>
        <div className={classes.secondDiv + " col-12 col-md-6 col-6"}>
        <div >
          <h3>For instructor-lead training</h3>
          

            <p class="fw-bold mb-2"> Course Enquiry: <a style={{textDecoration:"underline"}} href="https://docs.google.com/forms/d/e/1FAIpQLSczeKG6-u1esN6_N8dQSFD3C8_BVg9jj3uJEoBU-37jn5IYhw/viewform" target="_blank">  Request callback </a></p>
            <p class="mb-2">
              Looking for an instructor lead course? We have instructor lead batches starting every month. Fill out the course inquiry form, and we will contact you with more details.
            </p>  
              
          <hr />
          </div>
        <div>

            <h3>Email</h3>
            <p class="fw-bold mb-2">
            Email: sushant@scholarnest.com
            </p>  
            <p class="mb-2">Contact us for current promotional offers, course bundles, and additional payment methods such as NEFT, Net Banking, UPI, etc.</p>
               </div>
          <hr />
          <div>

            <h3 >WhatsApp</h3>
            <p class="fw-bold mb-2">
            WhatsApp: +91-93534 65988
            </p>  
            <p class="mb-2">Want to speak to your course coordinator? We are just a WhatsApp message away.</p>
               </div>
    <br />
        </div>
<br />
      </div>
      <br /><br />
      <div  className={classes.courseBox + " mx-auto justify-content-center  row text-start  p-3"} >

        <h2 class={"  my-2"}>Individual Courses:</h2>
        <p>Schedule a call with course coordinator for bundles, discounts and live sessions</p>

        {
          IndcourseList.map((data, index) => {
            return (
              <div className=" rounded col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-lg-4 p-xl-4 p-md-3 p-sm-2 p-1">
                <a href={data.link}>
                  <div className={classes.styleDiv + " h-100"}>
                    <Image width={600}
                      height={300} src={data.imgPath} />
                    <br />
                    <h3 class={classes.h3style} >{data.heading}</h3>

                    <p class="my-2">{data.desc}</p>
                    <p class="my-2 fw-bold">{data.price}</p>

                    {/* <p>8 self-placed courses worth $xyz</p> */}
                  </div>
                </a>

              </div>

            )
          })
        }




        <a href="https://www.scholarnest.in/collections">
          <button className='px-lg-3 px-xl-3 px-md-3 px-sm-1 px-1 py-lg-3 py-xl-3 py-md-3 py-1 py-sm-2 fw-semibold btn btn-danger rounded-pill mx-4 my-4'>View more courses</button>
        </a>
      </div>
    </>
  )
}
export default MoreAcademyInfo;
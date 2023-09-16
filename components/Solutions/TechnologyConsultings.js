import React, { useMemo } from 'react'
import { useRouter } from "next/router";
import classes from "../style/solutions.module.css";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { motion } from "framer-motion";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bannerImg from "../staticImages/TechnologyConsulting.png"

import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import { Card, Grid, Text, Link, Row } from "@nextui-org/react";
const TechnologyConsultings = () => {
  const router = useRouter();

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const ServicesData = [
    {
      title: "Cloud Computing",
      about: "Revolutionize your business with cutting-edge cloud services and solutions. Explore the dynamic landscape of cloud technology, from scalable infrastructure to seamless migration strategies. Discover the power of hybrid and multi-cloud environments, enhancing security and flexibility. Uncover the advantages of public and private clouds, optimizing storage, networking, and performance. Elevate your enterprise with cloud computing's transformative benefits, as we delve into trends, best practices, and cost-effective strategies tailored to businesses of all sizes. Embrace innovation, scalability, and efficiency – explore the limitless potential of cloud computing today.",
      link: "#",
      imgsrc: "/assets/Icon/managed services-70 px.svg"
    },
    {
      title: "Data Engineering",
      about: "Navigate the intricate realm of data pipelines, integration, and ETL processes with our comprehensive data engineering expertise. From constructing robust data architectures to optimizing data processing and transformation, we delve into the intricacies of data quality, modeling, and governance. Explore the dynamic landscapes of real-time data engineering and batch processing, harnessing the potential of data streaming and lakes. Discover the transformative impact of cloud-based data engineering solutions, ensuring scalability and efficiency in today's data-driven world. Dive into the realm of data engineering best practices, technologies, and analytics, as we guide you through a journey of harnessing the full potential of your data.",
      link: "#",
      imgsrc: "/assets/Icon/technology consulting-70 px.svg"
    },
    {
      title: " Data Science & Analytics",
      about: "Embark on a journey of discovery through the realms of data science and analytics, where data-driven decisions shape the future. Dive into the world of big data analytics, utilizing predictive modeling, machine learning, and artificial intelligence to unlock hidden patterns and trends. Visualize data with clarity, leveraging advanced tools and techniques for statistical analysis, data mining, and interpretation. From business intelligence to customer analytics, explore the transformative power of descriptive, prescriptive, and exploratory analytics, guiding your strategies and innovations. Join us in harnessing the potential of data, as we explore cutting-edge platforms, strategies, and trends that drive success across industries.",
      link: "#",
      imgsrc: "/assets/Icon/staff augmentation-70 px.svg"
    },

  ]
  
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const logos=[ 
  { id: 1, image: "/assets/partners/apache .svg" },
  { id: 2, image: "/assets/partners/aws.svg" },
  { id: 3, image: "/assets/partners/databricks.svg" },
  { id: 4, image: "/assets/partners/docker.svg" },
  { id: 5, image: "/assets/partners/hashicorp.svg" },

];

const Faqs=[
  {
    id:"faq1",
    ques:"What is technology consulting?",
    ans:"Technology consulting involves providing expert guidance and strategic advice to businesses on utilizing technology effectively. Consultants assess the client's needs, challenges, and goals, then design tailored solutions that align with their objectives. This can include optimizing IT infrastructure, implementing software solutions, advising on digital transformation, and ensuring technology aligns with business strategies. The aim is to enhance efficiency, innovation, and competitiveness through informed technology decisions."
  },
  {
    id:"faq2",
    ques:"How do I get support for data engineering?",
    ans:"As a technology consultant, we are here to provide comprehensive support for data engineering. We will assess your specific requirements, design tailored data pipelines, and recommend suitable tools and frameworks. Whether it's optimizing data integration, transforming processes, or ensuring quality, we will guide you through every step to achieve efficient and effective data engineering solutions."
  },
  {
    id:"faq3",
    ques:"Why do we need cloud computing?",
    ans:"Cloud computing offers numerous benefits for businesses. It enhances scalability, allowing you to effortlessly adjust resources as needed. It improves accessibility, enabling remote collaboration and access to data from anywhere. Cloud computing also reduces infrastructure costs, eliminates the need for extensive hardware, and enhances data security through advanced measures. Ultimately, it streamlines operations, accelerates innovation, and ensures a competitive edge in today's dynamic business landscape."
  }
]

  return (
    <>
      <div>
        <Image placeholder='blur' loading="lazy" height="500px" width="1100px" layout="responsive" src={bannerImg} alt="Technology Consulting Solutions" />
        <div className={classes.bannerDetails}>
          <h1 class={classes.heading} >Technology Consulting Solutions</h1>

        </div>
        <p class={classes.det + " text-center"} >As business integrators, Our Technology Strategy and advisory practice function on transformational engagements, supporting our clients in solving complicated business concerns using technology as an enabler.</p>

  

        <div style={{ margin: "auto 8px" , backgroundColor: "rgb(251 251 249)"}} className={classes.techService+" row"}>
        <h2 class={classes.head + " text-center my-3"}>Technology is Here</h2>
        <br />
          <div className={" col-12 col-lg-6 col-sm-12 col-md-12"}>
            <p class="p-2">
   
              <li>
                In the realm of technology consulting and tech services, including cloud computing, data science, and data engineering, the ability to swiftly scale and adapt is paramount.
                 
              </li>
              <li> 
              Amidst the dual prospects of innovation and disruption, technology firms require agility to thrive. Irrespective of your company's specialization or growth stage, our profound industry insights and versatile expertise aid in strategic decision-making for prompt and enduring outcomes.
              </li>

              <li>
                Today's business landscape necessitates a distinct paradigm for constructing and navigating technology and large-scale transformations, tailored to its fluid nature.
              </li>
              
              <li>
                The tech sector, a pivotal driver of the global economy, thrives on constant change. Yet, not all enterprises benefit uniformly. Allow us to illuminate the path to mastering technical and business model breakthroughs, steering your venture toward a new realm of achievement and expansion.

              </li>      <br />
            </p>
          </div>
          <div className={" relative col-12 col-lg-6 col-sm-12 col-md-12 py-2 px-3   my-auto"}>

       
            <Image
               className="img-fluid rounded mx-auto"
               layout='responsive'
             height="330px" width="600px"
              src="/assets/solutions/techConsultingSolution.jpg"
              alt="Technology Consulting Services" />




          </div>
        </div>
      </div>



      {/* Cards for each solution */}
      <div id="learnMore" className={classes.solutionsBox + " mx-auto justify-content-center  row text-start  p-3"}>

        <h2 class={classes.head + " text-center my-3"}>Sector Expertise</h2>


        <br />
        <br />
        <div className="row  text-start  " style={{ margin: "0", height: "auto", borderBottom: "1px solid white" }}>
          {ServicesData.map((sol) => (
            <div onClick={() => router.push(sol.link)} className={classes.eachServicesDivstyle + " col-xl-6 col-lg-6 col-12 col-sm-12 col-md-12 my-1 p-3"}>
              {/* <CiCompass1 color="black" size={70} /> */}
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img className={classes.icons} src={sol.imgsrc} />
                <br />
                <h3 className={classes.h3style + " my-auto ml-2"} >{sol.title}</h3>
              </div>
              <br />
              <p>{sol.about}</p>
              <br />
              <button  ><BsFillArrowRightCircleFill color="black" size={25} /></button>
            </div>
          ))}

        </div>


      </div>
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
  
      <div class={classes.partnersBox+" mx-3"}>
         
          <br />
          <h2 class="text-center mt-5 mb-4"  >Partners & Customers</h2>
          <hr />
          <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={700}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      
    >
      {logos.map((logo) => (
        <img style={{height:"120px",width:"150px",margin:"0 auto",objectFit:"contain"}} key={logo.id} src={logo.image} alt={`Logo ${logo.id}`} />
    
      ))}
    </Carousel>


        </div>

        <br />
        <br />
    
        <div style={{ backgroundColor: "rgb(251 251 249)"}} className="container-fluid  ">
        <br />
        <h2 class={classes.head + " text-center my-3"} >Frequently Asked Questions</h2>
        <br />
          {
            Faqs.map((quest)=>{
              function openSolution(ques_id){
                const elem = document.getElementById(ques_id)
                if (elem.style.display === "none") {
                  elem.style.display = "flex";
                } else {
                  elem.style.display = "none";
                }
              }
              return(
                <div class="my-2 border" >
                <div style={{cursor:"pointer"}} onClick={() => { openSolution(quest.id) }} className="row rounded mx-auto bg-light p-3 w-100 justify-content-between question">
                  <h3 class={classes.h3style+" col-10 d-flex"}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi me-2 bi-cursor" viewBox="0 0 16 16">
                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z" />
                  </svg> {quest.ques}</h3>
                  <a class="col-1  text-end" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi align-self-end bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                  </a>
                </div>
                <div  style={{display:"none"}}  class={classes.Faqs+" p-3 w-100 mx-auto"} id={quest.id}>
                  <p>{quest.ans} </p>
                </div>
              </div>
              )
            })
          }
          <br />
        

         
          </div>
          <br />
        
      {/* Case Studies */}
      <h2 class={classes.head + " text-center my-3"}>Case Studies</h2>

      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
        <ScrollAnimationWrapper className="flex justify-center">
          <motion.div style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} variants={scrollAnimation}>

            <Card.Body css={{ py: "$2" }}>
              <img src="/assets/solutions/CaseStudy/1.jpg" alt="1" />
            </Card.Body>
            <Card.Footer>
              <Link
                icon
                color="primary"
                target="_blank"
                href="#"
              >
                <p>
                  How freewill drives new innovation through partnership.
                </p>
              </Link>
            </Card.Footer>

          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex justify-center">
          <motion.div style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} variants={scrollAnimation}>


            <Card.Body css={{ py: "$2" }}>
              <img src="/assets/solutions/CaseStudy/2.jpg" alt="1" />
            </Card.Body>
            <Card.Footer>
              <Link
                icon
                color="primary"
                target="_blank"
                href="#"
              >
                <p>
                  Delivering transformative consumer experiences to the clients.
                </p>
              </Link>
            </Card.Footer>

          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex justify-center">
          <motion.div style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} variants={scrollAnimation}>

            <Card.Body css={{ py: "$2" }}>
              <img src="/assets/solutions/CaseStudy/3.jpg" alt="1" />
            </Card.Body>
            <Card.Footer>
              <Link
                icon
                color="primary"
                target="_blank"
                href="#"
              >
                <p>
                  How a global cruise company realised digital transformation.
                </p>
              </Link>
            </Card.Footer>

          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

    </>
  )
}
export default TechnologyConsultings;
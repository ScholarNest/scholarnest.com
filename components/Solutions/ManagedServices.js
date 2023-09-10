import React,{ useMemo } from 'react'
import { useRouter } from "next/router";
import classes from "../style/solutions.module.css";
import {  AiOutlineArrowRight} from 'react-icons/ai';
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import {  BsFillArrowRightCircleFill } from 'react-icons/bs';
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Grid, Text, Link, Row } from "@nextui-org/react";
import bannerImg from "../staticImages/ManagedServices.jpg"


const ManagedServices = () => {
  const router = useRouter();
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const ManagedServicesData=[
    {
      title: "Data Engineering",
      about:"Our Data Engineering service is the backbone of your data-driven success. We design, build, and maintain robust data pipelines, ensuring data quality, accessibility, and scalability. Trust us to transform your raw data into actionable insights, empowering smarter decisions and driving your business forward.",
      link: "#",
      imgsrc:"/assets/Icon/managed services-70 px.svg"
    },
    {
      title:"Data Science & Analytics",
      about:"Our Data Science & Analytics service harnesses the power of data to uncover valuable insights. Our experts leverage advanced analytics and machine learning to extract actionable intelligence from your data, enabling data-driven decisions and fostering innovation. Let us empower your organization with data-driven precision.",
      link: "#",
      imgsrc:"/assets/Icon/technology consulting-70 px.svg"
    },
    {
      title: "Cloud Management",
      about:"Our Cloud Computing service revolutionizes your IT infrastructure. We harness the agility, scalability, and cost-efficiency of cloud platforms to drive your digital transformation. Whether it's migration, optimization, or ongoing management, trust us to maximize your cloud potential and empower your business for the future.",
      link: "#",
      imgsrc:"/assets/Icon/staff augmentation-70 px.svg"
    },

]
const Faqs=[
  {
    id:"faq1",
    ques:"What are managed services, and how do they benefit my organization?",
    ans:"Managed services are comprehensive solutions that encompass cloud computing, data engineering, data science, and analytics. They benefit your organization by providing expert support, optimizing operations, ensuring data security, and enabling you to focus on core business objectives while we handle the technical complexities."
      },
  {
    id:"faq2",
    ques:"What is the typical scope of Managed Cloud Computing Services?",
    ans:"Managed Cloud Computing Services encompass a wide range of tasks, including cloud migration, resource optimization, security management, cost control, and 24/7 monitoring. These services ensure your cloud infrastructure is agile, secure, and cost-effective."
  },
  {
    id:"faq3",
    ques:"How can I ensure the security of my data with Managed Data Engineering Services?",
    ans:"Managed Data Engineering Services include robust security measures, such as encryption, access controls, and data governance. These safeguards protect your data from unauthorized access and breaches, ensuring its integrity and confidentiality."
  },
  {
    id:"faq4",
    ques:" Is Managed Data Science and Analytics suitable for businesses of all sizes?",
    ans:"Yes, Managed Data Science and Analytics can be tailored to suit businesses of all sizes. Whether you're a startup or an enterprise, these services help you harness the power of data for growth and competitiveness."
  }
]
const logos=[ 
  { id: 1, image: "/assets/partners/apache .svg" },
  { id: 2, image: "/assets/partners/aws.svg" },
  { id: 3, image: "/assets/partners/databricks.svg" },
  { id: 4, image: "/assets/partners/docker.svg" },
  { id: 5, image: "/assets/partners/hashicorp.svg" },


  // { id: 6, image: "/assets/logo4.png" },
  // { id: 7, image: "/assets/logo3.png" },
  // { id: 8, image: "/assets/logo6.png" },
  // { id: 9, image: "/assets/logo7.png" },
  // { id: 10, image: "/assets/logo4.png" }

];

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


  return (
    <>
    <div>
       <Image placeholder='blur' loading="lazy" height="500px" width="1100px" layout="responsive"   src={bannerImg} alt="Managed Services" />
       <div className={classes.bannerDetails}>
       <h1 class={classes.heading} >Streamline Your Business with Expert Managed Services</h1>
      
       </div>
       <p class={classes.det+" text-center"}>Experience uninterrupted business operations with our Managed Services and elevate your data-driven ventures with our Managed Services. From data science to cloud computing and data engineering, we provide expert solutions to streamline and enhance your operations, ensuring success in today's digital landscape.</p>
     <br />
     <div style={{padding:"0",margin:"auto 0"}} className="row">
        <div className="col-lg-6 col-xl-6 col-12  d-flex justify-content-center align-items-center" style={{backgroundColor:"purple",padding:"auto 15px"}}>
          <div class="my-auto">
            <h2 class={classes.caseheading}>How do we help you with our managed services </h2>
           <p class={classes.subheading}>Our managed services empower your data-centric endeavors across data science, cloud computing, and data engineering. We deliver expert support, ensuring seamless operations, scalability, and optimization. Trust us to navigate the complexities, so you can focus on innovation and growth.</p>
           {/* onClick={() =>router.push("/managed-service#learnMore")}  */}
           <button  class="btn my-4" style={{marginLeft: "10px",border:"1px solid white",display:"flex",flexDirection:"row",color:"white"}}>Learn more  <AiOutlineArrowRight style={{marginLeft:"4px",marginTop:"5px"}} /></button>
           </div>
        </div>
    
        <div style={{padding:"0",margin:"auto 0"}} className={classes.imgInPurplediv+" col-lg-6 col-xl-6"}>
        <img   src="/assets/solutions/business-mirror.jpg" alt="Solution" />

        </div>
      
     </div>
    </div>
    <br />
    <br />

  
    
   {/* Cards for each solution */}
   <div id="learnMore"   className={classes.solutionsBox+" mx-auto justify-content-center  row text-start  p-3"} > 

      <h2  class={classes.head+" text-center my-3"}>Managed Services Offerings</h2>   
      <br />
      <br />
      <br />
      <br />
      <div className="row  text-start  " style={{margin:"0", height: "auto", borderBottom: "1px solid white" }}>
              {ManagedServicesData.map((sol) => (
                <div onClick={() => router.push(sol.link)} className={classes.eachServicesDivstyle + " col-xl-4 col-lg-4 col-12 col-sm-12 col-md-6 my-1 p-3"}>
                  {/* <CiCompass1 color="black" size={70} /> */}
                  <div style={{display:"flex",flexDirection:"row"}}>
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
      {/* <div style={{margin:"0"}}  className={classes.solnsDivstyle+" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-lg-4 p-xl-4 p-md-3 p-sm-2 p-1"}>
         <CiCompass1 class={classes.icons} color="black"  />
         <br />
          <h3 className={classes.h3style} >Managed Services 1</h3>
          <br />
          <p>Managed services is the practice of outsourcing the responsibility for maintaining, and anticipating need for, a range of processes and functions, ostensibly for the purpose of improved operations and reduced budgetary expenditures through the reduction of directly-employed staff.</p>
          <br />
          <button  ><BsFillArrowRightCircleFill color="black" size={25}/></button>
         </div>
         <div  style={{margin:"0"}}  className={classes.solnsDivstyle+" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-lg-4 p-xl-4 p-md-3 p-sm-2 p-1"}>
         <MdAdsClick class={classes.icons} color="black" />
         <br />
          <h3  className={classes.h3style}> Managed Services 2</h3>
          <br />
          <p>Technology consultants take a strategic look on how technology can help improve an organization, which includes architecting and realizing exceptional value from technology. Both help companies better connect with customers, improve resilience, and drive sustainable growth.</p>
          <br />
          <button><BsFillArrowRightCircleFill color="black" size={25}/></button>
         </div>
        
         <div style={{margin:"0"}}  className={classes.solnsDivstyle+" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-lg-4 p-xl-4 p-md-3 p-sm-2 p-1"}>
         <CiSliderVertical class={classes.icons} color="black" />
         <br />
          <h3 className={classes.h3style}>Managed Services 3</h3>
          <br />
          <p>Self Paced, instructor Led, resume review, mock interviews, Mentorship call, project internships, Corporate bootcamps, profile registration</p>
          <br />
          <button><BsFillArrowRightCircleFill color="black" size={25}/></button>
         </div> */}
         
       
      </div>
  <br />
  <br />
  <br />
  <br />
  <br />
    {/* Case Studies */}
    <h2  class={classes.head+" text-center my-3"}>Case Studies</h2>   

    <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}} variants={scrollAnimation}>
               
                  <Card.Body css={{ py: "$2" }}>
                  <img  src="/assets/solutions/CaseStudy/1.jpg" alt="1" />
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
              <motion.div style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}} variants={scrollAnimation}>
                
                
                  <Card.Body css={{ py: "$2" }}>
                  <img  src="/assets/solutions/CaseStudy/2.jpg" alt="1" />
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
              <motion.div style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}variants={scrollAnimation}>
                
                  <Card.Body css={{ py: "$2" }}>
                  <img  src="/assets/solutions/CaseStudy/3.jpg" alt="1" />
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
         
          <div class={classes.partnersBox+" mx-3"}>
          <br />
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
          <br />
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
         
    </>
  )
}
export default  ManagedServices;
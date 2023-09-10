import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Card, Grid, Text, Link, Row } from "@nextui-org/react";
import classes from "./style/solutions.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bannerImg from "./staticImages/SolutionBanner.jpg"

import {  BsFillArrowRightCircleFill } from 'react-icons/bs';

const Solutions = () => {


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

const Faqs=[
  {
    id:"faq1",
    ques:"How does staff augmentation work?",
    ans:"Staff augmentation is a strategic approach to scaling your team with specialized talent. It involves seamlessly integrating external professionals into your projects to address skill gaps or workload spikes. We carefully match your requirements with our pool of skilled experts, allowing you to extend your team's capabilities without the complexities of full-time hiring. With staff augmentation, you retain control over projects while benefiting from additional expertise, flexibility, and efficient project execution"
    },
  {
    id:"faq2",
    ques:"When is technology consulting necessary?",
    ans:"Technology consulting becomes necessary when you seek expert guidance to navigate complex technological landscapes. It's essential when considering digital transformations, implementing new solutions, or optimizing existing processes. Whether you're facing challenges, aiming for innovation, or require strategic IT insights, technology consulting helps align your business goals with tailored tech strategies. Our experts provide invaluable advice, ensuring you make informed decisions and stay competitive in today's rapidly evolving business environment."
     },
  {
    id:"faq3",
    ques:"Why do we need cloud computing?",
    ans:"Cloud computing offers numerous benefits for businesses. It enhances scalability, allowing you to effortlessly adjust resources as needed. It improves accessibility, enabling remote collaboration and access to data from anywhere. Cloud computing also reduces infrastructure costs, eliminates the need for extensive hardware, and enhances data security through advanced measures. Ultimately, it streamlines operations, accelerates innovation, and ensures a competitive edge in today's dynamic business landscape."
  }
]

  
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const SolutionData=[
    {
   title:"Managed Services",
   link:"/managed-services-and-solutions",
   details:"Experience hassle-free operations with our Managed Services solutions. We handle the complexities, ensuring your systems run smoothly while you focus on core business activities. From IT management to support, we offer tailored solutions for seamless efficiency. Elevate your business with our expert management and optimization services.",
   imgsrc:"/assets/Icon/managedservices.svg"
   },
   {
    title:"Technology Consulting",
    link:"/technology-consulting",
    details:"Navigate the ever-evolving tech landscape with our Technology Consulting services. Our seasoned experts offer strategic insights, guiding your business through digital transformations. From optimizing operations to embracing innovative solutions, we tailor strategies to meet your unique goals. Experience the power of informed decisions and unlock new dimensions of success.",
    imgsrc:"/assets/Icon/technologyconsulting.svg"
    },
    // {
    //   title:"Academy",
    //   link:"/academy",
    //   details:"We help individuals and organizations with an integrated set of interactive online learning system that provide trainers, learners, and others involved in education with information, tools, and resources to streamline professional skills and knowledge development across all functions and roles.",
    //   imgsrc:"/assets/Icon/academy.svg"
    // },
    {
      title:"Staff Augmentation",
      link:"/staff-augmentation",
      details:"Elevate your team's capabilities with Staff Augmentation. Access a pool of skilled professionals to seamlessly integrate with your projects, bolstering expertise and productivity. Our flexible solutions ensure you have the right talent, precisely when you need it. Supercharge your projects and meet your goals with our Staff Augmentation services.",
      imgsrc:"/assets/Icon/staffaugmentation.svg"
    },
    // {
    //   title:"Career Enhancement",
    //   link:"/career",
    //   details:"Explore various open jobs matching your skills and apply for your dream job to elevate your career.",
    //   imgsrc:"/assets/Icon/externaljobs.svg"
    // },

]


  return (
  <>
    <div class="py-0">
       <Image placeholder="blur" height="600px" width="1000px" layout="responsive"   src={bannerImg} alt=" Business Solution" />
       <div className={classes.bannerDetails}>
       <h1 class={classes.heading} > Business Solution</h1>
       <h2 >Combining strategy, technology, automation and people</h2>
       <p class="text-center">Thriving in a complex digital world isn’t easy. The ability to continually innovate must be at the core of your organisation. We work with you and your teams to define, structure and build the organisational and technical capabilities needed to transform into a modern digital business. </p>
       </div>
     <br />
    </div>
    
  
<div className="div">
  
        <motion.div variants={scrollAnimation}  class={classes.detailBox} style={{color:"black",backgroundColor:"rgb(251 251 249)",padding:"10px"}}>
        <br />
        <br />
         <h2  className="text-center">
            Our Offerings
          </h2>
          <br />
       
          {/* <Carousel autoPlay={true} autoFocus={true} infiniteLoop={true} showStatus="false" showIndicators="false"> */}
    
        <div className="row text-start justify-content-center " style={{ borderBottom:"1px solid white",margin:"0"}}> 
         {
          SolutionData.map((info)=>(
            <div onClick={() => window.open(info.link, "_self").focus()}   className={ classes.solDivstyle +" col-lg-5 col-sm-10 col-md-5  p-lg-3 p-sm-2 p-md-2 p-1"}>
           {/* <CiCompass1 color="black" size={40} /> */}
         <div style={{display:"flex",flexDirection:"row"}}>
           <img src={info.imgsrc} />
         
            <h3  class={classes.h3style + " ml-2 my-1"} >{info.title}</h3>
            </div>
          
           

            <p>{info.details}</p>
           
            <div class="text-end" style={{marginLeft:"auto"}} >
            <button  
 class="mx-auto"><BsFillArrowRightCircleFill color="black" size={25}/></button>

            </div>
           </div>
          ))
         }

</div> 
        </ motion.div>
        
       </div>



     
       <div className={classes.caseStudyBox+" flex flex-col w-full"}>
          <ScrollAnimationWrapper>
            <br />
            <br />
            <motion.h2
              variants={scrollAnimation}
              className="text-center my-3  leading-relaxed"
            >
              Case Studies
            </motion.h2>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
Since our inception, we have been consistently helping people and organizations with our top niche services and solutions and the goal is to keep improving the experience of our clients.              {/* Lets Discover Our Services */}
            </motion.p>
          </ScrollAnimationWrapper>
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
                      Through our cloud computing service delivery, we are helping organizations with the “the cloud” to offer faster innovation, flexible resources, and economies of scale.                     </p>
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
                      With our Data Engineering services, organizations made informed decisions in real-time. This led to faster response times, better customer service, and improved efficiency across the organization.                      </p>
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
                      We have been transforming lives through our innovative skill learning services in various ways. Along with technologies, mentorship and career guidance help people and organization achieve their upskilling goals efficiently.                       </p>
                    </Link>
                  </Card.Footer>
               
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
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
        <br />
        <br />
       
  </>
    );
};

export default Solutions;

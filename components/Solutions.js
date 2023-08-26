import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Card, Grid, Text, Link, Row } from "@nextui-org/react";
import classes from "./style/solutions.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

 
  
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const SolutionData=[
    {
   title:"Managed Services",
   link:"/managedservices",
   details:"Offload your work to us to reduce costs, improve service quality, and free your internal teams to do work that's specific to your business.",
   imgsrc:"/assets/Icon/managedservices.svg"
   },
   {
    title:"Technology Consulting",
    link:"/technologyconsulting",
    details:"We focus on working closely with organizations to strategize the best use of information technology in achieving their business objectives",
    imgsrc:"/assets/Icon/technologyconsulting.svg"
    },
    {
      title:"Academy",
      link:"/academy",
      details:"We help individuals and organizations with an integrated set of interactive online learning system that provide trainers, learners, and others involved in education with information, tools, and resources to streamline professional skills and knowledge development across all functions and roles.",
      imgsrc:"/assets/Icon/academy.svg"
    },
    {
      title:"Staff Augmentation",
      link:"/staffaugmentation",
      details:"Our staff augmentation offering allows organizations not only to focus on the growth and development of their business but also supplements it by giving them access to skilled and experienced manpower when its needed.",
      imgsrc:"/assets/Icon/staffaugmentation.svg"
    },
    {
      title:"Career Enhancement",
      link:"/career",
      details:"Explore various open jobs matching your skills and apply for your dream job to elevate your career.",
      imgsrc:"/assets/Icon/externaljobs.svg"
    },

]


  return (
  <>
    <div class="py-0">
       <Image height="600px" width="1000px" layout="responsive"   src="/assets/solutions/SolutionBanner.jpg" alt="Solution" />
       <div className={classes.bannerDetails}>
       <h1 class={classes.heading} >Solutions</h1>
       <h3 >Combining strategy, technology, automation and people</h3>
       <p class="text-center">Thriving in a complex digital world isn’t easy. The ability to continually innovate must be at the core of your organisation. We work with you and your teams to define, structure and build the organisational and technical capabilities needed to transform into a modern digital business. </p>
       </div>
     <br />
    </div>
    
  
<div className="div">
  
        <motion.div variants={scrollAnimation}  class={classes.detailBox} style={{color:"black",backgroundColor:"rgb(251 251 249)",padding:"10px"}}>
        <br />
        <br />
         <h1  className="text-center">
            Our Offerings
          </h1>
          <br />
       
          {/* <Carousel autoPlay={true} autoFocus={true} infiniteLoop={true} showStatus="false" showIndicators="false"> */}
    
        <div className="row text-start justify-content-center " style={{ borderBottom:"1px solid white",margin:"0"}}> 
         {
          SolutionData.map((info)=>(
            <div onClick={() => window.open(info.link, "_self").focus()}   className={ classes.solDivstyle +" col-lg-3 col-sm-5 col-md-3 col-5 p-lg-3 p-sm-2 p-md-2 p-1"}>
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
            <motion.h1
              variants={scrollAnimation}
              className="text-center my-3  leading-relaxed"
            >
              Case Studies
            </motion.h1>
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
          <h1 class="text-center mt-5 mb-4"  >Partners & Customers</h1>
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
        <br />
        <br />
       
  </>
    );
};

export default Solutions;

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
import {  MdAdsClick } from 'react-icons/md';
import {  CiCompass1 } from 'react-icons/ci';
import {  CiSliderVertical } from 'react-icons/ci';
const Solutions = () => {


  const logos=[ { id: 1, image: "/assets/logo4.png" },
  { id: 2, image: "/assets/logo3.png" },
  { id: 3, image: "/assets/logo4.png" },
  { id: 4, image: "/assets/logo7.png" },
  { id: 5, image: "/assets/logo6.png" },
  { id: 6, image: "/assets/logo4.png" },
  { id: 7, image: "/assets/logo3.png" },
  { id: 8, image: "/assets/logo6.png" },
  { id: 9, image: "/assets/logo7.png" },
  { id: 10, image: "/assets/logo4.png" }

];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
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

  const h3style={
    fontSize:"20px",
    color:"black",
    margin:"10px auto"
  }
  
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const SolutionData=[
    {
   title:"Managed Services",
   link:"/manageservices",
   details:"Practice of outsourcing the responsibility."
   },
   {
    title:"Technology Consulting",
    link:"/technologyconsulting",
    details:"Technology consultanting  can help improve an organization."
    },
    {
      title:"Academy",
      link:"/academy",
      details:"Self Paced, instructor Led and many more."
    },
    {
      title:"Staff Augmentation",
      link:"/staffaugmentation",
      details:"Use to respond to the business objectives."
    },
    {
      title:"External Jobs",
      link:"/externaljobs",
      details:"Different job lists for  job seekers."
    },

]


  return (
  <>
    <div class="py-0">
       <img style={{height:"110vh",width:"100vw"}}  src="/assets/pexels.jpg" alt="Solution" />
       <div style={{width:"800px", position :"relative", bottom:"50px",margin:"0 auto",backgroundColor:"white"}}>
       <h1 class={classes.heading} >Solutions</h1>
       <h3 style={{fontWeight:"500",backgroundColor:"white",padding:"10px",margin:"12px auto",fontSize:"1.4rem",width:"625px",textAlign:"center"}}>Combining strategy, technology, automation and people</h3>
       <p class="text-center">Thriving in a complex digital world isn’t easy. The ability to continually innovate must be at the core of your organisation. We work with you and your teams to define, structure and build the organisational and technical capabilities needed to transform into a modern digital business. </p>
       </div>
     <br />
    </div>
    
    {/* // <div className="grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-10 py-8 lg:py-12 px-6 sm:px-0 lg:px-10">
    //   {data.solution.map((solution, index) => (

    //     <div class="max-w-sm rounded overflow-hidden shadow-lg">
    //       <img class="w-full" src={solution.src} alt="Mountain" />
    //       <div class="px-6 py-4">
    //         <div class="font-bold text-xl mb-2">{solution.title}</div>
    //         <p class="text-gray-700 text-base">
    //           {solution.description}
    //         </p>
    //       </div>
    //       {/* <div class="px-6 pt-4 pb-2">
    //     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    //     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    //     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    //   </div> 
       </div>

    //   ))}
     </div> */}
  
<div className="div">
  
        <motion.div variants={scrollAnimation}  style={{color:"black",backgroundColor:"rgb(251 251 249)",padding:"10px"}}>
        <br />
        <br />
         <h1 style={{fontSize:"30px"}} className="text-center">
            Our Offerings
          </h1>
          <br />
       
          {/* <Carousel autoPlay={true} autoFocus={true} infiniteLoop={true} showStatus="false" showIndicators="false"> */}
    
        <div className="row text-start justify-content-center " style={{ borderBottom:"1px solid white",margin:"0"}}> 
         {
          SolutionData.map((info)=>(
            <div onClick={() => window.open(info.link, "_self").focus()}   className={ classes.solDivstyle +" col-3 p-3"}>
           <CiCompass1 color="black" size={40} />
          
            <h3  style={h3style} >{info.title}</h3>
            
            <p>{info.details}</p>
           
            <div class="text-end" style={{marginLeft:"auto"}} >
            <button  
 class="mx-auto"><BsFillArrowRightCircleFill color="black" size={25}/></button>

            </div>
           </div>
          ))
         }
        {/* <div onClick={() => window.open("/manageservices", "_self").focus()}   className={ classes.solDivstyle +" col-3 p-3"}>
           <CiCompass1 color="black" size={40} />
          
            <h3  style={h3style} >Managed Services</h3>
            
            <p>Practice of outsourcing the responsibility.</p>
           
            <div class="text-end" style={{marginLeft:"auto"}} >
            <button  
 class="mx-auto"><BsFillArrowRightCircleFill color="black" size={25}/></button>

            </div>
           </div>
           <div onClick={() => window.open("/technologyconsulting", "_self").focus()}  className={ classes.solDivstyle +" col-3 p-3"}>
           <MdAdsClick color="black" size={40} />
           
            <h3  style={h3style}> Technology Consulting</h3>
        
            <p>Technology consultanting  can help improve an organization. </p>
          
            <div class="text-end" style={{marginLeft:"auto"}} >
            <button class="mx-auto"><BsFillArrowRightCircleFill color="black" size={25}/></button>

            </div>
           </div>
          
           <div onClick={() => window.open("/academy", "_self").focus()} className={ classes.solDivstyle +" col-3 p-3"}>
           <CiSliderVertical color="black" size={40} />
           
            <h3 style={h3style}>Academy</h3>
           
            <p>Self Paced, instructor Led and many more.</p>
            <div class="text-end" style={{marginLeft:"auto"}} >
            <button onClick={() => window.open("/academy", "_self").focus()} class="mx-auto"><BsFillArrowRightCircleFill color="black" size={25}/></button>

            </div>
           </div>
           
         
          
        </div>


        <div className="row justify-content-center text-start mt-1"> 
      
      <div onClick={() => window.open("/staffaugmentation", "_self").focus()}  className={ classes.solDivstyle +" col-3 p-3"}>
         <CiCompass1 color="black" size={40} />
         
          <h3 style={h3style}>Staff Augmentation</h3>
       
          <p> Use to respond to the business objectives. </p>
          
          <div class="text-end" style={{marginLeft:"auto"}} >
            <button  class="mx-auto"><BsFillArrowRightCircleFill color="black" size={25}/></button>

            </div>
         </div>
         
        
         <div onClick={() => window.open("/externaljobs", "_self").focus()} className={ classes.solDivstyle +" col-3 p-3"}>
         <CiSliderVertical color="black" size={40} />
      
          <h3 style={h3style}>External Jobs</h3>
         
          <p>Different job lists for  job seekers.</p>
       
          <div class="text-end" style={{marginLeft:"auto"}} >
            <button  class="mx-auto"><BsFillArrowRightCircleFill color="black" size={25}/></button>

            </div>
         </div>
         
       
       
 
  
{/* </Carousel> */}
</div> 
        </ motion.div>
        
       </div>



       
       <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <br />
            <br />
            <motion.h1
              style={{fontSize:"30px"}}
              variants={scrollAnimation}
              className="text-center my-3 text-2xl sm:text-3xl lg:text-4xl leading-relaxed"
            >
              Case Studies
            </motion.h1>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              With a track-record gained over 23 years, we are trusted by organisations, big and small, from a wide range of industries and stages of growth.
              {/* Lets Discover Our Services */}
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}} variants={scrollAnimation}>
               
                  <Card.Body css={{ py: "$2" }}>
                  <img  src="/assets/learn1.jpg" alt="1" />
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
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}} variants={scrollAnimation}>
                
                
                  <Card.Body css={{ py: "$2" }}>
                  <img  src="/assets/learn2.jpg" alt="1" />
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
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}variants={scrollAnimation}>
                
                  <Card.Body css={{ py: "$2" }}>
                  <img  src="/assets/learn3.jpg" alt="1" />
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
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div class="mx-3">
          <br />
          <br />
          <h1 class="text-center mt-5 mb-4" style={{fontSize:"30px"}} >Partners & Customers</h1>
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
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      
    >
      {logos.map((logo) => (
        <img style={{height:"120px",width:"150px",margin:"0",objectFit:"contain"}} key={logo.id} src={logo.image} alt={`Logo ${logo.id}`} />
    
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

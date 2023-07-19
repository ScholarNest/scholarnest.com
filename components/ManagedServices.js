import React,{ useMemo } from 'react'
import { useRouter } from "next/router";
import classes from "./style/solutions.module.css";
import {  AiOutlineArrowRight} from 'react-icons/ai';
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import {  BsFillArrowRightCircleFill } from 'react-icons/bs';
import {  MdAdsClick } from 'react-icons/md';
import {  CiCompass1 } from 'react-icons/ci';
import {  CiSliderVertical } from 'react-icons/ci';
import { Card, Grid, Text, Link, Row } from "@nextui-org/react";
const ManagedServices = () => {
  const router = useRouter();
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const ManagedServicesData=[
    {
      title: "Managed Services 1",
      about: "Managed services is the practice of outsourcing the responsibility for maintaining, and anticipating need for, a range of processes and functions, ostensibly for the purpose of improved operations and reduced budgetary expenditures through the reduction of directly-employed staff.",
      link: "#",
      imgsrc:"/assets/Icon/managed services-70 px.svg"
    },
    {
      title: "Managed Services 2",
      about: "Managed services is the practice of outsourcing the responsibility for maintaining, and anticipating need for, a range of processes and functions, ostensibly for the purpose of improved operations and reduced budgetary expenditures through the reduction of directly-employed staff.",
      link: "#",
      imgsrc:"/assets/Icon/technology consulting-70 px.svg"
    },
    {
      title: "Managed Services 3",
      about: "Managed services is the practice of outsourcing the responsibility for maintaining, and anticipating need for, a range of processes and functions, ostensibly for the purpose of improved operations and reduced budgetary expenditures through the reduction of directly-employed staff.",
      link: "#",
      imgsrc:"/assets/Icon/staff augmentation-70 px.svg"
    },

]
  return (
    <>
    <div>
       <img class={classes.bannerImg}   src="/assets/solutions/ManagedServices.jpg" alt="Managed Services" />
       <div className={classes.bannerDetails}>
       <h1 class={classes.heading} >Managed Services</h1>
      
       </div>
       <p class={classes.det+" text-center"}>Managed services is the practice of outsourcing the responsibility for maintaining, and anticipating need for, a range of processes and functions, ostensibly for the purpose of improved operations and reduced budgetary expenditures through the reduction of directly-employed staff.[1][2][3] It is an alternative to the break/fix or on-demand outsourcing model where the service provider performs on-demand services and bills the customer only for the work done </p>
     <br />
     <div style={{padding:"0",margin:"auto 0"}} className="row">
        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12" style={{backgroundColor:"purple"}}>
         
            <h2 class={classes.caseheading}>How do we help you with our managed services </h2>
           <h3 class={classes.subheading}>Automation enabled releases into production environments with the click of a button </h3>
            
           <button  onClick={() =>router.push("/manageservices#learnMore")} class="btn my-4" style={{marginLeft: "10%",border:"1px solid white",display:"flex",flexDirection:"row",color:"white"}}>Learn more  <AiOutlineArrowRight style={{marginLeft:"4px",marginTop:"5px"}} /></button>
          
        </div>
        <div style={{padding:"0",margin:"auto 0"}} className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12">
        <img  src="/assets/solutions/business-mirror.jpg" alt="Solution" />

        </div>
     </div>
    </div>
    <br />
    <br />
    <br />
    <br />
  
    
   {/* Cards for each solution */}
   <div id="learnMore"   className={classes.solutionsBox+" mx-auto justify-content-center  row text-start  p-3"} > 

      <h1  class={classes.head+" text-center my-3"}>Offerings</h1>   
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
    <h1  class={classes.head+" text-center my-3"}>Case Studies</h1>   

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
          <br />
          <br />
          <br />
          <br />
         
    </>
  )
}
export default  ManagedServices;
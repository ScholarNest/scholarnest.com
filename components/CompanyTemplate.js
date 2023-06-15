import React from 'react';
import classes from "./style/company.module.css";
import { Card, Grid, Text, Button, Row,Link } from "@nextui-org/react";
import { useEffect,useMemo } from 'react';
import lozad from 'lozad';
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
const CompanyTemplate = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);


  return (

    <>
      <div class="banner">
        <img class="banner-image" src="/assets/wave.svg" alt="Banner Image" />
        <h1 class={classes.heading}>Company</h1>
        {/* <hr /> */}
      </div>
      <div style={{ margin: "0", backgroundColor: "rgb(251 251 249)" }} className="row">
       
        <h1 style={{ fontSize: "20px", fontWeight: "bold", margin: "15px 0" }}>About ScholarNest 
        </h1>

        <div className="col-6 col-sm-12 col-md-6 p-3">

          ScholarNest is a technology training company that transforms careers by offering verified, in-depth skill development programs on modern technologies.
          <br />
          <br />
          Our mission is to provide the verified, in-depth technical skill development and certification programs for the most competitive skills of current times. Our learning programs are flexible, economic, and available to all. We help professionals to expand their knowledge, acquire new skills and achieve success in their dream careers. We are here to simplify the technical learning process and stimulate career growth.
          <br />
          <br />
          We are also committed to helping experienced professionals in sharing their knowledge. We help industry veterans design, create, and publish learning content and courses. We are creating a shared economy to generate an alternate income source and help others grow in their career.
        </div>
        <div className="relative col-6 col-sm-12 col-md-6   my-auto p-3">
        <Image
              src="/assets/about.jpeg"     
              alt="Description of the image"
              layout="responsive"
              height={'80%'}
              width={'135%'}
              
              
             
            />
       
        {/* <Image layout='responsive' height={300} width={500} src="/assets/about.jpeg" alt="About" /> */}


      
        
        </div>
{/*         
          <Row justify="flex-end">

            <Button size="sm">@ScholarNest.com</Button>
          </Row>
   */}
      </div>
      <br />
     <br />
      <div style={{ margin: "0" }} className="row">
        <h1 style={{ fontSize: "20px", fontWeight: "bold", margin: "15px 0" }}>Approach 
        </h1>
        <div className="col-6 col-sm-12 col-md-6  my-auto p-3">
          <img style={{ width: "100%" }}  alt="" />
          <Image
              src="/assets/cloudcomputing.jpg"    
              alt="Approach"
              layout="responsive"
              height={'80%'}
              width={'135%'}
              
              
             
            />
        </div>
        <div className="col-6 col-sm-12 col-md-6 p-3">
        Problem-solving in business is defined as implementing processes that reduce or remove obstacles that are preventing you or others from accomplishing operational and strategic business goals.
   <br />
   <br />
In business, a problem is a situation that creates a gap between the desired and actual outcomes. In addition, a true problem typically does not have an immediately obvious resolution.
<br />
   <br />
   Understanding the importance of problem-solving skills in the workplace will help you develop as a leader. Problem-solving skills will help you resolve critical issues and conflicts that you come across.
   Learning how to solve business problems takes time and effort. Though some people appear to have been born with superior problem-solving skills, great problem solvers usually have practiced and refined their abilities
         </div>

        {/* <Card.Footer>
          <Row justify="flex-end">

            <Button size="sm">@ScholarNest.com</Button>
          </Row>
        </Card.Footer> */}
      </div>
      <br />
     <br />
      <div style={{ margin: "0", backgroundColor: "rgb(251 251 249)" }} className="row">
        <h1 style={{ fontSize: "20px", fontWeight: "bold", margin: "15px 0" }}>Portfolio 
        </h1>

        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
       
           
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
      </div>
      <br />
      <br />
      <br />
     <br />
      <div style={{ margin: "5px"}} className="row justify-center">
        <h1 style={{ fontSize: "20px", fontWeight: "bold", margin: "20px 0" }}>Tech Expertise 
        </h1>
        
        <img  style={{height:"100px",width:"120px"}} src="/assets/Icon/bigdata.webp" alt="" />
        <img style={{height:"100px", width:"200px"}} src="/assets/Icon/hadoop1.svg" alt="" />
        
        <img style={{height:"100px", width:"150px"}} src="/assets/Icon/sql.svg" alt="" />
        <img style={{height:"100px", width:"150px"}}  src="/assets/Icon/dataengine.webp" alt="" />
        <img style={{height:"100px", width:"180px"}}src="/assets/Icon/apache.png" alt="" />
        <img style={{height:"150px", width:"220px"}} src="/assets/Icon/pyspark.webp" alt="" />
        <img style={{height:"130px", width:"210px"}}src="/assets/Icon/databricks.png" alt="" />
        <img style={{height:"150px", width:"150px"}} src="/assets/Icon/python.svg" alt="" />
      </div>
     <br />
     <br />
     <br />
     <br />
    
    </>

  )
}
export default CompanyTemplate;
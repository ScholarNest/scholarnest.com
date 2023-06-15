import React from 'react'
import { useRouter } from "next/router";
import classes from "./style/solutions.module.css";
import {  AiOutlineArrowRight} from 'react-icons/ai';
import { motion } from "framer-motion";
import {  BsFillArrowRightCircleFill } from 'react-icons/bs';
import {  MdAdsClick } from 'react-icons/md';
import {  CiCompass1 } from 'react-icons/ci';
import {  CiSliderVertical } from 'react-icons/ci';
import { Card, Grid, Text, Link, Row } from "@nextui-org/react";
const ManageService = () => {
  const router = useRouter();

  const h3style={
    fontSize:"20px",
    fontWeight:"bold-500",
    color:"black"
  }
  const solDivstyle={
    backgroundColor:"white",
    cursor:"pointer",
    opacity:"0.7", 
    borderRadius:"10px",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
   
  }
  return (
    <>
    <div>
       <img style={{height:"110vh",width:"100vw"}}  src="/assets/manage_services.jpg" alt="Solution" />
       <div style={{width:"500px", position :"relative", bottom:"50px",margin:"0 auto",backgroundColor:"white"}}>
       <h1 class={classes.heading} >Managed Services</h1>
      
       </div>
       <p class="text-center" style={{position:"relative",bottom:"40px",margin:"auto 3vw"}}>Managed services is the practice of outsourcing the responsibility for maintaining, and anticipating need for, a range of processes and functions, ostensibly for the purpose of improved operations and reduced budgetary expenditures through the reduction of directly-employed staff.[1][2][3] It is an alternative to the break/fix or on-demand outsourcing model where the service provider performs on-demand services and bills the customer only for the work done </p>
     <br />
     <div style={{padding:"0",margin:"auto 0"}} className="row">
        <div className="col-6" style={{backgroundColor:"purple"}}>
         
            <h2 class={classes.caseheading}>How do we help you with our managed services </h2>
           <h3 class={classes.subheading}>Automation enabled releases into production environments with the click of a button </h3>
            
           <button  onClick={() =>router.push("/manageservices#learnMore")} class="btn my-4" style={{marginLeft: "10%",border:"1px solid white",display:"flex",flexDirection:"row",color:"white"}}>Learn more  <AiOutlineArrowRight style={{marginLeft:"4px",marginTop:"5px"}} /></button>
          
        </div>
        <div style={{padding:"0",margin:"auto 0"}} className="col-6">
        <img  src="/assets/pexels.jpg" alt="Solution" />

        </div>
     </div>
    </div>
    <br />
    <br />
    <br />
    <br />
  
    
   {/* Cards for each solution */}
   <div id="learnMore"   className="mx-auto px-4 row text-start  " style={{height:"400px", borderBottom:"1px solid white"}}> 

      <h1  style={{fontSize:"30px"}} class="text-center my-3">Offerings</h1>   
    
     
      <div   style={solDivstyle}  className="col-4 p-3">
         <CiCompass1 color="black" size={70} />
         <br />
          <h3  style={h3style} >Managed Services 1</h3>
          <br />
          <p>Managed services is the practice of outsourcing the responsibility for maintaining, and anticipating need for, a range of processes and functions, ostensibly for the purpose of improved operations and reduced budgetary expenditures through the reduction of directly-employed staff.</p>
          <br />
          <button  ><BsFillArrowRightCircleFill color="black" size={25}/></button>
         </div>
         <div  style={solDivstyle} className="col-4 p-3">
         <MdAdsClick color="black" size={70} />
         <br />
          <h3  style={h3style}> Managed Services 2</h3>
          <br />
          <p>Technology consultants take a strategic look on how technology can help improve an organization, which includes architecting and realizing exceptional value from technology. Both help companies better connect with customers, improve resilience, and drive sustainable growth.</p>
          <br />
          <button><BsFillArrowRightCircleFill color="black" size={25}/></button>
         </div>
        
         <div style={solDivstyle} className="col-4 p-3">
         <CiSliderVertical color="black" size={70} />
         <br />
          <h3 style={h3style}>Managed Services 3</h3>
          <br />
          <p>Self Paced, instructor Led, resume review, mock interviews, Mentorship call, project internships, Corporate bootcamps, profile registration</p>
          <br />
          <button><BsFillArrowRightCircleFill color="black" size={25}/></button>
         </div>
         
       
      </div>
  <br />
  <br />
  <br />
  <br />
  <br />
    {/* Case Studies */}
    <h1 style={{fontSize:"30px"}} class="text-center my-3">Case Studies</h1>   

    <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">

              <motion.div style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}} >
               
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
           
         
              <motion.div style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
                
                
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
            
            
              <motion.div style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
                
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
          
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
         
    </>
  )
}
export default  ManageService ;
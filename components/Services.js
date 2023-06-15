import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Card, Grid, Text, Link } from "@nextui-org/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {  BsFillArrowRightCircleFill } from 'react-icons/bs';
import {  BsFillArrowLeftCircleFill } from 'react-icons/bs';
import {  MdAdsClick } from 'react-icons/md';
import {  CiCompass1 } from 'react-icons/ci';
import {  CiSliderVertical } from 'react-icons/ci';
import { useRouter } from "next/router";


const Services = () => {
  const router = useRouter();

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const cardWidth = 1000;
  const cardHeight = 553;
  const h3style={
    fontSize:"20px",
    fontWeight:"bold",
    color:"black"
  }
  const solDivstyle={
    backgroundColor:"white",
    cursor:"pointer",
    opacity:"0.7", 
    borderRadius:"10px",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
   
  }
  const solutions =[
    {title:"Managed Services",
     about:"Managed services is the practice of outsourcing the responsibility for maintaining, and anticipating need for, a range of processes and functions, ostensibly for the purpose of improved operations and reduced budgetary expenditures through the reduction of directly-employed staff." ,
     link:"/manageservices",
     logo:<CiCompass1 color='black' size={70} />
    },
    {title:"Technology Consulting",
    about:"Technology consultants take a strategic look on how technology can help improve an organization, which includes architecting and realizing exceptional value from technology. Both help companies better connect with customers, improve resilience, and drive sustainable ." ,
    link:"/technologyconsulting" ,
    logo: <MdAdsClick color="black" size={70} />

   },
   {title:"Academy",
    about:"Self Paced, instructor Led, resume review, mock interviews, Mentorship call, project internships, Corporate bootcamps, profile registration" ,
    link:"/academy" ,
    logo: <CiSliderVertical color="black" size={70} />

   },
   {title:"Staff Augmentation",
    about:"Staff augmentation is an outsourcing strategy that is used to staff a project and respond to the business objectives. The technique consists of evaluating the existing staff and then determining which additional skills are required." ,
    link:"/staffaugmentation" ,
    logo:<CiCompass1 color='black' size={70} />

   },
   {title:"External Jobs",
    about:"Here providing different different job lists for other companies and application submission form for job seekers." ,
    link:"/externaljobs" ,
    logo: <CiSliderVertical color="black" size={70} />

   },
  ]

  
  return (
    <>
     <div className="div">
        <motion.div variants={scrollAnimation}  style={{backgroundColor:"rgb(251 251 249)",padding:"10px"}}>
         <br />
         <br />
          <h1 style={{fontSize:"30px"}} className="text-center">
            Solutions
          </h1>
          <br />
          <h3 style={{width:"65%",margin:"auto",fontSize:"20px"}} className="text-center ">With Expertise in Digital, Engineering and cloud, We deliver Solutions that fulfill the traditional, transformational and future needs of clients across the globe. </h3>
          <div style={{width:"90%",margin:"0 auto"}} className="my-4 text-light">
          {/* <Carousel autoPlay={true} autoFocus={true} infiniteLoop={true} showStatus="false" showIndicators="false"> */}
    
        <div className="row  text-start  " style={{height:"auto", borderBottom:"1px solid white"}}> 
        {solutions.map((sol) => (
         <div onClick={() => router.push(sol.link)}   style={solDivstyle}  className="col-4 my-1 p-3">
         {/* <CiCompass1 color="black" size={70} /> */}
         {sol.logo}
         <br />
          <h3  style={h3style} >{sol.title}</h3>
          <br />
          <p>{sol.about}</p>
          <br />
          <button  ><BsFillArrowRightCircleFill color="black" size={25}/></button>
         </div>    
        ))}
     
        </div> 

  
{/* </Carousel> */}
</div>
        </ motion.div>
        
       </div>
    <div
      className="w-full pt-12"
      id="pricing"
    >
      {/* <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-0 mx-auto flex flex-col w-full text-center justify-center">
        
         Case Study 
        <div style={{backgroundColor:"white !important"}} className=" flex flex-col w-full">
          <ScrollAnimationWrapper>
           <br />
           <motion.h1
              variants={scrollAnimation}
            style={{fontSize:"30px",color:"black"}}
            >
              Case Studies
            </motion.h1>
        
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              {/* Lets Discover Our Services 
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div style={{boxShadow:"none"}}variants={scrollAnimation}>
                <Card css={{ p: "$6", mw: "400px" }}>
                  <Card.Header>
                    <img
                      alt="nextui logo"
                      src="/assets/stats.png"
                      width="34px"
                      height="34px"
                    />
                    <Grid.Container css={{ pl: "$6" }}>
                      <Grid xs={12}>
                        <Text h4 css={{ lineHeight: "$xs" }}>
                          Next UI
                        </Text>
                      </Grid>
                      <Grid xs={12}>
                        <Text css={{ color: "$accents8" }}>nextui.org</Text>
                      </Grid>
                    </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{ py: "$2" }}>
                    <Text>
                      Make beautiful websites regardless of your design
                      experience.
                    </Text>
                  </Card.Body>
                  <Card.Footer>
                    <Link
                      icon
                      color="primary"
                      target="_blank"
                      href="https://github.com/nextui-org/nextui"
                    >
                      Visit source code on GitHub.
                    </Link>
                  </Card.Footer>
                </Card>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div style={{boxShadow:"none"}} variants={scrollAnimation}>
                <Card css={{ p: "$6", mw: "400px" }}>
                  <Card.Header>
                    <img
                      alt="nextui logo"
                      src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                      width="34px"
                      height="34px"
                    />
                    <Grid.Container css={{ pl: "$6" }}>
                      <Grid xs={12}>
                        <Text h4 css={{ lineHeight: "$xs" }}>
                          Next UI
                        </Text>
                      </Grid>
                      <Grid xs={12}>
                        <Text css={{ color: "$accents8" }}>nextui.org</Text>
                      </Grid>
                    </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{ py: "$2" }}>
                    <Text>
                      Make beautiful websites regardless of your design
                      experience.
                    </Text>
                  </Card.Body>
                  <Card.Footer>
                    <Link
                      icon
                      color="primary"
                      target="_blank"
                      href="https://github.com/nextui-org/nextui"
                    >
                      Visit source code on GitHub.
                    </Link>
                  </Card.Footer>
                </Card>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div style={{boxShadow:"none"}}variants={scrollAnimation}>
                <Card css={{ p: "$6", mw: "400px" }}>
                  <Card.Header>
                    <img
                      alt="nextui logo"
                      src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                      width="34px"
                      height="34px"
                    />
                    <Grid.Container css={{ pl: "$6" }}>
                      <Grid xs={12}>
                        <Text h4 css={{ lineHeight: "$xs" }}>
                          Next UI
                        </Text>
                      </Grid>
                      <Grid xs={12}>
                        <Text css={{ color: "$accents8" }}>nextui.org</Text>
                      </Grid>
                    </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{ py: "$2" }}>
                    <Text>
                      Make beautiful websites regardless of your design
                      experience.
                    </Text>
                  </Card.Body>
                  <Card.Footer>
                    <Link
                      icon
                      color="primary"
                      target="_blank"
                      href="https://github.com/nextui-org/nextui"
                    >
                      Visit source code on GitHub.
                    </Link>
                  </Card.Footer>
                </Card>
              </motion.div>
            </ScrollAnimationWrapper>
          
          </div>
        </div>
       

      </div> */}

    </div>
{/*     
    <br />
    <br /> */}
    {/* <motion.div className="p-3" style={{backgroundColor:"rgb(251 251 249)",opacity:"0.8"}} >
      <br />
      <br />
      <h2 style={{textAlign:"center",fontSize:"30px"}}>ScholarNest by the numbers</h2>
      <br />
      <br />
      <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-2" style={{broderRadius:"50%",height:"200px"}}>
          <div style={{fontWeight:"bold",width:"150px",height:"150px",borderRadius:"50%",backgroundColor:"white",textAlign:"center",border:"1px solid blue"}}> 
         
          <h3 style={{color:"blue",fontSize:"25px",marginTop:"30%"}}>50+</h3>
          <p style={{textAlign:"center",width:"85px",margin:"auto",fontSize:"13px"}}>Data Experts</p>
          
          </div>
      </div>
      <div className="col-2" style={{broderRadius:"50%"}}>
          <div style={{fontWeight:"bold",width:"150px",height:"150px",borderRadius:"50%",backgroundColor:"white",textAlign:"center",border:"1px solid blue"}}> 
          <h3 style={{color:"blue",fontSize:"25px",marginTop:"30%"}}>5+</h3>
          <p style={{width:"85px",margin:"auto",fontSize:"13px"}}>Continents</p>
          </div>
      </div>
      <div className="col-2" style={{broderRadius:"50%"}}>
          <div style={{fontWeight:"bold",width:"150px",height:"150px",borderRadius:"50%",backgroundColor:"white",textAlign:"center",border:"1px solid blue"}}>
          <h3 style={{color:"blue",fontSize:"25px",marginTop:"30%"}}>50+</h3>
          <p style={{width:"85px",margin:"auto",fontSize:"13px"}}>Clients</p>
          </div>
      </div>
      <div className="col-2" style={{broderRadius:"50%"}}>
          <div style={{fontWeight:"bold",width:"150px",height:"150px",borderRadius:"50%",backgroundColor:"white",textAlign:"center",border:"1px solid blue"}}>
          <h3 style={{color:"blue",fontSize:"25px",marginTop:"30%"}}>$2bn+</h3>
          <p style={{width:"85px",margin:"auto",fontSize:"13px"}}>Buisness Impact</p>

          </div>
      </div>
    
</div>
      </div>
    
    </motion.div> */}
     {/* <div style={{backgroundColor:"#E5E4E2"}} className="container my-4 py-4 px-2"> */}
     {/* <br /> */}
     <br />
     <div style={{width:"900px",margin:"auto auto"}} ><h1 class="text-center my-2" style={{fontSize:"30px"}} >What our customers say</h1>
     <br />
     <Carousel
      //  renderArrowPrev={(onClickHandler, hasNext, label) =>
      //   hasNext && (
      //     <button type="button" onClick={onClickHandler} title={label} style={{ position:"relative",top:"180px" }}>
      //      <BsFillArrowLeftCircleFill size="30" />
      //     </button>
      //   )
      // }
      // renderArrowNext={(onClickHandler, hasNext, label) =>
      //   hasNext && (
      //     <button type="button" onClick={onClickHandler} title={label} style={{ position:"relative",left:"900px" }}>
      //      <BsFillArrowRightCircleFill size="30"/>
      //     </button>
      //   )
      // }
     showThumbs={true} dynamicHeight={false} infiniteLoop={true} showStatus={false} showIndicators={false}>
      <div style={{border:"1px groove"}} >
        <div style={{margin:"0 auto",padding:"10px"}} className="mx-auto">
        <img style={{height:"100px",width:"100px",borderRadius:"50%"}} src="/assets/user.jpg"/> 
        <div style={{width:"875px",margin:"2px auto"}}>
        <p style={{margin:"5px"}} > <strong style={{fontSize:"1.5rem",color:"black"}}>❝ </strong>It feels like they are part of our team. While the project is ongoing, the results thus far have met the expectations of the internal team. NashTech utilises best practices to achieve results and successfully integrates with the internal team. The team is dedicated, hard-working, and knowledgeable.
<strong style={{fontSize:"1.5rem", color:"black"}}> ❞</strong></p>
     </div>
         <h2 className="text-center my-2 text-dark fw-bold">Jeff Dutton</h2>
         <p class="mb-3">Infosight Data platform architect</p>

        </div>
        

        
      </div> 
      <div style={{border:"1px groove"}}>
        <div style={{margin:"0 auto",padding:"10px"}} className="mx-auto">
        <img style={{height:"100px",width:"100px",borderRadius:"50%"}} src="/assets/user2.png"/> 
        <div style={{width:"875px",margin:"2px auto"}}>
        <p   > <strong style={{fontSize:"1.5rem",color:"black"}}>❝ </strong>Working with Vietnam has been a real pleasure and a real experience. Vietnam doesn’t feel like an offshore operation – the team work as one. It’s been comforting to know that when you have your back to the wall, as you do with a project this size, NashTech are standing there beside us not walking away… they are a true partner.
<strong style={{fontSize:"1.5rem", color:"black"}}> ❞</strong></p>
</div>
         <h2 className="text-center my-2 text-dark fw-bold">Angela Parick</h2>
         <p class="mb-3">Director of Systems Delivery, Atlanta</p>
     
        </div>
       
      </div> 
</Carousel>      
</div>
<br />
<ScrollAnimationWrapper className="w-full">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div style={{backgroundColor:"rgb(251 251 249)"}}  className=" rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Connect with us to <br /> Collaborate!
                  </h5>
                  <p>Lets discover the digital world with us.</p>
                </div>
                <button className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none"} onClick={() => router.push("/contactUs")}>Get Started</button>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
  <br />


     {/* </div> */}
      </>
  );
};

export default Services;

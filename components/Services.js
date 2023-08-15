import React, { useMemo } from "react";
import Image from "next/image";

import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Card, Grid, Text, Link } from "@nextui-org/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import { useRouter } from "next/router";
import classes from "./style/services.module.css";


const Services = () => {
  const router = useRouter();

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const cardWidth = 1000;
  const cardHeight = 553;


  const solutions = [
    {
      title: "Managed Services",
      about: "Managed services is the practice of outsourcing the responsibility for maintaining, and anticipating need for, a range of processes and functions, ostensibly for the purpose of improved operations and reduced budgetary expenditures through the reduction of directly-employed staff.",
      link: "/managedservices",
      imgsrc:"/assets/Icon/managed services-70 px.svg"
    },
    {
      title: "Technology Consulting",
      about: "Technology consultants take a strategic look on how technology can help improve an organization, which includes architecting and realizing exceptional value from technology. Both help companies better connect with customers, improve resilience, and drive sustainable .",
      link: "/technologyconsulting",
      imgsrc:"/assets/Icon/technology consulting-70 px.svg"
    },
    {
      title: "Academy",
      about: "Self Paced, instructor Led, resume review, mock interviews, Mentorship call, project internships, Corporate bootcamps, profile registration",
      link: "/academy",
      imgsrc:"/assets/Icon/academy-70 px.svg"
    },
    {
      title: "Staff Augmentation",
      about: "Staff augmentation is an outsourcing strategy that is used to staff a project and respond to the business objectives. The technique consists of evaluating the existing staff and then determining which additional skills are required.",
      link: "/staffaugmentation",
      imgsrc:"/assets/Icon/staff augmentation-70 px.svg"
    },
    {
      title: "Career Enhancement",
      about: "Here providing different different job lists for other companies and application submission form for job seekers.",
      link: "/externaljobs",
      imgsrc:"/assets/Icon/external jobs-70 px.svg"
    },
  ]


  return (
    <>
      <div className="div">
        <motion.div variants={scrollAnimation} style={{ backgroundColor: "rgb(251 251 249)", padding: "10px" }}>
          <br />
          <br />
          <h1 className={classes.solutionHead+" text-center"}>
            Solutions
          </h1>
          <br />
          <h3 className={classes.solutionPara + " text-center "}>With Expertise in Digital, Engineering and cloud, We deliver Solutions that fulfill the traditional, transformational and future needs of clients across the globe. </h3>
          <div style={{ width: "90%", margin: "0 auto" }} className="my-4 text-light">
            {/* <Carousel autoPlay={true} autoFocus={true} infiniteLoop={true} showStatus="false" showIndicators="false"> */}

            <div className="row  text-start  " style={{ height: "auto", borderBottom: "1px solid white" }}>
              {solutions.map((sol) => (
                <div onClick={() => router.push(sol.link)} className={classes.solDivstyle + " col-xl-4 col-lg-4 col-12 col-sm-12 col-md-6 my-1 p-3"}>
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


            {/* </Carousel> */}
          </div>
        </ motion.div>

      </div>
      <div
        className="w-full pt-12"
        id="pricing"
      >
        

      </div>
 
      <br />
      <div class={classes.feedbackBox} >
        <h1 class=" text-center my-2"  >What our customers say</h1>
        <br />
        <Carousel
          dynamicHeight={false}
          autoPlay
          infiniteLoop
          interval={3000} // Adjust the interval time as desired
          transitionTime={500} // Adjust the transition time as desired
          showIndicators={false}
          showThumbs={false}
          stopOnHover={false}>

          <div style={{ border: "1px groove" }} >
            <div style={{ margin: "0 auto", padding: "10px" }} className="mx-auto">
              <img style={{ height: "100px", width: "100px", borderRadius: "50%" }} src="/assets/user.jpg" />
              <div style={{ margin: "2px auto" }}>
                <p style={{ margin: "5px" }} > <strong style={{color: "black" }}>❝ </strong>It feels like they are part of our team. While the project is ongoing, the results thus far have met the expectations of the internal team. NashTech utilises best practices to achieve results and successfully integrates with the internal team. The team is dedicated, hard-working, and knowledgeable.
                  <strong style={{color: "black" }}> ❞</strong></p>
              </div>
              <h2 className="text-center my-2 text-dark fw-bold">Jeff Dutton</h2>
              <p class="mb-3">Infosight Data platform architect</p>

            </div>



          </div>
          <div style={{ border: "1px groove" }}>
            <div style={{ margin: "0 auto", padding: "10px" }} className="mx-auto">
              <img style={{ height: "100px", width: "100px", borderRadius: "50%" }} src="/assets/user2.png" />
              <div style={{ margin: "2px auto" }}>
                <p   > <strong style={{ color: "black" }}>❝ </strong>Working with Vietnam has been a real pleasure and a real experience.Vietnam doesn’t feel like an offshore operation – the team work as one. It’s been comforting to know that when you have your back to the wall, as you do with a project this size, NashTech are standing there beside us not walking away… they are a true partner.
                  <strong style={{  color: "black" }}> ❞</strong></p>
              </div>
              <h3 className="text-center my-2 text-dark fw-bold">Angela Parick</h3>
              <p class="mb-3">Director of Systems Delivery, Atlanta</p>

            </div>

          </div>
        </Carousel>
      </div>
      <br />
      <ScrollAnimationWrapper className="w-full">
        <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
          <div style={{ backgroundColor: "rgb(251 251 249)" }} className={classes.letsConnect + " rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500"}>
            <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
              <h3 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                Connect with us to <br />  Collaborate!
              </h3>
              <p>Lets discover the digital world with us.</p>
            </div>
            <button className={
              "py-2 lg:py-4 px-8 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none"} onClick={() => router.push("/contactUs")}> <p class="text-white-500"> Get Started </p> </button>
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

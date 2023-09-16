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
      about: "Simplify your operations and elevate efficiency with our Managed Services solutions. We take care of the complexities, allowing you to focus on what matters most – your core business. Experience seamless management, support, and optimization, tailored to your unique needs.",
      link: "/managed-services-and-solutions",
      imgsrc: "/assets/Icon/managed services-70 px.svg"
    },
    {
      title: "Technology Consulting",
      about: "Unlock the full potential of your business with our expert Technology Consulting services. From strategy to implementation, we offer tailored solutions that drive innovation and growth. Let our seasoned consultants guide you through the complexities of technology to achieve your goals.",
      link: "/technology-consulting",
      imgsrc: "/assets/Icon/technology consulting-70 px.svg"
    },
    {
      title: "Academy",
      about: "Empower your journey in data engineering at our Academy, mastering Spark and Databricks technologies. Gain hands-on expertise in crafting data-driven solutions and enhancing efficiency. Unleash your potential in the world of data with our comprehensive training.",
      link: "/scholarnest-academy",
      imgsrc: "/assets/Icon/academy-70 px.svg"
    },
    {
      title: "Staff Augmentation",
      about: "Fuel your team's capabilities with our Staff Augmentation services. Access specialized talent that seamlessly integrates into your projects, driving innovation and efficiency. Experience flexibility and scalability in meeting your project needs.",
      link: "/staff-augmentation",
      imgsrc: "/assets/Icon/staff augmentation-70 px.svg"
    },
    {
      title: "Career Enhancement",
      about: "Invest in your future with career growth and enhancement opportunities. Develop new skills, explore fresh horizons, and unlock your full potential. Forge a path toward professional excellence and personal satisfaction.",
      link: "/career-guidance-and-enhancement",
      imgsrc: "/assets/Icon/external jobs-70 px.svg"
    },
  ]
 const testimonials=[
  {
    img:"",
    name:"Prajnaya Prakash Nayak",
    designation:"Specialist software engineer ",
    company:"Societe Generale",
    feedback:"I had a wonderful learning experience with Prashanth Sir. The course provided valuable insights and I got to learn new things in PySpark & Azure Databricks. The explanations, particularly the real-life scenarios, were clear and relevant to daily work.",
    linkedin:"https://www.linkedin.com/in/prajnaya-prakash-nayak-745856153/"
  },
  {
    img:"",
    name:"Abhishek Pal",
    designation:"Azure Data Engineer",
    company:"Deloitte",
    feedback:"Prashanth Sir's course at Scholarnest Technologies significantly closed my knowledge gap in Data Engineering. His live sessions were interactive, insightful, addressing doubts effectively. I highly recommend the Master Pyspark & DataBricks course for career upskilling in data engineering.",
    linkedin:"https://www.linkedin.com/in/abhishek-pal-b09b04b4/"
  },
  {
    img:"",
    name:"Mithran Mohan ",
    designation:"Data Engineer",
    company:"Deloitte",
    feedback:"The PySpark & Databricks Master Course at Scholarnest Technologies is exceptional. Prashanth Sir's pedagogy, real-world examples, and practical insights are highly valuable. The added placement support is a significant benefit. I'm genuinely thankful to Prashanth Sir and the Scholarnest Team for this transformative experience.",
    linkedin:"https://www.linkedin.com/in/mithran-mohan/"
  }
 ]

  return (
    <>
      <div className="div">
        <motion.div variants={scrollAnimation} style={{ backgroundColor: "rgb(251 251 249)", padding: "10px" }}>
          <br />
          <br />
          <h1 className={classes.solutionHead + " text-center"}>
            Technology Solutions Consulting & Services
          </h1>
          <br />
          <p className={classes.solutionPara + " text-center "}>With Expertise in Digital, Engineering and cloud, We deliver Solutions that fulfill the traditional, transformational and future needs of clients across the globe. </p>
          <div style={{ width: "90%", margin: "0 auto" }} className="my-4 text-light">
            {/* <Carousel autoPlay={true} autoFocus={true} infiniteLoop={true} showStatus="false" showIndicators="false"> */}

            <div className="row  text-start  " style={{ height: "auto", borderBottom: "1px solid white" }}>
              {solutions.map((sol) => (
                <div onClick={() => router.push(sol.link)} className={classes.solDivstyle + " col-xl-4 col-lg-4 col-12 col-sm-12 col-md-6 my-1 p-3"}>
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
        <h2 class=" text-center my-2"  >What our customers say</h2>
        <br />
        <Carousel
          dynamicHeight={false}
          // autoPlay
          infiniteLoop
          interval={7000} // Adjust the interval time as desired
          transitionTime={1000} // Adjust the transition time as desired
          showIndicators={false}
          showThumbs={false}
          stopOnHover={false}>
          {
            testimonials.map((testimonial, index) => {

              return (<div style={{ border: "1px groove" }} >
                <div style={{ margin: "0 auto", padding: "10px" }} className="mx-auto">
                  <img style={{ height: "100px", width: "100px", borderRadius: "50%" }} src="/assets/user.jpg" />
                  <div style={{ margin: "2px auto" }}>
                    <p style={{ margin: "5px" }} > <strong style={{ color: "black" }}>❝ </strong>
                        {testimonial.feedback}
                       <strong style={{ color: "black" }}> ❞</strong></p>
                  </div>
                  <div class="d-flex justify-content-center">
                    <h3 className="text-center my-2 text-dark fw-bold"> {testimonial.name}</h3>
                    <a style={{ marginTop: "12px" }} target="_blank" href={testimonial.linkedin}> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="blue" class="bi  ml-2 bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg></a>
                  </div>
                  <p class="mb-3">{testimonial.designation} @{testimonial.company}</p>

                </div>



              </div>);
            })
          }

        </Carousel>
      </div>
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
              "py-2 lg:py-4 px-8 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none"} onClick={() => router.push("/contact-us")}> <p class="text-white-500"> Get Started </p> </button>
          </div>

        </motion.div>
      </ScrollAnimationWrapper>
      <br />


      {/* </div> */}
    </>
  );
};

export default Services;

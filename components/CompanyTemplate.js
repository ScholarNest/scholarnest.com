import React from 'react';
import { useRouter } from "next/router";
import classes from "./style/company.module.css";
import { Card, Grid, Text, Button, Row, Link } from "@nextui-org/react";
import { useEffect, useMemo } from 'react';
import lozad from 'lozad';
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { AiOutlineArrowRight } from "react-icons/ai"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const CompanyTemplate = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const router = useRouter();

  const logos = [
    { id: 1, image: "/assets/company/capabilities/apache.svg" },
    { id: 2, image: "/assets/company/capabilities/aws.svg" },
    { id: 3, image: "/assets/company/capabilities/azure.svg" },
    { id: 4, image: "/assets/company/capabilities/azurelogo.svg" },
    { id: 5, image: "/assets/company/capabilities/azuresynapse.svg" },
    { id: 6, image: "/assets/company/capabilities/databricks.svg" },
    { id: 7, image: "/assets/company/capabilities/googlecloud.svg" },
    { id: 8, image: "/assets/company/capabilities/hadoop.svg" },
    { id: 9, image: "/assets/company/capabilities/kafka.svg" },
    { id: 10, image: "/assets/company/capabilities/microsoft fabric.svg" },
    { id: 11, image: "/assets/company/capabilities/powerbi.svg" },
    { id: 12, image: "/assets/company/capabilities/snowflake.svg" }
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide:2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
const blurDataURL="data:image/jpeg;base64,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NFU1NTUF1NNTRTUNTUUtS0tTUC1LS1m0UtZtW1m1FLWbS1LUVLWbVtZtZC1m0tZtRS1m0tZtRS1m0tZtQLWbS1m1NFtZtLWbTUW1m1LU1ZWKuqzprcZxrTU01UaEGhpWVVFEFRoQBRARBnV1WsaWM6sEajUYjUVmtRqMRqKzWo3K5xuUR0jcc43KNtxqMStSitytRiVqUG4srErUFalaYi6Dems6ug0us6aitaus6aDWms6aDWms6aKumpqairqaamgupqamoq2s6WpailqWlrNqBalprNqKWs2lqWoqWpaWs2opazaWs2opazaWs2siWs2lrNrNqlrNpazagWpalrNqyJVtTWbTWsYa01nTVTG9XWNXWomN6azq60mNCaaqNCCjQgqKIAzprOro1jWtSsSrKJjcajEqyqzW41GI1FZrUblc41KrLrK1K5ytyo1HSVqOcrUorpFjErUorcqysyrKDcq6xKug3q6xq6DWrrOmitaus6aDWms6aK1prOmoLpqamirqaamoLqampqKus6WpopalqWpqKWpaWs2opazaWpayqWs2razaglrNpazazVLWbS1i1m1otZtLWbWQtZtS1m1uQLWbSstSM1dQFRTUAXVlZBMdJV1z1ZWomOmrrEq60mNaus6arONjOmqY0JpomOWrKwazrpjrKsrnK1KqWOkrUrnK1KMWOkqxiVqVpitxqMRqKzXSVuVylblFjpK1K5ytSiukrUrnK1KK3K1K5ytSg3q6xq6K3q6xq6DWrrOmg1q6zpoNaazpqK1prOmgums6airqammimmpqagammpailqWpalqKWs2lqWopazaWs2opazaWs2s1S1i1bWLWLWktZtLWbWVLWLS1mtyKlqKjSVKgK5gAAAAAAALq6yrcqNausLrSY3q656uqmN6axq6GOYDi2qysiyjrK3K4ytyt6xY6ytSucrUqudjpKsYlalaZsblblc5W5RI6StSucrUo06SrKxK1KDcrUrnGpRW9XWNXQb1dY1dBrV1nTQa1dZ00VrTWdNBrU1NNRV1NTTQXU1NNRTU01NRTUtNZtFW1m01LWVLWbS1LUVLWbVtZtZqpazaWs2s2qlrNpazaw0lrFq2sNyKIClRKrKsUAVkAAAAAAAAABRFalABrUFQXRAHJQABqVkWUdpWpXLmtytSudjrK1K5ytStMWNytyucrUqsukrcrnK1KK6SrKxK1FVuVdYlalBrWtYlXQb01nV0GtXWNXRWtNZ1dBdNTTUVdNTTQXU1NNRV1NTU0F1NNTUUtTS1nUVbWbS1LUUtZtLWbWVLWbS1m1m1pLWbS1m1z60lrFq2sWtSLEoI0oiorFSoqKwAAAAAAAAAAAAAAAAogugAgAAAAN81hZcVLHaVqVy5rcrUrnY6StSsStStMWOkrUrnK1Ko6StSsSrKK6SrKxK1KK1q6zq6DWqzq6DWms6ug1prOroq6ammgumpqaitamppoLqampqKuppqaimpaazailqWlrNrKlqWlrNrNqpazaWs2udutQtYtW1i1ZGolrINqIAlRKqKxUAVkAAAAAAAAAAAAAAAAAAAAAAAAABZcdJXJqVZUsdpWpXKVuVqVzsdJWpXOVqVpl1lalc5WpRW5WpWJVlBuLrOrqjWrrOrorRrOroNaazog1ommirpqamg1qammoq6iaaimppqaimpaazailqWlrNrNUtZtLWbXO1YWs2lrNqRpLWKtrLcaARUEVFSoiorFABAAAAAAAAAAAAAAAAAAAAAAAAAAAAGua6SuLfNWVmx1lalc5W5W2LHSVqVzlalEdJWpWJVlVW9VmLoNaus6ug1prKitaazqguiaIqmpoC6moIqpoiAgiKWpaWpWapazaWs2sWtFrNKlZVKxa1axa1GolQGlEAQQRWaICsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyoA6StyuMrpK1KxY6StyuUrcrTLpK1K5ytSityrrMWA0rK6DWrrIDQgK0agCiCKCCAIIogiKVmrWazapazSpXOtJUpUqxWbWatZajQAogCsoioM1AFZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG5WFgldZWpXOVuVpl0lajEaijcViNRRpWVBpWVBRAGhBFUQQBAUBGVEESqVmrWa52qM1UqKlZq1mtRqM1AaURUEEVFQRUGagCsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANSukco6RYzXSNRiNRpGo1GY1AVUUFVAVVQBQAAEUBEBFRFRFRmqlQqOdaRKtSis1mtVmtRYyA0oioIIqKgioMVAFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABY3GI3FiVuNxiNxWWosSLFVVRQVUUFAAAFVFRAARUBGQRUrNVmotRhpKlWs1VSsVusVqNRAFBFQQRUVBFRWKgAgAAAAAAAAAAAAAAAAAAAD//Z";

  return (

    <>
      <div class="py-0">
        <Image placeholder='blur' blurDataURL={blurDataURL} loading="lazy" height="500px" width="1100px" layout="responsive"  src="/assets/company/company.jpg" alt="Company" />
        <div className={classes.bannerDetails} >
          <h1 class={classes.heading} >Company</h1>
          <h3 >Combining strategy, technology, skills and people</h3>
          <p class="text-center">Thriving in a complex data-driven world isn't easy. The ability to continually innovate and leverage data must be at your organization's core. We work with you and your teams to define, structure, and build the organizational and technical capabilities needed to transform into a modern data-driven business.</p>
        </div>
        <br />
      </div>

      <div id="about" style={{ margin: "0", backgroundColor: "rgb(251 251 249)" }} className={classes.aboutBox + " row"}>

    

        <div className="col-12 col-lg-6 col-sm-12 col-md-6 p-3">
              <h2 >About ScholarNest
        </h2>
        <br />

          <p>

          ScholarNest is a data and cloud technology company that aims to transform its customers' businesses by helping them create the best solutions powered by our data and cloud technology expertise. 
     <br />
     <br />
Every modern enterprise lives and breathes data daily. Without access to a skilled and high-potential team to build and deliver solutions, it can affect your decision-making capabilities across the business value chain. ScholarNest offers in-depth skill development programs on modern data and cloud technologies and helps you to develop and grow your teams.

          </p>
        </div>
        <div className="relative col-12 col-lg-6 col-sm-12 col-md-6   my-auto p-3">


          <Image
        layout="responsive"
        height={'80%'}
        width={'135%'}
              src="/assets/company/aboutus.jpg"
               alt="About" />




        </div>

      </div>
      <br />
      <br />
      <div id="approach" style={{ margin: "0" }} className={classes.aboutBox + " row"}>
        <h2>Approach
        </h2>
        <div className="col-12 col-lg-6 col-sm-12 col-md-6 my-auto p-3">
          <Image
            src="/assets/company/approach.jpg"
            alt="Approach"
            layout="responsive"
            height={'80%'}
            width={'135%'}



          />
        </div>
        <div className="col-12 col-lg-6 col-sm-12 col-md-6 p-3">
          <p>
          Our approach means we gain a thorough understanding of your vision, values, challenges, and objectives. This builds our relationship with you for the long term and underpins your business success.

 <br /> 
 <br /> 
Our discussions with you are value-oriented, advising how and where to invest in your team and technology. We stay with you for the ride, and our credibility rests on achieving your planned outcome.

<br /> 
<br /> 
Solving business problems is building a highly-skilled, agile, and passionate team that caters to essential issues and takes pride in building strategic and long-term solutions.

<br /> 
<br /> 
We continuously monitor and access the modern tools, technologies, and processes landscape to ensure we can provide solutions that keep your business future-ready.
<br /> 
<br /> 

We focus on you and will be proactive, dynamic, and responsive to your needs.
</p>
        </div>

        {/* <Card.Footer>
          <Row justify="flex-end">

            <Button size="sm">@ScholarNest.com</Button>
          </Row>
        </Card.Footer> */}
      </div>
      <br />
      <br />
      <div id="portfolio" style={{ margin: "0", backgroundColor: "rgb(251 251 249)" }} className={classes.aboutBox + " row"}>
        <h2 >Portfolio
        </h2>

        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>


            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
We have the focus, care, flexibility, friendliness, and openness of small outsourcing companies with the expertise and ability to scale.              {/* Lets Discover Our Services */}
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} variants={scrollAnimation}>
               {/* <Card.Header> <h3 class={classes.caseStudyHead}> Data Engineering </h3> </Card.Header> */}
         
                <Card.Body css={{ py: "$2" }}>
                  <img src="/assets/company/portfolio/dataEngineering.jpg" alt="1" />
                </Card.Body>
                <Card.Footer >
          <Link
               style={{display:"flex",flexDirection:"column"}}
                    icon
                    color="primary"
                    target="_blank"
                    href="/contact-us"
                  >
                    
                    Dealing with big data - lakehouses, clouds, pipelines, and platforms.
                  </Link> 
                  {/* <h3>Data Engineering</h3>
                  <p>Dealing with big data - lakehouses, clouds, pipelines, and platforms</p> */}
                </Card.Footer>

              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} variants={scrollAnimation}>

              {/* <Card.Header> <h3 class={classes.caseStudyHead}>Buisness Analytics </h3> </Card.Header> */}

                <Card.Body css={{ py: "$2" }}>
                  <img src="/assets/company/portfolio/businessAnalytics.jpg" alt="2" />
                </Card.Body>
                <Card.Footer style={{display:"flex",flexDirection:"column"}}>
                  <Link
                    icon
                    color="primary"
                    target="_blank"
                    href="/contact-us"
                  >
  A systematic approach to designing, modeling, and insights discovery                  </Link>

                </Card.Footer>

              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} variants={scrollAnimation}>
              {/* <Card.Header> <h3 class={classes.caseStudyHead}> Skill Development </h3> </Card.Header> */}

                <Card.Body css={{ py: "$2" }}>
                  <img src="/assets/company/portfolio/skillDevelopment.jpg" alt="3" />
                </Card.Body>
                <Card.Footer>
                  <Link
                    icon
                    color="primary"
                    target="_blank"
                    href="/contact-us"
                  >
Upskilling, mentoring, supporting, and building high-potential teams                   </Link>
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
      <div id="techexpertise" style={{ margin: "5px" }} className={classes.aboutBox+" row justify-center"}>
        <h2 >Capabilities
        </h2>
        <hr />
        <br />
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
          transitionDuration={900}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["mobile"]}
          dotListClass="custom-dot-list-style"

        >
          {logos.map((logo) => (
            <img class={classes.techExpertiseImg} key={logo.id} src={logo.image} alt={`Logo ${logo.id}`} />

          ))}
        </Carousel>
        {/* <img  style={{height:"100px",width:"120px"}} src="/assets/Icon/bigdata.webp" alt="" />
        <img style={{height:"100px", width:"200px"}}     src="/assets/Icon/hadoop1.svg" alt="" />
        
        <img style={{height:"100px", width:"150px"}}     src="/assets/Icon/sql.svg" alt="" />
        <img style={{height:"100px", width:"150px"}}     src="/assets/Icon/dataengine.webp" alt="" />
        <img style={{height:"100px", width:"180px"}}     src="/assets/Icon/apache.png" alt="" />
        <img style={{height:"150px", width:"220px"}}     src="/assets/Icon/pyspark.webp" alt="" />
        <img style={{height:"130px", width:"210px"}}     src="/assets/Icon/databricks.png" alt="" />
        <img style={{height:"150px", width:"150px"}}     src="/assets/Icon/python.svg" alt="" /> */}
      </div>
      <br />
      <br />
      <div className="my-2">
      <ScrollAnimationWrapper>

        <motion.div  variants={scrollAnimation} class={classes.gradient}>
          <motion.div  variants={scrollAnimation} style={{width:"50%"}}>
            <motion.div  variants={scrollAnimation} style={{margin:"25% 5%"}}>
            <motion.h2 class={classes.careerHead} >Career at ScholarNest</motion.h2>
            <motion.p class={classes.careerDet}>We invite you to supercharge your potential. Find what inspires and drives you.</motion.p>
            <motion.button className={classes.careerButton +
       " my-4 py-2 lg:py-4 px-6 sm:px-3 lg:px-12 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-zinc-50-md transition-all outline-none "
      } onClick={() =>  router.push("/career-guidance-and-enhancement")} style={{display:"flex",flexDirection:"row"}}>Visit our career page </motion.button>
            </motion.div>
           
          </motion.div>
          <motion.div class="my-auto "  variants={scrollAnimation} style={{marginLeft:"auto"}}>
          <img class={classes.careerImg}  src="/assets/career/career.jpg"/>  

          </motion.div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
      <br />
      <br />

      <ScrollAnimationWrapper className="w-full">
        <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
          <div style={{ backgroundColor: "rgb(251 251 249)" }} className={classes.letsConnect + " rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500"}>
            <div className="flex flex-col w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
              <h3 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                Connect with us to <br />  Collaborate!
              </h3>
              <p>Let's work together to drive the business decisions.</p>
            </div>
            <button className={
              "py-2 lg:py-4 px-8 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none"} onClick={() => router.push("/contact-us")}> <p class="text-white-500"> Get Started </p> </button>
          </div>
       
        </motion.div>
      </ScrollAnimationWrapper>
      <br />
      <br />

    </>

  )
}
export default CompanyTemplate;
import React, { useMemo,useState, useEffect } from "react";
import Image from "next/image";

import getScrollAnimation from "../utils/getScrollAnimation";

import landingLottie from "./landing-animation.json";
import { Carousel } from 'react-responsive-carousel';
import classes from "./style/responsive.module.css";

import { useRouter } from "next/router";
const Hero = () => {
  // const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the window width when the component is mounted on the client side
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: landingLottie,
  }

  return (

    <>
      <div>
        <Carousel className={classes.carousel} dynamicHeight={true} autoPlay
          infiniteLoop
          interval={7000} // Adjust the interval time as desired
          transitionTime={500} // Adjust the transition time as desired
          showIndicators={false}
          showThumbs={false}
          showArrows={!isMobile}
          showStatus={false}
          stopOnHover={false}>
          <div >
            <Image  height="575px" width="1100px" layout="responsive" style={{ height: "700px" }} src="/assets/homepage/newbanner1.jpg" alt=" Data Engineering with Spark & Databricks" />

            {/* <Image src="/assets/aii.jpg" alt="Example" layout="responsive" width={1200} height={700} /> */}

            <div className={classes.bannerDetails + " " + "flex flex-col text-white items-start row-start-2 sm:row-start-1"}>
              <h2 className="font-medium  leading-normal">
                Kick Start Your Data Engineering with Spark & Databricks.
              </h2>
              <p style={{ color: "antiquewhite" }} className=" my-sm-4">
                Master Data Engineering with Spark & Databricks at Scholarnest. Unlock advanced skills for seamless data processing and transformation.
              </p>
              <button onClick={()=>{  router.push("https://www.scholarnest.in/")}} className={classes.bannerButton +" mt-sm-3"}>Get Started</button>
            </div>
          </div>
          <div >
            <Image height="575px" width="1100px" layout="responsive" src="/assets/homepage/newbanner2.jpg" alt='Technology Consulting Solutions & Services' />
            <div className={classes.bannerDetails + " " +classes.bannerDet2+  " text-white flex flex-col  items-start row-start-2 sm:row-start-1"}>
              <h2 className="font-medium  leading-normal">
                Elevate Your Business with Expert Technology Consulting Solutions & Services

              </h2>
              <p style={{ color: "antiquewhite" }} className=" my-sm-4  leading-normal">
              Experience seamless operations through our managed services, while our technology consulting drives innovation.            </p>
              <button onClick={()=>{  router.push("/technology-consulting")}} className={classes.bannerButton + " mt-sm-3"}>Get Started</button>
            </div>
          </div>
          <div>
            <Image height="575px" width="1100px" layout="responsive" src="/assets/homepage/newbanner3.jpg" alt="Career Guidance and Enhancement"/>
            <div className={classes.bannerDetails + " " + " text-light flex flex-col items-start row-start-2 sm:row-start-1"}>
              <h2 className=" font-medium leading-normal">
              From Aspiration to Achievement: Career Guidance and Progression           
                 </h2>
              <p style={{ color: "antiquewhite" }} className=" my-sm-4">
              Navigate your path to success with our career guidance expertise. Unlock opportunities for growth and skill enhancement, propelling you towards a brighter future.
              </p>

              <button onClick={()=>{router.push("/career-guidance-and-enhancement")}} className={classes.bannerButton+" mt-sm-3"}>Get Started</button>

            </div>
          </div>
        </Carousel>

      </div>
    </>
  );
};

export default Hero;

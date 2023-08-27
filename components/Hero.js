import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Lottie from "lottie-react";
import landingLottie from "./landing-animation.json";
import { Carousel } from 'react-responsive-carousel';
import classes from "./style/responsive.module.css";


const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: landingLottie,
  }

  return (

    <>
      <div>
        <Carousel dynamicHeight={true} autoPlay
          infiniteLoop
          interval={7000} // Adjust the interval time as desired
          transitionTime={500} // Adjust the transition time as desired
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          stopOnHover={false}>
          <div >
            <Image height="575px" width="1100px" layout="responsive" style={{ height: "700px" }} src="/assets/homepage/newbanner1.jpg" alt=" Data Engineering with Spark & Databricks" />

            {/* <Image src="/assets/aii.jpg" alt="Example" layout="responsive" width={1200} height={700} /> */}

            <div className={classes.bannerDetails + " " + "flex flex-col text-white items-start row-start-2 sm:row-start-1"}>
              <h2 className="font-medium  leading-normal">
                Kick Start Your Data Engineering with Spark & Databricks.
              </h2>
              <p style={{ color: "antiquewhite" }} className="mt-xl-4 mb-xl-6 mt-lg-4 mb-lg-6 mt-2 mb-2 mt-md-4 mb-lg-6 mt-sm-2 mb-sm-2">
                Master Data Engineering with Spark & Databricks at Scholarnest. Unlock advanced skills for seamless data processing and transformation.
              </p>
              <button class={classes.bannerButton}>Get Started</button>
            </div>
          </div>
          <div >
            <Image height="575px" width="1100px" layout="responsive" src="/assets/homepage/newbanner2.jpg" alt='Technology Consulting Solutions & Services' />
            <div className={classes.bannerDetails + " " + "text-white flex flex-col  items-start row-start-2 sm:row-start-1"}>
              <h2 className="font-medium  leading-normal">
                Elevate Your Business with Expert Technology Consulting Solutions & Services

              </h2>
              <p style={{ color: "antiquewhite" }} className="mt-xl-4 mb-xl-6 mt-lg-4 mb-lg-6 mt-2 mb-2 mt-md-4 mb-lg-6 mt-sm-2 mb-sm-2  leading-normal">
              Experience seamless operations through our managed services, while our technology consulting drives innovation. Enhance your team with top talent through staff augmentation.              </p>
              <button class={classes.bannerButton}>Get Started</button>
            </div>
          </div>
          <div>
            <Image height="575px" width="1100px" layout="responsive" src="/assets/homepage/newbanner3.jpg" alt="Career Guidance and Enhancement"/>
            <div className={classes.bannerDetails + " " + " text-light flex flex-col items-start row-start-2 sm:row-start-1"}>
              <h2 className=" font-medium leading-normal">
              From Aspiration to Achievement: Career Guidance and Progression           
                 </h2>
              <p style={{ color: "antiquewhite" }} className="mt-xl-4 mb-xl-6 mt-lg-4 mb-lg-6 mt-2 mb-2 mt-md-4 mb-lg-6 mt-sm-2 mb-sm-2">
              Navigate your path to success with our career guidance expertise. Unlock opportunities for growth and skill enhancement, propelling you towards a brighter future.
              </p>

              <button class={classes.bannerButton}>Get Started</button>

            </div>
          </div>
        </Carousel>

      </div>
    </>
  );
};

export default Hero;

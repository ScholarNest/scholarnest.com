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


const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.sgv",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: landingLottie,
  }

  return (
    
    <>
  <div  style={{marginTop:"92px"}}>
    <Carousel  dynamicHeight={true}  autoPlay
      infiniteLoop
      interval={3000} // Adjust the interval time as desired
      transitionTime={500} // Adjust the transition time as desired
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      stopOnHover={false}>
    <div >
        <Image height="600px" width="1100px" layout="responsive" style={{height:"700px"}} src="/assets/aii.jpg"/>
        
        {/* <Image src="/assets/aii.jpg" alt="Example" layout="responsive" width={1200} height={700} /> */}
        
        <div  className={classes.bannerDetails +" "+ "flex flex-col  items-start row-start-2 sm:row-start-1"}>
            <h1 className="font-medium text-white leading-normal">
              Build Your Success With <strong>ScholarNest</strong>.
            </h1>
            <p style={{color:"antiquewhite"}} className="mt-xl-4 mb-xl-6 mt-lg-4 mb-lg-6 mt-2 mb-2 mt-md-4 mb-lg-6 mt-sm-2 mb-sm-2">
              Build Your Success With Scholarnest Learn the skills matters the
              most
            </p>
            <ButtonPrimary class="bannerButton">Get Started</ButtonPrimary>
          </div>
    </div>
    <div >
        <Image height="600px" width="1100px" layout="responsive" src="/assets/data.jpg" />
        <div  className={classes.bannerDetails +" "+"flex flex-col  items-start row-start-2 sm:row-start-1"}>
            <h1 className=" text-2xl lg:text-4xl xl:text-5xl font-medium text-white leading-normal">
              Build Your Success With <strong>ScholarNest</strong>.
            </h1>
            <p style={{color:"antiquewhite"}} className="mt-xl-4 mb-xl-6 mt-lg-4 mb-lg-6 mt-2 mb-2 mt-md-4 mb-lg-6 mt-sm-2 mb-sm-2">
              Build Your Success With Scholarnest Learn the skills matters the
              most
            </p>
            <ButtonPrimary class="bannerButton">Get Started</ButtonPrimary>
          </div>
    </div>
    <div>
        <Image height="600px" width="1100px" layout="responsive" src="/assets/3.jpg" />
        <div  className={classes.bannerDetails +" "+"flex flex-col items-start row-start-2 sm:row-start-1"}>
            <h1 className=" text-2xl lg:text-4xl xl:text-5xl font-medium text-white leading-normal">
              Build Your Success With <strong>ScholarNest</strong>.
            </h1>
            <p style={{color:"antiquewhite"}} className="mt-xl-4 mb-xl-6 mt-lg-4 mb-lg-6 mt-2 mb-2 mt-md-4 mb-lg-6 mt-sm-2 mb-sm-2">
              Build Your Success With Scholarnest Learn the skills matters the
              most
            </p>
            
            <ButtonPrimary >Get Started</ButtonPrimary>
            
          </div>
    </div>
</Carousel>

</div>
 </>
  );
};

export default Hero;

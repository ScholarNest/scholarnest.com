import Image from "next/image";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import classes from './style/features.module.css';
import {AiOutlineArrowRight} from "react-icons/ai"
const features = [
  "24*7 Service.",
  "Expertise In Industry.",
  "Best Collection Of Courses",
  "Well Experienced Tutors."
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const router = useRouter();
  return (
  <>
      <div className="my-2">
      <ScrollAnimationWrapper>

        <motion.div  variants={scrollAnimation} class={classes.gradient}>
          <motion.div  variants={scrollAnimation} style={{width:"50%"}}>
            <motion.div  variants={scrollAnimation} style={{margin:"25% 5%"}}>
            <motion.h1  style={{fontSize:"30px",fontWeight:"bold",marginBottom:"20px"}}>Career at ScholarNest</motion.h1>
            <motion.h3>We invite you to supercharge your potential.Find what inspires and drives you, Find your spark.</motion.h3>
            <motion.button className={
       "my-4 py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-zinc-50-md transition-all outline-none "
      } onClick={() =>  router.push("/career")} style={{display:"flex",flexDirection:"row"}}>Visit our career page  <AiOutlineArrowRight style={{marginLeft:"1px",marginTop:"5px"}} /></motion.button>
            </motion.div>
           
          </motion.div>
          <motion.div  variants={scrollAnimation} style={{marginLeft:"auto"}}>
          <img style={{height:"450px" }} src="/assets/Careers.png"/>  

          </motion.div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
    <div
    style={{boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px'}}

      className=" max-w-screen-xl mb-4 sm:mt-5 sm:mb-12 px-6 sm:px-8 lg:px-16 mx-2"
      id="feature"
    >
    
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 ">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/robot.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={244}
              width={308}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col items-end justify-center pt-28 ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            We Provide Many Solutions.
          </h3>
          <p className="my-2 text-black-500">
          </p>
          <ul className="text-black-500 self-start list-inside ml-8">
            {features.map((feature, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={feature}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {feature}
              </motion.li>
              )
            )}
          </ul>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>

    </>
  );
};

export default Feature;

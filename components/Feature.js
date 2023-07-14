import Image from "next/image";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import classes from './style/features.module.css';
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
            <motion.h1 class={classes.careerHead} >Career at ScholarNest</motion.h1>
            <motion.h3 class={classes.careerDet}>We invite you to supercharge your potential.Find what inspires and drives you, Find your spark.</motion.h3>
            <motion.button className={classes.careerButton +
       " my-4 py-2 lg:py-4 px-6 sm:px-3 lg:px-12 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-zinc-50-md transition-all outline-none "
      } onClick={() =>  router.push("/career")} style={{display:"flex",flexDirection:"row"}}>Visit our career page </motion.button>
            </motion.div>
           
          </motion.div>
          <motion.div class="my-auto "  variants={scrollAnimation} style={{marginLeft:"auto"}}>
          <img class={classes.careerImg}  src="/assets/career/career.jpg"/>  

          </motion.div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
    <div
     
    style={{backgroundColor: "rgb(251 251 249)", boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px'}}

      className="w-100 mb-4 sm:mt-5 sm:mb-12 px-6 sm:px-8 lg:px-16  mx-auto"
      id="feature"
    >
    
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 ">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}> 
            <Image
              src="/assets/solutions/business.jpg"
              alt="We provide many solutions"
              layout="responsive"
              quality={100}
              height={420}
              width={540}
            />
        </motion.div> 
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
        <motion.div className={classes.featuresDet+ " flex flex-col lg:pt-28 pt-8 pb-5 mx-auto  w-full lg:w-9/12"} variants={scrollAnimation}>
       
          <div class="mx-auto text-start">
          <h3 className="text-3xl lg:text-4xl  font-medium leading-relaxed text-black-600">
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
                  <p>
                  {feature}
                  </p>
              </motion.li>
              )
            )}
          </ul>
          </div>
        </motion.div>
        
        </ScrollAnimationWrapper>
      </div>
    </div>

    </>
  );
};

export default Feature;

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

          <motion.div variants={scrollAnimation} class={classes.gradient}>
            <motion.div variants={scrollAnimation} style={{ width: "50%" }}>
              <motion.div variants={scrollAnimation} style={{ margin: "25% 5%" }}>
                <motion.h1 class={classes.careerHead} >Career at ScholarNest</motion.h1>
                <motion.h3 class={classes.careerDet}>We invite you to supercharge your potential.Find what inspires and drives you, Find your spark.</motion.h3>
                <motion.button className={classes.careerButton +
                  " my-4 py-2 lg:py-4 px-6 sm:px-3 lg:px-12 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-zinc-50-md transition-all outline-none "
                } onClick={() => router.push("/career")} style={{ display: "flex", flexDirection: "row" }}>Visit Our Career Page </motion.button>
              </motion.div>

            </motion.div>
            <motion.div class="my-auto " variants={scrollAnimation} style={{ marginLeft: "auto" }}>
              <img class={classes.careerImg} src="/assets/career/career.jpg" />

            </motion.div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <br />
      <br />

      <div

        style={{ backgroundColor: "rgb(251 251 249)" }}

        className={classes.blogDet + " w-100 mb-4 mx-auto"}
        id="feature"
      >
 <br />
        <h1 class=" text-center my-2"  >Latest Updates</h1>

        <div className={" mx-auto justify-content-center  row text-start  p-2"} >


          <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-lg-4 p-xl-4 p-md-2 p-sm-2 p-1">
            <a href="https://blog.scholarnest.com/different-ways-to-create-spark-dataframe/" target="_blank">
              <div className={classes.styleDiv}>
                <Image width={600}
                  height={400} src="/assets/homepage/blogs/1.jpg" />
                <br />
                <h3 class={classes.h3style+" mb-1"} >Different ways to create spark dataframe</h3>

                <p>Apache Spark is a powerful open-source distributed computing framework that provides efficient and scalable processing of large datasets...</p>

                <a class={classes.anchorTag+" my-1"} href="https://blog.scholarnest.com/different-ways-to-create-spark-dataframe/" target="_blank">Read More</a>
               </div>
            </a>

          </div>
          <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-lg-4 p-xl-4 p-md-2 p-sm-2 p-1">
            <a href="https://blog.scholarnest.com/deep-dive-into-spark-memory-allocation/" target="_blank">
              <div className={classes.styleDiv}>
                <Image width={600}
                  height={400} src="/assets/homepage/blogs/2.jpg" />
                <br />

                <h3 class={classes.h3style+" my-1"} >Deep dive into spark memory allocation</h3>
                <p>In this blog post, I will explain the memory allocation for the Spark driver and executor. If you are here, I assume you are already familiar with Apache Spark...</p>
                <a class={classes.anchorTag+" my-1"} href="https://blog.scholarnest.com/deep-dive-into-spark-memory-allocation/" target="_blank">Read More</a>

              </div>
            </a>



          </div>

          <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-xl-4 p-md-2 p-sm-2 p-1">
            <a href="https://blog.scholarnest.com/what-is-apache-kafka/" target="_blank">
              <div className={classes.styleDiv}>
                <Image width={600}
                  height={400} src="/assets/homepage/blogs/3.jpg"  />
                <br />
                <h3 class={classes.h3style +" my-1"} >What is Apache kafka?</h3>
                <p>Apache Kafka is a distributed streaming platform that is built on the principles of a messaging system.Apache Kafka’s implementation started as a messaging system to create a robust data pipeline....</p>
                <a class={classes.anchorTag+" my-1"} href="https://blog.scholarnest.com/what-is-apache-kafka/" target="_blank">Read More</a>

              </div>

            </a>
          </div>


        </div>
        {/* <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 ">
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
      </div> */}
      </div>

    </>
  );
};

export default Feature;

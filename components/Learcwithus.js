import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const LearnWithUs = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const cardWidth = 1000;
  const cardHeight = 553;
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-0 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Solutions
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12  my-2 text-center"
            ></motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-0">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-0"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/learn1.jpg"
                    width={cardWidth}
                    height={cardHeight}
                    alt="Career"
                  />
                </div>
                {/* <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Careers & Growth
                </p>
                <div>
                  <p>Dummy TextDummy TextDummy</p>
                </div>

                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <a>Read more</a>
                </div> */}
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-0"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/learn2.jpg"
                    width={cardWidth}
                    height={cardHeight}
                    alt="Cloud Computing"
                  />
                </div>
                {/* <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Cloud Computing{" "}
                </p>
                <div>
                  <p>Dummy TextDummy TextDummy</p>
                </div>

                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    Read more
                  </p>
                </div> */}
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-0"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/learn3.jpg"
                    width={cardWidth}
                    height={cardHeight}
                    alt="Premium Plan"
                  />
                </div>
                {/* <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Data Engineering{" "}
                </p>
                <div>
                  <p>Dummy TextDummy TextDummy</p>
                </div>

                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    Read more
                  </p>
                </div> */}
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-0">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-0"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/learn4.jpg"
                    width={cardWidth}
                    height={cardHeight}
                    alt="Career"
                  />
                </div>
                {/* <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Careers & Growth
                </p>
                <div>
                  <p>Dummy TextDummy TextDummy</p>
                </div>

                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <a>Read more</a>
                </div> */}
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-0"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/learn5.jpg"
                    width={cardWidth}
                    height={cardHeight}
                    alt="Cloud Computing"
                  />
                </div>
               {/* <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Cloud Computing{" "}
                </p>
                 <div>
                  <p>Dummy TextDummy TextDummy</p>
                </div>

                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    Read more
                  </p>
                </div> */}
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-0"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/learn6.jpg"
                    width={cardWidth}
                    height={cardHeight}
                    alt="Premium Plan"
                  />
                </div>
                {/* <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Data Engineering{" "}
                </p>
                <div>
                  <p>Dummy TextDummy TextDummy</p>
                </div>

                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    Read more
                  </p>
                </div> */}
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni"></div>
      </div>
    </div>
  );
};

export default LearnWithUs;

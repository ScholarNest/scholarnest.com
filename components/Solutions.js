import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Card, Grid, Text, Link, Row } from "@nextui-org/react";

const Solutions = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const data = {
    solution: [
      {
        title: "AI & Machine Learning",
        src: "/assets/ai.jpg",
        description: "Dummy Text Dummy Text Dummy Text Dummy Text ",
      },
      {
        title: "AI & Machine Learning",
        src: "/assets/big-data.jpg",
        description: "Dummy Text Dummy Text Dummy Text Dummy Text ",
      },
      {
        title: "Kafka Streaming",
        src: "/assets/kafka.jpg",
        description: "Dummy Text Dummy Text Dummy Text Dummy Text ",
      },
      {
        title: "Training & Certification",
        src: "/assets/conv.jpeg",
        description: "Dummy Text Dummy Text Dummy Text Dummy Text ",
      },
      {
        title: "B2B & B2C eCommerce",
        src: "/assets/b2b.jpg",
        description: "Dummy Text Dummy Text Dummy Text Dummy Text ",
      },
      {
        title: "Mobile App Solutions",
        src: "/assets/mobile.jpg",
        description: "Dummy Text Dummy Text Dummy Text Dummy Text ",
      },
      {
        title: "Mobile App Solutions",
        src: "/assets/dataengineering.jpg",
        description: "Dummy Text Dummy Text Dummy Text Dummy Text ",
      },
      {
        title: "Mobile App Solutions",
        src: "/assets/dataengineering.jpg",
        description: "Dummy Text Dummy Text Dummy Text Dummy Text ",
      },
      {
        title: "Training & Certification",
        src: "/assets/dataengineering.jpg",
        description: "Dummy Text Dummy Text Dummy Text Dummy Text ",
      },
    ],
  };
  return (
    <div className="grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-10 py-8 lg:py-12 px-6 sm:px-0 lg:px-10">
      {data.solution.map((solution, index) => (
        
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={solution.src} alt="Mountain" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{solution.title}</div>
        <p class="text-gray-700 text-base">
        {solution.description}
        </p>
      </div>
      {/* <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div> */}
    </div>
       
      ))}
    </div>
  );
};

export default Solutions;

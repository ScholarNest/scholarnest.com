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
        description: "With Irisidea’s AI collaboration, you will not only learn how to quickly move past your AI journey roadblocks, but will also realize the much required operational gains of machine intelligence. ",
      },
      {
        title: "Big Data & Analystics",
        src: "/assets/big-data.jpg",
        description: "We will be hand-holding, solution provider, assisting on decision making on adoption of various frameworks, and tools, required for different phases of big data processing life cycle.",
      },
      {
        title: "Kafka Streaming",
        src: "/assets/kafka.jpg",
        description: "Build real-world Big Data applications that integrate and analyze high velocity data sources. Right from designing, building new systems to fine-tuning existing systems.",
      },
      {
        title: "Conversational AI Bots",
        src: "/assets/conv.jpeg",
        description: "We can help you build Conversation AI driven bots which will help you provide a better user experience and expand your each to customers. ",
      },
      {
        title: "B2B & B2C eCommerce",
        src: "/assets/b2b.jpg",
        description: "We innovate and generate business-focused solutions and facilitate transition of businesses from traditional to e-business models to help them in becoming modern enterprises. ",
      },
      {
        title: "Mobile App Solutions",
        src: "/assets/mobile.jpg",
        description: "Leverage contextual real-time data to reach out to your customers, internal teams and partners anywhere in the world, in real time.",
      },
      {
        title: "SQL Server Administration",
        src: "/assets/database.png",
        description: "We have a well equipped consulting team with extensive experience of more than 20 years in SQL Production Server Environment.",
      },
      {
        title: "Application Services",
        src: "/assets/applicationserver.jpg",
        description: "Quality Application Development can be the difference between the success and failure of a business. A good strategy will make sure your online presence reflects your business in real life. ",
      },
      {
        title: "Training & Certification",
        src: "/assets/training.jpg",
        description: "Training & Certification are integral part of any organization to help develop and optimize human resources for achieving its goals and creating a sustainable growth model. ",
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

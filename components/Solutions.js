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
        title: "title0",
        src: "/assets/dataengineering.jpg",
        description: " Dummy Text Dummy Text ",
      },
      {
        title: "title1",
        src: "/assets/dataengineering.jpg",
        description: "Dummy Text Dummy Text Dummy Text Dummy Text ",
      },
      {
        title: "title2",
        src: "/assets/dataengineering.jpg",
        description: "Dummy Text Dummy Text Dummy Text Dummy Text ",
      },
      {
        title: "title3",
        src: "/assets/dataengineering.jpg",
        description: "Dummy Text Dummy Text Dummy Text Dummy Text ",
      },
      {
        title: "title4",
        src: "/assets/dataengineering.jpg",
        description: "Dummy Text Dummy Text Dummy Text Dummy Text ",
      },
      {
        title: "title5",
        src: "/assets/dataengineering.jpg",
        description: "Dummy Text Dummy Text Dummy Text Dummy Text ",
      },
      {
        title: "title6",
        src: "/assets/dataengineering.jpg",
        description: "Dummy Text Dummy Text Dummy Text Dummy Text ",
      },
      {
        title: "title7",
        src: "/assets/dataengineering.jpg",
        description: "Dummy Text Dummy Text Dummy Text Dummy Text ",
      },
      {
        title: "title8",
        src: "/assets/dataengineering.jpg",
        description: "Dummy Text Dummy Text Dummy Text Dummy Text ",
      },
    ],
  };
  return (
    <div className="grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-10 py-8 lg:py-12 px-6 sm:px-0 lg:px-10">
      {data.solution.map((solution, index) => (
        <ScrollAnimationWrapper className="flex justify-center">
          <motion.div variants={scrollAnimation}>
            <Grid xs={50} sm={100} key={index}>
              <Card>
                <Card.Body css={{ P: 0 }}>
                  <Card.Image
                    src={solution.src}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    alt={solution.title}
                  />
                  <Row wrap="wrap" justify="space-between" align="center">
                    <Text>{solution.title}</Text>
                    <Text>{solution.description}</Text>
                    <Link to="#">read more </Link>
                  </Row>
                </Card.Body>
              </Card>
            </Grid>
            {/* <Card css={{ p: "$6", mw: "400px" }}>
              <Card.Header>
                <img
                  alt="nextui logo"
                  src="/assets/dataengineering.jpg"
                  width="34px"
                  height="34px"
                />
                <Grid.Container css={{ pl: "$6" }}>
                  <Grid xs={12}>
                    <Text h4 css={{ lineHeight: "$xs" }}>
                      {solution.title}
                    </Text>
                  </Grid>
                  <Grid xs={12}>
                    <Text css={{ color: "$accents8" }}>nextui.org</Text>
                  </Grid>
                </Grid.Container>
              </Card.Header>
              <Card.Body css={{ py: "$2" }}>
                <Text>
                  Make beautiful websites regardless of your design experience.
                </Text>
              </Card.Body>
              <Card.Footer>
                <Link
                  icon
                  color="primary"
                  target="_blank"
                  href="https://github.com/nextui-org/nextui"
                >
                  Visit source code on GitHub.
                </Link>
              </Card.Footer>
            </Card> */}
          </motion.div>
        </ScrollAnimationWrapper>
      ))}
    </div>
  );
};

export default Solutions;

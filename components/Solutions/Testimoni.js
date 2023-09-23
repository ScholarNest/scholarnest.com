import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../../public/assets/Icon/stars.svg";
import ArrowBack from "../../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../../public/assets/Icon/eva_arrow-next-fill.svg";
import classes from "../style/responsive.module.css";

const Testimoni = ({
  listTestimoni = [
    // {
    //   name: "iezh Robert",
    //   image: "/assets/people-3.png",
    //   city: "Warsaw",
    //   country: "Poland",
    //   rating: "4.5",
    //   testimoni:
    //     "I am really happy with the services they provided and quality of service.I recommend sholarnest for everyone here",
    // },
    {
      image:"/assets/testimonials/test1.jpg",
      name:"Prajnaya Prakash Nayak",
      designation:"Specialist software engineer",
      company:"Societe Generale",
      testimoni:"I had a wonderful learning experience with Prashanth Sir. The course provided valuable insights and I got to learn new things in PySpark & Azure Databricks. The explanations, particularly the real-life scenarios, were clear and relevant to daily work.",
      linkedin:"https://www.linkedin.com/in/prajnaya-prakash-nayak-745856153/",
      country:"India"
    },
    {
      image:"/assets/testimonials/test2.jpg",
      name:"Abhishek Pal",
      designation:"Azure Data Engineer",
      company:"Deloitte",
      testimoni:"Prashanth Sir's course at Scholarnest Technologies significantly closed my knowledge gap in Data Engineering. His live sessions were interactive, insightful, addressing doubts effectively. I highly recommend the Master Pyspark & DataBricks course for career upskilling in data engineering.",
      linkedin:"https://www.linkedin.com/in/abhishek-pal-b09b04b4/",
      country:"India"
    },
    {
      image:"/assets/testimonials/test3.jpg",
      name:"Mithran Mohan ",
      designation:"Data Engineer",
      company:"Deloitte",
      testimoni:"The PySpark & Databricks Master Course at Scholarnest Technologies is exceptional. Prashanth Sir's pedagogy, real-world examples, and practical insights are highly valuable. The added placement support is a significant benefit. I'm genuinely thankful to Prashanth Sir and the Scholarnest Team for this transformative experience.",
      linkedin:"https://www.linkedin.com/in/mithran-mohan/",
      country:"India"
    }
    
  ],

}) => {
  const testimonials=[
    
   ]

  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2  rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
     
      <Slider
        {...settings}
        arrows={false}
        dots={false}
        ref={setSliderRef}
        className="row mx-0"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div style={{height:"100%"}} className="px-3 col-12 col-sm-12 col-md-6 col-lg-4" key={index}>
            <div className="border-2  border-gray-500 hover:border-orange-500 transition-all rounded p-4 ">
             
            <div className="flex justify-content-end">
                  {/* <p className="text-sm">{listTestimonis.rating}</p> */}
                  <span className="flex ml-4">
                  <a style={{ marginTop: "12px" }} target="_blank" href={listTestimonis.linkedin}> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="blue" class="bi  ml-2 bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg></a>                  </span>
                </div>
                <div className={classes.testimoni+" flex order-2 xl:order-1 "}>
                  <img
                    src={listTestimonis.image}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.designation} @{listTestimonis.company}
                    </p>
                  </div>
                </div>
           
            
            <br />
            <hr />
              <p className="mt-3 text-left"> <strong> “ </strong>{listTestimonis.testimoni} <strong> ”</strong>.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto me-2 mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500  transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Card } from "@nextui-org/react";
import classes from "./style/extraCourses.module.css";
import { useRouter } from "next/router";

const ApacheSpark3Container = () => {
  const router = useRouter();
  const [courseSections, setcourseSections] = useState([]);
  const [showMoreLessText, setShowMoreLessText] = useState('Show more');
  useEffect((() => {
    setcourseSections(halfcourseSections);
  }), [])
  const halfcourseSections = [
    {
      id:1,
      ques:"Before You Start",
      ans:[
      {ansId:1,det:"About the Course",icon:"1",free:"true",link:"https://www.scholarnest.in/enroll/2080264?et=free_trial"},
      {ansId:2,det:"Course Prerequisite",icon:"1",free:"true",link:"https://www.scholarnest.in/enroll/2080264?et=free_trial"}]
      },
      {
      id:2,
      ques:"Set Your Environment",
      ans:[
      {ansId:1,det:"Spark Development Environment",icon:"1",free:"true",link:"https://www.scholarnest.in/enroll/2080264?et=free_trial"},
      {ansId:2,det:"Spark Installation Prerequisites",icon:"1",free:"true",link:"https://www.scholarnest.in/enroll/2080264?et=free_trial"},
      {ansId:3,det:"Installing Apache Spark - Windows",icon:"1",free:"false",link:""},
      {ansId:4,det:"Setup and Test your IDE - PyCharm for Windows",icon:"1",free:"false",link:""},
      {ansId:5,det:"Installing Apache Spark - Mac",icon:"1",free:"false",link:""},
      {ansId:6,det:"Setup and Test your IDE - PyCharm for Mac",icon:"1",free:"false",link:""},
      {ansId:7,det:"Install and Run Apache Kafka",icon:"1",free:"false",link:""}]
      },
      {
      id:3,
      ques:"Getting started with Spark Structured Streaming",
      ans:[
      {ansId:1,det:"Introduction to Stream Processing",icon:"1",free:"true",link:"https://www.scholarnest.in/enroll/2080264?et=free_trial"},
      {ansId:2,det:"Spark Streaming APIs - DStream Vs Structured Streaming",icon:"1",free:"false",link:""},
      {ansId:3,det:"Creating your First Stream Processing Application",icon:"1",free:"false",link:""},
      {ansId:4,det:"Stream Processing Model in Spark",icon:"1",free:"false",link:""},
      {ansId:5,det:"Working with Files and Directories",icon:"1",free:"false",link:""},
      {ansId:6,det:"Streaming Sources Sinks and Output Mode",icon:"1",free:"false",link:""},
      {ansId:7,det:"Fault Tolerance and Restarts",icon:"1",free:"false",link:""}]
      },
      {
      id:4,
      ques:"Spark Streaming with Kafka",
      ans:[
      {ansId:1,det:"Streaming from Kafka Source",icon:"1",free:"false",link:""},
      {ansId:2,det:"Working with Kafka Sinks",icon:"1",free:"false",link:""},
      {ansId:3,det:"Multi-query Streams Application",icon:"1",free:"false",link:""},
      {ansId:4,det:"Kafka Serialization and Deserialization for Spark",icon:"1",free:"false",link:""},
      {ansId:5,det:"Creating Kafka AVRO Sinks",icon:"1",free:"false",link:""},
      {ansId:6,det:"Working with Kafka AVRO Source",icon:"1",free:"false",link:""}]
      },
      {
      id:5,
      ques:"Windowing and Aggregates",
      ans:[
      {ansId:1,det:"Stateless Vs Stateful Transformations",icon:"1",free:"false",link:""},
      {ansId:2,det:"Event Time and Windowing",icon:"1",free:"false",link:""},
      {ansId:3,det:"Tumbling Window Aggregate",icon:"1",free:"false",link:""},
      {ansId:4,det:"Watermarking your Windows",icon:"1",free:"false",link:""},
      {ansId:5,det:"Watermark and Output Modes",icon:"1",free:"false",link:""},
      {ansId:6,det:"Sliding Window",icon:"1",free:"false",link:""}]
      },
      

  ]
  const extraCourseSection = [
    {
      id:6,
      ques:"Stream Processing and Joins",
      ans:[
      {ansId:1,det:"Joining Stream to Static Source",icon:"1",free:"false",link:""},
      {ansId:2,det:"Joining Stream to Another Stream",icon:"1",free:"false",link:""},
      {ansId:3,det:"Streaming Watermark",icon:"1",free:"false",link:""},
      {ansId:4,det:"Streaming Outer Joins",icon:"1",free:"false",link:""}]
      },
      
      
      
      
  ]

  const renderIcon = (icon) => {
    // Depending on the icon value, render the respective icon
    // You can replace these with your own icon components or images
    if (icon === "1") {
      return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 40 40" fill="none">
      <path d="M5.5 10.0781H25.4259C26.6686 10.0781 27.6759 11.0855 27.6759 12.3281V27.0689C27.6759 28.3115 26.6686 29.3189 25.4259 29.3189H5.5C4.25736 29.3189 3.25 28.3115 3.25 27.0689V12.3281C3.25 11.0855 4.25736 10.0781 5.5 10.0781Z" stroke="black" stroke-width="1.5"/>
      <path d="M28.3368 15.4077L34.7071 10.2318C35.524 9.56807 36.7454 10.1494 36.7454 11.2019V28.2778C36.7454 29.3078 35.5694 29.8958 34.7454 29.2778L28.375 24.5C28.0602 24.2639 27.875 23.8934 27.875 23.5V16.3779C27.875 16.0015 28.0446 15.6451 28.3368 15.4077Z" stroke="black" stroke-width="1.5"/>
      </svg>; // Replace with your icon
    } else if (icon === "2") {
      return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 40 40" fill="none">
      <path d="M10.8696 31.3261C8.64982 31.3261 6.52099 30.4443 4.95139 28.8747C3.38179 27.3051 2.5 25.1763 2.5 22.9565C2.5 20.7368 3.38179 18.6079 4.95139 17.0383C6.52099 15.4687 8.64982 14.587 10.8696 14.587C12.3913 11.0109 15.8913 8.5 20 8.5C25.2196 8.5 29.4957 12.5478 29.8913 17.6761L30.6522 17.6304C34.4565 17.6304 37.5 20.6739 37.5 24.4783C37.5 28.2826 34.4565 31.3261 30.6522 31.3261H10.8696ZM10.8696 16.1087C7.06522 16.1087 4.02174 19.1522 4.02174 22.9565C4.02174 26.7609 7.06522 29.8043 10.8696 29.8043H30.6522C32.0647 29.8043 33.4195 29.2432 34.4183 28.2444C35.4171 27.2455 35.9783 25.8908 35.9783 24.4783C35.9783 23.0657 35.4171 21.711 34.4183 20.7121C33.4195 19.7133 32.0647 19.1522 30.6522 19.1522C29.8 19.1522 28.9783 19.35 28.263 19.7152L28.3696 18.3913C28.3696 16.1716 27.4878 14.0427 25.9182 12.4731C24.3486 10.9035 22.2197 10.0217 20 10.0217C18.1642 10.0228 16.3794 10.6263 14.9197 11.7396C13.46 12.8529 12.406 14.4146 11.9196 16.1848L10.8696 16.1087ZM20.7609 16.1087V24.0978L24.1848 20.6739L25.3261 21.6783L20 27.0043L14.6739 21.6783L15.8152 20.6739L19.2391 24.0978V16.1087H20.7609Z" fill="black"/>
      </svg>; // Replace with your icon
    } else if (icon === "3") {
      return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 40 40" fill="none">
      <path d="M5 5.125C5 3.67525 6.17525 2.5 7.625 2.5H32.125C33.5747 2.5 34.75 3.67525 34.75 5.125V30.5C34.75 34.366 31.616 37.5 27.75 37.5H7.625C6.17525 37.5 5 36.3247 5 34.875V5.125Z" stroke="black" stroke-width="1.3125"/>
      <path d="M35.1875 31.375H28.625V37.5" stroke="black" stroke-width="1.3125"/>
      <path d="M9.75346 20.5V12.2273H12.8557C13.4913 12.2273 14.0245 12.3458 14.4553 12.5827C14.8889 12.8197 15.2161 13.1456 15.4369 13.5603C15.6604 13.9723 15.7722 14.4409 15.7722 14.966C15.7722 15.4965 15.6604 15.9678 15.4369 16.3798C15.2134 16.7918 14.8835 17.1163 14.4473 17.3533C14.011 17.5876 13.4738 17.7047 12.8355 17.7047H10.7795V16.4727H12.6336C13.0052 16.4727 13.3095 16.4081 13.5465 16.2788C13.7835 16.1495 13.9585 15.9718 14.0716 15.7456C14.1874 15.5194 14.2453 15.2595 14.2453 14.966C14.2453 14.6725 14.1874 14.4139 14.0716 14.1904C13.9585 13.9669 13.7821 13.7932 13.5424 13.6693C13.3055 13.5428 12.9998 13.4795 12.6255 13.4795H11.2521V20.5H9.75346ZM19.8773 20.5H17.0739V12.2273H19.9338C20.7552 12.2273 21.4607 12.3929 22.0505 12.7241C22.6429 13.0527 23.098 13.5253 23.4158 14.142C23.7336 14.7586 23.8924 15.4965 23.8924 16.3556C23.8924 17.2173 23.7322 17.9579 23.4117 18.5772C23.094 19.1966 22.6348 19.6719 22.0343 20.0032C21.4365 20.3344 20.7175 20.5 19.8773 20.5ZM18.5725 19.2033H19.8045C20.3808 19.2033 20.8615 19.0983 21.2466 18.8883C21.6317 18.6755 21.9212 18.3591 22.1151 17.939C22.309 17.5162 22.4059 16.9884 22.4059 16.3556C22.4059 15.7227 22.309 15.1976 22.1151 14.7802C21.9212 14.3601 21.6344 14.0464 21.2547 13.839C20.8777 13.629 20.4091 13.5239 19.849 13.5239H18.5725V19.2033ZM25.3163 20.5V12.2273H30.616V13.4835H26.815V15.7294H30.2525V16.9857H26.815V20.5H25.3163Z" fill="black"/>
      </svg>; // Replace with your icon
    } else if (icon === "4") {
      return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 40 40" fill="none">
      <path d="M5 5.125C5 3.67525 6.17525 2.5 7.625 2.5H32.125C33.5747 2.5 34.75 3.67525 34.75 5.125V30.5C34.75 34.366 31.616 37.5 27.75 37.5H7.625C6.17525 37.5 5 36.3247 5 34.875V5.125Z" stroke="black" stroke-width="1.3125"/>
      <path d="M35.1875 31.375H28.625V37.5" stroke="black" stroke-width="1.3125"/>
      <circle cx="12.875" cy="16.5" r="7" stroke="black" stroke-width="1.3125"/>
      <circle cx="27.3125" cy="16.5" r="7" stroke="black" stroke-width="1.3125"/>
      <g clip-path="url(#clip0_1788_3931)">
      <path d="M12.003 17.8891L16.0245 13.8672L16.6436 14.4858L12.003 19.1264L9.21875 16.3421L9.83738 15.7235L12.003 17.8891Z" fill="black"/>
      </g>
      <g clip-path="url(#clip1_1788_3931)">
      <path d="M27.3155 15.8844L29.4811 13.7188L30.0998 14.3374L27.9341 16.503L30.0998 18.6686L29.4811 19.2873L27.3155 17.1216L25.1499 19.2873L24.5312 18.6686L26.6969 16.503L24.5312 14.3374L25.1499 13.7188L27.3155 15.8844Z" fill="black"/>
      </g>
      <defs>
      <clipPath id="clip0_1788_3931">
      <rect width="10.5" height="10.5" fill="white" transform="translate(7.625 11.25)"/>
      </clipPath>
      <clipPath id="clip1_1788_3931">
      <rect width="10.5" height="10.5" fill="white" transform="translate(22.0625 11.25)"/>
      </clipPath>
      </defs>
      </svg>
      ;
      // Handle other cases or return a default icon
    } else {
      return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 40 40" fill="none">
      <path d="M5 5.125C5 3.67525 6.17525 2.5 7.625 2.5H32.125C33.5747 2.5 34.75 3.67525 34.75 5.125V30.5C34.75 34.366 31.616 37.5 27.75 37.5H7.625C6.17525 37.5 5 36.3247 5 34.875V5.125Z" stroke="black" stroke-width="1.3125"/>
      <line x1="11.125" y1="25.4688" x2="28.625" y2="25.4688" stroke="black" stroke-width="1.3125"/>
      <line x1="11.125" y1="29.8438" x2="22.5" y2="29.8438" stroke="black" stroke-width="1.3125"/>
      <path d="M35.1875 31.375H28.625V37.5" stroke="black" stroke-width="1.3125"/>
      <path d="M18.0518 21.3672C17.9469 21.3307 17.7214 21.3125 17.375 21.3125H13.4648C13.2279 21.3125 13.0365 21.276 12.8906 21.2031C12.7493 21.1257 12.6787 20.9867 12.6787 20.7861C12.6787 20.6449 12.7152 20.5286 12.7881 20.4375C12.9613 20.4831 13.1253 20.5059 13.2803 20.5059C13.4352 20.5059 13.5811 20.4899 13.7178 20.458C13.8545 20.4261 13.9844 20.3691 14.1074 20.2871C14.3991 20.1003 14.554 19.8154 14.5723 19.4326V11.8311H13.6836C13.0228 11.8311 12.5898 11.863 12.3848 11.9268C12.1842 11.986 12.0316 12.0635 11.9268 12.1592C11.8265 12.2549 11.7445 12.3848 11.6807 12.5488C11.5667 12.8314 11.4779 13.319 11.4141 14.0117C11.3138 14.0345 11.2227 14.0459 11.1406 14.0459C10.9583 14.0459 10.8421 13.998 10.792 13.9023C10.7419 13.8066 10.7077 13.7087 10.6895 13.6084C10.6712 13.5036 10.6576 13.3896 10.6484 13.2666C10.6302 13.0205 10.6211 12.7585 10.6211 12.4805C10.6211 11.7194 10.6803 11.2363 10.7988 11.0312C10.9173 10.8125 11.1543 10.7031 11.5098 10.7031C11.5781 10.7031 11.6784 10.71 11.8105 10.7236C11.9427 10.7373 12.1341 10.7533 12.3848 10.7715C13.0638 10.8125 13.8773 10.833 14.8252 10.833H15.9805C17.3021 10.833 18.1862 10.8125 18.6328 10.7715C19.0794 10.7259 19.3574 10.7031 19.4668 10.7031C19.5762 10.7031 19.6764 10.7191 19.7676 10.751C19.8587 10.7829 19.9316 10.8285 19.9863 10.8877C20.0729 10.988 20.1162 11.1133 20.1162 11.2637C20.1162 11.4915 20.1094 11.6738 20.0957 11.8105C20.082 11.9473 20.0661 12.109 20.0479 12.2959C20.0342 12.4827 20.0137 12.6764 19.9863 12.877C19.9225 13.3509 19.8428 13.6768 19.7471 13.8545C19.6559 13.9821 19.5443 14.0459 19.4121 14.0459C19.2845 14.0459 19.1706 14.0345 19.0703 14.0117L19.0771 13.5811C19.0771 13.1755 19.0544 12.8564 19.0088 12.624C18.9632 12.387 18.8675 12.2116 18.7217 12.0977C18.5758 11.9792 18.3662 11.9062 18.0928 11.8789C17.8193 11.847 17.4548 11.8311 16.999 11.8311H16.1787V19.6992C16.1787 20.0273 16.4408 20.2552 16.9648 20.3828C17.0924 20.4102 17.2132 20.4352 17.3271 20.458C17.4456 20.4808 17.5596 20.5059 17.6689 20.5332C17.7783 20.556 17.8695 20.5856 17.9424 20.6221C18.0882 20.695 18.1611 20.818 18.1611 20.9912C18.1611 21.1507 18.1247 21.276 18.0518 21.3672Z" fill="black"/>
      <path d="M23.5234 21.1875L22.1934 19.1808L21.0151 21.1875H19.2651L21.3768 17.9442L19.2418 14.7242H21.0851L22.4034 16.7192L23.5934 14.7242H25.3434L23.2201 17.9442L25.3668 21.1875H23.5234Z" fill="black"/>
      </svg>
      ;
    }
  };
  const ExtendCourseList = () => {
    if (showMoreLessText === 'Show more') {
      const extendedList = [...courseSections, ...extraCourseSection];
      setcourseSections(extendedList)
      setShowMoreLessText('Show less');
    } else {
      setShowMoreLessText('Show more');
      setcourseSections(halfcourseSections);
    }
  }
  return (
    <>
      <div class={classes.mainBody}>
        {/* className={classes.banner + " " + classes.bannerForDb + " d-flex justify-content-center align-items-center" */}
        <div className={classes.newbanner+' row mx-0'} >
          <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
                  <div>
                        <h1 class="text-center">Apache Spark 3 - Real-time Stream Processing using Python</h1>

                        <h3 class="text-dark text-center"> Self-Paced Learning</h3>
                    
                        <div class={classes.butns + " row gap-2 justify-content-center"}>
                        <a class={classes.nfpbutn+" col-sm-5 col-md-4  col-12 text-center "} 
                        href="https://www.scholarnest.in/enroll/2080264">
                         Buy $24.79
                        </a>
                        <a  href='https://www.scholarnest.in/enroll/2080264?et=free_trial' class=" col-sm-5 col-md-3 col-12 btn btn-light  text-center  "> Free Preview  </a>
                   
            
                </div>
                        </div>
                  
                    
                    
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-center align-items-center py-5 px-3">
          <img className={classes.imgFor2ndTypeSubCourse+' img-fluid '} src="/assets/solutions/AcademySolutions/10.png" alt="AWS Cloud Practitioner" />
          </div>
        </div>
        <br />
        <br />

        {/* 3rd Section */}

        {/* 4th section */}
        <div  style={{ backgroundColor: "rgb(251 251 249)" }}>
          <br />
          <div className={classes.fifthDiv + ' row mx-2 px-md-5'}>

            <h2>
            Course curriculum
            </h2>
        
            <br />

            <div className="col-md-8 col-12">
              <div className={" "}>

                {
                  courseSections.map((quest) => {
                    function openSolution(ques_id) {
                      const elem = document.getElementById(ques_id)
                      if (elem.style.display === "none") {
                        elem.style.display = "block";
                      } else {
                        elem.style.display = "none";
                      }
                    }
                    return (
                      <div class="my-2 mx-md-2" >
                        <div style={{ cursor: "pointer" }} onClick={() => { openSolution(quest.id) }} className="row rounded    w-100 justify-content-between question">
                          <h3 class={classes.h3style + " col-10 d-flex"}> {quest.ques}</h3>
                          <div class="col-2  text-end d-flex justify-content-center align-items-center" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi  bi-caret-down-fill" viewBox="0 0 16 16">
                              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                          </div>
                        </div>
                        <div style={{ display: "none" }} class=" " id={quest.id}>

                          {quest.ans.map(answer => (

                            <div class='my-3' key={answer.ansId}>
                              {answer.free === "true" ? (
                                <a href={answer.link} className={classes.ansDiv}>

                                  <p className={classes.clickable + " d-flex gap-2"}> {renderIcon(answer.icon)} {answer.det}</p>


                                  <button class={classes.freePreview}>
                                    Free Preview
                                  </button>

                                </a>
                              ) : (
                                <span className='d-flex my-2'>
                                  <p className={classes.unclickable + " d-flex gap-2"}>{renderIcon(answer.icon)}   {answer.det} </p>
                                  {/* Add a disabled style for non-free items */}
                                </span>
                              )}
                            </div>
                          ))}

                        </div>
                        <hr />
                      </div>
                    )
                  })
                }
              </div>
              <button onClick={ExtendCourseList}> <p class='fw-bold my-2'> {showMoreLessText} </p></button>
            </div>
            <div className={classes.courseContent + " col-md-4 col-12"}>
              <Card.Body class={classes.cardDet+ " bg-white" } >
                <img class="w-100" src="/assets/solutions/AcademySolutions/10.png" alt="1" />
                <div className='ml-3 py-2'>
                  <h3 className={classes.h3style}>About this Course</h3>
                  <div class='mb-2' style={{ width: "50px", height: '1px', backgroundColor: 'black', marginLeft: '10px' }}></div>
                  <div className=' ml-2 px-3 py-2'>
                    <div className="d-flex my-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class={classes.sideBoxIcon + " bi mr-2 bi-tag-fill"} viewBox="0 0 16 16">
                        <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                      </svg>
                      <p class={classes.sideBox}>$24.79</p>
                    </div>
                  
                    <div className="d-flex my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class={classes.sideBoxIcon+" mr-2 "} viewBox="0 0 40 40" fill="none">
<path d="M5.4375 3.2H24.6875V1.8H5.4375V3.2ZM5.7 37.0625V2.9375H4.3V37.0625H5.7ZM34.3125 36.8H5.4375V38.2H34.3125V36.8ZM34.05 14.3125V37.0625H35.45V14.3125H34.05ZM34.3125 13.175H25.5625V14.575H34.3125V13.175ZM25.825 13.4375V2.9375H24.425V13.4375H25.825ZM25.5625 13.175C25.7075 13.175 25.825 13.2925 25.825 13.4375H24.425C24.425 14.0657 24.9343 14.575 25.5625 14.575V13.175ZM35.45 14.3125C35.45 13.6843 34.9407 13.175 34.3125 13.175V14.575C34.1675 14.575 34.05 14.4575 34.05 14.3125H35.45ZM34.3125 38.2C34.9407 38.2 35.45 37.6907 35.45 37.0625H34.05C34.05 36.9175 34.1675 36.8 34.3125 36.8V38.2ZM4.3 37.0625C4.3 37.6907 4.80928 38.2 5.4375 38.2V36.8C5.58247 36.8 5.7 36.9175 5.7 37.0625H4.3ZM24.6875 3.2C24.5425 3.2 24.425 3.08247 24.425 2.9375H25.825C25.825 2.30928 25.3157 1.8 24.6875 1.8V3.2ZM5.4375 1.8C4.80928 1.8 4.3 2.30927 4.3 2.9375H5.7C5.7 3.08248 5.58247 3.2 5.4375 3.2V1.8Z" fill="black"/>
<path d="M25.125 2.5L34.7832 13.813" stroke="black" stroke-width="1.3125" stroke-linecap="round"/>
<line x1="12" y1="19.125" x2="27.75" y2="19.125" stroke="black" stroke-width="1.75"/>
<line x1="12" y1="24.375" x2="27.75" y2="24.375" stroke="black" stroke-width="1.75"/>
<line x1="12" y1="29.625" x2="27.75" y2="29.625" stroke="black" stroke-width="1.75"/>
</svg>
                      <p class={classes.sideBox}>32 lessons</p>
                    </div>
                    <div className="d-flex my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class={classes.sideBoxIcon+" mr-2 "} viewBox="0 0 40 40" fill="none">
<circle cx="20" cy="20" r="15" stroke="black" stroke-width="4"/>
<path d="M28.4084 18.7188L15.7097 11.9159C14.9361 11.5015 14 12.0619 14 12.9396V26.9989C14 27.8906 14.9633 28.4496 15.7375 28.0072L28.4362 20.7507C29.2287 20.2979 29.213 19.1498 28.4084 18.7188Z" fill="black"/>
</svg>                          <p class={classes.sideBox}>0 hours of video content</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer > </Card.Footer>
            </div>
          </div>

        </div>


        <br />
        <br />

        <div style={{ minHeight: "150px" }} class={classes.div4 + " row mx-0 p-3 "}>
          <div class='col-12 col-md-8  d-flex justify-content-center align-items-center '>
            <div class={classes.enroll}>
              <h2 class={classes.headings + " fw-bold"}>Discover your potential,  starting <br /> today</h2>
              <br />
            </div>

          </div>

          <div class=" col-md-2 col-8 d-flex justify-content-center  align-items-center">
            <button onClick={() => { router.push("https://www.scholarnest.in/enroll/2080264") }} class="btn rounded-pill w-75  p-2 text-center text-dark btn-light fw-bold">Enroll today </button>
          </div>


        </div>



      </div>
    </>
  )
}
export default ApacheSpark3Container;
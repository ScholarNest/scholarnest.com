import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Card } from "@nextui-org/react";
import classes from "./style/extraCourses.module.css";
import { useRouter } from "next/router";

const ApacheKafkaForBegginer = () => {
  const router = useRouter();
  const [courseSections, setcourseSections] = useState([]);
  const [showMoreLessText, setShowMoreLessText] = useState('Show more');
  useEffect((() => {
    setcourseSections(halfcourseSections);
  }), [])
  const halfcourseSections = [
    {
      id:1,
      ques:"Apache Kafka for Beginners: Downloadable Materials",
      ans:[
      {ansId:1,det:"Downloadable Materials",icon:"2",free:"false",link:""}]
      },
      {
      id:2,
      ques:"Apache Kafka Ecosystem - The Big Picture",
      ans:[
      {ansId:1,det:"What is Apache Kafka - An Introduction and Overview",icon:"1",free:"true",link:"https://www.scholarnest.in/enroll/2219479?et=free_trial"},
      {ansId:2,det:"Apache Kafka Core Concepts",icon:"1",free:"true",link:"https://www.scholarnest.in/enroll/2219479?et=free_trial"},
      {ansId:3,det:"Kafka Connect Core Concepts",icon:"1",free:"false",link:""},
      {ansId:4,det:"Kafka Streams Core Concepts",icon:"1",free:"false",link:""},
      {ansId:5,det:"Kafka SQL Core Concepts",icon:"1",free:"false",link:""},
      {ansId:6,det:"Kafka Ecosystem - When to use What",icon:"1",free:"true",link:"https://www.scholarnest.in/enroll/2219479?et=free_trial"}]
      },
      {
      id:3,
      ques:"Apache Kafka - Getting Started",
      ans:[
      {ansId:1,det:"Apache Kafka Quick Start",icon:"1",free:"true",link:"https://www.scholarnest.in/enroll/2219479?et=free_trial"},
      {ansId:2,det:"Installing Single Node Kafka",icon:"1",free:"false",link:""},
      {ansId:3,det:"Command-Line Producer and Consumer",icon:"1",free:"false",link:""},
      {ansId:4,det:"Installing a Multi-Node Kafka Cluster",icon:"1",free:"false",link:""},
      {ansId:5,det:"Using Consumer Groups",icon:"1",free:"false",link:""},
      {ansId:6,det:"Configuring your IDE",icon:"1",free:"false",link:""}]
      },
      {
      id:4,
      ques:"Apache Kafka - Storage Architecture",
      ans:[
      {ansId:1,det:"Understanding Kafka Brokers",icon:"1",free:"false",link:""},
      {ansId:2,det:"Kafka Topics and Partitions",icon:"1",free:"false",link:""},
      {ansId:3,det:"Topic Replication",icon:"1",free:"false",link:""},
      {ansId:4,det:"Partition Leaders and Followers",icon:"1",free:"false",link:""},
      {ansId:5,det:"Kafka Log Segments",icon:"1",free:"false",link:""},
      {ansId:6,det:"Kafka Message Offsets",icon:"1",free:"false",link:""},
      {ansId:7,det:"Kafka Message Index",icon:"1",free:"false",link:""}]
      },
      {
      id:5,
      ques:"Apache Kafka - Cluster Architecture",
      ans:[
      {ansId:1,det:"Kafka Cluster Architecture",icon:"1",free:"false",link:""},
      {ansId:2,det:"Zookeeper in Kafka",icon:"1",free:"false",link:""},
      {ansId:3,det:"Kafka Cluster Controller",icon:"1",free:"false",link:""},
      {ansId:4,det:"Partition Allocation and Fault Tolerance",icon:"1",free:"false",link:""},
      {ansId:5,det:"Partition Leader Vs Follower",icon:"1",free:"false",link:""},
      {ansId:6,det:"The ISR List - In Sync Replica",icon:"1",free:"false",link:""},
      {ansId:7,det:"Committed Vs Un-Committed Records",icon:"1",free:"false",link:""},
      {ansId:8,det:"Minimum ISR List",icon:"1",free:"false",link:""}]
      },
      


  ]
  const extraCourseSection = [
    {
      id:6,
      ques:"Kafka Producers Internals",
      ans:[
      {ansId:1,det:"Introducing Producer APIs",icon:"1",free:"false",link:""},
      {ansId:2,det:"Creating your first Kafka Producer",icon:"1",free:"false",link:""},
      {ansId:3,det:"Producer Record",icon:"1",free:"false",link:""},
      {ansId:4,det:"Producer Serializer",icon:"1",free:"false",link:""},
      {ansId:5,det:"Producer Partitioner",icon:"1",free:"false",link:""},
      {ansId:6,det:"Message Timestamp",icon:"1",free:"false",link:""},
      {ansId:7,det:"Producer Message Buffer",icon:"1",free:"false",link:""},
      {ansId:8,det:"Producer IO Thread and Retires",icon:"1",free:"false",link:""},
      {ansId:9,det:"Producer Internals Summary",icon:"1",free:"false",link:""}]
      },
      {
      id:7,
      ques:"Advanced Kafka Producers",
      ans:[
      {ansId:1,det:"Horizontal Vs Vertical Scalability",icon:"1",free:"false",link:""},
      {ansId:2,det:"Producer Multi-Threading Scenario",icon:"1",free:"false",link:""},
      {ansId:3,det:"Creating Multi-Threaded Kafka Producer",icon:"1",free:"false",link:""},
      {ansId:4,det:"At Least Once Vs. At Most Once",icon:"1",free:"false",link:""},
      {ansId:5,det:"Exactly Once - Producer Idempotence",icon:"1",free:"false",link:""},
      {ansId:6,det:"Transactions in Kafka Producer",icon:"1",free:"false",link:""}]
      },
      {
      id:8,
      ques:"Types and Serialization",
      ans:[
      {ansId:1,det:"Working with Types and Serialization",icon:"1",free:"false",link:""},
      {ansId:2,det:"Using JSON Schema",icon:"1",free:"false",link:""},
      {ansId:3,det:"Using AVRO Schema",icon:"1",free:"false",link:""}]
      },
      {
      id:9,
      ques:"Micro Project - Summing Up the Producer",
      ans:[
      {ansId:1,det:"POS Simulator using JSON Serialized Invoices",icon:"1",free:"false",link:""},
      {ansId:2,det:"POS Simulator using AVRO Serialized Invoices",icon:"1",free:"false",link:""}]
      },
      {
      id:10,
      ques:"Kafka Consumers",
      ans:[
      {ansId:1,det:"Kafka Consumers Introduction",icon:"1",free:"false",link:""},
      {ansId:2,det:"Creating Kafka Consume - Transform - Produce Pipeline",icon:"1",free:"false",link:""},
      {ansId:3,det:"Consumer Group and Scalability",icon:"1",free:"false",link:""},
      {ansId:4,det:"Consumer Positions - Current Offset Vs. Committed Offset",icon:"1",free:"false",link:""}]
      },
      {
      id:11,
      ques:"Where to go Next?",
      ans:[
      {ansId:1,det:"Challenges with Kafka Consumers",icon:"1",free:"false",link:""},
      {ansId:2,det:"What Is Next?",icon:"1",free:"false",link:""}]
      }
      

  ]

  const renderIcon = (icon) => {
    // Depending on the icon value, render the respective icon
    // You can replace these with your own icon components or images
    if (icon === "1") {
      return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
      </svg>; // Replace with your icon
    } else if (icon === "2") {
      return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-cloud-arrow-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z" />
        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
      </svg>; // Replace with your icon
    } else if (icon === "3") {
      return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z" />
      </svg>; // Replace with your icon
    } else if (icon === "4") {
      return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-journal-code" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z" />
        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
      </svg>;
      // Handle other cases or return a default icon
    } else {
      return null;
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
                        <h1 class="text-center">Apache Kafka for Beginners</h1>

                        <h3 class="text-dark text-center"> Self-Paced Learning</h3>
                       <div className={classes.butns+" row justify-content-center gap-2"}>
                        <button class={classes.nfpbutn +"  col-sm-5 col-md-4 col-12 btn"} onClick={() => { router.push('https://www.scholarnest.in/order?ct=3edcdc86-1bcf-4d7d-a980-7896e1deb069') }} >   Buy $36.79</button>
                        <button  onClick={()=>{router.push('https://www.scholarnest.in/order?ct=4a985180-1b61-4aee-8dfa-cf06b6fa5ff5')}} class=" col-sm-5 col-md-3 col-12 btn btn-light "> Free Preview  </button>

                        </div>
                        </div>
                  
                    
                    
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-center align-items-center py-5 px-3">
          <img className={classes.imgFor2ndTypeSubCourse+' img-fluid '} src="/assets/solutions/AcademySolutions/6.png" alt="Apachce Kafka for begginers" />
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
                <img class="w-100" src="/assets/solutions/AcademySolutions/6.png" alt="1" />
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class={classes.sideBoxIcon + " bi bi-journal-check mr-2 "}  viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
</svg>
                      <p class={classes.sideBox}>54 lessons</p>
                    </div>
                    <div className="d-flex my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  class={classes.sideBoxIcon + " bi bi-play-circle mr-2 "} viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
</svg>                      <p class={classes.sideBox}>0 hours of video content</p>
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
            <button onClick={() => { router.push("https://www.scholarnest.in/order?ct=3edcdc86-1bcf-4d7d-a980-7896e1deb069") }} class="btn rounded-pill w-75  p-2 text-center text-dark btn-light fw-bold">Enroll today </button>
          </div>


        </div>



      </div>
    </>
  )
}
export default ApacheKafkaForBegginer;
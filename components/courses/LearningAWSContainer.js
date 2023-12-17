import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Card } from "@nextui-org/react";
import classes from "./style/extraCourses.module.css";
import { useRouter } from "next/router";

const LearningAWSContainer = () => {
  const router = useRouter();
  const [courseSections, setcourseSections] = useState([]);
  const [showMoreLessText, setShowMoreLessText] = useState('Show more');
  useEffect((() => {
    setcourseSections(halfcourseSections);
  }), [])
  const halfcourseSections = [
    {
      id:1,
      ques:"Introduction to AWS Cloud Practitioner Certification",
      ans:[
      {ansId:1,det:"Introduction to AWS Cloud Practitioner Certification",icon:"1",free:"true",link:"https://www.scholarnest.in/enroll/2222089?et=free_trial"},
      {ansId:2,det:"Certification Curriculum",icon:"1",free:"true",link:"https://www.scholarnest.in/enroll/2222089?et=free_trial"}]
      },
      {
      id:2,
      ques:"Getting Started with AWS",
      ans:[
      {ansId:1,det:"What is Cloud Computing",icon:"1",free:"true",link:"https://www.scholarnest.in/enroll/2222089?et=free_trial"},
      {ansId:2,det:"Introducing AWS Cloud Infrastructure",icon:"1",free:"true",link:"https://www.scholarnest.in/enroll/2222089?et=free_trial"},
      {ansId:3,det:"AWS Core Service Categories",icon:"1",free:"false",link:""},
      {ansId:4,det:"Creating your AWS Account",icon:"1",free:"false",link:""},
      {ansId:5,det:"Creating IAM User Account",icon:"1",free:"false",link:""},
      {ansId:6,det:"Creating your first service",icon:"1",free:"false",link:""},
      {ansId:7,det:"Managing your AWS cost",icon:"1",free:"false",link:""}]
      },
      {
      id:3,
      ques:"AWS Networking and VPC",
      ans:[
      {ansId:1,det:"Networking Fundamentals",icon:"1",free:"false",link:""},
      {ansId:2,det:"Extended Networks",icon:"1",free:"false",link:""},
      {ansId:3,det:"Understanding to AWS VPC",icon:"1",free:"false",link:""},
      {ansId:4,det:"Route table and Internet Gateway",icon:"1",free:"false",link:""},
      {ansId:5,det:"Elastic IP and NAT Gateway",icon:"1",free:"false",link:""},
      {ansId:6,det:"AWS PrivateLink and VPC Endpoints",icon:"1",free:"false",link:""},
      {ansId:7,det:"VPC Peering and Transit Gateway",icon:"1",free:"false",link:""},
      {ansId:8,det:"Site to Site VPN and Direct Connects",icon:"1",free:"false",link:""},
      {ansId:9,det:"Shared Responsibility Model",icon:"1",free:"false",link:""},
      {ansId:10,det:"Security Groups, NACLs and Flow Logs",icon:"1",free:"false",link:""}]
      },
      {
      id:4,
      ques:"Identity and Access Management",
      ans:[
      {ansId:1,det:"Global Vs Local Services",icon:"1",free:"false",link:""},
      {ansId:2,det:"IAM Users and Groups",icon:"1",free:"false",link:""},
      {ansId:3,det:"Introduction to Policies",icon:"1",free:"false",link:""},
      {ansId:4,det:"RBACK - Role Based Access Control",icon:"1",free:"false",link:""},
      {ansId:5,det:"RBACK - Cross Account Roles",icon:"1",free:"false",link:""},
      {ansId:6,det:"RBACK - EC2 Roles",icon:"1",free:"false",link:""},
      {ansId:7,det:"Users, Groups, Roles and Policies - Stiching it together",icon:"1",free:"false",link:""},
      {ansId:8,det:"Fine Grained Access Control - Scenarios",icon:"1",free:"false",link:""},
      {ansId:9,det:"Service Authorization",icon:"1",free:"false",link:""},
      {ansId:10,det:"AWS ABACK - Attribute Based Access Control",icon:"1",free:"false",link:""},
      {ansId:11,det:"IAM Security Tools",icon:"1",free:"false",link:""},
      {ansId:12,det:"IAM Best Practices",icon:"1",free:"false",link:""},
      {ansId:13,det:"AWS CLI and Cloud Shell",icon:"1",free:"false",link:""}]
      },
      {
      id:5,
      ques:"Amazon Elastic Compute Cloud",
      ans:[
      {ansId:1,det:"Introduction to Amazon EC2",icon:"1",free:"false",link:""},
      {ansId:2,det:"AMI - Amazon Machine Image",icon:"1",free:"false",link:""},
      {ansId:3,det:"EC2 Instances and Instance Type",icon:"1",free:"false",link:""},
      {ansId:4,det:"Storage options for EC2",icon:"1",free:"false",link:""},
      {ansId:5,det:"Installing Software on EC2",icon:"1",free:"false",link:""},
      {ansId:6,det:"Instance Configurations",icon:"1",free:"false",link:""},
      {ansId:7,det:"Instance User Data and Metadata",icon:"1",free:"false",link:""},
      {ansId:8,det:"EC2 Networking, Security and Monitoring",icon:"1",free:"false",link:""}]
      },
      
      


  ]
  const extraCourseSection = [
    {
      id:6,
      ques:"Load Balancing and Auto Scaling",
      ans:[
      {ansId:1,det:"Scalability, Elasticity and High Availability",icon:"1",free:"false",link:""},
      {ansId:2,det:"Elastic Load Balancer",icon:"1",free:"false",link:""},
      {ansId:3,det:"Using Application Load Balancer",icon:"1",free:"false",link:""},
      {ansId:4,det:"Auto Scaling and Elasticity",icon:"1",free:"false",link:""},
      {ansId:5,det:"Auto Scaling Group",icon:"1",free:"false",link:""},
      {ansId:6,det:"Auto Scaling Policies",icon:"1",free:"false",link:""}]
      },
      {
      id:7,
      ques:"Amazon S3 and Other Storage Services",
      ans:[
      {ansId:1,det:"Introduction to Amazon S3",icon:"1",free:"false",link:""},
      {ansId:2,det:"Amazon S3 Use Cases",icon:"1",free:"false",link:""},
      {ansId:3,det:"S3 Security Models",icon:"1",free:"false",link:""},
      {ansId:4,det:"S3 Security - When to use what",icon:"1",free:"false",link:""},
      {ansId:5,det:"S3 Bucket Policy Demo",icon:"1",free:"false",link:""},
      {ansId:6,det:"S3 Storage Class",icon:"1",free:"false",link:""},
      {ansId:7,det:"S3 Versioning",icon:"1",free:"false",link:""},
      {ansId:8,det:"S3 Lifecycle Rules",icon:"1",free:"false",link:""},
      {ansId:9,det:"S3 Replication",icon:"1",free:"false",link:""},
      {ansId:10,det:"Hosting website in S3",icon:"1",free:"false",link:""},
      {ansId:11,det:"AWS Snow Family",icon:"1",free:"false",link:""}]
      },
      {
      id:8,
      ques:"Database and Analytics Services",
      ans:[
      {ansId:1,det:"Introduction Databases in AWS",icon:"1",free:"false",link:""},
      {ansId:2,det:"Introduction to RDS",icon:"1",free:"false",link:""},
      {ansId:3,det:"Aurora Database",icon:"1",free:"false",link:""},
      {ansId:4,det:"Introduction to Redshift",icon:"1",free:"false",link:""},
      {ansId:5,det:"Amazon DynamoDB and DAX",icon:"1",free:"false",link:""},
      {ansId:6,det:"Introduction to Elastic Cache",icon:"1",free:"false",link:""},
      {ansId:7,det:"Amazon DocumentDB",icon:"1",free:"false",link:""},
      {ansId:8,det:"Amazon Keyspaces",icon:"1",free:"false",link:""},
      {ansId:9,det:"Amazon Neptune",icon:"1",free:"false",link:""},
      {ansId:10,det:"Amazon Timestream",icon:"1",free:"false",link:""},
      {ansId:11,det:"Amazon QLDB",icon:"1",free:"false",link:""},
      {ansId:12,det:"Amazon Blockchain",icon:"1",free:"false",link:""},
      {ansId:13,det:"Aurora Database",icon:"1",free:"false",link:""},
      {ansId:14,det:"Amazon Athena",icon:"1",free:"false",link:""},
      {ansId:15,det:"AWS Glue",icon:"1",free:"false",link:""},
      {ansId:16,det:"Amazon EMR",icon:"1",free:"false",link:""},
      {ansId:17,det:"Amazon QuickSight",icon:"1",free:"false",link:""},
      {ansId:18,det:"Amazon Kinesis",icon:"1",free:"false",link:""},
      {ansId:19,det:"Amazon Elastic Search",icon:"1",free:"false",link:""},
      {ansId:20,det:"Amazon DMS",icon:"1",free:"false",link:""},
      {ansId:21,det:"Amazon DataSync",icon:"1",free:"false",link:""}]
      },
      {
      id:9,
      ques:"Containers and Serverless",
      ans:[
      {ansId:1,det:"Introduction to Containers",icon:"1",free:"false",link:""},
      {ansId:2,det:"ECR, ECS, and ECS Anywhere",icon:"1",free:"false",link:""},
      {ansId:3,det:"EKS, EKS Anywhere and EKS Distro",icon:"1",free:"false",link:""},
      {ansId:4,det:"AWS Fargate and App Runner",icon:"1",free:"false",link:""},
      {ansId:5,det:"Introduction to Serverless",icon:"1",free:"false",link:""},
      {ansId:6,det:"AWS Lambda",icon:"1",free:"false",link:""},
      {ansId:7,det:"Amazon API Gateway",icon:"1",free:"false",link:""},
      {ansId:8,det:"Amazon SQS and SNS",icon:"1",free:"false",link:""}]
      },
      {
      id:10,
      ques:"Developer Tools and DevOps Services",
      ans:[
      {ansId:1,det:"AWS CloudFormation CDK and OpsWorks",icon:"1",free:"false",link:""},
      {ansId:2,det:"AWS Developer Tools",icon:"1",free:"false",link:""},
      {ansId:3,det:"Amazon Lightsail",icon:"1",free:"false",link:""},
      {ansId:4,det:"Amazon Beanstalk",icon:"1",free:"false",link:""},
      {ansId:5,det:"Amazon Batch",icon:"1",free:"false",link:""},
      {ansId:6,det:"AWS X-Ray",icon:"1",free:"false",link:""},
      {ansId:7,det:"Amazon CloudFront",icon:"1",free:"false",link:""},
      {ansId:8,det:"AWS Global Accelerator",icon:"1",free:"false",link:""}]
      },
      {
      id:11,
      ques:"Monitoring, Management and Governance",
      ans:[
      {ansId:1,det:"AWS Cloud Watch and Event Bridge",icon:"1",free:"false",link:""},
      {ansId:2,det:"AWS Organization SCP and Control Tower",icon:"1",free:"false",link:""},
      {ansId:3,det:"AWS Systems Manager",icon:"1",free:"false",link:""},
      {ansId:4,det:"AWS Service Catalog",icon:"1",free:"false",link:""},
      {ansId:5,det:"AWS Config",icon:"1",free:"false",link:""},
      {ansId:6,det:"Trusted Advisors",icon:"1",free:"false",link:""},
      {ansId:7,det:"Personal Health and Service Health",icon:"1",free:"false",link:""}]
      },
      {
      id:12,
      ques:"Cloud Security",
      ans:[
      {ansId:1,det:"Firewalls and DDOS Protection",icon:"1",free:"false",link:""},
      {ansId:2,det:"Encryption, KMS and HSM",icon:"1",free:"false",link:""},
      {ansId:3,det:"AWS Certificate Manager",icon:"1",free:"false",link:""},
      {ansId:4,det:"AWS Security and Audit Tools",icon:"1",free:"false",link:""},
      {ansId:5,det:"Penetration Testing",icon:"1",free:"false",link:""}]
      },
      {
      id:13,
      ques:"Account Management and Billing",
      ans:[
      {ansId:1,det:"AWS Pricing Fundamentals",icon:"1",free:"false",link:""},
      {ansId:2,det:"AWS Pricing Concepts",icon:"1",free:"false",link:""},
      {ansId:3,det:"AWS Pricing Models",icon:"1",free:"false",link:""},
      {ansId:4,det:"AWS Instance Type Scenarios",icon:"1",free:"false",link:""},
      {ansId:5,det:"AWS Cost Calculators",icon:"1",free:"false",link:""},
      {ansId:6,det:"AWS Billing and Cost Management",icon:"1",free:"false",link:""},
      {ansId:7,det:"AWS Support Plans",icon:"1",free:"false",link:""},
      {ansId:8,det:"AWS Well-Architected Framework",icon:"1",free:"false",link:""}]
      },
      {
      id:14,
      ques:"Getting Ready for Certification",
      ans:[
      {ansId:1,det:"Preparing for Exam and Some Tips",icon:"1",free:"false",link:""},
      {ansId:2,det:"Full Length Exam Practice Test - Solution and Explanation",icon:"1",free:"false",link:""}]
      },
      
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
                        <h1 class="text-center">AWS Cloud Practitioner</h1>

                        <h3 class="text-dark text-center"> Self-Paced Learning</h3>
                       <div className={classes.butns+" row justify-content-center gap-2"}>
                        <button class={classes.nfpbutn +"  col-sm-5 col-md-4 col-12 btn"} onClick={() => { router.push('https://www.scholarnest.in/order?ct=3edcdc86-1bcf-4d7d-a980-7896e1deb069') }} >   Buy $24.79</button>
                        <button  onClick={()=>{router.push('https://www.scholarnest.in/order?ct=4a985180-1b61-4aee-8dfa-cf06b6fa5ff5')}} class=" col-sm-5 col-md-3 col-12 btn btn-light "> Free Preview  </button>

                        </div>
                        </div>
                  
                    
                    
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-center align-items-center py-5 px-3">
          <img className={classes.imgFor2ndTypeSubCourse+' img-fluid '} src="/assets/solutions/AcademySolutions/8.jpg" alt="AWS Cloud Practitioner" />
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
                <img class="w-100" src="/assets/solutions/AcademySolutions/8.jpg" alt="1" />
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
export default LearningAWSContainer;
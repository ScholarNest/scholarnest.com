import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Card } from "@nextui-org/react";
import classes from "./style/extraCourses.module.css";
import { useRouter } from "next/router";

const JustPythonForPyspark = () => {
    const router = useRouter();
    const [courseSections, setcourseSections] = useState([]);
    const [showMoreLessText, setShowMoreLessText] = useState('Show more');
    useEffect((() => {
        setcourseSections(halfcourseSections);
    }), [])
    const halfcourseSections = [
      {
        id:1,
        ques:"Getting Started with Python",
        ans:[
        {ansId:1,det:"Course Structure - Must Watch",icon:"1",free:"true",link:"https://www.scholarnest.in/enroll/1976414?et=free_trial"},
        {ansId:2,det:"Introduction to Python",icon:"1",free:"true",link:"https://www.scholarnest.in/enroll/1976414?et=free_trial"},
        {ansId:3,det:"Introduction to Python - Notes",icon:"3",free:"false",link:""},
        {ansId:4,det:"Installing Python",icon:"1",free:"false",link:""},
        {ansId:5,det:"Installing Python - Notes",icon:"3",free:"false",link:""},
        {ansId:6,det:"Python Development Environments",icon:"1",free:"false",link:""},
        {ansId:7,det:"Python Development Environments - Notes",icon:"3",free:"false",link:""},
        {ansId:8,det:"Working with Jupyter Notebook",icon:"1",free:"false",link:""},
        {ansId:9,det:"Working with Jupyter Notebook - Notes",icon:"3",free:"false",link:""},
        {ansId:10,det:"Working with PyCharm IDE",icon:"1",free:"false",link:""},
        {ansId:11,det:"Working with PyCharm IDE - Notes",icon:"3",free:"false",link:""},
        {ansId:12,det:"Exercises and Solutions - Must Watch",icon:"6",free:"false",link:""}]
        },
        {
        id:2,
        ques:"Python Language Basics",
        ans:[
        {ansId:1,det:"Python Data Types",icon:"1",free:"false",link:""},
        {ansId:2,det:"Python Data Types - Notes",icon:"3",free:"false",link:""},
        {ansId:3,det:"Mathematical Operators in Python",icon:"1",free:"false",link:""},
        {ansId:4,det:"Mathematical Operators in Python - Notes",icon:"3",free:"false",link:""},
        {ansId:5,det:"Python Program Lexical Structure",icon:"1",free:"false",link:""},
        {ansId:6,det:"Python Program Lexical Structure - Notes",icon:"3",free:"false",link:""},
        {ansId:7,det:"Python If-else Expression",icon:"1",free:"false",link:""},
        {ansId:8,det:"Python If-else Expression - Notes",icon:"3",free:"false",link:""},
        {ansId:9,det:"Python Comparison Operators",icon:"1",free:"false",link:""},
        {ansId:10,det:"Python Comparison Operators - Notes",icon:"3",free:"false",link:""},
        {ansId:11,det:"Exercises and Solutions - Must Watch",icon:"2",free:"false",link:""}]
        },
        {
        id:3,
        ques:"Working with Python Sequences",
        ans:[
        {ansId:1,det:"Sequence Operations - Part 1",icon:"1",free:"false",link:""},
        {ansId:2,det:"Sequence Operations - Part 1 - Notes",icon:"3",free:"false",link:""},
        {ansId:3,det:"Sequence Operations - Part 2",icon:"1",free:"false",link:""},
        {ansId:4,det:"Sequence Operations - Part 2 - Notes",icon:"3",free:"false",link:""},
        {ansId:5,det:"Practice Exercise - 2",icon:"2",free:"false",link:""},
        {ansId:6,det:"Working with Python Strings",icon:"1",free:"false",link:""},
        {ansId:7,det:"Working with Python Strings - Notes",icon:"3",free:"false",link:""},
        {ansId:8,det:"Working with Python Lists and Tuples",icon:"1",free:"false",link:""},
        {ansId:9,det:"Working with Python Lists and Tuples - Notes",icon:"3",free:"false",link:""},
        {ansId:10,det:"Python Loops and Range",icon:"1",free:"false",link:""},
        {ansId:11,det:"Python Loops and Range - Notes",icon:"3",free:"false",link:""},
        {ansId:12,det:"Practice Exercise - 3",icon:"2",free:"false",link:""}]
        },
        {
        id:4,
        ques:"More Data Structures",
        ans:[
        {ansId:1,det:"Python Dictionaries",icon:"1",free:"false",link:""},
        {ansId:2,det:"Python Dictionaries - Notes",icon:"3",free:"false",link:""},
        {ansId:3,det:"Python Sets",icon:"1",free:"false",link:""},
        {ansId:4,det:"Python Sets - Notes",icon:"3",free:"false",link:""},
        {ansId:5,det:"Practice Exercise - 4",icon:"2",free:"false",link:""},
        {ansId:6,det:"Python Datetime Module",icon:"1",free:"false",link:""},
        {ansId:7,det:"Python Datetime Module - Notes",icon:"3",free:"false",link:""},
        {ansId:8,det:"Practice Exercise - 5",icon:"2",free:"false",link:""}]
        },
        {
        id:5,
        ques:"Coding Challenge - 1",
        ans:[
        {ansId:1,det:"Coding Challenge 01-10",icon:"2",free:"false",link:""},
        {ansId:2,det:"Coding Challenge 11-20",icon:"2",free:"false",link:""},
        {ansId:3,det:"Coding Challenge 21-30",icon:"2",free:"false",link:""}]
        },
        

    ]
    const extraCourseSection = [
      {
        id:6,
        ques:"Python Functions",
        ans:[
        {ansId:1,det:"Introduction to Functions",icon:"1",free:"false",link:""},
        {ansId:2,det:"Introduction to Functions - Notes",icon:"3",free:"false",link:""},
        {ansId:3,det:"Default and Keyword Arguments",icon:"1",free:"false",link:""},
        {ansId:4,det:"Default and Keyword Arguments - Notes",icon:"3",free:"false",link:""},
        {ansId:5,det:"Variable Length Arguments",icon:"1",free:"false",link:""},
        {ansId:6,det:"Variable Length Arguments - Notes",icon:"3",free:"false",link:""},
        {ansId:7,det:"Unpacking Function Arguments",icon:"1",free:"false",link:""},
        {ansId:8,det:"Unpacking Function Arguments - Notes",icon:"3",free:"false",link:""},
        {ansId:9,det:"Lambda Functions",icon:"1",free:"false",link:""},
        {ansId:10,det:"Lambda Functions - Notes",icon:"3",free:"false",link:""},
        {ansId:11,det:"Practice Exercise - 6",icon:"2",free:"false",link:""}]
        },
        {
        id:7,
        ques:"Errors and Exception Handling",
        ans:[
        {ansId:1,det:"Introduction to Errors and Exceptions",icon:"1",free:"false",link:""},
        {ansId:2,det:"Introduction to Errors and Exceptions - Notes",icon:"3",free:"false",link:""},
        {ansId:3,det:"Basics of Exception Handling",icon:"1",free:"false",link:""},
        {ansId:4,det:"Basics of Exception Handling - Notes",icon:"3",free:"false",link:""},
        {ansId:5,det:"Python Try-Except deep dive",icon:"1",free:"false",link:""},
        {ansId:6,det:"Python Try-Except deep dive - Notes",icon:"3",free:"false",link:""},
        {ansId:7,det:"User Defined Exception",icon:"1",free:"false",link:""},
        {ansId:8,det:"User Defined Exception - Notes",icon:"3",free:"false",link:""},
        {ansId:9,det:"Practice Exercise - 7",icon:"2",free:"false",link:""}]
        },
        {
        id:8,
        ques:"Python Objects and Classes",
        ans:[
        {ansId:1,det:"Introduction to Python Class",icon:"1",free:"false",link:""},
        {ansId:2,det:"Introduction to Python Class - Notes",icon:"3",free:"false",link:""},
        {ansId:3,det:"Python Classes and Objects",icon:"1",free:"false",link:""},
        {ansId:4,det:"Python Classes and Objects - Notes",icon:"3",free:"false",link:""},
        {ansId:5,det:"Class Inheritance",icon:"1",free:"false",link:""},
        {ansId:6,det:"Class Inheritance - Notes",icon:"3",free:"false",link:""},
        {ansId:7,det:"Class Methods Vs Instance Methods",icon:"1",free:"false",link:""},
        {ansId:8,det:"Class Methods Vs Instance Methods - Notes",icon:"3",free:"false",link:""}]
        },
        {
        id:9,
        ques:"More Data Structures",
        ans:[
        {ansId:1,det:"Introduction to Python Modules",icon:"1",free:"false",link:""},
        {ansId:2,det:"Introduction to Python Modules - Notes",icon:"3",free:"false",link:""},
        {ansId:3,det:"Introduction to Python Packages",icon:"1",free:"false",link:""},
        {ansId:4,det:"Introduction to Python Packages - Notes",icon:"3",free:"false",link:""},
        {ansId:5,det:"Practice Exercise - 8",icon:"2",free:"false",link:""}]
        },
        {
        id:10,
        ques:"Coding Challenge - 2",
        ans:[
        {ansId:1,det:"Coding Challenge 31-40",icon:"2",free:"false",link:""},
        {ansId:2,det:"Coding Challenge 41-50",icon:"2",free:"false",link:""},
        {ansId:3,det:"Coding Challenge 51-60",icon:"2",free:"false",link:""}]
        },
        {
        id:11,
        ques:"Final Project",
        ans:[
        {ansId:1,det:"Project requirement - Part 1",icon:"1",free:"false",link:""},
        {ansId:2,det:"Project requirement - Part 2",icon:"1",free:"false",link:""},
        {ansId:3,det:"How to approach the solution",icon:"1",free:"false",link:""},
        {ansId:4,det:"Before you start coding your project",icon:"1",free:"false",link:""}]
        },
        {
        id:12,
        ques:"Project Solution",
        ans:[
        {ansId:1,det:"Project Solution",icon:"2",free:"false",link:""}]
        },
        
    ]

    const IndcourseList = [
       
        {
            heading: "Mastering PySpark",
            desc: "Self-paced Learning",
            imgPath: "/assets/solutions/AcademySolutions/2.png",
            price: "$149",
            link: "/courses/mastering-pyspark"
        },


        {
          heading:"Databricks Certified Associate Developer for Apache Spark 3.0",
          desc:"Self-paced Exam Practice Test",
          imgPath:"/assets/solutions/AcademySolutions/4.png",
          price: "$36.79",
          link:"courses/databricks-certified-associate-developer-for-apache-spark"
        },
        {
          heading:"Apache Spark 3 - Real-time Stream Processing using Python",
          desc:"Self-paced Learning",
          imgPath:"/assets/solutions/AcademySolutions/10.png",
          price: "$149",
          link:"courses/apache-spark-3-real-time-stream-processing-using-python"
        },

    ]
    const Faqs = [
        {
            id: "faq1",
            ques: "How long can I access the course material?",
            ans: "We provide lifetime access to the course material."
        },
        {
            id: "faq2",
            ques: "Do you have refund policy?",
            ans: "Yes. You can ask for a refund within 7 days of your purchase or before completing 15% of the course material, whichever is earlier. We provide a refund after deducting 6% of payment processing charges."
        },
        {
            id: "faq3",
            ques: "How do you provide support?",
            ans: "We have a Q&A forum where you can ask questions, and our team will answer your queries."
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
                <div className={classes.banner + " d-flex justify-content-center align-items-center"}>
                    <div class="mx-auto w-75">
                        <h1>Just Enough Python</h1>

                        <h3 class="text-white text-center"> Python Foundation for PySpark Developers | Self-paced</h3>
                        <div className={classes.butns+" row justify-content-center gap-2"}>
                        <button class={classes.nfpbutn +"  col-sm-5 col-md-3 col-12 btn"} onClick={() => { router.push('https://www.scholarnest.in/order?ct=3f4ce35a-bd10-4226-8b24-724cc39785c5') }} >   Buy $24.79</button>
                        <button  onClick={()=>{router.push('https://www.scholarnest.in/order?ct=3f4ce35a-bd10-4226-8b24-724cc39785c5')}} class=" col-sm-5 col-md-2 col-12 btn btn-light "> Free Preview  </button>

                        </div>
                        <br />
                    </div>
                </div>
                <br />
                <br />
                {/* 2nd section */}
                <div className={classes.secondDiv + " row mx-4 px-md-2"}>
                    <h2 class={classes.headings}>What you'll learn</h2>

                    <div className=" col-12 col-sm-12 col-md-6 h-100">
                        <br />
                        <br />
                        <h3 class='my-2 px-md-2'>Learning a programming language goes into four parts: Learn, Practice Exercises, Coding Challenge , Project work. We designed this course in the same way.</h3>

                    </div>
                    <div className={classes.afterSecndDiv + " col-12 col-sm-12 col-md-6 px-2 px-md-5"}>
                        <br />

                        <br />
                        <p class="d-flex my-2"> <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class={classes.sideIcon + " bi  mr-3 bi-check-circle-fill"} viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>Learn Python 3 Programming Language, Sequences, Data Types, and Data Structures</p>
                        <br />
                        <hr />
                        <br />
                        <p class="d-flex my-2"> <svg xmlns="http://www.w3.org/2000/svg" width="50" height="55" fill="currentColor" class={classes.sideIcon + " bi  mr-3 bi-check-circle-fill"} viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>Python Functions, Lambda, Objects, Classes, Exception Handling, Packages and Modules</p>
                        <br />
                        <hr />
                        <br />


                        <p class="d-flex my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class={" bi  mr-3 bi-check-circle-fill"} viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                            More than 100 coding exercises and capstone project.          </p>
                        <br />
                        <hr />
                        <br />

                    </div>

                </div>
                <br />
                <br />
                <br />
                {/* 3rd Section */}
                <div className={classes.secondDiv + " " + classes.thirdDiv + " row mx-0 px-md-5"}>
                        <h2 class={classes.headings}>Course Prerequisite</h2>
                        <div className=" col-12 col-sm-12 col-md-6 my-2">

                            <h3 class="">What do you need to know before you start this course
                            </h3>

                        </div>

                        <div className=" col-12 col-sm-12 col-md-6">
                            <div className="d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class={classes.sideIcon + " bi mr-3 bi-arrow-right-circle-fill"} viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg>

                                <p >
                                You must have some programming experience in any other programming language</p>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div className="d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class={classes.sideIcon + " bi mr-3 bi-arrow-right-circle-fill"} viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg>

                                <p >
                                    A Recent 64-bit Windows/Mac Machine with 8 GB RAM & Internet Connection</p>
                            </div>
                            <br />
                            <hr />
                            <br />



                        </div>

                    </div>
                {/* 4th section */}
                <div >
                    <br />
                    <div className={classes.fifthDiv + ' row mx-2 px-md-5'}>

                        <h2>
                            Course Content
                        </h2>
                        <h3>33 Lectures | 4.5 Hours video | Capstone Project</h3>
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
                            <Card.Body class={classes.cardDet + " bg-light"} >
                                <img class="w-100" src="/assets/solutions/AcademySolutions/9.jpg" alt="1" />
                                <div className='ml-3 py-2'>
                                    <h3 className={classes.h3style}>Course Feature</h3>
                                    <div class='mb-2' style={{ width: "50px", height: '1px', backgroundColor: 'black', marginLeft: '10px' }}></div>
                                    <div className=' ml-2 px-3 py-2'>
                                        <div className="d-flex my-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class={classes.sideBoxIcon + " bi mr-2 bi-tag-fill"} viewBox="0 0 16 16">
                                                <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                            </svg>
                                            <p class={classes.sideBox}>$24.79</p>
                                        </div>
                                        <div className="d-flex my-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class={classes.sideBoxIcon + " mr-2 bi bi-download"} viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg>
                                            <p class={classes.sideBox}>PDF & Source Code</p></div>
                                        <div className="d-flex my-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class={classes.sideBoxIcon + " mr-2 bi bi-question-circle"} viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
                                            </svg>
                                            <p class={classes.sideBox}>Practice Exercise & Assignment</p>
                                        </div>
                                        <div className="d-flex my-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className={classes.sideBoxIcon + " mr-2"} viewBox="0 0 640 512"><path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z" /></svg>
                                            <p class={classes.sideBox}>Total Support</p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer > </Card.Footer>
                        </div>
                    </div>

                    <br />
                    <br />
                    <div className={classes.div4 + ' '+ classes.newBg+ ' px-md-5'}>
                <br />
                <h2 class={" my-2 mx-3"}>Features & Support</h2>
                <br />
                <div className="row mx-0 justify-content-center">
                <div className={classes.featureBox + " col-10 col-sm-6 col-md-4 bg-white border "}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" class="mx-auto my-3" viewBox="0 0 448 512"><path d="M347.1 215.4c11.7-32.6 45.4-126.9 45.4-157.1 0-26.6-15.7-48.9-43.7-48.9-44.6 0-84.6 131.7-97.1 163.1C242 144 196.6 0 156.6 0c-31.1 0-45.7 22.9-45.7 51.7 0 35.3 34.2 126.8 46.6 162-6.3-2.3-13.1-4.3-20-4.3-23.4 0-48.3 29.1-48.3 52.6 0 8.9 4.9 21.4 8 29.7-36.9 10-51.1 34.6-51.1 71.7C46 435.6 114.4 512 210.6 512c118 0 191.4-88.6 191.4-202.9 0-43.1-6.9-82-54.9-93.7zM311.7 108c4-12.3 21.1-64.3 37.1-64.3 8.6 0 10.9 8.9 10.9 16 0 19.1-38.6 124.6-47.1 148l-34-6 33.1-93.7zM142.3 48.3c0-11.9 14.5-45.7 46.3 47.1l34.6 100.3c-15.6-1.3-27.7-3-35.4 1.4-10.9-28.8-45.5-119.7-45.5-148.8zM140 244c29.3 0 67.1 94.6 67.1 107.4 0 5.1-4.9 11.4-10.6 11.4-20.9 0-76.9-76.9-76.9-97.7.1-7.7 12.7-21.1 20.4-21.1zm184.3 186.3c-29.1 32-66.3 48.6-109.7 48.6-59.4 0-106.3-32.6-128.9-88.3-17.1-43.4 3.8-68.3 20.6-68.3 11.4 0 54.3 60.3 54.3 73.1 0 4.9-7.7 8.3-11.7 8.3-16.1 0-22.4-15.5-51.1-51.4-29.7 29.7 20.5 86.9 58.3 86.9 26.1 0 43.1-24.2 38-42 3.7 0 8.3.3 11.7-.6 1.1 27.1 9.1 59.4 41.7 61.7 0-.9 2-7.1 2-7.4 0-17.4-10.6-32.6-10.6-50.3 0-28.3 21.7-55.7 43.7-71.7 8-6 17.7-9.7 27.1-13.1 9.7-3.7 20-8 27.4-15.4-1.1-11.2-5.7-21.1-16.9-21.1-27.7 0-120.6 4-120.6-39.7 0-6.7.1-13.1 17.4-13.1 32.3 0 114.3 8 138.3 29.1 18.1 16.1 24.3 113.2-31 174.7zm-98.6-126c9.7 3.1 19.7 4 29.7 6-7.4 5.4-14 12-20.3 19.1-2.8-8.5-6.2-16.8-9.4-25.1z" /></svg>
                        <h3  class={classes.h3style}> Total Support</h3>
                        <p class='p-3'> We provide support throughout your learning and answer every question within 24 hours. </p></div>
                    <div className={classes.featureBox + " col-10 col-sm-6 bg-white border col-md-4"}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" width="40px"  fill="currentColor" class="bi bi-asterisk mx-auto my-3" viewBox="0 0 16 16">
  <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1"/>
</svg>
                        <h3  class={classes.h3style}>Hands-On Exercises</h3>
                        <p class='p-3'>The course provides more than 100 coding practice exercises with solutions and source code. </p></div>
                    <div className={classes.featureBox + " col-10 col-sm-6  bg-white border col-md-4"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi mx-auto my-3 bi-cup-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899l-.866 3.9Z" />
                        </svg>
                        <h3 class={classes.h3style}> Capstone Project</h3>
                        <p class='p-3'> The course includes a major capstone project with the complete solution, source code, and explanation. </p></div>
                </div>
                <br />
            </div>
            <br />
            <br />
                  
                </div>


                <br />
                <br />

                {/* Section 4 */}
                <div class={classes.div3}>
                    <h2 class="text-center">Course FAQ</h2>
                    <br />
                    <div className={classes.faqDiv + " mx-auto"}>

                        {
                            Faqs.map((quest) => {
                                function openSolution(ques_id) {
                                    const elem = document.getElementById(ques_id)
                                    if (elem.style.display === "none") {
                                        elem.style.display = "flex";
                                    } else {
                                        elem.style.display = "none";
                                    }
                                }
                                return (
                                    <div class="my-2" >
                                        <div style={{ cursor: "pointer" }} onClick={() => { openSolution(quest.id) }} className="row rounded mx-auto  my-2 p-3 w-100 justify-content-between question">
                                            <p class=" col-10 d-flex fw-bold text-black"> {quest.ques}</p>
                                            <a class="col-1  text-end" >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi align-self-end bi-caret-down-fill" viewBox="0 0 16 16">
                                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div style={{ display: "none" }} class={classes.Faqs + " px-4 mx-auto "} id={quest.id}>
                                            <p>{quest.ans} </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <br />
                <br />
                <div style={{ minHeight: "300px",backgroundColor:'#c3d4e8' }} class={classes.div4 + " row mx-0 px-md-5"}>
                    <div class='col-12 col-md-8  d-flex justify-content-center align-items-center'>
                        <div class={classes.enroll}>
                            <h2 class={classes.headings + " fw-bold"}>Enroll into self-paced course</h2>
                            <br />
                            <h3 style={{ maxWidth: "700px" }}>Discover your potential, start today and learn at your own schedule</h3>
                        </div>

                    </div>

                    <div class=" col-md-4 col-12 d-flex justify-content-center  align-items-center">
                        <button onClick={() => { router.push("https://www.scholarnest.in/order?ct=3f4ce35a-bd10-4226-8b24-724cc39785c5") }} style={{ height: '70px', backgroundColor: '#e79913' }} class="btn rounded-pill w-75  px-5 text-center text-light fw-bold">Buy  $24.79 </button>
                    </div>


                </div>


                <br /><br />
                <div className={classes.courseBox + " mx-auto justify-content-center  row text-start  p-3"} >

                    <h2 class={classes.heading + "  my-2"}>Related Courses:</h2>
                    <p>Schedule a call with course coordinator for bundles, discounts and live sessions</p>

                    {
                        IndcourseList.map((data, index) => {
                            return (
                                <div className=" rounded col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-lg-4 p-xl-4 p-md-3 p-sm-2 p-1">
                                    <a href={data.link}>
                                        <div className={classes.styleDiv + " h-100"}>
                                            <Image width={600}
                                                height={300} src={data.imgPath} />
                                            <br />
                                            <h3 class={classes.h3style} >{data.heading}</h3>

                                            <p class="my-2">{data.desc}</p>
                                            <p class="my-2 fw-bold">{data.price}</p>

                                            {/* <p>8 self-placed courses worth $xyz</p> */}
                                        </div>
                                    </a>

                                </div>

                            )
                        })
                    }


                    <a href="https://www.scholarnest.in/collections">
                        <button className='px-lg-3 px-xl-3 px-md-3 px-sm-1 px-1 py-lg-3 py-xl-3 py-md-3 py-1 py-sm-2 fw-semibold btn  rounded-pill mx-4 my-4'>View more courses</button>
                    </a>
                </div>
            </div>
        </>
    )
}
export default JustPythonForPyspark;
import React, { useEffect, useState, useMemo } from "react";
import { FaSearch } from 'react-icons/fa';
import { useRouter } from "next/router";
import classes from "./style/responsive.module.css";
import Image from "next/image";
import { AiOutlineArrowRight } from 'react-icons/ai';
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";

export default function Careers() {
  const router = useRouter();
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [search, setSearchText] = useState("");
  const [searchIntern, setSearchTextIntern] = useState("");
  const [searchExternal, setSearchTextExternal] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);



  const [tablelist, setTableList] = useState([]);
  const [Internlist, setInternList] = useState([]);
  const [ExternalJoblist, setExternalJobList] = useState([]);
  const list = [
    {
      title: "Web developer",
      location: "Mumbai",
      Domain: "Web-Network",
      Date: "22/07/2022",
      status: "Open",
      exp: "2-3 Years",
      rexp: "1 Year",
      skill: "Reactjs,Nodejs, Mongodb",
      noOfpos: "2",
      code: "12034",
      organization: "ScholarNest",
      subject: "Application for job"

    },
    {
      title: "Talent Acquisiton",
      location: "Bangalore",
      Domain: "HR",
      Date: "15/01/2023",
      status: "Open",
      exp: "7-9 Years",
      rexp: "5 Year",
      skill: "Soft skills",
      noOfpos: "1",
      code: "53304",
      organization: "ScholarNest",
      subject: "Application for job"
    },
    {
      title: "Manager",
      location: "Mumbai/Bangalore",
      Domain: "Director",
      Date: "21/03/2023",
      status: "Open",
      exp: "12-13 Years",
      rexp: "10 Year",
      skill: "SDLC",
      noOfpos: "1",
      code: "450098",
      organization: "ScholarNest",
      subject: "Application for job"
    }

  ]

  const internlist = [
    {
      title: "Software developer",
      location: "Online",
      Domain: "Web-Network",
      Date: "20/03/2023",
      status: "Open",
      skill: "Reactjs,Nodejs, Mongodb",
      noOfpos: "2",
      code: "12034",
      subject: "Application for job"
    },
    {
      title: "Data Analyst",
      location: "Bangalore",
      Domain: "Data Science",
      Date: "25/02/2023",
      status: "Open",
      skill: "Python, Statistics, Data Science",
      noOfpos: "1",
      code: "53304",
      subject: "Application for job"
    },

  ]
  const externalJoblist = [
    {
      title: "Web developer",
      organization: "Google",
      location: "Mumbai",
      Domain: "Web-Network",
      Date: "22/07/2022",
      status: "ON",
      exp: "12-13 Years",
      rexp: "10 Year",
      skill: "SDLC",
      noOfpos: "1",
      code: "450098",
      subject: "Application for external job"
    },
    {
      title: "Talent Acquisiton",
      organization: "Amazon",
      location: "Bangalore",
      Domain: "HR",
      Date: "15/01/2023",
      status: "ON",
      exp: "3-4 Years",
      rexp: "1 Year",
      skill: "Soft skills, Time management",
      noOfpos: "1",
      code: "36985",
      subject: "Application for external job"
    },
    {
      title: "Manager",
      organization: "HCL",
      location: "Mumbai/Bangalore",
      Domain: "Director",
      Date: "21/03/2023",
      status: "ON",
      exp: "6-7 Years",
      rexp: "3 Year",
      skill: "Web 3.0",
      noOfpos: "2",
      code: "35025",
      subject: "Application for external job"
    }

  ]
  const Faqs = [
    {
      id: "faq1",
      ques: "How can career guidance benefit me?",
      ans: "Career guidance offers insights into your strengths and interests, helping you choose a path that aligns with your skills. It also provides strategies for skill enhancement, resume building, and job search techniques to ensure a successful career trajectory."
    },
    {
      id: "faq2",
      ques: "How do I know if I need career guidance or enhancement?",
      ans: "If you're uncertain about your career path, seeking a new direction, or aiming to advance within your current field, career guidance can help. If you're looking to excel in your current role or explore higher-level opportunities, career enhancement is beneficial."
    },
    {
      id: "faq3",
      ques: "Can career guidance and enhancement services help me in the long term?",
      ans: "Absolutely. Career guidance helps you make informed decisions throughout your career, while enhancement services equip you with skills that contribute to long-term success, ensuring your continued growth and adaptability in a dynamic job market."
    },
    {
      id: "faq4",
      ques: "How do I get started with career guidance or enhancement?",
      ans: "Simply reach out to us through our contact page or application forms. We'll connect you with our experts to understand your needs and develop a personalized plan to guide or enhance your career journey."
    }
  ]
  useEffect(() => {
    setTableList(list)
    setInternList(internlist)
    setExternalJobList(externalJoblist);
  }, [search, searchIntern, searchExternal]);
  const searchinList = (e) => {
    e.preventDefault();
    const listUp = list.filter((data) => data.title.toLowerCase() === search.toLowerCase());
    setTableList(listUp)
  }
  const searchinInternList = (e) => {
    e.preventDefault();
    const listUp = internlist.filter((data) => data.title.toLowerCase() === searchIntern.toLowerCase());
    setInternList(listUp)
  }
  const searchinExternalList = (e) => {
    e.preventDefault();
    const listUp = externalJoblist.filter((data) => data.title.toLowerCase() === searchExternal.toLowerCase());
    setExternalJobList(listUp)
  }

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   const [form, setForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(fullname, email, subject, message);
  };
  function applyNow(data) {
    console.log("data is", data)
    router.push({
      pathname: '/applynow',
      query: data
    }, "/applynow");
  }
  function applyInternship(data) {
    console.log("data is", data)
    router.push({
      pathname: '/applyinternship',
      query: data
    }, "/applyinternship");
  }
  return (
    <main>
      <Image height="500px" width="1100px" layout="responsive" src="/assets/solutions/CareerEnhancement.jpg" alt="Career Guidance and Enhancement" />
      <div className={classes.bannerDetailsCareer}>
        <h1 class={classes.heading} >Career Guidance and Enhancement</h1>

      </div>
      <p class={classes.det + " text-center"} >At ScholarNest, We empower your career with expert guidance and enhancement strategies. We also assist you to succeed with confidence and reach your full potential. ScholarNest continuously seeks exceptional talent to join our team and be part of our growth narrative. Below, you'll discover a selection of current openings. If any of these opportunities align with your aspirations, we invite you to submit your application. Join us in shaping our journey forward.

      </p>
      {/* section 1 */}


      {/* section 2 */}
      <div  style={{backgroundColor:"rgb(251 251 249)"}} class=" dark:bg-blue-900 ">
        <div class="row mx-0 pt-10">
          {/* iframe */}
          <div className={classes.caseSub + " col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12 px-auto"} style={{ backgroundColor: "purple" }}>

            <h2 class={classes.caseheading}>Current Jobs at various organisations</h2>
            <p class={classes.subheading}>Discover a range of current job openings that cater to various skill sets and expertise. Elevate your professional journey by exploring these exciting prospects and taking the next step towards your dream job.</p>

            <button onClick={() => window.open("/career#table", "_self").focus()} class="hover:shadow-orange-md transition-all outline-none  btn my-4" style={{ marginLeft: "10%", border: "1px solid white", display: "flex", flexDirection: "row", color: "white" }}>Explore jobs  <AiOutlineArrowRight style={{ marginLeft: "4px", marginTop: "5px" }} /></button>

          </div>
          {/* video right section */}
          <div  class="col-lg-6 col-xl-6 col-md-6 col-12 col-sm-12 my-auto  bg-blue-50 dark:bg-blue-900 ">

            <div class={classes.careerPageVideo + " grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8 "}>
              <h2 class="font-medium leading-tight text-3xl mt-0 mb-2 pl-2 text-blue-600">Benefits and rewards</h2>
              <ul class="list-disc pl-12">
                <li>At our core, we inspire employees to unlock their full potential and thrive as collaborative team players, embracing responsibilities that match their capabilities and ambitions. </li>
                <li>Our experts serve as guides through the professional landscape, equipping you with insights for a fulfilling journey ahead.</li>
                <li>Whether it's skill refinement or mentorship, we empower you to exceed your objectives. ScholarNest becomes your dedicated ally in attaining excellence and ascending to greater heights within your chosen domain.</li>
                <li>An employee being proactive, not only helps company & customers but also sets example to fellow colleagues and give recognition.</li>
                <li>We wholeheartedly welcome employee initiatives, valuing fresh ideas and innovations.  </li>
                <li>Proactive engagement not only benefits our company and customers but also sets a benchmark for peers, earning recognition. </li>
                <li>Our commitment extends to acknowledging individual and team achievements, celebrated through an array of Awards that underscore our appreciation.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <br />
      <br />
      {/* section 3 */}
      <div class="p-4 gap-2 pt-1 lg:px-40">
        <h2 class={classes.headJob + " font-medium leading-tight ml-1 mt-0 mb-0 text-blue-600"}>Job opportunities with us</h2>

      </div>

      <div class={classes.careerTableTop + " bg-blue-50 dark:bg-blue-900 mx-auto"}>
        <form onSubmit={searchinList} className="flex justify-end my-2 px-2" >
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search by job title"
            value={search}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button class="px-2 h-10 py-2 " style={{ color: "white", marginLeft: "5px", backgroundColor: "blue", borderRadius: "10px" }}> <FaSearch size={20} /></button>
        </form>
        <div class={classes.careerTable + " mx-auto"}  >
          <table class="table w-full border divide-y divide-gray-200">
            <thead>
              <tr >
                <th class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center bg-gray-100">Job title</th>
                <th class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center bg-gray-100">Location</th>
                <th class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center bg-gray-100">Domain</th>
                <th class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center bg-gray-100">Date</th>
                <th class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border   text-center bg-gray-100">Status</th>
              </tr>
            </thead>
            <tbody>
              {tablelist.map((data) =>
                <tr>
                  <td onClick={() => applyNow(data)} class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center"> <a style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}>{data.title} </a>   </td>
                  <td class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center">{data.location}</td>
                  <td class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center" >{data.Domain}</td>
                  <td class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center">{data.Date}</td>
                  <td class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center">{data.status}</td>
                </tr>
              )}


            </tbody>
          </table>
        </div>

      </div>


      {/* section 4*/}
      <div  style={{backgroundColor:"rgb(251 251 249)"}} class="p-4 gap-2 pt-1 lg:px-40">
        <h2 class={classes.headJob + " font-medium leading-tight ml-1  mt-0 mb-2 text-blue-600"}>Internship opportunities</h2>
        <div class={classes.aboveIntern + " row p-lg-4 p-md-3 p-sm-2 p-1 "}>
          <div class="col-12 col-lg-6 col-md-6 col-sm-12 col-xl-6 p-lg-2 p-md-2 p-xl-1 p-sm-1 p-1 bg-cyan-400 rounded-md h-400 flex items-center justify-center">
            <img src="/assets/career/internship.jpg" alt="Internship" />
          </div>
          {/* image right section */}
          <div class="p-1 col-12 col-lg-6 col-md-6 col-sm-12 col-xl-6  bg-blue-50 dark:bg-blue-900 ">

            <p class="font-small p-lg-4 p-md-3 p-sm-2 p-2 leading-tight  mt-1 mb-2 text-blue-600">
              Are you a recent graduate or a college student gearing up for the demanding corporate world?
              <br />
              <br />
              Alternatively, if you possess prior work experience but have taken a career break due to personal reasons and are looking to reenter the workforce, consider applying for an internship with us.
              <br />
              <br />
              Kick-start your career journey with this opportunity.

            </p>

          </div>

        </div>
      </div>
      <div class={classes.intern + " gap-2 pt-1  bg-blue-50 mx-auto dark:bg-blue-900 "}>


        <div class={classes.careerTableTop + " bg-blue-50 dark:bg-blue-900 mx-auto mt-2"}>
          <form onSubmit={searchinInternList} className="flex justify-end my-2 px-2" >
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search by job title"
              value={searchIntern}
              onChange={(e) => setSearchTextIntern(e.target.value)}
            />
            <button class="px-2 h-10 py-2 " style={{ color: "white", marginLeft: "5px", backgroundColor: "blue", borderRadius: "10px" }}> <FaSearch size={20} /></button>
          </form>
          <div class={classes.careerTable + " mx-auto"}  >
            <table class="table w-full border divide-y divide-gray-200">
              <thead>
                <tr >
                  <th class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center bg-gray-100">Job title</th>
                  <th class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center bg-gray-100">Location</th>
                  <th class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center bg-gray-100">Domain</th>
                  <th class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center bg-gray-100">Date</th>
                  <th class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border   text-center bg-gray-100">Status</th>
                </tr>
              </thead>
              <tbody>
                {Internlist.map((data) =>
                  <tr>
                    <td onClick={() => applyInternship(data)} class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center"> <a style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}>{data.title} </a>   </td>
                    <td class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center">{data.location}</td>
                    <td class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center" >{data.Domain}</td>
                    <td class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center">{data.Date}</td>
                    <td class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center">{data.status}</td>
                  </tr>
                )}


              </tbody>
            </table>
          </div>

        </div>
      </div>
      <h2 class={classes.headJob + "  p-4 gap-2 pt-1 lg:px-40 font-medium leading-tight ml-4  mt-0 mb-2 text-blue-600"}>External Job opportunities</h2>

      <div id="table" class={classes.careerTableTop + " bg-blue-50 dark:bg-blue-900 mx-auto"}>
        <form onSubmit={searchinExternalList} className="flex justify-end my-2 px-2" >
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search by job title"
            value={searchExternal}
            onChange={(e) => setSearchTextExternal(e.target.value)}
          />
          <button class="px-2 h-10 py-2 " style={{ color: "white", marginLeft: "5px", backgroundColor: "blue", borderRadius: "10px" }}> <FaSearch size={20} /></button>
        </form>
        <div class={classes.careerTable + " mx-auto"}  >
          <table class="table w-full border divide-y divide-gray-200">
            <thead>
              <tr >
                <th class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center bg-gray-100">Job title</th>
                <th class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center bg-gray-100">Location</th>
                <th class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center bg-gray-100">Domain</th>
                <th class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center bg-gray-100">Date</th>
                <th class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border   text-center bg-gray-100">Status</th>
              </tr>
            </thead>
            <tbody>
              {ExternalJoblist.map((data) =>
                <tr>
                  <td onClick={() => applyNow(data)} class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center"> <a style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}>{data.title} </a>   </td>
                  <td class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center">{data.location}</td>
                  <td class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center" >{data.Domain}</td>
                  <td class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center">{data.Date}</td>
                  <td class="px-lg-4  px-md-2 px-sm-1 px-0 py-2 border  text-center">{data.status}</td>
                </tr>
              )}


            </tbody>
          </table>
        </div>

      </div>
      <br />
      <ScrollAnimationWrapper className="w-full">
        <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
          <div style={{ backgroundColor: "rgb(251 251 249)" }} className={classes.letsConnect + " rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500"}>
            <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
              <h2 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                Connect with us to <br />  Collaborate!
              </h2>
              <p>Lets discover the digital world with us.</p>
            </div>
            <button className={
              "py-2 lg:py-4 px-8 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none"} onClick={() => router.push("/contactUs")}> <p class="text-white-500"> Get Started </p> </button>
          </div>
       
        </motion.div>
      </ScrollAnimationWrapper>

      <br />
      <br />
      <br />
      <div className="row gap-2 m-0 justify-content-center">
        <div className={classes.mentorr + " col-8 col-sm-5"}>

          <div class="row h-75 align-items-center justify-content-end me-1  " >
            <h2 class="text-center mt-4">Guidance/Mentorship    </h2>

            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg>
          </div>

        </div>
        <div className={classes.resumeBuilder + " col-8 col-sm-5"}>

          <div class="row h-75 align-items-center justify-content-end me-1  " >
            <h2 class="text-center mt-4">Resume Builder   </h2>

            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg>
          </div>
        </div>

      </div>
      <br />
      <br />
      <div style={{ backgroundColor: "rgb(251 251 249)" }} className="container-fluid  ">
        <br />
        <h2 class={classes.headJob + " text-center my-3"} >Frequently Asked Questions</h2>
        <br />
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
              <div class="my-2 border" >
                <div style={{ cursor: "pointer" }} onClick={() => { openSolution(quest.id) }} className="row rounded mx-auto bg-light p-3 w-100 justify-content-between question">
                  <h3 class={classes.h3style + " col-10 d-flex"}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi me-2 bi-cursor" viewBox="0 0 16 16">
                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z" />
                  </svg> {quest.ques}</h3>
                  <a class="col-1  text-end" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi align-self-end bi-caret-down-fill" viewBox="0 0 16 16">
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </a>
                </div>
                <div  style={{display:"none"}}  class={classes.Faqs + " p-3 w-100 mx-auto"} id={quest.id}>
                  <p>{quest.ans} </p>
                </div>
              </div>
            )
          })
        }

<br />


      </div>


      <br />
      <br />
    </main>
  );
}

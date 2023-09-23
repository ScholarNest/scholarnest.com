import React, {useState,useMemo} from 'react'
import { useRouter } from "next/router";
import classes from "../style/solutions.module.css";
import {  AiOutlineArrowRight} from 'react-icons/ai';
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import {  BsFillArrowRightCircleFill } from 'react-icons/bs';
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Grid, Text, Link, Row } from "@nextui-org/react";

const StaffAugmentations = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const ServicesData=[
    {
      title: "Technology Expertise",
      about: "Access highly skilled professionals in various technology domains, from software development to data science, ensuring your projects are executed with precision and innovation.",
      link: "#",
      imgsrc:"/assets/newicons/scholornest-technology-expertise-icon-70X70PX.png"
    },
    {
      title: "Flexible Workforce",
      about: "Scale your team up or down based on project demands without the commitment of permanent hires. Our staff augmentation provides the flexibility you need to adapt quickly.",
      link: "#",
      imgsrc:"/assets/newicons/scholornest-flexible-work-space-icon-70X70PX.png"
    },
    {
      title: "Project-Based Support",
      about: "Augment your team for specific projects, gaining specialized talent exactly when and where you need it, enhancing project efficiency and delivery.",
      link: "#",
      imgsrc:"/assets/newicons/scholornest-project-based-support-icon-70X70PX.png"
    },
    {
      title: "Domain-Specific Knowledge",
      about: "Tap into professionals with industry-specific knowledge who understand your sector's unique challenges and contribute insights to drive optimal outcomes.",
      link: "#",
      imgsrc:"/assets/newicons/scholornest-domain-specific-knowledge-icon-70X70PX.png"
    },
    {
      title:"Immediate Productivity",
      about:"Our experts seamlessly integrate into your team, bringing their skills and experience to the table, resulting in rapid onboarding and immediate contributions.",
      link: "#",
      imgsrc:"/assets/newicons/scholornest-immediate-productivity-icon-70X70PX.png"
    },
    {
      title: "Cost-Effective Solution",
      about:"Avoid the expenses associated with full-time hires. With staff augmentation, you get the skills you need without the overhead costs.",
      link: "#",
      imgsrc:"/assets/newicons/scholornest-cost-effective-solution-icon-70X70PX.png"
    },
    {
      title: "Reduced Recruitment Burden",
      about:"Skip lengthy recruitment processes. We handle talent acquisition, screening, and selection, saving you time and resources.",
      link: "#",
      imgsrc:"/assets/Icon/managed services-70 px.svg"
    },
    {
      title:"Scalable Resources",
      about:"Seamlessly adapt to changing project demands. Our staff augmentation resources can be quickly adjusted to align with evolving requirements.",
      link: "#",
      imgsrc:"/assets/Icon/technology consulting-70 px.svg"
    },
    {
      title: "Global Talent Pool",
      about:"Access a diverse talent pool with professionals from around the world, bringing a range of perspectives and expertise to your projects.",
      link: "#",
      imgsrc:"/assets/newicons/scholornest-domain-specific-knowledge-icon-70X70PX.png"
    },

]
const logos=[ 
  { id: 1, image: "/assets/partners/apache .svg" },
  { id: 2, image: "/assets/partners/aws.svg" },
  { id: 3, image: "/assets/partners/databricks.svg" },
  { id: 4, image: "/assets/partners/docker.svg" },
  { id: 5, image: "/assets/partners/hashicorp.svg" },


  // { id: 6, image: "/assets/logo4.png" },
  // { id: 7, image: "/assets/logo3.png" },
  // { id: 8, image: "/assets/logo6.png" },
  // { id: 9, image: "/assets/logo7.png" },
  // { id: 10, image: "/assets/logo4.png" }

];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Faqs=[
  {
    id:"faq1",
    ques:"What industries benefit from staff augmentation?",
    ans:"Staff augmentation is beneficial for various industries, including IT, software development, healthcare, finance, engineering, and more. It allows organizations to access specialized skills without the commitment of permanent hires.",
  },
  {
    id:"faq2",
    ques:"How quickly can I onboard augmented staff for my project?",
    ans:"Our streamlined onboarding process ensures that qualified professionals can join your team quickly. The time frame depends on the complexity of the role and specific project requirements.",
      },
  {
    id:"faq3",
    ques:"How does staff augmentation enhance project success?",
    ans:"Augmented professionals bring specialized skills and expertise, contributing to efficient project execution. They help bridge skill gaps, meet deadlines, and ensure high-quality deliverables.",
  },
{
  id:"faq4",
  ques: "How do you ensure the quality of augmented professionals?",
  ans:"We thoroughly screen and vet all professionals before they join our talent pool. Our selection process ensures that you receive skilled and experienced individuals who can contribute effectively to your projects."
  } 
]

  const [fullname, setFullname] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (companyname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
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

  //Hiding image in mobile view

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          companyname:companyname,
          phone: phone,
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
        setCompanyname("");
        setEmail("");
        setMessage("");
        setphone("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFullname("");
      setCompanyname("");
      setEmail("");
      setMessage("");
      setphone("");
    }
    console.log(fullname, email, phone, message);
  };


  const router = useRouter();
const blurDataURL="data:image/jpeg;base64,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NFU1NTUF1NNTRTUNTUUtS0tTUC1LS1m0UtZtW1m1FLWbS1LUVLWbVtZtZC1m0tZtRS1m0tZtRS1m0tZtQLWbS1m1NFtZtLWbTUW1m1LU1ZWKuqzprcZxrTU01UaEGhpWVVFEFRoQBRARBnV1WsaWM6sEajUYjUVmtRqMRqKzWo3K5xuUR0jcc43KNtxqMStSitytRiVqUG4srErUFalaYi6Dems6ug0us6aitaus6aDWms6aDWms6aKumpqairqaamgupqamoq2s6WpailqWlrNqBalprNqKWs2lqWoqWpaWs2opazaWs2opazaWs2siWs2lrNrNqlrNpazagWpalrNqyJVtTWbTWsYa01nTVTG9XWNXWomN6azq60mNCaaqNCCjQgqKIAzprOro1jWtSsSrKJjcajEqyqzW41GI1FZrUblc41KrLrK1K5ytyo1HSVqOcrUorpFjErUorcqysyrKDcq6xKug3q6xq6DWrrOmitaus6aDWms6aK1prOmoLpqamirqaamoLqampqKus6WpopalqWpqKWpaWs2opazaWpayqWs2razaglrNpazazVLWbS1i1m1otZtLWbWQtZtS1m1uQLWbSstSM1dQFRTUAXVlZBMdJV1z1ZWomOmrrEq60mNaus6arONjOmqY0JpomOWrKwazrpjrKsrnK1KqWOkrUrnK1KMWOkqxiVqVpitxqMRqKzXSVuVylblFjpK1K5ytSiukrUrnK1KK3K1K5ytSg3q6xq6K3q6xq6DWrrOmg1q6zpoNaazpqK1prOmgums6airqammimmpqagammpailqWpalqKWs2lqWopazaWs2opazaWs2s1S1i1bWLWLWktZtLWbWVLWLS1mtyKlqKjSVKgK5gAAAAAAALq6yrcqNausLrSY3q656uqmN6axq6GOYDi2qysiyjrK3K4ytyt6xY6ytSucrUqudjpKsYlalaZsblblc5W5RI6StSucrUo06SrKxK1KDcrUrnGpRW9XWNXQb1dY1dBrV1nTQa1dZ00VrTWdNBrU1NNRV1NTTQXU1NNRTU01NRTUtNZtFW1m01LWVLWbS1LUVLWbVtZtZqpazaWs2s2qlrNpazaw0lrFq2sNyKIClRKrKsUAVkAAAAAAAAABRFalABrUFQXRAHJQABqVkWUdpWpXLmtytSudjrK1K5ytStMWNytyucrUqsukrcrnK1KK6SrKxK1FVuVdYlalBrWtYlXQb01nV0GtXWNXRWtNZ1dBdNTTUVdNTTQXU1NNRV1NTU0F1NNTUUtTS1nUVbWbS1LUUtZtLWbWVLWbS1m1m1pLWbS1m1z60lrFq2sWtSLEoI0oiorFSoqKwAAAAAAAAAAAAAAAAogugAgAAAAN81hZcVLHaVqVy5rcrUrnY6StSsStStMWOkrUrnK1Ko6StSsSrKK6SrKxK1KK1q6zq6DWqzq6DWms6ug1prOroq6ammgumpqaitamppoLqampqKuppqaimpaazailqWlrNrKlqWlrNrNqpazaWs2udutQtYtW1i1ZGolrINqIAlRKqKxUAVkAAAAAAAAAAAAAAAAAAAAAAAAABZcdJXJqVZUsdpWpXKVuVqVzsdJWpXOVqVpl1lalc5WpRW5WpWJVlBuLrOrqjWrrOrorRrOroNaazog1ommirpqamg1qammoq6iaaimppqaimpaazailqWlrNrNUtZtLWbXO1YWs2lrNqRpLWKtrLcaARUEVFSoiorFABAAAAAAAAAAAAAAAAAAAAAAAAAAAAGua6SuLfNWVmx1lalc5W5W2LHSVqVzlalEdJWpWJVlVW9VmLoNaus6ug1prKitaazqguiaIqmpoC6moIqpoiAgiKWpaWpWapazaWs2sWtFrNKlZVKxa1axa1GolQGlEAQQRWaICsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyoA6StyuMrpK1KxY6StyuUrcrTLpK1K5ytSityrrMWA0rK6DWrrIDQgK0agCiCKCCAIIogiKVmrWazapazSpXOtJUpUqxWbWatZajQAogCsoioM1AFZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG5WFgldZWpXOVuVpl0lajEaijcViNRRpWVBpWVBRAGhBFUQQBAUBGVEESqVmrWa52qM1UqKlZq1mtRqM1AaURUEEVFQRUGagCsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANSukco6RYzXSNRiNRpGo1GY1AVUUFVAVVQBQAAEUBEBFRFRFRmqlQqOdaRKtSis1mtVmtRYyA0oioIIqKgioMVAFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABY3GI3FiVuNxiNxWWosSLFVVRQVUUFAAAFVFRAARUBGQRUrNVmotRhpKlWs1VSsVusVqNRAFBFQQRUVBFRWKgAgAAAAAAAAAAAAAAAAAAAD//Z";

 
  return (
    <>
    <div>
       <Image placeholder='blur' blurDataURL={blurDataURL} loading="lazy" height="500px" width="1100px" layout="responsive" src="/assets/solutions/StaffAugmentation.jpg" alt="Staff Augmentation Services" />
       <div className={classes.bannerDetails}>
       <h1 class={classes.heading} >Staff Augmentation Services</h1>
      
       </div>
       <p   class={classes.det+" text-center"}>Empower your projects with our Staff Augmentation Services. We provide skilled professionals who seamlessly integrate into your team, ensuring immediate productivity and expertise. Whether you need temporary support or specialized talent, our staff augmentation solutions enhance your workforce and drive project success.</p>
     <br />
     <div style={{padding:"0",margin:"auto 0"}} className="row">
        <div className="col-lg-6 col-xl-6 col-12  d-flex justify-content-center align-items-center" style={{backgroundColor:"purple"}}>
         <div> 
            <h2 class={classes.caseheading}>How do we help you with our Staff Augmentation Services</h2>
           <p class={classes.subheading}>We assist you with our Staff Augmentation Services by seamlessly integrating skilled professionals into your projects, aligning with your specific needs. Our tailored solutions provide on-demand expertise, optimizing your workforce for efficiency and success. Whether you require short-term support or long-term talent, we bridge the resource gap to achieve your goals.</p>
           {/* onClick={() =>router.push("/staffaugmentation#learnMore")}  */}
           <button  class="btn my-4" style={{marginLeft: "10px",border:"1px solid white",display:"flex",flexDirection:"row",color:"white"}}>Learn more  <AiOutlineArrowRight style={{marginLeft:"4px",marginTop:"5px"}} /></button>
          
        </div>
        </div>
        <div style={{padding:"0",margin:"auto 0"}} className={classes.imgInPurplediv+" col-lg-6 col-xl-6 "}>
        <img  src="/assets/solutions/business-mirror.jpg" alt="Solution" />

        </div>
     </div>
    </div>
    <br />
    <br />

    
   {/* Cards for each solution */}
   <div id="learnMore"    className={classes.solutionsBox+" mx-auto justify-content-center  row text-start  p-3"}  > 

      <h2 class={classes.head+" text-center my-3"}>Staff Augmentation Services Offerings</h2>   
    
     
         
      <br />
     <br />
     <br />
     <br />
      <div className="row  text-start  " style={{margin:"0", height: "auto", borderBottom: "1px solid white" }}>
              {ServicesData.map((sol) => (
                <div onClick={() => router.push(sol.link)} className={classes.eachServicesDivstyle + " col-xl-4 col-lg-4 col-12 col-sm-12 col-md-6 my-1 p-3"}>
                  {/* <CiCompass1 color="black" size={70} /> */}
                  <div style={{display:"flex",flexDirection:"row"}}>
                  <img className={classes.icons} src={sol.imgsrc} />
                  <br />
                  <h3 className={classes.h3style + " my-auto ml-2"} >{sol.title}</h3>
                  </div>
                  <br />
                  <p>{sol.about}</p>
                  <br />
                  <button  ><BsFillArrowRightCircleFill color="black" size={25} /></button>
                </div>
              ))}

            </div>
         
       
      </div>
  <br />
  <br />

    {/* Case Studies */}
    <h2 class={classes.head+" text-center my-3"}>Case Studies</h2>   
    <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}} variants={scrollAnimation}>
               
                  <Card.Body css={{ py: "$2" }}>
                  <img  src="/assets/solutions/CaseStudy/1.jpg" alt="1" />
                  </Card.Body>
                  <Card.Footer>
                    <Link
                      icon
                      color="primary"
                      target="_blank"
                      href="#"
                    >
                      <p>
                     How freewill drives new innovation through partnership.
                     </p>
                    </Link>
                  </Card.Footer>
               
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}} variants={scrollAnimation}>
                
                
                  <Card.Body css={{ py: "$2" }}>
                  <img  src="/assets/solutions/CaseStudy/2.jpg" alt="1" />
                  </Card.Body>
                  <Card.Footer>
                    <Link
                      icon
                      color="primary"
                      target="_blank"
                      href="#"
                    >
                      <p>
                      Delivering transformative consumer experiences to the clients.
                      </p>
                    </Link>
                  </Card.Footer>
               
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}variants={scrollAnimation}>
                
                  <Card.Body css={{ py: "$2" }}>
                  <img  src="/assets/solutions/CaseStudy/3.jpg" alt="1" />
                  </Card.Body>
                  <Card.Footer>
                    <Link
                      icon
                      color="primary"
                      target="_blank"
                      href="#"
                    >
                      <p>
                      How a global cruise company realised digital transformation.
                      </p>
                    </Link>
                  </Card.Footer>
               
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
          <br />
          <br />
          <br />
          {/* <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-xl  px-8 py-20 bg-white dark:bg-green-500"
        >
          <h2 style={{fontSize:"30px"}}>
            Send your staffing requirements
          </h2>
          <div className="row ">
            <div className="col">

            
          <label
            htmlFor="companyname"
            className="font-light mt-8 dark:text-gray-50"
          >
            Company name<span className="text-danger fw-bold dark:text-gray-50">*</span>
          </label>
          <input
            type="text"
            value={companyname}
            onChange={(e) => {
              setCompanyname(e.target.value);
            }}
            name="companyname"
            className="w-75 m-2 bg-transparent border-b py-2 p-4 focus:outline-none focus:rounded-md focus:ring-1 ring-yellow-500 "
          />
          {errors?.fullname && (
            <p className="text-danger fw-bold">Company name cannot be empty.</p>
          )}
          </div>
          <div className="col">
<label
            htmlFor="fullname"
            className="font-light mt-8 dark:text-gray-50"
          >
            Full name<span className="text-danger fw-bold dark:text-gray-50">*</span>
          </label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            className="bg-transparent m-2 w-75 border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-yellow-500  "
          />
          {errors?.fullname && (
            <p className="text-danger fw-bold">Fullname cannot be empty.</p>
          )}
</div>
          </div>
          <div className="row">
            <div className="col">
          <label
            htmlFor="email"
            className=" font-light mt-4 dark:text-gray-50"
          >
            E-mail<span className="text-danger fw-bold dark:text-gray-50">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-transparent m-2 w-75 border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-yellow-500  "
          />
          {errors?.email && (
            <p className="text-danger fw-bold">Email cannot be empty.</p>
          )}
          </div>
        <div className="col">
          <label
            htmlFor="phone"
            className="font-light mt-4 dark:text-gray-50"
          >
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => {
              setphone(e.target.value);
            }}
            className="bg-transparent m-2 w-75 border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-yellow-500  "
          />
          {errors?.phone && (
            <p className="text-danger fw-bold">phone cannot be empty.</p>
          )}
          </div>
          </div>
          <div className="row">
            <div className="col-10 col-sm-10 col-md-5">
          <label
            htmlFor="message"
            className="font-light mt-4 dark:text-gray-50"
          >
            Message<span className="text-danger fw-bold dark:text-gray-50">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="w-75 m-2 bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-yellow-500  "
          ></textarea>
          {errors?.message && (
            <p className="text-danger fw-bold">Message body cannot be empty.</p>
          )}
          </div>
          <div className="col-10 col-sm-10 col-md-5">
          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-10 mt-8 py-2 bg-yellow-500 text-white-500 font-light rounded-md text-lg flex flex-row items-center"
            >
              {buttonText}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-cyan-500 ml-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                Thankyou! Your Message has been delivered.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
          </div>
          </div>
        </form> */}
<form
  onSubmit={handleSubmit}
  className="rounded-lg shadow-xl p-6 bg-white dark:bg-green-500"
>
  <h2 className="text-2xl mb-4">
    Send your staffing requirements
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="md:col-span-1">
      <label htmlFor="companyname" className="text-gray-600 dark:text-gray-50">
        Company name
        <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        value={companyname}
        onChange={(e) => {
          setCompanyname(e.target.value);
        }}
        name="companyname"
        className="w-full bg-transparent border-b py-2 p-1 focus:outline-none focus:ring-2 ring-yellow-500"
        required
      />
      {errors?.fullname && (
        <p className="text-red-500 font-bold mt-2">Company name cannot be empty.</p>
      )}
    </div>
    <div className="md:col-span-1">
      <label htmlFor="fullname" className="text-gray-600 dark:text-gray-50">
        Full name
        <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        value={fullname}
        onChange={(e) => {
          setFullname(e.target.value);
        }}
        name="fullname"
        className="w-full bg-transparent border-b py-2 p-1 focus:outline-none focus:ring-2 ring-yellow-500"
        required
      />
      {errors?.fullname && (
        <p className="text-red-500 font-bold mt-2">Full name cannot be empty.</p>
      )}
    </div>
    <div className="md:col-span-1">
      <label htmlFor="email" className="text-gray-600 dark:text-gray-50">
        E-mail
        <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="w-full bg-transparent border-b py-2 p-1 focus:outline-none focus:ring-2 ring-yellow-500"
        required
      />
      {errors?.email && (
        <p className="text-red-500 font-bold mt-2">Email cannot be empty.</p>
      )}
    </div>
    <div className="md:col-span-1">
      <label htmlFor="phone" className="text-gray-600 dark:text-gray-50">
        Phone
      </label>
      <input
        type="text"
        name="phone"
        value={phone}
        onChange={(e) => {
          setphone(e.target.value);
        }}
        className="w-full bg-transparent border-b py-2 p-1 focus:outline-none focus:ring-2 ring-yellow-500"
      />
      {errors?.phone && (
        <p className="text-red-500 font-bold mt-2">Phone cannot be empty.</p>
      )}
    </div>
    <div className="md:col-span-2">
      <label htmlFor="message" className="text-gray-600 dark:text-gray-50">
        Message
        <span className="text-red-500">*</span>
      </label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        className="w-full bg-transparent border-b py-2 p-1 focus:outline-none focus:ring-2 ring-yellow-500"
        required
      ></textarea>
      {errors?.message && (
        <p className="text-red-500 font-bold mt-2">Message body cannot be empty.</p>
      )}
    </div>
  </div>
  <div className="mt-4">
    <button
      type="submit"
      className="px-4 py-2 bg-yellow-500 text-white font-light rounded-md text-lg flex items-center"
    >
      {buttonText}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="text-cyan-500 ml-2"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
          fill="currentColor"
        />
      </svg>
    </button>
  </div>
  <div className="mt-4">
    {showSuccessMessage && (
      <p className="text-green-500 font-semibold text-sm">
        Thank you! Your message has been delivered.
      </p>
    )}
    {showFailureMessage && (
      <p className="text-red-500">
        Oops! Something went wrong, please try again.
      </p>
    )}
  </div>
</form>




          <br />
          <br />
          <div class={classes.partnersBox+" mx-3"}>
          <br />
          <br />
          <h2 class="text-center mt-5 mb-4"  >Partners & Customers</h2>
          <hr />
          <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={700}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      
    >
      {logos.map((logo) => (
        <img style={{height:"120px",width:"150px",margin:"0 auto",objectFit:"contain"}} key={logo.id} src={logo.image} alt={`Logo ${logo.id}`} />
    
      ))}
    </Carousel>
        </div>
        <br />
        <div style={{ backgroundColor: "rgb(251 251 249)"}} className="container-fluid  ">
        <br />
        <h2 class={classes.head + " text-center my-3"} >Frequently Asked Questions</h2>
        <br />
          {
            Faqs.map((quest)=>{
              function openSolution(ques_id){
                const elem = document.getElementById(ques_id)
                if (elem.style.display === "none") {
                  elem.style.display = "flex";
                } else {
                  elem.style.display = "none";
                }
              }
              return(
                <div class="my-2 border" >
                <div style={{cursor:"pointer"}} onClick={() => { openSolution(quest.id) }} className="row rounded mx-auto bg-light p-3 w-100 justify-content-between question">
                  <h3 class={classes.h3style+" col-10 d-flex"}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi me-2 bi-cursor" viewBox="0 0 16 16">
                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z" />
                  </svg> {quest.ques}</h3>
                  <a class="col-1  text-end" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi align-self-end bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                  </a>
                </div>
                <div  style={{display:"none"}}  class={classes.Faqs+" p-3 w-100 mx-auto"} id={quest.id}>
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
    </>
  )
}
export default  StaffAugmentations ;
import React, {useState} from 'react'
import { useRouter } from "next/router";
import classes from "./style/solutions.module.css";
import {  AiOutlineArrowRight} from 'react-icons/ai';
import { motion } from "framer-motion";
import {  BsFillArrowRightCircleFill } from 'react-icons/bs';
import {  MdAdsClick } from 'react-icons/md';
import {  CiCompass1 } from 'react-icons/ci';
import {  CiSliderVertical } from 'react-icons/ci';
import { Card, Grid, Text, Link, Row } from "@nextui-org/react";
const StaffAugmentations = () => {
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

  const h3style={
    fontSize:"20px",
    fontWeight:"bold-500",
    color:"black"
  }
  const solDivstyle={
    backgroundColor:"white",
    cursor:"pointer",
    opacity:"0.7", 
    borderRadius:"10px",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
   
  }
  return (
    <>
    <div>
       <img style={{height:"110vh",width:"100vw"}}  src="/assets/staff_aug.jpg" alt="Solution" />
       <div style={{width:"500px", position :"relative", bottom:"50px",margin:"0 auto",backgroundColor:"white"}}>
       <h1 class={classes.heading} >Staff Augmentation</h1>
      
       </div>
       <p class="text-center" style={{position:"relative",bottom:"40px",margin:"auto 3vw"}}>Staff augmentation is an outsourcing strategy that is used to staff a project and respond to the business objectives. The technique consists of evaluating the existing staff and then determining which additional skills are required. Staff augmentation is an outsourcing strategy that is used to staff a project and respond to the business objectives. The technique consists of evaluating the existing staff and then determining which additional skills are required. One possible advantage of this approach is that it may leverage existing resources as well as utilize outsourced services and contract workers. The goal of the exercise is to handle staffing requirements with an existing set of talents. Numerous consulting companies offer staff augmentation services.[3] It has been estimated that staff augmentation as an industry will reach $45 billion in 2015.The trend in staff augmentation is occurring because of the abundance of IT resources, declining rates, and narrowing margins for companies that need these services. </p>
     <br />
     <div style={{padding:"0",margin:"auto 0"}} className="row">
        <div className="col-6" style={{backgroundColor:"purple"}}>
         
            <h2 class={classes.caseheading}>How do we help you with our managed services </h2>
           <h3 class={classes.subheading}>Automation enabled releases into production environments with the click of a button </h3>
            
           <button  onClick={() =>router.push("/staffaugmentation#learnMore")} class="btn my-4" style={{marginLeft: "10%",border:"1px solid white",display:"flex",flexDirection:"row",color:"white"}}>Learn more  <AiOutlineArrowRight style={{marginLeft:"4px",marginTop:"5px"}} /></button>
          
        </div>
        <div style={{padding:"0",margin:"auto 0"}} className="col-6">
        <img  src="/assets/pexels.jpg" alt="Solution" />

        </div>
     </div>
    </div>
    <br />
    <br />
    <br />
    <br />
   
    
   {/* Cards for each solution */}
   <div id="learnMore"   className="mx-auto px-4 row text-start  " style={{height:"400px", borderBottom:"1px solid white"}}> 

      <h1  style={{fontSize:"30px"}} class="text-center my-3">Offerings</h1>   
    
     
      <div   style={solDivstyle}  className="col-4 p-3">
         <CiCompass1 color="black" size={70} />
         <br />
          <h3  style={h3style} >Managed Services 1</h3>
          <br />
          <p>Managed services is the practice of outsourcing the responsibility for maintaining, and anticipating need for, a range of processes and functions, ostensibly for the purpose of improved operations and reduced budgetary expenditures through the reduction of directly-employed staff.</p>
          <br />
          <button  ><BsFillArrowRightCircleFill color="black" size={25}/></button>
         </div>
         <div  style={solDivstyle} className="col-4 p-3">
         <MdAdsClick color="black" size={70} />
         <br />
          <h3  style={h3style}> Managed Services 2</h3>
          <br />
          <p>Technology consultants take a strategic look on how technology can help improve an organization, which includes architecting and realizing exceptional value from technology. Both help companies better connect with customers, improve resilience, and drive sustainable growth.</p>
          <br />
          <button><BsFillArrowRightCircleFill color="black" size={25}/></button>
         </div>
        
         <div style={solDivstyle} className="col-4 p-3">
         <CiSliderVertical color="black" size={70} />
         <br />
          <h3 style={h3style}>Managed Services 3</h3>
          <br />
          <p>Self Paced, instructor Led, resume review, mock interviews, Mentorship call, project internships, Corporate bootcamps, profile registration</p>
          <br />
          <button><BsFillArrowRightCircleFill color="black" size={25}/></button>
         </div>
         
       
      </div>
  <br />
  <br />
  <br />
  <br />
  <br />
    {/* Case Studies */}
    <h1 style={{fontSize:"30px"}} class="text-center my-3">Case Studies</h1>   

    <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">

              <motion.div style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}} >
               
                  <Card.Body css={{ py: "$2" }}>
                  <img  src="/assets/learn1.jpg" alt="1" />
                  </Card.Body>
                  <Card.Footer>
                    <Link
                      icon
                      color="primary"
                      target="_blank"
                      href="https://github.com/nextui-org/nextui"
                    >
                     How freewill drives new innovation through partnership.
                    </Link>
                  </Card.Footer>
               
              </motion.div>
           
         
              <motion.div style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
                
                
                  <Card.Body css={{ py: "$2" }}>
                  <img  src="/assets/learn2.jpg" alt="1" />
                  </Card.Body>
                  <Card.Footer>
                    <Link
                      icon
                      color="primary"
                      target="_blank"
                      href="https://github.com/nextui-org/nextui"
                    >
                      Delivering transformative consumer experiences
                    </Link>
                  </Card.Footer>
               
              </motion.div>
            
            
              <motion.div style={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
                
                  <Card.Body css={{ py: "$2" }}>
                  <img  src="/assets/learn3.jpg" alt="1" />
                  </Card.Body>
                  <Card.Footer>
                    <Link
                      icon
                      color="primary"
                      target="_blank"
                      href="https://github.com/nextui-org/nextui"
                    >
                      How a global cruise company realised digital transformation.
                    </Link>
                  </Card.Footer>
               
              </motion.div>
          
          </div>
          <br />
          <br />
          <br />
          <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-xl flex flex-col px-8 py-20 bg-white dark:bg-green-500"
        >
          <h1 style={{fontSize:"30px"}}>
            Send your staffing requirements
          </h1>
          <div className="row">
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
            className="w-75 bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-yellow-500 font-light text-gray-500"
          />
          {errors?.fullname && (
            <p className="text-red-500">Company name cannot be empty.</p>
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
            className="bg-transparent w-75 border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-yellow-500 font-light text-gray-500"
          />
          {errors?.fullname && (
            <p className="text-red-500">Fullname cannot be empty.</p>
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
            className="bg-transparent w-75 border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-yellow-500 font-light text-gray-500"
          />
          {errors?.email && (
            <p className="text-red-500">Email cannot be empty.</p>
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
            className="bg-transparent w-75 border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-yellow-500 font-light text-gray-500"
          />
          {errors?.phone && (
            <p className="text-red-500">phone cannot be empty.</p>
          )}
          </div>
          </div>
          <div className="row">
            <div className="col">
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
            className="w-75 bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-yellow-500 font-light text-gray-500"
          ></textarea>
          {errors?.message && (
            <p className="text-red-500">Message body cannot be empty.</p>
          )}
          </div>
          <div className="col">
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
        </form>
          <br />
          <br />
         
    </>
  )
}
export default  StaffAugmentations ;
import React, { useEffect, useState } from "react";
import { FaSearch } from 'react-icons/fa';
import { useRouter } from "next/router";
import classes from "./style/responsive.module.css";

import { Link } from "react-scroll";
export default function Careers() {
  const router = useRouter();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [search, setSearchText] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);



  const [tablelist, setTableList] = useState([]);
  const [Internlist, setInternList] = useState([]);
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
  useEffect(() => {
    setTableList(list)
    setInternList(internlist)
  }, [search]);
  const searchinList = (e) => {
    e.preventDefault();
    const listUp = list.filter((data) => data.title.toLowerCase() === search.toLowerCase());
    setTableList(listUp)
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

      {/* section 1 */}
      <div class="p-4 gap-2 pt-5 lg:px-40 ">
        <div class={classes.careerPage + " grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8 pt-10"}>
          <h1 class="font-medium leading-tight  mt-0 mb-2 text-blue-600">Rockstars wanted!</h1>
          <h3 class="font-small leading-tight  mt-0 mb-2 text-blue-600">
            We at ScholarNest are always on lookout for a great talent to include in our team, who can become a part of our growth story. Please find below the list of available positions and submit your application if they interest you.
          </h3>
        </div>
      </div>

      {/* section 2 */}
      <div class="p-4 gap-2 pt-1 lg:px-40 bg-blue-50 dark:bg-blue-900 ">
        <div class="row  pt-10">
          {/* iframe */}
          <div class="col-lg-6 col-xl-6 col-md-6 col-12 col-sm-12 p-4 bg-cyan-400 rounded-md  items-center justify-center">
            <div class="aspect-w-16 aspect-h-9">
              <iframe width="100%" height="300px" src="https://www.youtube.com/embed/w0RGnXpf9LU" title="videohive" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            </div>
          </div>
          {/* video right section */}
          <div class="col-lg-6 col-xl-6 col-md-6 col-12 col-sm-12 p-1 my-auto pl-10 bg-blue-50 dark:bg-blue-900 ">

            <div class={classes.careerPageVideo + " grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8 "}>
              <h1 class="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">Benefits and rewards</h1>
              <ul class="list-disc pl-12">
                <li>We recognize individual and team performance with a host of Awards time to time.</li>
                <li>We encourage employees to explore their full potential and be motivated to be a team player and take up as much responsibility as they are willing and capable of.</li>
                <li>We love employees coming forward with new ideas, innovations.</li>
                <li>An employee being proactive, not only helps company & customers but also sets example to fellow colleagues and give recognition.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* section 3 */}
      <div class="p-4 gap-2 pt-1 lg:px-40">
      <h1 class={classes.headJob+" font-medium leading-tight ml-1 mt-0 mb-0 text-blue-600"}>Job opportunities with us</h1>

      </div>

      <div class={classes.careerTableTop+" bg-blue-50 dark:bg-blue-900 mx-auto"}>
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
            <div class={classes.careerTable+" mx-auto"}  >
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
      <div class="p-4 gap-2 pt-1 lg:px-40">
      <h1 class={classes.headJob+" font-medium leading-tight ml-1  mt-0 mb-2 text-blue-600"}>Internship opportunities</h1>
      <div class={classes.aboveIntern+" row p-lg-4 p-md-3 p-sm-2 p-1 "}>
          <div class="col-12 col-lg-6 col-md-6 col-sm-12 col-xl-6 p-lg-2 p-md-2 p-xl-1 p-sm-1 p-1 bg-cyan-400 rounded-md h-400 flex items-center justify-center">
            <img  src="/assets/career/internship.jpg" alt="Internship" />
          </div>
          {/* image right section */}
          <div class="p-1 col-12 col-lg-6 col-md-6 col-sm-12 col-xl-6  bg-blue-50 dark:bg-blue-900 ">

              <p class="font-small p-lg-4 p-md-3 p-sm-2 p-2 leading-tight  mt-1 mb-2 text-blue-600">
                Are you a fresh graduate or still into your college and preparing for the demanding corporate career that lies ahead?
                <br />
                <br />
                Or, do you already have some prior working experience, but coming back from a long career break due to personal reasons and want to restart the career?
               <br />
               <br />
                You may apply for internship with us and kick-start your career journey.
              </p>

          </div>

        </div>
      </div>
      <div class={classes.intern +" gap-2 pt-1  bg-blue-50 mx-auto dark:bg-blue-900 "}>

    
        <div class={classes.careerTableTop+" bg-blue-50 dark:bg-blue-900 mx-auto mt-2"}>
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
            <div class={classes.careerTable+" mx-auto"}  >
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
                  {internlist.map((data) =>
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
      </div>

    </main>
  );
}

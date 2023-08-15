import React, { useEffect, useState } from "react";
import { FaSearch } from 'react-icons/fa';
import { useRouter } from "next/router";
import classes from "../style/solutions.module.css";
import {  AiOutlineArrowRight} from 'react-icons/ai';
import Image from "next/image";


const ExternalJob = () => {
  const router = useRouter();

  const [search, setSearchText] = useState("");

  const [tablelist,setTableList]=useState([]);
  const list=[
    {
      title:"Web developer",
      organization:"Google",
      location:"Mumbai",
      Domain:"Web-Network",
      Date:"22/07/2022",
      status:"ON",
      exp:"12-13 Years",
      rexp:"10 Year",
      skill:"SDLC",
      noOfpos:"1",
      code:"450098",
      subject:"Application for external job"
    },
    {
      title:"Talent Acquisiton",
      organization:"Amazon",
      location:"Bangalore",
      Domain:"HR",
      Date:"15/01/2023",
      status:"ON",
      exp:"3-4 Years",
      rexp:"1 Year",
      skill:"Soft skills, Time management",
      noOfpos:"1",
      code:"36985",
      subject:"Application for external job"
    },
    {
      title:"Manager",
      organization:"HCL",
      location:"Mumbai/Bangalore",
      Domain:"Director",
      Date:"21/03/2023",
      status:"ON",
      exp:"6-7 Years",
      rexp:"3 Year",
      skill:"Web 3.0",
      noOfpos:"2",
      code:"35025",
      subject:"Application for external job"
    }

  ]
  useEffect(() => {
    setTableList(list)
  }, [search]);
 const searchinList=(e)=>{
 e.preventDefault();
  const listUp = list.filter((data) => data.title.toLowerCase() === search.toLowerCase());
  setTableList(listUp)
 }

 function applyNow(data){
  console.log("data is",data)
router.push({
  pathname: '/applynow',
  query:data
},"/applynow");
}


  return (
    <>
    <div>
       <Image height="500px" width="1100px" layout="responsive"   src="/assets/solutions/CareerEnhancement.jpg" alt="Career Enhancement" />
       <div className={classes.bannerDetails}>
       <h1 class={classes.heading} >Career Enhancement</h1>
      
       </div>
       <p class={classes.det+" text-center"} >Explore various open jobs matching your skills and apply for your dream job to elevate your career.</p>
     <br />
     <div style={{padding:"0",margin:"auto 0"}} className="row">
        <div className={classes.caseSub+" col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12 px-auto"}  style={{backgroundColor:"purple"}}>
         
            <h2 class={classes.caseheading}>Current Jobs at various organisations</h2>
           <h3 class={classes.subheading}>Automation enabled releases into production environments with the click of a button </h3>
            
           <button onClick={() => window.open("/externaljobs#table", "_self").focus()} class="hover:shadow-orange-md transition-all outline-none  btn my-4" style={{marginLeft: "10%",border:"1px solid white",display:"flex",flexDirection:"row",color:"white"}}>Explore jobs  <AiOutlineArrowRight style={{marginLeft:"4px",marginTop:"5px"}} /></button>
          
        </div>
        <div style={{padding:"0",margin:"auto 0"}}  className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12">
        <img  src="/assets/solutions/business-mirror.jpg" alt="Solution" />

        </div>
     </div>
    </div>
    <br />
    <br />
    <br />
    <div class={classes.careerTableTop+" bg-blue-50 dark:bg-blue-900 mx-auto"}>
          <h1 class="font-medium leading-tight ml-1 mt-4 mb-0 text-blue-600">External Job opportunities</h1>
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
                  {list.map((data) =>
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
        <br />
        <br />
    </>
  )
}
export default  ExternalJob ;
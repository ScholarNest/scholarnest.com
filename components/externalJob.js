import React, { useEffect, useState } from "react";
import { FaSearch } from 'react-icons/fa';
import { useRouter } from "next/router";
import classes from "./style/solutions.module.css";
import {  AiOutlineArrowRight} from 'react-icons/ai';
import { motion } from "framer-motion";

import { Card, Grid, Text, Link, Row } from "@nextui-org/react";
const ExternalJob = ({props}) => {
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
       <img style={{height:"110vh",width:"100vw"}}  src={props.img} alt="Solution" />
       <div style={{width:"500px", position :"relative", bottom:"50px",margin:"0 auto",backgroundColor:"white"}}>
       <h1 class={classes.heading} >{props.name}</h1>
      
       </div>
       <p class="text-center" style={{position:"relative",bottom:"40px",margin:"auto 3vw"}}>{props.details} </p>
     <br />
     <div style={{padding:"0",margin:"auto 0"}} className="row">
        <div className="col-6" style={{backgroundColor:"purple"}}>
         
            <h2 class={classes.caseheading}>Current Jobs at various organisations</h2>
           <h3 class={classes.subheading}>Automation enabled releases into production environments with the click of a button </h3>
            
           <button onClick={() => window.open("/externaljobs#table", "_self").focus()} class="hover:shadow-orange-md transition-all outline-none  btn my-4" style={{marginLeft: "10%",border:"1px solid white",display:"flex",flexDirection:"row",color:"white"}}>Explore jobs  <AiOutlineArrowRight style={{marginLeft:"4px",marginTop:"5px"}} /></button>
          
        </div>
        <div style={{padding:"0",margin:"auto 0"}} className="col-6">
        <img  src="/assets/pexels.jpg" alt="Solution" />

        </div>
     </div>
    </div>
    
    <div id="table" class="p-8 gap-4 pt-10 lg:px-40 bg-blue-50 dark:bg-blue-900 ">
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8 pt-10">
            <h1 class="font-medium leading-tight text-2xl mt-0 mb-0 text-blue-600">Job opportunities at various organization</h1>
      <div>
        <form onSubmit={searchinList} className="flex justify-end my-2 px-2" >
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search by job title"
          value={search}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button  class="px-2 h-10 py-2 " style={{color:"white", marginLeft:"5px",backgroundColor:"blue",borderRadius:"10px"}}> <FaSearch size={20} /></button>
        </form>
        <h4 class="font-small leading-tight text-1xl mt-0 mb-2 text-blue-600">
  <table class="table-auto w-full border divide-y divide-gray-200">
  <thead>
    <tr >
      <th class="px-4 py-2 border  text-center bg-gray-100">Job title</th>
      <th class="px-4 py-2 border  text-center bg-gray-100">Organization</th>
      <th class="px-4 py-2 border  text-center bg-gray-100">Location</th>
      <th class="px-4 py-2 border  text-center bg-gray-100">Domain</th>
      <th class="px-4 py-2 border  text-center bg-gray-100">Date</th>
      <th class="px-4 py-2 border   text-center bg-gray-100">Link</th>
    </tr>
  </thead>
  <tbody>
    {tablelist.map((data)=>
     <tr>
     <td class="px-4 py-2 border  text-center">{data.title} </td>
     <td class="px-4 py-2 border  text-center">{data.organization}</td>
     <td class="px-4 py-2 border  text-center">{data.location}</td>
     <td class="px-4 py-2 border  text-center" >{data.Domain}</td>
     <td class="px-4 py-2 border  text-center">{data.Date}</td>
     <td onClick={()=>applyNow(data)} class="px-4 py-2 border  text-center"  style={{ color:"blue",textDecoration:"underline",cursor:"pointer"}}>  Apply</td>
   </tr>
    )}
   
  
  </tbody>
</table>

            </h4>
       </div>
           
        </div>
        </div>
        <br />
        <br />
        <br />
    </>
  )
}
export default  ExternalJob ;
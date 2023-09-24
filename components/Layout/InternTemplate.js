import { useRouter } from "next/router";
// import nodemailer from "nodemailer";
import React, { useEffect, useState } from "react";
import {  AiFillBulb} from 'react-icons/ai';
import {  AiOutlineCopy} from 'react-icons/ai';
import classes from './careerTemplate&InternTemplate.module.css';
import {  AiOutlineMail} from 'react-icons/ai';
const InternTemplate = ({props}) => {

  // USer details
  const [title,setTitle]=useState("");
  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [mail,setMail]=useState("");
  const [mobile,setMobile]=useState("");
  const [skills,setSkills]=useState("");
  const [exp,setExp]=useState("");
  const [nperiod,setNperiod]=useState("");
  const [currctc,setCurrctc]=useState("");
  const [expctc,setExpctc]=useState("");
  const [location,setLocation]=useState("");
  const [Reloc,setReloc]=useState("");
  const [resume,setResume]=useState(null);
  const router = useRouter();
  

  
 
  function applyNow(){
   const div=document.getElementById("applyForm");
   div.style.backgroundColor="rgb(251 251 249)";
   div.style.height="auto";
   router.push("#applyForm");
  }
  function sendMail(e){
    console.log("clicked")
    e.preventDefault();
    const body="Hey there !, My name is "+ title+" "+fname+" "+ lname+" and I'm here applying for this job role, Kindly look into this"
    console.log("details are", title, fname, lname);
    const name= fname+" "+lname
    let data = {
        jobtitle:props.title,
        jobcode:props.code,
        title,
        name,
        mail,
        mobile,
        skills,
        location,
        Reloc,
     }
     const dataa = new FormData();
     dataa.append('data',JSON.stringify(data))
     dataa.append('file',resume)
  fetch('/api/internMail', {
      method: 'POST',
      // headers: {
      //   'Accept': 'application/json, text/plain, */*',
      //   'Content-Type': 'application/json'
      // },
      body:dataa
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        alert("Details has been submitted Succesfully !")
        
        setTitle("")
        setFname("")
        setLname("")
        setMail("")
        setMobile("")
        setSkills("")
       
        setLocation("")
        setReloc("")
        setResume(null)
        document.getElementById("applyForm").style.height="0";
      }
    })
//   //   Email.send({
//   //     Host : "smtp.elasticemail.com",
//   //     Username : "duadarsh13@gmail.com",
//   //     Password : "EA9EE3A3C7327A7F3B6AF1DB6E1D4E40D6FC",
//   //     To : 'adarsh2dubey@gmail.com',
//   //     From : "duadarsh13@gmail.com",
//   //     Subject : "New job application",
//   //     Body :"<html><h2>{body}</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
      
//   // }).then(
//   //   message => alert("You have succesfully submitted the form..Thank you !")
//   // );
  }
  return (
    <>
    <div  class={classes.applyTemp}>
      <div className={classes.careerTemplate+" w-75 row"}>
        <h1 >{props.title}</h1>
     </div>
    
     <hr size="20" style={{border:"3px solid red",height:"3px !important",width:"70px",marginLeft:"15px"}} />
      <div  style={{margin:"0"}} className="row  justify-content-end">
        {/* <div  class="col-2">  */}
        <button onClick={applyNow}  class={classes.applyNowBtn+" btn py-2 lg:py-3 px-8 lg:px-5 me-2 text-white-500 font-semibold rounded-lg bg-orange-500"}>Apply Now</button>
        {/* </div> */}
      </div>
      {/* Form */}
      <div id="applyForm" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",marginTop:"15px",height:"0",overflow:"hidden", backgroundColor:"whitesmoke"}}class="mx-4 px-5 py-2">
      <form enctype="multipart/form-data" onSubmit={sendMail}>
        <br />
        <div className="row ">
    <div class="form-group col-2 ">
    {/* <label for="exampleFormControlSelect1">Title</label> */}
    <select  onChange={(e)=>{setTitle(e.target.value)}} placeholder='Title' class="form-control" id="exampleFormControlSelect1">
      <option value="-">Title *</option>
      <option value="Mr.">Mr.</option>
      <option value="Ms.">Ms.</option>
      <option value="Mrs."> Mrs.</option>
   
    </select>
  </div>
  <div class="form-group col-lg-5 col-md-5 col-sm-12 ">
    {/* <label for="exampleFormControlInput1">First Name</label> */}
    <input onChange={(e)=>{setFname(e.target.value)}} type="text" class="form-control" id="exampleFormControlInput1" placeholder="First name *" />
  </div>
  <div class="form-group col-lg-5 col-md-5 col-sm-12">
    {/* <label for="exampleFormControlInput1">Last Name</label> */}
    <input onChange={(e)=>{setLname(e.target.value)}} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Last name *" />
  </div>
  </div>
  <br />
  <div className="row">
   
  <div class="form-group col-lg-6 col-md-6 col-sm-12 ">
    {/* <label for="exampleFormControlInput1">Email</label> */}
    <input onChange={(e)=>{setMail(e.target.value)}} type="email" class="form-control" id="exampleFormControlInput1" placeholder="Mail*" />
  </div>
  <div class="form-group col-lg-6 col-md-6 col-sm-12">
    {/* <label for="exampleFormControlInput1">Mobile </label> */}
    <input onChange={(e)=>{setMobile(e.target.value)}} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Mobile*" />
  </div>
  </div>
  <br />
  <div className="row ">
  <div class="form-group">
    {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
    <textarea onChange={(e)=>{setSkills(e.target.value)}} placeholder="Key technical skills*" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  </div>

   <br />
   <div className="row">
   
   <div class="form-group col-lg-6 col-md-6 col-sm-12 ">
     {/* <label for="exampleFormControlInput1">Email</label> */}
     <input onChange={(e)=>{setLocation(e.target.value)}} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Current Location" />
   </div>
   <div class="form-group col-lg-6 col-md-6 col-sm-12">
     {/* <label for="exampleFormControlInput1">Mobile </label> */}
     <input onChange={(e)=>{setReloc(e.target.value)}} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ready to Relocate *" />
   </div>
   <br />
   <br />
   <br />
   <div className="row justify-content-center">
   <div class="form-group col-6">
    <label for="exampleFormControlFile1">Attach your Profile(*)</label>
    <input onChange={(e)=>{setResume(e.target.files[0])}} type="file" class="form-control-file" id="exampleFormControlFile1" />
  </div>
   </div>
   <br />
   <button class="m-3 w-40 mx-auto btn btn-center text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none ">Submit</button>
   </div>
</form>
     </div>
      <div style={{margin:"3%", backgroundColor:"whitesmoke",padding:"16px"}}>
       <div  style={{margin:"0",}} class="row justify-content-start">
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
          <h3 class={classes.h3Style}> <AiFillBulb class="mt-1" size="17"  /> Job Title</h3>
          <h3 class={classes.h1Style}>{props.title}</h3>
        </div>
      
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
          <h3 class={classes.h3Style}><AiOutlineCopy class="mt-1" size={17} />Work Location</h3>
          <h3 class={classes.h1Style}>{props.location}</h3>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
          <h3 class={classes.h3Style}> <AiFillBulb class="mt-1" size="17"  /> Stipend</h3>
          <h3 class={classes.h1Style}>As per market standard</h3>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
          <h3 class={classes.h3Style}> <AiOutlineCopy class="mt-1" size={17}/> Primary skills</h3>
          <h3 class={classes.h1Style}>{props.skill}</h3>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
          <h3 class={classes.h3Style}> <AiOutlineCopy class="mt-1" size={17}/> No. of position</h3>
          <h3 class={classes.h1Style}>{props.noOfpos}</h3>
        </div>
     
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
          <h3 class={classes.h3Style}> <AiOutlineMail class="mt-1" size={17}/> Mail to</h3>
          <h3 class={classes.h1Style}>scholarnest@gmail.com</h3>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
          <h3 class={classes.h3Style}>  <AiOutlineCopy class="mt-1" size={17}/>Posted on</h3>
          <h3 class={classes.h1Style}>{props.Date}</h3>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 mb-4">
          <h3 class={classes.h3Style}><AiOutlineCopy class="mt-1" size={17} />Internship Status</h3>
          <h3 class={classes.h1Style}>{props.status}</h3>
        </div>
      
       </div>
      </div>
    {/* Skills and Roles, Responsibilities */}
    <div style={{margin:"2%",padding:"10px"}}>
 <div style={{margin:"0"}} className="row">
  <div className="col-lg-6 col-md-6 col-sm-12"><h3 class={classes.h1Style}> Role & Responsibilities </h3 >
   <div class="px-4 py-3">
   <ul style={{  listStyleType:"disc"}}>
  <li>Working with our development manager to develop client custom applications, or core product offerings, based on written specifications both functional and technical.</li>
  <li>Unit testing of those applications</li>
  <li>Design and develop systems to support both business and technical requirements which includes mapping user requirements for effective Dynamics 365 technology solutions</li>
  <li>Responsible for development efforts for software enhancements, extensions, defect corrections and integration of features in Dynamics 365
  <li>Supporting core and custom applications for bugs.</li>
  <li>Maintain multiple projects and deadlines. These are normally prioritized thru 2-week SCRUM Sprints for all developers using agile development practices.</li>
  <li>Recording time and work progress on a daily basis</li>
</li>
</ul>

   </div>
  </div>
  <div style={{backgroundColor:"rgb(251 251 249)",minHeight:"500px"}}className="col-lg-6 col-md-6 col-sm-12">
    <h3 class={classes.h1Style}> Skills/Experience </h3>
    <h3 class={classes.contentInPara+" px-4 py-3"} style={{fontSize:"16px",fontWeight:"500"}}>Technologies</h3>
    <div class="px-5">
   
   <ul style={{  listStyleType:"disc"}}>
  <li>Experience in MS Dynamics CRM 2016, D365 CRM.</li>
  <li>Basic Knowledge in Power Platform (PowerApps, Power Automate)</li>
  <li>Extensive experience with plug-in and workflows activity development.
</li>
<li>Good experience on MS CRM customization and configuration of Entities, forms and field level, Ribbon development, and Web resource.
</li>
<li>Extensive experience with plug-in and workflow activity development
</li>
<li>Experience of implementation and development of Dashboards and Charts.</li>
<li>Experience in integrating Canvas App with Forms.</li>
<li>Implementing security roles, with access and privileges levels, with different security models.
</li>
<li>Experience on OOB functionalities feature, Business Rules, Business Process Flows, and Actions.</li>
</ul>

   </div>
   <div class="px-4 py-3">
   <h3 class={ classes.contentInPara+" mb-2" } >Functional Area</h3>

    <p>Product Development</p>
   </div>
   <div class="px-4 py-3">
   <h3 class={ classes.contentInPara+" mb-2" }>Education</h3>
    <p>Bachelor’s degree in a Computer Science, or equivalent practical experience
</p>
   </div>
   <div class="px-4 py-3">
   <h3 class={ classes.contentInPara+" mb-2" }>Soft Skills</h3>
    <ul class="px-4" style={{  listStyleType:"disc"}}>
      <li>Proficiency to handle complex and quality demanding jobs.</li>
      <li>Should have good Communication skills.
</li>
<li>Should have technical bent of mind.

</li>
<li>Should have problem solving, prioritizing tasks, multi-tasking abilities.
</li>
<li>Should be able to understand and handle tasks independently.
</li>
    </ul>
   </div>
</div>
 </div>
 </div>
    
    </div>
    <div style={{ backgroundColor: "rgb(251 251 249)" }} className={classes.letsConnect + " rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500"}>
            <div className="flex flex-col w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
              <h3 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
              Interested? Join our growing team.
              </h3>
            </div>
            <button className={
              "py-2 lg:py-4 px-8 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none"} onClick={applyNow}> <p class="text-white-500"> Get Started </p> </button>
          </div>
   
<br />
<br />
    </>
    
  )
}

export default InternTemplate;
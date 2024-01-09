import { useRouter } from "next/router";
// import nodemailer from "nodemailer";
import React, { useEffect, useState } from "react";
import {  AiFillBulb} from 'react-icons/ai';
import {  AiOutlineCopy} from 'react-icons/ai';
import classes from './careerTemplate&InternTemplate.module.css';
import {  AiOutlineMail} from 'react-icons/ai';

const InternTemplate = () => {
  const [inData, setiNData] = useState("");

  useEffect(() => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem('myData');

    // Handle the stored data as needed
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setiNData(parsedData);
      // Use the parsedData as required
    }
  }, []);
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

   router.push("#applyForm");
  }
  function sendMail(e){
    console.log("clicked")
    e.preventDefault();
    const body="Hey there !, My name is "+ title+" "+fname+" "+ lname+" and I'm here applying for this job role, Kindly look into this"
    console.log("details are", title, fname, lname);
    const name= fname+" "+lname
    let data = {
        jobtitle:inData.title,
        jobcode:inData.code,
        title,
        name,
        mail,
        mobile,
        skills,
        location,
        Reloc,
     }
     if (
      !inData.title ||
      !inData.code || 
      !title || 
      !name ||
      !mail ||
      !mobile ||
      !skills ||
      !Reloc||
  !resume
    ) {
      alert('One or more variables are empty. Cannot proceed.');
      return; // or show an error message, navigate to a different page, etc.
    }
     try{
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
        alert("Details has been submitted Succesfully !")
        const inputFields = document.querySelectorAll('#applyForm input');
        inputFields.forEach((field) => {
          field.value = ''; // Reset input field value
        });
        const selectFields = document.querySelectorAll('#applyForm select');
        selectFields.forEach((field) => {
          field.value = ''; // Reset input field value
        });
        const textAreaFields = document.querySelectorAll('#applyForm textarea');
        textAreaFields.forEach((field) => {
          field.value = ''; // Reset input field value
        });
       
        window.location.reload();
      }else{
        alert("Error: Try again !")
      }
    })
  }catch(exception){
    alert("Error: Try again !")
  }
  }
  return (
    <>
    <div  class={classes.applyTemp}>
      <div className={classes.careerTemplate+" w-75 row"}>
        <h1 >{inData.title}</h1>
     </div>
    
     <hr size="20" style={{border:"3px solid red",height:"3px !important",width:"70px",marginLeft:"15px"}} />
      <div  style={{margin:"0"}} className="row  justify-content-end">
        {/* <div  class="col-2">  */}
        {/* <button onClick={applyNow}  class={classes.applyNowBtn+" btn py-2 lg:py-3 px-8 lg:px-5 me-2 text-white-500 font-semibold rounded-lg bg-orange-500"}>Apply Now</button> */}
        {/* </div> */}
      </div>
      
      <div style={{margin:"3%", backgroundColor:"whitesmoke",padding:"16px"}}>
       <div  style={{margin:"0",}} class="row justify-content-start">
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
          <h3 class={classes.h3Style}> <AiFillBulb class="mx-1 mt-sm-1" size="17"  /> Job Title</h3>
          <h3 class={classes.h1Style}>{inData.title}</h3>
        </div>
      
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
          <h3 class={classes.h3Style}><AiOutlineCopy class="mx-1 mt-sm-1" size={17} />Work Location</h3>
          <h3 class={classes.h1Style}>{inData.location}</h3>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
          <h3 class={classes.h3Style}> <AiFillBulb class="mx-1 mt-sm-1" size="17"  /> Stipend</h3>
          <h3 class={classes.h1Style}>As per market standard</h3>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
          <h3 class={classes.h3Style}> <AiOutlineCopy class="mx-1 mt-sm-1" size={17}/> Primary skills</h3>
          <h3 class={classes.h1Style}>{inData.skill}</h3>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
          <h3 class={classes.h3Style}> <AiOutlineCopy class="mx-1 mt-sm-1" size={17}/> No. of position</h3>
          <h3 class={classes.h1Style}>{inData.noOfpos}</h3>
        </div>
     
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
          <h3 class={classes.h3Style}> <AiOutlineMail class="mx-1 mt-sm-1" size={17}/> Mail to</h3>
          <h3 class={classes.h1Style}> scholarnestmarketing@gmail.com</h3>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
          <h3 class={classes.h3Style}>  <AiOutlineCopy class="mx-1 mt-sm-1" size={17}/>Posted on</h3>
          <h3 class={classes.h1Style}>{inData.Date}</h3>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 mb-4">
          <h3 class={classes.h3Style}><AiOutlineCopy class="mx-1 mt-sm-1" size={17} />Internship Status</h3>
          <h3 class={classes.h1Style}>{inData.status}</h3>
        </div>
      
       </div>
      </div>
  
    {/* Form */}
    <div id="applyForm" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",marginTop:"15px", backgroundColor:"whitesmoke"}}class="mx-sm-4 mx-2 px-sm-5 px-2 py-2">
      <form enctype="multipart/form-data" onSubmit={sendMail}>
        <br />
        <div className="row ">
    <div class="form-group col-sm-3 col-md-2 col-6 my-2">
    {/* <label for="exampleFormControlSelect1">Title</label> */}
    <select  onChange={(e)=>{setTitle(e.target.value)}} placeholder='Title' class="form-control" id="exampleFormControlSelect1">
      <option value="-">Title *</option>
      <option value="Mr.">Mr.</option>
      <option value="Ms.">Ms.</option>
      <option value="Mrs."> Mrs.</option>
   
    </select>
  </div>
  <div class="form-group col-lg-5 col-md-5 col-sm-12 my-2">
    {/* <label for="exampleFormControlInput1">First Name</label> */}
    <input onChange={(e)=>{setFname(e.target.value)}} type="text" class="form-control" id="exampleFormControlInput1" placeholder="First name *" />
  </div>
  <div class="form-group col-lg-5 col-md-5 col-sm-12 my-2">
    {/* <label for="exampleFormControlInput1">Last Name</label> */}
    <input onChange={(e)=>{setLname(e.target.value)}} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Last name *" />
  </div>
  </div>
 
  <div className="row">
   
  <div class="form-group col-lg-6 col-md-6 col-sm-12 my-2">
    {/* <label for="exampleFormControlInput1">Email</label> */}
    <input onChange={(e)=>{setMail(e.target.value)}} type="email" class="form-control" id="exampleFormControlInput1" placeholder="Mail*" />
  </div>
  <div class="form-group col-lg-6 col-md-6 col-sm-12 my-2">
    {/* <label for="exampleFormControlInput1">Mobile </label> */}
    <input onChange={(e)=>{setMobile(e.target.value)}} type="Number" class="form-control" id="exampleFormControlInput1" placeholder="Mobile*" />
  </div>
  </div>

  <div className="row ">
  <div class="form-group">
    {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
    <textarea onChange={(e)=>{setSkills(e.target.value)}} placeholder="Key technical skills*" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  </div>

   
   <div className="row">
   
   <div class="form-group col-lg-6 col-md-6 col-sm-12 my-2">
     {/* <label for="exampleFormControlInput1">Email</label> */}
     <input onChange={(e)=>{setLocation(e.target.value)}} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Current Location" />
   </div>
   <div class="form-group col-lg-6 col-md-6 col-sm-12 my-2">
     {/* <label for="exampleFormControlInput1">Mobile </label> */}
     <input onChange={(e)=>{setReloc(e.target.value)}} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ready to Relocate *" />
   </div>

   <div className="row justify-content-center">
                <div class="form-group col-12 col-sm-6  my-2">
                  <label class="mx-1" for="exampleFormControlFile1">Attach your Profile(*)</label>
                  <input onChange={(e)=>{ 
                  const selectedFile = e.target.files[0]
                  if (selectedFile && selectedFile.type === 'application/pdf') {
                   setResume(selectedFile);
                  } else {
                 alert('Please select a PDF file.');
                e.target.value = null;
              }}}  type="file" class="form-control-file " id="exampleFormControlFile1" />
                </div>
              </div>

   <button class="m-3 w-40 mx-auto btn btn-center text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none ">Submit</button>
   </div>
</form>
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
import React from 'react'
import classes from "./style/teach.module.css";
import Image from "next/image";

const Teach = () => {
    function showDiv1() {
        document.getElementById('div1').style.display = 'block';
        document.getElementById('div2').style.display = 'none';

        document.getElementById('btn1').style.borderTop="4px solid #F4C430";
        document.getElementById('btn2').style.borderTop="none";
    }

    function showDiv2() {
        document.getElementById('div2').style.display = 'block';
        document.getElementById('div1').style.display = 'none';
        
        document.getElementById('btn2').style.borderTop="4px solid #F4C430";
        document.getElementById('btn1').style.borderTop="none";
    }
  return (
   <>
   {/* <div className={classes.tagdiv+" mx-5 my-1 "}>
    <p class="mb-1"><a href="/"> Home </a>  &gt;&gt; Teach</p>

    <hr />
   </div>
   <br /> */}
   <br />
   <div class={classes.mainHeadDiv+" fw-bold text-center"}>
   <h1 class={classes.mainHead+" my-2"}> APPLY AS INSTRUCTOR</h1>
   <p>Teach with ScholarNest and drive growth.</p>
   <br />
   <hr class="mx-auto w-10 fw-bold " style={{opacity:"1"}} />
   </div>
   <br />
   <div className="row mx-0 justify-content-center">
    <div className="col-12 col-sm-6 col-md-3">
  <div className={classes.imgAndDet}>
    <img src="/assets/1.jpg" alt="" />

    <p class="fw-bold my-3">
    You are not alone
    </p>
    <p>We help you at every stage of your journey to becoming a published author.</p>
  </div>

    </div>
    <div className="col-12 col-sm-6 col-md-3">
    <div className={classes.imgAndDet}>
    <img src="/assets/2.jpg" alt="" />
    <p class="fw-bold my-3">
    Build you brand
    </p>
    <p>Our unique marketing plans will help you build your brand and sizable audience.</p>
  </div>

    </div>
    <div className="col-12 col-sm-6 col-md-3">
    <div className={classes.imgAndDet}>
    <img src="/assets/3.jpg" alt="" />
    <p class="fw-bold my-3">
    Make an Impact
    </p>
    <p>Share your expertise to influence and empower the career and growth.</p>
  </div>

    </div>
   </div>
   <br />
   <div class="container">
    <Image layout="responsive" width="500px" height="200px" src="/assets/become-teacher.jpg"></Image>
    <br />
    <div >
    <h2 class={classes.headingTag}>HOW TO BECOME A TEACHER</h2>
    <hr class="mx-auto w-10 fw-bold " style={{opacity:"1"}} />


  
   </div>
   </div>
   <br />
   <div className="container">
    <div className="row justify-content-center gap-1 mt-1" >
        <div id="btn1" onClick={showDiv1}  className={classes.btn1+" col-5   d-flex justify-content-center btn btn-light"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi mt-1 mr-2 bi-journal-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
</svg> Start a new course
        </div>
        <div id="btn2" onClick={showDiv2}  className={classes.btn2+" col-5 d-flex  justify-content-center  btn btn-light"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mt-1 mr-2 bi bi-person-plus" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg> Already have a course
        </div>
    </div>
    <div className="row border ">
        <div id="div1" className={classes.div1+" col-12 px-5 p-2"}>
            <br />
            <p>Do you believe in life-long continuous learning and sharing our knowledge with others. We can help you teach and create self-paced courses and other learning materials because we know the impact of teaching on learner's and teacher's knowledge, career, future, and life.</p>
            <p class="my-2">We are there to help you create your first course and become successful in this profession.</p>
            <p>
            Our team will help you in the following.
            </p>
            <br />
            <ul>
                <li>1. Identify and choose your course and subject area.</li>
                <li>2. Structure your course and prepare a table of content.</li>
                <li>3. Mentorship, guidance, and training for the following.</li>
            <div class="my-2" style={{marginLeft:"20px"}}>
                <li>a. How to develop your course content?</li>
                <li>b. How to record high-quality audio/video?</li>
                <li>c. How to edit your course content to improve audio/video quality?</li>
                <li>d. How to create course subtitles?</li>
            </div>
                <li>4. Editorial, grammatical, and technical reviews/corrections</li>
                <li>5. Marketing, promotion, and building your brand</li>
            </ul>
            <p class="text-black">We will be there with you at every step of your journey and help you succeed. Apply now, and our experts will get in touch with you to discuss and plan your journey.</p>
            <br />
        </div>
        <div id="div2" className={classes.div2+" col-12  px-5 p-2"}>
            <br />
            <p>
        Do you have expertise, experience, and knowledge in modern technology tools and techniques? Have you already created one of the following types of learning content?
        </p>
        <br />
        <ul>
<li>1. Self-paced video training</li>
<li>2. Certification practice and assessment test</li>
<li>3. Learning project and coding exercises </li>
<li>4. Instructor-led course and delivery materiall </li>
<li>5. Mock interview plan and interview questions</li>
<br />
</ul>
<p>
We can help you improve, monetize and expand your content reach to a broader audience. Our team will help you in the following.
</p>
<br />
<ul>
    <li>
1. Marketing, promotion, and building your brand </li>
<li>2. Reach to a broader audience and promote your courses </li>
<li>
3. Identify new opportunities, improve and extend your portfolio</li>
<li>
4. Multi-dimensional monetization of your content
</li>
<li>
5. Editorial, grammatical, and technical reviews/corrections
</li>
</ul>
<br />
<p>
We will be there with you at every step of your journey and help you grow and succeed. Apply now, and our experts will get in touch with you to discuss and plan your journey.
</p>
<br />

 </div> 

           </div>
           <br />
           <br />
   </div>
    

   </>
  )
}

export default  Teach;
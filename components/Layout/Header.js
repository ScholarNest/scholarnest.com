import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";
import LogoVPN from "../../public/assets/scholarnest-logo.svg";
import { FaAngleDown } from 'react-icons/fa';
import classes from './Header.module.css';
import company from "../../pages/company";
import {AiOutlineArrowRight} from "react-icons/ai"
import { list } from "postcss";
const Header = () => {



  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const router = useRouter();

  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });

  }, []);
  function hoverCareer(e){
    e.preventDefault();
    document.getElementById("menu").style.display="block";
  }
  function MouseOutCareer(e){
    e.preventDefault();
    // document.getElementById("menu").style.display="none";
  }
  return (
    <>
     
      <header
        className={
          "fixed top-0 w-full  z-30 bg-black-700 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-1")
        }
      >
        <nav style={{boxSizing:"border-box"}} className="max-w-screen-xl px-6 sm:px-5 md:px-5 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center cursor-pointer">
            <LinkScroll onClick={() =>   router.push("/")} href="/">
              <img alt="nextui logo" src="/assets/scholarnest-logo.jpg" />
            </LinkScroll>
          </div>
          <ul className="hidden md:flex lg:flex col-start-4 col-end-8 text-black-100  items-center">
            <a
              legacyBehavior={true}
              activeClass="active"
              // href="/company"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              // onMouseOver={hoverCareer}
              // onMouseLeave={MouseOutCareer}
              // onClick={() => window("/company", "_blank").focus()}
              className={
                classes.menu+" " +
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-orange-500 animation-active "
                  : " text-black-100 hover:text-orange-500 a")
              }
            >
              <div onClick={() =>   router.push("/company")} style={{display:"flex",flexDirection:"row"}}>Company <FaAngleDown style={{marginTop:"6px"}}/> </div>
              <div className={classes.submenu + " bg-light py-1 px-6 sm:px-1 md:px-10"}  id="menu" >
              <div className="row">
                <div className="col-3 py-3">
                <img  style={{height:"150px"}} src="/assets/homepage/companyHeader.jpg"/>  
               {/* <GrPersonalComputer  size={120} /> */}
                <h1 style={{fontWeight:"bold",fontSize:"1.3rem",color:"black",marginTop:"8px",marginBottom:"6px"}}>Company</h1>
               
                <p>
                We have experience with many analytics platforms and can help you navigate the market.                </p>
                </div>
                <div className="col-9">
                  <div  className="row justify-content-center p-4">
                   
                    <div  class={classes.hoverSubmenu+" "+"py-2 m-3"} style={{height:"97px",padding:"10px",borderLeft:"1px solid blue",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
                      <a href="/company#about">
                      <h1 style={{color:"black",fontSize:"1rem",fontWeight:"bold",marginBottom:"4px"}}>About</h1>
                      <p>All information about company.</p>
                      </a>
                    </div>
                    
                    <div  class={classes.hoverSubmenu+" "+"py-2 m-3"} style={{height:"97px",padding:"10px",borderLeft:"1px solid blue",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
                      <a href="/company#approach">
                      <h1 style={{color:"black",fontSize:"1rem",fontWeight:"bold",marginBottom:"4px"}}>Approach</h1>
                      <p>A way of dealing with problems.</p>
                      </a>
                    </div>
                    <div  class={classes.hoverSubmenu+" "+"py-2 m-3"} style={{height:"97px",padding:"10px",borderLeft:"1px solid blue",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
                     <a href="/company#portfolio">
                      <h1 style={{color:"black",fontSize:"1rem",fontWeight:"bold",marginBottom:"4px"}}>Portfolio</h1>
                      <p> Collection of a wide range of assets.</p>
                      </a>
                    </div>
                    <div  class={classes.hoverSubmenu+" "+"py-2 m-3"} style={{height:"97px",padding:"10px",borderLeft:"1px solid blue",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
                     <a href="/company#techexpertise">
                     <h1 style={{color:"black",fontSize:"1rem",fontWeight:"bold",marginBottom:"4px"}}>Capabilities</h1>
                      <p>Domain of expertise in technologies. </p>
                      </a>
                    </div>
                    <div  class={classes.hoverSubmenu+" "+"py-2 m-3"} style={{height:"97px",padding:"10px",borderLeft:"1px solid blue",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
                      <a href="/career">                    
                      <h1 style={{color:"black",fontSize:"1rem",fontWeight:"bold",marginBottom:"4px"}}>Career</h1>
                      <p>Route to career page.</p>
                      </a> 
                    </div>
                    <div  class={classes.hoverSubmenu+" "+"py-2 m-3"} style={{height:"97px",padding:"10px",borderLeft:"1px solid blue",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
                       <a href="/contactUs">
                      <h1 style={{color:"black",fontSize:"1rem",fontWeight:"bold",marginBottom:"4px"}}>Contact</h1>
                      <p>Contact us for more details.</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
      </div>
                </a>
            
            <LinkScroll
              legacyBehavior={true}
              activeClass="active"
              // href="/solutions"
             
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("solutions");
              }}
              className={
                classes.menuSol +" " +
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "pricing"
                  ? " text-orange-500 animation-active "
                  : " text-black-100 hover:text-orange-500 ")
              }
            >
                 <div  onClick={() =>   router.push("/solutions")} style={{display:"flex",flexDirection:"row"}}>Solutions <FaAngleDown style={{marginTop:"6px"}}/> </div>
                 <div className={classes.submenuSol + " bg-light py-1 px-6 sm:px-1 md:px-10"}  id="menu" >
              <div className="row">
                <div className="col-3 py-3">
                <img  style={{height:"120px",width:"100%"}} src="/assets/homepage/solutionsHeader.jpg"/>  
               {/* <GrPersonalComputer  size={120} /> */}
                <h1 style={{fontWeight:"bold",fontSize:"1.3rem",color:"black",marginTop:"8px",marginBottom:"6px"}}>Solutions</h1>
               
                <p> Digital solutions combining strategy, technology, automation and people.</p>       
                <button onClick={() =>   router.push("/solutions")} class={classes.bnt +" btn  text-orange-500 border-orange-500 my-4"} style={{border:"1px solid",display:"flex",flexDirection:"row"}}>Explore  <AiOutlineArrowRight style={{marginLeft:"4px",marginTop:"2px"}} /></button>
                         </div>
                <div className="col-9">
                  <div  className="row  p-4">
                    <div onClick={() =>   router.push("/managedservices")}  class={classes.hoverSubmenu+" "+"py-2 m-3"} style={{height:"95px",padding:"10px",borderLeft:"1px solid blue",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
                                          <h1 style={{color:"black",fontSize:"1rem",fontWeight:"bold",marginBottom:"4px"}}>Managed Services</h1>
                      <p>Services we offering.</p>
                      
                    </div>
                    
                    <div  class={classes.hoverSubmenu+" "+"py-2 m-3"} style={{height:"97px",padding:"10px",borderLeft:"1px solid blue",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
                    <LinkScroll onClick={() =>   router.push("/technologyconsulting")} >

                      <h1 style={{color:"black",fontSize:"1rem",fontWeight:"bold",marginBottom:"4px"}}>Technology Consulting</h1>
                      <p>Technology Consulting Support.</p>
                      </LinkScroll>
                    </div>
                    <div  class={classes.hoverSubmenu+" "+"py-2 m-3"} style={{height:"97px",padding:"10px",borderLeft:"1px solid blue",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
                    <LinkScroll onClick={() =>   router.push("/academy")} >

                      <h1 style={{color:"black",fontSize:"1rem",fontWeight:"bold",marginBottom:"4px"}}>Academy</h1>
                      <p>  Self Paced, instructor Led and many more. </p>
                      </LinkScroll>

                    </div>
                  
                    <div  class={classes.hoverSubmenu+" "+"py-2 m-3"} style={{height:"97px",padding:"10px",borderLeft:"1px solid blue",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
                    <LinkScroll onClick={() =>   router.push("/staffaugmentation")}>

                      <h1 style={{color:"black",fontSize:"1rem",fontWeight:"bold",marginBottom:"4px"}}>Staff Augmentation</h1>
                      <p>Outsourcing strategy that is used to staff a project.</p>
                                    
                                          </LinkScroll>

                    </div>
                    <div  class={classes.hoverSubmenu+" "+"py-2 m-3"} style={{height:"97px",padding:"10px",borderLeft:"1px solid blue",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
                    <LinkScroll onClick={() =>   router.push("/externaljobs")}>

                      <h1 style={{color:"black",fontSize:"1rem",fontWeight:"bold",marginBottom:"4px"}}>Career Enhancement</h1>
                      <p>Job lists for other companies job seekers.</p>
                      </LinkScroll>
                    </div>
                  </div>
                </div>
              </div>
      </div>
            </LinkScroll>
            
            {/* <LinkScroll
              legacyBehavior={true}
              activeClass="active"
              href="/contactUs"
              onClick={() => window("/contactUs", "_blank").focus()}
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("contactUs");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === ""
                  ? " text-orange-500 animation-active "
                  : " text-black-100 hover:text-orange-500 ")
              }
            >
              Contact Us
            </LinkScroll> */}
{/* 
            <LinkScroll
              legacyBehavior={true}
              activeClass="active"
              href="/learnwithUs"
              onClick={() => window("/learnwithUs", "_blank").focus()}
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "feature"
                  ? " text-orange-500 animation-active "
                  : " text-black-100 hover:text-orange-500 ")
              }
            >
              Learn with Us
            </LinkScroll> */}
            <LinkScroll
            legacyBehavior={true}
              activeClass="active"
              href="/career"
              onClick={() => window.open("/career", "_self").focus()}
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("career");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "career"
                  ? " text-orange-500 animation-active "
                  : " text-black-100 hover:text-orange-500 ")
              }
            >
              Career
            </LinkScroll>

            <LinkScroll
              activeClass="active"
              to="https://blog.scholarnest.com"
              onClick={() =>
                window
                  .open(
                    "https://www.scholarnest.com/blog/",
                    "_blank"
                  )
                  .focus()
              }
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === ""
                  ? " text-orange-500 animation-active "
                  : " text-black-100 hover:text-orange-500 ")
              }
            >
              Blog
            </LinkScroll>
          </ul>
         
        </nav>
        {/* style={{zIndex:"10",display:"none",position:"relative",bottom:"10px"}} */}
        
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden md:hidden bottom-0 left-0 right-0 z-20 w-full shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <a
              href="/company"
              className={
                "px-2 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "about"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Company
            </a>
            <a
              href="/solutions"
              className={
                "px-2 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "feature"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Solutions
            </a>
            <a
             href="/career"
              className={
                "px-2 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "pricing"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Career
            </a>
            <a
              href="https://blog.scholarnest.com"
              className={
                "px-2 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "testimoni"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Blogs
            </a>
          </ul>
        </div>
      </nav>
      
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;

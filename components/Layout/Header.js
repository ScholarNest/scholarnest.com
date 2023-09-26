import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import { Link as LinkScroll } from "react-scroll";

import { FaAngleDown } from 'react-icons/fa';
import classes from './Header.module.css';

import { AiOutlineArrowRight } from "react-icons/ai"

const Header = () => {



  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [companyHeader, setCompanyHeader] = useState(true);
 

  
  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
      setIsMenuOpen(false);
     
    });
   

  }, []);


  //   function hoverCompany(e){ 
  //     e.preventDefault();
  //     document.getElementById("menu1").style.display="block";
  //   }
  // function MouseOutCompany(e){
  // e.preventDefault();
  // document.getElementById("menu1").style.display="none";

  // }

  return (
    <>

      <header
        className={classes.headerr +
          "fixed top-0 w-full  bg-black-700 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-1")
        }
      >
        <nav style={{ boxSizing: "border-box" }} className="max-w-screen-xl px-6 sm:px-5 md:px-5 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center cursor-pointer">
            <LinkScroll onClick={() => router.push("/")} to="/">
              <img alt="nextui logo" src="/assets/scholarnest-logo.jpg" />
            </LinkScroll>
          </div>
          <ul className="hidden md:flex lg:flex col-start-4 col-end-8 text-black-100  items-center">
            <li

              // href="/company"

              // smooth={true}
              duration={1000}


              // onMouseOver={hoverCareer}
              // onMouseLeave={MouseOutCareer}
              // onClick={() => window("/company", "_blank").focus()}
              className={
                classes.menu + " " +
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-orange-500 animation-active "
                  : " text-black-100 hover:text-orange-500 a")
              }
            >
              <div style={{ display: "flex", flexDirection: "row" }}><a href="/company"> Company</a> <FaAngleDown style={{ marginTop: "6px" }} /> </div>
            
                  <div className={classes.submenu + " bg-light py-1 px-6 sm:px-1 md:px-10"} id="menu1" >
                    <div className="row">
                      <div className="col-3 py-3">
                        <img style={{ height: "120px", width: "100%" }} src="/assets/homepage/companyHeader.jpg" />
                        {/* <GrPersonalComputer  size={120} /> */}
                        <h4 style={{ fontWeight: "bold", fontSize: "1.3rem", color: "black", marginTop: "8px", marginBottom: "6px" }}>Company</h4>

                        <p>
                          We have experience with many analytics platforms and can help you navigate the market.                </p>
                        <button onClick={() => router.push("/company")} className={classes.bnt + " btn  text-orange-500 border-orange-500 my-2"} style={{ border: "1px solid", display: "flex", flexDirection: "row" }}>Explore  <AiOutlineArrowRight style={{ marginLeft: "4px", marginTop: "5px" }} /></button>

                      </div>
                      <div className="col-9">
                        <div className="row justify-content-center p-4">

                          <div className={classes.hoverSubmenu + " " + "py-2 m-3"} style={{ height: "97px", padding: "10px", borderLeft: "1px solid blue", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
                            <a href="/company#about">
                              <>
                                <h4 style={{ color: "black", fontSize: "1rem", fontWeight: "bold", marginBottom: "4px" }}>About</h4>
                                <p>All information about company.</p>
                              </>
                            </a>
                          </div>

                          <div className={classes.hoverSubmenu + " " + "py-2 m-3"} style={{ height: "97px", padding: "10px", borderLeft: "1px solid blue", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
                            <a href="/company#approach">
                              <h4 style={{ color: "black", fontSize: "1rem", fontWeight: "bold", marginBottom: "4px" }}>Approach</h4>
                              <p>A way of dealing with problems.</p>
                            </a>
                          </div>
                          <div className={classes.hoverSubmenu + " " + "py-2 m-3"} style={{ height: "97px", padding: "10px", borderLeft: "1px solid blue", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
                            <a href="/company#portfolio">
                              <h4 style={{ color: "black", fontSize: "1rem", fontWeight: "bold", marginBottom: "4px" }}>Portfolio</h4>
                              <p> Collection of a wide range of assets.</p>
                            </a>
                          </div>
                          <div className={classes.hoverSubmenu + " " + "py-2 m-3"} style={{ height: "97px", padding: "10px", borderLeft: "1px solid blue", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
                            <a href="/company#techexpertise">
                              <h4 style={{ color: "black", fontSize: "1rem", fontWeight: "bold", marginBottom: "4px" }}>Capabilities</h4>
                              <p>Domain of expertise in technologies. </p>
                            </a>
                          </div>
                          <div className={classes.hoverSubmenu + " " + "py-2 m-3"} style={{ height: "97px", padding: "10px", borderLeft: "1px solid blue", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
                            <a href="/career-guidance-and-enhancement">
                              <h4 style={{ color: "black", fontSize: "1rem", fontWeight: "bold", marginBottom: "4px" }}>Career</h4>
                              <p>Route to career page.</p>
                            </a>
                          </div>
                          <div className={classes.hoverSubmenu + " " + "py-2 m-3"} style={{ height: "97px", padding: "10px", borderLeft: "1px solid blue", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
                            <a href="/contact-us">
                              <h4 style={{ color: "black", fontSize: "1rem", fontWeight: "bold", marginBottom: "4px" }}>Contact</h4>
                              <p>Contact us for more details.</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
             
            </li>

            <li
              // legacyBehavior={true}
              // activeClass="active"
              // href="/solutions"


              // smooth={true}
              duration={1000}

              className={
                classes.menuSol + " " +
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "pricing"
                  ? " text-orange-500 animation-active "
                  : " text-black-100 hover:text-orange-500 ")
              }
            >
              <div style={{ display: "flex", flexDirection: "row" }}><a href="/solutions"> Solutions </a> <FaAngleDown style={{ marginTop: "6px" }} /> </div>
              <div className={classes.submenuSol + " bg-light py-1 px-6 sm:px-1 md:px-10"} id="menu" >
                <div className="row">
                  <div className="col-3 py-3">
                    <img style={{ height: "120px", width: "100%" }} src="/assets/homepage/solutionsHeader.jpg" />
                    {/* <GrPersonalComputer  size={120} /> */}
                    <h4 style={{ fontWeight: "bold", fontSize: "1.3rem", color: "black", marginTop: "8px", marginBottom: "6px" }}>Solutions</h4>

                    <p> Digital solutions combining strategy, technology, automation and people.</p>
                    <button onClick={() => router.push("/solutions")} className={classes.bnt + " btn  text-orange-500 border-orange-500 my-4"} style={{ border: "1px solid", display: "flex", flexDirection: "row" }}>Explore  <AiOutlineArrowRight style={{ marginLeft: "4px", marginTop: "5px" }} /></button>
                  </div>
                  <div className="col-9">
                    <div className="row  p-4">
                      <div onClick={() => router.push("/managed-services-and-solutions")} className={classes.hoverSubmenu + " " + "py-2 m-3"} style={{ height: "95px", padding: "10px", borderLeft: "1px solid blue", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
                        <h4 style={{ color: "black", fontSize: "1rem", fontWeight: "bold", marginBottom: "4px" }}>Managed Services</h4>
                        <p>Services we offering.</p>

                      </div>

                      <div className={classes.hoverSubmenu + " " + "py-2 m-3"} style={{ height: "97px", padding: "10px", borderLeft: "1px solid blue", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
                        <span onClick={() => router.push("/technology-consulting")} >

                          <h4 style={{ color: "black", fontSize: "1rem", fontWeight: "bold", marginBottom: "4px" }}>Technology Consulting</h4>
                          <p>Technology Consulting Support.</p>
                        </span>
                      </div>
                      <div className={classes.hoverSubmenu + " " + "py-2 m-3"} style={{ height: "97px", padding: "10px", borderLeft: "1px solid blue", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
                        <span  onClick={() => router.push("/scholarnest-academy")} >

                          <h4 style={{ color: "black", fontSize: "1rem", fontWeight: "bold", marginBottom: "4px" }}>Academy</h4>
                          <p>  Self Paced, instructor-led and many more. </p>
                        </span>

                      </div>

                      <div className={classes.hoverSubmenu + " " + "py-2 m-3"} style={{ height: "97px", padding: "10px", borderLeft: "1px solid blue", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
                        <span onClick={() => router.push("/staff-augmentation")}>

                          <h4 style={{ color: "black", fontSize: "1rem", fontWeight: "bold", marginBottom: "4px" }}>Staff Augmentation</h4>
                          <p>Outsourcing strategy that is used to staff a project.</p>

                        </span>

                      </div>
                      <div className={classes.hoverSubmenu + " " + "py-2 m-3"} style={{ height: "97px", padding: "10px", borderLeft: "1px solid blue", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
                        <span  onClick={() => router.push("/career-guidance-and-enhancement")}>

                          <h4 style={{ color: "black", fontSize: "1rem", fontWeight: "bold", marginBottom: "4px" }}>Career Enhancement</h4>
                          <p>Job lists for other companies job seekers.</p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <a
              // legacyBehavior={true}
              // activeClass="active"
              href="/scholarnest-academy"
              // spy={true}
              // smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("academy");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === ""
                  ? " text-orange-500 animation-active "
                  : " text-black-100 hover:text-orange-500 ")
              }
            >
              Academy
            </a>

            <a
              // legacyBehavior={true}
              // activeClass="active"
              href="/career-guidance-and-enhancement"
              // onClick={() => window.open("/career", "_self").focus()}
              // spy={true}
              // smooth={true}
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
            </a>

            <a
              // activeClass="active"
              href="https://blog.scholarnest.com/"
              target="_blank"
              // spy={true}
              // smooth={true}
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
            </a>


          </ul>
          <div className="row justify-content-end pt-1 lg:hidden md:hidden">
            <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" style={{ zIndex: "6" }} width="25" height="25" fill="white" className="bi bi-list col-10  col-sm-6  mt-3" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </div>

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
              href="/scholarnest-academy"
              className={
                "px-2 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "pricing"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="w-6 h-6 bi bi-mortarboard" viewBox="0 0 16 16">
  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
</svg>


              Academy
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
      {isMenuOpen && (
        <div id="rightMenu" className={classes.rightMenu}>
          <ul>
            <li> <h3 onClick={() => { router.push("/scholarnest-academy") }}>Academy </h3></li>

            <li>
              <h3 onClick={() => { router.push("/managed-services-and-solutions") }}> Managed Services</h3></li>
            <li> <h3 onClick={() => { router.push("/technology-consulting") }}>Technology Consulting </h3></li>
            <li><h3 onClick={() => { router.push("/staff-augmentation") }}>Staff Augmentation </h3></li>
            <li><h3 onClick={() => { router.push("/career-guidance-and-enhancement") }}> Career Enhancement</h3></li>
          </ul>
        </div>
      )
      }
      {/* End Mobile Navigation */}


    </>
  );
};

export default Header;

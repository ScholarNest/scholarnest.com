import React from "react";
import classes from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className=" row p-lg-4 p-2 mx-1 justify-content-between text-white">
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
          <div class="d-flex">
          <img alt="logo" src="/assets/scholarnest-logo.jpg" />
          </div>
          <div className="d-flex p-2">
            
              <img style={{height:"20px",marginRight:"5px"}} alt="Email" src="/assets/mail.png" />
  
              <p>contact@scholarnest.com</p>
        
          </div>
          <div>
            <div className="d-flex ">
              <div className={classes.sociallogo}>
                <Link href="https://www.linkedin.com/company/ScholarNest/">
                  <img alt="Linkedin" src="/assets/linkedin.png" />
                </Link>
              </div>
              <div className={classes.sociallogo}>
                <Link href="https://www.facebook.com/ScholarNestTechnologies">
                  <img alt="Facebook" src="/assets/facebook.png" />
                </Link>
              </div>
              <div className={classes.sociallogo}>
                <Link href="https://twitter.com/ScholarNest">
                  <img alt="Tweeter" src="/assets/tweeter.png" />
                </Link>
              </div>
              <div className={classes.sociallogo}>
                <Link href="https://www.youtube.com/channel/UCQBys-g4SkBW0DGc6s80jHQ">
                  <img alt="youtube" src="/assets/youtube.png" />
                </Link>
              </div>
              <div className={classes.sociallogo}>
                <Link href="https://www.instagram.com/scholarnest/">
                  <img alt="Instagram" src="/assets/instagram.png" />
                </Link>
              </div>
              <div className={classes.sociallogo}>
                <Link href="https://github.com/ScholarNest">
                  <img alt="youtube" src="/assets/github.png" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3 p-3 col-lg-3 col-xl-3 col-xxl-3">
      
            <h4 style={{ fontFamily:"Arial,Helvetica,sans-serif",
    fontSize:"15px"}}>COMPANY</h4>
          
          <ul class={classes.footerLink}>
          <li><Link href="/company"> About Us</Link></li>
            <li><Link href="/scholarnest-academy">Academy</Link></li>

            <li><Link href="/contactUs">Contact</Link></li>
          </ul>
        </div>
        <div className="col-6 col-sm-4 p-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          
            <h4 style={{ fontFamily:"Arial,Helvetica,sans-serif",
    fontSize:"15px"}}>LINKS</h4>

          <ul class={classes.footerLink}>
            <li>Subscription</li>
            <li>Blog</li>
            <li>Teach</li>
            <li>Forum</li>
          </ul>
        </div>
        <div className="col-12 col-sm-4 col-md-6 p-3 col-lg-3 col-xl-3 col-xxl-3">
          <h4 style={{ fontFamily:"Arial,Helvetica,sans-serif",
    fontSize:"15px"}}>NEWS LETTER</h4>
          <div className={classes.form}>
            <input type="Email" placeholder="Your email here"></input>
          </div>
        </div>
  
      </div>

      <br />
      <div className={classes.contain}>
        <hr className={classes.hr} />
        <div className="row mx-1 py-3 text-center text-light">
        <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-md-6">
            <div className="row d-flex justify-content-between">
              <div className="col">Privacy</div>
              <div className="col">Terms</div>
              <div className="col">Sitemap</div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-lg-6 col-xl-6 col-md-6">
            <p>
              ©{new Date().getFullYear()} - ScholarNest Technologies Pvt. Ltd.
            </p>
          </div>
      
        </div>

      

      
      </div>
    </div>
  );
};

export default Footer;

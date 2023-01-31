import React from "react";
import LogoVPN from "../../public/assets/scholarnest-logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.contain}>
        <div className={classes.col1}>
          <div>
            <img alt="Site logo" src="/assets/scholarnest-logo.jpg" />
          </div>
          <div className={classes.mail}>
            <div className={classes.maillogo}>
              <img alt="Email" src="/assets/mail.png" />
            </div>
            <div className={classes.mailaddress}>
              <p>contact@scholarnest.com</p>
            </div>
          </div>
          <div>
            <div className={classes.social}>
              <div className={classes.sociallogo}>
                <img alt="Linkedin" src="/assets/linkedin.png" />
              </div>
              <div className={classes.sociallogo}>
                <img alt="facebook" src="/assets/facebook.png" />
              </div>
              <div className={classes.sociallogo}>
                <img alt="tweeter" src="/assets/tweeter.png" />
              </div>
              <div className={classes.sociallogo}>
                <img alt="youtube" src="/assets/youtube.png" />
              </div>
              <div className={classes.sociallogo}>
                <img alt="instagram" src="/assets/instagram.png" />
              </div>
              <div className={classes.sociallogo}>
                <img alt="github" src="/assets/github.png" />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.col2}>
          <div className={classes.colh1}>
            <h1>COMPANY</h1>
          </div>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Help & Support (FAQs)</li>
          </ul>
        </div>
        <div className={classes.col2}>
          <div className={classes.colh1}>
            <h1>LINKS</h1>
          </div>
          <ul>
            <li>Subscription</li>
            <li>Blog</li>
            <li>Teach</li>
            <li>Forum</li>
          </ul>
        </div>
        <div className={classes.col3}>
          <h1>NEWS LETTER</h1>
        </div>
        <div className={classes.clearfix}></div>
      </div>
      <div className={classes.contain}>
        <hr className={classes.hr} />
        <div className={classes.copyrightdiv}>
          <div className={classes.copyrightcol}>
            <p>
              ©{new Date().getFullYear()} - ScholarNest Technologies Pvt. Ltd.
            </p>
          </div>
          <div className={classes.copyrightcol}>
            <div className={classes.privacymenu}>
              <div className={classes.menuitem}>Privacy</div>
              <div className={classes.menuitem}>Terms</div>
              <div className={classes.menuitem}>Sitemap</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

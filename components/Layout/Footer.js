import React from "react";
import classes from "./Footer.module.css";
import Link from "next/link";

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
        <div className={classes.col2}>
          <div className={classes.colh1}>
            <h1>COMPANY</h1>
          </div>
          <ul>
            <li>About Us</li>
            <li>Academy</li>

            <li><Link href="http://localhost:3000/contactUs">Contact</Link></li>
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
          <div className={classes.form}>
            <input type="Email" placeholder="Your email here"></input>
          </div>
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

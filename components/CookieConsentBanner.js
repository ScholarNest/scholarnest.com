// components/CookieConsentBanner.js

import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import classes from "./style/cookieConsent.module.css";

const CookieConsentBanner = () => {
  const [consentGiven, setConsentGiven] = useState(true);
  useEffect(() => {
    setConsentGiven(Cookies.get('cookie_consent_scholarnest'));
  }, []); 
  const handleAccept = () => {
    Cookies.set('cookie_consent_scholarnest', 'true', { expires: 365 }); // Store consent for 1 year
    setConsentGiven(true);
  };

  const handleDecline = () => {
    // Handle declining consent (e.g., disabling certain cookies).
    // You can add custom logic here based on your website's needs.
    Cookies.set('cookie_consent_scholarnest', 'false', { expires: 365 }); // Store consent for 1 year

    setConsentGiven(true);
  };

  if (!consentGiven) {
    return (
      <div className={classes.cookieBanner }>
        <p>ScholarNest uses cookies and similar technologies to enhance site navigation, analyze site usage, and personalize content and ads, as further described in our Privacy Policy and Terms of Use. You agree to our Privacy Policy and Terms of Use by using our website. <a style={{textDecoration:"underline",color:"blue"}} href="/privacy"> Learn more.</a></p>
       
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleDecline}>Decline</button>
      </div>
    );
  }

  return null;
};

export default CookieConsentBanner;

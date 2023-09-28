// components/CookieConsentBanner.js

import React, { useState } from 'react';
import Cookies from 'js-cookie';
import classes from "./style/cookieConsent.module.css";

const CookieConsentBanner = () => {
  const [consentGiven, setConsentGiven] = useState(Cookies.get('cookie_consent_scholarnest'));

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
        <p>This website uses cookies to improve user experience.</p>
       
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleDecline}>Decline</button>
      </div>
    );
  }

  return null;
};

export default CookieConsentBanner;

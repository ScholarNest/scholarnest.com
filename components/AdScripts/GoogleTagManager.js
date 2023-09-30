import React, { useEffect } from 'react';

function GoogleTagManager() {
  useEffect(() => {
    // Google Tag Manager script
    (function(w,d,s,l,i){
      w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),
      dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;
      j.src='https://www.googletagmanager.com/gtag/js?id=AW-11297726799';
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','AW-11297726799');
  }, []);

  return null; // This component doesn't render anything
}

export default GoogleTagManager;

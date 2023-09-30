import React, { useEffect } from 'react';

function LinkedInAds() {
  useEffect(() => {
    // LinkedIn Ads script
   var _linkedin_partner_id = "5721937";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);

    // Load the LinkedIn Insight script
    (function(l) {
      if (!l) {
        window.lintrk = function(a, b) {
          window.lintrk.q.push([a, b]);
        };
        window.lintrk.q = [];
      }
      var s = document.getElementsByTagName("script")[0];
      var b = document.createElement("script");
      b.type = "text/javascript";
      b.async = true;
      b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
      s.parentNode.insertBefore(b, s);
    })(window.lintrk);
  }, []);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        alt=""
        src="https://px.ads.linkedin.com/collect/?pid=5721937&fmt=gif"
      />
    </noscript>
  );
}

export default LinkedInAds;

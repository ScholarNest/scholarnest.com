import "../styles/tailwind.css";
import "../styles/slick.css";
import Head from "next/head";
import CookieConsentBanner from "../components/CookieConsentBanner";
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [trackingLoaded, setTrackingLoaded] = useState(false);
  const [error, setError] = useState(false);

  function linkedin_Pixel() {
    _linkedin_partner_id = "5721937";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);

    (function (l) {
      if (!l) {
        window.lintrk = function (a, b) { window.lintrk.q.push([a, b]) };
        window.lintrk.q = []
      }
      var s = document.getElementsByTagName("script")[0];
      var b = document.createElement("script");
      b.type = "text/javascript"; b.async = true;
      b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
      s.parentNode.insertBefore(b, s);
    })(window.lintrk);
    b.addEventListener('load', () => {
      setTrackingLoaded(true);
    });
    b.addEventListener('error', () => {
      setError(true);
    });
  }
  function facebook_Pixel() {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '245984454935126');
    fbq('track', 'PageView');

  }
  // useEffect(() => {
  //   linkedin_Pixel();
  //   facebook_Pixel();

    
  // }, []);
  return (
    <>
      <CookieConsentBanner />
      <Head>
        <link
          key="carousel-styles"
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/react-responsive-carousel/lib/styles/carousel.min.css"
        />
      </Head>
      <Component {...pageProps} />

    </>
  );
}

export default MyApp;

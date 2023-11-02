import React , { useEffect } from 'react'

const GoogleTagManagerAll = () => {
    useEffect(() => {
        // Start Google Tag Manager
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'gtm.start': new Date().getTime(),
          event: 'gtm.js'
        });
    
        // Create and append the GTM script tag
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-PVPKPSDT';
        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    
        // Create and append the GTM noscript iframe
        const noscript = document.createElement('noscript');
        const iframe = document.createElement('iframe');
        iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-PVPKPSDT';
        iframe.height = '0';
        iframe.width = '0';
        iframe.style.display = 'none';
        iframe.style.visibility = 'hidden';
        noscript.appendChild(iframe);
        firstScript.parentNode.insertBefore(noscript, firstScript);
    
        // Cleanup on component unmount (if needed)
        return () => {
          // Remove the script and noscript elements
          script.parentNode.removeChild(script);
          noscript.parentNode.removeChild(noscript);
        };
      }, []);
    
      return null; // This component doesn't render anything
        
}

export default GoogleTagManagerAll
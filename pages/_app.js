import "../styles/tailwind.css";
import "../styles/slick.css";


function MyApp({ Component, pageProps }) {
  <Head>
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/npm/react-responsive-carousel/lib/styles/carousel.min.css"
  />
</Head>
  return <Component {...pageProps} />;
}

export default MyApp;

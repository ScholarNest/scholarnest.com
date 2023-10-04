import React from 'react'
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import CourseFaq from "../components/CourseFaq";
import SeoHead from '../components/SeoHead';
import CookieConsentBanner from "../components/CookieConsentBanner";

const courseFaqs = () => {
    return (
        <>
            <SeoHead title='Course FAQ - Frequently Asked Questions About Our Courses'  description='Explore our course FAQ page to find answers to common queries about our courses. Get the information you need to make informed decisions about your learning journey with ScholarNest.' />
            <CookieConsentBanner />
            <Header />
            <CourseFaq />
            <Footer />
        </>
    )
}
export default courseFaqs;
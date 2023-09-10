import React, {useMemo} from 'react'
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";import classes from "./style/courseFaq.module.css";
 const CourseFaq = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    const router = useRouter();

  const indFaqs=[
    {
    id:"faq1",
    ques:"Do I get lifetime access to the course?",
    ans:"No. You will have access to the course content for 1 year."
    },
    {
    id:"faq2",
    ques:"Do you have a trial period?",
    ans:"Yes. We do have a 7-day trial period for your course purchases. If you do not like the course and have not completed more than 30% of the course, you can ask for a 100% refund within 7-days of purchase."
    },
    {
    id:"faq3",
    ques:"Do you have a refund policy?",
    ans:"Yes. We have a 100% refund policy for 7 days. If you do not like the course and have not completed more than 30% of the course, you can ask for a 100% refund within 7-days of purchase."
    },
    {
    id:"faq4",
    ques:"How to refund a course?",
    ans:"If you do not like the course and have not completed more than 30% of the course, you can ask for a 100% refund within 7-days of your purchase. Please write an email to support@scholarnest.com for the refund request and clearly explain the reason for the refund. Our team will get in touch with you to understand your concerns and process the refund."
    },
    {
    id:"faq5",
    ques:"How many times can I watch the course?",
    ans:"You will have access to the course for 1 year. You can take the course an unlimited number of times in the 1-year duration"
    },
    {
    id:"faq6",
    ques:"I do not have a credit card. Do you accept offline payments?",
    ans:"We accept and process offline purchases in some instances if you do not have a credit card or are hesitant to purchase online. Please write an email to sales@scholarnest.com for offline purchase requests."
    },
    {
    id:"faq7",
    ques:"Can I download the course for offline viewing?",
    ans:"No. We do not have a download feature."
    },
    {
    id:"faq8",
    ques:"How do I delete my personal data?",
    ans:"Please drop an email to privacy@scholarnest.com requesting us to delete your account and all your details. We will delete your account and all your details and send confirmation via email. However, please note, once your details and account are deleted, you will lose access to the platform and its content. Even if you have an active subscription, you won't have access to the platform and courses. We cannot recover deleted accounts and do not refund any payments made. So make sure you understand the implications of deleting your account and send us a request accordingly."
    },
    {
    id:"faq9",
    ques:"How do I reset my password?",
    ans:"If you already remember your current password and want to change it. Login to your account and visit the profile page to change your current password. If you forgot your password, you could click the lost your password link on the login page, and we will send you a password reset link to your registered email address. You can also drop an email to support@scholarnest.com for any other assistance."
    },
    {
    id:"faq10",
    ques:"How do I change my email address?",
    ans:"You can change your email address and other details, such as your display name and social media links from the profile page. Login to your account and visit the profile page to change these details."
    }
    ]
  const subPlan=[
    {
    id:"sfaq1",
    ques:"Do you have a free trial?",
    ans:"Yes. We have a 7-day free trial. You can subscribe to any plan and get instant free access for 7 days."
    },
    {
    id:"sfaq2",
    ques:"I want to sign up for a 7-day free trial. Will I be charged?",
    ans:"No. We will not charge you anything for the free trial. We will charge the subscription fee on the last day of your free trial. However, you can cancel at least one day before your free trial expires, and we will not charge you."
    },
    {
    id:"sfaq3",
    ques:"When will I be charged?",
    ans:"Your 7-day free trial is free. We will charge at the end of the last day of your free trial."
    },
    {
    id:"sfaq4",
    ques:"Can I cancel anytime?",
    ans:"Yes. You can cancel at least one day before your billing date, and we will stop charging you for the upcoming payments."
    },
    {
    id:"sfaq5",
    ques:"How does cancelation work?",
    ans:"You can cancel your subscription at least one day before your next billing date. Once canceled, we will stop further charges, and your subscription expires on your next billing date. However, you will still have access to the content for your current billing period."
    },
    {
    id:"sfaq6",
    ques:"I do not have a credit card. Do you accept offline payments?",
    ans:"We accept and process offline purchases in some instances if you do not have a credit card or are hesitant to purchase online. Please write an email to sales@scholarnest.com for offline purchase requests."
    },
    {
    id:"sfaq7",
    ques:"Do you have a refund policy for subscriptions?",
    ans:"No. We do not have any refund policy. You can subscribe to 7 days free trial, and we do not charge you anything for the free trial. We charge you only on the expiration of your free trial. You can cancel your subscription and stop further payments. However, previous payments already made are not refundable."
    },
    {
    id:"sfaq8",
    ques:"Can I switch between plans?",
    ans:"Yes. You must cancel your current plan and subscribe to a new plan. For example, you can cancel your monthly plan and continue accessing content until the next billing cycle. At the end of the current billing cycle, you can subscribe to an annual plan. Similarly, you can cancel your annual plan and subscribe to a monthly plan only after your annual plan ends."
    },
    {
    id:"sfaq9",
    ques:"Can I download the course for offline viewing?",
    ans:"No. We do not have a download feature."
    },
    {
    id:"sfaq10",
    ques:"What's included in my subscription?",
    ans:'All subscription plans are unlimited, and you will get access to all the self-learning videos, quizzes, practice tests, completion certificates, and discussion forums. However, subscription plans do not include the following. 1) Instructor-only courses:  We do have some instructor-only courses to help our instructors to improve their content creation skills. These courses are available only for ScholarNest instructors. If you need access to those courses, you can apply to become an instructor. However, becoming a ScholarNest instructor is subject to qualification and approval. 2) Instructor-led courses: We may have some instructor-led courses delivered directly by instructors during live sessions. Our subscription plans do not include access to instructor lead courses.  3) Services: We may have additional services such as one-to-one mentorship, resume review, mock interviews, interview preparation, placement, etc. Our subscription plans do not include access to any of such services.'
    }
    ]
  return (
   <>
  
   <div className={classes.tagdiv+" mx-5 my-1 "}>
    <p class="mb-1">Home  &gt;&gt; FAQs</p>

    <hr />
   </div>
   <br />
   <br />
   <div class={classes.mainHeadDiv+" fw-bold text-center"}>
   <h1 class={classes.mainHead+" my-2"}>FREQUENTLY ASKED QUESTIONS</h1>
   <p>How can we help you?</p>
   <br />
   <hr class="mx-auto w-10 fw-bold " style={{opacity:"1"}} />
   </div>
   <div class="my-2 container">
    <div className="row mx-0">
        <div className="col-md-6 col-12 ">
            <h2 class={classes.headingTag}>Individual Course</h2>
            <hr class="mx-auto w-10 fw-bold " style={{opacity:"1"}} />
            <br />
            {
          indFaqs.map((quest) => {
            function openSolution(ques_id) {
              const elem = document.getElementById(ques_id)
              if (elem.style.display === "none") {
                elem.style.display = "flex";
              } else {
                elem.style.display = "none";
              }
            }
            return (
              <div class="my-2 border" >
                <div style={{ cursor: "pointer" }} onClick={() => { openSolution(quest.id) }} className="row rounded mx-auto  p-3 w-100 justify-content-between question">
                  <h3 class={classes.h3style + " col-10 d-flex"}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi me-2 bi-cursor" viewBox="0 0 16 16">
                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z" />
                  </svg> {quest.ques}</h3>
                  <a class="col-1  text-end" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi align-self-end bi-caret-down-fill" viewBox="0 0 16 16">
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </a>
                </div>
                <div  style={{display:"none"}}  class={classes.Faqs + " p-3 border-top w-100 mx-auto"} id={quest.id}>
                  <p>{quest.ans} </p>
                </div>
              </div>
            )
          })
        }
        </div>
        <div className="col-md-6 col-12">
            <h2 class={classes.headingTag}> Subscription Plans</h2>
            <hr class="mx-auto w-10 fw-bold " style={{opacity:"1"}} />
<br />
{
          subPlan.map((quest) => {
            function openSolution(ques_id) {
              const elem = document.getElementById(ques_id)
              if (elem.style.display === "none") {
                elem.style.display = "flex";
              } else {
                elem.style.display = "none";
              }
            }
            return (
              <div class="my-2 border" >
                <div style={{ cursor: "pointer" }} onClick={() => { openSolution(quest.id) }} className="row rounded mx-auto  p-3 w-100 justify-content-between question">
                  <h3 class={classes.h3style + " col-10 d-flex"}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi me-2 bi-cursor" viewBox="0 0 16 16">
                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z" />
                  </svg> {quest.ques}</h3>
                  <a class="col-1  text-end" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi align-self-end bi-caret-down-fill" viewBox="0 0 16 16">
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </a>
                </div>
                <div  style={{display:"none"}}  class={classes.Faqs + " p-3 w-100 border-top mx-auto"} id={quest.id}>
                 
                  <p >{quest.ans} </p>
                </div>
              </div>
            )
          })
        }
        </div>
    </div>

   </div>
   <br />
   <hr />
<br />
   <ScrollAnimationWrapper className="w-full">
        <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
          <div style={{ backgroundColor: "rgb(251 251 249)" }} className={classes.letsConnect + " rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500"}>
            <div className="flex flex-col  w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
              <h2 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
              Didn’t find the answer?
              </h2>
              <p>Send your query to us.</p>
            </div>
            <button className={
              "py-2 lg:py-4 px-8 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none"} onClick={() => router.push("/contactUs")}> <p class="text-white-500"> Get Started </p> </button>
          </div>
     
        </motion.div>
      </ScrollAnimationWrapper>
      <br />
      <br />
   </>
  )
}
export default CourseFaq;

import React, { useState } from "react";

export default function Careers() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   const [form, setForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(fullname, email, subject, message);
  };
  return (
    <main>
        
        {/* section 1 */}
        <div class="p-8 gap-4 pt-10 lg:px-40 bg-blue-50 dark:bg-blue-900 ">
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8 pt-10">
            <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">Rockstars wanted!</h1>
            <h4 class="font-small leading-tight text-1xl mt-0 mb-2 text-blue-600">
            We at ScholarNest are always on lookout for a great talent to include in our team, who can become a part of our growth story. Please find below the list of available positions and submit your application if they interest you.
            </h4>
        </div>
        </div>

        {/* section 2 */}
        <div class="p-4 gap-2 pt-1 lg:px-40 bg-blue-50 dark:bg-blue-900 ">
        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1 lg:gap-1 pt-10">
        {/* iframe */}
        <div class="p-4 bg-cyan-400 rounded-md flex items-center justify-center">
            <div class="aspect-w-16 aspect-h-9">
            <iframe width="540" height="304" src="https://www.youtube.com/embed/w0RGnXpf9LU" title="videohive" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            </div>
        </div>
        {/* video right section */}
        <div class="p-1 pl-10 bg-blue-50 dark:bg-blue-900 ">

            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8 ">
                <h1 class="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">Benefits and rewards</h1>
                <ul class="list-disc pl-12">
                <li>We recognize individual and team performance with a host of Awards time to time.</li>
                <li>We encourage employees to explore their full potential and be motivated to be a team player and take up as much responsibility as they are willing and capable of.</li>
                <li>We love employees coming forward with new ideas, innovations.</li>
                <li>An employee being proactive, not only helps company & customers but also sets example to fellow colleagues and give recognition.</li>
                </ul>
            </div>
        </div>

        </div>
        </div>
        
        {/* section 3 */}
        <div class="p-8 gap-4 pt-10 lg:px-40 bg-blue-50 dark:bg-blue-900 ">
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8 pt-10">
            <h1 class="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600">job opportunities with us</h1>
            <h4 class="font-small leading-tight text-1xl mt-0 mb-2 text-blue-600">
            Table here
            </h4>
        </div>
        </div>
        
         {/* section 4*/}
         
         <div class="gap-2 pt-1 lg:px-40 bg-blue-50 dark:bg-blue-900 ">
         <h1 class="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600">internship opportunities</h1>

        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1 lg:gap-1">
        {/* iframe */}
        <div class="p-4 bg-cyan-400 rounded-md h-400 flex items-center justify-center">
            <img src="https://www.irisidea.com/wp-content/uploads/2022/12/interhsip-irisidea-1024x384.jpg" alt="..." />
        </div>
        {/* image right section */}
        <div class="p-1 pl-10 bg-blue-50 dark:bg-blue-900 ">

            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8 ">
                <h1 class="pt-4 font-small leading-tight text-1xl mt-0 mb-2 text-blue-600">
                Are you a fresh graduate or still into your college and preparing for the demanding corporate career that lies ahead?
                </h1>
                <h1 class="pt-4 font-small leading-tight text-1xl mt-0 mb-2 text-blue-600">
                Or, do you already have some prior working experience, but coming back from a long career break due to personal reasons and want to restart the career? 
                </h1>
                <h1 class="pt-4 font-small leading-tight text-1xl mt-0 mb-2 text-blue-600">
                You may apply for internship with us and kick-start your career journey.
                </h1>
                
            </div>
        </div>

        </div>
        </div>
        
    </main>
  );
}

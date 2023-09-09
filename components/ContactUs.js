import React, { useState } from "react";

export default function ContactUs() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setMessage] = useState("");
  const [companyname, setCompanyname] = useState("");

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
          companyname:companyname,
          fullname: fullname,
          phone: phone,
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
        setphone("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setphone("");
    }
    console.log(fullname, email, phone, message);
  };
  return (
    <>
    <main>
      <header className="p-6 mb-4 grid grid-cols-1 md:grid-cols-2 gap-4  lg:px-40 bg-blue-50 dark:bg-blue-900 md:h-96">
        <div className="mx-auto mb-5 mt-5">
          <div className="badge bg-green-500 inline-block rounded-xl">
            {/* <p className="font-light text-base px-4 py-1 text-white-500">
            Let's get in touch
            </p> */}
          </div>
          <h1 className="text-4xl font-bold  mt-md-2 mt-4 dark:text-gray-50 text-gray-700">
            Let's get in touch
          </h1>
          <p className="text-sm text-gray-700 mt-4 font-light dark:text-gray-200">
            ScholarNest Contact information
          </p>
          <h1 className="text-2xl font-bold mt-4 dark:text-gray-50 text-gray-700">
            Partnership & Sales:
          </h1>
          <p className="text-sm text-gray-700 mt-4 font-light dark:text-gray-200">
            Want to find out how we can help your team to get skilled or
            interested in partnering with ScholarNest?
          </p>
          <p className="text-sm text-gray-700 mt-4 font-light dark:text-gray-200">
            Let’s talk! To get in touch.
          </p>
          <p className="text-sm text-gray-700 mt-4 font-light dark:text-gray-200">
            sales@scholarnest.com
          </p>
          <h1 className="text-2xl font-bold mt-4 dark:text-gray-50 text-gray-700">
            Become an Instructor:
          </h1>
          <p className="text-sm text-gray-700 mt-4 font-light dark:text-gray-200">
            Do you want to work with us as an instructor, create and sell
            courses at ScholarNest?{" "}
          </p>
          <p className="text-sm text-gray-700 mt-4 font-light dark:text-gray-200">
            Welcome! To get in touch.
          </p>
          <p className="text-sm text-gray-700 mt-4 font-light dark:text-gray-200">
            teach@scholarnest.com
          </p>
          <h1 className="text-2xl font-bold mt-4 dark:text-gray-50 text-gray-700">
            Support:
          </h1>
          <p className="text-sm text-gray-700 mt-4 font-light dark:text-gray-200">
            Do you want to submit a correction or have any other concerns? Write
            to us in the following emails
          </p>
          <p className="text-sm text-gray-700 mt-2 font-light dark:text-gray-200">
            support@scholarnest.com
          </p>
          <p className="text-sm text-blue-700  font-light dark:text-gray-200">
            privacy@scholarnest.com
          </p>
         
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-xl flex flex-col px-8 py-20 bg-white dark:bg-green-500"
        >
          <h1 className="text-2xl font-bold dark:text-gray-50">
            Send a message
          </h1>

          <label
            htmlFor="fullname"
            className="font-light mt-8 dark:text-gray-50"
          >
            Full name<span className="text-danger fw-bold dark:text-gray-50">*</span>
          </label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            placeholder="Test"
            name="fullname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-yellow-500 "
          />
          {errors?.fullname && (
            <p className="text-red-500">Fullname cannot be empty.</p>
          )}

          <label
            htmlFor="email"
            className=" font-light mt-4 dark:text-gray-50"
          >
            E-mail<span className="text-danger fw-bold dark:text-gray-50">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="test@gmail.com"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-yellow-500  "
          />
          {errors?.email && (
            <p className="text-red-500">Email cannot be empty.</p>
          )}

          <label
            htmlFor="phone"
            className="font-light mt-4 dark:text-gray-50"
          >
            phone
          </label>
          <input
            type="text"
            name="phone"
            value={phone}
            placeholder="+91 9372XXXXXX"
            onChange={(e) => {
              setphone(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-yellow-500  "
          />
          {errors?.phone && (
            <p className="text-red-500">phone cannot be empty.</p>
          )}
          <label
            htmlFor="message"
            className="font-light mt-4 dark:text-gray-50"
          >
            Message<span className="text-danger fw-bold dark:text-gray-50">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Type your message"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-yellow-500  "
          ></textarea>
          {errors?.message && (
            <p className="text-red-500">Message body cannot be empty.</p>
          )}
          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-10 mt-8 py-2 bg-yellow-500 text-white-500 font-light rounded-md text-lg flex flex-row items-center"
            >
              {buttonText}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-cyan-500 ml-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                Thankyou! Your Message has been delivered.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
        </form>
    
      </header>
      
    </main>
    <br />
    <br />
    <br />
    <br />
    </>
  );
}

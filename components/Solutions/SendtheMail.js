import React,{useState, useEffect} from 'react'
import classes from "../style/solutions.module.css";

const SendtheMail = () => {

    const [fullname, setFullname] = useState("");
    const [companyname, setCompanyname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setphone] = useState("");
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
      if (companyname.length <= 0) {
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
  
    //Hiding image in mobile view
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      let isValidForm = handleValidation();
  
      if (isValidForm) {
        setButtonText("Sending");
        const res = await fetch("/api/sendgrid", {
          body: JSON.stringify({
            email: email,
            fullname: fullname,
            companyname:companyname,
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
          setCompanyname("");
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
        setCompanyname("");
        setEmail("");
        setMessage("");
        setphone("");
      }
      console.log(fullname, email, phone, message);
    };
  

  return (
    <form
    onSubmit={handleSubmit}
    className="rounded-lg shadow-xl p-6 bg-white dark:bg-green-500"
  >
    <h2 className="text-2xl mb-4">
      Send your staffing requirements
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="md:col-span-1">
        <label htmlFor="companyname" className="text-gray-600 dark:text-gray-50">
          Company name
          <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={companyname}
          onChange={(e) => {
            setCompanyname(e.target.value);
          }}
          name="companyname"
          className="w-full bg-transparent border-b py-2 p-1 focus:outline-none focus:ring-2 ring-yellow-500"
          required
        />
        {errors?.fullname && (
          <p className="text-red-500 font-bold mt-2">Company name cannot be empty.</p>
        )}
      </div>
      <div className="md:col-span-1">
        <label htmlFor="fullname" className="text-gray-600 dark:text-gray-50">
          Full name
          <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={fullname}
          onChange={(e) => {
            setFullname(e.target.value);
          }}
          name="fullname"
          className="w-full bg-transparent border-b py-2 p-1 focus:outline-none focus:ring-2 ring-yellow-500"
          required
        />
        {errors?.fullname && (
          <p className="text-red-500 font-bold mt-2">Full name cannot be empty.</p>
        )}
      </div>
      <div className="md:col-span-1">
        <label htmlFor="email" className="text-gray-600 dark:text-gray-50">
          E-mail
          <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="w-full bg-transparent border-b py-2 p-1 focus:outline-none focus:ring-2 ring-yellow-500"
          required
        />
        {errors?.email && (
          <p className="text-red-500 font-bold mt-2">Email cannot be empty.</p>
        )}
      </div>
      <div className="md:col-span-1">
        <label htmlFor="phone" className="text-gray-600 dark:text-gray-50">
          Phone
        </label>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => {
            setphone(e.target.value);
          }}
          className="w-full bg-transparent border-b py-2 p-1 focus:outline-none focus:ring-2 ring-yellow-500"
        />
        {errors?.phone && (
          <p className="text-red-500 font-bold mt-2">Phone cannot be empty.</p>
        )}
      </div>
      <div className="md:col-span-2">
        <label htmlFor="message" className="text-gray-600 dark:text-gray-50">
          Message
          <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="w-full bg-transparent border-b py-2 p-1 focus:outline-none focus:ring-2 ring-yellow-500"
          required
        ></textarea>
        {errors?.message && (
          <p className="text-red-500 font-bold mt-2">Message body cannot be empty.</p>
        )}
      </div>
    </div>
    <div className="mt-4">
      <button
        type="submit"
        className="px-4 py-2 bg-yellow-500 text-white font-light rounded-md text-lg flex items-center"
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
    <div className="mt-4">
      {showSuccessMessage && (
        <p className="text-green-500 font-semibold text-sm">
          Thank you! Your message has been delivered.
        </p>
      )}
      {showFailureMessage && (
        <p className="text-red-500">
          Oops! Something went wrong, please try again.
        </p>
      )}
    </div>
  </form>
  
  
  
  )
}
 export default SendtheMail;
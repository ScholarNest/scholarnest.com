import { useRouter } from "next/router";
import React from "react";
import classes from "../style/responsive.module.css";

const ButtonPrimary = ({ children, addClass }) => {
  const router = useRouter();
  const redirect = () => {
    router.push("/solutions");
  };

  return (
    <button
    onClick={redirect}
  
      className={
          classes.bannerButton +
        " py-2 lg:py-4 px-8 lg:px-16  text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;

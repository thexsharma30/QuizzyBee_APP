import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../logo.gif";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";

const Landing = () => {
  const [isShowing, setIsShowing] = useState(true);
  const navigate = useNavigate();

  setTimeout(() => {
    setIsShowing(false);
  }, 4000);

  if (isShowing) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h1 className="inline-flex overflow-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform text-white bold text-4xl sm:text-6xl lg:text-8xl">
          Welcome to QuizzyBee
          <span className="box-border inline-block w-1 lg:w-2 h-10 sm:h-16 lg:h-24 bg-white animate-cursor will-change-transform"></span>
        </h1>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <img src={logo} className="rounded-full" alt="logo" />
      {/* <p className="text-white text-2xl mt-2">
        Test your technical skills with Quizfy
      </p> */}

      <div className="mt-16 flex">
        <div className="mx-2">
          <button
            onClick={() => navigate("/login")}
            className="relative inline-flex items-center justify-center h-auto px-4 py-1 overflow-hidden btn-txt text-slate-800 transition duration-300 ease-out border-2 border-slate-800 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white text-2xl duration-300 -translate-x-full bg-slate-800 group-hover:translate-x-0 ease">
              <AiOutlineLogin />
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-slate-800 transition-all duration-300 transform group-hover:translate-x-full ease">
              Login
            </span>
            <span className="relative invisible">Button Text</span>
          </button>
        </div>
        <div className="mx-2">
          <button
            onClick={() => navigate("/signup")}
            class="relative inline-flex items-center justify-center h-auto px-4 py-1 overflow-hidden btn-txt text-slate-800 transition duration-300 ease-out border-2 border-slate-800 rounded-full shadow-md group"
          >
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white text-2xl duration-300 -translate-x-full bg-slate-800 group-hover:translate-x-0 ease">
              <AiOutlinePlusCircle />
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-slate-800 transition-all duration-300 transform group-hover:translate-x-full ease">
              Sign in
            </span>
            <span class="relative invisible">Button Text</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;

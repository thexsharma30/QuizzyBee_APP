import React, { useState } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Cards from "./Ui/Cards";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  //signup
  const signupUser = async (e) => {
    e.preventDefault();

    const promise = account.create(
      uuidv4(),
      user.email,
      user.password,
      user.name
    );

    promise.then(
      function (response) {
        console.log(response);
        navigate("/login"); // where we want to redriect
      },
      function (error) {
        console.log(error);
      }
    );
  };

  return (
    <div className="flex w-screen h-screen place-content-center items-center">
      <Cards className="w-auto h-auto">
        <div className="text-l text-center font-bold pb-4 text-slate-800">
          Sign in
        </div>
        <form className="pl-6 pr-6 flex flex-col" action="#" method="POST">
          {/* Name */}
          <label htmlFor="name" className="pb-1 text-slate-800">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="border-2 border-slate-800 w-60 sm:w-96 rounded-2xl pt-1 pb-1 pr-2 pl-2"
            onChange={(e) => {
              setUser({
                ...user,
                name: e.target.value,
              });
            }}
          />
          {/* Email */}
          <label htmlFor="email" className="pt-6 text-slate-800">
            Email
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="border-2 border-slate-800 w-60 sm:w-96 rounded-2xl pt-1 pb-1 pr-2 pl-2"
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
          />
          {/* Password */}
          <label htmlFor="password" className="pt-6 text-slate-800">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="border-2 border-slate-800 w-60 sm:w-96 rounded-2xl pt-1 pb-1 pr-2 pl-2"
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
          />
          {/* Signin option */}
          <div className="flex place-content-center items-center pt-6 pb-2">
            <a
              href="/login"
              className="font-medium text-center text-gray-500 hover:text-indigo-300"
            >
              Have an account, Login
            </a>
          </div>
          {/* Button */}
          <div>
            <button
              onClick={signupUser}
              class="relative inline-flex items-center justify-center w-60 sm:w-96 h-auto px-4 py-1 overflow-hidden text-lg sm:text-[1.2rem] bold text-slate-800 transition duration-300 ease-out border-2 border-slate-800 rounded-full shadow-md group"
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
        </form>

        <div className="mt-6 mb-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-800">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <div>
              <a
                href="/"
                className="w-full inline-flex justify-center py-2 px-4 text-3xl font-medium text-slate-800 hover:bg-gray-50"
              >
                <BsFacebook />
              </a>
            </div>

            <div>
              <a
                href="/"
                className="w-full inline-flex justify-center py-2 px-4 text-3xl font-medium text-slate-800 hover:bg-gray-50"
              >
                <BsTwitter />
              </a>
            </div>

            <div>
              <a
                href="/"
                className="w-full inline-flex justify-center py-2 px-4 text-3xl font-medium text-slate-800 hover:bg-gray-50"
              >
                <BsGithub />
              </a>
            </div>
          </div>
        </div>
      </Cards>
    </div>
  );
};

export default Signup;

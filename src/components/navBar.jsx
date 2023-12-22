import React, { useState, useEffect } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";
import logo from "../logo.gif";
import { AiOutlineLogout } from "react-icons/ai";
const NavBar = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        setUserDetails(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  // Capital letter
  const capitalizeFirstLetter = (name) => {
    return name[0].toUpperCase() + name.slice(1);
  };

  //logout button
  const logoutUser = async () => {
    try {
      await account.deleteSession("current"); // current session is deleted now
      navigate("/login"); // where we want to redriect
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {userDetails && (
        <div>
          <div className="nav min-h-min max-w-7xl mx-auto flex justify-between text-center pt-4 pb-8 px-4">
            <div className="w-[3.5rem]">
              <img src={logo} alt="logo" className="rounded-full" />
            </div>
            <div className="hidden sm:flex z-[-1] justify-between text-center place-content-center w-56 sm:w-auto bg-orange-500 px-4 rounded-full border-4">
              <h1 className="text-lg sm:text-[1.5rem] bold text-gray-100 flex  place-content-center items-center">
                Hello <br className="block md:hidden" />
                <span className="inline-flex overflow-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
                  , {capitalizeFirstLetter(userDetails.name)}👋
                </span>
                <span className="box-border inline-block w-1 h-8 bg-white animate-cursor will-change-transform"></span>
              </h1>
            </div>
            <div className="flex items-center place-content-center">
              <button
                onClick={logoutUser}
                className="relative inline-flex items-center justify-center px-1 sm:px-2 py-1 overflow-hidden text-lg sm:[1.25rem] bold text-slate-800 transition duration-300 ease-out border-2 border-slate-800 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white text-2xl duration-300 -translate-x-full bg-slate-800 group-hover:translate-x-0 ease">
                  <AiOutlineLogout />
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-slate-800 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Logout
                </span>
                <span className="relative invisible">Button Text</span>
              </button>
            </div>
          </div>
          <div className="flex sm:hidden text-center justify-center place-content-center items-center">
            <div className="w-56 sm:w-auto bg-orange-500 px-4 rounded-full border-2">
              <h1 className="text-lg sm:text-[1.5rem] bold text-gray-100 flex  place-content-center items-center">
                Hello <br className="block md:hidden" />
                <span className="inline-flex overflow-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
                  , {capitalizeFirstLetter(userDetails.name)}👋
                </span>
                <span className="box-border inline-block w-[2px] h-6 bg-white animate-cursor will-change-transform"></span>
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;

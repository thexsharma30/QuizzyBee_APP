import React, { useState, useEffect } from "react";
import NavBar from "./navBar";
import Course from "./SetupQuiz";
import { getQuestionsData } from "../Api/index";

const Quiz = () => {
  // console.log("hello");
  // useEffect(() => {
  //   console.log( getQuestionsData()
  //     .then(data => console.log(data))
  //     .catch(error => console.error(error)));
  // }, [])

  return (
    <>
      <NavBar />
      <Course />
    </>
  );
};

export default Quiz;

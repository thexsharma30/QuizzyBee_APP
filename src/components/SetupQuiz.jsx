import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Ui/Cards.jsx";
import { useParams } from "react-router-dom";
import { VscDebugStart } from "react-icons/vsc";

const SetupQuiz = ({ setFilters }) => {
  const tech = useParams();
  // console.log(typeof(tech.name));
  const [questionsAmount, setQuestionsAmount] = useState(0);
  const [questionsLevel, setQuestionsLevel] = useState("easy"); // ["easy", "medium", "hard"
  const navigate = useNavigate();
  // useEffect(() => {
  //   console.log("1 : ", typeof(questionsAmount));
  //   console.log("2 ",typeof(questionsLevel));
  // },[questionsAmount,questionsLevel]);
  const fromSubmitHandler = (event) => {
    event.preventDefault();
    setFilters({
      noOfQuestions: questionsAmount,
      category: tech.name,
      difficulty: questionsLevel,
    });
    navigate("/questions");
  };
  return (
    <div className="flex w-screen place-content-center items-center pt-40">
      <Card className="w-72 sm:w-auto h-auto">
        <h1 className="text-l text-center font-bold pb-4 text-slate-800">
          Setup Quizz
        </h1>
        <form onSubmit={fromSubmitHandler} className="pl-6 pr-6 flex flex-col">
          <label className="pb-1 text-slate-800">Number of questions</label>

          <input
            type="number"
            max={50}
            min={1}
            className="border-2 border-slate-800 w-60 sm:w-96 rounded-2xl pt-1 pb-1 pr-2 pl-2"
            onChange={(e) => setQuestionsAmount(e.target.value)}
          />
          <label className="pt-6 text-slate-800">Select Difficulty</label>
          <select
            onChange={(e) => setQuestionsLevel(e.target.value)}
            className="border-2 border-slate-800 w-60 sm:w-96 rounded-2xl pt-1 pb-1 pr-2 pl-2"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <div className="pt-16 pb-8">
            <button
              type="submit"
              className="relative inline-flex items-center justify-center w-60 sm:w-96 h-auto px-4 py-1 overflow-hidden text-lg sm:text-[1.2rem] bold text-slate-800 transition duration-300 ease-out border-2 border-slate-800 rounded-full shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white text-2xl duration-300 -translate-x-full bg-slate-800 group-hover:translate-x-0 ease">
                <VscDebugStart />
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-slate-800 transition-all duration-300 transform group-hover:translate-x-full ease">
                Start
              </span>
              <span className="relative invisible">Button Text</span>
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SetupQuiz;

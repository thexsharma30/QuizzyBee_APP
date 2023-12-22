import React, { useState, useEffect } from "react";
import Card from "./Ui/Cards";
import { useNavigate } from "react-router-dom";
import { BsChevronDoubleDown } from "react-icons/bs";
import { getQuestionsData } from "../Api/index";
import { Triangle } from "react-loader-spinner";

const Question = ({ filters }) => {
  const [currentAnswer, setCurrentAnswer] = useState({ name: "rittik" });
  const [currentQuestion, setCurrentQuestion] = useState({ answers: "null" });
  const [questions, setQuestions] = useState();
  const [counter, setCounter] = useState(0);
  const [isloading, setIsLoading] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [progress, setProgress] = useState(0);
  const [modalVisibility, setModalVisibility] = useState(false);
  const navigate = useNavigate();
  var i = 0;
  useEffect(() => {
    setIsLoading(true);
    getQuestionsData(
      filters.noOfQuestions,
      filters.category,
      filters.difficulty
    )
      .then((data) => setQuestions(data))
      .catch((error) => console.error(error));
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    // console.log(questions);
    // setCurrentQuestion[questions[0]];
    // console.log(currentQuestion);
  }, []);

  useEffect(() => {
    if (questions) {
      // console.log("1 : ", questions);
      setCurrentQuestion(questions[i]);

      console.log("2: ", currentQuestion);
    }
  }, [questions]);

  useEffect(() => {
    setCorrectAnswers(currentQuestion.correct_answers);
    console.log("3: ", correctAnswers);
  }, [currentQuestion]);

  useEffect(() => {
    setCurrentAnswer(currentQuestion.answers);
  }, [currentQuestion]);

  const changeQuestion = () => {
    if (counter < filters.noOfQuestions) {
      setCounter(counter + 1);
      setCurrentQuestion(questions[counter]);
      // if(counter < questions.length){
      //   setCounter(counter+1);
      // }
    } else {
      setModalVisibility(true);
    }
  };

  const checkAnswer = (value, e) => {
    console.log(value);
    const string = `${value}_correct`;
    const originalStyle = e.target.style;
    if (correctAnswers[string] === "true") {
      e.target.style = "background-color: rgb(34 197 94);";
      setTimeout(() => {
        e.target.style = originalStyle;
        changeQuestion();
        setProgress(progress + 1);
      }, 1000);
    } else {
      e.target.style = "background-color: rgb(220 38 38);";
    }
    setTimeout(() => {
      e.target.style = originalStyle;
      changeQuestion();
    }, 1000);
  };

  if (isloading) {
    return (
      <div className="flex flex-col w-screen h-screen place-content-center items-center">
        <Triangle
          color="rgb(30 41 59)"
          height={100}
          width={100}
          ariaLabel="triangle-loading"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-screen h-screen place-content-center items-center">
      <Card className="w-72 sm:w-96 lg:w-2/5 h-72 sm:h-96 lg:h-[27rem] overflow-y-scroll hideScroll">
        <small className="text-right pt-4 pr-4 text:[10px] sm:text-sm text-green-500 bold">
          {`Correct answers: ${progress}/${filters.noOfQuestions}`}
        </small>
        <h1 className="text-xl sm:text-2xl lg:text-4xl md:text-2xl bold px-4 text-slate-800 text-center pt-8">
          {currentQuestion.question}
        </h1>
        <section className="flex flex-col place-content-center items-center pb-8 pt-8">
          {currentAnswer &&
            Object.values(currentAnswer).map((answer) => {
              if (answer != null) {
                return (
                  <div className="pb-2">
                    <p
                      className=" w-56 lg:w-96 h-auto break-normal text-center text-white bg-gray-400 hover:bg-gray-500 
                      pt-1 pb-1 pl-2 pr-2 sm:bold text-[10px] sm:text-base md:text-xl rounded-3xl break-all cursor-pointer"
                      key={Math.random()}
                      onClick={(e) =>
                        checkAnswer(
                          Object.keys(currentAnswer).find(
                            (key) => currentAnswer[key] === answer
                          ),
                          e
                        )
                      }
                    >
                      {answer}
                    </p>
                  </div>
                );
              }
            })}
        </section>
      </Card>
      <div className="pt-8 pb-2 flex flex-col place-content-center items-center">
        <button
          onClick={() => {
            changeQuestion();
          }}
          className="w-12 h-12 bg-orange-400 hover:bg-orange-500 rounded-full 
          text-3xl flex place-content-center items-center p-2 text-white hover:shadow-xl ease-in-out duration-300"
        >
          <BsChevronDoubleDown />
        </button>
      </div>
      {modalVisibility && (
        <div className="flex absolute w-screen h-screen place-content-center items-center">
          <Card className="flex absolute place-content-center items-center w-56 sm:w-5/12 h-5/12 z-10">
            <h1 className="lg:text-6xl md:text-3xl bold pl-6 pb-4 text-slate-800 text-center pt-8 pr-2 pl-2 pb-2">
              Congrats!
            </h1>
            <p className="text-center lg:text-xl md:text-sm">{`You answered ${progress}/${filters.noOfQuestions} questions correctly`}</p>
            <div className="py-4">
              <button
                onClick={() => navigate("/profile")}
                class="relative inline-flex items-center px-12 py-1 overflow-hidden text-[12px] sm:text-[1.25rem] text-orange-500 border-2 border-orange-500 rounded-full hover:text-white group hover:bg-gray-50"
              >
                <span class="absolute left-0 block w-full h-0 transition-all bg-orange-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative">Continue</span>
              </button>
            </div>
          </Card>
          <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-60 blur-sm z-[5]"></div>
        </div>
      )}
    </div>
  );
};

export default Question;

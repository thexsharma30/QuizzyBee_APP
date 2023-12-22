import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Ui/Cards";
import Cloud from "../imgs/cloud-svgrepo-com.svg";
import Code from "../imgs/code-1115-svgrepo-com.svg";
import Linux from "../imgs/linux-svgrepo-com.svg";
import Sql from "../imgs/sql-file-symbol-svgrepo-com.svg";
import Docker from "../imgs/docker-svgrepo-com.svg";
import Cms from "../imgs/cms-svgrepo-com.svg";
const data = [
  {
    name: "DevOps",
    image: Cloud,
  },
  {
    name: "Code",
    image: Code,
  },
  {
    name: "Linux",
    image: Linux,
  },
  {
    name: "SQL",
    image: Sql,
  },
  {
    name: "Docker",
    image: Docker,
  },
  {
    name: "CMS",
    image: Cms,
  },
];
const Todos = () => {
  const navigate = useNavigate();
  const startQuiz = (name) => {
    console.log(name);
    navigate(`/quiz/${name}`);
  };
  return (
    <>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 pt-10 gap-4">
        {data.map((item) => (
          <div
            className="flex place-content-center items-center"
            key={Math.random()}
          >
            <Card className="w-9/12 md:w-4/5 h-48 m-4 hover:scale-110 ease-in-out duration-300 overflow-hidden">
              <img
                src={item.image}
                alt=""
                className="absolute w-96 right-0 opacity-30 top-[-30px]"
              />
              <h1 className="text-5xl bold text-slate-800 pl-4 pt-4">
                {item.name}
              </h1>

              <div className="flex place-content-end items-end mr-4 mt-12">
                <button
                  onClick={() => startQuiz(item.name)}
                  className="relative inline-flex items-center px-12 py-1 overflow-hidden btn-txt text-orange-500 border-2 border-orange-500 rounded-full hover:text-white group hover:bg-gray-50"
                >
                  <span className="absolute left-0 block w-full h-0 transition-all bg-orange-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative">Start</span>
                </button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todos;

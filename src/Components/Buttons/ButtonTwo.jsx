import React from "react";

const ButtonTwo = ({ level }) => {
  return (
    <button className="relative inline-flex items-center px-6 py-2 lg:px-12 lg:py-3 overflow-hidden text-lg font-medium text-primary border-2 border-accent rounded-full hover:text-white group hover:bg-accent">
      <span className="absolute left-0 block w-full h-0 transition-all bg-accent opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
      <span className="absolute mt-1 right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <svg
          className="w-5 h-5"
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
      <span className="relative">{level}</span>
    </button>
  );
};

export default ButtonTwo;

import React from "react";

const ButtonOne = ({ level, icon, onClick,loading }) => {
  return (
    <button
      onClick={onClick}
      href="#_"
      className="rounded px-2 md:px-3 py-1 md:py-2 overflow-hidden group bg-accent relative hover:bg-gradient-to-r hover:from-accent hover:to-accent text-white hover:ring-2 hover:ring-offset-2 hover:ring-accent transition-all ease-out duration-300"
    >
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
      <span className="relative flex gap-2 text-md md:text-sm items-center">
        {loading ? <span className="loading loading-spinner loading-sm"></span> : level}
        {icon}
      </span>
    </button>
  );
};

export default ButtonOne;

import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import ButtonOne from "../Buttons/ButtonOne";
import { GoDownload } from "react-icons/go";
import logo from '../../assets/logo.png'

const NavBer = () => {
  const { pathname } = useLocation();
const [isScrolled, setIsScrolled] = useState(false);

  

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = (
    <>
      <li>
        <NavLink className={({isActive}) => isActive && 'bg-accent'} to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/about'>About</NavLink>
      </li>
    </>
  );
  return (
    <div
      className={`navbar w-11/12 transition-colors duration-500 mx-auto fixed top-0 flex ${
        pathname === "/" ? "absolute top-0 w-full" : ""
      }  ${isScrolled ? " text-primary shadow-md backdrop-blur z-10" : ''}`}
    >
      <div
        className={`${
          pathname === "/"
            ? "w-11/12 mx-auto flex"
            : "flex justify-between w-full"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
                {links}
            </ul>
          </div>
         <div className="flex gap-2 items-center font-bold">
           <img src={logo} alt="logo" />
           <h1 className="text-2xl">NHT</h1>
         </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a href="/Untitled document (1).pdf" download>
            <ButtonOne level="Resume" icon={<GoDownload size={20}/>}></ButtonOne>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBer;

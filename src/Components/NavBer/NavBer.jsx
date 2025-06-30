import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import ButtonOne from "../Buttons/ButtonOne";
import { GoDownload } from "react-icons/go";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { IoClose, IoReorderThreeOutline } from "react-icons/io5";
import { motion } from "motion/react";
import {
  FaHome,
  FaUserAlt,
  FaLaptopCode,
  FaGraduationCap,
  FaProjectDiagram,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";
const activeStyle = "bg-accent text-primary hover:text-primary";
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

  // useEffect(() => {
  //   const onScroll = () => {
  //     setHomeStyle(window.scrollY > 580);
  //   };

  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  const links = (
    <>
      <li>
        <Link
          activeClass={activeStyle}
          to="hero"
          offset={-50}
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-accent"
        >
          <FaUserAlt className="inline-block mr-1" />
          Home
        </Link>
      </li>
      <li>
        <Link
          activeClass={activeStyle}
          to="about"
          offset={-50}
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-accent"
        >
          <FaUserAlt className="inline-block mr-1" />
          About
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          activeClass={activeStyle}
          className="hover:text-accent"
        >
          <FaLaptopCode className="inline-block mr-1" />
          Skills
        </Link>
      </li>
      <li>
        <Link
          activeClass={activeStyle}
          offset={-50}
          spy={true}
          to="education"
          smooth={true}
          className="hover:text-accent"
          duration={500}
        >
          <FaGraduationCap className="inline-block mr-1" />
          Education
        </Link>
      </li>
      <li>
        <Link
          activeClass={activeStyle}
          offset={-50}
          spy={true}
          to="project"
          smooth={true}
          duration={500}
          className="hover:text-accent"
        >
          <FaProjectDiagram className="inline-block mr-1" />
          Project
        </Link>
      </li>
      <li>
        <Link
          activeClass={activeStyle}
          spy={true}
          offset={-50}
          to="contact"
          smooth={true}
          duration={500}
          className="hover:text-accent"
        >
          <FaEnvelope className="inline-block mr-1" />
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div
      className={`navbar w-11/12 transition-colors duration-500 mx-auto z-[1000] fixed top-0 flex ${
        pathname === "/" ? "absolute top-0 w-full" : ""
      }  ${isScrolled ? " text-primary shadow-md backdrop-blur z-10" : ""}`}
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="hero" smooth={true} duration={500}>
            <div className="flex gap-2 cursor-pointer items-center font-bold">
              <img className="w-[40px] md:w-full" src={logo} alt="logo" />
              <h1 className="text-2xl">NHT</h1>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {/* <button className="lg:hidden" onClick={toggleSidebar}>
            {isOpen ? <IoClose size={30}/> : <IoReorderThreeOutline size={30}/>}
          </button>
          {isOpen && <Manu></Manu>} */}

          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button flex justify-end lg:hidden"
              >
                <IoReorderThreeOutline size={30} />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-secondary-content text-base-content min-h-40 w-50 p-4">
                {/* Sidebar content here */}
                {links}
              </ul>
            </div>
          </div>

          <a
            className="hidden lg:flex"
            href="/Untitled document (1).pdf"
            download
          >
            <ButtonOne
              level="Resume"
              icon={
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <FaArrowDown size={17} />
                </motion.div>
              }
            ></ButtonOne>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBer;

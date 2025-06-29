import React from "react";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";
import {
  FaUser,
  FaCode,
  FaGraduationCap,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:footer-horizontal bg-secondary-content text-base-content p-10">
      <Link
        className="hover:cursor-pointer flex items-center gap-2"
        to="hero"
        smooth={true}
        duration={500}
      >
        <div className="space-y-2">
          <div className="flex gap-2 items-center font-bold">
            <img src={logo} alt="logo" />
            <h1 className="text-2xl">NHT</h1>
          </div>
          <p>
            I build responsive websites that enhance user experience and drive
            business results.
          </p>
        </div>
      </Link>
      <nav className="flex flex-col space-y-1">
        <Link
          className="hover:cursor-pointer flex items-center gap-2"
          to="about"
          smooth={true}
          duration={500}
        >
          <FaUser /> About
        </Link>

        <Link
          className="hover:cursor-pointer flex items-center gap-2"
          to="skills"
          smooth={true}
          duration={500}
        >
          <FaCode /> Skills
        </Link>

        <Link
          className="hover:cursor-pointer flex items-center gap-2"
          to="education"
          smooth={true}
          duration={500}
        >
          <FaGraduationCap /> Education
        </Link>

        <Link
          className="hover:cursor-pointer flex items-center gap-2"
          to="project"
          smooth={true}
          duration={500}
        >
          <FaProjectDiagram /> Project
        </Link>

        <Link
          className="hover:cursor-pointer flex items-center gap-2"
          to="contact"
          smooth={true}
          duration={500}
        >
          <FaEnvelope /> Contact
        </Link>
      </nav>

      <nav>
        <h6 className="text-accent font-bold">Social</h6>
        <div className="mt-6 flex  gap-4 text-2xl">
          <NavLink
            to="https://www.facebook.com/nurislamhasantonmoyth"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent"
          >
            <FaFacebookF />
          </NavLink>
          <NavLink
            to="https://github.com/tonmoyth"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent"
          >
            <FaGithub />
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/nurislam-hasan-tonmoy-88b1bb368/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent"
          >
            <FaLinkedinIn />
          </NavLink>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

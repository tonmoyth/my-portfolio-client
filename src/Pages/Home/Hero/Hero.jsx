import React from "react";
import { Link } from "react-router";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import ButtonTwo from "../../../Components/Buttons/ButtonTwo";
import backgroundImage from "../../../assets/background.jpg";
import profile from "../../../assets/profile.png";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      id="hero"
      className={`hero min-h-screen bg-cover bg-center bg-ur`}
      // style={{ background: `url('${backgroundImageUrl}')`}}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="hero-content overflow-hidden flex-col md:w-11/12 mx-auto justify-between lg:flex-row-reverse">
        <div
          data-aos="fade-left"
          className="flex-1  flex justify-center items-center relative"
        >
          <motion.h1
            animate={{
              y: [10, 0, 10],
              transition: { duration: 2, repeat: Infinity },
            }}
            className="text-3xl md:text-4xl lg:text-6xl absolute lg:top-44 font-bold lg:left-8"
          >
            Web Developer
          </motion.h1>
          <img
            src={profile}
            className="max-w-sm relative border-b-6 lg:border-b-10  border-accent h-[350px] md:h-[450px] lg:h-full z-10 rounded-b-full object-cover shadow-2xl"
          />
        </div>
        <div data-aos="fade-right" className="flex-1 space-y-2 lg:space-y-4">
          <h1 className="text-2xl font-bold text-primary">Hello</h1>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary">
            I’m Tonmoy <br /> A{" "}
            <span className="text-accent">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  500,
                  "MERN Stack Developer",
                  500,
                  "React Developer",
                  500,
                ]}
                speed={40}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p>
            I’m a results-driven Web Developer specializing in building
            scalable, responsive web applications that deliver real business
            value.
          </p>

          {/* social icons */}
          <div className="flex gap-3">
            <Link
              to="https://github.com/tonmoyth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="hover:text-accent transition-all duration-200"
                size={25}
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/nurislam-hasan-tonmoy-88b1bb368/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="hover:text-accent transition-all duration-200"
                size={25}
              />
            </Link>

            <Link
              to="https://x.com/hasan_tonm58653"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                className="hover:text-accent transition-all duration-200"
                size={25}
              />
            </Link>
          </div>
          <a href="/tonmoy-resume.pdf" download>
            <ButtonTwo level="Download Resume"></ButtonTwo>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

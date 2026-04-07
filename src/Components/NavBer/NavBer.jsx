import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ButtonOne from "../Buttons/ButtonOne";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { IoReorderThreeOutline } from "react-icons/io5";
import { motion } from "motion/react";
import { FaArrowDown } from "react-icons/fa";

// NavLink Item Component with Framer Motion
const NavItem = ({ to, label, offset = -50, onClose }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <motion.li
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <Link
        to={to}
        offset={offset}
        spy={true}
        smooth={true}
        duration={500}
        className="hover:text-accent cursor-pointer px-3 py-2 rounded-lg transition-colors duration-300 block w-full"
        onClick={handleClick}
      >
        <motion.span
          animate={{ scale: isHovered ? 1.02 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="inline-block"
        >
          {label}
        </motion.span>

        {/* Underline animation */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-accent"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : 0 }}
          transition={{ duration: 0.3 }}
          style={{ width: isHovered ? "100%" : 0 }}
        />
      </Link>
    </motion.li>
  );
};

const NavBer = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 || window.innerWidth <= 0) {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDrawClick = (event) => {
    if (!isDrawerOpen) return;

    const clickedMenu = event.target.closest(".drawer-side .menu");
    const clickedToggle = event.target.closest(".drawer-button");

    if (!clickedMenu && !clickedToggle) {
      setIsDrawerOpen(false);
    }
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const getLinks = (onClose) => (
    <>
      <NavItem to="hero" label="Home" offset={-50} onClose={onClose} />
      <NavItem to="about" label="About" offset={-50} onClose={onClose} />
      {/* <NavItem to="stack" label="My Stack" offset={-50} onClose={onClose} /> */}
      <NavItem to="skills" label="Skills" offset={-50} onClose={onClose} />
      {/* <NavItem to="service" label="Service" offset={-50} onClose={onClose} /> */}

      <NavItem
        to="education"
        label="Education & Experience"
        offset={-50}
        onClose={onClose}
      />
      <NavItem to="project" label="Project" offset={-50} onClose={onClose} />

      <NavItem to="contact" label="Contact" offset={-50} onClose={onClose} />
    </>
  );

  const desktopLinks = getLinks(null);
  return (
    <motion.div
      className={`navbar w-full transition-all duration-500 ${
        isScrolled
          ? "fixed top-0 z-50 shadow-lg backdrop-blur-md bg-transparent"
          : pathname === "/"
            ? "absolute top-0 w-full"
            : "fixed top-0 z-50"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="w-11/12 mx-auto flex justify-between items-center py-3">
        {/* Logo */}
        <Link to="hero" smooth={true} duration={500}>
          <div className="flex gap-2 cursor-pointer items-center font-bold">
            <img className="w-[40px]" src={logo} alt="logo" />
            <h1 className="text-2xl hidden md:block text-primary md:text-white">
              NHT
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="menu menu-horizontal px-1 hidden lg:flex gap-2">
          {desktopLinks}
        </ul>

        {/* Mobile Menu & Resume Button */}
        <div className="flex items-center gap-4">
          {/* Desktop Resume Button */}
          <a
            className="hidden lg:flex"
            href="/tonmoy-resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
              />
            </motion.div>
          </a>

          {/* Mobile Drawer */}
          <div
            className="drawer drawer-end lg:hidden"
            onClick={handleDrawClick}
          >
            <input
              id="my-drawer-4"
              type="checkbox"
              className="drawer-toggle"
              checked={isDrawerOpen}
              onChange={(e) => setIsDrawerOpen(e.target.checked)}
            />
            <div className="drawer-content">
              <label htmlFor="my-drawer-4" className="drawer-button">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <IoReorderThreeOutline size={30} className="text-primary" />
                </motion.div>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
                onClick={() => setIsDrawerOpen(false)}
              />
              <ul className="menu bg-base-200 text-base-content min-h-full w-64 p-4 space-y-2">
                {getLinks(handleCloseDrawer)}
                <li className="mt-4 pt-4 border-t border-base-300">
                  <a
                    href="/tonmoy-resume.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent text-primary font-bold hover:bg-accent/90"
                  >
                    <FaArrowDown size={17} />
                    Download Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBer;

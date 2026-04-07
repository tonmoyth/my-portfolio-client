import React from "react";
import ProjectOne from "./ProjectOne";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import Modal from "../../../Components/Modal/Modal";
import ProjectTwo from "./ProjectTwo";
import ProjectTwoModal from "../../../Components/Modal/ProjectTwoModal/ProjectTwoModal";
import ProjectThree from "./ProjectThree";
import ProjectThreeModal from "../../../Components/Modal/ProjectThreeModal/ProjectThreeModal";
import ProjectFour from "./ProjectFour";
import ProjectFourModal from "../../../Components/Modal/ProjectFourModal/ProjectFourModal";

const ProjectSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModalTwo, setOpenModalTwo] = useState(false);
  const [isOpenModalThree, setOpenModalThree] = useState(false);
  const [isOpenModalFour, setOpenModalFour] = useState(false);

  // project one
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  // modal two
  function openModalTwo() {
    setOpenModalTwo(true);
  }

  function closeModalTwo() {
    setOpenModalTwo(false);
  }

  // modal three
  function openModalThree() {
    setOpenModalThree(true);
  }

  function closeModalThree() {
    setOpenModalThree(false);
  }

  function openModalFour() {
    setOpenModalFour(true);
  }

  function closeModalFour() {
    setOpenModalFour(false);
  }

  return (
    <>
      <div className="md:mb-40">
        <div data-aos="fade-up" className="mb-10 max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-accent/90">
            MY WORK
          </span>

          <h2 className="mt-5 text-5xl md:text-6xl font-black tracking-tight text-white">
            My Projects
          </h2>

          <p className="mt-5 mx-auto max-w-2xl text-xl leading-relaxed text-gray-300">
            A collection of my recent full-stack projects showcasing real-world
            problem solving, scalability, and modern technologies.
          </p>
        </div>
        <ProjectFour open={openModalFour}></ProjectFour>
        <ProjectTwo open={openModalTwo}></ProjectTwo>
        <ProjectThree open={openModalThree}></ProjectThree>
        <ProjectOne open={open}></ProjectOne>

        {/* project one modal */}
        <Modal isOpen={isOpen} close={close}></Modal>
        {/* project two modal */}
        <ProjectTwoModal
          isOpen={isOpenModalTwo}
          close={closeModalTwo}
        ></ProjectTwoModal>
        {/* project three modal */}
        <ProjectThreeModal
          isOpen={isOpenModalThree}
          close={closeModalThree}
        ></ProjectThreeModal>

        {/* project four modal */}
        <ProjectFourModal
          isOpen={isOpenModalFour}
          close={closeModalFour}
        ></ProjectFourModal>
      </div>
    </>
  );
};

export default ProjectSection;

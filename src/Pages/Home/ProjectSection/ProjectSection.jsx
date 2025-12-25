import React from "react";
import ProjectOne from "./ProjectOne";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import Modal from "../../../Components/Modal/Modal";
import ProjectTwo from "./ProjectTwo";
import ProjectTwoModal from "../../../Components/Modal/ProjectTwoModal/ProjectTwoModal";
import ProjectThree from "./ProjectThree";
import ProjectThreeModal from "../../../Components/Modal/ProjectThreeModal/ProjectThreeModal";

const ProjectSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModalTwo, setOpenModalTwo] = useState(false);
  const [isOpenModalThree, setOpenModalThree] = useState(false);

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

  return (
    <>
      <div className="md:mb-40">
        <div data-aos="fade-up" className="text-center">
          <h2 className="text-2xl lg:text-4xl font-bold uppercase text-primary">
            My Projects
          </h2>
        </div>
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
      </div>
    </>
  );
};

export default ProjectSection;

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
      <ProjectOne open={open}></ProjectOne>
      <ProjectTwo open={openModalTwo}></ProjectTwo>
      <ProjectThree open={openModalThree}></ProjectThree>



      {/* project one modal */}
      <Modal isOpen={isOpen} close={close}></Modal>
      {/* project two modal */}
      <ProjectTwoModal
        isOpen={isOpenModalTwo}
        close={closeModalTwo}
      ></ProjectTwoModal>
      {/* project three modal */}
      <ProjectThreeModal isOpen={isOpenModalThree} close={closeModalThree}></ProjectThreeModal>
    </>
  );
};

export default ProjectSection;

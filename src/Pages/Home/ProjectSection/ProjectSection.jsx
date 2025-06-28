import React from "react";
import ProjectOne from "./ProjectOne";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import Modal from "../../../Components/Modal/Modal";

const ProjectSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen)

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <>
      <ProjectOne open={open} close={close}></ProjectOne>

      <Modal isOpen={isOpen} close={close}></Modal>
    </>
  );
};

export default ProjectSection;

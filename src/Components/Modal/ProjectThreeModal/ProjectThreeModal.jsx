import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React from "react";
import {
  SiJavascript,
  SiReact,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiNodedotjs,
  SiHtml5,
  SiTailwindcss,
  SiDaisyui,
} from "react-icons/si";

const ProjectThreeModal = ({ isOpen, close }) => {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={close}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-3xl rounded-xl bg-black p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            <DialogTitle
              as="h3"
              className="font-medium text-2xl lg:text-4xl text-accent"
            >
              Zentrix Technology Limited.
            </DialogTitle>
            <p className="mt-2 text-sm/6 text-primary">
              Modern company website showcasing services and products with
              interactive engaging design.
            </p>
            <br />
            {/* Technology */}
            <div>
              <strong className="text-accent">Technology :</strong>
              <div className="flex flex-wrap gap-3 mt-4 text-2xl text-primary">
                <SiHtml5 title="HTML5" className="text-orange-600" />
                <SiTailwindcss title="Tailwind CSS" className="text-cyan-500" />
                <SiJavascript title="JavaScript" className="text-yellow-400" />
                <SiReact title="React.js" className="text-blue-500" />
                <SiFirebase title="Firebase" className="text-yellow-500" />
              </div>
            </div>
            <br />
            <div>
              <strong className="text-accent">Challenges faced : </strong>
              Creating smooth, high-performance animations without affecting
              page load speed. Maintaining consistent UI/UX across sections
              while using multiple animation libraries. Structuring scalable
              components for services and product showcases.
            </div>
            <br />
            {/* <div>
              <strong className="text-accent">Future Plan : </strong>
              In the future, I plan to enhance this platform by adding features
              such as event booking or registration, user reviews and ratings,
              event reminders via email or notifications, and an admin dashboard
              for event organizers. The goal is to build a complete ecosystem
              where users can not only discover but also engage deeply with
              local events.
            </div> */}
            <div className="mt-4">
              <Button
                className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none hover:text-black transition-all duration-300 data-focus:outline data-focus:outline-white data-hover:bg-primary data-open:bg-primary"
                onClick={close}
              >
                Got it, thanks!
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default ProjectThreeModal;

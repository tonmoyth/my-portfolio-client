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

const Modal = ({ isOpen, close }) => {
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
              BookNest
            </DialogTitle>
            <p className="mt-2 text-sm/6 text-primary">
              This project offers a seamless hotel booking experience by
              combining an intuitive user interface, real-time room
              availability, and secure, enterprise-grade authentication.
            </p>
            <br />
            {/* Technology */}
            <div>
              <strong className="text-accent">Technology :</strong>
              <div className="flex flex-wrap gap-3 mt-4 text-2xl text-primary">
                <SiHtml5 title="HTML5" className="text-orange-600" />
                <SiTailwindcss title="Tailwind CSS" className="text-cyan-500" />
                <SiDaisyui title="DaisyUI" className="text-purple-500" />
                <SiJavascript title="JavaScript" className="text-yellow-500" />
                <SiReact title="React.js" className="text-cyan-400" />
                <SiExpress title="Express.js" className="text-gray-700" />
                <SiMongodb title="MongoDB" className="text-green-600" />
                <SiFirebase title="Firebase" className="text-yellow-600" />
                <SiNodedotjs title="Node.js" className="text-green-700" />
              </div>
            </div>
            <br />
            <div>
              <strong className="text-accent">Challenges faced : </strong>
              This assignment project was a turning point in my learning
              journey. While building it, I faced many errors and challenges due
              to limited experience. It required deep focus, long hours, and
              consistent debugging. Slowly, I solved each issue and successfully
              implemented all key features. This project helped me grow as a
              developer and boosted my confidence.
            </div>
            <br />
            <div>
              <strong className="text-accent">Future Plan : </strong>
              My plan is to continuously update this project by adding new
              features regularly. The goal is to make hotel booking easier and
              more convenient for users. Over time, I want to expand its
              services so people can access all necessary hotel-related
              facilities smoothly and enjoy a better user experience.
            </div>
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

export default Modal;

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

const ProjectTwoModal = ({ isOpen, close }) => {
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
            className="w-full max-w-3xl rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            <DialogTitle
              as="h3"
              className="font-medium text-2xl lg:text-4xl text-accent"
            >
              TaskUp
            </DialogTitle>
            <p className="mt-2 text-sm/6 text-primary">
              The purpose of TaskUp is to create a simple and efficient
              freelance task marketplace where individuals can post small tasks
              with specific requirements, and freelancers can easily browse and
              bid on those tasks.
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
              While building TaskUp, one of the major challenges was designing a
              smooth and intuitive task posting and bidding system that works in
              real time. Ensuring proper user authentication, managing user
              roles (task provider vs freelancer), and maintaining data
              integrity were also complex parts. Additionally, building a
              responsive UI and handling form validations across different
              components required careful planning and debugging.
            </div>
            <br />
            <div>
              <strong className="text-accent">Future Plan : </strong>I plan to
              enhance TaskUp by integrating a secure payment system for safe
              transactions between users. I also want to add chat functionality,
              advanced filtering for tasks, a freelancer rating system, and an
              admin dashboard for better platform management. My goal is to make
              TaskUp a more powerful, scalable, and trustworthy freelance task
              marketplace for everyday users.
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

export default ProjectTwoModal;

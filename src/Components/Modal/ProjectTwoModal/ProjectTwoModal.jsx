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
            className="w-full max-w-3xl rounded-xl bg-black p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            <DialogTitle
              as="h3"
              className="font-medium text-2xl lg:text-4xl text-accent"
            >
              StudyNest
            </DialogTitle>
            <p className="mt-2 text-sm/6 text-primary">
              StudyNest is an interactive e-learning platform where students can
              enroll in courses, and teachers can share their knowledge by
              adding their own classes. It includes role-based dashboards for
              Admin, Teacher, and Student, and a secure login/registration
              system.
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
              Managing complex role-based access across dashboards and keeping
              data in sync with real-time updates. Implementing secure payments
              with reliable enrollment tracking after transactions. Optimizing
              performance with server-side search, pagination, and scalable
              state management.
            </div>
            <br />
            <div>
              <strong className="text-accent">Future Plan : </strong>I plan to
              Add live classes with real-time video and chat integration.
              Implement AI-based course recommendations based on student
              activity. Introduce certificates and progress-based achievements
              for completed courses.
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

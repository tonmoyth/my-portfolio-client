import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React from "react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";

const ProjectFourModal = ({ isOpen, close }) => {
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
              TravelGuide Hub
            </DialogTitle>

            <p className="mt-2 text-sm/6 text-primary">
              A full-stack travel community platform where users can create,
              discover, and purchase travel guides with real-time interaction,
              voting system, and secure payment integration.
            </p>

            <br />

            {/* Core Features */}
            <div>
              <strong className="text-accent">Core Features :</strong>
              <ul className="list-disc pl-5 mt-2 text-primary text-sm space-y-1">
                <li>
                  Create and manage travel guides with draft system and rich
                  content support.
                </li>
                <li>
                  Role-based approval workflow (Draft → Review → Approved /
                  Rejected) with admin moderation.
                </li>
                <li>
                  Secure payment integration for premium guides with seamless
                  purchase experience.
                </li>
              </ul>
            </div>

            <br />

            {/* Technology */}
            <div>
              <strong className="text-accent">Technology :</strong>
              <div className="flex flex-wrap gap-3 mt-4 text-2xl text-primary">
                <SiNextdotjs title="Next.js" />
                <SiTailwindcss title="Tailwind CSS" className="text-cyan-500" />
                <SiExpress title="Express.js" />
                <SiNodedotjs title="Node.js" className="text-green-500" />
                <SiPrisma title="Prisma" className="text-indigo-500" />
                <SiPostgresql title="PostgreSQL" className="text-blue-600" />
              </div>
            </div>

            <br />

            {/* Challenges */}
            <div>
              <strong className="text-accent">Challenges faced : </strong>
              Designing a scalable approval workflow with role-based access
              control, handling secure payment validation, and managing complex
              relational data using Prisma and PostgreSQL while maintaining
              performance and clean architecture.
            </div>

            <br />

            {/* Future Plan */}
            <div>
              <strong className="text-accent">Future Plan : </strong>
              Add real-time chat between travelers, AI-based travel
              recommendations, advanced analytics dashboard for admins, and
              personalized content suggestions based on user behavior.
            </div>

            <div className="mt-4">
              <Button
                className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-1.5 text-sm font-semibold text-white hover:text-black transition-all duration-300 hover:bg-primary"
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

export default ProjectFourModal;

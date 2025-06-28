import React, { useRef } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiJavascript,
  SiGooglechrome,
} from "react-icons/si";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="pb-10 lg:pb-12 space-y-6 px-4 w-11/12 mx-auto"
    >
      <div className="text-center">
        <span className="font-semibold text-accent">Expert</span>
        <h2 className="text-4xl font-bold text-center uppercase text-primary">
          Skills
        </h2>
      </div>

      <div>
        {/* Frontend */}
        <motion.div className="bg-secondary-content p-6 rounded-xl shadow-md border-l-4 border-accent">
          {/* <h3 className="text-2xl font-semibold mb-4 text-primary">Frontend</h3> */}
          <div className="space-y-4">
             <SkillItem icon={<SiJavascript />} name="JavaScript" level="90%" />
            <SkillItem
              icon={<FaReact />}
              name="React.js"
              level="90%"
              className="bg-accent"
            />
            
            <SkillItem icon={<FaNodeJs />} name="Node.js" level="80%" />
            <SkillItem icon={<SiExpress />} name="Express.js" level="85%" />
            <SkillItem icon={<SiFirebase />} name="Firebase" level="85%" />
            <SkillItem icon={<SiMongodb />} name="MongoDB" level="80%" />
           
            <SkillItem icon={<FaGithub />} name="GitHub" level="90%" />
           
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Reusable Skill Item Component
const SkillItem = ({ icon, name, level }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <div ref={ref} className="flex items-center gap-3 mb-1">
        <span className="text-xl text-primary">{icon}</span>
        <span className="font-medium text-primary">{name}</span>
      </div>
      <motion.progress
        initial={{ width: 0 }}
        animate={{ width: isInView ? "100%" : "0%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="progress progress-accent w-full"
        value={parseInt(level)}
        max="100"
      ></motion.progress>
    </div>
  );
};

export default Skills;

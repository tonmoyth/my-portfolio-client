import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 md:w-11/12 mx-auto text-white"
    >
      {/* 🔹 Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-accent font-semibold">
          Career Path
        </p>

        <h2 className="text-4xl md:text-5xl font-black">
          Education & Experience
        </h2>

        <p className="text-gray-400 text-sm md:text-base">
          A combination of academic background and real-world experience,
          shaping my journey as a Full Stack Developer.
        </p>
      </div>

      {/* 🔹 Timeline */}
      <div className="grid md:grid-cols-2 gap-16 relative">
        {/* Center Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/40 to-transparent"></div>

        {/* 🔹 Education */}
        <div className="relative md:pr-10">
          <div className="absolute -right-3 top-6 h-3 w-3 rounded-full bg-accent shadow-[0_0_15px_rgba(183,207,149,0.4)]"></div>

          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition hover:border-accent/40">
            <span className="text-xs text-accent tracking-widest">
              2021 - 2025
            </span>

            <h3 className="mt-3 text-xl font-semibold">
              Polytechnic in Computer Engineering
            </h3>

            <p className="mt-2 text-sm text-gray-300">
              Model Institute of Science and Technology
            </p>

            <p className="text-xs text-gray-500">Gazipur, Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* 🔹 Experience */}
        <div className="relative md:pl-10">
          <div className="absolute -left-3 top-6 h-3 w-3 rounded-full bg-accent shadow-[0_0_15px_rgba(183,207,149,0.4)]"></div>

          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition hover:border-accent/40">
            <span className="text-xs text-accent tracking-widest">
              Sep 2025 - Nov 2025
            </span>

            <h3 className="mt-3 text-xl font-semibold">MERN Stack Developer</h3>

            <p className="mt-2 text-sm text-gray-300">
              Zentrix Technology Limited
            </p>

            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                Built real-world scalable applications.
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                Improved teamwork and collaboration skills.
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                Adapted quickly to modern technologies.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

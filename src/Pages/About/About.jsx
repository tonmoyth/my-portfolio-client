import React from "react";
import { MdDeveloperMode } from "react-icons/md";
import { TbMoodCrazyHappyFilled } from "react-icons/tb";
import aboutImage from "../../assets/about-image.jpg";

const About = () => {
  return (
    <section
      data-aos="fade-up"
      className=" mb-8 md:mb-40 bg-secondary-content rounded-lg py-8"
    >
      <div data-aos="fade-up" className="text-center py-8 md:mb-0">
        <span className="font-semibold text-accent">Know Me More</span>
        <h2 className="text-2xl lg:text-4xl font-bold text-center uppercase text-primary">
          About Me
        </h2>
      </div>
      <section className="md:py-24 w-11/12  mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT SIDE: Identity & Visuals */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            <div className="space-y-4">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight text-white">
                I'm{" "}
                <span className="text-accent underline decoration-accent/30 underline-offset-8">
                  Nurislam Hasan Tonmoy
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-gray-400">
                A web developer{" "}
                <span className="text-white">
                  building clean, modern, and responsive applications.
                </span>
              </p>
            </div>

            <div className="relative group">
              {/* Decorative Background Element */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img
                  className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  src={aboutImage}
                  alt="Working"
                />
              </div>
            </div>

            {/* Quick Stats or Social links could go here */}
            {/* <div className="flex gap-4">
                <div className="h-1 w-20 bg-accent rounded-full"></div>
                <p className="text-sm uppercase tracking-widest text-gray-500 font-bold font-mono">
                  Based in Bangladesh
                </p>
              </div> */}
          </div>

          {/* RIGHT SIDE: Details Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Programming Journey Card - Spans 2 columns on tablet+ */}
            <div className="md:col-span-2 p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-accent/50 transition-colors shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg text-accent text-xl">
                  🚀
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                  My programming journey
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                My journey started on{" "}
                <span className="text-white font-medium">
                  January 1st, 2025
                </span>
                . It wasn't easy—investing high effort and facing constant
                challenges. Through persistence, I developed a deep love for the
                craft and a mindset of continuous growth.
              </p>
            </div>

            {/* What I Love Doing */}
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg text-accent text-xl">
                  💻
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                  What I Love
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Crafting UIs and solving real-world problems with code. I live
                for the "aha!" moment when a complex feature finally works.
              </p>
            </div>

            {/* Hobbies */}
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg text-accent text-xl">
                  🏀
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                  Hobbies
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Traveling and sports keep me balanced. Exploring new places is
                my primary source of creative inspiration.
              </p>
            </div>

            {/* Personality - Spans 2 columns */}
            <div className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/20 rounded-lg text-accent text-xl">
                  🧠
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                  Personality
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg italic">
                "I am a curious learner and a consistent problem solver. I
                believe that hard work isn't just about hours—it's about the
                mindset of improving every single day."
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;

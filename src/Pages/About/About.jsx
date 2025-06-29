import React from "react";
import { MdDeveloperMode } from "react-icons/md";
import { TbMoodCrazyHappyFilled } from "react-icons/tb";

const About = () => {
  return (
    <section className="w-11/12 mx-auto  space-y-6 py-10 lg:py-16" id="about">
      <div data-aos="fade-up" className="text-center">
        <span className="font-semibold text-accent">Know Me More</span>
        <h2 className="text-2xl lg:text-4xl font-bold text-center uppercase text-primary">
          About Me
        </h2>
      </div>

      <section data-aos="fade-up" className="py-6 bg-secondary-content rounded-lg">
        <div className="grid grid-cols-1 px-4 mx-auto md:grid-cols-2 ">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="">
              <span className="text-4xl font-bold">
                I'm <span className="text-accent">Nurislam Hasan Tonmoy</span> —
                A web developer{" "}
                <span className="text-3xl font-bold text-gray-400">
                  with a strong focus on building clean, modern, and responsive
                  web applications.
                </span>
              </span>{" "}
            </h1>
          </div>

          <div className="space-y-3">
            {/* My programming journey*/}
            <div >
              <div className="flex gap-3 mb-1">
                {/* <MdDeveloperMode size={25} /> */}
                <p className="text-lg text-accent font-medium leading-snug">
                  My programming journey :
                </p>
              </div>
              <div className="space-y-2">
                <p className="leading-snug">
                  My programming journey started at 01 - January - 2025. It
                  wasn't easy — I had to invest a lot of time and effort, face
                  challenges, and continuously push myself. But through patience
                  and persistence, I developed a deep love for web development
                  and never stopped learning.
                </p>
              </div>
            </div>

            {/* enjoy */}
            <div >
              <div className="flex gap-3 mb-1">
                {/* <TbMoodCrazyHappyFilled size={25} /> */}
                <p className="text-lg font-medium text-accent leading-snug">What I Love Doing :</p>
              </div>
              <div className="space-y-2">
                <p className="leading-snug">
                  I truly enjoy crafting user interfaces, implementing exciting
                  features, and exploring new technologies that make the web
                  better. Solving real problems with code and building useful,
                  interactive experiences is what drives me.
                </p>
              </div>
            </div>
            {/* hobbies */}
            <div >
              <div className="flex gap-3 mb-2">
                {/* <TbMoodCrazyHappyFilled size={25} /> */}
                <p className="text-lg font-medium text-accent leading-snug">Hobbies :</p>
              </div>
              <div className="space-y-1">
                <p className="leading-snug">
                  Outside of coding, I love traveling and playing sports.
                  Exploring new places and staying active helps me stay
                  creative, focused, and balanced.
                </p>
              </div>
            </div>
            {/* Personality */}
            <div >
              <div className="flex gap-3 mb-2">
                {/* <TbMoodCrazyHappyFilled size={25} /> */}
                <p className="text-lg text-accent font-medium leading-snug">
                  Personality :
                </p>
              </div>
              <div className="space-y-1">
                <p className="leading-snug">
                  I’m a curious learner, a problem solver, and a person who
                  believes in growth through hard work and consistency. Whether
                  it’s a challenging bug or a new concept, I face it with a
                  mindset to learn and improve every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;

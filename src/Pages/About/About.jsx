import React from "react";
import aboutImage from "../../assets/about-image.jpg";

const About = () => {
  return (
    <section id="about" data-aos="fade-up" className="mb-8 md:my-40">
      <div className="w-11/12 mx-auto">
        <div className="mb-10 max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-accent/90">
            KNOW ME MORE
          </span>
          <h2 className="mt-5 text-5xl md:text-6xl font-black tracking-tight text-white">
            About Me
          </h2>
          <p className="mt-5 mx-auto max-w-2xl text-xl leading-relaxed text-gray-300">
            A Full Stack Developer building scalable, modern, and
            high-performance web applications from front to back.
          </p>
        </div>

        <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr] items-center">
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl backdrop-blur-sm transition hover:border-accent/40">
                <h3 className="text-xl font-semibold text-white">
                  My programming journey
                </h3>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  My journey started on{" "}
                  <span className="text-white font-medium">
                    January 1st, 2024
                  </span>
                  . It wasn't easy—investing high effort and facing constant
                  challenges. Through persistence, I developed a deep love for
                  the craft and a mindset of continuous growth.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl backdrop-blur-sm transition hover:border-accent/40">
                <h3 className="text-xl font-semibold text-white">
                  What I Love
                </h3>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  Crafting UIs and solving real-world problems with code. I live
                  for the "aha!" moment when a complex feature finally works.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl backdrop-blur-sm transition hover:border-accent/40">
                <h3 className="text-xl font-semibold text-white">Hobbies</h3>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  Traveling and sports keep me balanced. Exploring new places is
                  my primary source of creative inspiration.
                </p>
              </div>
              <div className="rounded-[2rem] border border-accent/20 bg-gradient-to-br from-accent/10 to-transparent p-8 shadow-xl backdrop-blur-sm transition hover:border-accent/40">
                <h3 className="text-xl font-semibold text-white">
                  Personality
                </h3>
                <p className="mt-4 text-gray-300 leading-relaxed italic">
                  "I am a curious learner and a consistent problem solver. I
                  believe that hard work isn't just about hours—it's about the
                  mindset of improving every single day."
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-white/5 pointer-events-none"></div>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl bg-slate-900">
              <img
                src={aboutImage}
                alt="About visual"
                className="h-[550px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute left-6 bottom-6 flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent text-2xl">
                <span>⌘</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                  CREATIVE PROCESS
                </p>
                <p className="text-white text-lg font-semibold">
                  Designing elegant digital experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

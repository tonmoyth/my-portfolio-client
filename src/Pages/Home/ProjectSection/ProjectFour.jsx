import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import {
  SiJavascript,
  SiReact,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiNodedotjs,
  SiHtml5,
  SiTailwindcss,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";
import ButtonOne from "../../../Components/Buttons/ButtonOne";
import { Link } from "react-router";

const ProjectFour = ({ open }) => {
  const projectImages = [
    "https://i.ibb.co.com/S7dH5vbH/Screenshot-2026-04-07-173050.png",
    "https://i.ibb.co.com/M5xMLVYf/Screenshot-2026-04-07-173116.png",
    "https://i.ibb.co.com/9mScLtc0/Screenshot-2026-04-07-173128.png",
  ];
  return (
    <section data-aos="fade-up" id="project" className="pb-10 lg:pb-12">
      <div className="container md:w-11/12 p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="block gap-3 mx-auto sm:max-w-full bg-secondary-content rounded-lg group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12">
          <div className="w-full h-64 sm:h-full lg:col-span-7 overflow-hidden rounded">
            <Swiper
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              navigation={true}
              modules={[Navigation, Autoplay]}
              className="h-full"
            >
              {projectImages.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`Project Slide ${idx}`}
                    className="object-cover w-full h-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Project Info */}
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold text-accent sm:text-4xl">
              Travel Guide
            </h3>
            <p>
              A comprehensive online community portal where travelers can share,
              discover, and purchase travel guides. Built with Next.js, this
              platform connects passionate travelers with authentic destination
              experiences through user-generated content, community voting, and
              expert moderation.
            </p>
            {/* Feature */}
            <div>
              <strong className="text-accent">Feature </strong>
              <ul className="list-disc pl-4">
                <li>
                  Create, manage, and publish travel guides with draft saving
                  and rich content support.
                </li>
                <li>
                  Role-based approval workflow with status control (Draft →
                  Review → Approved/Rejected).
                </li>
                <li>
                  Secure payment integration for premium guides with seamless
                  purchase experience.
                </li>
              </ul>
            </div>
            {/* Technology */}
            <div>
              <strong className="text-accent">Technology </strong>
              <div className="flex flex-wrap gap-3 mt-4 text-2xl text-primary">
                <SiNextdotjs title="Next.js" />
                <SiTailwindcss title="Tailwind CSS" className="text-cyan-500" />
                <SiExpress title="Express.js" />
                <SiNodedotjs title="Node.js" className="text-green-500" />
                <SiPrisma title="Prisma" className="text-indigo-500" />
                <SiPostgresql title="PostgreSQL" className="text-blue-600" />
              </div>
            </div>
            {/* button */}
            <div>
              <div className="flex flex-wrap gap-2 md:gap-6 mt-4 text-2xl text-primary">
                <Link
                  to="https://travel-guide-client.vercel.app/"
                  target="_blank"
                >
                  <ButtonOne level="Live"></ButtonOne>
                </Link>
                <Link
                  to="https://github.com/tonmoyth/travel-guide-client"
                  target="_blank"
                >
                  <ButtonOne level="GitHub"></ButtonOne>
                </Link>

                <ButtonOne onClick={open} level="Details"></ButtonOne>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectFour;

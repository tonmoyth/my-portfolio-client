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
} from "react-icons/si";
import ButtonOne from "../../../Components/Buttons/ButtonOne";
import { Link } from "react-router";

const ProjectTwo = ({ open }) => {
  const projectImages = [
    "https://i.ibb.co.com/21xpfGpB/Screenshot-2025-12-25-222100.png",
    "https://i.ibb.co.com/9mfq2J1j/Screenshot-2025-12-25-222330.png",
    "https://i.ibb.co.com/rRPFWyLj/Screenshot-2025-12-25-224019.png",
    "https://i.ibb.co.com/zTHyvD3g/Screenshot-2025-12-25-224420.png",
  ];
  return (
    <section data-aos="fade-up" id="project">
      
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
              StudyNest
            </h3>
            <p>
              A platform where students join courses and teachers create and
              share their knowledge.
            </p>
            {/* Feature */}
            <div>
              <strong className="text-accent">Feature </strong>
              <ul className="list-disc pl-4">
                <li>
                  Users are assigned roles (admin, teacher, student) with
                  restricted access to dashboards.
                </li>
                <li>
                  Teachers can add/update/delete classes, and admin approval
                  controls visibility on the platform.{" "}
                </li>
                <li>
                  Students can apply to become teachers. Admins can approve or
                  reject teacher requests.
                </li>
              </ul>
            </div>
            {/* Technology */}
            <div>
              <strong className="text-accent">Technology </strong>
              <div className="flex flex-wrap gap-3 mt-4 text-2xl">
                <SiJavascript title="JavaScript" className="text-yellow-500" />
                <SiReact title="React.js" className="text-cyan-400" />
                <SiExpress title="Express.js" className="text-gray-700" />
                <SiMongodb title="MongoDB" className="text-green-600" />
                <SiFirebase title="Firebase" className="text-yellow-600" />
                <SiNodedotjs title="Node.js" className="text-green-700" />
              </div>
            </div>
            {/* button */}
            <div>
              <div className="flex flex-wrap gap-2 md:gap-6 mt-4 text-2xl text-primary">
                <Link to="https://study-next-3a546.web.app/" target="_blank">
                  <ButtonOne level="Live"></ButtonOne>
                </Link>
                <Link
                  to="https://github.com/tonmoyth/StudyNest-client"
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

export default ProjectTwo;

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
} from "react-icons/si";
import ButtonOne from "../../../Components/Buttons/ButtonOne";
import { Link } from "react-router";

const ProjectThree = ({ open }) => {
  const projectImages = [
    "https://i.ibb.co.com/whXFDz0v/bannar.png",
    "https://i.ibb.co.com/BVC7KJ06/Screenshot-2025-12-25-224842.png",
    "https://i.ibb.co.com/jZW8VKt6/Screenshot-2025-12-25-224914.png",
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
              Zentrix Technology Limited.
            </h3>
            <p>
              Modern company website showcasing services and products with
              interactive engaging design.
            </p>
            {/* Feature */}
            <div>
              <strong className="text-accent">Feature </strong>
              <ul className="list-disc pl-4">
                <li>
                  Displays all services provided by the company in a clean and
                  organized layout.
                </li>
                <li>
                  Showcases products with interactive sections and detailed
                  descriptions for better user understanding.
                </li>
                <li>
                  Eye catching UI design with smooth animations for engaging and
                  modern user experience.
                </li>
              </ul>
            </div>
            {/* Technology */}
            <div>
              <strong className="text-accent">Technology </strong>
              <div className="flex flex-wrap gap-3 mt-4 text-2xl text-primary">
                <SiHtml5 title="HTML5" className="text-orange-600" />
                <SiTailwindcss title="Tailwind CSS" className="text-cyan-500" />
                <SiJavascript title="JavaScript" className="text-yellow-400" />
                <SiReact title="React.js" className="text-blue-500" />
                <SiFirebase title="Firebase" className="text-yellow-500" />
              </div>
            </div>
            {/* button */}
            <div>
              <div className="flex flex-wrap gap-2 md:gap-6 mt-4 text-2xl text-primary">
                <Link to="https://zentrixltd.com/" target="_blank">
                  <ButtonOne level="Live"></ButtonOne>
                </Link>
                <Link
                  to="https://github.com/kazitoha/zentrix_ltd_website"
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

export default ProjectThree;

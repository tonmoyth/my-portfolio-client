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
    "https://i.ibb.co/ywtXJcd/Screenshot-56.png",
    "https://i.ibb.co/mVbzzF6q/Screenshot-57.png",
    "https://i.ibb.co/yBnZzBGW/Screenshot-58.png",
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
              EventNext
            </h3>
            <p>
              Discover and explore local events like workshops, sports, and art
              shows.
            </p>
            {/* Feature */}
            <div>
              <strong className="text-accent">Feature  </strong>
              <ul className="list-disc pl-4">
                <li>
                  Users can easily discover upcoming local events categorized by
                  type — such as conferences, workshops, sports, and art
                  exhibitions.
                </li>
                <li>
                  Each event has a dedicated page that provides detailed
                  information including event description, date & time.
                </li>
                <li>
                  Users can register and log in to save their favorite events.
                </li>
              </ul>
            </div>
            {/* Technology */}
            <div>
              <strong className="text-accent">Technology  </strong>
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
                <Link
                  to="https://event-nest-e98b6.web.app/"
                  target="_blank"
                >
                  <ButtonOne level="Live"></ButtonOne>
                </Link>
                <Link
                  to="https://github.com/tonmoyth/Event-Nest"
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

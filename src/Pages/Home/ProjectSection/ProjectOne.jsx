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

const ProjectSection = ({open}) => {
  const projectImages = [
    "https://i.ibb.co/zWy7PH2Y/Screenshot-47.png",
    "https://i.ibb.co/CLGn7y9/Screenshot-48.png",
    "https://i.ibb.co/fVVRnsxp/Screenshot-49.png",
    "https://i.ibb.co/PvRjqFQw/Screenshot-50.png",
  ];

  return (
    <section id="project" className="pb-10 lg:pb-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold uppercase text-primary">
          My Projects
        </h2>
      </div>

      <div className="container w-11/12 p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="block max-w-sm gap-3 mx-auto sm:max-w-full bg-secondary-content rounded-lg group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12">
          <div className="w-full h-64 sm:h-96 lg:col-span-7 overflow-hidden rounded">
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
              BookNest
            </h3>
            <p>
              A seamless hotel booking app with real-time availability, ratings
              & secure auth.
            </p>
            {/* Feature */}
            <div>
              <strong className="text-accent">Feature : </strong>
              <ul>
                <li>Room Discovery & Booking</li>
                <li>Users can filter rooms based on their budget.</li>
                <li>
                  Users can read and post reviews after completing a stay.
                </li>
              </ul>
            </div>
            {/* Technology */}
            <div>
              <strong className="text-accent">Technology : </strong>
              <div className="flex flex-wrap gap-3 mt-4 text-2xl text-primary">
                <SiJavascript title="JavaScript" />
                <SiReact title="React.js" />
                <SiExpress title="Express.js" />
                <SiMongodb title="MongoDB" />
                <SiFirebase title="Firebase" />
                <SiNodedotjs title="Node.js" />
              </div>
            </div>
            {/* button */}
            <div>
              <div className="flex flex-wrap gap-6 mt-4 text-2xl text-primary">
                <Link to='https://hotel-booking-3a439.web.app/' target="_blank">
                  <ButtonOne level="Live"></ButtonOne>
                </Link>
                <Link to='https://github.com/tonmoyth/BookNest-Client' target="_blank">
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

export default ProjectSection;

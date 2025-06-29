import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="pb-10 lg:pb-12 space-y-6 px-4 md:w-11/12 mx-auto"
    >
      <h2 data-aos="fade-up" className="text-2xl lg:text-4xl font-bold text-center text-primary">
        Education
      </h2>

      <div className="grid grid-cols-1 overflow-hidden lg:grid-cols-2  gap-6">
        {/* ssc */}
        <div data-aos="fade-right" className="bg-secondary-content transition duration-300 transform   hover:scale-105 group  shadow-md rounded-xl p-6 border-accent">
          <p className="mt-2 text-sm font-bold text-accent">2015 - 2020</p>
          <h3 className="text-2xl font-semibold text-primary mb-1">
            Secondary School Certificate (SSC)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            Bhabanipur High School
          </p>
          <p className="text-gray-500">Bhabanipur, Gazipur, Dhaka, Bangladesh</p>
        </div>
        {/* Diploma */}
        <div data-aos="fade-left"  className="bg-secondary-content transition duration-300 transform  shadow-sm hover:scale-105 group rounded-xl p-6 ">
          <p className="mt-2 text-sm font-bold text-accent">2021 - 2025</p>
          <h3 className="text-2xl font-semibold text-primary mb-1">
            Polytechnic in Computer Engineering
          </h3>
          <p className="text-primary font-medium">
            Model Institute of Science and Technology
          </p>
          <p className="text-gray-400">Gazipur, Dhaka, Bangladesh</p>
        </div>

        
      </div>
    </section>
  );
};

export default Education;

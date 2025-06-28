import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="pb-10 lg:pb-12 space-y-6 px-4 w-11/12 mx-auto"
    >
      <h2 className="text-4xl font-bold text-center text-primary">Education</h2>

      <div className="  gap-6">
        {/* Diploma */}
        <div className="bg-secondary-content transition duration-300 transform  shadow-sm hover:scale-105 group rounded-xl p-6 ">
          <p className="mt-2 text-sm font-bold text-accent">2021 - 2025</p>
          <h3 className="text-2xl font-semibold text-primary mb-1">
            Polytechnic in Computer Engineering
          </h3>
          <p className="text-primary font-medium">
            Model Institute of Science and Technology
          </p>
          <p className="text-gray-400">Gazipur, Dhaka, Bangladesh</p>
          
        </div>

        {/* <div className="bg-secondary-content transition duration-300 transform   hover:scale-105 group  shadow-md rounded-xl p-6 border-l-4 border-accent">
          <p className="mt-2 text-sm font-bold text-accent">2021 - 2025</p>
          <h3 className="text-2xl font-semibold text-primary mb-1">
            Diploma in Computer Science
          </h3>
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            Model Institute of Science and Technology
          </p>
          <p className="text-gray-500">Gazipur, Dhaka</p>
          
        </div> */}
       
      </div>
    </section>
  );
};

export default Education;

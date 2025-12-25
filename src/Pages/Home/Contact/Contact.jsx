import React, { useRef, useState } from "react";
import ButtonOne from "../../../Components/Buttons/ButtonOne";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FiPhone, FiMail } from "react-icons/fi";
import { Link } from "react-router";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm("service_764q9jk", "template_dqglg2j", form.current, {
        publicKey: "LtPEibA9AC0kYHFTt",
      })
      .then(
        () => {
          setLoading(false);
          form.current.reset();
          Swal.fire({
            title: "Successfully",
            text: "Your message has been sent successfully. I will get back to you shortly.",
            icon: "success",
          });
        },
        () => {
          setLoading(false);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later or contact me via email.",
          });
        }
      );
  };
  return (
    <section id="contact" className="pb-10 mb-40 lg:pb-12 space-y-6">
      <div data-aos="fade-up" className="text-center">
        <span className="font-semibold text-accent">Contact</span>
        <h2 className="text-2xl lg:text-4xl font-bold  uppercase text-primary">
          Contact with me
        </h2>
      </div>
      <div className="grid overflow-hidden md:w-11/12 grid-cols-1 gap-4 mx-auto md:grid-cols-2 ">
        <section data-aos="fade-right" className=" text-primary  rounded-xl ">
          <div className="w-11/12 mx-auto ">
            <h2 className="text-2xl lg:text-4xl font-bold mb-2">
              Let’s talk about your project
            </h2>
            <p className="mb-6">
              I’m currently available for new projects. Contact me to discuss
              your web development needs.
            </p>

            <div className="space-y-4 text-left">
              <p className="flex items-center gap-3">
                <IoLocationSharp className="text-accent text-xl" />
                Bhabanipur, Gazipur, Dhaka, Bangladesh
              </p>
              <p className="flex items-center gap-3">
                <FiPhone className="text-accent text-xl" />
                +880 1407641417
              </p>
              <p className="flex items-center gap-3">
                <FiMail className="text-accent text-xl" />
                tonmoynht1930@gmail.com
              </p>
            </div>

            <div className="mt-6 flex  gap-4 text-2xl">
              <Link
                to="https://www.facebook.com/nurislamhasantonmoyth"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="https://github.com/tonmoyth"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                <FaGithub />
              </Link>
              <Link
                to="https://www.linkedin.com/in/nurislam-hasan-tonmoy-88b1bb368/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </section>
        <form data-aos="fade-left"
          ref={form}
          onSubmit={sendEmail}
          className="flex w-11/12 mx-auto flex-col p-6 bg-secondary-content space-y-6 rounded-lg"
        >
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              required
              name="from_name"
              placeholder="Name"
              className="block w-full border p-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 "
            />
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input
              type="email"
              required
              name="from_email"
              placeholder="Email"
              className="block w-full p-2 rounded-md border shadow-sm focus:ring focus:ring-opacity-75 "
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              rows="3"
              required
              name="message"
              className="block p-2 w-full border rounded-md focus:ring focus:ring-opacity-75 "
            ></textarea>
          </label>
          <div>
            <ButtonOne loading={loading} level="Send"></ButtonOne>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

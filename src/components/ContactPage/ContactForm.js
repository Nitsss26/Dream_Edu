"use client"
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import image from "@/constant/Images/image";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import Image from "next/image";

const initValues = {
  user_name: "",
  user_email: "",
  user_contact: "",
  user_service: "",
  message: "",
};
const initState = { values: initValues };

// Define service options
const serviceOptions = [
  { value: "", label: "Select" },
  { value: "K-12 Education", label: "K-12 Education" },
  { value: "Live Tutoring & Doubt Solving", label: "Live Tutoring & Doubt Solving" },
  { value: "Educational Video Creation", label: "Educational Video Creation" },
  { value: "SEO Based Content", label: "SEO Based Content" },
  { value: "Books Writing", label: "Books Writing" },
  { value: "Test Creation", label: "Test Creation" },
  { value: "Translation", label: "Translation" },
  { value: "Higher Level Education", label: "Higher Level Education" },
  { value: "Accessibility Services", label: "Accessibility Services" },
  { value: "Localization Services", label: "Localization Services" },
];

export default function ContactForm({ heading, color }) {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jzabqel', 'template_wnijcki', form.current, {
        publicKey: 'xV5ImFLhCL8Hri6ps',
      })
      .then(
        () => {
          console.log('Message Sent!');
          setState({ values: initValues });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const [state, setState] = useState(initState);
  const { values } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  return (
    <section className={` ${color}`} >
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-12 xs:py-20 md:py-32 lg:px-5 xl:px-0">
        <div className="my-auto sm: me-8">
          <Image src={image.getInTouch} alt="contact Us" />
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="space-y-12">
            <div className="pb-6">
              <h2
                className="text-3xl primary-heading leading-7 capitalize pb-2 text-gray-900"
                dangerouslySetInnerHTML={{ __html: heading }}
              />
              <div className="flex items-center gap-x-4 mt-4 text-sm leading-6">
                <a
                  className="text-sm text-gray-600 text-bold flex items-center justify-center md:justify-start gap-2"
                  href="tel:9536286054"
                >
                  <span className="text-green-600">
                    <FaPhoneSquareAlt />
                  </span>{" "}
                  +91-9536286054
                </a>
                <a
                  className="text-sm text-gray-600 text-sbold flex items-center justify-center md:justify-start gap-2"
                  href="mailto:infodreamedu.com"
                >
                  <span className="text-[#EA4335]">
                    <FaEnvelope />
                  </span>{" "}
                  infodreamedu.com
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="user_name"
                      id="name"
                      value={values.user_name}
                      onChange={handleChange}
                      autoComplete="name"
                      className="block w-full pl-3 pr-10 py-2 text-base shadow-sm placeholder:text-gray-400 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-indigo-200"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="user_email"
                      type="email"
                      value={values.user_email}
                      onChange={handleChange}
                      autoComplete="email"
                      className="block w-full pl-3 pr-10 py-2 text-base shadow-sm placeholder:text-gray-400 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-indigo-200"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Number
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="user_contact"
                      id="number"
                      value={values.user_contact}
                      onChange={handleChange}
                      className="block w-full pl-3 pr-10 py-2 text-base shadow-sm placeholder:text-gray-400 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-indigo-200"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="form-services"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    What are your requirements?
                  </label>
                  <div className="mt-2">
                    <select
                      id="form-services"
                      name="user_service"
                      value={values.user_service}
                      onChange={handleChange}
                      className="block w-full pl-3 pr-10 py-2 text-base shadow-sm placeholder:text-gray-400 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-indigo-200"
                    >
                      {serviceOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      cols="50"
                      className="block w-full pl-3 pr-10 py-2 text-base shadow-sm placeholder:text-gray-400 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-indigo-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-start">
            <button
              type="submit"
              disabled={!values.user_name || !values.user_email || !values.user_contact || !values.user_service || !values.message}
              onClick={sendEmail}
              className="rounded-md bg-indigo-700 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}


import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
const ContactSection = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hso6fhs",
        "template_tm2cqri",
        form.current,
        "E2AYNXWTk5K625WAj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-gray-100">
      <div className="md:w-full md:pt-0 py-12 md:pb-24 px-4 sm:px-6 lg:px-7">
        <div className="text-center md:text-left">
          <div className="md:relative md:top-32">
            <h2 className="text-2xl font-semibold text-gray-900 uppercase">Contact Us</h2>
            <p className="mt-3 text-lg text-gray-500">
              Fill out the form below and we will get back to you as soon as
              possible.
            </p>
          </div>
          <div className="mt-12 md:flex justify-end gap-8">
            <div className="mb-2">
              <h3 className="text-lg font-medium text-gray-900 mb-2 underline">
                Address
              </h3>
              <p className="text-gray-700">123 Main Street, Suite 200</p>
              <p className="text-gray-700">Anytown, USA 12345</p>
            </div>
            <div className="mb-2">
              <h3 className="text-lg font-medium text-gray-900 mb-2 underline">Phone</h3>
              <p className="text-gray-700">(123) 456-7890</p>
            </div>
            <div className="mb-2">
              <h3 className="text-lg font-medium text-gray-900 mb-2 underline">Email</h3>
              <p className="text-gray-700">info@company.com</p>
            </div>
            <div className="mb-2">
              <h3 className="text-lg font-medium text-gray-900 mb-2 underline">
                Website
              </h3>
              <p className="text-gray-700">www.website.com</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <form
            action="#"
            method="POST"
            className="mt-8 sm:w-1/2 mx-auto"
            onSubmit={sendEmail}
            ref={form}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  required
                  className="mt-1 block w-full shadow-md sm:text-sm border-gray-300 rounded-md p-2 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  required
                  className="mt-1 block w-full shadow-md sm:text-sm border-gray-300 rounded-md p-2 focus:outline-none"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  className="mt-1 block w-full shadow-md sm:text-sm border-gray-300 rounded-md p-2 focus:outline-none"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="mt-1 block w-full shadow-md sm:text-sm border-gray-300 rounded-md p-2 focus:outline-none"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 block w-full shadow-md sm:text-sm border-gray-300 rounded-md p-2 h-48 resize-none focus:outline-none"
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-md text-sm font-medium rounded-full text-white bg-[#6927ff] hover:bg-indigo-700 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div className="md:-mt-32 md:w-1/2 md:mx-auto hidden md:flex">
            <Image
              src="/contact.svg"
              alt="Image"
              className="w-full"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

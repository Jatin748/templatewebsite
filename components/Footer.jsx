import Link from "next/link";
import React from "react";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bottom-0 bg-[#421b9b] w-full text-white py-4 z-50 overflow-y-auto">
      {/* top-footer-start */}
      <div className="flex">
        <div className="container mx-auto flex flex-wrap items-center justify-center lg:justify-between sm:p-8 md:p-12 lg:p-16 flex-row lg:flex-nowrap">
          {/* top-footer-left-start */}
          <div className=" p-4 flex flex-col lg:items-start w-full">
            <span className="uppercase text-sm max-w-max font-thin tracking-[1px]">
              get an easy quote
            </span>
            <h2 className="text-2xl md:text-4xl font-bold">
              Sign Up For Web Hosting Today!
            </h2>
          </div>
          {/* top-footer-left-end */}

          {/* top-footer-middle-start */}
          <div className="container flex md:mx-7 items-center lg:gap-6">
            <div className="lg:w-1/3 p-4 flex flex-col items-start ">
              <span className="text-sm max-w-max font-thin uppercase tracking-[1px]">
                Starting at only
              </span>
              <h3 className="md:text-5xl text-3xl font-bold">
                &#36;4.50<span className="text-sm font-thin">/mo</span>
              </h3>
            </div>
            {/* top-footer-middle-end */}

            {/* top-footer-right-start */}
            <div className=" w-2/3 lg:w-1/3 p-4 flex flex-col lg:items-start">
              <Link
                className="text-[13px] md:text-[16px] bg-[#6927ff] rounded-full text-white font-medium text-center flex px-7 md:px-8 py-3 md:py-4 justify-center shadow-md"
                href="#Hosting"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col justify-center mt-8 mr-12 md:mt-10 md:mr-32">
          <div className="flex flex-col space-y-5 md:space-y-6">
            <Link href="#">
              <AiOutlineTwitter size={26} />
            </Link>
            <Link href="#">
              <AiOutlineInstagram size={26} />
            </Link>
            <Link href="#">
              <FaFacebookF size={26} />
            </Link>
          </div>
        </div>
        {/* top-footer-right-end */}
      </div>
      {/* top-footer-end */}

      {/* bottom-footer-start */}
      <div className="flex flex-col justify-center items-center text-center text-gray-200 space-x-4">
        <span>Copyright &#169;2023 All rights reserved </span>
        <span>- Remake by Jatin</span>
      </div>
      {/* bottom-footer-end */}
    </footer>
  );
};

export default Footer;

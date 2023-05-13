import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const Domain = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const divVariants = {
    hidden: {
      x: 250,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.8,
      },
    },
  };
  return (
    <div className="lg:flex bg-white items-center justify-around p-10 lg:p-20 md:p-20">
      <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-0 lg:mb-0 gap-1">
        <motion.h2
          className="font-bold text-xl lg:text-2xl md:text-2xl uppercase mb-0"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Search your domain name
        </motion.h2>
        <motion.span
          className=" text-center text-sm md:text-base text-[rgba(0,0,0,0.7)]"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Lorem ipsum dolor sit amet consectetur assumenda
        </motion.span>
      </div>
      <motion.div
        className="md:bg-[#6927ff] lg:bg-[#6927ff] lg:rounded-tl-[50px] lg:rounded-br-[50px] flex lg:w-1/2 md:w-1/2 justify-center md:p-12 shadow-sm flex-col"
        variants={divVariants}
        animate="visible"
        initial="hidden"
      >
        <div className="flex mb-8 md:mb-4">
          <input
            type="text"
            placeholder="Enter domain name.."
            className="rounded-tl-md rounded-bl-md focus:outline-slate-400 w-11/12 p-3 md:p-5 lg:p-5 shadow-sm border"
          />
          <select className="block bg-white px-2 lg:px-4 md:px-4 py-2 border shadow-sm leading-tight focus:bg-gray-100 focus:outline-slate-300">
            <option>.com</option>
            <option>.net</option>
            <option>.biz</option>
            <option>.co</option>
            <option>.me</option>
            <option>.io</option>
          </select>
          <Link
            className="text-white bg-[#38d39f] py-2 px-5 md:px-20 lg:px-20 rounded-tr-md rounded-br-md max-w-max items-center flex shadow-sm hover:bg-[#20c48d] "
            href="#"
          >
            Search
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:flex text-center md:justify-evenly text-xs md:text-white text-black border md:border-hidden rounded md:bg-transparent bg-slate-200">
          <span className=" mx-4 p-1">
            .com<span className="text-[#38d39f] text-base px-1">&#36;9.75</span>
          </span>
          <span className=" mx-4 p-1">
            .net<span className="text-[#38d39f] text-base px-1">&#36;9.50</span>
          </span>
          <span className=" mx-4 p-1">
            .biz<span className="text-[#38d39f] text-base px-1">&#36;8.95</span>
          </span>
          <span className=" mx-4 p-1">
            .co<span className="text-[#38d39f] text-base px-1">&#36;7.80</span>
          </span>
          <span className=" mx-4 p-1">
            .me<span className="text-[#38d39f] text-base px-1">&#36;7.95</span>
          </span>
          <span className=" mx-4 p-1">
            .io<span className="text-[#38d39f] text-base px-1">&#36;9.95</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Domain;

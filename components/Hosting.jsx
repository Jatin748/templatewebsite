import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const MyComponent = () => {
  const buttonVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      ease: "easeInOut",
    },
    hover: {
      scale: 1.1,
    },
  };
  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const linkVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      // scale: 1,
    },
  };
  const pricingVariants = {
    hidden: {
      x: 1000,
    },
    visible: {
      x: 0,
    },
    hover: {
      scale: 1.05,
    },
  };
  return (
    <>
      {/* top-hosting-div-start */}
      <div className="flex flex-col justify-center items-center p-16">
        <motion.h1
          className="text-5xl font-medium mb-10 text-center"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hosting Prices
        </motion.h1>
        <div className="flex flex-wrap md:flex-nowrap">
          <motion.div
            className="mx-4 my-4 flex flex-col items-center w-full sm:w-1/3"
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            // whileHover="hover"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[#6927ff] rounded-full h-32 w-32 flex items-center justify-center mb-6 md:mb-2">
              <Image
                src="/free_icon_3-white.svg"
                alt="Icon"
                className="md:mb-2"
                width={70}
                height={70}
              />
            </div>
            <h2 className="text-2xl font-medium text-center my-2">
              Choose Your Plan
            </h2>
            <p className="text-gray-500 text-center text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </motion.div>
          <motion.div
            className="mx-4 my-4 flex flex-col items-center w-full sm:w-1/3"
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            // whileHover="hover"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-[#6927ff] rounded-full h-32 w-32 flex items-center justify-center mb-6 md:mb-2">
              <Image
                src="/free_icon_2-white.svg"
                alt="Icon"
                className="md:mb-2"
                width={70}
                height={70}
              />
            </div>
            <h2 className="text-2xl font-medium text-center my-2">
              Create Your Account
            </h2>
            <p className="text-gray-500 text-center text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </motion.div>
          <motion.div
            className="mx-4 my-4 flex flex-col items-center w-full sm:w-1/3"
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            // whileHover="hover"
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-[#6927ff] rounded-full h-32 w-32 flex items-center justify-center mb-6 md:mb-2">
              <Image
                src="/free_icon_1-white.svg"
                alt="Icon"
                className="md:mb-2"
                width={70}
                height={70}
              />
            </div>
            <h3 className="text-2xl font-medium text-center my-2">Launch</h3>
            <p className="text-gray-500 text-center text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </motion.div>
        </div>
      </div>
      {/* top-hosting-div-end */}

      {/* bottom-hosting-div-start */}
      <motion.div className="flex flex-col md:flex-row items-center justify-center md:justify-between rounded-lg p-6 md:p-8 lg:p-28 lg:pt-3 mb-10 md:mb-0">
        {/* <!-- Pricing card 1 --> */}
        <motion.div
          className="text-center shadow-2xl p-10 bg-white rounded-lg"
          variants={pricingVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whi
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
        >
          <h3 className=" text-base font-semibold my-2 uppercase text-[#0000004d] tracking-[2px]">
            Free
          </h3>
          <span className="text-5xl font-medium">
            &#36;0<span className="font-normal text-base">/mo</span>
          </span>
          <p className="text-gray-600 my-4">Student hosting features</p>
          <div className="flex flex-col items-center justify-center mb-4">
            <p className="flex font-semibold">
              150 GB
              <span className="text-gray-400 font-normal mx-2">Bandwidth</span>
            </p>
            <p className="flex font-semibold">
              100 GB
              <span className="text-gray-400 font-normal mx-2">Storage</span>
            </p>
            <p className="flex font-semibold">
              &#36;1.00 / GB
              <span className="text-gray-400 font-normal mx-2">Overages</span>
            </p>
          </div>
          <p className="mb-4">Enjoy all the features</p>
          <motion.button
            className="bg-[#6927ff] text-white py-2 px-4 w-full rounded-full shadow-xl"
            variants={buttonVariants}
            animate="visible"
            initial="hidden"
            whileHover="hover"
          >
            Choose Plan
          </motion.button>
        </motion.div>
        {/* <!-- Pricing card 2 --> */}
        <motion.div
          className="text-center shadow-2xl p-10 mt-8 md:mt-0 bg-white rounded-lg"
          variants={pricingVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ ease: "easeIn", duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-base font-semibold my-2 uppercase text-[#0000004d] tracking-[2px]">
            Startup
          </h3>
          <span className="text-5xl font-medium">
            &#36;19<span className="font-normal text-base">/mo</span>
          </span>
          <p className="text-gray-600 my-4">Business hosting features</p>
          <div className="flex flex-col items-center justify-center mb-4">
            <p className="flex font-semibold">
              450 GB
              <span className="text-gray-400 font-normal mx-2">Bandwidth</span>
            </p>
            <p className="flex font-semibold">
              400 GB
              <span className="text-gray-400 font-normal mx-2">Storage</span>
            </p>
            <p className="flex font-semibold">
              &#36;2.00 / GB
              <span className="text-gray-400 font-normal mx-2">Overages</span>
            </p>
          </div>
          <p className="mb-4">Enjoy all the features</p>
          <motion.button
            className="bg-[#6927ff] text-white py-2 px-4 w-full rounded-full shadow-xl"
            variants={buttonVariants}
            animate="visible"
            initial="hidden"
            whileHover="hover"
          >
            Choose Plan
          </motion.button>
        </motion.div>
        {/* <!-- Pricing card 3 --> */}
        <motion.div
          className="text-center shadow-2xl p-10 mt-8 md:mt-0 bg-white rounded-lg"
          variants={pricingVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ ease: "easeIn", duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-base font-semibold my-2 uppercase text-[#0000004d] tracking-[2px]">
            Premium
          </h3>
          <span className="text-5xl font-medium">
            &#36;49<span className="font-normal text-base">/mo</span>
          </span>
          <p className="text-gray-600 my-4">Premium hosting features</p>
          <div className="flex flex-col items-center justify-center mb-4">
            <p className="flex font-semibold">
              550 GB
              <span className="text-gray-400 font-normal mx-2">Bandwidth</span>
            </p>
            <p className="flex font-semibold">
              500 GB
              <span className="text-gray-400 font-normal mx-2">Storage</span>
            </p>
            <p className="flex font-semibold">
              &#36;5.00 / GB
              <span className="text-gray-400 font-normal mx-2">Overages</span>
            </p>
          </div>
          <p className="mb-4">Enjoy all the features</p>
          <motion.button
            className="bg-[#6927ff] text-white py-2 px-4 w-full rounded-full shadow-xl"
            variants={buttonVariants}
            animate="visible"
            initial="hidden"
            whileHover="hover"
          >
            Choose Plan
          </motion.button>
        </motion.div>
        {/* <!-- Pricing card 4 --> */}
        <motion.div
          className="text-center shadow-2xl p-10 mt-8 md:mt-0 bg-white rounded-lg"
          variants={pricingVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ ease: "easeIn", duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-base font-semibold my-2 uppercase text-[#0000004d] tracking-[2px]">
            Advanced
          </h3>
          <span className="text-5xl font-medium">
            &#36;99<span className="font-normal text-base">/mo</span>
          </span>
          <p className="text-gray-600 my-4">Advanced hosting features</p>
          <div className="flex flex-col items-center justify-center mb-4">
            <p className="flex font-semibold">
              1 TB
              <span className="text-gray-400 font-normal mx-2">Bandwidth</span>
            </p>
            <p className="flex font-semibold">
              1 TB
              <span className="text-gray-400 font-normal mx-2">Storage</span>
            </p>
            <p className="flex font-semibold">
              &#36;10.00 / GB
              <span className="text-gray-400 font-normal mx-2">Overages</span>
            </p>
          </div>
          <p className="mb-4">Enjoy all the features</p>
          <motion.button
            className="bg-[#6927ff] text-white py-2 px-4 w-full rounded-full shadow-xl"
            variants={buttonVariants}
            animate="visible"
            initial="hidden"
            whileHover="hover"
          >
            Choose Plan
          </motion.button>
        </motion.div>
      </motion.div>
      {/* bottom-hosting-div-end */}
    </>
  );
};

export default MyComponent;

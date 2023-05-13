import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const Header = () => {
  const logoVariants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 1.1 },
    },
  };

  const linkVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
    },
    hover: {
      scale: 1.1,
    }
  }

  return (
    //   {/* main-header-start */}
    <header className="p-4 z-50 sticky bg-white top-0 left-0 right-0 border-b-2 overflow-y-auto">
      <nav className="md:flex md:items-center md:justify-between px-14">
        {/* left-side-header-start */}
        <motion.div
          className="font-bold text-[25px] text-center pl-2 md:pl-40 tracking-[1px]"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <Link href="#">CoHost</Link>
        </motion.div>
        {/* left-side-header-end */}

        {/* right-side-header-start */}
        <div className="md:flex justify-end items-center space-x-4 hidden pr-9">
          <ul className="flex space-x-9 font-medium uppercase text-[13px] tracking-[1px] py-[14px] px-[20px] opacity-100">
            <motion.li
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              // whileHover="hover"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link className="hover:text-[#6927ff]" href="#">
                Home
              </Link>
            </motion.li>
            <motion.li
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              // whileHover="hover"
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link className="hover:text-[#6927ff]" href="#Domain">
                Domain
              </Link>
            </motion.li>
            <motion.li
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              // whileHover="hover"
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link className="hover:text-[#6927ff]" href="#Hosting">
                Hosting
              </Link>
            </motion.li>
            <motion.li
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              // whileHover="hover"
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link className="hover:text-[#6927ff]" href="#Contact">
                Contact
              </Link>
            </motion.li>
          </ul>
          <motion.div
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            // whileHover="hover"
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.div
              variants={buttonVariants}
              animate="visible"
              initial="hidden"
              whileHover="hover"
            >
              <Link
                className=" uppercase text-[13px] bg-[#6927ff] px-[20px] py-3 rounded-full text-center text-white font-medium hover:bg-[#5925d3]"
                href="#Hosting"
              >
                Get started
              </Link>
            </motion.div>
          </motion.div>
        </div>
        {/* right-side-header-end */}
      </nav>
    </header>
    //   {/* main-header-end */}
  );
};

export default Header;

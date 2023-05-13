import ContactSection from "@/components/Contact"
import Domain from "@/components/Domain"
import Hosting from "@/components/Hosting"
import Head from "next/head"
import Image from "next/image"
import Link from 'next/link'
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.5, // Change this value to control when the animation triggers
    triggerOnce: true // This ensures that the animation only happens once
  });

  // Set isVisible to true when the target element is in view
  if (inView) {
    setIsVisible(false);
  }

  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        delay: 1.25,
      }
    }
  };

  const buttonVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
      }
    },
    hover: {
      scale: 1.1,
    }
  };

  const sectionVariants = {
    hidden: {
      opacity: 0,
    },
    transition: {
      duration: 0.5,
    }
  }
  return (
    <div className="overflow-x-hidden" ref={ref}>
      <Head>
        <title>Hosting website</title>
        <link rel="shortcut icon" href="/network.png" type="image/x-icon" />
      </Head>
      {/* main-banner-start */}
      <motion.section
        className="flex justify-center items-center"
        id="Home"
        variants={sectionVariants}
        initial='hidden'
        transition='transition'
        animate={isVisible ? { opacity: 1 } : {}}
      >
        <div className="flex flex-col p-12 md:p-28 md:gap-5 max-w-max items-center ">
          <motion.span
            className="text-xs md:text-base text-[#6927ff] uppercase font-bold tracking-[4px] max-w-max"
            variants={textVariants}
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.5, delay: 0.1 }}>isometric hosting</motion.span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 mt-2 max-w-max flex flex-col items-center -space-y-8 md:-space-y-12">
            <motion.span
              variants={textVariants}
              initial='hidden'
              animate='visible'
              transition={{ duration: 0.5, delay: 0.2 }}>
              Design,
            </motion.span>
            <br />
            <motion.span
              variants={textVariants}
              initial='hidden'
              animate='visible'
              transition={{ duration: 0.5, delay: 0.4 }}>
              Development,
            </motion.span>
            <br />
            <motion.span
              variants={textVariants}
              initial='hidden'
              animate='visible'
              transition={{ duration: 0.5, delay: 0.6 }}>
              Hosting
            </motion.span>
          </h1>
          <motion.p className="text-base text-gray-600 mb-8 md:mb-3 text-center max-w-max" variants={textVariants}
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.5, delay: 0.8 }}>
            Lorem ipsum dolor adipisicing elit.<br />
            Fuga ullam nam quaerat fugiat?<br />
            Delectus assumenda dolores
          </motion.p>
          <motion.div
            variants={buttonVariants}
            animate="visible"
            initial="hidden"
            whileHover="hover"
          >
            <Link
              className="uppercase text-[13px] bg-[#6927ff] px-[20px] py-4 rounded-full text-white font-medium max-w-fit hover:bg-[#5925d3] shadow-lg"
              href=""
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
        <motion.div variants={imageVariants} initial='hidden' animate='visible'>
          <Image src='/pairprogramming.svg' alt='image' width={900} height={900} className="-z-10 hidden md:block md:p-24 relative md:right-30  max-w-max" />
        </motion.div>
        {/* main-banner-end */}
      </motion.section>
      <motion.section
        id="Domain"
        variants={sectionVariants}
        initial='hidden'
        transition='transition'
        animate={isVisible ? { opacity: 1 } : {}}
      >
        <Domain />
      </motion.section>
      <motion.section
        id="Hosting"
        variants={sectionVariants}
        initial='hidden'
        transition='transition'
        animate={isVisible ? { opacity: 1 } : {}}
      >
        <Hosting />
      </motion.section>
      <motion.section
        id="Contact"
        variants={sectionVariants}
        initial='hidden'
        transition='transition'
        animate={isVisible ? { opacity: 1 } : {}}
      >
        <ContactSection />
      </motion.section>
    </div>
  )
}

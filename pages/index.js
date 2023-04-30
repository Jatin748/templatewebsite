import ContactSection from "@/components/Contact"
import Domain from "@/components/Domain"
import Hosting from "@/components/Hosting"
import Head from "next/head"
import Image from "next/image"
import Link from 'next/link'
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Hosting website</title>
        <link rel="shortcut icon" href="/network.png" type="image/x-icon" />
      </Head>
      {/* main-banner-start */}
      <section className="flex justify-center items-center" id="Home">
        <div className="flex flex-col p-12 md:p-28 md:gap-5 max-w-max items-center ">
          <span className="text-xs md:text-base text-[#6927ff] uppercase font-bold tracking-[4px] max-w-max">isometric hosting</span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 mt-2 max-w-max flex flex-col items-center -space-y-10">
            <span>Design,</span><br />
            <span>Development,</span><br />
            <span>Hosting</span>
          </h1>
          <p className="text-base text-gray-600 mb-4 md:mb-1 text-center max-w-max">Lorem ipsum dolor adipisicing elit.<br /> Fuga ullam nam quaerat fugiat?<br /> Delectus assumenda dolores</p>
          <Link
            className="uppercase text-[13px] bg-[#6927ff] px-[20px] py-4 rounded-full text-white font-medium max-w-fit hover:bg-[#491bb3] shadow-lg"
            href="#Contact"
          >
            Get in touch
          </Link>
        </div>
        <Image src='/pairprogramming.svg' alt='image' width={900} height={900} className="-z-10 hidden md:block md:p-24 relative md:right-30  max-w-max" />
        {/* main-banner-end */}
      </section>
      <section id="Domain">
        <Domain />
      </section>
      <section id="Hosting">
        <Hosting />
      </section>
      <section id="Contact">
        <ContactSection />
      </section>
    </div>
  )
}

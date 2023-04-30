import React from "react";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    //   {/* main-header-start */}
    <header className="p-4 z-50 sticky bg-white top-0 left-0 right-0 border-b-2 shadow overflow-y-auto">
      <nav className="md:flex md:items-center md:justify-between">
        {/* left-side-header-start */}
        <div className="font-bold text-[20px] text-center pl-2 md:pl-9 tracking-[1px]">
          <Link href="#">CoHost</Link>
        </div>
        {/* left-side-header-end */}

        {/* right-side-header-start */}
        <div className="md:flex justify-end items-center space-x-4 hidden pr-9">
          <ul className="flex space-x-9 font-medium uppercase text-[13px] tracking-[1px] py-[14px] px-[20px] opacity-100">
            <Link
              className="hover:text-[#6927ff] transition duration-200"
              href="#"
            >
              Home
            </Link>
            <Link
              className="hover:text-[#6927ff] transition duration-200"
              href="#Domain"
            >
              Domain
            </Link>
            <Link
              className="hover:text-[#6927ff] transition duration-200"
              href="#Hosting"
            >
              Hosting
            </Link>
            <Link
              className="hover:text-[#6927ff] transition duration-200"
              href="#Contact"
            >
              Contact
            </Link>
          </ul>
          <Link
            className=" uppercase text-[13px] bg-[#6927ff] px-[20px] py-2 rounded-[5px] text-white font-medium hover:bg-[#491bb3]"
            href="#Hosting"
          >
            Get started
          </Link>
        </div>
        {/* right-side-header-end */}

        {/* mobile-nav-menu-icon-start */}
        {/* <div className="flex md:hidden">
          <Image src="/menu-burger.svg" alt="image" width={20} height={20} />
        </div> */}
        {/* mobile-nav-menu-icon-end */}
      </nav>
    </header>
    //   {/* main-header-end */}
  );
};

export default Header;

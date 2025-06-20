"use client";

// import useScrollPosition from "./useScrollPosition";
import { FaBars } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import { BiChevronDown, BiSun } from "react-icons/bi";
import { IoCardOutline, IoLocationOutline, IoMoonSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import useScrollPosition from "./useScrollPosition";
import Link from "next/link";

const Navbar5 = () => {
  // modal openar
  const [isOpen, setIsOpen] = useState(false);
  // dark mode toggle bar
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(darkMode);
  }, []);
  // scrolling tracker
  // scrolling tracker
  const scrollPosition = useScrollPosition();
  // background color add and remover
  const navbarBgColor =
    scrollPosition > 120
      ? "lg:bg-lightBlack"
      : "bg-normalBlack lg:bg-transparent ";
  const topbarHide = scrollPosition > 120 ? "hidden " : "hidden lg:flex";

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <nav className="z-[1]">
      <div
        className={` w-full lg:fixed font-Lora z-10 transition-all duration-300  py-2  ${navbarBgColor}`}
      >
        <div className=" z-[1] ">
          {/* Top Navbar */}
          <div
            className={`border-b-[1px] border-b-white border-opacity-20 ${navbarBgColor} ${topbarHide}`}
          >
            <div
              className={`flex flex-col lg:flex-row items-center justify-between  py-2 sm:py-3  space-y-2 lg:space-y-0  px-5   Container3 `}
            >
              {/* location and payment */}
              <div className="flex items-center flex-col sm:flex-row ">
                <div className="flex items-center">
                  <IoCardOutline className="w-[17px] h-[13px] text-white" />
                  <p className="text-white text-[14px] tracking-[1px] leading-[22px] font-normal font-Lora ml-[10px]">
                    Payment Options
                  </p>
                </div>
                <div className="flex items-center ml-5 2xl:ml-8">
                  <IoLocationOutline className="w-[17px] h-[13px] text-white" />
                  <p className="text-white text-[14px] tracking-[1px] leading-[22px] font-normal font-Lora ml-[10px]">
                    55 Columbus Circle, New York, NY
                  </p>
                </div>
              </div>
              {/* topbar menu */}
              <div className="block">
                <ul className="flex items-center space-x-5 2xl:space-x-[38px]">
                  <li className="text-white text-[14px] tracking-[1px] leading-[22px] font-normal font-Lora ">
                    My Bookings
                  </li>
                  <li className="font-Lora relative inline-flex items-center pt-2 text-sm font-medium text-center text-white">
                    <TfiEmail className="w-[25px] h-[25px] text-white" />
                    <span className="sr-only">Notifications</span>
                    <div className="absolute inline-flex items-center justify-center w-5 h-5 text-sm font-semibold text-white bg-khaki -top-[1px] right-[-10px] ">
                      4
                    </div>
                  </li>
                  <li className="text-white text-[14px] tracking-[1px] leading-[22px] font-normal font-Lora ">
                    Our Review
                  </li>
                  <li className="text-white text-[14px] tracking-[1px] leading-[22px] font-normal font-Lora border-r-[1px] pr-[25px] border-lightGray">
                    <Link href="#"> Login</Link>
                  </li>
                  <li className="text-white text-[14px] tracking-[1px] leading-[22px] font-normal font-Lora  ">
                    <Link href="#"> Sign Up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <hr
            className={`text-gray hidden lg:block ${
              scrollPosition < 120 ? "hidden" : ""
            }`}
          /> */}
          {/* Main navbar start */}
          <div className="flex flex-col lg:flex-row items-center justify-between Container3">
            {/* website Logo */}
            <div className=" w-48 lg:w-52   lg:p-4 hidden lg:block">
              <Link href="/">
                <img src="/images/home-5/logo.png" alt="website_logo" />
              </Link>
            </div>

            {/* small screen size */}
            <div className="px-3 w-full lg:hidden flex justify-between items-center text-white bg-normalBlack h-[70px] p-3">
              <div className=" w-28  ">
                <Link href="/">
                  <img src="/images/home-5/logo.png" alt="website_logo" />
                </Link>
              </div>

              {/* toggle bar and dark and light mode. */}
              <div className="flex items-center ">
                <span onClick={handleClick} className="mr-3 cursor-pointer">
                  {isDarkMode ? (
                    <BiSun
                      className="text-white"
                      title="Apply Light Mode"
                      size={20}
                    />
                  ) : (
                    <IoMoonSharp
                      size={20}
                      className="text-white"
                      title="Apply Dark Mode"
                    />
                  )}
                </span>
                <button
                  className="lg:hidden block focus:outline-none "
                  onClick={toggleNavbar}
                >
                  {/* modal open and close */}
                  {isOpen ? (
                    <IoMdClose className="w-6 h-6  text-white" />
                  ) : (
                    <FaBars className="w-5 h-5  text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* All Link are hear with active */}

            <ul
              className={`${
                isOpen ? "block" : "hidden"
              } text-left w-full lg:w-fit  ease-in-out lg:flex space-y-2 lg:space-y-0 lg:text-center space-x-0 lg:space-x-5 xl:space-x-4 2xl:space-x-5 3xl:space-x-[24px] flex items-center flex-col lg:flex-row text-sm text-lightBlack   uppercase font-normal bg-white dark:bg-normalBlack z-10 lg:bg-transparent dark:lg:bg-transparent py-3 lg:py-0 `}
            >
              <div
                className={`${({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : ""} text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative hover:text-khaki`}
              >
                <Link href="/home5" className="flex items-center">
                  Home
                  <BiChevronDown className="ml-1" />
                </Link>
                <div className="absolute pt-5 lg:pt-8 z-20">
                  <ul className="shadow-2xl hidden group-hover:block rounded-sm bg-white text-black w-[200px] text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm py-4 ">
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <Link href="/" className="py-2 block">
                          Hotel Booking
                        </Link>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <Link href="/home2" className="py-2 block">
                          Resort
                        </Link>
                      </li>
                    </div>

                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <Link href="/home3" className="py-2 block">
                          Hostel
                        </Link>
                      </li>
                    </div>

                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <Link href="/home4" className="py-2 block">
                          City Hotel
                        </Link>
                      </li>
                    </div>

                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <Link href="/home5" className="py-2 block">
                          Apartment
                        </Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <Link
                className={`${({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : ""} text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 hover:text-khaki `}
                href="/pages/about"
              >
                About
              </Link>
              <div
                className={`${({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : ""} text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative hover:text-khaki `}
              >
                <Link href="#" className="flex items-center">
                  Rooms
                  <BiChevronDown className="ml-1" />
                </Link>
                <div className="absolute pt-5 lg:pt-8 z-20">
                  <ul className="shadow-2xl hidden group-hover:block rounded-sm bg-white text-black w-[200px] text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm py-4 ">
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <Link href="/pages/room" className="block py-2">
                          Room
                        </Link>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <Link href="/pages/find_room" className="block py-2">
                          Find Room
                        </Link>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <Link href="/pages/room_details" className="block py-2">
                          Room Details
                        </Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div
                className={`${({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : ""} text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative hover:text-khaki `}
              >
                <Link href="#" className="flex items-center">
                  Page
                  <BiChevronDown className="ml-1" />
                </Link>
                <div className="absolute pt-5 lg:pt-8 z-20">
                  <ul className="shadow-2xl hidden group-hover:block rounded-sm bg-white text-black w-[200px] text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm py-4 ">
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <Link href="/pages/about" className="py-2 block">
                          ABOUT US
                        </Link>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <Link href="/pages/services" className="py-2 block">
                          SERVICE
                        </Link>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <Link
                          href="/pages/service_details"
                          className="py-2 block"
                        >
                          SERVICE DETAILS
                        </Link>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <Link href="/pages/team" className="py-2 block">
                          OUR TEAM
                        </Link>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300  ">
                        <Link href="/pages/pricing" className="py-2 block">
                          PRICING
                        </Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              {/* blog sub menu link */}
              <div
                className={`${({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : ""} text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative hover:text-khaki `}
              >
                <Link href="#" className="flex items-center">
                  BLOG
                  <BiChevronDown className="ml-1" />
                </Link>
                <div className="absolute pt-4 lg:pt-8 z-20">
                  <ul className="shadow-2xl hidden group-hover:block rounded-sm bg-white text-black w-60 text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm  py-4">
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300 ">
                        <Link href="/pages/blog" className="py-2 block">
                          BLOG
                        </Link>
                      </li>
                    </div>
                    <div className=" px-5 group hover:bg-khaki hover:text-white">
                      <li className="hover:ml-3 duration-300 ">
                        <Link href="/pages/blog_details" className="py-2 block">
                          BLOG DETAILS
                        </Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <Link
                className={`${({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : ""} text-lightBlack lg:text-white dark:text-white lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 hover:text-khaki `}
                href="/pages/contact"
              >
                Contact
              </Link>
              {/* large device visible button and search icon */}
              <div className="hidden lg:flex items-center ml-5">
                <span
                  onClick={handleClick}
                  className="mr-3 cursor-pointer group "
                >
                  {isDarkMode ? (
                    <BiSun
                      className="text-white hover:text-khaki  group-hover:rotate-90 rotate transition-all duration-300"
                      title="Apply Light Mode"
                      size={35}
                    />
                  ) : (
                    <IoMoonSharp
                      className="text-white hover:text-khaki  group-hover:rotate-[360deg] transition-all duration-300"
                      title="Apply Dark Mode"
                      size={35}
                    />
                  )}
                </span>
                <Link href={"/pages/pricing"} className=" pr-3">
                  <button className="btn-primary hover:text-khaki font-bold after:bg-white after:text-khaki hover:before:bg-white">
                    Book Now
                  </button>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar5;

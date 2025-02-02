import { BiLogoLinkedin, BiLogoYoutube } from "react-icons/bi";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";

import { Link } from "react-router-dom";
const Footer4 = () => {
  return (
    <footer className="bg-lightBlack dark:bg-normalBlack">
      <div className="  ">
        <div className="Container grid items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 2xl:grid-cols-4 justify-between px-3 gap-x-5 lg:gap-x-0 2xl:gap-g-5 gap-y-6 border-b-[1px] border-[#484848] py-20 2xl:py-[120px] ">
          {/* logo and text */}
          <div
            className="px-5 lg:px-3 xl:px-4 2xl:px-5 2xl:w-[350px] lg:col-span-2  2xl:col-span-1"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="/images/home-2/dark_footer_logo.png"
              className=""
              alt=""
            />
            <p className="text-sm xl:text-base leading-[26px] font-Lora font-normal text-lightGray  mt-6 lg:mt-[30px]">
              Sequi dolores ratione eos eveniet provi dent soluta. Omnis
              nesciunt sit eos at,il voluptatum rem corporis.Doloremquek
              explicabo velit illo,
            </p>
            <div className="mt-5 lg:mt-[24px]">
              <ul className="flex space-x-3">
                <li className="hover-animBg group bg-white w-[36px] h-[36px]  grid items-center justify-center rounded-full border border-white hover:border-khaki cursor-pointer after:z-[-1]">
                  <Link to="#" className="">
                    <FaFacebookF className="text-khaki group-hover:text-white group-hover:text-slateBlue-0 w-4 h-4 " />
                  </Link>
                </li>

                <li className="hover-animBg group bg-white w-[36px] h-[36px]  grid items-center justify-center rounded-full border border-white hover:border-khaki cursor-pointer">
                  <Link to="#">
                    <FaTwitter className="text-khaki group-hover:text-white group-hover:text-slateBlue-0 w-4 h-4 z-[1]" />
                  </Link>
                </li>
                <li className="hover-animBg group bg-white w-[36px] h-[36px]  grid items-center justify-center rounded-full border border-white hover:border-khaki cursor-pointer">
                  <Link to="#">
                    <BiLogoYoutube className="text-khaki group-hover:text-white group-hover:text-slateBlue-0 w-4 h-4" />
                  </Link>
                </li>
                <li className="hover-animBg group bg-white w-[36px] h-[36px]  grid items-center justify-center rounded-full border border-white hover:border-khaki cursor-pointer">
                  <Link to="#">
                    <BiLogoLinkedin className="text-khaki group-hover:text-white group-hover:text-slateBlue-0 w-4 h-4" />
                  </Link>
                </li>
                <li className="hover-animBg group bg-white w-[36px] h-[36px]  grid items-center justify-center rounded-full border border-white hover:border-khaki cursor-pointer">
                  <Link to="#">
                    <FaPinterestP className="text-khaki group-hover:text-white group-hover:text-slateBlue-0 w-4 h-4" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Home info */}
          <div
            className="px-5 lg:px-3 xl:px-4 2xl:px-5 2xl:col-span-1"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h1
              className="text-[25px] font-Garamond 2xl:text-3xl
          leading-6 md:leading-[26px] font-medium text-white relative before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-8 2xl:before:top-10  "
            >
              Home
            </h1>
            <div className=" mt-5 lg:mt-[24px] overflow-hidden">
              <ul
                className="text-white font-Lora font-normal text-sm sm:text-base leading-[26px] list-none hover:list-disc
                 "
              >
                <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[30px] sm:leading-[32px] lg:leading-[35px] 3xl:leading-[42px]">
                  <Link to="#"> About Us</Link>
                </li>
                <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[30px] sm:leading-[32px] lg:leading-[35px] 3xl:leading-[42px]">
                  <Link to="#"> Activities</Link>
                </li>
                <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[30px] sm:leading-[32px] lg:leading-[35px] 3xl:leading-[42px]">
                  <Link to="#"> Contact Us</Link>
                </li>
                <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[30px] sm:leading-[32px] lg:leading-[35px] 3xl:leading-[42px]">
                  <Link to="#"> News & Blogs</Link>
                </li>
                <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[30px] sm:leading-[32px] lg:leading-[35px] 3xl:leading-[42px]">
                  <Link to="#"> Checkout</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* General info*/}
          <div
            className="px-5 lg:px-3 xl:px-4 2xl:px-5  2xl:col-span-1"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1
              className="text-[25px] font-Garamond 2xl:text-3xl
          leading-6 md:leading-[26px] font-medium text-white relative before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-8 2xl:before:top-10  "
            >
              General
            </h1>
            <div className=" mt-5 lg:mt-[24px] overflow-hidden">
              <ul
                className="text-white font-Lora font-normal text-sm sm:text-base leading-[26px] list-none hover:list-disc
                 "
              >
                <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[30px] sm:leading-[32px] lg:leading-[35px] 3xl:leading-[42px]">
                  <Link to="#"> Accommodation</Link>
                </li>
                <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[30px] sm:leading-[32px] lg:leading-[35px] 3xl:leading-[42px]">
                  <Link to="#"> Dine & Drink</Link>
                </li>
                <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[30px] sm:leading-[32px] lg:leading-[35px] 3xl:leading-[42px]">
                  <Link to="#"> Spa & Leisure</Link>
                </li>
                <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[30px] sm:leading-[32px] lg:leading-[35px] 3xl:leading-[42px]">
                  <Link to="#"> Services</Link>
                </li>
                <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[30px] sm:leading-[32px] lg:leading-[35px] 3xl:leading-[42px]">
                  <Link to="#"> Our Location</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* gallery*/}
          <div
            className="px-5 lg:px-3 xl:px-4 2xl:px-5 lg:col-span-2 2xl:col-span-1"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h1
              className="text-[25px] font-Garamond 2xl:text-3xl
          leading-6 md:leading-[26px] font-medium text-white relative before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-8 2xl:before:top-10  "
            >
              Instagram
            </h1>

            <div className="mt-5 lg:mt-[22px] grid grid-cols-3 gap-x-[10px] gap-y-[10px] py-[30px] content-center w-[250px] 2xl:w-[314px]">
              <img src="/images/home-4/footer-gallery-1.jpg" alt="" />
              <img src="/images/home-4/footer-gallery-2.jpg" alt="" />
              <img src="/images/home-4/footer-gallery-3.jpg" alt="" />
              <img src="/images/home-4/footer-gallery-3.jpg" alt="" />
              <img src="/images/home-4/footer-gallery-2.jpg" alt="" />
              <img src="/images/home-4/footer-gallery-1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div
        className=" py-3 md:py-4 lg:py-5 xl:py-[50px] text-sm md:text-base text-white font-Lora font-normal lg:flex items-center lg:justify-between
      Container "
      >
        <p className="text-center">
          {` © ${new Date().getFullYear()} All Rights Reserved Royella Luxury Hotel`}
        </p>
        <p className="flex items-center space-x-1 text-center justify-center mt-[6px] lg:mt-0">
          <Link className="hover:text-khaki transition-all duration-300">
            Terms of Use
          </Link>{" "}
          /
          <Link className="hover:text-khaki transition-all duration-300">
            Privacy Policy
          </Link>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer4;

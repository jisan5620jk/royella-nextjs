import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const WelcomeSection = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <section className="dark:bg-lightBlack py-20 2xl:py-[120px]">
      <div className="Container flex flex-col md:flex-row items-center ">
        {/* WelcomeSection img */}
        <div
          className="w-full md:w-[98%] lg:w-[96%] 2xl:w-[80%] px-[20px] lg:pl-[20px] 2xl:px-[50px] relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="/images/home-4/about-thumb.png"
            alt=""
            className="w-full h-full object-cover "
          />
          <div className="absolute top-[55px] sm:top-[110px] right-[53px] lg:top-[110px] sm:right-[105px]  md:right-[60px] xl:right-[70px]  2xl:right-[105px]">
            <div
              className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] border-2  border-khaki grid items-center justify-center cursor-pointer"
              title="click me and see details"
              onClick={() => setToggler(!toggler)}
            >
              <span className="w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] bg-khaki grid items-center justify-center">
                <TbPlayerPlayFilled className="w-4 h-4 lg:w-[35px] lg:h-[35px] text-white dark:text-lightBlack" />
              </span>
            </div>
          </div>
          <FsLightbox
            toggler={toggler}
            sources={["https://youtu.be/b1xV9KNcaHU?si=rU6M3Z5lpAe-1mMw"]}
          />
        </div>
        {/* WelcomeSection text*/}
        <div
          className="w-full  p-[20px] lg:pr-[20px] xl:p-[50px]"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h2
            className="text-lightBlack dark:text-white text-3xl md:text-4xl lg:text-[40px] 2xl:text-[45px] leading-7 md:leading-10 lg:leading-[50px] 2xl:leading-[66px]
           font-semibold font-Garamond mb-3 mt-3 md:mt-0 "
          >
            Welcome to the West Coast
          </h2>
          <p className="text-sm lg:text-base leading-[22px] sm:leading-[26px] text-gray dark:text-lightGray font-normal font-Lora mb-3">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas si
            Aenean aspernaturaut odit aut fugit, sed quia consequuntur. Dicta
            sunt maximus ali explicabo elit sed.lorem, condimentum .
          </p>
          <p className="text-sm lg:text-base leading-[22px] sm:leading-[26px] text-gray dark:text-lightGray font-normal font-Lora mb-7 xl:mb-[35px]">
            Aenean hendrerit maximus aliquet. Pellentesque interdum odio dui,
            vitae ele Aenean hendrerit maximus aliquet.
          </p>
          <Link to={"/about"}>
            <button className="btn-primary text-base leading-[38px] font-medium font-Garamond">
              LEARN MORE
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;

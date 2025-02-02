import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    // <div className="pt-[100px]">
    <section
      className="bg-[url('/images/home-4/hero-bg.jpg')] bg-center  bg-no-repeat bg-cover h-[700px] md:h-[800px] xl:h-[850px] 3xl:h-[950px] grid items-center justify-center"
      data-aos="fade-down"
    >
      <div className=" text-center ">
        <img
          src="/images/home-4/section-sahpe.png"
          alt=""
          className="mx-auto"
        />
        <p className="text-white text-sm sm:text-base leading-8 md:leading-10  font-normal font-Lora my-[6px] sm:py-2 md:py-0">
          Unique Place And Luxury Hotel
        </p>
        <div className="mb-6 md:mb-[30px]">
          <h1 className="text-white  text-4xl lg:text-5xl xl:text-6xl leading-10  font-semibold font-Garamond">
            Life Enjoy With The
          </h1>
          <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl leading-10 lg:leading-[55px] xl:leading-[66px] font-semibold font-Garamond mt-1">
            Great Moments
          </h1>
        </div>
        <Link to={"/room"}>
          <button className="btn-secondary lg:h-[55px] before:top-[3.3rem] lg:before:top-[4rem]">
            ROOMS & SUITES
          </button>
        </Link>
      </div>
    </section>
    // </div>
  );
};

export default HeroSection;

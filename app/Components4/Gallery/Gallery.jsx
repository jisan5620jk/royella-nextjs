import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { origin: "center", perView: 1.5 },
      },
      "(min-width: 600px)": {
        slides: { origin: "center", perView: 2 },
      },
      "(min-width: 768px)": {
        slides: { origin: "center", perView: 2.5 },
      },
      "(min-width: 992px)": {
        slides: { origin: "center", perView: 3.5 },
      },
      "(min-width: 1200px)": {
        slides: { origin: "center", perView: 4.5 },
      },
    },
    loop: true,
    initial: 0,
  });

  return (
    <section className=" dark:bg-lightBlack py-20 2xl:py-[120px]">
      <div className="">
        {/* section title */}
        <div
          className="text-center px-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="text-base leading-7 md:leading-10 lg:leading-[40px] 3xl:leading-[66px] text-khaki mb-1 md:mb-0 font-normal font-Lora">
            Photos Gallery
          </p>
        </div>

        {/* Section content */}
        <div className="mt-14">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
              <div
                className="gallery-effect bg-[url('/images/home-4/gallery-1.jpg')] group"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/home-4/gallery-1.jpg"
                  alt=""
                  className="w-full h-full opacity-0"
                />
                <div className="px-[25px] py-10 absolute bottom-[-300px] lg:bottom-[-330px] 3xl:bottom-[-300px] group-hover:bottom-[25%] sm:group-hover:bottom-[20%]  lg:group-hover:bottom-[20%] left-[18px] right-[18px] my-[18px] transition-all z-20 duration-500 scale-50 group-hover:scale-100 text-center">
                  <h3 className="text-2xl md:text-[26px]  leading-5 md:leading-[26px] xl:text-[25px] 2xl:text-3xl 3xl:text-4xl 2xl:leading-[42px] text-white  font-Garamond font-semibold ">
                    Bed Female Dorm
                  </h3>
                  <Link to="#">
                    <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] xl:leading-[38px] font-Lora font-normal text-white mt-2 ">
                      Check Details
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide number-slide2">
              <div
                className="gallery-effect bg-[url('/images/home-4/gallery-2.jpg')] group "
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <img
                  src="/images/home-4/gallery-1.jpg"
                  alt=""
                  className="w-full h-full opacity-0"
                />
                <div className="px-[25px] py-10 absolute bottom-[-300px] lg:bottom-[-330px] 3xl:bottom-[-300px] group-hover:bottom-[25%] sm:group-hover:bottom-[20%]  lg:group-hover:bottom-[20%] left-[18px] right-[18px] my-[18px] transition-all z-20 duration-500 scale-50 group-hover:scale-100 text-center">
                  <h3 className="text-2xl md:text-[26px]  leading-5 md:leading-[26px] xl:text-[25px] 2xl:text-3xl 3xl:text-4xl 2xl:leading-[42px] text-white  font-Garamond font-semibold ">
                    Bed Female Dorm
                  </h3>
                  <Link to="#">
                    <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] xl:leading-[38px] font-Lora font-normal text-white mt-2 ">
                      Check Details
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide number-slide3">
              <div
                className="gallery-effect bg-[url('/images/home-4/gallery-3.jpg')] group "
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/home-4/gallery-1.jpg"
                  alt=""
                  className="w-full h-full opacity-0"
                />
                <div className="px-[25px] py-10 absolute bottom-[-300px] lg:bottom-[-330px] 3xl:bottom-[-300px] group-hover:bottom-[25%] sm:group-hover:bottom-[20%]  lg:group-hover:bottom-[20%] left-[18px] right-[18px] my-[18px] transition-all z-20 duration-500 scale-50 group-hover:scale-100 text-center">
                  <h3 className="text-2xl md:text-[26px]  leading-5 md:leading-[26px] xl:text-[25px] 2xl:text-3xl 3xl:text-4xl 2xl:leading-[42px] text-white  font-Garamond font-semibold ">
                    Bed Female Dorm
                  </h3>
                  <Link to="#">
                    <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] xl:leading-[38px] font-Lora font-normal text-white mt-2 ">
                      Check Details
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide number-slide4">
              <div
                className="gallery-effect bg-[url('/images/home-4/gallery-5.jpg')] group "
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <img
                  src="/images/home-4/gallery-1.jpg"
                  alt=""
                  className="w-full h-full opacity-0"
                />
                <div className="px-[25px] py-10 absolute bottom-[-300px] lg:bottom-[-330px] 3xl:bottom-[-300px] group-hover:bottom-[25%] sm:group-hover:bottom-[20%]  lg:group-hover:bottom-[20%] left-[18px] right-[18px] my-[18px] transition-all z-20 duration-500 scale-50 group-hover:scale-100 text-center">
                  <h3 className="text-2xl md:text-[26px]  leading-5 md:leading-[26px] xl:text-[25px] 2xl:text-3xl 3xl:text-4xl 2xl:leading-[42px] text-white  font-Garamond font-semibold ">
                    Bed Female Dorm
                  </h3>
                  <Link to="#">
                    <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] xl:leading-[38px] font-Lora font-normal text-white mt-2 ">
                      Check Details
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide number-slide5">
              <div
                className="gallery-effect bg-[url('/images/home-4/gallery-5.jpg')] group "
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="/images/home-4/gallery-1.jpg"
                  alt=""
                  className="w-full h-full opacity-0"
                />
                <div className="px-[25px] py-10 absolute bottom-[-300px] lg:bottom-[-330px] 3xl:bottom-[-300px] group-hover:bottom-[25%] sm:group-hover:bottom-[20%]  lg:group-hover:bottom-[20%] left-[18px] right-[18px] my-[18px] transition-all z-20 duration-500 scale-50 group-hover:scale-100 text-center">
                  <h3 className="text-2xl md:text-[26px]  leading-5 md:leading-[26px] xl:text-[25px] 2xl:text-3xl 3xl:text-4xl 2xl:leading-[42px] text-white  font-Garamond font-semibold ">
                    Bed Female Dorm
                  </h3>
                  <Link to="#">
                    <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] xl:leading-[38px] font-Lora font-normal text-white mt-2 ">
                      Check Details
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

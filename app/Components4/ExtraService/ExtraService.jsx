import { Link } from "react-router-dom";

const ExtraService = () => {
  return (
    <section className="bg-[#ededed] dark:bg-normalBlack py-20 2xl:py-[120px]">
      <div className="Container">
        {/* section header */}
        <div
          className="flex md:flex-row flex-col items-center justify-between space-y-1 md:space-y-0"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <p className="text-base leading-7 md:leading-10 lg:leading-[40px] 3xl:leading-[66px] text-khaki font-normal font-Lora text-center md:text-left">
              Best Prices
            </p>
            <h3
              className="text-lightBlack dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-[45px] leading-7 md:leading-9
           font-semibold font-Garamond"
            >
              Extra Services
            </h3>
          </div>
          <div>
            <p className="text-[13px] md:text-base leading-[26px] text-gray dark:text-white font-normal font-Lora text-center w-full md:w-[250px] lg:w-[350px] xl:w-[465px] 2xl:w-[560px] p-5 md:p-0">
              Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami
              readymade swag. Selfies iPhone Kickstarter, drinking vinegar
            </p>
          </div>
          <Link to={"/room"}>
            <button className="btn-items text-sm md:text-base ">
              VIEW ALL ROOMS
            </button>
          </Link>
        </div>
        {/* section content */}
        <div className="pt-10 xl:pt-[60px]">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[30px] ">
            <div
              className="extra-service bg-[url('/images/home-4/service-1.jpg')] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/home-4/service-1.jpg"
                className="opacity-0 w-full h-[450px] 2xl:h-[500px]"
                alt=""
              />
              <div className="px-[25px] py-10 absolute bottom-[-300px] lg:bottom-[-330px] 3xl:bottom-[-300px] group-hover:bottom-0 left-[18px] right-[18px] my-[18px] transition-all duration-500">
                <h3 className="text-2xl md:text-[26px] lg:text-[30] xl:text-[34px] leading-5 md:leading-[26px] xl:leading-[42px] text-white font-Garamond font-semibold text-left">
                  Laundry service
                </h3>
                <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] font-Lora font-normal text-ellipsis text-white mt-[19px] mb-6 lg:mb-[30px] text-left">
                  Avoid the hassle of airport transfers and take take advantage
                  of our complimentary shuttle serves local beers service.
                </p>
                <div className="float-left">
                  <Link to={"/room_details"}>
                    <button className="btn-primary">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
            {/* service-2 */}
            <div
              className="extra-service bg-[url('/images/home-4/service-2.jpg')] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/home-4/service-2.jpg"
                className="opacity-0 w-full h-[450px] 2xl:h-[500px]"
                alt=""
              />
              <div className="px-[25px] py-10 absolute bottom-[-300px] lg:bottom-[-330px] 3xl:bottom-[-300px] group-hover:bottom-0 left-[18px] right-[18px] my-[18px] transition-all duration-500">
                <h3 className="text-2xl md:text-[26px] lg:text-[30] xl:text-[34px] leading-5 md:leading-[26px] xl:leading-[42px] text-white font-Garamond font-semibold text-left">
                  Laundry service
                </h3>
                <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] font-Lora font-normal text-ellipsis text-white mt-[19px] mb-6 lg:mb-[30px] text-left">
                  Avoid the hassle of airport transfers and take take advantage
                  of our complimentary shuttle serves local beers service.
                </p>
                <div className="float-left">
                  <Link to={"/room_details"}>
                    <button className="btn-primary">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
            {/* service -3 */}
            <div
              className="extra-service bg-[url('/images/home-4/service-3.jpg')] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/home-4/service-3.jpg"
                className="opacity-0 w-full h-[450px] 2xl:h-[500px]"
                alt=""
              />
              <div className="px-[25px] py-10 absolute bottom-[-300px] lg:bottom-[-330px] 3xl:bottom-[-300px] group-hover:bottom-0 left-[18px] right-[18px] my-[18px] transition-all duration-500">
                <h3 className="text-2xl md:text-[26px] lg:text-[30] xl:text-[34px] leading-5 md:leading-[26px] xl:leading-[42px] text-white font-Garamond font-semibold text-left">
                  Laundry service
                </h3>
                <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] font-Lora font-normal text-ellipsis text-white mt-[19px] mb-6 lg:mb-[30px] text-left">
                  Avoid the hassle of airport transfers and take take advantage
                  of our complimentary shuttle serves local beers service.
                </p>
                <div className="float-left">
                  <Link to={"/room_details"}>
                    <button className="btn-primary">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd grid */}
          <div className="grid items-center grid-cols-1 md:grid-cols-2  gap-[20px] lg:gap-[30px] mt-[30px]">
            {/* service- 04 */}
            <div
              className="extra-service bg-[url('/images/home-4/service-4.jpg')] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/home-4/service-4.jpg"
                className="opacity-0 w-full h-[450px] 2xl:h-[500px]"
                alt=""
              />
              <div className="px-[25px] py-10 absolute bottom-[-300px] lg:bottom-[-330px] 3xl:bottom-[-300px] group-hover:bottom-0 left-[18px] right-[18px] my-[18px] transition-all duration-500">
                <h3 className="text-2xl md:text-[26px] lg:text-[30] xl:text-[34px] leading-5 md:leading-[26px] xl:leading-[42px] text-white font-Garamond font-semibold text-left">
                  Laundry service
                </h3>
                <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] font-Lora font-normal text-ellipsis text-white mt-[19px] mb-6 lg:mb-[30px] text-left">
                  Avoid the hassle of airport transfers and take take advantage
                  of our complimentary shuttle serves local beers service.
                </p>
                <div className="float-left">
                  <Link to={"/room_details"}>
                    <button className="btn-primary">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
            {/* service- 05 */}
            <div
              className="extra-service bg-[url('/images/home-4/service-5.jpg')] group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/home-4/service-5.jpg"
                className="opacity-0 w-full h-[450px] 2xl:h-[500px]"
                alt=""
              />
              <div className="px-[25px] py-10 absolute bottom-[-300px] lg:bottom-[-330px] 3xl:bottom-[-300px] group-hover:bottom-0 left-[18px] right-[18px] my-[18px] transition-all duration-500">
                <h3 className="text-2xl md:text-[26px] lg:text-[30] xl:text-[34px] leading-5 md:leading-[26px] xl:leading-[42px] text-white font-Garamond font-semibold text-left">
                  Laundry service
                </h3>
                <p className="text-sm sm:text-base leading-[22px] lg:leading-[26px] font-Lora font-normal text-ellipsis text-white mt-[19px] mb-6 lg:mb-[30px] text-left">
                  Avoid the hassle of airport transfers and take take advantage
                  of our complimentary shuttle serves local beers service.
                </p>
                <div className="float-left">
                  <Link to={"/room_details"}>
                    <button className="btn-primary">Learn more</button>
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

export default ExtraService;

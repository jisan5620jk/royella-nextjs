import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import BreadCrumb from '@/app/Shared/BreadCrumb/BreadCrumb';
import Link from 'next/link';
import BlogSideBar from '../BlogSIdebar';
import Navbar from '@/app/Shared/Navbar/Navbar';
import Footer from '@/app/Shared/Footer/Footer';

const page = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumb title='Blog' />
      <div className='dark:bg-lightBlack py-20 2xl:py-[120px]'>
        <div className='Container grid grid-cols-6 md:grid-cols-7 lg:grid-cols-6 gap-5 '>
          <div className='col-span-6 md:col-span-4'>
            <div className='grid items-center gap-5 2xl:gap-y-[30px] grid-cols-1 lg:grid-cols-2'>
              {/* Blog One */}
              <div
                className='overflow-hidden 3xl:w-[410px] group'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div className='relative'>
                  <img
                    src='/images/home-1/blog-1.jpg '
                    className='w-full h-full object-cover'
                    alt='Image'
                  />
                </div>
                <div className='font-Garamond border border-[#ddd] dark:border-gray border-t-0'>
                  <div className='py-6 px-[30px] '>
                    <div className='flex items-center space-x-6 '>
                      <p className='text-sm 2xl:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]'>
                        August 10, 2023
                      </p>
                      <p className='text-sm 2xl:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]'>
                        Interior
                      </p>
                    </div>
                    <Link
                      href='/inner_page/blog_details'
                      state={{
                        title: 'How to Book a Room online Step by Step Guide',
                      }}
                    >
                      <h2 className='text-xl md:text-[22px] xl:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-2 sm:py-3 md:py-4 hover:underline underline-offset-2'>
                        How to Book a Room online Step by Step Guide
                      </h2>
                    </Link>
                  </div>
                  <div className='  border-t-[1px] border-[#ddd] dark:border-gray py-2 sm:py-3 md:py-4 xl:py-5'>
                    <Link
                      href={'/inner_page/blog_details'}
                      className='px-[30px] flex items-center justify-between '
                    >
                      <div>
                        <span className=' text-sm sm:text-base flex items-center '>
                          <span className='ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki hover:underline  underline-offset-1'>
                            Read More
                          </span>
                        </span>
                      </div>
                      <span>
                        <BsArrowRight
                          className='text-gray dark:text-lightGray group-hover:text-khaki'
                          size={'24px'}
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Blog two */}
              <div
                className='overflow-hidden 3xl:w-[410px] group'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div className='relative'>
                  <img
                    src='/images/home-1/blog-2.jpg '
                    className='w-full h-full object-cover'
                    alt='Image'
                  />
                </div>
                <div className='font-Garamond border border-[#ddd] dark:border-gray border-t-0'>
                  <div className='py-6 px-[30px] '>
                    <div className='flex items-center space-x-6'>
                      <p className='text-sm 2xl:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]'>
                        August 10, 2023
                      </p>
                      <p className='text-sm 2xl:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]'>
                        Interior
                      </p>
                    </div>
                    <Link
                      href='/inner_page/blog_details'
                      state={{
                        title:
                          'Pre Booking Benifits for the Traveller on our Hotel',
                      }}
                    >
                      <h2 className='text-xl md:text-[22px] xl:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-2 sm:py-3 md:py-4 hover:underline underline-offset-2'>
                        Pre Booking Benifits for the Traveller on our Hotel
                      </h2>
                    </Link>
                  </div>
                  <div className='  border-t-[1px] border-[#ddd] dark:border-gray py-2 sm:py-3 md:py-4 xl:py-5'>
                    <Link
                      href={'/inner_page/blog_details'}
                      className='px-[30px] flex items-center justify-between '
                    >
                      <div>
                        <span className=' text-sm sm:text-base flex items-center '>
                          <span className='ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki hover:underline  underline-offset-1'>
                            Read More
                          </span>
                        </span>
                      </div>
                      <span>
                        <BsArrowRight
                          className='text-gray dark:text-lightGray group-hover:text-khaki'
                          size={'24px'}
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Blog three */}
              <div
                className='overflow-hidden 3xl:w-[410px] group'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div className='relative'>
                  <img
                    src='/images/home-1/blog-3.jpg '
                    className='w-full h-full object-cover'
                    alt='Image'
                  />
                </div>
                <div className='font-Garamond border border-[#ddd] dark:border-gray border-t-0'>
                  <div className='py-6 px-[30px] '>
                    <div className='flex items-center space-x-6'>
                      <p className='text-sm 2xl:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]'>
                        August 10, 2023
                      </p>
                      <p className='text-sm 2xl:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]'>
                        Interior
                      </p>
                    </div>
                    <Link
                      href='/inner_page/blog_details'
                      state={{
                        title:
                          '5 Discount Period every year for Valuable Clients',
                      }}
                    >
                      <h2 className='text-xl md:text-[22px] xl:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-2 sm:py-3 md:py-4 hover:underline underline-offset-2'>
                        5 Discount Period every year for Valuable Clients
                      </h2>
                    </Link>
                  </div>
                  <div className='  border-t-[1px] border-[#ddd] dark:border-gray py-2 sm:py-3 md:py-4 xl:py-5'>
                    <Link
                      href={'/inner_page/blog_details'}
                      className='px-[30px] flex items-center justify-between '
                    >
                      <div>
                        <span className=' text-sm sm:text-base flex items-center '>
                          <span className='ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki hover:underline  underline-offset-1'>
                            Read More
                          </span>
                        </span>
                      </div>
                      <span>
                        <BsArrowRight
                          className='text-gray dark:text-lightGray group-hover:text-khaki'
                          size={'24px'}
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Blog four */}
              <div
                className='overflow-hidden 3xl:w-[410px] group'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div className='relative'>
                  <img
                    src='/images/home-1/blog-2.jpg '
                    className='w-full h-full object-cover'
                    alt='Image'
                  />
                </div>
                <div className='font-Garamond border border-[#ddd] dark:border-gray border-t-0'>
                  <div className='py-6 px-[30px] '>
                    <div className='flex items-center space-x-6'>
                      <p className='text-sm 2xl:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]'>
                        August 10, 2023
                      </p>
                      <p className='text-sm 2xl:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]'>
                        Interior
                      </p>
                    </div>
                    <Link
                      href='/inner_page/blog_details'
                      state={{
                        title: 'Luxury Hotel for Travelling Spot Sandigo , UK',
                      }}
                    >
                      <h2 className='text-xl md:text-[22px] xl:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-2 sm:py-3 md:py-4 hover:underline underline-offset-2'>
                        Luxury Hotel for Traveling Spot USA, California
                      </h2>
                    </Link>
                  </div>
                  <div className='  border-t-[1px] border-[#ddd] dark:border-gray py-2 sm:py-3 md:py-4 xl:py-5'>
                    <Link
                      href={'/inner_page/blog_details'}
                      className='px-[30px] flex items-center justify-between '
                    >
                      <div>
                        <span className=' text-sm sm:text-base flex items-center '>
                          <span className='ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki hover:underline  underline-offset-1'>
                            Read More
                          </span>
                        </span>
                      </div>
                      <span>
                        <BsArrowRight
                          className='text-gray dark:text-lightGray group-hover:text-khaki'
                          size={'24px'}
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Blog five */}
              <div
                className='overflow-hidden 3xl:w-[410px] group'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div className='relative'>
                  <img
                    src='/images/home-1/blog-1.jpg '
                    className='w-full h-full object-cover'
                    alt='Image'
                  />
                </div>
                <div className='font-Garamond border border-[#ddd] dark:border-gray border-t-0'>
                  <div className='py-6 px-[30px] '>
                    <div className='flex items-center space-x-6'>
                      <p className='text-sm 2xl:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]'>
                        August 10, 2023
                      </p>
                      <p className='text-sm 2xl:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]'>
                        Interior
                      </p>
                    </div>
                    <Link
                      href='/inner_page/blog_details'
                      state={{
                        title:
                          'Luxury Hotel for Traveling Spot USA, California',
                      }}
                    >
                      <h2 className='text-xl md:text-[22px] xl:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-2 sm:py-3 md:py-4 hover:underline underline-offset-2'>
                        Luxury Hotel for Traveling Spot USA, California
                      </h2>
                    </Link>
                  </div>
                  <div className='  border-t-[1px] border-[#ddd] dark:border-gray py-2 sm:py-3 md:py-4 xl:py-5'>
                    <Link
                      href={'/inner_page/blog_details'}
                      className='px-[30px] flex items-center justify-between '
                    >
                      <div>
                        <span className=' text-sm sm:text-base flex items-center '>
                          <span className='ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki hover:underline  underline-offset-1'>
                            Read More
                          </span>
                        </span>
                      </div>
                      <span>
                        <BsArrowRight
                          className='text-gray dark:text-lightGray group-hover:text-khaki'
                          size={'24px'}
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Blog six */}
              <div
                className='overflow-hidden 3xl:w-[410px] group'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div className='relative'>
                  <img
                    src='/images/home-1/blog-3.jpg '
                    className='w-full h-full object-cover'
                    alt='Image'
                  />
                </div>
                <div className='font-Garamond border border-[#ddd] dark:border-gray border-t-0'>
                  <div className='py-6 px-[30px] '>
                    <div className='flex items-center space-x-6'>
                      <p className='text-sm 2xl:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]'>
                        August 10, 2023
                      </p>
                      <p className='text-sm 2xl:text-base leading-[26px] text-gray dark:text-lightGray font-normal uppercase mr-7 ml-3 relative before:absolute before:w-[7px] before:h-[7px] before:left-[-13px] before:bg-[#d1d1d1] dark:before:bg-khaki before:top-[9px]'>
                        Interior
                      </p>
                    </div>
                    <Link
                      href='/inner_page/blog_details'
                      state={{
                        title: 'Top 10 Best Hotel & Resort in Sandigo, USA',
                      }}
                    >
                      <h2 className='text-xl md:text-[22px] xl:text-2xl 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-2 sm:py-3 md:py-4 hover:underline underline-offset-2'>
                        Top 10 Best Hotel & Resort in Sandigo, USA
                      </h2>
                    </Link>
                  </div>
                  <div className='  border-t-[1px] border-[#ddd] dark:border-gray py-2 sm:py-3 md:py-4 xl:py-5'>
                    <Link
                      href={'/inner_page/blog_details'}
                      className='px-[30px] flex items-center justify-between '
                    >
                      <div>
                        <span className=' text-sm sm:text-base flex items-center '>
                          <span className='ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki hover:underline  underline-offset-1'>
                            Read More
                          </span>
                        </span>
                      </div>
                      <span>
                        <BsArrowRight
                          className='text-gray dark:text-lightGray group-hover:text-khaki'
                          size={'24px'}
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-3 mt-10'>
              <span className='w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]  dark:bg-lightBlack border-[1px] border-lightGray dark:border-gray bg-white  hover:bg-khaki dark:hover:bg-khaki grid items-center justify-center  cursor-pointer group'>
                <BsArrowLeft
                  size={20}
                  className='text-lightBlack dark:text-white group-hover:text-white'
                />
              </span>
              <span className='w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]  dark:bg-lightBlack border-[1px] border-lightGray dark:border-gray bg-white  hover:bg-khaki dark:hover:bg-khaki grid items-center justify-center font-semibold cursor-pointer group'>
                <span
                  size={20}
                  className='text-lightBlack dark:text-white group-hover:text-white'
                >
                  1
                </span>
              </span>
              <span className='w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]  dark:bg-lightBlack border-[1px] border-lightGray dark:border-gray bg-white  hover:bg-khaki dark:hover:bg-khaki grid items-center justify-center font-semibold cursor-pointer group'>
                <span
                  size={20}
                  className='text-lightBlack dark:text-white group-hover:text-white'
                >
                  2
                </span>
              </span>
              <span className='w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]  dark:bg-lightBlack border-[1px] border-lightGray dark:border-gray bg-white  hover:bg-khaki dark:hover:bg-khaki grid items-center justify-center font-semibold cursor-pointer group'>
                <span
                  size={20}
                  className='text-lightBlack dark:text-white group-hover:text-white'
                >
                  3
                </span>
              </span>
              <span className='w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]  dark:bg-lightBlack border-[1px] border-lightGray dark:border-gray bg-white  hover:bg-khaki dark:hover:bg-khaki grid items-center justify-center  cursor-pointer group'>
                <BsArrowRight
                  size={20}
                  className='text-lightBlack dark:text-white group-hover:text-white'
                />
              </span>
            </div>
          </div>
          <div className='col-span-6 md:col-span-3 lg:col-span-2'>
            {/* imported Blog Sidebar */}
            <BlogSideBar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;

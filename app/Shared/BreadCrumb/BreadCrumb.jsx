'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BreadCrumb = ({ title, home }) => {
  const pathName = usePathname().split('/')[1];
  return (
    <section className="bg-[url('/images/inner/breadcumb.jpg')] bg-no-repeat bg-cover h-[550px] bg-center grid items-center justify-center">
      <div className='mt-10 text-center'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl leading-10 lg:leading-[60px] 2xl:leading-[70px] text-white font-semibold font-Garamond uppercase'>
          {title}
        </h1>
        <div className='flex items-center justify-center'>
          <Link
            href={`${pathName ? `/${pathName}` : '/'}`}
            className='text-base lg:text-2xl leading-10 2xl:leading-[70px] text-khaki font-semibold font-Garamond flex items-center'
          >
            Home <span className='mx-2 text-white'>/</span>
          </Link>
          <Link
            href={`#`}
            className='text-base lg:text-2xl leading-10 2xl:leading-[70px] text-white font-semibold font-Garamond capitalize'
          >
            {title}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;

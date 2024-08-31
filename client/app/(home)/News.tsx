import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const News = () => {
  return (
    <main className='mt-[6rem]'>
      <section className='w-full flex justify-between  items-center'>
        <p className='font-playfair font-medium leading-[16px] text-[20px]'>
          {" "}
          News{" "}
        </p>
        <Button className='bg-accent text-primary rounded-3xl font-secondaryExraBold font-light leading-[19.2px] text-[16px]'>
          Read More
        </Button>
      </section>
      <section className='flex justify-between mt-[2rem]'>
        <div className='relative border border-gray-300 rounded-lg w-80  overflow-hidden'>
          <Image
            width={400}
            height={382}
            alt='logo-sticth'
            src={"/assets/images/Desktop.png"}
          />

          {/* Product Details */}
          <div className='p-4 mt-2'>
            <h3 className='text-sm text-gray-500'>13 JAN 2021</h3>
            <h2 className='text-lg font-semibold text-gray-800'>
              Fashion Trends in 2024
            </h2>
            <p className='text-gray-600 mt-1'>
              A new year means new trends. Fashion experts are predicting that
              statement sleeves, earthy colors, and tracksuits will be all the
              rage ...
            </p>
          </div>
        </div>

        <div className='relative border border-gray-300 rounded-lg w-80  overflow-hidden'>
          <div className='relative'>
            <Image
              width={400}
              height={382}
              alt='logo-sticth'
              src={"/assets/images/news-img-1.png"}
            />
            <h4 className='absolute left-0 bottom-0 bg-accent pl-2 pr-3 pt-[3px] pb-[3px] rounded-tr-full'>
              {" "}
              Trending
            </h4>
          </div>

          {/* Product Details */}
          <div className='p-4 mt-2'>
            <h3 className='text-sm text-gray-500'>13 JAN 2021</h3>
            <h2 className='text-lg font-semibold text-gray-800'>
              Fashion Trends in 2024
            </h2>
            <p className='text-gray-600 mt-1'>
              A new year means new trends. Fashion experts are predicting that
              statement sleeves, earthy colors, and tracksuits will be all the
              rage ...
            </p>
          </div>
        </div>

        <div className='relative border border-gray-300 rounded-lg w-80  overflow-hidden'>
          <div className='relative'>
            <Image
              width={400}
              height={382}
              alt='logo-sticth'
              src={"/assets/images/news-img-1.png"}
            />
            <h4 className='absolute left-0 bottom-0 bg-accent pl-2 pr-3 pt-[3px] pb-[3px] rounded-tr-full'>
              {" "}
              Trending
            </h4>
          </div>

          {/* Product Details */}
          <div className='p-4 mt-2'>
            <h3 className='text-sm text-gray-500'>13 JAN 2021</h3>
            <h2 className='text-lg font-semibold text-gray-800'>
              Fashion Trends in 2024
            </h2>
            <p className='text-gray-600 mt-1'>
              A new year means new trends. Fashion experts are predicting that
              statement sleeves, earthy colors, and tracksuits will be all the
              rage ...
            </p>
          </div>
        </div>

        <div className='relative border border-gray-300 rounded-lg w-80  overflow-hidden'>
          <div className='relative'>
            <Image
              width={400}
              height={382}
              alt='logo-sticth'
              src={"/assets/images/news-img-1.png"}
            />
            <h4 className='absolute left-0 bottom-0 bg-accent pl-2 pr-3 pt-[3px] pb-[3px] rounded-tr-full'>
              {" "}
              Trending
            </h4>
          </div>

          {/* Product Details */}
          <div className='p-4 mt-2'>
            <h3 className='text-sm text-gray-500'>13 JAN 2021</h3>
            <h2 className='text-lg font-semibold text-gray-800'>
              Fashion Trends in 2024
            </h2>
            <p className='text-gray-600 mt-1'>
              A new year means new trends. Fashion experts are predicting that
              statement sleeves, earthy colors, and tracksuits will be all the
              rage ...
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default News;

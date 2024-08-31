import { Main } from "next/document";
import React from "react";
import Image from "next/image";

const WhatClientSay = () => {
  return (
    <main className='mt-[6rem]'>
      <h2 className='text-center font-extrabold leading-[61.45px] text-[48px] font-playfair'>
        {" "}
        What Our Clients Say
      </h2>
      <section className=' flex justify-center gap-4 mt-[2rem]'>
        <div className=' border border-gray-300 rounded-tl-3xl rounded-br-3xl w-80 h-72 p-2 overflow-hidden bg-[#8B9467]'>
          <div className='flex gap-6 items-center'>
            <div className=' m-1 w-[100px] h-[100px] rounded-full overflow-hidden ml-'>
              <Image
                width={267.37}
                height={193}
                alt='logo-sticth'
                src={"/assets/images/Female.png"}
              />
            </div>

            <div className=''>
              <h4 className='font-extrabold font-playfair text-white text-[24px]  leading-[30.73px]'>
                Linda Eze
              </h4>
              <p className='font-secondaryBold font-medium text-white leading-[30.73px] text-[24px]'>
                Entrepreneur
              </p>
            </div>
          </div>

          <p className='mt-6 font-secondaryBold font-medium text-white leading-[36.2px] text-[20px]'>
            Thanks to Stitch, I got my desired wears from a near by Tailor
          </p>

          <div className='flex justify-end items-end  w-full '>
            <Image
              width={50}
              height={100}
              alt='logo-sticth'
              src={"/assets/images/client-say-qtn.png"}
            />
          </div>
        </div>

        <div className=' border border-gray-300 rounded-tl-3xl rounded-br-3xl w-80 h-72 p-2 overflow-hidden '>
          <div className='flex gap-6 items-center'>
            <div className=' m-1 w-[100px] h-[100px] rounded-full overflow-hidden ml-'>
              <Image
                width={267.37}
                height={193}
                alt='logo-sticth'
                src={"/assets/images/Female.png"}
              />
            </div>

            <div className=''>
              <h4 className='font-extrabold font-playfair text-[24px]  leading-[30.73px]'>
                Linda Eze
              </h4>
              <p className='font-secondaryBold font-medium  leading-[30.73px] text-[24px]'>
                Entrepreneur
              </p>
            </div>
          </div>

          <p className='mt-6 font-secondaryBold font-medium leading-[36.2px] text-[20px]'>
            Thanks to Stitch, I got my desired wears from a near by Tailor
          </p>
          <div className='flex justify-end items-end  w-full '>
            <Image
              width={50}
              height={100}
              alt='logo-sticth'
              src={"/assets/images/client-say-qtn2.png"}
            />
          </div>
        </div>

        <div className=' border border-gray-300 rounded-tl-3xl rounded-br-3xl w-80 h-72 p-2 overflow-hidden bg-[#8B9467]'>
          <div className='flex gap-6 items-center'>
            <div className=' m-1 w-[100px] h-[100px] rounded-full overflow-hidden ml-'>
              <Image
                width={267.37}
                height={193}
                alt='logo-sticth'
                src={"/assets/images/Female.png"}
              />
            </div>

            <div className=''>
              <h4 className='font-extrabold font-playfair text-white text-[24px]  leading-[30.73px]'>
                Linda Eze
              </h4>
              <p className='font-secondaryBold font-medium text-white leading-[30.73px] text-[24px]'>
                Entrepreneur
              </p>
            </div>
          </div>

          <p className='mt-6 font-secondaryBold font-medium text-white leading-[36.2px] text-[20px]'>
            Thanks to Stitch, I got my desired wears from a near by Tailor
          </p>

          <div className='flex justify-end items-end  w-full '>
            <Image
              width={50}
              height={100}
              alt='logo-sticth'
              src={"/assets/images/client-say-qtn.png"}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhatClientSay;

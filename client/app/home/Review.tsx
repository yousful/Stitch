import React from "react";
import Image from "next/image";

const Review = () => {
  return (
    <main className='flex justify-around items-center  w-11/12 h-[191px] m-auto font-playfair bg-lightGray'>
      <div className='flex flex-col gap-2 items-center self-center '>
        <Image
          width={48}
          height={48}
          alt='logo-sticth'
          src={"/assets/images/Heart.png"}
        />
        <h2 className='font-medium text-[48px] leading-[60px] text-darkGray'>
          45, 000
        </h2>
        <h5 className='text-[20px] font-medium leading-[28px] text-darkGray font-secondaryNormal'>
          Happy Customers
        </h5>
      </div>

      <div className='flex flex-col gap-2 items-center '>
        <Image
          width={48}
          height={48}
          alt='logo-sticth'
          src={"/assets/images/shirt-icon.png"}
        />
        <h2 className='font-medium text-[48px] leading-[60px] text-darkGray font-playfair'>
          40, 000
        </h2>
        <h5 className='text-[20px] font-medium leading-[28px] text-darkGray font-secondaryNormal'>
          Products Sold
        </h5>
      </div>

      <div className='flex flex-col gap-2 items-center '>
        <Image
          width={48}
          height={48}
          alt='logo-sticth'
          src={"/assets/images/Phone.png"}
        />
        <h2 className='font-medium text-[48px] leading-[60px] text-darkGray font-playfair'>
          32, 146
        </h2>
        <h5 className='text-[20px] font-medium leading-[28px] text-darkGray font-secondaryNormal'>
          Contact Mobile
        </h5>
      </div>
    </main>
  );
};

export default Review;

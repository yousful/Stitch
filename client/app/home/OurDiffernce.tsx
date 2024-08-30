import React from "react";
import Image from "next/image";

const OurDiffernce = () => {
  return (
    <main className='mt-[6rem] w-11/12 m-auto flex flex-col  items-center gap-[5rem]'>
      <h2 className='font-medium font-playfair leading-[16px] text-[36px]'>
        What Makes Us Different
      </h2>
      <section className='flex justify-around w-full'>
        <div className='bg-lightGray p-6 rounded-b-full rounded-t-full rounded-l-full w-[221.49px] h-[285.04px] '>
          <Image
            width={166}
            height={179}
            alt='logo-sticth'
            src={"/assets/images/proffessionalTialor-img.png"}
          />
        </div>
        <div className='bg-lightGray p-6 rounded-b-full rounded-t-full rounded-l-full w-[221.49px] h-[285.04px] '>
          <Image
            width={166}
            height={179}
            alt='AI'
            src={"/assets/images/Ai-img.png"}
          />
        </div>
        <div className='bg-lightGray p-6 rounded-b-full rounded-t-full rounded-l-full w-[221.49px] h-[285.04px] '>
          <Image
            width={166}
            height={179}
            alt='logo-sticth'
            src={"/assets/images/modernDesign-img.png"}
          />
        </div>
      </section>
    </main>
  );
};

export default OurDiffernce;

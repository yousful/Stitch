import React from "react";
import Image from "next/image";

const OurDiffernce = () => {
  return (
    <main className='mt-[6rem] w-11/12 m-auto flex flex-col  items-center gap-[5rem]'>
      <h2 className='font-medium font-playfair leading-[16px] text-[36px]'>
        What Makes Us Different
      </h2>
      <section className='flex justify-around w-full'>
        <div className='flex flex-col gap-3 '>
          <div className='bg-lightGray p-6 rounded-b-full rounded-t-full rounded-l-full w-[221.49px] h-[285.04px] '>
            <Image
              width={166}
              height={179}
              alt='logo-sticth'
              src={"/assets/images/proffessionalTialor-img.png"}
            />
          </div>
          <div>
            <p className='font-semibold  leading-[24.38px] text-[20px] font-playfair'>
              Professional tailor
            </p>
            <p className='font-secondaryNormal font-normal'>
              Our tailors are experienced, and reliable
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-3 '>
          <div className='bg-lightGray p-6 rounded-b-full rounded-t-full rounded-l-full w-[221.49px] h-[285.04px] '>
            <Image
              width={166}
              height={179}
              alt='AI'
              src={"/assets/images/Ai-img.png"}
            />
          </div>
          <div>
            <p className='font-semibold  leading-[24.38px] text-[20px] font-playfair'>
              AI size fit & Recommendation
            </p>
            <p className='font-secondaryNormal font-normal '>
              Get style recommendation that will fit your body
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-3 '>
          <div className='bg-lightGray p-6 rounded-b-full rounded-t-full rounded-l-full w-[221.49px] h-[285.04px] '>
            {/* <Image
              width={166}
              height={179}
              alt='AI'
              src={"/assets/images/Ai-img.png"}
            /> */}

            <Image
              width={166}
              height={179}
              alt='logo-sticth'
              src={"/assets/images/modernDesign-img.png"}
            />
          </div>
          <div>
            <p className='font-semibold  leading-[24.38px] text-[20px] font-playfair'>
              Modern Designs
            </p>
            <p className='font-secondaryNormal font-normal '>
              Our designers keep with trends
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurDiffernce;

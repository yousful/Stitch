import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Explore = () => {
  return (
    <main className='mt-[1rem] flex justify-between '>
      <div className='w-1/2'>
        <h2 className='font-sans text-[48px] leading-[60px] font-medium text-black mb-[1rem]'>
          {" "}
          About
        </h2>

        <Image
          width={200}
          height={2}
          alt='logo-sticth'
          src={"/assets/images/Divider.png"}
        />

        <p className='font-secondaryNormal font-normal text-[16px] leading-[24px] mt-[1rem] '>
          Stitch revolutionizes the fashion industry by connecting customers
          with talented fashion designers and bespoke Tailor. With AI-powered
          size recommendations, you'll find your ideal outfit effortlessly.
          Explore a vast collection of unique designs and enjoy custom designs,
          from traditional Aso-Oke to contemporary styles. Support local
          craftsmanship while enjoying a seamless shopping experience. Stitch is
          more than just an app; it's your personal stylist and fashion
          marketplace.
        </p>

        <Button className=' bg-primary text-accent rounded-3xl border-primary border font-secondaryExraBold font-semibold leading-[24px] mt-[1rem]'>
          Explore Product
        </Button>
      </div>

      <div>
        <Image
          width={518.17}
          height={452.46}
          alt='logo-sticth'
          src={"/assets/images/abt-img.png"}
        />
      </div>
    </main>
  );
};

export default Explore;

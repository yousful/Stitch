import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <main className='flex justify-around'>
      <div className='flex flex-col gap-4 w-[609px]  h-[609px] mt-[3rem]'>
        <p className='leading-[50px] text-[36px] font-medium font-sans w-[609px] h-[150px]'>
          Discover <span className='text-primary'>Fashion </span> That Fits You
          Shop Ready-to-Wear or Customize Your Look
        </p>
        <p className='font-secondaryNormal leading-[29px] text-[24px] font-normal text-darkGray  w-[609px] h-[58px]'>
          From the latest trends to bespoke creations, find your perfect fit
          with top designers.
        </p>

        <div className='flex gap-8'>
          {" "}
          <Button className=' bg-primary text-accent rounded-3xl border-primary border font-secondaryExraBold font-semibold leading-[24px]'>
            Discover designers
          </Button>
          <Button className='bg-accent text-primary rounded-3xl font-secondaryExraBold font-semibold leading-[24px]'>
            Create Store
          </Button>
        </div>
      </div>
      <div className='mt-[4rem]'>
        {" "}
        {/* <Image alt='hero-image' src={"../"} /> */}
        <Image
          width={490}
          height={386}
          alt='logo-sticth'
          src={"/assets/images/hero-img.png"}
        />
      </div>
    </main>
  );
};

export default Hero;

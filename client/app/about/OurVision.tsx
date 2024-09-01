import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const OurVision = () => {
  return (
    <main className='mt-[10rem] flex   justify-between '>
      <div className='w-1/2'>
        <h2 className='font-sans text-[48px] leading-[60px] font-medium text-black mb-[1rem]'>
          {" "}
          Vision
        </h2>

        <Image
          width={200}
          height={2}
          alt='logo-sticth'
          src={"/assets/images/Divider.png"}
        />

        <p className='font-secondaryNormal font-normal text-[16px] leading-[24px] mt-[1rem] '>
          As we continue to grow, our vision remains clear: to become the go-to
          destination for personalized fashion, where every user feels empowered
          to express their unique style, and every designer has the tools to
          bring their creative visions to life.
        </p>
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

export default OurVision;

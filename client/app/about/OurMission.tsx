import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const OurMission = () => {
  return (
    <main className="mt-[10rem] flex flex-col items-center md:flex-row-reverse justify-between ">
      <div className="w-full md:w-1/2">
        <h2 className="font-sans text-[48px] leading-[60px] font-medium text-black mb-[1rem]">
          {" "}
          Mission
        </h2>

        <Image
          width={200}
          height={2}
          alt="logo-sticth"
          src={"/assets/images/Divider.png"}
        />

        <p className="font-secondaryNormal font-normal text-[16px] leading-[24px] mt-[1rem] ">
          Our mission is to revolutionize the way people experience fashion by
          providing access to exclusive designer collections and offering a
          seamless way to create custom-made clothing that perfectly matches
          individual styles and needs
        </p>
      </div>

      <div>
        <Image
          width={518.17}
          height={452.46}
          alt="logo-sticth"
          src={"/assets/images/abt-img.png"}
        />
      </div>
    </main>
  );
};

export default OurMission;

// import { Main } from "next/document";
import React from "react";
import Image from "next/image";

const WhatClientSay = () => {
  const ClientSay = [
    {
      img: "/assets/images/Female.png",
      name: "Linda Eze",
      role: "Entrepreneur",
      text: "  Thanks to Stitch, I got my desired wears from a near by Tailor",
      quote: "/assets/images/client-say-qtn.png",
      bG: "#8B9467",
      Color: "white",
    },
    {
      img: "/assets/images/Female.png",
      name: "Linda Eze",
      role: "Entrepreneur",
      text: "  Thanks to Stitch, I got my desired wears from a near by Tailor",
      quote: "/assets/images/client-say-qtn2.png",
      bG: "#FFF",
      Color: "#000",
    },
    {
      img: "/assets/images/Female.png",
      name: "Linda Eze",
      role: "Entrepreneur",
      text: "  Thanks to Stitch, I got my desired wears from a near by Tailor",
      quote: "/assets/images/client-say-qtn.png",
      bG: "#8B9467",
      Color: "white",
    },
  ];
  return (
    <main className="mt-[6rem] ">
      <h2 className="text-center font-extrabold leading-[61.45px] text-[36px] font-playfair">
        {" "}
        What Our Clients Say
      </h2>
      <section className=" grid md:grid-cols-3 gap-4 mt-[4rem]">
        {ClientSay.map((CS, index) => {
          const { quote, text, name, img, role, bG, Color } = CS;
          return (
            <div
              key={index}
              className={` border border-[#8B9467] rounded-tl-3xl rounded-br-3xl text-[${Color}]  p-4 overflow-hidden bg-[${bG}]`}
            >
              <div className="flex gap-6 items-center">
                <div className=" m-1 w-[100px] h-[100px] rounded-full overflow-hidden ml-">
                  <Image
                    width={267.37}
                    height={193}
                    alt="logo-sticth"
                    src={img}
                  />
                </div>

                <div className="">
                  <h4 className="font-extrabold font-playfair text-[24px]  leading-[30.73px]">
                    {name}
                  </h4>
                  <p className="font-secondaryBold font-medium leading-[30.73px] text-[24px]">
                    {role}
                  </p>
                </div>
              </div>

              <p className="mt-6 font-secondaryBold font-medium leading-[36.2px] text-[20px]">
                {text}
              </p>

              <div className="flex justify-end items-end pt-20  w-full ">
                <Image width={50} height={100} alt="logo-sticth" src={quote} />
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default WhatClientSay;

import React from "react";
import { Button } from "@/components/ui/button";

import Image from "next/image";

const Popular = () => {
  const design = [
    {
      img: "/assets/images/pupolar-designs-img.png",
      title: "Crepe",
      desc: " Patterned Crepe Long Dress",
      amount: "25,000",
    },
    {
      img: "/assets/images/pupolar-designs-img.png",
      title: "Crepe",
      desc: " Patterned Crepe Long Dress",
      amount: "25,000",
    },
    {
      img: "/assets/images/pupolar-designs-img.png",
      title: "Crepe",
      desc: " Patterned Crepe Long Dress",
      amount: "25,000",
    },
    {
      img: "/assets/images/pupolar-designs-img.png",
      title: "Crepe",
      desc: " Patterned Crepe Long Dress",
      amount: "25,000",
    },
    {
      img: "/assets/images/pupolar-designs-img.png",
      title: "Crepe",
      desc: " Patterned Crepe Long Dress",
      amount: "25,000",
    },
    {
      img: "/assets/images/pupolar-designs-img.png",
      title: "Crepe",
      desc: " Patterned Crepe Long Dress",
      amount: "25,000",
    },
  ];
  return (
    <main className="mt-[4rem]">
      <section className="w-full flex justify-between items-center">
        <p className="font-playfair font-medium leading-[16px] text-[20px]">
          {" "}
          Popular Designs{" "}
        </p>
        <Button className="bg-accent text-primary rounded-3xl font-secondaryExraBold font-light leading-[19.2px] text-[16px]">
          View All
        </Button>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mt-[2rem] flex-wrap">
        {design.map((des, index) => {
          const { img, title, desc, amount } = des;
          return (
            <div
              key={index}
              className="relative border border-gray-300  rounded-lg w-80  overflow-hidden"
            >
              <Image width={400} height={382} alt="logo-sticth" src={img} />

              {/* Product Details */}
              <div className="p-4 mt-2">
                <h3 className="text-sm text-gray-500">{title}</h3>
                <h2 className="text-lg font-semibold text-gray-800">{desc}</h2>
                <p className="text-gray-600 mt-1">{amount}</p>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Popular;

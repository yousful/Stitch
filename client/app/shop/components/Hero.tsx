import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="w-full bg-accent h-full flex items-center justify-center">
      <div className="px-[4.5rem] w-full flex md:flex-row flex-col-reverse items-center py-4 gap-y-8 justify-between">
        <div className="flex flex-col gap-10 ">
          <h1 className="font-bold text-4xl text-primary text-pretty">
            Explore Vast Collection of Wears
          </h1>
          <div>
            <Button className="bg-primary text-white rounded-3xl py-4 px-6">
              Buy Now
            </Button>
          </div>
        </div>
        <Image
          src={"/assets/images/shop-hero-img.svg"}
          alt="shop-hero-svg"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}

export default Hero;

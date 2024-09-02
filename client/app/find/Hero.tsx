import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className='w-full bg-accent h-full min-h-[30vh] flex items-center justify-center'>
      <div className='max-w-[1440px] w-full flex items-center justify-between px-2'>
        <div className='flex flex-col gap-10 '>
          <h1 className='font-bold text-4xl text-primary text-pretty'>
            Get your clothes with perfect fit and on Time
          </h1>
          <div>
            <Button className='bg-primary text-white rounded-3xl py-4 px-6'>
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

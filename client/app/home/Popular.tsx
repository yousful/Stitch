import React from "react";
import { Button } from "@/components/ui/button";

const Popular = () => {
  return (
    <main>
      <section className='w-full flex justify-between  items-center'>
        <p className='font-playfair font-medium leading-[16px] text-[20px]'>
          {" "}
          Popular Designs{" "}
        </p>
        <Button className='bg-accent text-primary rounded-3xl font-secondaryExraBold font-light leading-[19.2px] text-[16px]'>
          View All
        </Button>
      </section>
    </main>
  );
};

export default Popular;

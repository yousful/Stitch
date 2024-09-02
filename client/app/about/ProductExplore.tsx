import { Button } from "@/components/ui/button";
import React from "react";

const ProductExplore = () => {
  return (
    <main className='bg-white overflow-auto h-[300px] mt-[4rem] mb-[4rem] flex flex-col items-center justify-center gap-2'>
      <h2 className='font-sans text-[48px] leading-[60px] font-medium text-primary'>
        Ready to discover fashion that fits you?
      </h2>
      <p className='font-secondaryNormal font-normal text-[16px] leading-[24px] text-center w-1/3'>
        Start exploring our collections or create your custom look today.
        Welcome to the future of fashion!!
      </p>

      <Button className=' mt-6 bg-primary text-accent rounded-3xl border-primary border font-secondaryExraBold font-semibold leading-[24px]'>
        Explore Products
      </Button>
    </main>
  );
};

export default ProductExplore;

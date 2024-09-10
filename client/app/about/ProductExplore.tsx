import { Button } from "@/components/ui/button";
import React from "react";

const ProductExplore = () => {
  return (
    <main className="bg-[rgb(236,236,224)] overflow-auto my-[4rem] py-8 flex flex-col items-center justify-center gap-2">
      <h2 className="font-playfair text-xl md:text-3xl font-medium text-primary">
        Ready to discover fashion that fits you?
      </h2>
      <p className="font-sans font-normal text-[16px] leading-[24px] text-center w-2/3 md:w-2/4">
        Start exploring our collections or create your custom look today.
        Welcome to the future of fashion!!
      </p>

      <Button className=" mt-8 bg-primary text-accent rounded-3xl border-primary border font-sans font-semibold leading-[24px]">
        EXPLORE PRODUCTS
      </Button>
    </main>
  );
};

export default ProductExplore;

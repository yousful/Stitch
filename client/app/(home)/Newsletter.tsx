import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Newsletter = () => {
  return (
    <div className="mt-[12rem] flex flex-col md:flex-row gap-y-4 justify-between">
      <p className="font-medium font-playfair text-[22px] md:items-start items-center leading-[36px]">
        Sign up for our Newsletter
      </p>
      <div className="flex w-full md:w-1/2 items-center">
        <Input
          type="email"
          className="rounded-l-3xl  h-[56px] rounded-none"
          placeholder="Type your email here...."
        />

        <Button className="bg-accent text-primary rounded-r-3xl h-[56px] font-secondaryExraBold font-semibold leading-[24px]">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;

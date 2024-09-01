import React from "react";
import Explore from "./Explore";
import OurService from "./OurService";

export default function page() {
  return (
    <div className='min-h-screen h-full pl-[4.5rem] pr-[4.5rem] bg-accent pt-4'>
      <Explore />
      <OurService />
    </div>
  );
}

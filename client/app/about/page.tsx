import React from "react";
import Explore from "./Explore";
import OurService from "./OurService";
import OurMission from "./OurMission";
import OurVision from "./OurVision";
import ProductExplore from "./ProductExplore";
import Newsletter from "../(home)/Newsletter";

export default function page() {
  return (
    <div className="min-h-screen h-full  bg-background pt-4 overflow-y-auto">
      <div className="px-[4.5rem]">
        <Explore />
      </div>

      <div className="pl-[4.5rem] pr-[4.5rem]">
        <OurService />
      </div>

      <div className="pl-[4.5rem] pr-[4.5rem]">
        <OurMission />
      </div>

      <div className="pl-[4.5rem] pr-[4.5rem]">
        <OurVision />
      </div>

      <ProductExplore />

      <div className="pl-[4.5rem] pr-[4.5rem]">
        <Newsletter />
      </div>
    </div>
  );
}

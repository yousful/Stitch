import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const News = () => {
  return (
    <main className="mt-[6rem]">
      <section className="grid md:grid-cols-3 gap-8">
        <div className="relative border border-gray-300 rounded-3xl  shadow-md hover:shadow-2xl  overflow-hidden">
          <Image
            width={400}
            height={382}
            alt="logo-sticth"
            src={"/assets/images/Desktop.png"}
          />

          {/* Product Details */}
          <div className="p-4 mt-2">
            <h3 className="text-sm text-gray-500">13 JAN 2021</h3>
            <h2 className="text-lg font-semibold text-gray-800">
              Fashion Trends in 2024
            </h2>
            <p className="text-gray-600 mt-1">
              A new year means new trends. Fashion experts are predicting that
              statement sleeves, earthy colors, and tracksuits will be all the
              rage ...
            </p>
          </div>
        </div>

        <div className="relative border border-gray-300 rounded-3xl  shadow-md  hover:shadow-2xl overflow-hidden">
          <div className="relative">
            <Image
              width={400}
              height={382}
              alt="logo-sticth"
              src={"/assets/images/news-img-1.png"}
            />
            <h4 className="absolute left-0 bottom-0 bg-accent pl-2 pr-3 pt-[3px] pb-[3px] rounded-tr-full">
              {" "}
              Trending
            </h4>
          </div>

          {/* Product Details */}
          <div className="p-4 mt-2">
            <h3 className="text-sm text-gray-500">13 JAN 2021</h3>
            <h2 className="text-lg font-semibold text-gray-800">
              Fashion Trends in 2024
            </h2>
            <p className="text-gray-600 mt-1">
              A new year means new trends. Fashion experts are predicting that
              statement sleeves, earthy colors, and tracksuits will be all the
              rage ...
            </p>
          </div>
        </div>

        <div className="relative border border-gray-300 rounded-3xl shadow-md hover:shadow-2xl overflow-hidden">
          <div className="relative">
            <Image
              width={400}
              height={382}
              alt="logo-sticth"
              src={"/assets/images/news-img-1.png"}
            />
            <h4 className="absolute left-0 bottom-0 bg-accent pl-2 pr-3 pt-[3px] pb-[3px] rounded-tr-full">
              {" "}
              Trending
            </h4>
          </div>

          {/* Product Details */}
          <div className="p-4 mt-2">
            <h3 className="text-sm text-gray-500">13 JAN 2021</h3>
            <h2 className="text-lg font-semibold text-gray-800">
              Fashion Trends in 2024
            </h2>
            <p className="text-gray-600 mt-1">
              A new year means new trends. Fashion experts are predicting that
              statement sleeves, earthy colors, and tracksuits will be all the
              rage ...
            </p>
          </div>
        </div>
      </section>

      <div className="flex text-center mt-20 justify-center">
        <button className="p-3 border-[2px] rounded-3xl text-[#8B9467] border-[#8B9467]">
          READ MORE{" "}
        </button>
      </div>
    </main>
  );
};

export default News;

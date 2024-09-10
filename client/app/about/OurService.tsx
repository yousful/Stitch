import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const OurService = () => {
  return (
    <main className="mt-[6rem]">
      <section className="flex space-y-10 flex-col items-center">
        <h2 className="font-playfair text-[24px] md:text-[40px] text-center font-medium text-black">
          We Provide Valuable Service At All Time
        </h2>

        <p className="font-secondaryNormal w-full md:w-1/2  text-[px]">
          Effortlessly browse and shop ready-to-wear collections from top
          designers or take control of your style by working directly with
          designers to create bespoke, custom-tailored pieces.
        </p>
      </section>

      <section className="mt-[5rem]">
        <div className="bg-white border-[#D2D2D2] border-[1px] rounded-xl shadow-2xl p-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-y-8 p-5 border-b-[1px]">
            <div className="flex items-start gap-4">
              <div>
                <Image
                  src={"/assets/images/shop-icon.png"}
                  width={80}
                  height={80}
                  alt="van img"
                />
              </div>
              <div className="space-y-4">
                <p className="font-playfair font-semibold">
                  Shop for Trendy Wears
                </p>
                <p className="font-sans w-2/3">
                  Get unique outfit for any occasion from our top rated
                  designers
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div>
                <Image
                  src={"/assets/images/sell-icon.png"}
                  width={80}
                  height={80}
                  alt="van img"
                />
              </div>
              <div className="space-y-4">
                <p className="font-playfair font-semibold">Sell your wears</p>
                <p className="font-sans w-2/3">
                  Register your store to reach a wide range of customers
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-y-8 items-center p-5">
            <div className="flex items-start gap-4">
              <div>
                <Image
                  src={"/assets/images/mesurement-icon.png"}
                  width={80}
                  height={80}
                  alt="van img"
                />
              </div>
              <div className="space-y-4">
                <p className="font-playfair font-bold">
                  Request for Size recommendation
                </p>
                <p className="font-sans w-2/3">
                  Get the perfect fit using our AI size recommendation tool
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div>
                <Image
                  src={"/assets/images/van.png"}
                  width={80}
                  height={80}
                  alt="van img"
                />
              </div>
              <div className="space-y-4">
                <p className="font-playfair font-bold">
                  Get your wears delivered to you
                </p>
                <p className="font-sans w-2/3">
                  Register your store to reach a wide range of customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurService;

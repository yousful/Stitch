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
    <main className='mt-[6rem]'>
      <section className='flex flex-col items-center'>
        <h2 className='font-sans text-[48px] leading-[60px] font-medium text-black'>
          We Provide Valuable Service At All Time
        </h2>

        <p className='font-secondaryNormal leading-[17.6px] w-[42%] text-[px]'>
          Effortlessly browse and shop ready-to-wear collections from top
          designers or take control of your style by working directly with
          designers to create bespoke, custom-tailored pieces.
        </p>
      </section>

      <section className='mt-[5rem]'>
        <Card className='flex flex-col justify-center items-center h-[400px] gap-6'>
          <div className='flex justify-center   '>
            <div className='flex gap-6'>
              <div>
                <Image
                  width={91}
                  height={90}
                  alt='shop'
                  src={"/assets/images/shop-icon.png"}
                />
              </div>

              <div>
                <p className='font-sans font-semibold text-[25px] leading-[44.48px]'>
                  Shop for trendy wears
                </p>
                <p className='font-secondaryNormal font-normal text-[16px] leading-[28.46px] w-[70%]'>
                  Get unique outfit for any occasion from our top rated
                  designers
                </p>
              </div>
            </div>

            {/* second */}

            <div className='flex gap-6'>
              <div>
                <Image
                  width={91}
                  height={90}
                  alt='shop'
                  src={"/assets/images/mesurement-icon.png"}
                />
              </div>

              <div>
                <p className='font-sans font-semibold text-[25px] leading-[44.48px]'>
                  Request for Size recommendation
                </p>
                <p className='font-secondaryNormal font-normal text-[16px] leading-[28.46px] w-[70%]'>
                  Get the perfect fit using our AI size recommendation tool
                </p>
              </div>
            </div>
          </div>

          <div>
            <Image
              width={960}
              height={2}
              alt='shop'
              src={"/assets/images/line 4.png"}
              className='bg-gray'
            />
          </div>

          {/* secode row */}

          <div className='flex justify-center gap-12   '>
            <div className='flex gap-6'>
              <div>
                <Image
                  width={91}
                  height={90}
                  alt='shop'
                  src={"/assets/images/delivary-icon.png"}
                />
              </div>

              <div>
                <p className='font-sans font-semibold text-[25px] leading-[44.48px]'>
                  Sell your wears
                </p>
                <p className='font-secondaryNormal font-normal text-[16px] leading-[28.46px] w-[70%]'>
                  Register your store to reach a wide range of customers
                </p>
              </div>
            </div>

            {/* second */}

            <div className='flex gap-6'>
              <div>
                <Image
                  width={91}
                  height={90}
                  alt='shop'
                  src={"/assets/images/van.png"}
                />
              </div>

              <div>
                <p className='font-sans font-semibold text-[25px] leading-[44.48px]'>
                  Get your wears delivered to you
                </p>
                <p className='font-secondaryNormal font-normal text-[16px] leading-[28.46px] w-[70%]'>
                  Get the perfect fit using our AI size recommendation tool
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
};

export default OurService;

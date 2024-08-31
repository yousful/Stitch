import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TopRated = () => {
  return (
    <main className=' mt-[4rem] w-11/12 m-auto '>
      <section className='w-full flex justify-between  items-center'>
        <p className='font-playfair font-medium leading-[16px] text-[20px]'>
          {" "}
          Top Rated Designers{" "}
        </p>
        <Button className='bg-accent text-primary rounded-3xl font-secondaryExraBold font-light leading-[19.2px] text-[16px]'>
          View All
        </Button>
      </section>

      {/* card seco */}

      <section className='flex justify-between mt-4'>
        <Card className='w-[400px] '>
          <Image
            width={400}
            height={174}
            alt='logo-sticth'
            src={"/assets/images/topRate-img.png"}
          />
          <div className='flex justify-between mt-2 p-2'>
            <div className='flex flex-col gap-3'>
              <CardHeader className='font-medium font-playfair leading-[15.85px] text-[16px] p-0'>
                Dee Store
              </CardHeader>
              <CardContent className='font-secondaryNormal font-normal leading-[17px] p-0 text-[14px]'>
                Lorem ipsum dolor sit amet consectetur. Suspendisse et dui neque
                tincidunt at imperdiet a nam fusce.&{" "}
              </CardContent>

              <div className='flex gap-6 items-center'>
                <div className='flex gap-1 items-center'>
                  <Image
                    width={15}
                    height={15}
                    alt='logo-sticth'
                    src={"/assets/images/entypo_location-pin.png"}
                  />
                  <p className='font-secondaryNormal leading-[15px] text-[15px]'>
                    Jabi
                  </p>
                </div>
                <p className='font-secondaryNormal leading-[15px] text-[15px] cursor-pointer'>
                  view on map
                </p>
              </div>
              <p className='font-secondaryNormal leading-[8px] text-gray'>
                2km from your location
              </p>

              <div className='flex gap-8 mt-[3rem]'>
                {" "}
                <Button className=' bg-primary text-accent rounded-3xl w-[100px] border-primary border font-secondaryExraBold font-semibold leading-[24px]'>
                  Chat
                </Button>
                <Button className='bg-accent text-primary rounded-3xl  w-[100px] font-secondaryExraBold font-semibold leading-[24px]'>
                  Book
                </Button>
              </div>
            </div>
            <div className='flex gap-2'>
              <div className='h-[24px] w-[24px] cursor-pointer'>
                <Image
                  // width={12}
                  // height={15.4}
                  width={20}
                  height={20}
                  alt='bookmark'
                  src={"/assets/images/bookMark-icon.png"}
                />
              </div>

              <div className='h-[24px] w-[24px] cursor-pointer'>
                <Image
                  width={20}
                  height={20}
                  alt='share'
                  src={"/assets/images/share.png"}
                />
              </div>
            </div>
          </div>
        </Card>

        {/* 2 */}

        <Card className='w-[400px] '>
          <Image
            width={400}
            height={174}
            alt='logo-sticth'
            src={"/assets/images/topRate-img.png"}
          />
          <div className='flex justify-between mt-2 p-2'>
            <div className='flex flex-col gap-3'>
              <CardHeader className='font-medium font-playfair leading-[15.85px] text-[16px] p-0'>
                Dee Store
              </CardHeader>
              <CardContent className='font-secondaryNormal font-normal leading-[17px] p-0 text-[14px]'>
                Lorem ipsum dolor sit amet consectetur. Suspendisse et dui neque
                tincidunt at imperdiet a nam fusce.&{" "}
              </CardContent>

              <div className='flex gap-6 items-center'>
                <div className='flex gap-1 items-center'>
                  <Image
                    width={15}
                    height={15}
                    alt='logo-sticth'
                    src={"/assets/images/entypo_location-pin.png"}
                  />
                  <p className='font-secondaryNormal leading-[15px] text-[15px]'>
                    Jabi
                  </p>
                </div>
                <p className='font-secondaryNormal leading-[15px] text-[15px] cursor-pointer'>
                  view on map
                </p>
              </div>
              <p className='font-secondaryNormal leading-[8px] text-gray'>
                2km from your location
              </p>

              <div className='flex gap-8 mt-[3rem]'>
                {" "}
                <Button className=' bg-primary text-accent rounded-3xl w-[100px] border-primary border font-secondaryExraBold font-semibold leading-[24px]'>
                  Chat
                </Button>
                <Button className='bg-accent text-primary rounded-3xl  w-[100px] font-secondaryExraBold font-semibold leading-[24px]'>
                  Book
                </Button>
              </div>
            </div>
            <div className='flex gap-2'>
              <div className='h-[24px] w-[24px] cursor-pointer'>
                <Image
                  // width={12}
                  // height={15.4}
                  width={20}
                  height={20}
                  alt='bookmark'
                  src={"/assets/images/bookMark-icon.png"}
                />
              </div>

              <div className='h-[24px] w-[24px] cursor-pointer'>
                <Image
                  width={20}
                  height={20}
                  alt='share'
                  src={"/assets/images/share.png"}
                />
              </div>
            </div>
          </div>
        </Card>

        {/* 3 */}

        <Card className='w-[400px] '>
          <Image
            width={400}
            height={174}
            alt='logo-sticth'
            src={"/assets/images/topRate-img.png"}
          />
          <div className='flex justify-between mt-2 p-2'>
            <div className='flex flex-col gap-3'>
              <CardHeader className='font-medium font-playfair leading-[15.85px] text-[16px] p-0'>
                Dee Store
              </CardHeader>
              <CardContent className='font-secondaryNormal font-normal leading-[17px] p-0 text-[14px]'>
                Lorem ipsum dolor sit amet consectetur. Suspendisse et dui neque
                tincidunt at imperdiet a nam fusce.&{" "}
              </CardContent>

              <div className='flex gap-6 items-center'>
                <div className='flex gap-1 items-center'>
                  <Image
                    width={15}
                    height={15}
                    alt='logo-sticth'
                    src={"/assets/images/entypo_location-pin.png"}
                  />
                  <p className='font-secondaryNormal leading-[15px] text-[15px]'>
                    Jabi
                  </p>
                </div>
                <p className='font-secondaryNormal leading-[15px] text-[15px] cursor-pointer'>
                  view on map
                </p>
              </div>
              <p className='font-secondaryNormal leading-[8px] text-gray'>
                2km from your location
              </p>

              <div className='flex gap-8 mt-[3rem]'>
                {" "}
                <Button className=' bg-primary text-accent rounded-3xl w-[100px] border-primary border font-secondaryExraBold font-semibold leading-[24px]'>
                  Chat
                </Button>
                <Button className='bg-accent text-primary rounded-3xl  w-[100px] font-secondaryExraBold font-semibold leading-[24px]'>
                  Book
                </Button>
              </div>
            </div>
            <div className='flex gap-2'>
              <div className='h-[24px] w-[24px] cursor-pointer'>
                <Image
                  // width={12}
                  // height={15.4}
                  width={20}
                  height={20}
                  alt='bookmark'
                  src={"/assets/images/bookMark-icon.png"}
                />
              </div>

              <div className='h-[24px] w-[24px] cursor-pointer'>
                <Image
                  width={20}
                  height={20}
                  alt='share'
                  src={"/assets/images/share.png"}
                />
              </div>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
};

export default TopRated;

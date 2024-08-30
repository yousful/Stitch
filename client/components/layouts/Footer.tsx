import { footerLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiFacebookFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className='w-full h-[20rem] bg-accent flex justify-center mt-[4rem]'>
      <section className='max-w-[1440px] w-full flex justify-between items-center'>
        <div className='flex flex-col gap-4'>
          <Image
            width={140}
            height={140}
            alt='logo-sticth'
            src={"/assets/images/stitch-logo.svg"}
          />
          <p>info@stitch.com</p>
          <p>+234 70 233 2343</p>
          <div className='flex items-center gap-4'>
            <BsTwitterX size={24} />
            <IoLogoLinkedin size={24} />
            <RiFacebookFill size={24} />

            <PiInstagramLogoFill size={24} />
          </div>
        </div>
        <div className='flex flex-col gap-2 '>
          <h2 className='text-xl font-bold'>Shop</h2>
          <div className='flex flex-col gap-2 '>
            {footerLinks["Shop"].map((link, index) => (
              <Link key={index} href={link?.url}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-2 '>
          <h2 className='text-xl font-bold'>About Us</h2>
          <div className='flex flex-col gap-2 '>
            {footerLinks["About Us"].map((link, index) => (
              <Link key={index} href={link?.url}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-2 '>
          <h2 className='text-xl font-bold'>Help</h2>
          <div className='flex flex-col gap-2 '>
            {footerLinks["Help"].map((link, index) => (
              <Link key={index} href={link?.url}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-2 '>
          <h2 className='text-xl font-bold'>Support</h2>
          <div className='flex flex-col gap-2 '>
            {footerLinks["Support"].map((link, index) => (
              <Link key={index} href={link?.url}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;

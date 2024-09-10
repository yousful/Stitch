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
    <footer className="w-full  bg-accent font-playfair flex justify-center mt-[4rem]">
      <section className="px-[4.5rem] my-12 w-full flex gap-y-6 flex-col md:flex-row justify-center md:justify-between items-start">
        <div className="flex flex-col text-left">
          <Image
            width={140}
            height={140}
            alt="logo-sticth"
            src={"/assets/images/stitch-logo.svg"}
            className="pb-4"
          />
          <div className="space-y-2 font-semibold font-secondaryNormal">
            <p>info@stitch.com</p>
            <p className="pb-4">+234 70 233 2343</p>
            <div className="flex items-center gap-4">
              <BsTwitterX size={24} />
              <IoLogoLinkedin size={24} />
              <RiFacebookFill size={24} />

              <PiInstagramLogoFill size={24} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-left">
          <h2 className="text-xl font-bold">Shop</h2>
          <div className="flex flex-col gap-2 font-secondaryNormal">
            {footerLinks["Shop"].map((link, index) => (
              <Link key={index} href={link?.url}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <h2 className="text-xl font-bold">About Us</h2>
          <div className="flex flex-col gap-2 font-secondaryNormal">
            {footerLinks["About Us"].map((link, index) => (
              <Link key={index} href={link?.url}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <h2 className="text-xl font-bold">Help</h2>
          <div className="flex flex-col gap-2 font-secondaryNormal ">
            {footerLinks["Help"].map((link, index) => (
              <Link key={index} href={link?.url}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <h2 className="text-xl font-bold">Support</h2>
          <div className="flex flex-col gap-2 font-secondaryNormal font-normal">
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

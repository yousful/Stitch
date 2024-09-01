"use client";

import React from "react";
import { Bell, Menu } from "lucide-react";
import { useDashboard } from '../DashboardContext';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

export default function DashboardHeader() {
  const { currentTitle } = useDashboard();

  return (
    <header className="flex items-center justify-between py-5 pr-7">
      <h1 className="text-xl font-semibold">{currentTitle}</h1>

      <div className="flex items-center gap-x-4">
        {/* Notifications Button */}
        <Popover>
          <PopoverTrigger asChild>
            <button className="relative p-2 rounded-full bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
              <Bell className="w-7 h-7 text-primary" />
              {/* <span className="absolute top-0 right-1 w-5 h-5 rounded-full text-destructive text-xs font-bold flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                3
              </span> */}
            </button>
          </PopoverTrigger>
          <PopoverContent className="p-4 bg-white rounded-lg shadow-lg text-black">
            <p>No new notifications</p>
            <p>No new notifications</p>
            <p>No new notifications</p>
          </PopoverContent>
        </Popover>

        {/* User Avatar */}
        <Avatar className="w-10 h-10">
          <AvatarImage
            className="object-cover w-full h-full rounded-full"
            src="/assets/images/product-imag.svg"
            alt="User Avatar"
          />
          <AvatarFallback className="bg-primary text-white">US</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

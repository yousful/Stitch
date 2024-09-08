'use client';

import React from "react";
import { Bell, Menu } from "lucide-react";
import { useDashboard } from '../DashboardContext';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';

export default function DashboardHeader() {
  const { currentTitle, setSidebarOpen } = useDashboard();

  return (
    <header className="flex items-center justify-between py-5 pr-10">
      <div className="flex items-center gap-x-4">
        {/* Menu Icon for Mobile */}
        <Menu className="w-7 h-7 lg:hidden" onClick={() => setSidebarOpen(true)} />

        <h1 className="text-xl font-semibold">{currentTitle}</h1>
      </div>

      <div className="flex items-center gap-x-4">
        {/* Notifications Button */}
        <Popover>
          <PopoverTrigger asChild>
            <button className="relative p-2 rounded-full bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
              <Bell className="w-7 h-7 text-primary" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="p-4 bg-white rounded-lg shadow-lg text-black">
            <p>No new notifications</p>
          </PopoverContent>
        </Popover>

        {/* User Avatar */}
        {/* <Avatar className="w-10 h-10">
          <AvatarImage
            className="object-cover w-full h-full rounded-full"
            src="/assets/images/product-imag.svg"
            alt="User Avatar"
          />
          <AvatarFallback className="bg-primary text-white">US</AvatarFallback>
        </Avatar> */}
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                  <Avatar className="w-10 h-10">
          <AvatarImage
            className="object-cover w-full h-full rounded-full"
            src="/assets/images/product-imag.svg"
            alt="User Avatar"
          />
          <AvatarFallback className="bg-primary text-white">US</AvatarFallback>
        </Avatar>
                
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
      </div>
    </header>
  );
}

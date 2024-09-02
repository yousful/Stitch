"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { Box, Grid, Home, Package, Settings, Star, Menu, X } from 'lucide-react';
import { useDashboard } from '../DashboardContext';
import Image from "next/image";
import * as Popover from '@radix-ui/react-popover';
import { Button } from "@/components/ui/button";  // Assuming you have a button component from Shadcn

function DashboardSidebar() {
  const pathname = usePathname();
  const { setCurrentTitle } = useDashboard();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const links = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/dashboard/products', label: 'Products', icon: Box },
    { href: '/dashboard/orders', label: 'Orders', icon: Package },
    { href: '/dashboard/reviews', label: 'Reviews', icon: Star },
    { href: '/dashboard/settings', label: 'Settings', icon: Settings },
  ];

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === href || pathname === `${href}/`;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      <div className="lg:hidden p-4">
        <Button
          variant="outline"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex items-center space-x-2 text-white"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          <span>Menu</span>
        </Button>
      </div>

      {/* Sidebar */}
      <Popover.Root open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <Popover.Content sideOffset={10} className="lg:hidden fixed inset-y-0 left-0 z-50 w-64 h-screen bg-primary p-6 text-white transform transition-transform duration-300 ease-in-out">
          <div className="flex items-center justify-between mb-8">
            <Image priority width={100} height={40} alt="logo-stitch" src={'/assets/images/Logo(whte).svg'} />
            <Button variant="ghost" onClick={() => setSidebarOpen(false)}>
              <X className="w-5 h-5" />
            </Button>
          </div>
          <ul className="space-y-4">
            {links.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-x-4 text-lg font-semibold px-4 py-2 rounded-xl ${isActive(href) ? 'bg-accent text-primary' : 'text-white'}`}
                  onClick={() => {
                    setCurrentTitle(label);
                    setSidebarOpen(false);
                  }}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Popover.Content>

        <nav className={`hidden lg:block inset-y-0 left-0 w-64 h-screen bg-primary p-6 text-white transition-transform duration-300 transform`}>
          <div className="flex items-center justify-between mb-8">
            <Image priority width={100} height={40} alt='logo-stitch' src={'/assets/images/Logo(whte).svg'} />
          </div>
          <ul className="space-y-4">
            {links.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-x-4 text-lg font-semibold px-4 py-2 rounded-xl ${isActive(href) ? 'bg-accent text-primary' : 'text-white'}`}
                  onClick={() => setCurrentTitle(label)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Popover.Root>
    </>
  );
}

export default DashboardSidebar;

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Box, Home, Package, Settings, Star, X, Menu, ShoppingCart, Package2 } from 'lucide-react';
import { useDashboard } from '../DashboardContext';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

function DashboardSidebar() {
  const pathname = usePathname();
  const { setCurrentTitle, isSidebarOpen, setSidebarOpen } = useDashboard();

  const links = [
    { href: '/dashboard', label: 'Dashboard', icon: Package },
    { href: '/dashboard/products', label: 'Products', icon: Package2 },
    { href: '/dashboard/orders', label: 'Orders', icon: ShoppingCart },
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
      {/* Sidebar for Mobile */}
      <Sheet open={isSidebarOpen} onOpenChange={setSidebarOpen}>
      

        <SheetContent side="left" className="lg:hidden w-64 h-screen bg-primary p-6 text-white">
          <div className="flex items-center justify-between mb-8">
            <Image priority width={100} height={40} alt="logo-stitch" src={'/assets/images/Logo(whte).svg'} />
            <X className="w-5 h-5 cursor-pointer" onClick={() => setSidebarOpen(false)} />

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
        </SheetContent>
      </Sheet>

      {/* Sidebar for Desktop */}
      <nav className="hidden lg:block w-64 h-screen bg-primary p-6 text-white">
        <div className="flex items-center justify-between mb-8">
          <Image priority width={100} height={40} alt="logo-stitch" src={'/assets/images/Logo(whte).svg'} />
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
    </>
  );
}

export default DashboardSidebar;

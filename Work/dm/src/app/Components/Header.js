"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import Button from "./Miscellaneous/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link"

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-97/100 px-4 py-4 bg-[#1c1d23]/50 border border-[#282a2f] shadow rounded-full m-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LEFT LOGO */}
        <Image src="/OmniaLogo.svg" alt="logo" width={180} height={40} />

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={32} />}
        </button>

        {/* NAVIGATION - DESKTOP */}
        <div className="hidden lg:flex items-center gap-12 font-bold">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-12">

              <NavigationMenuItem>
                
                <NavigationMenuLink asChild>
                  <Link href="/">
                  Home
                  </Link>
                  </NavigationMenuLink>
                
              </NavigationMenuItem>

              <NavigationMenuItem>
                
                <NavigationMenuLink asChild>
                  <Link href="/about">
                  About Us
                  </Link>
                  </NavigationMenuLink>
                
              </NavigationMenuItem>

              <NavigationMenuItem>
                
                <NavigationMenuLink asChild>
                  <Link href="/services">
                  Services
                  </Link>
                  </NavigationMenuLink>
                
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink>Contact Us</NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* RIGHT BUTTON (DESKTOP ONLY) */}
        <div className="hidden lg:flex items-center">
          <Button content="Get Started" />
        </div>

      </div>

      {/* MOBILE DROPDOWN NAV */}
      {open && (
        <div className="
    lg:hidden
    fixed inset-0 
    h-screen w-screen
    bg-[#2e373a]
    z-[9999]
    p-8
    text-white
    font-semibold
    overflow-y-auto
  ">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={() => setOpen(false)}>
              <X size={32} />
            </button>
          </div>

          <hr className="w-full border-[#25262c]" />
          <div className="space-y-6">

            <a className="block">Home</a>

            {/* ABOUT US */}
            <a className="block">About Us</a>

            <a className="block">Services</a>

            <a className="block">Contact Us</a>

            <div className="pt-6">
              <Button content="Get Started" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

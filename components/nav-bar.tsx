"use client";
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/nav-bar-menu";
import { ModeToggle } from "./ui/toggle-theme-button";
import Image from "next/image";
import NavBarIconBlack from "@/public/logo-black.png";
import NavBarIconWhite from "@/public/logo-white.png";
import { useTheme } from "next-themes";

export function NavbarDemo() {
  return (
    <div className="absolute top-0 left-0 right-0 w-full z-50 flex items-center justify-between px-10 h-[100px] dark:bg-black/30  bg-white/30 border-b">
      <p className="text-2xl font-semibold text-white ">Cin Logos</p>
      <Navbar />
      <ModeToggle />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn(className)}>
      <Menu setActive={setActive}>
        <div className="flex items-center gap-6">
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">
                Interface Design
              </HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Products"
          ></MenuItem>
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}

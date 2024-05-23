"use client";
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/nav-bar-menu";
import { ModeToggle } from "./ui/toggle-theme-button";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon, MountainIcon, Satellite } from "lucide-react";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="absolute top-0 left-0 right-0 w-full z-50 py-4 lg:py-0 bg-primary-foreground px-3 lg:px-0">
      <div className="hidden lg:flex  items-center justify-between px-10 h-[100px] dark:bg-black/30  bg-white/30 border-b">
        <Link href={"/"}>
          <Satellite size={28} className="cursor-pointer" />
        </Link>
        <Navbar />
        <ModeToggle />
      </div>
      <div className="block lg:hidden">
        <Sheet>
          <div className="flex items-center justify-between">
            <SheetTrigger asChild>
              <Button className="lg:hidden" size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>

            <Link className="mr-6 hidden lg:flex" href="/">
              <Satellite className="cursor-pointer" />
            </Link>
          </div>
          <SheetContent side="left">
            <SheetClose>
              <Link className="mr-6 hidden lg:flex" href="/">
                <MountainIcon className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
            </SheetClose>
            <div className="grid gap-2 py-6">
              <SheetClose>
                <Link
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  href="/"
                >
                  Home
                </Link>
              </SheetClose>
              <SheetClose>
                <Link
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  href="/galery"
                >
                  Galery
                </Link>
              </SheetClose>
              <SheetClose>
                <Link
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  href="/services"
                >
                  Services
                </Link>
              </SheetClose>
              <SheetClose>
                <Link
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  href="/pricing"
                >
                  Pricing
                </Link>
              </SheetClose>
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
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
          <MenuItem setActive={setActive} active={active} item="Galery">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/galery">Galery</HoveredLink>
            </div>
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}

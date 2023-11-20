"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/_lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/_components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";

export function MainNav() {
  const currentPathName = usePathname();

  return (
    <header className="container max-w-screen-lg">
      <div className="flex justify-between items-center py-4 lg:p-12 relative">
        <p className="text-xl font-bold">MikeCebul</p>
        <NavigationMenu className="justify-end">
          <NavigationMenuList className="space-x-4">
            <NavigationMenuItem>
              <Link
                href="/resume.pdf"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "font-semibold"
                )}
              >
                CV
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

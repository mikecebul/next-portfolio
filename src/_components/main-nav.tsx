"use client";

import * as React from "react";
import Link from "next/link";

import { cn, isActiveRoute } from "@/_lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/_components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/_config/site";
import { ModeToggle } from "./mode-toggle";

export function MainNav() {
  const currentPathName = usePathname();

  return (
    <div className="flex justify-center items-center py-12 container relative">
      <p className="text-xl font-bold absolute left-8 lg:left-16">MikeCebul</p>
      <NavigationMenu className="justify-around">
        <NavigationMenuList className="hidden">
          {siteConfig.NavLinks.map((item) => (
            <NavigationMenuItem key={item.title}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), {
                    "": isActiveRoute(currentPathName as string, item.href),
                  })}
                >
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="absolute right-8 lg:right-16">
        <ModeToggle />
      </div>
    </div>
  );
}

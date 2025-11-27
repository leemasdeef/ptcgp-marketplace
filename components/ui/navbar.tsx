"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";
import { Input } from "./input";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const isMobile = useIsMobile();

  return (
    <NavigationMenu
      className="h-20 w-full bg-blue-950 text-white"
      viewport={isMobile}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink>PokeHunt</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Input className="grow" placeholder="Search..."></Input>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink>
            <ShoppingCart />
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

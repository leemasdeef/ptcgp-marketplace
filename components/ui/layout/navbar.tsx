"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../navigation-menu";
import { ShoppingCart } from "lucide-react";
import Search from "../search";
import Link from "next/link";

export default function Navbar() {
  const isMobile = useIsMobile();

  return (
    <NavigationMenu
      className="h-20 w-full bg-blue-950 text-white"
      viewport={isMobile}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/">PokeHunt</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Search />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/cart" aria-label="Cart">
              <ShoppingCart />
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="sticky top-0 z-10 bg-black text-white">
      <div className="container mx-auto bg-black px-4 text-white">
        <div className="flex items-center justify-between py-4">
          <h1
            className="cursor-pointer text-2xl font-bold"
            onClick={() => router.push("/")}
          >
            Blog
          </h1>

          <div className="hidden md:block">
            <div className="flex cursor-pointer items-center gap-8">
              <h3 onClick={() => router.push("/")}>Home</h3>
              <h3 onClick={() => router.push("/profile")}>Profile</h3>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="block md:hidden">
              <Button>
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push("/")}>
                Home
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/profile")}>Profile</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

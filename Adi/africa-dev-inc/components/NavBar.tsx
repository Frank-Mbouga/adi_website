"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { navBarLinks } from "@/lib/navBarLinks";


 

const NavBar = () => {

  const pathName = usePathname();
  return (
    <section className="w-[95%] mx-auto ">
      <section className="web flex items-center justify-between just" id="boy">
      <div className="image-holder w-[40%]">
            <Image
              src={"/images/adiLogo.jpg"}
              alt="logo"
              width={200}
              height={200}
              className="w-[60px] h-[60px] rounded"
            />
          </div>
        <nav className="">
          <ul className="flex  gap-4 ">
            {navBarLinks.map((link, index) => {
              const isActive =
                pathName === link.url || pathName.startsWith(`${link.url}/`);
              return (
                <li
                  className={cn(
                    "cursor-pointer capitalize  hover:text-red  underline-offset-8 text-xl",
                    { "text-red  underline-offset-8 ": isActive }
                  )}
                  key={link.label}
                >
                  <Link href={link.url}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
      <MobileNav />
    </section>
  );
};

export default NavBar;

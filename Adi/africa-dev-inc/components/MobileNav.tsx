import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { navBarLinks } from "@/lib/navBarLinks";

const MobileNav = () => {
  const pathName = usePathname();

  return (
    <div className="lg:hidden sticky top-4">
      <div className="flex items-center justify-between  ">
        <div className="image-holder">
          <Image
            src={"/images/logo1.png"}
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <section className="relative">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent className="opacity-90 bg-white">
              <nav>
                <ul className="  border border-r-0 border-l-0 my-5 py-4">
                  {navBarLinks.map((link, index) => {
                    const isActive =
                      pathName === link.url ||
                      pathName.startsWith(`${link.url}/`);
                    return (
                      <SheetClose key={link.label} asChild>
                        <li
                          className={cn(
                            "cursor-pointer py-2 capitalize  hover:text-red hover:underline underline-offset-8 text-xl",
                            {
                              "text-red underline underline-offset-8 ":
                                isActive,
                            }
                          )}
                        >
                          <SheetClose asChild>
                            <Link href={link.url}>{link.label}</Link>
                          </SheetClose>
                        </li>
                      </SheetClose>
                    );
                  })}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </section>
      </div>
    </div>
  );
};

export default MobileNav;

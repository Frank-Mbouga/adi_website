"use client";
import { sidebarLinks } from "@/lib/navBarLinks";
// import { getLoggedInUser, logOutAccount } from "@/lib/Actions/user.actions";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {useRouter} from "next/navigation";
import React from "react";
// import logo from "../components/"
const SideBar =   () => {
  const pathName = usePathname();
  const router = useRouter();
  const handleLogout =  async () => {
    // const loggedOutUser =  await logOutAccount();
    // console.log(loggedOutUser);
  }
  return (
    <section className="sidebar h-[100vh] shadow-2xl">
      <nav className="flex flex-col gap-6">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-3">
          {/* <Logo /> */}
        </Link>
        {sidebarLinks.map((link) => {
          const isActive =
            pathName === link.route || pathName.startsWith(`${link.route}/`);
          return (
            <Link
              key={link.label}
              href={link.route}
              className={cn("sidebar-links rounded p-3", {
                "bg-bank-gradient": isActive,
              })}
            >
            
              <div className="flex items-center gap-3">
                {/* <Image
                  src={link.imgURL}
                  alt={link.label}
                  width={20}
                  height={20}
                  className={cn({ "brightness-[3] invert-0": isActive })}
                /> */}
                  <div>
                {link.imgURL}
              </div>
                <p className={cn("sidebar-label text-black", { "!text-black": isActive })}>
                  {link.label}
                </p>
              </div>
            </Link>
          );
        })}
      </nav>
      <div className="flex justify-between gap-4">
        {/* <p className="rounded text-blue-700  shadow-2xl">{isLoggedIn?.name[0]}</p>  */}
        <p className="flex-col gap-4 items-end">
          {/* <p className="  font-semiBold text-blue-700 text-xl">
          {isLoggedIn?.name}
          </p> */}
          {/* <span className="font-semiBold text-blue-700  text-black text-xl">
          {isLoggedIn?.email}
          </span>   */}
        </p>
        <button onClick={handleLogout}>
          <LogOut color="red" />
        </button>
      </div>
      {/* <h1 className="text-bankGradient">{isLOggedIn?.name}</h1> */}
    </section>
  );
};

export default SideBar;

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import { BotIcon, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { footerLinks, termsOfService } from "@/lib/navBarLinks";
const currentYear = new Date().getFullYear()
const Footer = () => {
  return (
    <footer className="bg-black mt-[4rem] relative">
      <section className="w-[90%] mx-auto ">
        <div className="lg:flex justify-between items-center py-[3rem] border-gray-300 border-b-2">
          <div className="flex gap-8 mt-[2rem] lg:mt-0 py-4 lg:py-0">
            <Input
              type="email"
              placeholder="Subscribe to newsletter"
              className="outline-none text-gray-300"
            />
            <Button className="bg-white text-black">Subscribe</Button>
          </div>
          <div className="image-holder lg:static absolute top-0 lg:mb-0">
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={200}
              height={200}
            />
          </div>
          <div className="social-media-icons flex gap-4 pt-2 lg:pt-0">
            <Facebook size={24} color="#fff" />
            <Twitter size={24} color="#fff" />
            <Youtube size={24} color="#fff" />
            <Instagram size={24} color="#fff" />
            <BotIcon size={24} color="#fff" />
          </div>
        </div>
        <div className="links py-[4rem]">
          {footerLinks.map((link, index) => {
            const firstRow = link.firstRow;
            return (
              <ul key={link.firstRow} className="lg:flex justify-between gap-8">
                {firstRow.map((item, index) => {
                  return (
                    <li key={item.heading} className="text-white">
                      <h1 className=" font-nunito text-md uppercase inline-block border-t-2 underline-offset-[3rem] mt-4">
                        {item.heading}
                      </h1>
                      <ul>
                        {item.links.map((link, item) => {
                          return (
                            <li key={link?.label} className="py-2 hover:text-gray-400    capitalize">
                              <Link href={link.url}>{link.label}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            );
          })}
          {footerLinks.map((link, index) => {
            const secondRow = link.secondRow;
            return (
              <ul key={link.secondRow} className="lg:flex my-10 justify-between gap-8">
                {secondRow.map((item, index) => {
                  return (
                    <li key={index} className="text-white">
                      <h1 className=" font-nunito text-md uppercase inline-block border-t-2 underline-offset-[3rem]">
                        {item.heading}
                      </h1>
                      <ul>
                        {item.links.map((link, item) => {
                          return (
                            <li key={index} className="py-2 hover:text-gray-400 capitalize">
                              <Link href={link.url}>{link.label}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className="copywrite  lg:flex justify-between py-4">
          <p className="copyright text-white text-center"> &copy; {currentYear} All rights reserved. Powered by ADI </p>
          <ul className="flex gap-4 lg:gap-8 w-[90%] lg:w-auto py-2 lg:py-0 mx-auto lg:mx-0">
            {
              termsOfService.map((termLink,index,arr) => {
                return (
                  <li key={index} className={`text-white ${index !== 0 ? "border-l-2 pl-2  lg:pl-4": "ml-4"}`}>
                    <Link href={termLink.url}>{termLink.label}</Link>
                  </li>
                )
              })
            }
          </ul>
          <Link href={"/#boy"} className="text-white" scroll={true}>Back to top</Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

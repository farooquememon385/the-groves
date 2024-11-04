"use client";
import { useState } from "react";
import { CrossIcon, HamburgerIcon } from "./icons/icons";
import Link from "next/link";
import Image from "next/image";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div>
        {!isOpen && (
          <button onClick={() => setIsOpen(!isOpen)}>
            <HamburgerIcon />
          </button>
        )}
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-background px-3 py-5 z-50">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="text-2xl font-bold">
                <Image
                  src="/the-groves.png"
                  alt="The Groves Logo"
                  width={220}
                  height={50}
                />
              </Link>
            </div>
            <button onClick={() => setIsOpen(!isOpen)}>
              <CrossIcon />
            </button>
          </div>

          <div className="bg-background w-full h-full">
            <div className="flex flex-col gap-6">
              <a href="#">DINE WITH US</a>
              <a href="#">PLAN YOUR VISIT</a>
              <a href="#">EVENTS</a>
              <a href="#">VIEW GROVES MAP</a>
              <a href="#">OUR STORY</a>
              <a href="#">CONTACT US</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileNav;

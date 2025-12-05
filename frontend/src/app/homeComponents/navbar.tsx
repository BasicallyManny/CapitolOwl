'use client'
import Link from 'next/link';
import Image from "next/image";
import logoIMG from '@/app/assets/logo.png'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";

const NavBar = () => {

  const navElements = [
    { name: "Markets", to: "/markets" },
    { name: "Stocks", to: "/stocks" },
    { name: "Community", to: "/community" },
  ]

  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-9999">
      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={logoIMG.src}
              alt="logo"
              width={70}
              height={70}
              loading="lazy"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-white text-lg">
          {navElements.map((element) => (
            <Link key={element.name} href={element.to} className="relative">
              {element.name}
            </Link>
          ))}
        </nav>

        {/* Login Button (always visible on desktop, under menu on mobile) */}
        <div className="hidden md:block">
          <button className="text-white bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-lg px-4 py-2.5 focus:outline-none">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <RxCross1 size={35} /> : <RxHamburgerMenu size={35} />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-black/90 text-white w-full px-6 py-6 space-y-6 absolute top-full left-0">
          {navElements.map((element) => (
            <div key={element.name}>
              <Link href={element.to} className="text-lg">
                {element.name}
              </Link>
            </div>
          ))}

          {/* Mobile Login Button */}
          <button className="text-white text-lg">
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default NavBar;

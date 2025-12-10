'use client'
import Link from 'next/link';
import Image from "next/image";
import logoIMG from '@/app/assets/logo.png'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const NavBar = () => {

  const pathname = usePathname()
  const navElements = [
    { name: "Markets", to: "/markets" },
    { name: "Stocks", to: "/stocks" },
    { name: "Community", to: "/community" },
  ]

  const [open, setOpen] = useState(false);

  return (
    <motion.header className="fixed top-0 left-0 w-full bg-[#0A0E1A] z-9999"  initial={{ opacity: 0, scale: 0.97, y: -10 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} >
      <div className="flex items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={logoIMG}
              alt="Capitol Owl"
              width={70}
              height={70}
              priority
            />
          </Link>
        </div>
        {/* Desktop Nav */}
        <motion.nav className="hidden md:flex items-center gap-10 text-white text-lg " >
          {navElements.map((element) => (
            <Link key={element.name} href={element.to} className={`relative hover:scale-125 transition-transform ${pathname === element.to ? "font-bold underline text-[#10B981]" : ""}`} >
              {element.name}
            </Link>
          ))}
        </motion.nav>

        {/* Login Button (always visible on desktop, under menu on mobile) */}
        <div className="hidden md:block">
          <button className="text-white bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-lg px-4 py-2.5 focus:outline-none">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className=" text-white md:hidden"
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                <RxCross1 size={35} />
              </motion.div>) :
              <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -180 }} transition={{ duration: 0.3 }}>
                <RxHamburgerMenu size={35} />
              </motion.div>
            }
          </AnimatePresence>
        </motion.button>

      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div className="md:hidden bg-[#0A0E1A] text-white w-full px-6 py-6 space-y-6 absolute top-full left-0" variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 } }} transition={{ duration: 0.3 }} key="mobile-menu" initial={"hidden"} animate={"visible"} exit={"hidden"}>
            {navElements.map((element) => (
              <motion.div key={element.name} initial={"hidden"} animate={"visible"} exit={"exit"} whileHover={{x:10, transition:{duration:0.3}}} whileTap={{ scale: 0.95 }} className="overflow-hidden">
                <Link href={element.to} className={`text-lg ${pathname === element.to ? "font-bold underline text-[#10B981]" : ""}`}>
                  {element.name}
                </Link>
              </motion.div>
            ))}

            {/* Mobile Login Button */}
            <button className="text-white text-lg">
              Login
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavBar;

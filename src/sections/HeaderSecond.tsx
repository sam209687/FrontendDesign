"use client";
import HexagonSvg from "@/components/(carousel)/Hexagon";

import React, { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  {
    title : 'Home',
    link : '/'
  },

  {
    title : 'Blog',
    link : '/blog'
  },
  {
    title : 'Contact',
    link : '/contact'
  },
  {
    title : 'About Us',
    link : '/about'
  },

]

export default function HeaderSecond() {
  const [ isOpen, setIsOpen ] = useState(false);
  useEffect(() => {
    if(isOpen) {
      document.body.style.overflow = 'hidden'
    } else{
      document.body.style.overflow = 'auto'
    }

  }, [isOpen])
  return (
    <>
    <header className="sticky top-0 bg-zinc-900/50 backdrop-blur-xl z-40 ">
      <div className="p-5">
        <div className="flex justify-between items-center h-16">
          {/* left div  */}
          <div>
            <h1 className="uppercase text-xl bg-fuchsia-500/10 py-2 px-4  rounded-xl font-bold tracking-wide">
              Derive solars
            </h1>
          </div>

          <div className="flex gap-4 items-center">
            <button className="text-sm font-medium hidden md:inline-flex  tracking-wider border-2 inset-0 bg-fuchsia-500/20 rounded-tr-2xl border-fuchsia-500 px-4 py-2">Know More</button>
          

            {/* right div  */}
            <div className="size-10 relative" onClick={() => setIsOpen((curr) => !curr)}>
              {/* firstbar  */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className={twMerge("w-5 h-0.5 bg-zinc-300 -translate-y-1 transition-all duration-500",
                  isOpen && 'translate-y-0 rotate-45 font-semibold'
                )}></div>
              </div>

              {/* second bar  */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className={twMerge("w-5 h-0.5 bg-zinc-300 translate-y-1 transition-all duration-500",
                  isOpen && 'translate-y-0 -rotate-45 font-semibold'
                )}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <AnimatePresence>
    {/* hamburger menu open and close  */}
    {isOpen && (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    className="fixed size-full top-0 left-0 bg-zinc-900 z-30">
      <div className="absolute inset-2 rounded-md bg-zinc-800 mt-24 z-0">
        {/* inserting the hexagons  */}
       <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
        <HexagonSvg size={700} />
       </div>

       <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
        <HexagonSvg size={1100} />
       </div>
        <div className="h-full flex justify-center items-center">
          <nav className="flex flex-col items-center gap-12">
            {navLinks.map(({title, link}, index) => (
              <motion.a 
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.5, ease:'linear', delay:.25 * index}}
              className="" href={link} key={title}>
               <span className="text-4xl md:text-5xl font-bold text-zinc-500 hover:text-zinc-300 transition duration-300"> {title}</span>
              </motion.a>
            ))}
            
          </nav>
        </div>
      </div>
    </motion.div>
    )}
    </AnimatePresence>
    </>
  );
}

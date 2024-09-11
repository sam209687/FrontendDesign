"use client";
import React, { useEffect, useState } from "react";
import { Activity, AlignRight, Antenna } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Button from "@/modules/GradientButton";

export const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous: any = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 backdrop-blur-3xl md:backdrop-blur-none">
      <div className=" ">
        <motion.div
          variants={{ visible: { y: "0" }, hidden: { y: "-150%" } }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="menu wrapper flex justify-between items-center  md:border border-white/15 md:p-2.5 sm:p-1 rounded-xl max-w-2xl mx-auto md:backdrop-blur-[90px] "
        >
          <div className="logo">
            <div className="uppercase border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <Activity className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 ">
              <Link
                className="text-white/70 hover:text-white transition"
                href={"#"}
              >
                Home
              </Link>
              <Link
                className="text-white/70 hover:text-white transition"
                href={"#"}
              >
                Shop
              </Link>
              <Link
                className="text-white/70 hover:text-white transition"
                href={"#"}
              >
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="menus flex items-center gap-4">
            <Button>Join Us</Button>
            <span>
              <AlignRight className="md:hidden " />
            </span>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

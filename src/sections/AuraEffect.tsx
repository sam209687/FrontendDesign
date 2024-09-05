"use client";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import ph1 from "../../public/assets/images/ph1.png";
import Image from "next/image";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function AuraEffect() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative min-h-screen overflow-hidden bg-gray-950 mt-24   text-gray-200"
    >
        <div className="wrapper  flex">
           <div className="w-1/2 h-auto mt-28 px-10 ">
           <p className="inline-block rounded-full bg-gray-600/40 px-3 py-2.5 text-sm ">Trending</p>
           <h1 className="text-3xl shadow-2xl font-bold">The Sound Master</h1>
           <p className="text-muted mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam quibusdam ipsam vitae tempore, in optio voluptates repellendus, illo magnam provident libero accusamus eligendi. Optio inventore voluptatem at quia quas Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam quibusdam ipsam vitae tempore, in optio voluptates?</p>

           <motion.button
  style={{
    border,
    boxShadow,
  }}
  whileHover={{
    scale: 1.015,
  }}
  whileTap={{
    scale: 0.985,
  }}
  className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50 mt-28"
>
  Start free trial
  <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
</motion.button>
           </div>

           {/* image container  */}
           <div className="w-1/2 h-auto my-32  ">
           <Image className="w-full bg-contain" src={ph1} alt="ph1" />
           </div>
        </div>
     
    </motion.section>
  );
}


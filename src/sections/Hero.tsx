"use client";
import Button from "@/modules/GradientButton";
import starsBg from "../assets/stars.png";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress}=useScroll({
    target: sectionRef,
    offset:['start end', 'end center']
  });

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <motion.section ref={sectionRef} className="h-[492px] flex md:h-[800px] items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
     
        style={{ backgroundImage: `url(${starsBg.src})`,
        backgroundPositionY,
      }}
        
        animate={{backgroundPositionX:starsBg.width}}
        transition={{duration:120, ease:"linear",repeat:Infinity}}
        
        
      >
        <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>

        {/* galaxy background  */}
        <div className="absolute h-64 w-64  bg-purple-500 md:h-96 md:w-96 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))]            shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255.1),0_0_50px_rgb(140,60,255)]"></div>

        {/* ring one */}
        <motion.div 
        style={{
          translateY:"-50%",
          translateX:"-50%",
        }}
        animate={{
          rotate:"1turn"
        }}
        transition={{
          repeat:Infinity,
          duration:80,
          ease:"linear",
        }}
        className="absolute border-white/20 h-[344px] w-[344px] md:h-[580px] md:w-[580px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-2 h-2 rounded-full left-0 bg-white top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

          <div className="absolute w-2 h-2 rounded-full left-1/2 bg-white top-0 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

          <div className="absolute w-5 h-5 rounded-full left-full border border-white top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center animate-pulse">
            <div className="h-2 w-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
        {/* ring one ends */}

        {/* second ring  */}

        <motion.div
        style={{ translateY:"-50%",translateX:"-50%",}}
        animate={{rotate:"-1turn",}}
        transition={{repeat:Infinity,duration:60,ease:"linear",}}
        className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></motion.div
        
        >
         {/* second ring ends */}

        {/* third ring  */}
        <motion.div
        style={{ translateY:"-50%",translateX:"-50%",}}
        animate={{rotate:"1turn",}}
        transition={{repeat:Infinity,duration:60,ease:"linear",}}
        className="absolute w-[544px] h-[544px] md:h-[980px] md:w-[980px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-2 h-2 rounded-full left-0 bg-white top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

          <div className="absolute w-2 h-2 rounded-full left-full bg-white top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </motion.div>

        {/* third ring ends */}

        <div className="container relative mt-16">
          <h1 className="text-8xl font-semibold tracking-tighter bg-white sm:text-7xl bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
            DERIVE SOLARS
          </h1>
          <p className="text-center md:text-xl text-medium text-white/70 mt-5 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            at perspiciatis laboriosam blanditiis aliquid, natus reprehenderit
            ipsa, ullam a cupiditate quas esse iure molestias quisquam?
          </p>
          <div className="mt-5 flex justify-center">
            <Button>Join Us</Button>
          </div>
        </div>
      
    </motion.section>
  );
};






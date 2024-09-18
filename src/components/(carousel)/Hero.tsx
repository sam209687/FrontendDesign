"use client";
import React, { useRef } from "react";
import HexagonSvg from "./Hexagon";
import Alignment from "./Alignment";
import { animate, motion, useScroll, useTransform  } from "framer-motion";

export default function CarouselPage() {
  const headphoneRef = useRef(null);
  const cubeRef = useRef(null);
  const torusRef = useRef(null);
  const cuboidRef = useRef(null);

  // cuboid animation 

  const { scrollYProgress : cuboidScrollYProgress } = useScroll ({
    target : cuboidRef,
    offset : ['start end','end start']
  })

  // torus animate 
  const { scrollYProgress:torusScrollYProgress } = useScroll({
    target : torusRef,
    offset : ['start end','end start']
  })

  // cube animation 

  const { scrollYProgress : cubeScrollYProgress } = useScroll({
    target : cubeRef,
    offset : ['start end', 'end start']

  })

  // headphone animation 
  const {scrollYProgress} = useScroll({
    target : headphoneRef,
    offset : ['start end', 'end start']
  });
  const headphoneRotate = useTransform(scrollYProgress, [0,1], [30,-45]);
  const cubeRotate = useTransform(cubeScrollYProgress, [0,1], [100,-45]);
  const torusRotate = useTransform(torusScrollYProgress, [0,1], [20,-20]);
  const cuboidRotate = useTransform(cuboidScrollYProgress, [0,1], [20,-20]);
  
  return (
    <section className="py-24 md:py-52  overflow-x-clip">
      <div className="container">
        <p className="uppercase text-center font-extrabold text-zinc-500 tracking-wider">
          Introducing the World Class Solar Inverter
        </p>
        <h1 className="font-black text-4xl md:text-6xl text-center mt-4">
          The future of Solar Technology is here
        </h1>
        <p className="text-center text-xl mt-6 text-zinc-400 max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
          sunt.dolor sit amet, consectetur adipisicing elit. Facilis, sunt.dolor
          sit amet, consectetur adipisicing elit. Facilis, sunt.
        </p>

        <div className="flex justify-center mt-24">
          <div className="inline-flex  relative z-0">

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <HexagonSvg className="size-[1100px]" size={1100} />
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <HexagonSvg className="size-[1800px]" size={1800} reverse duration={60} />
            </div>
            {/* cube image  */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Alignment className="absolute left-[200px] -top-[900px]" animate>
                <motion.img
                style={{rotate:cubeRotate}}
                  className="size-[140px]"
                  src="/assets/images/cube.png"
                  alt="cube"
                  ref={cubeRef}
                />
              </Alignment>
            </div>

            {/* cubeiod image  */}

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Alignment className="absolute left-[200px] top-[270px]" animate>
                <motion.img
                style={{rotate:cuboidRotate}}
                  className="size-[140px]"
                  src="/assets/images/cuboid.png"
                  alt="cuboid"
                  ref={cuboidRef}
                />
              </Alignment>
            </div>

            {/* thorus image  */}

            <div className="absolute left-icosahedron1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Alignment className="absolute -left-[600px] -top-[80px]">
                <motion.img
                style={{rotate:torusRotate}}
                  className="size-[140px]"
                  src="/assets/images/torus.png"
                  alt="torus"
                  ref={torusRef}
                />
              </Alignment>
            </div>
            {/* animation of headphone starts  */}
            <motion.div 
            style={{rotate:headphoneRotate}}
            className="inline-flex" ref={headphoneRef}>
            <img className="" src="/assets/images/ph1.png" alt="ph1" />
            <img
              className="absolute w-[calc(100%+100px)] max max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg]"
              src="/assets/images/ph1.png"
              alt=""
            />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

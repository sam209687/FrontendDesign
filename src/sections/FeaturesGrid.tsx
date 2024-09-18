"use client";
import React, { useRef } from "react";

import TextButton from "@/modules/TextButton";
import { motion, useScroll, useTransform } from "framer-motion";

const listItems = [
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, eos?",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, eos?",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, eos?",
];

export default function FeaturesGrid() {
  const torusknotRef = useRef(null);
  const firstHemiKnotRef = useRef(null);
  const secondHemiKnotRef = useRef(null);
  const coneknotRef = useRef(null);

  // first component
  // torus animation
  const { scrollYProgress: torusKnotScrollYprogress } = useScroll({
    target: torusknotRef,
    offset: ["start end", "end start"],
  });

  const torusKnotTranslateY = useTransform(
    torusKnotScrollYprogress,
    [0, 1],
    [100, -100]
  );
  const torusKnotRotate = useTransform(
    torusKnotScrollYprogress,
    [0, 1],
    [30, -30]
  );

  // first component
  // cone animation
  const { scrollYProgress: hemiKnotScrollYprogress } = useScroll({
    target: firstHemiKnotRef,
    offset: ["start end", "end start"],
  });

  const hemiKnotTranslateY = useTransform(
    hemiKnotScrollYprogress,
    [0, 1],
    [50, -50]
  );
  const hemiKnotRotate = useTransform(
    hemiKnotScrollYprogress,
    [0, 1],
    [-20, -50]
  );
  // ------------------------------------------------------------------------
  // second component
  // hemisphare animation
  const { scrollYProgress: coneKnotScrollYprogress } = useScroll({
    target: coneknotRef,
    offset: ["start end", "end start"],
  });

  const coneKnotTranslateY = useTransform(
    coneKnotScrollYprogress,
    [0, 1],
    [100, -100]
  );
  const coneKnotRotate = useTransform(
    coneKnotScrollYprogress,
    [0, 1],
    [12, 45]
  );

  // first component
  // hemisphare animation
  const { scrollYProgress: secondHemiKnotScrollYprogress } = useScroll({
    target: secondHemiKnotRef,
    offset: ["start end", "end start"],
  });

  const secondHemiKnotTranslateY = useTransform(
    secondHemiKnotScrollYprogress,
    [0, 1],
    [50, -50]
  );
  const secondHemiKnotRotate = useTransform(
    secondHemiKnotScrollYprogress,
    [0, 1],
    [-20, 10]
  );

  return (
    <section className="py-24 overflow-x-clip mb-44">
      <div className="container">
        <div className="flex flex-col gap-56 md:gap-64">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <h2 className="font-black text-4xl md:text-5xl">
                Empowering the future of Solar Energy Technology
              </h2>
              <p className="text-xl text-zinc-400 mt-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit beatae quae quidem atque? Optio dicta dolorem,
                architecto quibusdam voluptas suscipit.
              </p>

              <ul className="flex flex-col gap-8 mt-12">
                {listItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    {/* for circle and dots  */}
                    <div className="inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 outline-fuchsia-500/20 rounded-full">
                      <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                    </div>
                    <span className="text-xl font-bold">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-8 mt-12">
                <button className="text-xl font-bold tracking-wider border-2 inset-0 bg-fuchsia-500/20 rounded-tr-2xl border-fuchsia-500 px-4 py-2">
                  Get Started
                </button>

                <TextButton>Know More</TextButton>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative inline-flex z-0">
                <motion.img
                  style={{
                    translateY: torusKnotTranslateY,
                    rotate: torusKnotRotate,
                  }}
                  className="size-96 max-w-none"
                  src="/assets/images/torus-knot.png"
                  alt="torus"
                  ref={torusknotRef}
                />
                <motion.img
                  style={{
                    translateY: hemiKnotTranslateY,
                    rotate: hemiKnotRotate,
                  }}
                  className="absolute size-96 top-3/4 -z-10 scale-x-[-1]"
                  src="/assets/images/hemisphere.png"
                  alt="hemisphare"
                  ref={firstHemiKnotRef}
                />
              </div>
            </div>
          </div>
          {/* second content goes here  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* images div  */}
            <div className="relative hidden md:block">
              <div className="absolute right-0 z-10  ">
                <motion.img
                  style={{
                    translateY: coneKnotTranslateY,
                    rotate: coneKnotRotate,
                  }}
                  className="size-96 max-w-none rotate-12 "
                  src="/assets/images/cone.png"
                  alt="cone"
                  ref={coneknotRef}
                />
                <motion.img
                  style={{
                    translateY: secondHemiKnotTranslateY,
                    rotate: secondHemiKnotRotate,
                  }}
                  className="absolute size-96 top-3/4 left-0"
                  src="/assets/images/hemisphere.png"
                  alt="hemisphere -z-10"
                  ref={secondHemiKnotRef}
                />
              </div>
            </div>
            {/* end of images div  */}
            <div className="col-span-2">
              <h2 className="font-black text-4xl md:text-5xl ">
                Derive Solars leads the way...
              </h2>

              <div className="flex flex-col text-xl text-zinc-400 mt-6 gap-6">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto illo iste praesentium officiis quidem error est id
                  aspernatur, culpa libero?
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem minus provident magni sint quisquam. Officiis corrupti
                  nostrum necessitatibus quaerat qui optio eos repellendus dicta
                  mollitia.
                </p>
              </div>

              <div className="flex gap-8 mt-12">
                <button className="text-xl font-bold tracking-wider border-2 inset-0 bg-fuchsia-500/20 rounded-tr-2xl border-fuchsia-500 px-4 py-2">
                  Get Started
                </button>

                <TextButton>Know More</TextButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

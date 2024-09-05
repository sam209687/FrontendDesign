"use client";
import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const cardData = [
  {
    image: "/assets/images/pill.png",
    title: "Revolutionary Solar energy produts",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos alias sequi, id qui consequatur sunt.",
    color: "fuchsia",
  },
  {
    image: "/assets/images/cuboid.png",
    title: "Seameless Solar energy produts",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos alias sequi, id qui consequatur sunt.",
    color: "lime",
  },
  {
    image: "/assets/images/cone.png",
    title: " Ultimate Solar energy produts",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos alias sequi, id qui consequatur sunt.",
    color: "yellow",
  },
  {
    image: "/assets/images/icosahedron.png",
    title: "Revolutionary Solar energy produts",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos alias sequi, id qui consequatur sunt.",
    color: "cyan",
  },
];

export default function ProdCards() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <h2 className="f font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
          Discover the future of Solar Energy Technology | Just arrived
        </h2>

        <div className="mt-36 lg:mt-48 flex ">
          <motion.div 

          initial={{translateX:"-50%"}}
          animate={{translateX:"0"}}
          transition={{
            repeat:Infinity,
            ease:"linear",
            duration:190
          }}

          className="flex flex-none gap-8">
            {/* {cardData.map(({ image, title, descr, color }) => ( */}
            {[...cardData, ...cardData].map((cardData) => (
              <div
                className="relative z-0 mt-10 p-8 md:p-10 max-w-xs md:max-w-md group"
                key={cardData.title}
              >
                <div className={twMerge("absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transistion duration-300",
                    cardData.color === 'lime' && 'bg-lime-500',
                    cardData.color === 'yellow' && 'bg-yellow-500',
                    cardData.color === 'cyan' && 'bg-cyan-500',
                    
                )}></div>
                {/* glow effect */}
                <div className={twMerge("absolute size-16 rounded-xl bg-fuchsia-500 group-hover:bg-fuchsia-400 transistion duration-300 top-1.5 right-1.5 -z-10",
                    cardData.color === 'lime' && 'bg-lime-500 group-hover:bg-lime-400',
                    cardData.color === 'yellow' && 'bg-yellow-500 group-hover:bg-yellow-400',
                    cardData.color === 'cyan' && 'bg-cyan-500 group-hover:bg-cyan-400',
                    
                )}></div>

                <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>

                <div className="flex justify-center -mt-28">
                  <div className="inline-flex relative">
                    <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950 group-hover:bg-zinc-950/30 transistion duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                    {/* image  */}
                    <img
                      className="size-40 group-hover:-translate-y-6 transition duration-300"
                      src={cardData.image}
                      alt="pill"
                    />
                  </div>
                </div>

                <h3 className="font-black text-3xl mt-12">{cardData.title}</h3>
                <p className="text-lg text-zinc-400 mt-4">{cardData.descr}</p>
                <div className="flex justify-between mt-5">
                  <button className={twMerge("text-sm uppercase font-extrabold tracking-wider text-fuchsia-500",
                    cardData.color === 'lime' && 'text-lime-500',
                    cardData.color === 'yellow' && 'text-yellow-500',
                    cardData.color === 'cyan' && 'text-cyan-500',
                    
                  )}>
                    Learn more
                  </button>
                  <HiOutlineArrowLongRight className="flex text-zinc-500 justify-center size-11 group-hover:text-zinc-300 transistion duration-300 -translate-x-2 group-hover:translate-x-0 cursor-pointer " />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="flex justify-center mt-10">
            <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
                {cardData.map(({title}) => (
                    <div key={title} className="bg-zinc-500 size-2.5 rounded-full cursor-pointer">

                    </div>
                ))}
              
            </div>

        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import BlogCard from "@/modules/BlogCard";

const cardData = [
  {
    image: "/assets/images/pill.png",
    title: "Seameless Solar energy products",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos alias sequi, id qui consequatur sunt.",
    color: "fuchsia",
  },
  {
    image: "/assets/images/cuboid.png",
    title: "Seameless Solar energy products",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos alias sequi, id qui consequatur sunt.",
    color: "lime",
  },
  {
    image: "/assets/images/cone.png",
    title: " Seameless Solar energy products",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos alias sequi, id qui consequatur sunt.",
    color: "yellow",
  },
  {
    image: "/assets/images/icosahedron.png",
    title: "Seameless Solar energy products",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos alias sequi, id qui consequatur sunt.",
    color: "cyan",
  },
];

export default function ProdCards() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if(isHovered)return;
    const timeout = setTimeout(() => {
      setSelectedCardIndex(curr => curr === cardData.length -1 ? 0 : curr + 1)
    },3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [selectedCardIndex, isHovered])
  return (
    <section className="py-96 overflow-x-clip">
      <div className="container">
        <h2 className="font-black text-4xl md:text-5xl lg:text-6xl text-center">
          Lorem ipsum dolor sit amet consectetur.
        </h2>

        {/* card starts from here  */}
        <div className="mt-36 flex">
          <div className="flex flex-none gap-8">
            {cardData.map(({ image, title, descr, color }) => (
              <div onMouseEnter={() => setIsHovered(true)} 
              onMouseLeave={() => setIsHovered(false)}
              className="inline-flex transition-all duration-500"
              style={{
                transform : `translateX(calc((-100% - 2rem ) * ${selectedCardIndex} )`
              }}
              >
                <BlogCard key={title} className="max-w-xs md:max-w-md" color={color}>
                {/* Image div  */}
                <div className="flex justify-center -mt-28">
                  <div className="inline-flex relative">
                    <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                    <img
                      className="size-40 group-hover:-translate-y-6 transition duration-300"
                      src={image}
                      alt="pill"
                    />
                  </div>
                </div>
                <h3 className="text-3xl text-zinc-500 mt-12">{title}</h3>
                <p className="text-xl text-zinc-400 mt-4">{descr}</p>
              </BlogCard>
              </div>
            ))}
          </div>
        </div>
        {/* bottom dynamic buttons */}
        <div className="flex justify-center mt-12">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {cardData.map(({ title }, cardIndex) => (
              <div
                className={twMerge("size-2.5 bg-zinc-500 rounded-full cursor-pointer",
                  cardIndex === selectedCardIndex && 'bg-zinc-300'
                )}
                onClick={() => setSelectedCardIndex(cardIndex)}
                key={title}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function ProdCards() {
//   return (
//     <section className="py-96 overflow-x-clip">
//       <div className="container">
//         <h2 className="font-black text-4xl md:text-5xl lg:text-6xl text-center">
//           Lorem ipsum dolor sit amet consectetur.
//         </h2>

//         {/* card starts from here  */}
//         <div className="mt-36 flex">
//           <div className="flex flex-none gap-8">
//             {cardData.map(({ image, title, descr, color }) => (
//               <div className="relative z-0 p-8 max-w-xs md:max-w-md group" key={title}>
//                 {/* cut-corner background starts */}
//                 <div className={twMerge("absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300",
//                   color === 'lime' && "bg-lime-500",
//                   color === 'yellow' && "bg-yellow-500",
//                   color === 'cyan' && "bg-cyan-500",
//                 )}></div>
//                 <div className={twMerge("absolute size-16 rounded-xl bg-fuchsia-500 group-hover:bg-fuchsia-400 transition duration-300 top-1.5 right-1.5 -z-10",
//                   color === 'lime' && "bg-lime-500 group-hover:bg-lime-400",
//                   color === 'yellow' && "bg-yellow-500 group-hover:bg-yellow-400",
//                   color === 'cyan' && "bg-cyan-500 group-hover:bg-cyan-400",
//                 )}></div>
//                 <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
//                 {/* Image div  */}
//                 <div className="flex justify-center -mt-28">
//                   <div className="inline-flex relative">
//                     <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
//                     <img
//                       className="size-40 group-hover:-translate-y-6 transition duration-300"
//                       src={image}
//                       alt="pill"
//                     />
//                   </div>
//                 </div>
//                 <h3 className="text-3xl text-zinc-500 mt-12">{title}</h3>
//                 <p className="text-xl text-zinc-400 mt-4">{descr}</p>
//                 <div className="flex justify-between mt-12">
//                   <button className={twMerge("text-sm  font-extrabold text-fuchsia-500 uppercase tracking-wider",
//                      color === 'lime' && "text-lime-500",
//                      color === 'yellow' && "text-yellow-500",
//                      color === 'cyan' && "text-cyan-500",
//                   )}>
//                     Learn More
//                   </button>
//                   <svg
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke-width="2"
//                     stroke="currentColor"
//                     className="size-8 text-zinc-500 cursor-pointer group-hover:text-zinc-300 transition duration-300 -translate-x-2 group-hover:translate-x-0"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             ))}
//           </div>
//           </div>
//           {/* bottom dynamic buttons */}
//           <div className="flex justify-center mt-12">
//             <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
//               {
//                   cardData.map(({title}) => (
//                     <div
//                       className="size-2.5 bg-zinc-500 rounded-full cursor-pointer"
//                       key={title}
//                     ></div>
//                   ))}
//             </div>
//           </div>

//       </div>
//     </section>
//   );
// }

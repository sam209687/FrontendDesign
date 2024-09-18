import React, { ComponentPropsWithoutRef } from "react";
import BlogCard from "@/modules/BlogCard";
import { twMerge } from "tailwind-merge";

const cardData = [
  {
    image: "/assets/images/pill.png",
    title: "Seameless Solar energy products",
    descr:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    color: "fuchsia",
    category: "Solar-Inverter",
  },
  {
    image: "/assets/images/cuboid.png",
    title: "Seameless Solar energy products",
    descr:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    color: "lime",
    category: "Solar-Panel",
  },
  {
    image: "/assets/images/cone.png",
    title: " Seameless Solar energy products",
    descr:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    color: "yellow",
    category: "Solar-AC",
  },
  {
    image: "/assets/images/icosahedron.png",
    title: "Seameless Solar energy products",
    descr:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    color: "cyan",
    category: "Solar-Generator",
  },
];

export default function LatestPost() {
  const getColorFromCategory = (category: string) => {
    switch (category) {
      case "Solar-Panel":
        return "lime";
      case "Solar-AC":
        return "yellow";
      case "Solar-Generator":
        return "cyan";
      default:
        "fuchsia";
    }
  };

  const Tag = (props: ComponentPropsWithoutRef<"div"> & { color?: string }) => {
    const { children, color, className } = props;
    return (
      <div
        className={twMerge(
          "text-xs uppercase px-3 py-1.5 font-extrabold tracking-wider bg-fuchsia-500/15 text-fuchsia-500 inline-flex rounded-full",
          color === "lime" && "bg-lime-50/15 text-lime-500",
          color === "yellow" && "bg-yellow-50/15 text-yellow-500",
          color === "cyan" && "bg-cyan-50/15 text-cyan-500",
          className
        )}
      >
        {children}
      </div>
    );
  };
  return (
    <section className="py-60">
      <div className="container">
        <h2 className="font-black text-4xl md:text-5xl text-center">
          Share your Ideas and creativity... | Blog{" "}
        </h2>
        <p className="text-center text-xl text-zinc-400 mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          praesentium aspernatur maxime eveniet voluptas ab ut, delectus
          exercitationem, nihil aut iste corrupti, hic perspiciatis quae!
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
         
          {cardData.map(({ title, descr, category }) => (
            
            <BlogCard
              className=""
              key={category}
              color={getColorFromCategory(category)}
              buttonText="Read More"
              
            >
              <Tag color={getColorFromCategory(category)}>
                {category}
                </Tag>

              <h3 className="text-md text-3xl mt-4">{title}</h3>
              <p className="text-md text-zinc-500 font-bold tracking-wide mt-6">
                {descr}
              </p>
            </BlogCard>
            
          ))}
         
        </div>
      </div>
    </section>
  );
}

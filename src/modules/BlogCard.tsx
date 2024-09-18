import React, { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import TextButton from "./TextButton";

export default function BlogCard(
  props: ComponentPropsWithoutRef<"div"> & {
    color?: string;
    buttonText?: string;
  }
) {
  const { color, children, buttonText, className } = props;
  return (
    // prod card wrapper
    <div className={twMerge("relative z-0 p-8 group", className)}>
      {/* cut-corner background starts */}
      <div
        className={twMerge(
          "absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300",
          color === "lime" && "bg-lime-500",
          color === "yellow" && "bg-yellow-500",
          color === "cyan" && "bg-cyan-500"
        )}
      ></div>
      <div
        className={twMerge(
          "absolute size-16 rounded-xl bg-fuchsia-500 group-hover:bg-fuchsia-400 transition duration-300 top-1.5 right-1.5 -z-10",
          color === "lime" && "bg-lime-500 group-hover:bg-lime-400",
          color === "yellow" && "bg-yellow-500 group-hover:bg-yellow-400",
          color === "cyan" && "bg-cyan-500 group-hover:bg-cyan-400"
        )}
      ></div>
      <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>

      <div>{children}</div>

      <div className="flex justify-between mt-12">
        <button
          className={twMerge(
            "text-sm  font-extrabold text-fuchsia-500 uppercase tracking-wider",
            color === "lime" && "text-lime-500",
            color === "yellow" && "text-yellow-500",
            color === "cyan" && "text-cyan-500"
          )}
        >
          {buttonText || "Learn More"}
        </button>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          className="size-8 text-zinc-500 cursor-pointer group-hover:text-zinc-300 transition duration-300 -translate-x-2 group-hover:translate-x-0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
}

import React, { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export default function TextButton(props: ComponentPropsWithoutRef<"button"> & { color?:string }) {
  const { className, children, color } = props;
  return (
    <button
      className={twMerge(
        "text-sm uppercase font-extrabold tracking-wider text-fuchsia-500",
        
        color === 'lime' && 'text-lime-500',
        color === 'yellow' && 'text-yellow-500',
        color === 'cyan' && 'text-cyan-500',
        
        className
      )}
    >
      {children}
    </button>
  );
}

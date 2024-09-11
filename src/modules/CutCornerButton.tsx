import React, { ComponentPropsWithRef } from 'react'
import { twMerge } from 'tailwind-merge';

export default function CutCornerButton( props : ComponentPropsWithRef <"button"> ) {
    const { className, children } = props;
  return (
    <button className={twMerge("bg-fuchsia-500/20 px-4 py-2 font-extrabold uppercase tracking-wide relative ", className )}>
    {/* outline for the button  */}
    <div className="absolute inset-0 outline outline-2 -outline-offset-2 outline-fuchsia-500 [mask-image:linear-gradient(225deg,transparent,transparent_10px,black_10px)]"></div>
    {/* svg for button cut  */}
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="absolute top-0 right-0 text-fuchsia-500"
    >
      <path
        d="M0 1H12.2667L23 11.7333V24"
        stroke="currentColor"
        stroke-width="2"
      ></path>
    </svg>
    <span className="leading-6">{ children } </span>
  </button>
  )
}

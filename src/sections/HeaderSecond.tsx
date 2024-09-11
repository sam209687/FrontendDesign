import CutCornerButton from "@/modules/CutCornerButton";
import React, { ComponentPropsWithoutRef } from "react";

export default function HeaderSecond() {
  return (
    <header className="sticky top-0 bg-zinc-900/50 backdrop-blur-xl ">
      <div className="p-5">
        <div className="flex justify-between items-center h-16">
          {/* left div  */}
          <div>
            <h1 className="uppercase text-xl bg-fuchsia-500/10 py-2 px-4  rounded-xl font-bold tracking-wide">
              Derive solars
            </h1>
          </div>

          <div className="flex gap-4 items-center">
           <CutCornerButton className="hidden md:inline-flex">Learn More</CutCornerButton>

            {/* right div  */}
            <div className="size-10 relative">
              {/* firstbar  */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300 -translate-y-1"></div>
              </div>

              {/* second bar  */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300 translate-y-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

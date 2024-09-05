import React from "react";
import hp1 from "../../../public/ph1.png";
import Image from "next/image";
import HexagonSvg from "./Hexagon";
import Alignment from "./Alignment";

export default function CarouselPage() {
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
              <HexagonSvg className="size-[1100px]" />
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <HexagonSvg className="size-[1800px]" />
            </div>
            {/* cube image  */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Alignment className="absolute left-[200px] -top-[900px]">
                <img
                  className="size-[140px]"
                  src="/assets/images/cube.png"
                  alt="cube"
                />
              </Alignment>
            </div>

            {/* cubeiod image  */}

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Alignment className="absolute left-[200px] top-[270px]">
                <img
                  className="size-[140px]"
                  src="/assets/images/cuboid.png"
                  alt="cube"
                />
              </Alignment>
            </div>

            {/* thorus image  */}

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Alignment className="absolute -left-[600px] -top-[80px]">
                <img
                  className="size-[140px]"
                  src="/assets/images/torus.png"
                  alt="cube"
                />
              </Alignment>
            </div>

            <img className="" src="/assets/images/ph1.png" alt="ph1" />
            <img
              className="absolute w-[calc(100%+100px)] max max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg]"
              src="/assets/images/ph1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React, {
  ComponentPropsWithRef,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import Image from "next/image";
import ProdImage from "../assets/product-image.png";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  ValueAnimationTransition,
} from "framer-motion";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (
  props: typeof tabs[number] &
    ComponentPropsWithRef<"div"> & { selected: boolean }
) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);

  const xPercentage = useMotionValue(50);
  const yPercentage = useMotionValue(50);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current || !props.selected) return;
    xPercentage.set(0);
    yPercentage.set(0);

    const { height, width } = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };
    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [props.selected]);

  const handleTabHover = () => {
    if (dotLottieRef.current === null) return;
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  };

  return (
    <div
      onMouseEnter={handleTabHover}
      ref={tabRef}
      className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 relative "
      onClick={props.onClick}
    >
      {props.selected && (
        <motion.div
          style={{ maskImage }}
          className="absolute inset-0 -m-px border border-[#A369FF] rounded-xl "
        ></motion.div>
      )}

      <div className="h-12 w-12 rounded-lg border-white/15 inline-flex items-center justify-center">
        <DotLottiePlayer
          ref={dotLottieRef}
          src={props.icon}
          className="h-5 w-5"
          autoplay
        />
      </div>

      <div className="font-medium">{props.title}</div>
      {props.isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
          New
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const backgroundPostionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPostionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPostionX}% ${backgroundPostionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectedTab = (index: number) => {
    setSelectedTab(index);

    const animateOptions : ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };

    animate(backgroundSizeX, [
      backgroundSizeX.get(),
      100,
      tabs[index].backgroundSizeX,
    ], animateOptions);

    animate(backgroundPostionX, [
      backgroundPostionX.get(),
      tabs[index].backgroundPositionX,
    ], animateOptions);

    animate(backgroundPostionY, [
      backgroundPostionY.get(),
      tabs[index].backgroundPositionY,
    ], animateOptions);
  };

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elevate your SEO efforts
        </h2>
        <p className="text-white/70 md:text-xl max-w-2xl mx-auto text-lg tracking-tighter text-center mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          tenetur iusto molestias hic. Doloremque consequatur nulla error esse
          in illum, adipisci quidem laudantium accusantium rem!
        </p>

        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab, tabIndex) => (
            <FeatureTab
              {...tab}
              selected={selectedTab === tabIndex}
              onClick={() => handleSelectedTab(tabIndex)}
              key={tab.title}
            />
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <motion.div
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: `url(${ProdImage.src})`,
            }}
            className="bg-cover aspect-video border border-white/20 rounded-lg"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

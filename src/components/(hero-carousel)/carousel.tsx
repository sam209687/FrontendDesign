"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion, AnimatePresence } from "framer-motion";


import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";



export default function App() {
  const fadeInOut = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    duration: 3000,
    exit: { opacity: 0.5 },
  };
  return (
    <section className="">
      <Swiper
        spaceBetween={1}
        centeredSlides={true}
        // effect="fade"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          
        }}
        pagination={{
          clickable: true,
          
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper mt-8 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
      >
        <SwiperSlide>
          <motion.img
            className=""
            src="/assets/images/f1.jpg"
            
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <motion.img
            className=""
            src="/assets/images/f2.jpg"
          
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <motion.img
            className=""
            src="/assets/images/f3.jpg"
           
            alt=""
          />
        </SwiperSlide>
        
      </Swiper>
    </section>
  );
}

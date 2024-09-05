
"use client";
import React, { useState } from 'react';
import avt1 from '../../../public/assets/images/avatar-cameron-yang.jpg';
import avt2 from '../../../public/assets/images/avatar-erica-wyatt.jpg';
import avt3 from '../../../public/assets/images/avatar-harry-bender.jpg';
import Image from 'next/image';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { motion } from 'framer-motion';

export default function HeroCarousel() {
    const [ activeIndex, setActiveIndex] = useState(0);

    const [transistionDirection, setTransistionDirection] = useState('next');

    const handleNext = () => {
        setTransistionDirection('next');
        setActiveIndex((prevIndex) => (
            prevIndex === 2 ? prevIndex : prevIndex + 1
        ));

        const handlePrev = () => {
            setTransistionDirection('previous');
            setActiveIndex((prevIndex) => (
                prevIndex === 0 ? prevIndex : prevIndex - 1
            ))
        }
    }
  return (
   <section className=' '>
    <div className='container  min-h-screen bg-[#333] grid grid-cols-2 items-center justify-center '>
        {/* content container  */}
      <div className='py-16 '>
      <h1 className='mt-20 text-5xl font-semibold tracking-wider'>Our latest products</h1>
        <p className='font-medium text-white/50 max-w-lg mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eum amet reiciendis rem iste aspernatur minima officiis, vitae placeat molestias quam cumque, animi sit ex.</p>
        <button className='px-6 py-3 outline outline-2 outline-red-500/40 mt-16 rounded-3xl text-red-500/80 hover:text-red-500 font-semibold tracking-widest transition duration-300'>Learn more</button>
      </div>

        {/* <image container > */}
        <div className='image-container flex flex-row-reverse items-center justify-start relative'>

        <div className='absolute z-20 w-[clamp(20rem,22.5vw,25rem)] h-auto hidden'>
          
          <Image className='h-[100vh]  rounded-2xl  border-2 border-fuchsia-500 w-[clamp(20rem,22.5vw,25rem)]  ' src={avt1} alt='avt1' />
          </div>
  
          <div className='absolute z-20 w-[clamp(20rem,22.5vw,25rem)] h-auto'>
            
            <Image className='h-[100vh] rounded-2xl  border-2 border-fuchsia-500 w-[clamp(20rem,22.5vw,25rem)]' src={avt2} alt='avt1' />
            </div>
  
            <div className='absolute z-20 w-[clamp(20rem,22.5vw,25rem)] h-auto'>
            
            <Image className='h-[100vh]   rounded-2xl  border-2 border-fuchsia-500 w-[clamp(20rem,22.5vw,25rem)]' src={avt3} alt='avt1' />
            </div>
        </div>

        {/* buttons container  */}
       
            <div className=' inline-flex gap-4 mt-24 '>

           <button className='bg-white/20 text-white/50 hover:text-white px-5 py-5 rounded-full'>
           <FaArrowLeftLong className='size-5'/>
           </button>

           <button className='bg-white/20 text-white/50 hover:text-white px-5 py-5 rounded-full'>
           <FaArrowRightLong className=' size-5'/>
           </button>
               
                
            </div>

       
    </div>
   </section>
  )
}

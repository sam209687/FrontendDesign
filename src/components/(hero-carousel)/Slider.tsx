import React from 'react';
import ImageCarousel from '../../components/(hero-carousel)/carousel';
import f1 from '../../../public/assets/images/f1.jpg'
import Image from 'next/image';
export default function SliderComponent() {
  return (
   <section className='my-24'>
    <div className='container'>
       <div className='flex justify-center'>
        <Image src={f1} alt='i' />
      
       </div>
       {/* content section  */}
       <div>
       <p className='font-medium text-white/50 tracking-widest mt-10 uppercase'>The ultimate</p>
        <h1 className='text-3xl font-semibold tracking-wider mt-2 text-white/70'>DSIB001 | Offgrid SI</h1>
        <p className='text-white/25 mt-10 max-w-sm font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus eligendi eum reiciendis inventore repudiandae molestias est doloribus illum obcaecati ab, odit error fugit nam corrupti.</p>
        <button className='mt-10 px-5 py-2 bg-fuchsia-500/50 rounded-tr-2xl border-rounded  text-center'>
            Know more..
        </button>
       </div>
    </div>
   </section>
  )
}



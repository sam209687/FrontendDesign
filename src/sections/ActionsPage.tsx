import Alignment from '@/components/(carousel)/Alignment'
import HexagonSvg from '@/components/(carousel)/Hexagon'
import React from 'react'

export default function ActionsPage() {
  return (
    <section className='py-96 overflow-hidden'>
       
        <div className='container'>
            {/* hexagon background  */}
            <div className='relative'>
                {/* 1st hexagon  */}
               <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
               <HexagonSvg className='size-[700px]' size={700} />
               </div>

                 {/* 2nd hexagon  */}
                 <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
               <HexagonSvg className='size-[1100px]' size={1100} reverse />
               </div>

                {/* circle in th hexagons (1)  */}
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <Alignment className='absolute left-0 -top-[400px]' animate>
                    <img src='/assets/images/cuboid.png' alt='cuboid' className='size-[140px]' />
                </Alignment>

                </div>

                  {/* circle in th hexagons (1)  */}

                  <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <Alignment className='absolute -left-[600px] -top-[70px]' animate>
                    <img src='/assets/images/cylinder.png' alt='cuboid' className='size-[140px]' />
                </Alignment>

                </div>

            <h2 className='font-semibold text-4xl md:text-5xl lg:text-6xl text-zinc-300 text-center'>Ready to get started</h2>
            <p className='text-xl text-zinc-400 text-center md:text-xl mt-8 max-w-xs mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita molestiae totam illo voluptas vel enim!</p>
           <div className='flex justify-center mt-12'>
           <button className="text-sm font-medium   tracking-wider border-2 inset-0 bg-fuchsia-500/20 rounded-tr-2xl border-fuchsia-500 px-4 py-2">Know More</button>
           </div>

        </div>
        </div>
    </section>
  )
}

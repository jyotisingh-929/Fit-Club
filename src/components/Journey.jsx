import React from 'react';
import { JourneryData } from './Data/JourneryData';
import whitetick from '../assets/whiteTick.png';


const Journey = () => {
    return (
        <div className='flex flex-col px-8 gap-16 relative -mt-20'>
            <div className='blur md:w-[512px] md:h-[368px] top-24 left-0'></div>
            <div className='blur md:w-[512px] md:h-[368px] top-40 right-0'></div>
            <div className='md:flex lg:gap-20 md:gap-6 justify-center font-bold lg:text-5xl md:text-3xl text-4xl text-white italic'>
                <div>
                    <span className='stroke-text'>READY TO START</span>
                </div>
                <div>
                    <span>YOUR JOURNEY</span>
                </div>
                <div>
                    <span className='stroke-text'>NOW WITHUS</span>
                </div>
            </div>
            {/* data */}
            <div className='flex grid md:grid-cols-3 grid-cols-1 justify-center items-center lg:gap-12 md:gap-12 gap-12 lg:mx-52 [&>:nth-child(2)]:bg-gradient-to-r from-garred to-garyellow [&>:nth-child(2)]:scale-110'>
                {JourneryData.map((data, i) => (
                    <div className='flex flex-col bg-caloryCard text-white lg:gap-8 md:gap-3 gap-6 lg:p-6 p-4 lg:w-80 md:w-56 w-80' key={i}>
                        <span className='fill-orange w-8 h-8'>{data.icon}</span>
                        <span className='lg:text-xl md:text-lg text-xl font-bold'>{data.name}</span>
                        <span className='lg:text-5xl md:text-3xl text-5xl font-bold'>$ {data.price}</span>
                        <div className='flex flex-col gap-4'>
                            {data.features.map((feature, i) => (
                                <div className='flex items-center gap-4'>
                                    <img src={whitetick} alt="" className='w-4' />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className='text-lg'>
                            <span>See more benefits </span>
                        </div>
                        <div className='flex items-center justify-center '>
                            <button className='text-black font-bold items-center bg-white w-64 py-2 hover:text-orange '>Join Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Journey
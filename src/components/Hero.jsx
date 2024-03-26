import React from 'react';
import Header from './Header';
import hero_img from '../assets/hero_image.png';
import hero_back_img from '../assets/hero_image_back.png';
import heart from '../assets/heart.png';
import calories from '../assets/calories.png';
import { motion } from 'framer-motion';


const Hero = () => {
    const transition = { type: 'spring', duration: 3 }

    return (
        <>
            <div className='flex grid lg:grid-cols-4  '>
                <div className='blur md:w-[352px] w-1/2 h-1/2 lg:h-[480px] left-0'></div>
                <div className='p-8 gap-4 lg:col-span-3'>
                    <Header />
                    {/* the best */}
                    <div >
                        <div className='flex lg:justify-start justify-center items-center md:mt-24 mt-14 w-fit bg-gray1 rounded-full lg:py-6 py-4 px-4 text-white relative'>
                            {/* motion */}
                            <motion.div
                                initial={{ left: '238px' }}
                                whileInView={{ left: '8px' }}
                                transition={{ ...transition, type: 'tween' }}
                                className='absolute bg-orange md:w-24 w-20 h-4/5 md:left-2 rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-full'>
                            </motion.div>
                            <span className='z-50 px-2 md:text-lg '>THE BEST FITNESS CLUB IN THE TOWN</span>
                        </div>
                    </div>
                    {/* shape your */}
                    <div className='flex flex-col gap-2 lg:text-7xl md:text-6xl text-5xl font-bold text-white mt-4'>
                        <div>
                            <span className='stroke-text'>SHAPE </span>YOUR
                        </div>
                        <div>
                            <span>IDEAL BODY</span>
                        </div>
                        <div className='text-lg font-normal mt-8 '>
                            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                        </div>
                    </div>
                    {/* figures */}
                    <div className='flex gap-8 mt-8'>
                        <div className='flex flex-col'>
                            <span className='text-white lg:text-4xl text-2xl'>+ 140</span>
                            <span className='text-gray '>EXPERT COACHES</span>
                        </div>
                        <div className='flex flex-col' >
                            <span className='text-white lg:text-4xl text-2xl'>+ 978</span>
                            <span className='text-gray '>MEMBERS JOINED</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-white lg:text-4xl text-2xl'>+ 50</span>
                            <span className='text-gray '>FITNESS PROGRAMS</span>
                        </div>
                    </div>
                    {/* buttons */}
                    <div className='flex gap-5 font-bold mt-10'>
                        <button className='text-white bg-orange w-32 py-2 ring-2 hover:bg-transparent hover:ring-2 ring-orange duration-700'>Get Started</button>
                        <button className='text-white bg-transparent w-32 py-2 ring-2 ring-orange hover:bg-orange duration-700'>Learn More</button>
                    </div>
                </div>
                <div className='relative p-8 lg:bg-orange'>
                    <button className='text-black absolute right-10 font-bold bg-white w-28 py-2 hover:text-orange '>Join Now</button>
                    {/* motion */}
                    <motion.div
                        initial={{ right: '-1rem' }}
                        whileInView={{ right: '4rem' }}
                        transition={transition}
                        className='flex flex-col gap-2 relative lg:absolute bg-darkGrey w-fit p-6 lg:mt-20 md:right-16 lg::ml-0 ml-16 rounded-md items-start'>
                        <img src={heart} alt="" className='w-8 ' />
                        <span className='text-gray'>Heart Rate</span>
                        <span className='text-white text-2xl'>116 bpm</span>
                    </motion.div>
                    {/* hero image */}
                    <img src={hero_img} alt="" className='relative lg:absolute lg:mt-32 md:-mt-32 -mt-10 lg:right-40 lg::ml-0 md:ml-80 ml-32 lg:w-[368px] md:w-1/2  w-2/3' />
                    {/* motion */}
                    <motion.img
                        initial={{ left: '-6rem' }}
                        whileInView={{ left: '-12rem' }}
                        transition={transition} src={hero_back_img} alt="" className='relative lg:absolute lg:mt-16 mb-64 lg:ml-0 md:ml-450px ml-64 md:-mt-500px -mt-388px lg:-left-48 -z-10 w-56 lg:w-[240px]'
                    />
                    {/* calories */}
                    <motion.div
                        initial={{ right: '38rem' }}
                        whileInView={{ right: '30rem' }}
                        transition={transition}
                        className='flex gap-4 bg-caloryCard relative lg:absolute w-fit lg:mt-[500px] md:-mt-80 -mt-388px  lg:-left-64 -left-0 lg:pl-5 lg:pr-14 md:pl-10 md:pr-16 pl-2 pr-2  py-3 rounded-md'>
                        <img src={calories} alt="" className='md:w-10 w-5' />
                        <div className='flex flex-col justify-between'>
                            <span className='text-gray '>Calories burned</span>
                            <span className='text-white md:text-2xl text-lg'>220 kcal</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Hero
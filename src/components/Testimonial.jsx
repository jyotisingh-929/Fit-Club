import React, { useState } from 'react';
import { TestimonialData } from './Data/TestimonialData';
import leftarrow from '../assets/leftArrow.png';
import rightarrow from '../assets/rightArrow.png';
import { motion } from 'framer-motion';

const Testimonial = () => {

    const transition = { type: 'spring', duration: 3 }

    const [selected, setSelected] = useState(0);
    const tLength = TestimonialData.length;

    return (
        <div className='flex gap-4 px-8 grid md:grid-cols-2 mt-10'>
            <div className='flex md:flex-1 flex-col  lg:gap-4 md:gap-3 gap-4 text-white'>
                <span className='font-bold text-orange'>TESTIMONIALS</span>
                <span className='stroke-text md:text-5xl text-4xl font-bold mt-5'>WHAT THEY</span>
                <span className='md:text-5xl text-4xl font-bold'>SAY ABOUT US</span>
                {/* motion */}
                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={transition}
                    className='transform-none text-justify lg:leading-10 leading-8 tracking-widest'>
                    {TestimonialData[selected].review}
                </motion.span>
                <span>
                    <span className='text-orange font-bold'>
                        {TestimonialData[selected].name}
                    </span>{" "}
                    - {TestimonialData[selected].status}
                </span>
            </div>
            <div className='md:flex-1 relative lg:left-0 left-28 lg:right-0 lg:justify-end lg:items-end'>
                {/* motion */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}
                    className='relative sm:absolute lg:w-64 lg:h-80 w-52 h-72 bg-transparent md:right-36 right-9 md:top-3 mt-8  ring-2 ring-orange'>
                </motion.div>
                {/* motion */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}
                    className='relative sm:absolute lg:w-64 lg:h-80 w-52 h-72 md:right-28 md:top-12 md:mt-6 -mt-64 bg-gradient-to-r from-garred to-garyellow'>
                </motion.div>
                {/* motion */}
                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}
                    src={TestimonialData[selected].image} alt="" className='relative sm:absolute lg:w-64 lg:h-80 w-52 h-72 object-cover md:right-32 right-5 md:top-8 md:mt-7 -mt-300px' />
                <div className='flex gap-4 absolute md:top-80 lg:left-12 md:-left-20 -left-28'>
                    <img
                        onClick={() => {
                            selected === 0
                                ? setSelected(tLength - 1)
                                : setSelected((prev) => prev - 1);
                        }}
                        src={leftarrow} alt=""
                        className='w-6' />
                    <img
                        onClick={() => {
                            selected === tLength - 1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1);
                        }}
                        src={rightarrow} alt="" className='w-6' />
                </div>
            </div>
        </div>
    )
}

export default Testimonial
import React from 'react';
import img1 from '../assets/image1.png';
import img2 from '../assets/image2.png';
import img3 from '../assets/image3.png';
import img4 from '../assets/image4.png';
import nb from '../assets/nb.png';
import adidas from '../assets/adidas.png';
import nike from '../assets/nike.png';
import tick from '../assets/tick.png';

const Reasons = () => {
    return (
        <div className='flex grid lg:grid-cols-2 lg:px-8 md:px-16 px-8 lg:gap-8'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2'>
                <div className=''>
                    <img src={img1} alt="" className='object-cover md:w-56 md:h-3/4 w-80 h-2/3' />
                </div>
                <div className='flex grid lg:col-span-2 grid-rows-2 lg:ml-0 md:-ml-20 md:mt-0 -mt-72'>
                    <div>
                        <img src={img2} alt="" className='object-cover w-auto h-64' />
                    </div>
                    <div className='flex md:gap-4 gap-2 md:-mt-12 mt-4'>
                        <img src={img3} alt="" className='object-cover md:w-52 md:h-52 w-44 h-44' />
                        <img src={img4} alt="" className='object-cover md:w-44 md:h-52 w-36 h-44' />
                    </div>
                </div>
            </div>
            <div className='flex gap-4 flex-col lg:mt-0 md:-mt-24 -mt-4'>
                <span className='font-bold text-orange'>SOME REASONS</span>
                <div className='text-white text-5xl font-bold md:mt-5'>
                    <span className='stroke-text'>WHY </span>
                    <span>CHOOSE US?</span>
                </div>
                <div className='flex flex-col gap-4 text-white text-lg  font-bold mt-5'>
                    <div className='flex gap-4 items-center'>
                        <img src={tick} alt="" className='w-8 h-8' />
                        <span>OVER 140+ EXPERT COACHS</span>
                    </div>
                    <div className='flex gap-4 items-center '>
                        <img src={tick} alt="" className='w-8 h-8' />
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div className='flex gap-4 items-center '>
                        <img src={tick} alt="" className='w-8 h-8' />
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div className='flex gap-4  items-center'>
                        <img src={tick} alt="" className='w-8 h-8' />
                        <span>RELIABLE PARTNERS</span>
                    </div>
                </div>
                <span className='text-gray font-normal lg:text-lg text-2xl mt-5'>
                    OUR PARTNERS
                </span>
                <div className='flex gap-4 w-10 lg:mb-0 mb-20'>
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Reasons


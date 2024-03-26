import React from 'react';
import logo from '../assets/logo.png';


const Footer = () => {
    return (
        <>
            <div className='lg:-mt-8 -mt-20'>
                <hr class="w-full h-px mx-auto my-4 bg-lightgray border-0 rounded md:my-4 dark:bg-gray-700" />
            </div>
            <section className=" -mt-14 mb-4">
                <div className="flex flex-col items-center mb-6">
                    <img src={logo} alt="" className='w-48' />
                </div>
                <div>
                    <ul className='flex md:gap-8 gap-2 justify-center text-white md:font-bold mb-4 '>
                        <li className='hover:text-orange duration-700 cursor-pointer'>HOME</li>
                        <li className='hover:text-orange duration-700 cursor-pointer'>PROGRAMS</li>
                        <li className='hover:text-orange duration-700 cursor-pointer'>WHY US</li>
                        <li className='hover:text-orange duration-700 cursor-pointer'>PLANS</li>
                        <li className='hover:text-orange duration-700 cursor-pointer'>TESTIMONIALS</li>
                    </ul>
                </div>
                <div className="text-center text-sm text-white [&>*]:my-2">
                    <p>@2023 Find® LTD. All Rights Reserved.</p>
                    <a href="/" className="block">
                        Privacy Policy
                    </a>
                    <a href="/" className="block">
                        Terms & Conditions
                    </a>
                </div>



            </section>

        </>
    )
}

export default Footer



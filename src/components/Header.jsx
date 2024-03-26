import React from 'react';
import Logo from '../assets/logo.png';

const NavLinks = [
    {
        id: 1,
        name: "HOME",
        link: "/#",
    },
    {
        id: 2,
        name: "PROGRAMS",
        link: "/#programs",
    },
    {
        id: 3,
        name: "WHY US",
        link: "/#why us",
    },
    {
        id: 4,
        name: "PLANS",
        link: "/#plans",
    },
    {
        id: 5,
        name: "TESTIMONIALS",
        link: "/#testimonials",
    },
]
const Header = () => {
    return (
        <div className='flex justify-between items-center'>
            <img src={Logo} alt="" className='w-32 md:w-40 h-auto' />
            <ul className='hidden md:flex lg:items-center lg:left-1/3 text-white lg:gap-6 gap-5'>
                {
                    NavLinks.map((data) => (
                        <li key={data.id} className=' '>
                            <a className='py-2 text-md lg:text-lg font-semiboldbold hover:text-orange duration-700 ' href={data.link}>{data.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>

    )
}

export default Header
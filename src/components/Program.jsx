import React, { useState } from 'react';
import ProgramData from './Data/ProgramData';
import { FaArrowRight } from 'react-icons/fa';


const Program = () => {
    return (
        <div className='flex flex-col p-7'>
            <div className='md:flex lg:gap-20 md:gap-8 justify-center font-bold lg:text-5xl md:text-3xl text-4xl text-white italic'>
                <div>
                    <span className='stroke-text'>EXPLORE OUR </span>
                </div>
                <div>
                    <span className=''>PROGRAMS</span>
                </div>
                <div>
                    <span className='stroke-text'>TO SHAPE YOU</span>
                </div>

            </div>
            <div className='flex grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-16 '>
                {ProgramData.map((data, index) => (
                    <Card
                        key={index}
                        image={data.image}
                        title={data.title}
                        text={data.text}
                    />
                ))}
            </div>
        </div>
    )
}
const Card = ({ image, title, text }) => {
    const [moreData, setMoreData] = useState(false);

    let shortData = `${text.slice(0, 90)}..`;
    const learnMore = () => {
        setMoreData(!moreData)
    };

    return (
        <>
            <div>
                <div className="flex flex-col bg-gray p-8 gap-4 text-white justify-between w-full h-full hover:bg-gradient-to-r from-garyellow to-garred">
                    <div className="fill-white">
                        <img src={image} alt="" width={34} height={34} fill="#ffff" />
                    </div>
                    <div className="">
                        <h2 className="text-xl font-bold">{title}</h2>
                        <p className="pt-4 text-md leading-6">{moreData ? text : shortData}</p>
                        <button className="pt-4 font-bold" onClick={learnMore}>{moreData ? "Hide" : "Read More"}<FaArrowRight className="float-right mt-2 ml-2" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Program
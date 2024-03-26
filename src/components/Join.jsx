import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Join = () => {

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
            publicKey: 'YOUR_PUBLIC_KEY',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <div className='flex gap-40 px-8 grid lg:grid-cols-2 lg:mt-6 mt-8'>
        <div className=' text-white font-bold md:text-5xl text-3xl gap-4'>
            <hr class="w-44 h-1  my-4 bg-orange border-0 rounded md:my-4"/>
            <div>
                <span className='stroke-text'>READY TO </span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY </span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className='md:flex lg:justify-end lg:items-end md:justify-start md:items-start lg:-mt-0 -mt-32'>
            <form ref={form} action="" className='flex md:gap-12 bg-gray px-8 py-4' onClick={sendEmail}>
                <input type="email" placeholder='Enter your email here' className='placeholder:text-lightgray bg-transparent outline-none border-none text-lightgray' />
                <button className='text-white font-bold bg-orange md:w-32 md:py-2 p-1 ring-2 hover:bg-transparent hover:ring-2 ring-orange duration-700'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join
import React from 'react';
import { FaAngleRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="font-outfit grid grid-cols-1 lg:grid-cols-2 gap-6 items-center px-6 py-8">
      <div className='p-4 lg:ml-16'>
        <span className=' text-4xl font-bold' > Your</span>
        <span className='text-[#CDFF00] text-4xl font-bold' > Ride, </span>
        <span className=' text-4xl font-bold' >Your </span>
        <img src="/cab_logo.png" alt="cab_logo" className='mt-2'/>
        <span className=' text-4xl font-bold mt-4' >Anytime, Anywhere! </span>
       <div className='mt-4'>
       <p className="text-xl lg:text-xl font-semibold text-[#374151]">
        Drvvy connects you to reliable drivers and clean, 
        </p>
        <p className="text-xl  lg:text-xl font-semibold text-[#374151]">
        comfortable cars—anytime, anywhere.
        </p>
       </div>
        <button className="bg-[#CDFF00] text-black px-4 py-2 rounded-xl mt-4  flex items-center justify-center">
            Download App <FaAngleRight />
          </button>
      </div>
      <div>
        <img src="/hero_image.png" alt="Hero" className="w-full h-auto rounded-lg " />
      </div>
    </div>
  );
};

export default Hero;

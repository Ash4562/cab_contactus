import React from 'react';

const HowItWork = () => {
  return (
    <div id='howitworks' className="text-center px-4 sm:px-10 md:px-20 py-12 font-outfit">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
        How It Works
      </h1>
      <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-700 mb-10 max-w-2xl mx-auto">
        Booking a driver with Cab Buddy is simple and straightforward. Just follow these steps.
      </h3>
      <div className="flex justify-center">
        <img
          src="/how.png"
          alt="How it works"
          className="w-full max-w-4xl h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default HowItWork;

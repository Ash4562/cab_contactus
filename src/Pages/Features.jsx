import React from 'react';

const Features = () => {
  const cardsData = [
    {
      image: '/cart1.png',
      title: 'Live Tracking',
      description: 'Track your driver in real-time and share your ride details with friends and family for safety.'
    },
    {
      image: '/cart2.png',
      title: ' Minimum Cost',
      description: 'Enjoy competitive pricing with transparent fare calculations and no hidden charges..',
    },
    {
      image: '/cart3.png',
      title: 'Car Selection',
      description: 'Choose from a wide range of vehicles for each trip based on your needs and preferences..',
    },
    {
      image: '/cart4.png',
      title: 'Verified Drivers',
      description: 'All our drivers are experienced professionals with verified documents and background checks..',
    },
  ];

  return (
    <div id='features' className="text-center px-4 sm:px-10 md:px-20 py-12 font-outfit ">
    <div className="px-4 sm:px-8 lg:px-24 py-10 text-center">
  {/* Heading with logo */}
  <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-0">
      Why Choose
    </h1>
    <img
      src="/choose_logo.png"
      alt="logo"
      className="h-10 sm:h-12"
    />
  </div>

  {/* Subheading */}
  <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-700 mt-4 max-w-2xl mx-auto">
    Our service offers unique advantages designed to make your travel experience exceptional.
  </h3>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-b-[#CDFF00] border-b-8 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover rounded-2xl p-2 "
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

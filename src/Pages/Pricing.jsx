import React from 'react'
import { LiaCheckSolid } from "react-icons/lia";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Pricing = () => {
  const [selectedRateType, setSelectedRateType] = React.useState('Hourly');

  const cars = [
    {
      image: '/car1.png',
      title: 'Sedan',
      hourlyRate: '₹200/hr',
      dailyRate: '₹1600/day',
      weeklyRate: '₹9800/week',
      subtitle: 'Including driver and fuel',
      features: [
        'Up to 4 passengers',
        'Air conditioning',
        'Top amenities',
        'Standard insurance coverage',
      ],
    },
    {
      image: '/car2.png',
      title: 'SUV',
      hourlyRate: '₹300/hr',
      dailyRate: '₹2400/day',
      weeklyRate: '₹14,500/week',
      subtitle: 'Spacious & comfortable',
      features: [
        'Up to 4 passengers',
        'Climate control',
        'Enhanced insurance',
        'Professional driver',
      ],
    },
    {
      image: '/car3.png',
      title: 'Premium',
      hourlyRate: '₹150/hr',
      dailyRate: '₹1200/day',
      weeklyRate: '₹7300/week',
      subtitle: 'Compact & efficient',
      features: [
        'Up to 4 passengers',
        'Luxury vehicle',
        ' Premium amenities',
        ' Comprehensive insurance',
        ' Elite driver service',
      ],
    },
  ];
  return (
 <div id='pricing' className='sm:mt-32'>
     <div>
      <div className="text-center px-4 sm:px-10 md:px-20  font-outfit ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
      Our Flexible Cars Rates      </h1>
      <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-700 mb-10 max-w-2xl mx-auto">
      Choose from our range of vehicles and pricing options to suit your needs and budget.
      </h3> 
    </div>
    <div className="flex space-x-4 lg:mb-32 p-4 justify-center items-center bg-white rounded-xl">
  {['Hourly', 'Daily', 'Weekly'].map((label) => (
    <button
      key={label}
      onClick={() => setSelectedRateType(label)}
      className={`px-6 py-2 font-semibold border border-gray-300 rounded-full transition duration-300 ${
        selectedRateType === label ? 'bg-[#CDFF00]' : 'hover:bg-[#CDFF00]'
      }`}
    >
      {label}
    </button>
  ))}
</div>

    <div className="max-w-6xl mx-auto pxs-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 px-8">
      {cars.map((car, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center space-y-4"
        >
          {/* Image on top */}
          <img
            src={car.image}
            alt={car.title}
            className="w-full h-48 object-cover rounded-xl  lg:-mt-28"
          />

          {/* Text section */}
          <div className="w-full text-center space-y-2">
            <h1 className="text-2xl font-bold text-gray-800">{car.title}</h1>
            <h2 className="text-lg font-semibold text-gray-700">
  {selectedRateType === 'Hourly'
    ? car.hourlyRate
    : selectedRateType === 'Daily'
    ? car.dailyRate
    : car.weeklyRate}
</h2>
            <p className="text-gray-600">{car.subtitle}</p>
            <div className="space-y-1">
  {car.features.map((feature, i) => (
    <p key={i} className="text-gray-600 text-sm flex items-center gap-x-1">
      <LiaCheckSolid className="text-green-600" />
      {feature}
    </p>
  ))}
</div>
          </div>

          {/* Book Now Button */}
          <button className="mt-auto w-full sm:w-72 bg-[#CDFF00] text-black px-6 py-2 rounded-lg hover:bg-[#b6e000] transition">
  Book Now
</button>

        </div>
      ))}
    </div>
    </div>
    <div
  id=""
  className="flex  flex-col lg:flex-row items-center gap-10 px-4 sm:px-10 lg:px-24 py-12  lg:h-[300px]
             bg-[url('/cart_bg.png')] bg-cover "
>

      
  
        {/* Right: Text + Stats */}
        <div className="w-full  lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
          <strong className="text-2xl px-5 sm:text-4xl font-bold text-white">Get Free 
        <strong className='text-[#CDFF00]'>  Cab Buddy </strong>
          App
On Online Store</strong>
          <p className=" text-white text-sm px-12" >
          Download our mobile app for the best booking experience. Track your ride
in real-time, save favorite locations, and get exclusive in-app offers.
          </p>
        
  
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 w-full max-w-md">
  {/* Google Play Button */}
  <button className="flex w-full gap-3 items-center justify-center bg-black rounded-lg p-2 shadow-sm hover:shadow-md transition">
    <div className="text-green-400 text-xl"><FaGooglePlay /></div>
    <div className="text-start">
      <p className="text-xs text-white">GET IT ON</p>
      <h2 className="text-sm font-semibold text-white">Google Play</h2>
    </div>
  </button>

  {/* App Store Button */}
  <button className="flex w-full gap-3 items-center justify-center bg-black rounded-lg p-2 shadow-sm hover:shadow-md transition">
    <div className="text-white text-2xl"><FaApple /></div>
    <div className="text-start">
      <p className="text-xs text-white">Download on the</p>
      <h2 className="text-sm font-semibold text-white">App Store</h2>
    </div>
  </button>
</div>


        </div>
  
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/cart_only.png"
            alt="About Us"
            className="w-full max-w-md lg:h-72 object-contain"
          />
        </div>
      </div>
 </div>
  )
}

export default Pricing

// import React from 'react'

// const About = () => {
//   const cards = [
//     {
//       title: '500+',
//       description: 'Drivers',
//     },
//     {
//       title: '15K+',
//       description: 'Happy Clients',
//     },
//     {
//       title: '20+',
//       description: 'Cities',
//     },
//     {
//       title: '4.8',
//       description: 'Average Rating',
//     },
//   ];
//   return (
//     <div id='about' className='relative z-40 sm:flex-row flex flex-col-reverse sm:px-[135px] py-10 bg-white'>
//      <div className='sm:flex'>
//         {/* Left Image */}
//         <div className='flex justify-center sm:justify-start px-4 sm:px-0'>
//           <img src='/about.png' className='w-full sm:w-[500px] sm:ml-0 ml-3' alt="Salon Image" />
//         </div>

//         {/* Right Images */}
//         <div className='flex flex-col sm:ml-2 mt-4 sm:mt-0 px-4 sm:px-0'>
//           <h1>About Us</h1>
//         <p>At drvvy, our mission is to make urban mobility easier by
// offering hassle-free driver + car rentals with complete transparency
// and reliability.</p>

// <p>We offer a range of well-maintained vehicles, including Sedans, SUVs, premium to match your travel needs and preferences. With real-time booking, transparent pricing, and verified drivers, we make your commute stress-free and efficient.</p>
//       <div className="px-4 sm:px-8 md:px-16 py-10 font-outfit">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
//           >
//             <h2 className="text-lg font-semibold mb-2 text-gray-900">{card.title}</h2>
//             <p className="text-sm text-gray-600">{card.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default About


import React from 'react';

const About = () => {
  const cards = [
    { title: '500+', description: 'Drivers' },
    { title: '15K+', description: 'Happy Clients' },
    { title: '20+', description: 'Cities' },
    { title: '4.8', description: 'Average Rating' },
  ];

  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row items-center gap-10 px-4 sm:px-10 lg:px-24 py-12 bg-white font-outfit"
    >
      {/* Left: Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/about.png"
          alt="About Us"
          className="w-full max-w-md lg:max-w-full object-contain"
        />
      </div>

      {/* Right: Text + Stats */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold">About Us</h1>
        <p className="text-gray-700">
          At Drvvy, our mission is to make urban mobility easier by offering hassle-free
          driver + car rentals with complete transparency and reliability.
        </p>
        <p className="text-gray-700">
          We offer a range of well-maintained vehicles, including Sedans, SUVs, and premium
          options to match your travel needs. With real-time booking, transparent pricing,
          and verified drivers, we make your commute stress-free and efficient.
        </p>

        {/* Cards */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-[#000]">{card.title}</h2>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default About;

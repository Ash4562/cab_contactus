import React from 'react'
import { RiTelegram2Line } from "react-icons/ri";

const Contactus = () => {
  return (
<div id='contactus' className="px-4 sm:px-10 lg:px-24 py-12">
  {/* Top Center Heading */}
  <div className="text-center mb-12">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
    Get In Touch    </h1>
    <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-700 max-w-2xl mx-auto">
    Have questions or need support? Our team is here to help you 24/7.    </h3>
  </div>

  {/* Main Flex Section */}
  <div className="flex flex-col lg:flex-row items-center gap-12">
    
    {/* Left: Contact Us Form */}
    <div className="w-full lg:w-1/2 bg-white shadow-md rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Let’s Talk</h2>
      <form className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message here"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-[#CDFF00] flex justify-center items-center hover:bg-[#CDF000] text-black font-semibold rounded-lg px-6 py-2 mt-2 transition duration-300"
        >
         <RiTelegram2Line /> Send Message
        </button>
      </form>
    </div>

    {/* Right: Image */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <img
        src="/getintouch.png"
        alt="Get in Touch"
        className="w-full max-w-md h-auto object-contain"
      />
    </div>
  </div>
</div>
  )
}

export default Contactus

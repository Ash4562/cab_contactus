import React, { useState, useEffect } from 'react';
import salonL from '../assets/zebra.svg';
import TL from '../assets/tech_surya.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const PrivacyPolicy = () => {
    return (
  <div className=''>
    <div className='relative z-50'>
    <div className=" mx-auto px-8 py-10 text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-blue-700">
        Privacy Policy & Terms & Conditions
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">
          Welcome to Salon
        </h2>
        <p className="text-base leading-relaxed">
          At Salon, we are committed to protecting your privacy and providing a smooth, secure experience. 
          This document outlines our Privacy Policy and Terms & Conditions. By accessing our website or using 
          our app to book salon services, you agree to the terms described below.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">Privacy Policy</h2>
        <p className="text-base leading-relaxed">
          At <span className="italic">Salon</span>, your privacy is important to us. This policy explains how we collect, use,
          and safeguard your personal data when you use our website or mobile app to book salon appointments.
        </p>
        <p className="mt-4 text-base leading-relaxed">
          We may collect details like your name, contact number, email, location (with permission), service preferences, 
          and device information. This helps us offer personalized salon recommendations, send appointment reminders, 
          and improve our services.
        </p>
        <p className="mt-4 text-base leading-relaxed">
          We do not sell your personal data. However, we may share it with partnered salons solely to manage your 
          bookings and provide the requested services. Your data is protected with encryption and stored securely.
        </p>
        <p className="mt-4 text-base leading-relaxed">
          You may access, update, or request deletion of your personal data at any time by contacting us. 
          By using Salon, you agree to the practices outlined here. For privacy concerns, email us at{" "}
          <a href="mailto:privacy@Salon.com" className="text-blue-600 underline">
            privacy@Salon.com
          </a>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">Terms & Conditions</h2>
        <p className="text-base leading-relaxed">
          By using Salon, you agree to our Terms & Conditions. Our platform connects you with local salons, allowing 
          you to browse services, view availability, and book appointments easily. We act as a facilitator, not a service provider.
        </p>
        <p className="mt-4 text-base leading-relaxed">
          You must provide accurate personal information, follow appointment schedules, and comply with each salon’s policies. 
          Cancellations or rescheduling should be done within the salon’s specified timeframe. Repeated no-shows may result 
          in penalties or temporary suspension.
        </p>
        <p className="mt-4 text-base leading-relaxed">
          You are responsible for keeping your login credentials secure. While we strive to maintain reliable services, 
          Salon is not liable for the quality of services offered by the salons themselves.
        </p>
        <p className="mt-4 text-base leading-relaxed">
          These terms may change over time. Continued use of the app implies your acceptance of any updates. For questions 
          related to these terms, email us at{" "}
          <a href="mailto:support@Salon.com" className="text-blue-600 underline">
            support@Salon.com
          </a>.
        </p>
      </section>
    </div>

        <div>
     
      
        <div className="hidden sm:block bg-[#42081B] w-full  text-white">
          {/* Your existing footer content */}
          <div className="sm:px-[100px]  grid grid-cols-2 p-4 sm:p-8 sm:border-b border-[#FFFFFF80]">
            <div className=''>
                <img src={salonL} alt="Salon Logo" className="h-16 mt-16" />

              </div>
  <div className="flex justify-end space-x-6 sm:pt-6 sm:mt-2">

                <FaFacebookF className="text-2xl mt-16 text-[#B9B7B7] border border-[#ECBFD3] p-1" />
                <FaTwitter className="text-2xl mt-16 text-[#B9B7B7] border border-[#ECBFD3] p-1" />
                <FaLinkedinIn className="text-2xl mt-16 text-[#B9B7B7] border border-[#ECBFD3] p-1" />
                <FaInstagram className="text-2xl mt-16 text-[#B9B7B7] border border-[#ECBFD3] p-1" />
              </div>
            </div>

            {/* Main footer content */}
            <div className="flex sm:px-[100px] justify-between gap-8 p-8">
              <div className="grid grid-cols-2 gap-20">
                <div>
                  <ul className="space-y-2">
                    <h3 className="text-xl font-semibold font-montserrat mb-4">Explore</h3>
                    <li><a href="#" className="text-[#B9B7B7]">Home</a></li>
                    <li><a href="#about" className="text-[#B9B7B7]">About Us</a></li>
                    <li><a href="#features" className="text-[#B9B7B7]">Features</a></li>
                    <li><a href="#contactus" className="text-[#B9B7B7]">Contact Us</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold font-montserrat mb-4">Utility Pages</h3>
                  <ul className="space-y-2">
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <li><a href="#" className="text-[#B9B7B7]">Terms of Use</a></li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-montserrat mb-4">Keep in Touch</h3>
                <ul className="space-y-2 text-[#B9B7B7]">
                  <li>Address: Golden City Center_MonthX</li>
                  <li>Mail: support@servicemarket.com</li>
                  <li>Phone: (+91) 123 - 4567 - 900</li>
                </ul>
              </div>
            </div>

            {/* Desktop copyright */}
            <div className='flex flex-col sm:flex-row sm:justify-between px-6 bg-black text-[#B9B7B7] w-full py-4'>
              <div className='sm:px-[80px] pt-3'>
                <p>©2025 all rights reserved</p>
              </div>
              <div className='flex sm:px-[100px] gap-3 pt-3'>
                <h2>Developed by</h2>
                <a href="https://techsuryaitsolution.com/" target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
                  <img src={TL} alt="Tech Surya Logo" className='h-8' />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Footer */}
          <div className="block sm:hidden bg-[#42081B] text-white">
            <div className="gap-8 p-8">
              <div className="grid grid-cols-2">
                <div>
                  <ul className="space-y-2">
                    <h3 className="text-xl font-semibold font-montserrat mb-4">Explore</h3>
                    <li><a href="#" className="text-[#B9B7B7]">Home</a></li>
                    <li><a href="#" className="text-[#B9B7B7]">About Us</a></li>
                    <li><a href="#" className="text-[#B9B7B7]">Features</a></li>
                    <li><a href="#" className="text-[#B9B7B7]">Contact Us</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold font-montserrat mb-4">Utility Pages</h3>
                  <ul className="space-y-2">
     

                   <Link to="/privacy-policy">Privacy Policy</Link>

                    <li><a href="#" className="text-[#B9B7B7]">Terms of Use</a></li>
                  </ul>
                </div>
              </div>

              <div className='mt-7'>
                <h3 className="text-xl font-semibold font-montserrat mb-4">Keep in Touch</h3>
                <ul className="space-y-2 text-[#B9B7B7]">
                  <li>Address: Golden City Center_MonthX</li>
                  <li>Mail: support@servicemarket.com</li>
                  <li>Phone: (+91) 123 - 4567 - 900</li>
                </ul>
              </div>
            </div>

            <div className="flex ml-4 space-x-6 p-4 border-b sm:p-6">
              <FaFacebookF className="text-2xl text-[#9b8b8b]" />
              <FaTwitter className="text-2xl text-[#B9B7B7]" />
              <FaLinkedinIn className="text-2xl text-[#B9B7B7]" />
              <FaInstagram className="text-2xl text-[#B9B7B7]" />
            </div>

            {/* Mobile copyright */}
            <div className='flex flex-col justify-between px-6 bg-[#42081B] text-[#B9B7B7] py-4'>
              <div className='pt-3'>
                <p>©2025 all rights reserved</p>
              </div>
              <div className='flex gap-3 pt-3'>
                <h2>developed by</h2>
                <a href="https://techsuryaitsolution.com/" target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
                  <img src={TL} alt="Tech Surya Logo" className='h-8' />
                </a>
              </div>
            </div>
          </div>
          </div>
    </div>
  // </div>
  )
}

export default PrivacyPolicy
import React, { useState, useEffect } from 'react';
import salonL from '../assets/zebra.svg';
import TL from '../assets/tech_surya.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";

import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {


  return (
    <>
      <div
        className="bottom-0 left-0 right-0 transition-transform duration-500 ease-in-out">


        <div className="hidden sm:block bg-[#111827] w-full  text-white">

          <div className="flex justify-around lg:p-5">
            <div className="">



              <div>
                {/* <h3 className="text-xl font-semibold font-montserrat mb-4">Utility Pages</h3> */}
                <img src="/footer_logo.png" className='h-12 ' alt="" />
                <div className="space-y-2 mt-4">
                  <p>Providing reliable and professional</p>
                  <p>car and driver services for all your</p>
                  <p>transportation needs.</p>
                </div>
                <div className="flex gap-4 mt-2">

                  <FaFacebookF className="text-2xl  text-[#B9B7B7]  -[#ECBFD3] p-1" />
                  <FaTwitter className="text-2xl  text-[#B9B7B7]  -[#ECBFD3] p-1" />
                  <FaLinkedinIn className="text-2xl  text-[#B9B7B7]  -[#ECBFD3] p-1" />
                  <FaInstagram className="text-2xl  text-[#B9B7B7]  -[#ECBFD3] p-1" />
                </div>
              </div>




            </div>

            <div>
              <ul className="space-y-2">
                <h3 className="text-2xl font-semibold font-montserrat  ">Quick Links</h3>
                <hr className='bg-[#CDFF00] w-1/2 h-1'/>
                <li><a href="#" className="text-[#B9B7B7]">Home</a></li>
                <li><a href="#about" className="text-[#B9B7B7]">About Us</a></li>
                <li><a href="#about" className="text-[#B9B7B7]"> Services</a></li>
                <li><a href="#features" className="text-[#B9B7B7]">Careers</a></li>
                <li><a href="#contactus" className="text-[#B9B7B7]">Contact Us</a></li>
              </ul>

            </div>

            <div>
              <h3 className="text-2xl font-semibold font-montserrat  ">Contact Us</h3>
              <hr className='bg-[#CDFF00] w-1/2 h-1'/>
              <div className="space-y-2   mt-2 text-[#B9B7B7]">
              
                <p className='flex items-center gap-3'><IoLocationOutline /> 123 Mobility Street, San</p>
                <p className='ml-8'>Francisco, CA 94107</p>
                <p className='flex items-center gap-3'><FaPhoneAlt  /> +1 (234) 567-890</p>
                <p className='flex items-center gap-3'><IoMdMail   /> support@cabbuddy.com</p>

              </div>
            </div>
          </div>
<div className='px-14'><hr className='text-white '/></div>
          {/* Desktop copyright */}
          <div className='flex flex-col sm:flex-row sm:justify-between px-6 bg-[#111827] text-[#B9B7B7] w-full py-4'>
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
        <div className="block sm:hidden bg-[#111827] text-white">
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
          <div className='flex flex-col justify-between px-6 bg-[#111827] text-[#B9B7B7] py-4'>
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


      <div className="block sm:hidden bg-[#42081B] text-white">
        {/* Your existing mobile footer content */}
        {/* ... */}
      </div>
    </>
  );
};

export default Footer;

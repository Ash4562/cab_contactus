// import React from 'react'
// import logo from '/cab_logo.png'

// const Navbar = () => {
//   return (
//     <div className="flex justify-between font-montserrat items-center bg-tranparent px-10 py-6 text-[#FFFFFF]">
//       <img src={logo} alt="Logo" className="h-10" />
//       <ul className="flex  gap-6 font-normal">
//       <ul className="flex gap-8 text-black">
//             <li className="hover:underline font-semibold cursor-pointer"> <a href="home">HOME</a></li>
//             <li className="hover:underline font-semibold cursor-pointer"> <a href="home">How It Works</a></li>
//             <li className="hover:underline font-semibold cursor-pointer"><a href="features">FEATURES</a> </li>
//             <li className="hover:underline font-semibold cursor-pointer"><a href="about">ABOUT US</a> </li>
//             <li className="hover:underline font-semibold cursor-pointer"><a href="contactus">CONTACT </a> </li>
//           </ul>
//       </ul>
//       <button className="bg-[#CDFF00] text-black px-4 py-2 rounded-3xl ">
//       Book a Driver
//       </button>
//     </div>
//   )
// }

// export default Navbar
import React, { useState } from 'react';
import logo from '/cab_logo.png';
import { Menu, X } from 'lucide-react'; // Optional: install `lucide-react` for icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent  px-6 py-4 font-outfit text-white">
   <div className="flex items-center justify-between px-4 sm:px-10 md:px-16 py-4">
  {/* Logo on Left */}
  <div className="flex-shrink-0">
    <img src={logo} alt="Logo" className="h-10" />
  </div>

  {/* Desktop Menu and Button - Right Aligned */}
  <div className="hidden md:flex items-center gap-6 ml-auto">
    <ul className="flex gap-8 text-black">
      <li className="hover:underline font-semibold cursor-pointer">
        <a href="#home">Home</a>
      </li>
      <li className="hover:underline font-semibold cursor-pointer">
        <a href="#howitworks">How It Works</a>
      </li>
      <li className="hover:underline font-semibold cursor-pointer">
        <a href="#features">Features</a>
      </li>
      <li className="hover:underline font-semibold cursor-pointer">
        <a href="#about">About Us</a>
      </li>
      <li className="hover:underline font-semibold cursor-pointer">
        <a href="#pricing">Pricing</a>
      </li>
      <li className="hover:underline font-semibold cursor-pointer">
        <a href="#contactus">Contact</a>
      </li>
    </ul>

    <button className="bg-[#CDFF00] text-black px-4 py-2 rounded-3xl">
    Download App
    </button>
  </div>

  {/* Hamburger Menu for Mobile */}
  <button
    className="md:hidden text-black ml-auto"
    onClick={() => setIsOpen(!isOpen)}
  >
    {isOpen ? <X size={28} /> : <Menu size={28} />}
  </button>
</div>


      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-black bg-white p-4 rounded-lg shadow">
          <a href="#home" className="hover:underline font-semibold">Home</a>
          <a href="#howitworks" className="hover:underline font-semibold">How It Works</a>
          <a href="#features" className="hover:underline font-semibold">Features</a>
          <a href="#about" className="hover:underline font-semibold">About Us</a>
          <a href="#pricing" className="hover:underline font-semibold">Pricing</a>
          <a href="#contactus" className="hover:underline font-semibold">Cantact</a>
          <button className="bg-[#CDFF00] text-black px-4 py-2 rounded-3xl mt-2">
            Book a Driver
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

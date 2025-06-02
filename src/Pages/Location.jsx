import React, { useState } from 'react';
import map from '../assets/map.png';
import { useAddPostMutation } from '../redux/Blog'; // Adjust path if needed

const Location = () => {
  const [formData, setFormData] = useState({ name: '', contact: '' });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const [addPost, { isLoading }] = useAddPostMutation();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) {
      setMessage("Please fill in all fields.");
      setMessageType("error");
      return;
    }
    try {
      await addPost(formData).unwrap();
      setMessage("Message sent successfully!");
      setMessageType("success");
      setFormData({ name: '', contact: '' });
    } catch (err) {
      setMessage("Failed to send. Please try again.");
      setMessageType("error");
    }
  };

  return (
 <div id='contactus' className='px-4 mb-72 sm:mb-0 bg-white sm:px-10 lg:px-[100px] py-8 sm:py-12 relative z-50 pointer-events-auto'>

      {/* Mobile Map */}
      <div className="flex justify-center mb-8 sm:hidden">
        <img src={map} alt="Map" className="w-full max-w-[500px] object-contain" />
      </div>

      {/* Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 font-poppins pointer-events-auto">
        {/* Left Form */}
        <div className="bg-[#F8F8F8] p-6 sm:p-8 rounded-lg flex items-center justify-center">
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <h1 className="text-center text-2xl sm:text-3xl lg:text-[40px] font-normal text-[#1E1E1E] uppercase tracking-wide mb-2">
              Contact Us
            </h1>
            <p className="text-center text-[#1E1E1E80] text-sm sm:text-[15px] mb-6">
              We're Here To Help You Look And Feel Your Best.
            </p>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full h-12 sm:h-16 border border-gray-300 py-2 px-4 text-sm focus:outline-none rounded"
              />

              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Contact No / Email"
                className="w-full h-12 sm:h-16 border border-gray-300 py-2 px-4 text-sm focus:outline-none rounded"
              />

              <button
                type="submit"
                className="w-full h-12 sm:h-16 bg-[#42081B] text-white font-medium tracking-wide hover:bg-[#2d060d] rounded transition-colors"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send"}
              </button>

              {/* On-screen message */}
              {message && (
                <p className={`text-sm sm:text-base mt-2 ${messageType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {message}
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Right Image (Desktop only) */}
        <div className="hidden lg:flex items-center justify-center">
          <img src={map} alt="Map" className="max-h-[500px] object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Location;

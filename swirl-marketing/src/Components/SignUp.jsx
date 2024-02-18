import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';




function SignUp() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true when the component mounts
    setIsVisible(true);
  }, []);


  return (
    <div className="mt-20 p-4 h-screen flex items-center justify-center">
      <div className="lg:w-6/12 md:7/12 w-8/12 shadow-3xl rounded-xl ">
        <h1 className="text-white text-center text-2xl font-serif md:text-5xl font-semibold m-2">Sign Up for </h1>
        <h2
          className="text-white text-center  text-3xl md:text-6xl font-thin italic"
          style={{
            visibility: isVisible ? 'visible' : 'hidden',
            opacity: isVisible ? 1 : 0,
            transition: 'visibility 0s, opacity 10s linear'
          }}
        >
          Swirl Marketing
        </h2>
        <div className='container pt-4 '>
        <hr className='bg-purple-700 md:w-28 w-20  mx-auto h-1  font-bold' />

          <p className='text-white px-3 lg:px-24 m-6 text-xl text-center'>
            Please,Provide SignUp credential to proceed and have access to all our services
          </p>
        </div>


        <form className="p-6 flex flex-col items-center " typeof='Submitted'>
          <div className="flex items-center text-lg mb-6 md:mb-8 relative">
            <FaUser className="absolute ml-5 text-blue-600" size={18} />
            <input type="text" id="name" className="bg-gray-200 rounded-full pl-12 py-2 md:py-4 focus:outline-none w-full lg:w-96" placeholder="Name" />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8 relative">
            <FaEnvelope className="absolute ml-5 text-blue-600" size={18} />
            <input type="email" id="email" className="bg-gray-200 rounded-full pl-12 py-2 md:py-4 focus:outline-none w-full lg:w-96" placeholder="Email" />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8 relative">
            <FaLock className="absolute ml-5 text-blue-600" size={18} />
            <input type="password" id="password" className="bg-gray-200 rounded-full pl-12 py-2 md:py-4 focus:outline-none w-full lg:w-96" placeholder="Password" />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8 relative">
            <FaLock className="absolute ml-5 text-blue-600" size={18} />
            <input type="password" id="confirmPassword" className="bg-gray-200 rounded-full pl-12 py-2 md:py-4 focus:outline-none w-full lg:w-96" placeholder="Confirm Password" />
          </div>
          <button
            className="bg-gradient-to-b rounded-full 
            mt-6 md:w-auto from-purple-500 to-blue-600  px-4 lg:px-14 md:p-4
             text-white font-medium  hover:from-blue-500 hover:to-purple-600"
          >Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

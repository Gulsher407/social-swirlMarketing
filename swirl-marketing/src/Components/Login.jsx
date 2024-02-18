import React, { useState, useEffect } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

function Login() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true when the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="md:w-full w-3/5 shadow-3xl rounded-xl mt-4">
        <h1 className="text-white text-center text-2xl md:text-5xl font-serif font-semibold mb-2">Welcome Back</h1>
        <h1 className="text-white text-center text-2xl md:text-5xl font-semibold ">TO</h1>
        <h2
          className="text-white text-center text-2xl md:text-5xl font-thin"
          style={{
            visibility: isVisible ? 'visible' : 'hidden',
            opacity: isVisible ? 1 : 0,
            transition: 'visibility 0s, opacity 5s linear'
          }}
        >
          Swirl Marketing
        </h2>
        <div className="container pt-4">
          <hr className="bg-purple-700 md:w-28 w-20 mx-auto h-[2px] font-bold" />

          <p className="text-white px-3 lg:px-24 m-6 md:w-[50%] mx-auto text-xl text-center">
            Please Provide Login credential to proceed and have access to all our services
          </p>
        </div>

        <form className="p-6 md:px-10 flex flex-col items-center">
          <div className="flex items-center text-lg mb-6 md:mb-8 relative">
            <FaUser className="absolute ml-5 text-blue-600" size={18} />
            <input
              type="text"
              id="username"
              className="bg-gray-200 rounded-full pl-12 py-2 md:py-4 focus:outline-none w-full md:w-96 lg:w-96"
              placeholder="Username"
            />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8 relative">
            <FaLock className="absolute ml-5 text-blue-600" size={18} />
            <input
              type="password"
              id="password"
              className="bg-gray-200 rounded-full pl-12 py-2 md:py-4 focus:outline-none w-full md:w-96 lg:w-96"
              placeholder="Password"
            />
          </div>
          <button className="bg-gradient-to-b rounded-full mt-6 md:w-auto
           from-purple-500 to-blue-600  p-4 lg:px-14 md:p-4
            text-white font-medium hover:from-blue-500 hover:to-purple-600">
            Login
          </button>
          <p className="text-white text-center mt-4">
            Don't have an account? <a href="/signup" className="text-white underline">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

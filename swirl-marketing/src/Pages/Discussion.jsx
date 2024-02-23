import React, { useEffect, useRef, useState } from 'react';
import help from '../assets/images/help.png';
import pic from '../assets/images/int2.png';

function Discussion() {
  const picImageRef = useRef(null);
  const helpImageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (picImageRef.current && helpImageRef.current) {
        const picRect = picImageRef.current.getBoundingClientRect();
        const helpRect = helpImageRef.current.getBoundingClientRect();

        setIsVisible(picRect.left <= windowHeight && helpRect.right >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="flex mb-4 md:flex-row justify-between flex-col lg:h-[450px] h-fit md:mx-10 mt-36 md:mb-36 font-sans">
        <div className="w-[45%] justify-center flex">
          {/* Left side content (picture) */}
          <img
            src={pic}
            ref={picImageRef}
            alt="discussion-Group"
            className={`ml-20 md:ml-0 w-auto h-full ${isVisible ? 'transition-transform duration-[2000ms] translate-x-0' : 'transition-transform duration-500 -translate-x-full'}`}
          />
        </div>
        <div className="md:w-[60%] mr-2 flex flex-col justify-center">
          {/* Right side content (paragraph) */}
          <h1 className="text-center mt-10 md:text-3xl text-2xl text-white md:mb-8 mb-4 font-bold">
            Lets Discuss About Your Project
          </h1>
          <p className="md:text-xl text-white md:ml-24 px-2">
            Your project is our focus. We're eager to delve into the details, understand your vision,
            and collaborate to bring it to life. Let's start a
            conversation that leads to your project's success.
          </p>
        </div>
      </div>

      <div className="h-10 flex items-center justify-center pb-20">
        <hr className="md:w-[1150px] border-white" />
      </div>

      <div className="flex justify-between h-[450px] md:mx-10 md:mt-10 md:flex-row flex-col font-sans">
        <div className="md:w-[60%] mr-2 flex flex-col justify-center p-2">
          {/* Right side content (paragraph) */}
          <h1 className="md:text-3xl text-2xl text-white md:mb-8 mb-4 font-bold">
            We Can Help You To Grow You Business
          </h1>
          <p className="md:text-xl text-white md:w-[92%]">
            Experience exponential growth for your business with our tailored solutions.
            Let our expertise pave the way for your success as we work together to expand your brand,
            reach new audiences, and achieve your goals.
          </p>
        </div>
        <div className="md:w-[40%] w-[80%] ml-2 justify-center flex">
          {/* Left side content (picture) */}
          <img
            src={help}
            ref={helpImageRef}
            alt="Business-Grow"
            className={`w-auto h-full ${isVisible ? 'transition-transform duration-[2000ms] translate-x-0' : 'transition-transform duration-[2000ms] translate-x-full'}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Discussion;

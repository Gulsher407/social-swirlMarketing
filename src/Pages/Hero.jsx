import React from 'react';

function Hero() {
  return (
    <div className="flex justify-center items-center h-[480px] text-white  mb-2 " >
      <div className="text-center">
        <div className="lg:text-4xl  font-sans mb-4 font-size">
          <div className="mb-2">We Provide the Best <span className='font-bold'>Strategy</span></div>
          <div className="mb-2">to Grow Up Your <span className='font-bold'>Business</span></div>
        </div>
        <div className="text-lg mb-6 mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorem  <br />
           blanditiis possimus velit delectus ipsum in veniam.
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-6">
          Get Quote
        </button>
      </div>
    </div>
  );
}

export default Hero;

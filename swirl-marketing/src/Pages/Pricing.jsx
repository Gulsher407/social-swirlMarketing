import React, { useState, useEffect, useRef } from 'react';

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pricingRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when at least 50% of the component is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, options);

    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }

    return () => {
      if (pricingRef.current) {
        observer.unobserve(pricingRef.current);
      }
    };
  }, []);

  return (
    <div className='w-full py-[4rem] px-4' >
      
      <div className='max-w-[850px] flex flex-col  md:flex-row rounded-xl mx-auto bg-white p-4 shadow-lg mt-16'>
        <p className='ml-14 text-blue-500 text-xl mr-8 self-center'>Save Time and Grow Your Business With Us! </p>
        <button className='bg-blue-700 w-[250px] text-white p-3 mt-3 ml-6 md:ml-0 md:mt-0 rounded-md mr-10 hover:bg-blue-800 transition duration-300'>VIEW ON-DEMAND DEMO</button>
      </div>

      <div className='mx-auto my-28 text-white flex max-w-[450px] flex-col'>
        <h1 className='text-3xl text-center font-bold py-10'>Pricing Plans</h1>
        <p className='font-semibold text-center'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda facilis modi magni aut dolor quidem, suscipit ipsam. Consequuntur, est adipisci eum porro molestiae architecto natus veniam debitis, dicta esse accusamus. Lorem
        </p>
      </div>
      
                 
                 
                 
                 <div ref={pricingRef} >      
      {isVisible && (
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          {/* Pricing cards */}
          <div className='w-full shadow-xl flex flex-col p-4 my-4 bg-white rounded-2xl hover:shadow-2xl hover:scale-105 duration-1000'>
            <h2 className='text-xl  text-center py-4'>Single User</h2>
            <div className='h-20 bg-blue-800 mx-4 text-white flex items-center justify-center rounded-2xl'>
              <div className="text-center">
                <p className='text-2xl  pt-2'>$14.50</p>
                <p className='text-sm mt-1'>Monthly</p>
              </div>
            </div>

            <div className='text-center font-medium'>
              <p className='py-2 mx-8 mt-4'>60 GB Space</p>
              <p className='py-2 mx-8'>600 GB Transfer</p>
              <p className='py-2 mx-8'>Pro Design Panel</p>
              <p className='py-2 mx-8 line-through'>15 Minutes Support</p>
              <p className='py-2 mx-8 line-through'>Unlimited Emails</p>
              <p className='py-2 mx-8 line-through'>24/7 Security</p>
            </div>
            <button className='bg-blue-600 w-fit rounded-full font-medium my-6 mx-auto text-white px-6 py-3 hover:bg-blue-700 transition duration-1000 ease-in-out'>Purchase Now</button>
          </div>
          {/* Second Card */}
          <div className='w-full shadow-xl flex flex-col p-4 my-4 bg-white rounded-2xl hover:shadow-2xl hover:scale-105 duration-1000'>
            <h2 className='text-xl  text-center py-4'>Premium</h2>
            <div className='h-20 bg-blue-400 mx-4 text-white flex items-center justify-center rounded-2xl'>
              <div>
                <p className='text-2xl text-center mt-2'>$21.50</p>
                <p className='text-sm mt-1 text-center'>Monthly</p>
              </div>
            </div>
            <div className='text-center font-medium'>
              <p className='py-2 mx-8 mt-4'>60 GB Space</p>
              <p className='py-2 mx-8'>600 GB Transfer</p>
              <p className='py-2 mx-8'>Pro Design Panel</p>
              <p className='py-2 mx-8 '>15 Minutes Support</p>
              <p className='py-2 mx-8 '>Unlimited Emails</p>
              <p className='py-2 mx-8 line-through'>24/7 Security</p>
            </div>
            <button className='bg-blue-600 w-fit rounded-full font-medium my-6 mx-auto text-white px-6 py-3 hover:bg-blue-700 transition duration-1000 ease-in-out'>Purchase Now</button>
          </div>
          {/* Third Card */}
          <div className='w-full shadow-xl flex flex-col p-4 my-4 bg-white rounded-2xl hover:shadow-2xl hover:scale-105 duration-1000'>
            <h2 className='text-xl  text-center py-4'>Advance</h2>
            <div className='h-20 bg-blue-800 mx-4 text-white flex items-center justify-center rounded-2xl'>
              <div>
                <p className='text-2xl  text-center'>$42.00</p>
                <p className='text-sm mt-2 text-center'>Monthly</p>
              </div>
            </div>
            <div className='text-center font-medium'>
              <p className='py-2 mx-8 mt-4'>250 GB Space</p>
              <p className='py-2 mx-8'>5000 GB Transfer</p>
              <p className='py-2 mx-8'>Pro Design Panel</p>
              <p className='py-2 mx-8 '>15 Minutes Support</p>
              <p className='py-2 mx-8 '>Unlimited Emails</p>
              <p className='py-2 mx-8 '>24/7 Security</p>
            </div>
            <button className='bg-blue-600 w-fit rounded-full font-medium my-6 mx-auto text-white px-6 py-3 hover:bg-blue-700 transition duration-1000 ease-in-out'>Purchase Now</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Pricing;

import React from 'react';

const NewsLetter = () => {
  return (
    <div  className='w-full py-16  text-white px-10'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4 lg:pl-14'>
          <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>
            Sign up for Newsletters
          </h1>
          <p>
            Get E-mail Updates About Our latest <span className='font-bold'>UPDATES!</span>.</p>
        </div>
        <div className='my-4 lg:pr-14'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-l  text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-blue-400 text-white rounded-r font-medium w-[200px]  my-6 px-4 py-3  hover:text-black      '>
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

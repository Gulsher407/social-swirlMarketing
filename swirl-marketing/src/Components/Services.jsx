import React from 'react';
import WorkProcess from '../Pages/WorkProcess'
import Aboutus from '../Pages/Aboutus'
import RecentProjects from '../Pages/RecentProjects';
import TeamSlider from '../Pages/TeamSlider';
import NewsLetter from '../Pages/NewsLetter';



function Services() {
  return (

    <div className=''  >
      <div className=' flex flex-col border-2 border-red-500 h-[114px] items-center' >
        <h1 className='text-white text-sm  lg:text-3xl  font-bold text-center p-4'>
          " Your Sucess Story Start Here Embrace Our Services."</h1>
        <h1 className='text-xl text-white border-2 font-bold bg-blue-600 border-blue-400 w-fit px-6 py-1 rounded-md mt-24 position absolute' >Our Services</h1>
      </div>

      <div className='bg-white w-full'>

         <div className='py-10 min-h-screen w-full px-5 mx-auto'>
          <h1 className=' text-sm  lg:text-3xl font-bold   lg:text-center text-[#000080]'>These are the <span className='text-red-700'>SERVICES</span> We are Providing</h1>

          <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 mt-4 gap-4'>
            {/* Service Card */}
            <div className='border-2 bg-[#cce9fe] flex flex-col justify-center items-center p-10 shadow-lg'>
              <img src="./public/images/grow.png" alt="" className='h-20 w-12 text-blue-500' />
              <h1 className='text-center text-blue-600 mt-1'>Digital Marketing</h1>
            </div>

            <div className='border-2 bg-[#cce9fe] flex lg:flex-col justify-center items-center p-10 shadow-lg'>
              <img src="./public/images/Content.png" alt="" className='h-20 w-12 text-blue-500' />
              <h1 className='text-center text-blue-600 mt-1'>Content Creator</h1>
            </div>

            <div className='border-2  bg-[#cce9fe] flex flex-col justify-center items-center p-10 shadow-lg'>
              <img src="./public/images/Brnd.png" alt="" className='h-20 w-12 text-blue-500' />
              <h1 className='text-center text-blue-600 mt-1'>Brand Marketing</h1>
            </div>
            <div className='border-2 bg-[#cce9fe]  flex lg:flex-col  justify-center items-center p-10 shadow-lg'>
              <img src="./public/images/grow.png" alt="" className='h-20 w-12 text-blue-500' />
              <h1 className='text-center text-blue-600 mt-1'>Digital Marketing</h1>
            </div>

            <div className='border-2 bg-[#cce9fe] flex flex-col justify-center items-center p-10 shadow-lg'>
              <img src="./public/images/Content.png" alt="" className='h-20 w-12 text-blue-500' />
              <h1 className='text-center text-blue-600 mt-1'>Content Creator</h1>
            </div>

            <div className='border-2 flex flex-col justify-center items-center p-10 shadow-lg'>
              <img src="./public/images/Brnd.png" alt="" className='h-20 w-12 text-blue-500' />
              <h1 className='text-center text-blue-600 mt-1'>Brand Marketing</h1>
            </div>
            <div className='border-2 flex lg:flex-col flex-row justify-center items-center p-10 shadow-lg'>
              <img src="./public/images/grow.png" alt="" className='h-20 w-12 text-blue-500' />
              <h1 className='text-center text-blue-600 mt-1'>Digital Marketing</h1>
            </div>

            <div className='border-2 flex flex-col justify-center items-center p-10 shadow-lg'>
              <img src="./public/images/Content.png" alt="" className='h-20 w-12 text-blue-500' />
              <h1 className='text-center text-blue-600 mt-1'>Content Creator</h1>
            </div>

            <div className='border-2 flex flex-col justify-center items-center p-10 shadow-lg'>
              <img src="./public/images/Brnd.png" alt="" className='h-20 w-12 text-blue-500' />
              <h1 className='text-center text-blue-600 mt-1'>Brand Marketing</h1>
            </div>
            <div className='border-2 flex lg:flex-col flex-row justify-center items-center p-10 shadow-lg'>
              <img src="./public/images/grow.png" alt="" className='h-20 w-12 text-blue-500' />
              <h1 className='text-center text-blue-600 mt-1'>Digital Marketing</h1>
            </div>



            {/* Repeat the same structure for other service cards */}
          </div>


        </div>

      </div>


      <div className='max-w-[850px] flex flex-col lg:flex-row rounded-xl md:mx-auto m-5 bg-white p-4 shadow-lg mt-16'>
        <p className='ml-14 text-blue-500 text-xl mr-8 self-center'>Save Time and Grow Your Business With Us! </p>
        <button className='bg-blue-700 w-[250px] text-white p-3 mt-3 md:mt-0 ml-5 md:ml-0 rounded-md mr-10 hover:bg-blue-800 transition duration-300'>VIEW ON-DEMAND DEMO</button>
      </div>

      <WorkProcess />
      <Aboutus />
      <RecentProjects />
      <TeamSlider />
      <NewsLetter />


    </div>
  );
}

export default Services;

import React from 'react';
import './WorkProcess.css'

function WorkProcess() {
    return (
        <div className='text-white md-mt-28 md-mx-20 mt-20 max-w-[1150px] mx-auto'>
            <h1 className='md:text-3xl text-2xl font-semibold text-center mb-4'>Work Process</h1>
            <p className='md:text-center md:ml-8 md:text-xl p-2 ' >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae sapiente fugiat velit cupiditate laboriosam iusto officia,
                numquam ad eveniet alias expedita molestiae, ducimus magni iste nisi placeat laborum. Sunt, debitis.
            </p>
            <div className='mx-2 grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-8 mt-16 '>
                <div  className='Ali  flex flex-col justify-center items-center p-3 hover:scale-105 duration-300 ease-linear text-center bg-white text-black rounded-xl'>
                    <div className="text-xl p-2 mb-2 items-center overflow-hidden ">
                        
                        <img src="./public/images/ideas.png" alt="Ideas" className='h-10 w-10 ' />
                    </div>
                    <div className="text-lg mb-1">Get Ideas</div>
                    <div className="p-0">
                        <p className="text-gray-700">Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            
                

                <div  className='Ali  flex flex-col justify-center items-center p-3  hover:scale-105 duration-300 ease-linear text-center bg-white text-black rounded-xl'>
                    <div className="text-xl p-2 mb-2 items-center">
                        <img src="./public/images/Sketch.png" alt="Ideas" className='h-10 w-10' />
                    </div>
                    <div className="text-lg mb-1">Sketch Up</div>
                    <div className="p-0">
                        <p className="text-gray-700">Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div  className='Ali  flex flex-col justify-center items-center p-3  hover:scale-105 duration-300 ease-linear text-center bg-white text-black rounded-xl'>
                    <div className="text-xl p-2 mb-2 items-center">
                        <img src="./public/images/Conver.png" alt="Ideas" className='h-10 w-10' />
                    </div>
                    <div className="text-lg mb-1"> Discuss</div>
                    <div className="p-0">
                        <p className="text-gray-700">Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div  className='Ali hover:scale-105 duration-300 ease-linear  flex flex-col justify-center items-center p-3  text-center bg-white text-black rounded-xl'>
                    <div className="text-xl p-2 mb-2 items-center">
                        <img src="./public/images/Revise.png" alt="Ideas" className='h-10 w-10' />
                    </div>
                    <div className="text-lg mb-1"> Revise</div>
                    <div className="p-0">
                        <p className="text-gray-700">Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div  className='Ali hover:scale-105 duration-300 ease-linear  flex flex-col justify-center items-center p-3  text-center bg-white text-black rounded-xl'>
                    <div className="text-xl p-2 mb-2 items-center">
                        <img src="./public/images/Approve.png" alt="Ideas" className='h-10 w-10' />
                    </div>
                    <div className="text-lg mb-1"> Approve</div>
                    <div className="p-0">
                        <p className="text-gray-700">Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div  className='Ali hover:scale-105 duration-300 ease-linear flex flex-col justify-center items-center p-3  text-center bg-white text-black rounded-xl'>
                    <div className="text-xl p-2 mb-2 items-center">
                        <img src="./public/images/Launch.png" alt="Ideas" className='h-10 w-10' />
                    </div>
                    <div className="text-lg mb-1">Lanuch</div>
                    <div className="p-0">
                        <p className="text-gray-700">Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                
                
                {/* Repeat similar structure for other grid items */}
            </div>
        </div>
    );
}

export default WorkProcess;

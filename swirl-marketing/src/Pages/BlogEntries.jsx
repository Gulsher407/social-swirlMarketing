import React from 'react';

function BlogEntries() {
    return (
        <div className='container text-white'>

            {/* Blog Entries Section */}
            <div className='mx-auto my-10 text-center  max-w-[500px]'>
                <h1 className='text-3xl font-bold p-4'>Blogging Entries</h1>
                <p className='p-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at consequat justo. Cras ullamcorper maximus justo, id lacinia purus volutpat eu. Nullam feugiat arcu sit amet ante fermentum,
                    et consequat lorem varius. Sed et dui nec urna condimentum laoreet. Phasellus a dui id justo venenatis accumsan.
                </p>
            </div>

            {/* Blog Cards Section */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6  max-w-[1160px] mx-auto'>

                {/* First Blog Card */}
                <div className='flex flex-col items-center'>
                    <div className='h-[250px] w-[100%] lg:w-[380px]'>
                        <img src="./public/images/Calculator.jpg" alt="Gulsher" className='hover:-translate-y-6 duration-1000   p-4 h-[250px] w-[100%] rounded-3xl' />
                    </div>
                    <div className='text-center'>
                        <h1>Name</h1>
                        <p className='mt-4 font-thin text-md'>Earum adipisci quo harum. Oodh wohdo Dolore est doloremque enim aspernatur ab aut magni quod pariatur et,</p>
                    </div>
                    <button className='mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                        Read More
                    </button>
                </div>

                {/* Second Blog Card */}
                <div className='flex flex-col items-center'>
                    <div className='h-[250px] w-[100%] lg:w-[380px] '>
                        <img src="./public/images/Calculator.jpg" alt="Calcu" className=' hover:-translate-y-6 duration-1000  p-4 h-[250px] w-[100%] rounded-3xl' />
                    </div>
                    <div className='text-center'>
                        <h1>Name</h1>
                        <p className='mt-4 font-thin text-md'>Earum adipisci quo harum. Oodh wohdo Dolore est doloremque enim aspernatur ab aut magni quod pariatur et,</p>
                    </div>
                    <button className='mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                        Read More
                    </button>
                </div>

                {/* Third Blog Card */}
                <div className='flex flex-col items-center'>
                    <div className='h-[250px] w-[100%] lg:w-[380px]'>
                        <img src="./public/images/Calculator.jpg" alt="Gulsher" className='hover:-translate-y-6 duration-1000  p-4 h-[250px] w-[100%] rounded-3xl' />
                    </div>
                    <div className='text-center'>
                        <h1>Name</h1>
                        <p className='mt-4 font-thin text-md'>Earum adipisci quo harum. Oodh wohdo Dolore est doloremque enim aspernatur ab aut magni quod pariatur et,</p>
                    </div>
                    <button className='mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BlogEntries;

import React, { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import { FaAngleLeft , FaAngleRight } from "react-icons/fa6";
import ZEE from '../assets/images/ZEE.jpg'
import Fizba from '../assets/images/fizba.jpg'
import Haider from '../assets/images/haider.jpg'


function Aboutus() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            name: `Zeeshan Analyist`,
            img:   ZEE, // URL of the image   
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            rating: 4.5, // Initial rating for the App Store testimonial
        },
        {
            name: ` Fizba Azhar`,
            img:    Fizba, // URL of the image   
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            rating: 4.5, // Initial rating for the Twitter testimonial
        },
        {
            name: `M Haider Ashraf`,
            img:  Haider, // URL of the image   
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            rating: 4, // Initial rating for the Instagram testimonial
        },
        
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
        }, 2000); // Adjust interval duration as needed (5000ms = 5 seconds)

        return () => {
            clearInterval(interval);
        };
    }, [data.length]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + data.length) % data.length);
    };

    return (
        <div className='w-[90%] mt-52 mx-auto mb-10'>

            <div className='mt-10 text-white justify-center flex flex-col '>
                <h1 className='text-center font-bold lg:text-3xl'>What do they Say About Us?</h1>
                <p className='text-center mt-5  lg:text-xl' >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit eum fugit quisquam similique et iste corporis, nam facere expedita ea cupiditate?
                    Exercitationem nemo doloribus quas numquam nam temporibus ullam veniam.</p>
            </div>

            <div className="mt-10 relative   hidden lg:block">
                <div className="grid grid-cols-3 gap-4 relative  p-2 ">
                    {data.slice(currentSlide, currentSlide + 3).map((testimonial, index) => (
                        <div key={index} className="bg-white h-[340px]   mx-5 text-black rounded-xl overflow-hidden shadow-lg transition-transform duration-500 transform hover:scale-105">
                            <div className='h-24 flex justify-center items-center rounded-t-xl mt-6 '>
                            
                            <img src={testimonial.img} alt="" className="h-32 w-32 rounded-full"/>

                            </div>
                            <div className="flex flex-col items-center justify-center mt-4">
                                <Rating name="half-rating-read" value={testimonial.rating} precision={0.5} readOnly />
                                <p className="text-center p-4">{testimonial.review}</p>
                                <p className="text-xl font-semibold  mt-2">{testimonial.name}</p>
                            </div>
                        </div>
                    ))}

                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <FaAngleLeft onClick={prevSlide} className="text-blue-200 text-4xl cursor-pointer" />
                    </div>
                    <div className="absolute inset-y-0 right-0  flex items-center">
                        <FaAngleRight onClick={nextSlide} className="text-blue-200 text-4xl cursor-pointer" />
                    </div>
                </div>
            </div>
  
            <div className="mt-10 relative  lg:hidden">
                <div className="grid grid-cols-1 relative  p-2 ">
                    {data.slice(currentSlide, currentSlide + 1).map((testimonial, index) => (
                        <div key={index} className="bg-white h-[340px]   mx-5 text-black rounded-xl overflow-hidden shadow-lg transition-transform duration-500 transform hover:scale-105">
                            <div className='h-24 flex justify-center items-center rounded-t-xl mt-6 '>
                            
                            <img src={testimonial.img} alt="" className="h-32 w-32 rounded-full"/>

                            </div>
                            <div className="flex flex-col items-center justify-center mt-4">
                                <Rating name="half-rating-read" value={testimonial.rating} precision={0.5} readOnly />
                                <p className="text-center p-4">{testimonial.review}</p>
                                <p className="text-xl font-semibold  mt-2">{testimonial.name}</p>
                            </div>
                        </div>
                    ))}

                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <FaAngleLeft onClick={prevSlide} className="text-blue-200 text-4xl cursor-pointer" />
                    </div>
                    <div className="absolute inset-y-0 right-0  flex items-center">
                        <FaAngleRight onClick={nextSlide} className="text-blue-200 text-4xl cursor-pointer" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Aboutus;

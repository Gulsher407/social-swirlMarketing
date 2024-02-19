import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function TeamSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const data = [
        { id: 1, position: 'Developer', image: '/images/Logo.png' },
        { id: 2, position: 'Designer', image: '/images/Logo1.png' },
        { id: 3, position: 'Manager', image: '/images/Design.jpg' },
        { id: 4, position: 'Manager1', image: '/images/Mine.jpg' },
        { id: 5, position: 'React devloper', image: './images/Mine2.jpg'},
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
        }, 900); 

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
            {/* Content for large and medium screens */}
            {!isSmallScreen && (
                <>
                    <div className='mt-10 text-white justify-center flex flex-col '>
                        <h1 className='text-center font-bold lg:text-3xl'>Our Team Members</h1>
                        <p className='mt-4 font-bold px-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iusto sunt exercitationem harum rem facere pariatur reprehenderit praesentium, ullam ipsa commodi distinctio cumque, dignissimos velit, totam cum nostrum consequuntur. Cum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem maiores animi, porro aut dolores iure ad quam omnis esse distinctio fugit quas ipsam fuga laudantium doloribus quod architecto! Nesciunt, voluptatum?</p>
                    </div>

                    <div className="mt-14 relative " >
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-col-1 gap-4 relative text-white  p-2 ">
                            {data.slice(currentSlide, currentSlide + 4).map((member, index) => (
                                <div key={index} className="  mx-5">
                                    <div className='h-24 flex justify-center items-center'>
                                        <img src={member.image} alt={member.position} className=" object-cover w-28 h-28 rounded-full" />
                                    </div>
                                    <div className="flex flex-col mt-4 items-center justify-center">
                                        <p className="text-xl font-semibold mt-2">{member.position}</p>
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
                </>
            )}

            {/* Content for small screens */}
            {isSmallScreen && (
                <div className="mt-14 relative " >
                    <div className="grid grid-cols-1 gap-4 relative text-white  p-2 ">
                        {data.slice(currentSlide, currentSlide + 1).map((member, index) => (
                            <div key={index} className="  mx-5">
                                <div className='h-24 flex justify-center items-center'>
                                    <img src={member.image} alt={member.position} className=" object-cover w-28 h-28 rounded-full" />
                                </div>
                                <div className="flex flex-col mt-4 items-center justify-center">
                                    <p className="text-xl font-semibold mt-2">{member.position}</p>
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
            )}
        </div>
    );
}

export default TeamSlider;

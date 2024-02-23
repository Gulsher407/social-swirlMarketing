import React from "react";
import {
  FaAppStore,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WorkProcess from "./WorkProcess";


function Slider() {
  return (
    <div className="mx-auto lg:max-w-[1250px] max-w-full px-4 relative">
      <Carousel
        showArrows={true}
        emulateTouch={true}
        showStatus={false}
        showThumbs={false}
        centerMode={true}
        centerSlidePercentage={33.33}
        infiniteLoop={true}
        autoFocus={true}
        style={{ maxHeight: "300px" }}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent border-none text-2xl text-black cursor-pointer z-10"
            >
              <BsArrowLeftCircle />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent border-none text-2xl text-black cursor-pointer z-10"
            >
              <BsArrowRightCircle />
            </button>
          )
        
        
        }
       className="py-4 mt-4 h-80 mx-auto max-w-[1250px]" >
        {/* Carousel slides */}
        <div className="flex flex-col justify-center h-72  items-center p-4 text-center bg-white text-black rounded-xl  mx-4">
          {" "}
          {/* Add margin between slides */}
          <div className="text-4xl h-10 p-10">
            <FaAppStore size={50} />
          </div>
          <div className="text-xl mb-2 py-5">Modern Strategy</div>
          <div className="mb-4">
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="flex flex-col justify-center items-center  p-4 text-center bg-white text-black rounded-xl h-full mx-4">
          {" "}
          {/* Add margin between slides */}
          <div className="text-4xl h-10 p-10">
            <FaTwitter size={50} />
          </div>
          <div className="text-xl mb-2 py-5">Twitter Strategy</div>
          <div className="mb-4">
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="flex flex-col justify-center items-center  p-4 text-center bg-white text-black rounded-xl h-full mx-4">
          {" "}
          {/* Add margin between slides */}
          <div className="text-4xl h-10 p-10">
            <FaInstagram size={50} />
          </div>
          <div className="text-xl mb-2 py-5">Instagram Strategy</div>
          <div className="mb-4">
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        {/* Slide 4 */}
        <div className="flex flex-col justify-center items-center p-4 text-center bg-white text-black rounded-xl h-full mx-4">
          {" "}
          {/* Add margin between slides */}
          <div className="text-4xl h-10 p-10">
            <FaFacebook size={50} />
          </div>
          <div className="text-xl mb-2 py-5">Facebook Strategy</div>
          <div className="mb-4">
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        {/* Slide 5 */}
        <div className="flex flex-col justify-center items-center  p-4 text-center bg-white text-black rounded-xl  h-full mx-4">
          {" "}
          {/* Add margin between slides */}
          <div className="text-4xl h-10 p-10">
            <FaGithub size={50} />
          </div>
          <div className="text-xl mb-2 py-5">GitHub Strategy</div>
          <div className="mb-4">
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </Carousel>
      
      <WorkProcess/>

      </div>
  );
}

export default Slider;

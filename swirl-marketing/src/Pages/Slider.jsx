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
import Pricing from "./Pricing";
import Aboutus from "./Aboutus";


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


      {/* Additional div after Carousel */}


      

      <div className="flex mb-4  md:flex-row   justify-between flex-col    lg:h-[450px] h-fit md:mx-10 mt-36  md:mb-36  font-sans ">
        <div className="w-[45%]   justify-center flex ">
          {/* Left side content (picture) */}
          <img src="./Images/Disscussion.png" alt="discussion-Group" className="ml-20 md:ml-0  w-auto h-full " />
        </div>
        <div className=" md:w-[60%] mr-2 flex flex-col  justify-center ">
          {/* Right side content (paragraph) */}
          <h1 className="text-center mt-10 md:text-3xl text-2xl text-white md:mb-8  mb-4 font-bold" >Lets Discuss About Your Project</h1>

          <p className="md:text-xl text-white md:ml-24 px-2">
            Your project is our Focus. We are eger to delve into the details, understand yourvision,
            and collaborate to bring it in life.Lets start a coversation that start  lead to your project sucess           </p>
        </div>
      </div>
           
      <div className="h-10 flex items-center justify-center pb-20">
  <hr className="md:w-[1150px]  border-white" />
</div>



      <div className="flex justify-between h-[450px] md:mx-10 md:mt-10   md:flex-row flex-col         font-sans">
        <div className="md:w-[60%] mr-2 flex flex-col justify-center p-2">
          {/* Left side content (paragraph) */}
              <h1 className="md:text-3xl text-2xl text-white md:mb-8  mb-4 font-bold " >We Can Help You To Grow You Buisness</h1>
          <p className="md:text-xl text-white md:w-[92%] ">
            Your paragraph text goes here.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            blanditiis repellendus . Repellat officiis dolorem, unde in culpa
            eum veniam tenetur, doloremque possimus, libero pariatur maxime
            deserunt ipsam! Quaerat, excepturi ut. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="md:w-[40%] w-[70%]  ml-2  justify-center flex">
          {/* Left side content (picture) */}
          <img src="./Images/Grow.png" alt="Business-Grow" className=" w-auto h-full  " />
        </div>
      </div>
      <WorkProcess/>

      </div>
  );
}

export default Slider;

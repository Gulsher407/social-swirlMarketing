import React from "react";
import ImageSlider from "react-slick"; // Renamed Slider to ImageSlider to resolve the conflict
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WorkProcess from "./WorkProcess";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import data from '../assets/images/strategies/data analytics.png'
import compaign from '../assets/images/strategies/hashtags compaign.png'
import live from '../assets/images/strategies/live streaming.png'
import UGC from '../assets/images/strategies/UGC.png'
import social from '../assets/images/strategies/social listening.png'
import video from '../assets/images/strategies/video marketing.png'

import { FaApple, FaTwitter, FaInstagram} from "react-icons/fa";

function Slider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <ImageSlider {...settings}> {/* Changed Slider to ImageSlider */}      
        <div>
          <div className="flex flex-col justify-center items-center p-4 text-center bg-white text-black rounded-xl h-full mx-4">
            <FaApple size={50} />
            <div className="text-xl mb-2 py-5">Modern Strategy</div>
            <div className="mb-4">
              <p className="text-gray-700">Description for Modern Strategy.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center p-4 text-center bg-white text-black rounded-xl h-full mx-4">
            <FaTwitter size={50} />
            <div className="text-xl mb-2 py-5">Live Streaming Strategy</div>
            <div className="mb-4">
              <p className="text-gray-700">Description for Live Streaming Strategy.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center p-4 text-center bg-white text-black rounded-xl h-full mx-4">
            <FaInstagram size={50} />
            <div className="text-xl mb-2 py-5">Data Analytics Strategy</div>
            <div className="mb-4">
              <p className="text-gray-700">Description for Data Analytics Strategy.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center p-4 text-center bg-white text-black rounded-xl h-full mx-4">
            <img src={data} alt="Data Analytics Strategy" className="h-20 w-20" />
            <div className="text-xl mb-2 py-5">Data Analytics Strategy</div>
            <div className="mb-4">
              <p className="text-gray-700">Description for Data Analytics Strategy.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center p-4 text-center bg-white text-black rounded-xl h-full mx-4">
            <img src={live} alt="Data Analytics Strategy" className="h-20 w-20" />
            <div className="text-xl mb-2 py-5">Data Analytics Strategy</div>
            <div className="mb-4">
              <p className="text-gray-700">Description for Data Analytics Strategy.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center p-4 text-center bg-white text-black rounded-xl h-full mx-4">
            <img src={UGC} alt="Data Analytics Strategy" className="h-20 w-20" />
            <div className="text-xl mb-2 py-5">Data Analytics Strategy</div>
            <div className="mb-4">
              <p className="text-gray-700">Description for Data Analytics Strategy.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center p-4 text-center bg-white text-black rounded-xl h-full mx-4">
            <img src={compaign} alt="Data Analytics Strategy" className="h-20 w-20" />
            <div className="text-xl mb-2 py-5">Data Analytics Strategy</div>
            <div className="mb-4">
              <p className="text-gray-700">Description for Data Analytics Strategy.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center p-4 text-center bg-white text-black rounded-xl h-full mx-4">
            <img src={data} alt="Data Analytics Strategy" className="h-20 w-20" />
            <div className="text-xl mb-2 py-5">Data Analytics Strategy</div>
            <div className="mb-4">
              <p className="text-gray-700">Customize anything in this template to fit your website needs</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center p-4 text-center bg-white text-black rounded-xl h-full mx-4">
            <img src={video} alt="Video Marketing" className="h-20 w-20" />
            <div className="text-xl mb-2 py-5">Video Marketing</div>
            <div className="mb-4">
              <p className="text-gray-700">Customize anything in this template to fit your website needs</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center p-4 text-center bg-white text-black rounded-xl h-full mx-4">
            <img src={social} alt="Social Listening" className="h-20 w-20" />
            <div className="text-xl mb-2 py-5">Social Listening</div>
            <div className="mb-4">
              <p className="text-gray-700">Customize anything in this template to fit your website needs</p>
            </div>
          </div>
        </div>
      </ImageSlider>

                 <WorkProcess/>
    </div>
  );
}

export default Slider;

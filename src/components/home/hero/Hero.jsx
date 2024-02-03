import React from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useHistory } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Hero = () => {
  const history = useHistory();

  const navigateToAboutUs = () => {
    history.push('/about');
  };
  const navigateToCourses = () => {
    history.push('/courses');
  };

  const navigateToContest = () => {
    history.push('/contest');
  };
  return (
   <>
   <div className="hero" >
   <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
        <SwiperSlide>
            <div className="slide-content">
              <img src="https://res.cloudinary.com/dx78kzenz/image/upload/v1706011699/flimBG_nhjjeh.jpg" className="kenburns-bottom" alt="Slider Image 1" />
              <div className="overlays">
              <div className="overlays-content">
                <h2 className="flicker-1">Bright Future</h2>
                <p>At Bright Future Flim Tech Academy, We embrace the fervor of filmmaking, the essence of storytelling, and the delight of entertainment. </p>
                <button className="button-37" onClick={navigateToAboutUs}>Know us </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        <SwiperSlide>
            <div className="slide-content">
              <img src="https://res.cloudinary.com/dx78kzenz/image/upload/v1706010884/flimBG3_khnuqs.webp" className="kenburns-bottom" alt="Slider Image 1" />
              <div className="overlays">
              <div className="overlays-content">
                <h2 className="flicker-1">Courses </h2>
                <p>With an aim to arm another generation of young film-makers with a never-ending passion for good cinema</p>
                <button className="button-37" onClick={navigateToCourses}>Explore Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        <SwiperSlide>
            <div className="slide-content">
              <img src="https://res.cloudinary.com/dx78kzenz/image/upload/v1706011696/flimBG5_rgxyjk.jpg" className="kenburns-bottom" alt="Slider Image 1" />
              <div className="overlays">
              <div className="overlays-content">
                <h2 className="flicker-1">Apply for Contest</h2>
                <p>Asia's Biggest Short flim Contest by bright future flim tech academy, Apply Now by clicking the Below button</p>
                <button className="button-37" onclilck={navigateToContest}>Apply Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
      </Swiper>
      </div>
   </>
  );
};

export default Hero;
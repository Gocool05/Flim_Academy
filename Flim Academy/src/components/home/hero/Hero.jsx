import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../common/heading/Heading";
import "./Hero.css";


const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="slide" >
        <div className="overlay">
          <div className="content">
            <Heading subtitle="WELCOME TO Bright future" title="Best Education Expertise" />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className="buttons">
              <button>GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i></button>
              <button>VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i></button>
            </div>
          </div>
        </div>
      </div>

      <div className="slide" >
        <div className="overlay">
          <div className="content">
            <Heading subtitle="Welcome to Another Section" title="Awesome Content" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="buttons">
              <button>EXPLORE NOW <i className="fa fa-long-arrow-alt-right"></i></button>
              <button>LEARN MORE <i className="fa fa-long-arrow-alt-right"></i></button>
            </div>
          </div>
        </div>
      </div>

      <div className="slide" >
        <div className="overlay">
          <div className="content">
            <Heading subtitle="Discover the Future" title="Cutting-edge Technology" />
            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            <div className="buttons">
              <button>START EXPLORING <i className="fa fa-long-arrow-alt-right"></i></button>
              <button>FIND OUT MORE <i className="fa fa-long-arrow-alt-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Hero;
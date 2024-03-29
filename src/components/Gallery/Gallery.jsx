import React, { useState } from "react";
import Back from "../common/back/Back";
import "./Gallery.css";
import Slider from "react-slick";
import Modal from "react-modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";
import { color } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/effect-cube';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { EffectCards,EffectCube } from 'swiper/modules';
const Gallery = () => {
  const isMobile = window.innerWidth <= 768;

  const DesktopSlider = (
    <>
      {/* <Back title="BFFTA Moments" /> */}
      <section className="gallery">
        <div class="container">
          <div id="gallery">
            <div className="section-title" style={{ marginTop: "40px" }}>
              <h2
                className="Gallery-title"
                style={{ textAlign: "center", marginBottom: "20px" }}
              >
                Moments of Bright Future
              </h2>
            </div>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              // centeredSlides={true}
              slidesPerView={"3"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper1"
            >
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411421/Bright%20Future%20Gallery/a14_rdqqck.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411420/Bright%20Future%20Gallery/a10_tsfgwy.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411421/Bright%20Future%20Gallery/a11_s54twx.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411421/Bright%20Future%20Gallery/a15_ad7fjx.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411420/Bright%20Future%20Gallery/a6_cegvx1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411419/Bright%20Future%20Gallery/a2_msnqd3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411420/Bright%20Future%20Gallery/a3_jahtbn.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411420/Bright%20Future%20Gallery/a8_kym462.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411420/Bright%20Future%20Gallery/a9_ol6orb.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411421/Bright%20Future%20Gallery/a12_soaurt.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411421/Bright%20Future%20Gallery/a7_mcyyxk.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411420/Bright%20Future%20Gallery/a5_cqw7v2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411421/Bright%20Future%20Gallery/a13_x9dkqk.jpg" />
              </SwiperSlide>
            </Swiper>

            <div className="section-title" style={{ marginTop: "40px" }}>
              <h2
                className="Gallery-title"
                style={{ textAlign: "center", marginBottom: "20px" }}
              >
                Bright Future Events
              </h2>
            </div>

            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"3"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper1"
            >
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411421/Bright%20Future%20Gallery/a1_vlfd07.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411420/Bright%20Future%20Gallery/a4_zbd0pe.jpg" />
              </SwiperSlide>
             
            </Swiper>
           
            <div style={{ marginBottom: "50px" }}></div>
          </div>
        </div>
      </section>
    </>
  );

  const MobileSlider = (
    <>
      {/* <Back title="BFFTA Moments" /> */}
      <section className="gallery">
        <div class="container">
          <div id="gallery">
            <div className="section-title" style={{ marginTop: "40px" }}>
              <h2
                className="Gallery-title"
                style={{ textAlign: "center", marginBottom: "20px" }}
              >
                Moments of Bright Future
              </h2>
            </div>
            <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper2"
      >
          <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411421/Bright%20Future%20Gallery/a14_rdqqck.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411420/Bright%20Future%20Gallery/a10_tsfgwy.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411421/Bright%20Future%20Gallery/a11_s54twx.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411421/Bright%20Future%20Gallery/a15_ad7fjx.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411420/Bright%20Future%20Gallery/a6_cegvx1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411419/Bright%20Future%20Gallery/a2_msnqd3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411420/Bright%20Future%20Gallery/a3_jahtbn.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411420/Bright%20Future%20Gallery/a8_kym462.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411420/Bright%20Future%20Gallery/a9_ol6orb.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411421/Bright%20Future%20Gallery/a12_soaurt.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411421/Bright%20Future%20Gallery/a7_mcyyxk.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411420/Bright%20Future%20Gallery/a5_cqw7v2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411421/Bright%20Future%20Gallery/a13_x9dkqk.jpg" />
              </SwiperSlide>
      </Swiper>
            <div className="section-title" style={{ marginTop: "40px" }}>
              <h2
                className="Gallery-title"
                style={{ textAlign: "center", marginBottom: "20px" }}
              >
                Bright Future Events
              </h2>
            </div>
            <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper2"
      >
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411421/Bright%20Future%20Gallery/a1_vlfd07.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dtnbsrrar/image/upload/v1708411420/Bright%20Future%20Gallery/a4_zbd0pe.jpg" />
              </SwiperSlide>
      </Swiper>
           
            <div style={{ marginBottom: "50px" }}></div>
          </div>
        </div>
      </section>
    </>
  );
  return isMobile ? MobileSlider : DesktopSlider;
};

export default Gallery;

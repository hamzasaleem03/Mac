import React, { useRef, useState } from "react";
// eslint-disable-next-line
import "swiper/css/bundle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Navigation, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

function index() {
  return (
    <> 
    <div>
      <div className="relative py-12">
      <div className="py-14">
  <div className="">
    <div className="py-7">
      <div className="swiper mySwiper">
      <Swiper
             slidesPerView={"auto"}
             slidesPerGroupSkip={3}
             grabCursor={true}
             autoplay={true}
             loopFillGroupWithBlank={true}
             loop={true}
             navigation={{
               prevEl: ".swiper-button-prev",
               nextEl: ".swiper-button-next",
             }}
             breakpoints={{
               // when window width is >= 320px
               320: {
                 slidesPerView: 1,
                 spaceBetween: 24,
               },
               // when window width is >= 480px
               480: {
                 slidesPerView: 2,
                 spaceBetween: 24,
               },
               // when window width is >= 640px
               640: {
                 slidesPerView: 3,
                 spaceBetween: 24,
               },
               1024: {
                 slidesPerView: 5,
                 spaceBetween: 32,
                 slidesPerGroup: 1,
               },
               1336: {
                 slidesPerView: 5,
                 spaceBetween: 32,
               },
             }}
              className="swiper mySwiper"
            >
          <SwiperSlide className="swiper-slide relative ">
            <div className="">
                <img  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/caro1.png" alt="one"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide relative ">
          <div className="lg:pt-10">
                <img className=""  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/caro2.png" alt="one"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide relative">
          <div className="">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/caro3.png" alt="one"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide relative">
          <div className="lg:pt-10">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/caro4.png" alt="one"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide relative">
          <div className="">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/caro5.png" alt="one"/>
            </div>
          </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</div>


        <style>
          {`
               .swiper-slide {
                text-align: center;
                font-size: 18px;
                /* Center slide text vertically */
                display: -webkit-box;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                -webkit-justify-content: center;
                justify-content: center;
                -webkit-box-align: center;
                -webkit-align-items: center;
                align-items: center;
                
            }
            .swiper-slide img {
                object-fit: cover;
            }
        `}
        </style>
      </div>
    </>
  );
}

export default index;

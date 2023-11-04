// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import "./swiperimgstyles.css";

import axios from "axios";
import { useState, useEffect } from "react"

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";




function Swiperimg() {


    const [data, setData]=useState([])
  
    const fetchData= async()=>{
          const data = await axios.get(`https://fakestoreapi.com/products/`);
          setData(data.data);
        } 

    // console.log(data)

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <>

    <div className="Swiper-sec-body pt-3 pb-3">


    <Swiper
     
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}          
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper swipersec"
      >



{data.map((item)=>{
  return(
    <>
       <SwiperSlide className="swipersec-slide p-2">
          <img className="p-2"  src={item.image} alt="" />
        </SwiperSlide>
    </>
  )
})}

      </Swiper>


    </div>
    </>
  );
}

export default Swiperimg;
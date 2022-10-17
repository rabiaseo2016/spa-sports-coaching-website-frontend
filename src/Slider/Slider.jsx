import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import slider1 from "../images/slider-2.jpg";
import slider2 from "../images/slider-1jpg.jpg";
import slider3 from "../images/slider-3.jpg";

import "./Slider.css";

// import required modules
import { Navigation } from "swiper";
import { Box } from "@mui/system";
import { Button, Container, Divider, Typography } from "@mui/material";
import Points from "../CoachSection/Points";

const Slider = () => {
  return (
    <div style={{ pading: "20px 0", margin: "50px 0" }}>
      <Container>
        <Divider />
        <Typography variant="h4" sx={{ py: 4 }}>
          MEET OUR COACH
        </Typography>
        <Divider />
      </Container>
      <Swiper
        id="swiper"
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {/* Slider Start */}
        <SwiperSlide id="slider">
          {/* <section className="slide"> */}
          <div id="image">
            <img src={slider1} className="carousel" alt="slider-1" />
          </div>
          <div style={{ textAlign: "left" }} id="content">
            <Typography variant="h4" sx={{ mt: 3, mb: 4 }}>
              Wen Tianxiang
            </Typography>
            <Points />
          </div>
          {/* </section> */}
        </SwiperSlide>
        {/* Slider End */}
      </Swiper>
    </div>
  );
};

export default Slider;

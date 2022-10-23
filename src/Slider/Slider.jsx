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

// coach profile points
const coachData = [
  {
    name: "Wen Tianxiang",
    image: slider1,
    profile: {
      point1: "Ipsum has been the industry's standard dummy text ever",
      point2: "To be able to teach effectively, the coach must have",
      point3: "Displays Commitment and Clear Passion for the Sport",
      point4: "Leads by Example with very High Attitude to Hard Work",
    },
  },
  {
    name: "Wen Tianxiang",
    image: slider2,
    profile: {
      point1: "Understands the Sport and Leads by Example",
      point2: "Sponge for Knowledge / Profound Thinker / Visionary",
      point3: "Shares the Knowledge / Educates Others",
      point4: "Highly Energised and a Motivator",
    },
  },
  {
    name: "Wen Tianxiang",
    image: slider3,
    profile: {
      point1: "Knows the Athlete, Values and Respects that Relationship",
      point2: "Is an Effective Communicator & Teacher",
      point3: "Is a Good Listener",
      point4: "Is Disciplined, Strong in Character and Integrity",
    },
  },
];

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
        {coachData.map((coach, idx) => (
          <SwiperSlide key={idx} id="slider">
            <div id="image">
              <img src={coach.image} className="carousel" alt="slider-1" />
            </div>
            <Box
              sx={{
                textAlign: { md: "left", sm: "center" },
                paddingRight: { md: 5, sm: 0 },
              }}
              id="content"
            >
              <Typography variant="h4" sx={{ mt: 3, mb: 4 }}>
                {coach.name}
              </Typography>
              <Points
                point1={coach.profile.point1}
                point2={coach.profile.point2}
                point3={coach.profile.point3}
                point4={coach.profile.point4}
              />
            </Box>
          </SwiperSlide>
        ))}

        {/* Slider Three End */}
      </Swiper>
    </div>
  );
};

export default Slider;

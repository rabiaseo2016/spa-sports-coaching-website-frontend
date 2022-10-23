import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";
import { Navigation } from "swiper";
import { Box } from "@mui/system";
import { Container, Divider, Typography } from "@mui/material";
import Points from "../CoachSection/Points";
import coachData from "./coachData";

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

      {/* Slider */}
      <Swiper
        id="swiper"
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {coachData.map((coach, idx) => (
          <SwiperSlide key={idx} id="slider">
            {/* coach image */}
            <div id="image">
              <img src={coach.image} className="carousel" alt="slider-1" />
            </div>
            {/* coach profile */}
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
      </Swiper>
    </div>
  );
};

export default Slider;

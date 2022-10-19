import { Height } from "@mui/icons-material";
import { Divider, Typography } from "@mui/material";
import React from "react";
import coach from "../images/coach.jpg";
import Points from "./Points";
import "./CoachSection.css";

const CoachSection = () => {
  return (
    <div style={{ textAlign: "left" }}>
      <Typography variant="h6" sx={{ mt: 3, mb: 4 }}>
        Wen Tianxiang
      </Typography>
      <Points />
    </div>
  );
};

export default CoachSection;

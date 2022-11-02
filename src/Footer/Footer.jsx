import { Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#304751",
        color: "whitesmoke",
        /*textTransform: "uppercase",*/
      }}
    >
      <Typography variant="body1">&copy; Sportverse Limited 2022</Typography>
    </div>
  );
}

import { Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#1ca3ec",
        color: "whitesmoke",
        textTransform: "uppercase",
      }}
    >
      <Typography variant="body1">&copy; Squash Journey || 2022</Typography>
    </div>
  );
}

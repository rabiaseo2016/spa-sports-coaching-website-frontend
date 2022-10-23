import * as React from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import "./Header.css";

export default function ButtonAppBar() {
  return (
    <section className="header">
      <div className="overlay">
        <Container className="header_container">
          <Typography
            variant="h3"
            sx={{
              fontSize: { md: "40px", sm: "20px" },
            }}
            style={{
              color: "antiquewhite",
              fontWeight: "500",
            }}
            id="header_text"
          >
            Your Squash Journey Starts Here
          </Typography>
        </Container>
      </div>
    </section>
  );
}

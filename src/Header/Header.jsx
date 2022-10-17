import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import "./Header.css";

export default function ButtonAppBar() {
  return (
    <section className="header">
      <div className="overlay">
        <Container className="header_container">
          <Typography
            variant="h3"
            style={{
              color: "antiquewhite",
              fontWeight: "500",
            }}
          >
            Your Squash Journey Starts Here
          </Typography>
        </Container>
      </div>
    </section>
  );
}

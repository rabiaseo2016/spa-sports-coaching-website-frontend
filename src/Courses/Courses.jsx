import { Container, Divider, Typography } from "@mui/material";
import React from "react";
import Cards from "../Cards/Cards";
const Courses = () => {
  return (
    <div>
      <Container>
        <Divider />
        <Typography variant="h4" sx={{ py: 4 }}>
          OUR COURSES
        </Typography>
        <Divider />
        <Cards />
      </Container>
    </div>
  );
};

export default Courses;

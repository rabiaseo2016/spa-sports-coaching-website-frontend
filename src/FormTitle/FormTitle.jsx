import { Divider, Typography } from "@mui/material";
import React from "react";

const FormTitle = () => {
  return (
    <div style={{ margin: "10px 0 30px 0" }}>
      <Divider />
      <Typography variant="h4" sx={{ py: 4 }}>
        REGISTER YOUR LESSON NOW
      </Typography>
      <Divider />
    </div>
  );
};

export default FormTitle;

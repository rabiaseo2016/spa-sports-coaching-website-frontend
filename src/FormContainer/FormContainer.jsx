import { Container } from "@mui/system";
import React from "react";
import Form from "../Form/Form";
import "./FormContainer.css";

const FormContainer = () => {
  return (
    <div className="form">
      <Container sx={{ py: 8 }}>
        <Form />
      </Container>
    </div>
  );
};

export default FormContainer;

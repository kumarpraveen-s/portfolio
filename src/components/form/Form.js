import { Button, TextareaAutosize, TextField } from "@mui/material";
import React from "react";

const Form = ({ className }) => {
  return (
    <form className={className}>
      <TextField label="Name" />
      <TextField label="Mobile" type="tel" />
      <TextField label="Email" type="email" />
      <TextareaAutosize
        placeholder="message"
        minRows="4"
        style={{ padding: "10px", backgroundColor: "#effffd" }}
      />
      <Button color="primary">Submit</Button>
    </form>
  );
};

export default Form;

import React, { useState } from "react";
import "./bookingform.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import axios from "axios";
import ConfirmForm from "../ConfirmForm/ConfirmForm";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";



const Bookingform = () => {
  const [formValues, setFormValues] = useState({
    destination: "",
    departure_date: null,
    adults: 0,
    children: 0,
    passenger_name: "",
    email: "",
    phone_number: "",
  });

  const [ToggleForm, setToggleForm] = useState(true)

    const toggleForm = () => {
    setToggleForm(!ToggleForm)

}


  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleDateTimeChange = (value, fieldName) => {
    const date = value ? value.$d.toLocaleString() : null;
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: date,
    }));
  };

  const handleButtonClick = () => {
    toggleForm()
    axios
      .post("http://localhost:8000/bookings", formValues)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
<div>
    {ToggleForm ?
    <div><h2 className="bookingTitle">Boka din resa genom att fylla i formuläret nedan</h2>


    <Box
      component="form"
      sx={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        sx={{ mb: 2 }}
        id="filled-basic"
        label="Destination"
        variant="filled"
        value={formValues.destination}
        onChange={handleInputChange}
        name="destination"
      />
      <div className="seimer">
        <TextField
          sx={{ mb: 2 }}
          id="filled-basic"
          label="Vuxna"
          variant="filled"
          value={formValues.adults}
          onChange={handleInputChange}
          name="adults"
          type="number"
          inputProps={{ min: "0" }}
        />

        <TextField
          id="filled-basic"
          label="Barn"
          variant="filled"
          value={formValues.children}
          onChange={handleInputChange}
          name="children"
          type="number"
          inputProps={{ min: "0", pattern: "[0-9]*" }}
        />
      </div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateTimePicker"]}>
          <DateTimePicker
            sx={{ mb: 2, position: "relative", top: "-7px" }}
            label="AVRESEDATUM"
            value={formValues.departure_date}
            onChange={(date) => handleDateTimeChange(date, "departure_date")}
            renderInput={(props) => <TextField {...props} />}
          />
        </DemoContainer>
      </LocalizationProvider>
      <TextField
        id="filled-basic"
        label="Namn På Bokare"
        variant="filled"
        value={formValues.passenger_name}
        onChange={handleInputChange}
        name="passenger_name"
        sx={{ mb: 2 }}
      />

      <TextField
        id="filled-basic"
        label="Email"
        variant="filled"
        value={formValues.email}
        onChange={handleInputChange}
        name="email"
        sx={{ mb: 2 }}
      />
      <TextField
        id="filled-basic"
        label="Telefonnummer"
        variant="filled"
        sx={{ mb: 2 }}
        value={formValues.phone_number}
        onChange={handleInputChange}
        name="phone_number"
      />
      <Button
        variant="contained"
        onClick={handleButtonClick}
        endIcon={<SendIcon />}
        sx={{ mb: 2 }}
      >
        Boka
      </Button>
    </Box> </div>
    : <ConfirmForm/>}
    </div>
  );
};

export default Bookingform;

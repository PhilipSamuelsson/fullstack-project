import React, { useState } from "react";
import "./bookingform.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const Bookingform = () => {
  const [isFormEnabled, setIsFormEnabled] = useState(true);
  const [selectedValue, setSelectedValue] = useState("enable");

  const [formValues, setFormValues] = useState({
    field1: "",
    field2: "",
    field3: "",
    dateTimeAvgång: null,
    dateTimeHemkomst: null,
  });

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
    const { field1, field2, field3, dateTimeAvgång, dateTimeHemkomst } =
      formValues;
    console.log("Field 1:", field1);
    console.log("Field 2:", field2);
    console.log("Field 3:", field3);
    console.log("Avgång Date and Time:", dateTimeAvgång);
    console.log("Hemkomst Date and Time:", dateTimeHemkomst);
  };

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);

    if (value === "enable") {
      setIsFormEnabled(true);
    } else {
      setIsFormEnabled(false);
      setFormValues((prevValues) => ({
        ...prevValues,
        dateTimeHemkomst: null,
      }));
    }
  };

  return (
    <div className="leimer">
      <div className="cleimer">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Tur&Retur"
            name="radio-buttons-group"
            row
          >
            <FormControlLabel
              control={
                <Radio
                  value="enable"
                  onChange={handleRadioChange}
                  checked={selectedValue === "enable"}
                />
              }
              label="Tur & Retur"
            />

            <FormControlLabel
              value="Enkel"
              control={
                <Radio
                  onChange={handleRadioChange}
                  checked={selectedValue === "disable"}
                  value="disable"
                />
              }
              label="Enkel"
            />
          </RadioGroup>
        </FormControl>

        <Box
          display="flex"
          flexDirection="column"
          component="form"
          sx={{
            "& > :not(style)": { m: 2 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="Flyg Från"
            variant="filled"
            sx={{}}
            value={formValues.field1}
            onChange={handleInputChange}
            name="field1"
          />
          <TextField
            id="filled-basic"
            label="Flyg Till"
            variant="filled"
            sx={{}}
            value={formValues.field2}
            onChange={handleInputChange}
            name="field2"
          />
          <div className="seimer">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker
                  label="AVRESEDATUM"
                  value={formValues.dateTimeAvgång}
                  onChange={(date) =>
                    handleDateTimeChange(date, "dateTimeAvgång")
                  }
                  renderInput={(props) => <TextField {...props} />}
                />
              </DemoContainer>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker
                  label="HEMRESEDATUM"
                  disabled={!isFormEnabled}
                  value={formValues.dateTimeHemkomst}
                  onChange={(date) =>
                    handleDateTimeChange(date, "dateTimeHemkomst")
                  }
                  renderInput={(props) => <TextField {...props} />}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>

          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            sx={{}}
            value={formValues.field3}
            onChange={handleInputChange}
            name="field3"
          />
          <Button
            variant="contained"
            onClick={handleButtonClick}
            endIcon={<SendIcon />}
          >
            Boka!
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Bookingform;

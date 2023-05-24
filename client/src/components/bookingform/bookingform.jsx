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
import dayjs from "dayjs";

const Bookingform = () => {
  const [isFormEnabled, setIsFormEnabled] = useState(true);
  const [selectedValue, setSelectedValue] = useState("enable");
  const currentDate = dayjs();
  const futureDate = currentDate.add(7, "day").format("YYYY-MM-DD");

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);

    if (value === "enable") {
      setIsFormEnabled(true);
    } else {
      setIsFormEnabled(false);
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
            "& > :not(style)": { m: 2, width: 500, maxWidth: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="Flyg Från"
            variant="filled"
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          />
          <TextField
            id="filled-basic"
            label="Flyg Till"
            variant="filled"
            sx={{
              width: "100%",
              maxWidth: "200px",
            }}
          />
          <div className="seimer">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker label="AVRESEDATUM" defaultValue={dayjs()} />
              </DemoContainer>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker
                  label="HEMRESEDATUM"
                  disabled={!isFormEnabled}
                  defaultValue={dayjs(futureDate)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Bookingform;
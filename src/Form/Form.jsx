import { Button, MenuItem, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import CoachSection from "../CoachSection/CoachSection";
import FormTitle from "../FormTitle/FormTitle";
import "./Form.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const classes = [
  { label: "Private Class 1 to 1" },
  { label: "Private Class 1 to 2" },
  { label: "Group Class" },
];
const levels = [
  { label: "Beginner" },
  { label: "Intermediate" },
  { label: "Advance" },
];
const locations = [
  { label: "HK Squash Centre" },
  { label: "Cornwall Street Squash and Table Tennis Centre" },
  { label: "Others" },
];
const days = [
  { label: "Monday" },
  { label: "Tuesday" },
  { label: "Wednesday" },
  { label: "Thursday" },
  { label: "Friday" },
  { label: "Saturday" },
  { label: "Sunday" },
];
const times = [
  { label: "0800-1200" },
  { label: "1200-1500" },
  { label: "1500-1900" },
  { label: "1900-2200" },
];

const Form = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [selectClass, setClass] = React.useState("");
  const [level, setLevel] = React.useState("");
  const [locationOne, setLocationOne] = React.useState("");
  const [locationOtherOne, setLocationOtherOne] = React.useState("");
  const [locationTwo, setLocationTwo] = React.useState("");
  const [locationOtherTwo, setLocationOtherTwo] = React.useState("");
  const [dayOne, setDayOne] = React.useState("");
  const [dayTwo, setDayTwo] = React.useState("");
  const [timeOne, setTimeOne] = React.useState("");
  const [timeTwo, setTimeTwo] = React.useState("");
  const [data, setData] = React.useState({});
  const [open, setOpen] = React.useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleClassChange = (event) => {
    setClass(event.target.value);
  };
  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };
  const handleLocationOneChange = (event) => {
    setLocationOne(event.target.value);
  };
  const handleLocationTwoChange = (event) => {
    setLocationTwo(event.target.value);
  };
  const handleDayOneChange = (event) => {
    setDayOne(event.target.value);
  };
  const handleDayTwoChange = (event) => {
    setDayTwo(event.target.value);
  };
  const handleTimeOneChange = (event) => {
    if (event.target.value == "Others") {
      console.log("hello");
    }
    setTimeOne(event.target.value);
  };
  const handleTimeTwoChange = (event) => {
    setTimeTwo(event.target.value);
  };

  const handleOtherOneChange = (event) => {
    setLocationOtherOne(event.target.value);
  };
  const handleOtherTwoChange = (event) => {
    setLocationOtherTwo(event.target.value);
  };

  const handleFormData = () => {
    setData({
      name,
      email,
      phone,
      classType: selectClass,
      level,
      preferredChoice: {
        preferredChoice1st: {
          userLocation: locationOtherOne != "" ? locationOtherOne : locationOne,
          date: dayOne,
          time: timeOne,
        },
        preferredChoice2nd: {
          userLocation: locationOtherTwo != "" ? locationOtherTwo : locationTwo,
          date: dayTwo,
          time: timeTwo,
        },
      },
    });
    console.log(data);
    // https://powerful-inlet-54019.herokuapp.com/api/users
    fetch("http://localhost:5000/api/users", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((userData) => {
        console.log("Success:", userData);
        setOpen(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <FormTitle />
      <div className="form-container">
        <div>
          <form>
            <TextField
              sx={{ my: 1 }}
              type="text"
              id="outlined-name"
              label="Name"
              value={name}
              fullWidth
              onChange={handleNameChange}
            />

            <TextField
              sx={{ my: 1 }}
              type="email"
              id="outlined-email"
              label="Email"
              value={email}
              fullWidth
              onChange={handleEmailChange}
            />

            <TextField
              sx={{ my: 1 }}
              type="phone"
              id="outlined-phone"
              label="Phone"
              value={phone}
              fullWidth
              onChange={handlePhoneChange}
            />

            <TextField
              sx={{ my: 1 }}
              id="outlined-select-class"
              select
              label="Select Class"
              value={selectClass}
              onChange={handleClassChange}
              fullWidth
              helperText="Please select your class"
            >
              {classes.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              sx={{ my: 1 }}
              id="outlined-select-level"
              select
              label="Select Level"
              value={level}
              onChange={handleLevelChange}
              fullWidth
              helperText="Please select your level"
            >
              {levels.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {/* DAY 1 */}
            <Typography variant="h5">Preferred Day (1st Choice)</Typography>
            <TextField
              sx={{ my: 1 }}
              id="outlined-select-location-1"
              select
              label="Select Location"
              value={locationOne}
              onChange={handleLocationOneChange}
              fullWidth
              helperText="Please select your location"
            >
              {locations.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {locationOne === "Others" && (
              <TextField
                sx={{ my: 1 }}
                type="text"
                id="outlined-other-one"
                label="Enter your location"
                fullWidth
                onChange={(e) => handleOtherOneChange(e)}
                helperText="Plase specify"
              />
            )}
            <TextField
              sx={{ my: 1 }}
              id="outlined-select-day-1"
              select
              label="Select Day"
              value={dayOne}
              onChange={handleDayOneChange}
              fullWidth
              helperText="Please select your date"
            >
              {days.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              sx={{ my: 1 }}
              id="outlined-select-time-1"
              select
              label="Select Time"
              value={timeOne}
              onChange={handleTimeOneChange}
              fullWidth
              helperText="Please select your time"
            >
              {times.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            {/* DAY 2 */}
            <Typography variant="h5">Preferred Day (2nd Choice)</Typography>
            <TextField
              sx={{ my: 1 }}
              id="outlined-select-location-2"
              select
              label="Select Location"
              value={locationTwo}
              onChange={handleLocationTwoChange}
              fullWidth
              helperText="Please select your location"
            >
              {locations.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {locationTwo === "Others" && (
              <TextField
                sx={{ my: 1 }}
                type="text"
                id="outlined-other-two"
                label="Enter your location"
                fullWidth
                onChange={(e) => handleOtherTwoChange(e)}
                helperText="Plase specify"
              />
            )}
            <TextField
              sx={{ my: 1 }}
              id="outlined-select-day-2"
              select
              label="Select Day"
              value={dayTwo}
              onChange={handleDayTwoChange}
              fullWidth
              helperText="Please select your date"
            >
              {days.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              sx={{ my: 1 }}
              id="outlined-select-time-2"
              select
              label="Select Time"
              value={timeTwo}
              onChange={handleTimeTwoChange}
              fullWidth
              helperText="Please select your time"
            >
              {times.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Button onClick={handleFormData} variant="contained" size="large">
              Submit
            </Button>
          </form>
        </div>
      </div>

      {/* SUCCESS MODAL */}

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Congralutalions! &#127881;
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Your registration is successful
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            We'll get in touch with you soon. Thank you.
          </Typography>
          <Button onClick={handleClose} sx={{ mt: 3 }} variant="contained">
            Okay!
          </Button>
        </Box>
      </Modal>

      {/* SUCCESS MODAl */}
    </div>
  );
};

export default Form;

import {
  Button,
  MenuItem,
  Modal,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import FormTitle from "../FormTitle/FormTitle";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./Form.css";

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
  { label: "08:00-12:00" },
  { label: "12:00-15:00" },
  { label: "15:00-19:00" },
  { label: "19:00-22:00" },
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
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [comment, setComment] = React.useState("");
  const formRef = useRef();

  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log(name);
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
  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleFormData = (e) => {
    e.preventDefault();
    setOpen(true);
    setLoading(true);
    const data = {
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
    };
    console.log(data);
    fetch("https://powerful-inlet-54019.herokuapp.com/api/users", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((userData) => {
        console.log("Success:", userData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    emailjs
      .send(
        "service_4v48w2t",
        "template_udcygri",
        { name: data.name, email: data.email, data: { ...data, comment } },
        "TTK0OFcTXm28HMA9Y"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <FormTitle />
      <div className="form-container">
        <div>
          <form ref={formRef} onSubmit={handleFormData}>
            <TextField
              sx={{ my: 1 }}
              type="text"
              id="outlined-name"
              label="Name"
              value={name}
              fullWidth
              onChange={(e) => handleNameChange(e)}
              required="true"
            />

            <TextField
              sx={{ my: 1 }}
              type="email"
              id="outlined-email"
              label="Email"
              value={email}
              fullWidth
              onChange={handleEmailChange}
              required="true"
            />

            <TextField
              sx={{ my: 1 }}
              type="phone"
              id="outlined-phone"
              label="Phone"
              value={phone}
              fullWidth
              onChange={handlePhoneChange}
              required="true"
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
              required="true"
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
              required="true"
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
              required="true"
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
                required="true"
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
              required="true"
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
              required="true"
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
              required="true"
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
                required="true"
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
              required="true"
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
              required="true"
            >
              {times.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Typography variant="body1" sx={{ mt: 3, mb: 2 }}>
              Write your comment:
            </Typography>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={5}
              placeholder="Please write here ...."
              style={{
                width: "98%",
                marginBottom: "5px",
                padding: "15px !important",
              }}
              onChange={handleComment}
            />
            <Button type="submit" variant="contained" size="large">
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
        <Box id="modal-box">
          {loading ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress color="primary" sx={{ mr: 2 }} />
              Your request is processing
            </Box>
          ) : (
            <>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h2"
              >
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
            </>
          )}
        </Box>
      </Modal>

      {/* SUCCESS MODAl */}
    </div>
  );
};

export default Form;

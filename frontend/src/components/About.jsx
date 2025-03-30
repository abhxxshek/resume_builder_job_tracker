import React, { useEffect, useState } from "react";
import {
  TextField,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import UploadProfilePicture from "../components/UploadProfilePicture";

const About = ({ resumeData = {}, handleChange }) => {
  const [profilePic, setProfilePic] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedImage = localStorage.getItem("profilePicture");
    if (storedImage) setProfilePic(storedImage);
  }, []);

  const validateField = (name, value) => {
    let error = "";
    if (!value) {
      error = "This field is required";
    } else {
      if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Invalid email format";
      }
      if (name === "phoneNumber" && !/^\d{10}$/.test(value)) {
        error = "Invalid phone number (must be 10 digits)";
      }
      if (name === "city" && /\d/.test(value)) {
        error = "City name cannot contain numbers";
      }
      if ((name === "firstName" || name === "lastName") && /\d/.test(value)) {
        error = "Name cannot contain numbers";
      }
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(e);
    validateField(name, value);
  };

  return (
    <Container sx={{paddingTop:"30px",paddingBottom:"30px"}} >
      <Typography variant="h4" color="primary" textAlign="left" gutterBottom>
        About Yourself
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="First Name"
            name="firstName"
            variant="outlined"
            fullWidth
            value={resumeData.firstName || ""}
            onChange={handleInputChange}
            onBlur={(e) => validateField(e.target.name, e.target.value)}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Last Name"
            name="lastName"
            variant="outlined"
            fullWidth
            value={resumeData.lastName || ""}
            onChange={handleInputChange}
            onBlur={(e) => validateField(e.target.name, e.target.value)}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Designation"
            name="designation"
            variant="outlined"
            fullWidth
            value={resumeData.designation || ""}
            onChange={handleInputChange}
            onBlur={(e) => validateField(e.target.name, e.target.value)}
            error={!!errors.designation}
            helperText={errors.designation}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Career Objective"
            name="careerObjective"
            variant="outlined"
            fullWidth
            value={resumeData.careerObjective || ""}
            onChange={handleInputChange}
            onBlur={(e) => validateField(e.target.name, e.target.value)}
            error={!!errors.careerObjective}
            helperText={errors.careerObjective}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            value={resumeData.email || ""}
            onChange={handleInputChange}
            onBlur={(e) => validateField(e.target.name, e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            variant="outlined"
            fullWidth
            value={resumeData.phoneNumber || ""}
            onChange={handleInputChange}
            onBlur={(e) => validateField(e.target.name, e.target.value)}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="City"
            name="city"
            variant="outlined"
            fullWidth
            value={resumeData.city || ""}
            onChange={handleInputChange}
            onBlur={(e) => validateField(e.target.name, e.target.value)}
            error={!!errors.city}
            helperText={errors.city}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Address"
            name="address"
            variant="outlined"
            fullWidth
            value={resumeData.address || ""}
            onChange={handleInputChange}
            onBlur={(e) => validateField(e.target.name, e.target.value)}
            error={!!errors.address}
            helperText={errors.address}
          />
        </Grid>
      
      <UploadProfilePicture onImageUpload={setProfilePic} />
      </Grid>
    </Container>
  );
};

export default About;

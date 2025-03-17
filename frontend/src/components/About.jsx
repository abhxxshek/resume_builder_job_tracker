import React from "react";
import { TextField, Typography, Container, Grid, Box } from "@mui/material";

const About = ({ resumeData = {}, handleChange }) => {
  
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
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Last Name"
            name="lastName"
            variant="outlined"
            fullWidth
            value={resumeData.lastName || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Designation"
            name="designation"
            variant="outlined"
            fullWidth
            value={resumeData.designation || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Career Objective"
            name="careerObjective"
            variant="outlined"
            fullWidth
            value={resumeData.careerObjective || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            value={resumeData.email || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            variant="outlined"
            fullWidth
            value={resumeData.phoneNumber || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="City"
            name="city"
            variant="outlined"
            fullWidth
            value={resumeData.city || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Address"
            name="address"
            variant="outlined"
            fullWidth
            value={resumeData.address || ""}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Container>
    
  );
};

export default About;
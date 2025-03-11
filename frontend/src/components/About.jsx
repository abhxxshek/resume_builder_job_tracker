import React from "react";
import { TextField, Button, Typography, Container, Grid } from "@mui/material";

const About = () => {
  return (
    <>
      <Container sx={{paddingTop:"30px",paddingBottom:"30px"}} >
        <Typography variant="h4" color="primary" textAlign="left" gutterBottom>
          About Yourself
        </Typography>
        <Typography variant="body1" textAlign={"left"} gutterBottom>
          Fill out about yourself
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField label="First Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Last Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField label="Designation" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField label="Career Objective" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Email" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Phone Number" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="City" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Address" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} md={12}>
            <Button variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;

import React from "react";
import { TextField, Button, Typography, Box, Grid } from "@mui/material";

const Education = () => {
  return (
    <>
      <Box sx={{ p: 4 }}>
        <Typography
          variant="h4"
          color="primary"
          textAlign={"left"}
          gutterBottom
        >
          Education
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          textAlign={"left"}
          gutterBottom
        >
          A varied education on your resume sums up the value that your
          learnings and background will bring to a job.
        </Typography>
        <Box component="form" sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="School" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField label="Degree" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField label="City" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Start Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="End Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                label="Description"
                multiline
                rows={3}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Button variant="contained" color="primary" fullWidth>
                Add
              </Button>
            </Grid>

            <Button color="primary" sx={{marginTop:"20px"}}>+ Add Education</Button>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Education;

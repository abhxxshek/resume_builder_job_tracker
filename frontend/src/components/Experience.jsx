import React, { useState } from "react";
import { TextField, Button, Typography, Container, Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const  Experiences= () => {
  const [experiences, setExperiences] = useState([]);

  const [employer, setEmployer] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const addExperience = () => {
    const newExperience = {
      employer,
      jobTitle,
      company,
      city,
      startDate,
      endDate,
      description
    };

    setExperiences([...experiences, newExperience]);

    setEmployer("");
    setJobTitle("");
    setCompany("");
    setCity("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  };

  const removeExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };

  return (
    <Container>
      <Typography variant="h4" color="primary" textAlign="left" gutterBottom>
        Work Experience
      </Typography>
      <Typography variant="body1" textAlign="left" gutterBottom>
        Show your relevant experience (last 10 years).
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField label="Employer" fullWidth value={employer} onChange={(e) => setEmployer(e.target.value)} />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Job Title" fullWidth value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Company" fullWidth value={company} onChange={(e) => setCompany(e.target.value)} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="City" fullWidth value={city} onChange={(e) => setCity(e.target.value)} />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Start Date" type="date" fullWidth InputLabelProps={{ shrink: true }} value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </Grid>
        <Grid item xs={6}>
          <TextField label="End Date" type="date" fullWidth InputLabelProps={{ shrink: true }} value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Description" fullWidth multiline rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={addExperience}>
            Add
          </Button>
        </Grid>
      </Grid>

      <div>
        {experiences.map((exp, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <Typography variant="h5">{exp.employer}</Typography>
            <Typography variant="h6">Job Title: {exp.jobTitle}</Typography>
            <Typography>Company: {exp.company}</Typography>
            <Typography>City: {exp.city}</Typography>
            <Typography>Start Date: {exp.startDate} | End Date: {exp.endDate}</Typography>
            <Typography>Description: {exp.description}</Typography>
            <IconButton color="error" onClick={() => removeExperience(index)}>
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Experiences;
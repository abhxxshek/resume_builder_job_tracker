import React, { useState } from "react";
import { TextField, Button, Typography, Container, Grid, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Trainings = () => {
  const [trainings, setTrainings] = useState([]);

  const [trainingTitle, setTrainingTitle] = useState("");
  const [institute, setInstitute] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [description, setDescription] = useState("");

  const addTraining = () => {
    const newTraining = {
      trainingTitle,
      institute,
      completionDate,
      description
    };

    setTrainings([...trainings, newTraining]);

    setTrainingTitle("");
    setInstitute("");
    setCompletionDate("");
    setDescription("");
  };

  const removeTraining = (index) => {
    const updatedTrainings = trainings.filter((_, i) => i !== index);
    setTrainings(updatedTrainings);
  };

  return (
    <Container sx={{paddingTop:"30px",paddingBottom:"30px"}}>
      <Typography variant="h4" color="primary" textAlign="left" gutterBottom>
        Trainings
      </Typography>
      <Typography variant="body1" textAlign={"left"} gutterBottom>
        Share the your Trainings. Make sure they match the skills in job listings
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <TextField
            label="Training Title"
            variant="outlined"
            fullWidth
            value={trainingTitle}
            onChange={(e) => setTrainingTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Institute"
            variant="outlined"
            fullWidth
            value={institute}
            onChange={(e) => setInstitute(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Completion Date"
            variant="outlined"
            fullWidth
            type="date"
            value={completionDate}
            onChange={(e) => setCompletionDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4} 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Button variant="contained" color="primary" fullWidth onClick={addTraining}>
            + Add Training
          </Button>
        </Grid>
      </Grid>

      <div>
        {trainings.map((training, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <Typography variant="h5">{training.trainingTitle}</Typography>
            <Typography variant="h6">Institute: {training.institute}</Typography>
            <Typography variant="p">Completion Date: {training.completionDate}</Typography><br/>
            <Typography variant="span">Description: {training.description}</Typography>
            <IconButton
              color="error"
              onClick={() => removeTraining(index)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Trainings
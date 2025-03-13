import React, { useState } from "react";
import { TextField, Button, Typography, Container, Grid, IconButton, Card, CardContent } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Trainings = ({ resumeData = {}, handleChange }) => {
  const [trainingsList, setTrainingsList] = useState(resumeData.trainingsList || []);
  const [formData, setFormData] = useState({
    training: "",
    institute: "",
    completionDate: "",
    description: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddTraining = () => {
    if (formData.training && formData.institute) {
      const newList = [...trainingsList, formData];
      setTrainingsList(newList);
      setFormData({
        training: "",
        institute: "",
        completionDate: "",
        description: ""
      });
      handleChange({ target: { name: 'trainingsList', value: newList } });
    }
  };

  const handleDelete = (index) => {
    const updatedList = trainingsList.filter((_, i) => i !== index);
    setTrainingsList(updatedList);
    handleChange({ target: { name: 'trainingsList', value: updatedList } });
  };

  return (
    <Container sx={{paddingTop:"30px",paddingBottom:"30px"}}>
      <Typography variant="h4" color="primary" textAlign="left" gutterBottom>
        Trainings
      </Typography>
      <Typography variant="body1" textAlign="left" gutterBottom>
        Add your training details.
      </Typography>

      {trainingsList.map((training, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{training.training}</Typography>
            <Typography variant="body2">{training.institute}</Typography>
            <Typography variant="body2">{training.completionDate}</Typography>
            <Typography variant="body2">{training.description}</Typography>
            <IconButton onClick={() => handleDelete(index)}><DeleteIcon /></IconButton>
          </CardContent>
        </Card>
      ))}

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Training Title" fullWidth name="training" value={formData.training} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Institute" fullWidth name="institute" value={formData.institute} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Completion Date" type="date" fullWidth InputLabelProps={{ shrink: true }} name="completionDate" value={formData.completionDate} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Description" fullWidth multiline rows={4} name="description" value={formData.description} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={handleAddTraining}>+ Add Training</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Trainings;

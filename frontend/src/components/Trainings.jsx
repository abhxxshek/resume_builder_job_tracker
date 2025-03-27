import React, { useState } from "react";
import { TextField, Button, Typography, Container, Grid, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Trainings = ({ resumeData = {}, handleChange }) => {
  const [trainings, setTrainings] = useState(resumeData.training|| []);
  const [formData, setFormData] = useState({
      trainingTitle:"",
      institute:"",
      completion:"",
      description:""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddTraining = () => {
    if (formData.trainingTitle && formData.institute) {
      const newList = [...trainings, formData];
      setTrainings(newList);
      setFormData({ trainingTitle:"",
        institute:"",
        completion:"",
        description:""});
      handleChange({ target: { name: 'training', value: newList } });
    }
  };

  const handleDelete = (index) => {
    const updatedList = trainings.filter((_, i) => i !== index);
    setTrainings(updatedList);
    handleChange({ target: { name: 'training', value: updatedList } });
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
            name="trainingTitle" value={formData.trainingTitle}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Institute"
            variant="outlined"
            fullWidth
            name="institute" value={formData.institute} onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Completion"
            variant="outlined"
            fullWidth
            type="date"
            name="completion" value={formData.completion} onChange={handleInputChange}
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
            name="description" value={formData.description} onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Button variant="contained" color="primary" fullWidth onClick={handleAddTraining}>
            + Add Training
          </Button>
        </Grid>
      </Grid>

      <div>
        {trainings.map((training, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <Typography variant="h5">{training.trainingTitle}</Typography>
            <Typography variant="h6">Institute: {training.institute}</Typography>
            <Typography variant="p">Completion Date: {training.completion}</Typography><br/>
            <Typography variant="span">Description: {training.description}</Typography>
            <IconButton
              color="error"
              onClick={() => handleDelete(index)}
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
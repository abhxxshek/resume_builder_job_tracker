import React, { useState } from "react";
import { TextField, Button, Typography, Container, Grid, IconButton, Card, CardContent } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Awards = ({ resumeData = {}, handleChange }) => {
  const [awardsList, setAwardsList] = useState(resumeData.awardsList || []);
  const [formData, setFormData] = useState({
    award: "",
    organization: "",
    city1: "",
    recieveddate: "",
    description3: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddAward = () => {
    if (formData.award && formData.organization) {
      const newList = [...awardsList, formData];
      setAwardsList(newList);
      setFormData({
        award: "",
        organization: "",
        city1: "",
        recieveddate: "",
        description3: ""
      });
      handleChange({ target: { name: 'awardsList', value: newList } });
    }
  };

  const handleDelete = (index) => {
    const updatedList = awardsList.filter((_, i) => i !== index);
    setAwardsList(updatedList);
    handleChange({ target: { name: 'awardsList', value: updatedList } });
  };

  return (
    <Container>
      <Typography variant="h4" color="primary" textAlign="left" gutterBottom>
        Awards
      </Typography>
      <Typography variant="body1" textAlign="left" gutterBottom>
        Share the awards you have been given.
      </Typography>

      {awardsList.map((award, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{award.award}</Typography>
            <Typography variant="subtitle1">{award.organization}</Typography>
            <Typography variant="body2">{`${award.city1}, ${award.recieveddate}`}</Typography>
            <Typography variant="body2">{award.description3}</Typography>
            <IconButton onClick={() => handleDelete(index)}><DeleteIcon /></IconButton>
          </CardContent>
        </Card>
      ))}

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Award Title" variant="outlined" fullWidth name="award" value={formData.award} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Organization" variant="outlined" fullWidth name="organization" value={formData.organization} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="City" variant="outlined" fullWidth name="city1" value={formData.city1} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Received Date" variant="outlined" fullWidth type="date" name="recieveddate" value={formData.recieveddate} onChange={handleInputChange} InputLabelProps={{ shrink: true }} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Description" variant="outlined" fullWidth multiline rows={4} name="description3" value={formData.description3} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={handleAddAward}>+ Add Award</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Awards;


import React, { useState } from "react";
import { TextField, Button, Typography, Container, Grid, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Awards = () => {
  const [awards, setAwards] = useState([]);

  const [awardTitle, setAwardTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [city, setCity] = useState("");
  const [receivedDate, setReceivedDate] = useState("");
  const [description, setDescription] = useState("");

  const addAward = () => {
    const newAward = {
      awardTitle,
      organization,
      city,
      receivedDate,
      description
    };

    setAwards([...awards, newAward]);

    setAwardTitle("");
    setOrganization("");
    setCity("");
    setReceivedDate("");
    setDescription("");
  };

  const removeAward = (index) => {
    const updatedAwards = awards.filter((_, i) => i !== index);
    setAwards(updatedAwards);
  };

  return (
    <Container sx={{paddingTop:"30px",paddingBottom:"30px"}}>
      <Typography variant="h4" color="primary" textAlign="left" gutterBottom>
        Awards
      </Typography>
      <Typography variant="body1" textAlign={"left"} gutterBottom>
        Share the awards you have been given.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <TextField
            label="Award Title"
            variant="outlined"
            fullWidth
            value={awardTitle}
            onChange={(e) => setAwardTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Organization"
            variant="outlined"
            fullWidth
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Received Date"
            variant="outlined"
            fullWidth
            type="date"
            value={receivedDate}
            onChange={(e) => setReceivedDate(e.target.value)}
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
          <Button variant="contained" color="primary" fullWidth onClick={addAward}>
            + Add Award
          </Button>
        </Grid>
      </Grid>

      <div>
        {awards.map((award, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <Typography variant="h5">{award.awardTitle}</Typography>
            <Typography variant="h6">Organization: {award.organization}</Typography>
            <Typography variant="p">City: {award.city}</Typography><br/>
            <Typography variant="p">Received Date: {award.receivedDate}</Typography><br/>
            <Typography variant="span">Description: {award.description}</Typography>
            <IconButton
              color="error"
              onClick={() => removeAward(index)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Awards;


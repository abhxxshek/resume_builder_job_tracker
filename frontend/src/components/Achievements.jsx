import React, { useState } from "react";
import { TextField, Button, Typography, Container, Grid, IconButton, Card, CardContent, Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Achievements = ({ resumeData = {}, handleChange }) => {
  const [achievementsList, setAchievementsList] = useState(resumeData.achievements || []);
  const [formData, setFormData] = useState({
    achievementTitle: "",
    year:"",
    description: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddAchievement = () => {
    if (formData.achievementTitle && formData.description) {
      const newList = [...achievementsList, formData];
      setAchievementsList(newList);
      setFormData({
        achievementTitle: "",
        year:"",
        description: ""
      });
      handleChange({ target: { name: 'achievements', value: newList } });
    }
  };

  const handleDelete = (index) => {
    const updatedList = achievementsList.filter((_, i) => i !== index);
    setAchievementsList(updatedList);
    handleChange({ target: { name: 'achievements', value: updatedList } });
  };

  return (
    <Container sx={{paddingTop:"30px",paddingBottom:"30px"}} >
      <Typography variant="h4" color="primary" textAlign="left" gutterBottom>
        Achievements
      </Typography>
      <Typography variant="body1" textAlign="left" gutterBottom>
        Add your most notable works and accomplishments.
      </Typography>

      {achievementsList.map((achievement, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{achievement.achievementTitle}</Typography>
            <Typography variant="h6">{achievement.year}</Typography>
            <Typography variant="body2">{achievement.description}</Typography>
            <IconButton onClick={() => handleDelete(index)}><DeleteIcon /></IconButton>
          </CardContent>
        </Card>
      ))}

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Achievement Title" variant="outlined" fullWidth name="achievementTitle" value={formData.achievementTitle} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Year" variant="outlined" fullWidth name="year" value={formData.year} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Description" variant="outlined" fullWidth multiline rows={4} name="description" value={formData.description} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={handleAddAchievement}>+ Add Achievement</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Achievements;
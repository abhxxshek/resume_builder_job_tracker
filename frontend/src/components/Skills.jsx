import React, { useState } from "react";
import { TextField, Button, Typography, Container, Grid, IconButton, Card, CardContent } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Skills = ({ resumeData = {}, handleChange }) => {
  const [skillsList, setSkillsList] = useState(resumeData.skillsList || []);
  const [formData, setFormData] = useState({
    skill: "",
    level: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddSkill = () => {
    if (formData.skill && formData.level) {
      const newList = [...skillsList, formData];
      setSkillsList(newList);
      setFormData({ skill: "", level: "" });
      handleChange({ target: { name: 'skillsList', value: newList } });
    }
  };

  const handleDelete = (index) => {
    const updatedList = skillsList.filter((_, i) => i !== index);
    setSkillsList(updatedList);
    handleChange({ target: { name: 'skillsList', value: updatedList } });
  };

  return (
    <Container>
      <Typography variant="h4" color="primary" textAlign="left" gutterBottom>
        Skills
      </Typography>
      <Typography variant="body1" textAlign="left" gutterBottom>
        List your key skills relevant to the position.
      </Typography>

      {skillsList.map((skill, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{skill.skill}</Typography>
            <Typography variant="body2">Level: {skill.level}</Typography>
            <IconButton onClick={() => handleDelete(index)}><DeleteIcon /></IconButton>
          </CardContent>
        </Card>
      ))}

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField label="Skill" fullWidth name="skill" value={formData.skill} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Level (e.g. Beginner, Intermediate, Expert)" fullWidth name="level" value={formData.level} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={handleAddSkill}>+ Add Skill</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;

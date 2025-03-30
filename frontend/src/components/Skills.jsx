import React, { useState } from "react";
import { TextField, Button, Typography, Container, Grid, IconButton, Card, CardContent, Select, MenuItem } from "@mui/material";
import { Delete } from "@mui/icons-material";

const Skills = ({ resumeData = {}, handleChange }) => {
  const [skillsList, setSkillsList] = useState(resumeData.skills || []);
  const [formData, setFormData] = useState({
    skill: "",
    proficiency: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddSkill = () => {
    if (formData.skill && formData.proficiency) {
      const newList = [...skillsList, formData];
      setSkillsList(newList);
      setFormData({ skill: "", proficiency: "" });
      handleChange({ target: { name: 'skills', value: newList } });
    }
  };

  const handleDelete = (index) => {
    const updatedList = skillsList.filter((_, i) => i !== index);
    setSkillsList(updatedList);
    handleChange({ target: { name: 'skills', value: updatedList } });
  };

  return (
    <Container sx={{ paddingTop: "30px", paddingBottom: "30px" }}>
      <Typography variant="h4" color="primary" textAlign="left" gutterBottom>
        Skills
      </Typography>
      <Typography variant="body1" textAlign="left" gutterBottom>
        List your key skills relevant to the position.
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField label="Skill" fullWidth name="skill" value={formData.skill} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={6}>
          <Select
            fullWidth
            name="proficiency"
            value={formData.proficiency}
            onChange={handleInputChange}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Level (e.g. Beginner, Intermediate, Expert)
            </MenuItem>
            <MenuItem value="Beginner">Beginner</MenuItem>
            <MenuItem value="Intermediate">Intermediate</MenuItem>
            <MenuItem value="Expert">Expert</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={handleAddSkill}>
            + Add Skill
          </Button>
        </Grid>
      </Grid>

      {skillsList.map((skill, index) => (
        <Card key={index} sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h6">{skill.skill}</Typography>
            <Typography variant="body2">Level: {skill.proficiency}</Typography>
            <IconButton onClick={() => handleDelete(index)}><Delete/></IconButton>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Skills;

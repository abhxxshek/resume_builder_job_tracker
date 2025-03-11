import React, { useState } from "react";
import { TextField, Button, Typography, Container, Grid, Paper } from "@mui/material";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [skillTitle, setSkillTitle] = useState("");
  const [skillLevel, setSkillLevel] = useState("");

  const handleAddSkill = () => {
    if (skillTitle && skillLevel) {
      setSkills([...skills, { title: skillTitle, level: skillLevel }]);
      setSkillTitle("");
      setSkillLevel("");
    }
  };

  return (
    <Container sx={{paddingTop:"30px",paddingBottom:"30px"}}>
    
        <Typography variant="h4" color="primary" textAlign="left" gutterBottom>
          Skills
        </Typography>
        <Typography variant="body1" textAlign="left" gutterBottom>
          Add 5 important skills that make you fit for that position. Make sure they match the key skills mentioned in job listings.
        </Typography>

        {/* Skill Input Fields */}
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <TextField 
              label="Skill Title" 
              variant="outlined" 
              fullWidth 
              value={skillTitle} 
              onChange={(e) => setSkillTitle(e.target.value)} 
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField 
              label="Level" 
              variant="outlined" 
              fullWidth 
              value={skillLevel} 
              onChange={(e) => setSkillLevel(e.target.value)} 
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth 
              onClick={handleAddSkill}
            >
              Add Skill
            </Button>
          </Grid>
        </Grid>

        {/* Display Added Skills */}
        {skills.length > 0 && (
          <Grid container spacing={2} sx={{ mt: 3 }}>
            {skills.map((skill, index) => (
              <Grid item xs={12} key={index}>
                <Paper sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body1">{skill.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{skill.level}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
    
    </Container>
  );
};

export default Skills;

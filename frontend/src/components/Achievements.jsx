import React, { useState, useRef } from "react";
import { TextField, Button, Typography, Container, Grid, Paper, Link } from "@mui/material";

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const inputRef = useRef(null);

  const handleAddAchievement = () => {
    if (title && description) {
      setAchievements([...achievements, { title, description }]);
      setTitle("");
      setDescription("");
    }
  };

  const handleFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <Container sx={{paddingTop:"30px",paddingBottom:"30px"}}>
      
        <Typography variant="h4" color="primary" textAlign="left" gutterBottom>
          Achievements
        </Typography>
        <Typography variant="body1" textAlign="left" gutterBottom>
          Add your most notable works and accomplishments to create a stronger persona.
        </Typography>

        {/* Achievement Input Fields */}
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <TextField
              inputRef={inputRef}
              label="Achievement Title"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
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
          <Grid item xs={12}>
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth 
              onClick={handleAddAchievement}
            >
              Add
            </Button>
          </Grid>
        </Grid>

        {/* Display Added Achievements */}
        {achievements.length > 0 && (
          <Grid container spacing={2} sx={{ mt: 3 }}>
            {achievements.map((achievement, index) => (
              <Grid item xs={12} key={index}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6">{achievement.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {achievement.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}

        {/* "+ Add Achievement" Link */}
        <Grid container justifyContent="flex-start" sx={{ mt: 2 }}>
          <Link component="button" variant="body2" onClick={handleFocusInput} color="primary">
            + Add Achievement
          </Link>
        </Grid>
    </Container>
  );
};

export default Achievements;

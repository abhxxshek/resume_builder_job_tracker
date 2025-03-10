import React, { useState } from "react";
import { TextField, Button, Typography, Container, Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const [projectTitle, setProjectTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectLink, setProjectLink] = useState("");

  const addProject = () => {
    const newProject = {
      projectTitle,
      description,
      projectLink
    };

    setProjects([...projects, newProject]);

    setProjectTitle("");
    setDescription("");
    setProjectLink("");
  };

  const removeProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  return (
    <Container>
      <Typography variant="h4" color="primary" textAlign="left" gutterBottom>
        Projects
      </Typography>
      <Typography variant="body1" textAlign="left" gutterBottom>
        Share your significant projects with links and descriptions.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Project Title" fullWidth value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Description" fullWidth multiline rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Project Link" fullWidth value={projectLink} onChange={(e) => setProjectLink(e.target.value)} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={addProject}>
            Add Project
          </Button>
        </Grid>
      </Grid>

      <div>
        {projects.map((project, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <Typography variant="h5">{project.projectTitle}</Typography>
            <Typography>Description: {project.description}</Typography>
            <Typography>Link: <a href={project.projectLink} target="_blank" rel="noopener noreferrer">{project.projectLink}</a></Typography>
            <IconButton color="error" onClick={() => removeProject(index)}>
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Projects;

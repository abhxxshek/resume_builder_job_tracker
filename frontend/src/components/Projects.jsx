import React, { useState } from "react";
import { TextField, Button, Typography, Container, Grid, IconButton, Card, CardContent } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Projects = ({ resumeData = {}, handleChange }) => {
  const [projectsList, setProjectsList] = useState(resumeData.project || []);
  const [formData, setFormData] = useState({
    projectTitle: "",
    description: "",
    projectLink: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddProject = () => {
    if (formData.projectTitle && formData.description && formData.projectLink) {
      const newList = [...projectsList, formData];
      setProjectsList(newList);
      setFormData({
        projectTitle: "",
        description: "",
        projectLink: ""
      });
      handleChange({ target: { name: 'project', value: newList } });
    }
  };

  const handleDelete = (index) => {
    const updatedList = projectsList.filter((_, i) => i !== index);
    setProjectsList(updatedList);
    handleChange({ target: { name: 'project', value: updatedList } });
  };

  return (
    <Container sx={{ paddingTop: "30px", paddingBottom: "30px" }}>
      <Typography variant="h4" color="primary" textAlign="left" gutterBottom>
        Projects
      </Typography>
      <Typography variant="body1" textAlign="left" gutterBottom>
        Share your significant projects with links and descriptions.
      </Typography>

      {/* Form First */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Project Title" fullWidth name="projectTitle" value={formData.projectTitle} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Description" fullWidth multiline rows={4} name="description" value={formData.description} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Project Link" fullWidth name="projectLink" value={formData.projectLink} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={handleAddProject}>+ Add Project</Button>
        </Grid>
      </Grid>

      {/* Projects List Below */}
      {projectsList.map((project, index) => (
        <Card key={index} sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h6">{project.projectTitle}</Typography>
            <Typography variant="body2">{project.description}</Typography>
            <Typography variant="body2">
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                {project.projectLink}
              </a>
            </Typography>
            <IconButton onClick={() => handleDelete(index)}><DeleteIcon /></IconButton>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Projects;

import React, { useState } from "react";
import { TextField, Button, Typography, Container, Grid, IconButton, Card, CardContent, Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Projects = ({ resumeData = {}, handleChange }) => {
  const [projectsList, setProjectsList] = useState(resumeData.projectsList || []);
  const [formData, setFormData] = useState({
    project: "",
    description5: "",
    projectlink: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddProject = () => {
    if (formData.project && formData.description5 && formData.projectlink) {
      const newList = [...projectsList, formData];
      setProjectsList(newList);
      setFormData({
        project: "",
        description5: "",
        projectlink: ""
      });
      handleChange({ target: { name: 'projectsList', value: newList } });
    }
  };

  const handleDelete = (index) => {
    const updatedList = projectsList.filter((_, i) => i !== index);
    setProjectsList(updatedList);
    handleChange({ target: { name: 'projectsList', value: updatedList } });
  };

  return (
    <Container sx={{paddingTop:"30px",paddingBottom:"30px"}} >
      <Typography variant="h4" color="primary" textAlign="left" gutterBottom>
        Projects
      </Typography>
      <Typography variant="body1" textAlign="left" gutterBottom>
        Share your significant projects with links and descriptions.
      </Typography>

      {projectsList.map((project, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{project.project}</Typography>
            <Typography variant="body2">{project.description5}</Typography>
            <Typography variant="body2">
              <a href={project.projectlink} target="_blank" rel="noopener noreferrer">
                {project.projectlink}
              </a>
            </Typography>
            <IconButton onClick={() => handleDelete(index)}><DeleteIcon /></IconButton>
          </CardContent>
        </Card>
      ))}

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Project Title" fullWidth name="project" value={formData.project} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Description" fullWidth multiline rows={4} name="description5" value={formData.description5} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Project Link" fullWidth name="projectlink" value={formData.projectlink} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={handleAddProject}>+ Add Project</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
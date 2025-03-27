import React, { useState, useEffect } from "react";
import { 
  TextField, 
  Button, 
  Typography, 
  Container, 
  Grid, 
  IconButton, 
  Card, 
  CardContent, 
  Box,
  Divider
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'

const Experience = ({ resumeData = {}, handleChange, updateResume }) => {
  // Initialize with data from props or empty array
  const [experiencesList, setExperiencesList] = useState(resumeData.experience || []);
  
  const [formData, setFormData] = useState({ 
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    description: ""
  });

  // Update local state when resumeData prop changes
  useEffect(() => {
    if (resumeData.experience) {
      setExperiencesList(resumeData.experience);
    }
  }, [resumeData.experience]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddExperience = async () => {
    if (formData.jobTitle && formData.company) {
      const newExperience = {
        ...formData,
        // Generate ID for new experience
        id: Date.now().toString()
      };
      
      const updatedExperiences = [...experiencesList, newExperience];
      
      // Update local state
      setExperiencesList(updatedExperiences);
      setFormData({
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        description: ""
      });
      
      // Update parent component and database
      await updateResume({ experience: updatedExperiences });
    }
  };

  const handleDelete = async (id) => {
    const updatedExperiences = experiencesList.filter(exp => exp.id !== id);
    
    // Update local state
    setExperiencesList(updatedExperiences);
    
    // Update parent component and database
    await updateResume({ experience: updatedExperiences });
  };

  return (
    <Container sx={{ paddingTop: "30px", paddingBottom: "30px" }}>
      <Typography variant="h5" color="primary" textAlign="left" gutterBottom>
        Work Experience
      </Typography>
      <Typography variant="body1" textAlign="left" gutterBottom sx={{ mb: 3 }}>
        Show your relevant experience (last 10 years).
      </Typography>

      {/* Experience Cards Section */}
      {experiencesList.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Your Experiences:
          </Typography>
          <Grid container spacing={2}>
            {experiencesList.map((experience) => (
              <Grid item xs={12} key={experience.id}>
                <Card variant="outlined" sx={{ position: 'relative' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                     
                      <Typography variant="h6" component="div">
                        {experience.jobTitle}
                      </Typography>
                    </Box>
                    <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>
                      {experience.company}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {experience.startDate} - {experience.endDate || 'Present'}
                    </Typography>
                    {experience.description && (
                      <>
                        <Divider sx={{ my: 1 }} />
                        <Typography variant="body2">
                          {experience.description}
                        </Typography>
                      </>
                    )}
                    <IconButton 
                      onClick={() => handleDelete(experience.id)} 
                      sx={{ 
                        position: 'absolute', 
                        top: 8, 
                        right: 8,
                        color: 'error.main'
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Add Experience Form */}
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        {experiencesList.length > 0 ? 'Add Another Experience' : 'Add Your First Experience'}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField 
            label="Job Title*" 
            fullWidth 
            name="jobTitle" 
            value={formData.jobTitle} 
            onChange={handleInputChange} 
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
            label="Company*" 
            fullWidth 
            name="company" 
            value={formData.company} 
            onChange={handleInputChange} 
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
            label="Start Date" 
            type="date" 
            fullWidth 
            InputLabelProps={{ shrink: true }} 
            name="startDate" 
            value={formData.startDate} 
            onChange={handleInputChange} 
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
            label="End Date" 
            type="date" 
            fullWidth 
            InputLabelProps={{ shrink: true }} 
            name="endDate" 
            value={formData.endDate} 
            onChange={handleInputChange} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            label="Description" 
            fullWidth 
            multiline 
            rows={3} 
            name="description" 
            value={formData.description} 
            onChange={handleInputChange} 
            placeholder="Describe your responsibilities and achievements"
          />
        </Grid>
        <Grid item xs={12}>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            onClick={handleAddExperience}
            disabled={!formData.jobTitle || !formData.company}
            sx={{ mt: 1 }}
          >
            {experiencesList.length > 0 ? '+ Add Another Experience' : '+ Add Experience'}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Experience;
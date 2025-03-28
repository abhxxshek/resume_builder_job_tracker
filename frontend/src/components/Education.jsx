import React, { useState } from "react";
import { TextField, Button, Typography, Box, Grid, Card, CardContent, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Education = ({ resumeData = {}, handleChange }) => {
  const [isEducation, setIsEducation] = useState(false);
  const [educationList, setEducationList] = useState( resumeData.education || [] );
  const [formData, setFormData] = useState({
    institution: "",
    fieldOfStudy: "",
    startYear: "",
    endYear: "",
    percentage: ""
  });
  const [errors, setErrors] = useState({});

  const displayForm = () => {
    setIsEducation(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    handleChange(e);
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.institution.trim()) {
      newErrors.institution = "School name is required";
    } else if (/\d/.test(formData.institution)) {
      newErrors.institution = "School name should not contain numbers";
    }
    
    if (!formData.fieldOfStudy.trim()) {
      newErrors.fieldOfStudy = "Degree is required";
    } else if (/\d/.test(formData.fieldOfStudy)) {
      newErrors.fieldOfStudy = "Degree should not contain numbers";
    }
    
    if (!formData.startYear) {
      newErrors.startYear = "Start date is required";
    }
    
    if (!formData.endYear) {
      newErrors.endYear = "End date is required";
    } else if (formData.startYear && formData.endYear && formData.startYear > formData.endYear) {
      newErrors.endYear = "End date cannot be before start date";
    }
    
    if (!formData.percentage || formData.percentage < 0 || formData.percentage > 100) {
      newErrors.percentage = "Percentage must be between 0 and 100";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddEducation = () => {
    if (validateForm()) {
      const newList = [...educationList, formData];
      setEducationList(newList);
      setFormData({
        institution: "",
        fieldOfStudy: "",
        startYear: "",
        endYear: "",
        percentage: ""
      });
      setErrors({});
      handleChange({ target: { name: 'education', value: newList } });
    }
  };

  const handleDelete = (index) => {
    const updatedList = educationList.filter((_, i) => i !== index);
    setEducationList(updatedList);
    handleChange({ target: { name: 'education', value: updatedList } });
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" color="primary" textAlign="left" gutterBottom>
        Education
      </Typography>
      <Typography variant="body2" color="textSecondary" textAlign="left" gutterBottom>
        A varied education on your resume sums up the value that your learnings and background will bring to a job.
      </Typography>

      {isEducation && (
        <Box component="form" sx={{ flexGrow: 1, mb: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="School" name="institution" variant="outlined" fullWidth value={formData.institution} 
                onChange={handleInputChange} error={!!errors.institution} helperText={errors.institution} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Degree" name="fieldOfStudy" variant="outlined" fullWidth value={formData.fieldOfStudy} 
                onChange={handleInputChange} error={!!errors.fieldOfStudy} helperText={errors.fieldOfStudy} />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Start Date" type="date" name="startYear" value={formData.startYear} 
                onChange={handleInputChange} InputLabelProps={{ shrink: true }} fullWidth error={!!errors.startYear} helperText={errors.startYear} />
            </Grid>
            <Grid item xs={6}>
              <TextField label="End Date" type="date" name="endYear" value={formData.endYear} 
                onChange={handleInputChange} InputLabelProps={{ shrink: true }} fullWidth error={!!errors.endYear} helperText={errors.endYear} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Percentage" type="number" name="percentage" value={formData.percentage} 
                onChange={handleInputChange} variant="outlined" fullWidth 
                error={!!errors.percentage} helperText={errors.percentage} />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth onClick={handleAddEducation}>Add</Button>
            </Grid>
          </Grid>
        </Box>
      )}

      <Button color="primary" sx={{ marginBottom: "20px" }} onClick={displayForm}>
        + Add Education
      </Button>

      {educationList.map((edu, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{edu.institution}</Typography>
            <Typography variant="subtitle1">{edu.fieldOfStudy}</Typography>
            <Typography variant="body2">{`${edu.startYear} to ${edu.endYear}`}</Typography>
            <Typography variant="body2">{edu.percentage}%</Typography>
            <IconButton onClick={() => handleDelete(index)}><DeleteIcon /></IconButton>
          </CardContent>
        </Card>
      ))}

    </Box>
  );
};

export default Education;


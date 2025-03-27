// import React, { useState } from "react";
// import { TextField, Button, Typography, Container, Grid, IconButton, Card, CardContent, Box } from "@mui/material";
// import DeleteIcon from '@mui/icons-material/Delete';

// const Experience = ({ resumeData = {}, handleChange }) => {
//   const [experiencesList, setExperiencesList] = useState(resumeData.experiences || []);
//   const [formData, setFormData] = useState({ 
//     jobTitle: "",
//     company: "",
//     startDate: "",
//     endDate: "",
//     description: ""
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleAddExperience = () => {
//     if (formData.employer && formData.jobTitle && formData.company) {
//       const newList = [...experiencesList, formData];
//       setExperiencesList(newList);
//       setFormData({
//         employer: "",
//         jobTitle: "",
//         company: "",
//         // City: "",
//         startDate: "",
//         endDate: "",
//         description1: ""
//       });
//       handleChange({ target: { name: 'experiences', value: newList } });
//     }
//   };

//   const handleDelete = (index) => {
//     const updatedList = experiencesList.filter((_, i) => i !== index);
//     setExperiencesList(updatedList);
//     handleChange({ target: { name: 'experiences', value: updatedList } });
//   };

//   return (
//     <Container sx={{paddingTop:"30px",paddingBottom:"30px"}} >
//       <Typography variant="h4" color="primary" textAlign="left" gutterBottom>
//         Work Experience
//       </Typography>
//       <Typography variant="body1" textAlign="left" gutterBottom>
//         Show your relevant experience (last 10 years).
//       </Typography>

//       {experiencesList.map((experience, index) => (
//         <Card key={index} sx={{ mb: 2 }}>
//           <CardContent>
//             <Typography variant="h6">{experience.jobTitle}</Typography>
//             <Typography variant="body2">at {experience.company}</Typography>
//             <Typography variant="body2">From {experience.startDate} to {experience.endDate}</Typography>
//             <Typography variant="body2">{experience.description}</Typography>
//             <IconButton onClick={() => handleDelete(index)}><DeleteIcon /></IconButton>
//           </CardContent>
//         </Card>
//       ))}

//       <Grid container spacing={2}>
//         <Grid item xs={6}>
//           <TextField label="Employer" fullWidth name="employer" value={formData.employer} onChange={handleInputChange} />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="Job Title" fullWidth name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField label="Company" fullWidth name="company" value={formData.company} onChange={handleInputChange} />
//         </Grid>
//         {/* <Grid item xs={12}>
//           <TextField label="City" fullWidth name="City" value={formData.City} onChange={handleInputChange} />
//         </Grid> */}
//         <Grid item xs={6}>
//           <TextField label="Start Date" type="date" fullWidth InputLabelProps={{ shrink: true }} name="startDate" value={formData.startDate} onChange={handleInputChange} />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="End Date" type="date" fullWidth InputLabelProps={{ shrink: true }} name="endDate" value={formData.endDate} onChange={handleInputChange} />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField label="Description" fullWidth multiline rows={4} name="description1" value={formData.description1} onChange={handleInputChange} />
//         </Grid>
//         <Grid item xs={12}>
//           <Button variant="contained" color="primary" fullWidth onClick={handleAddExperience}>+ Add Experience</Button>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Experience;





import React, { useState } from "react";
import { TextField, Button, Typography, Container, Grid, IconButton, Card, CardContent } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Experience = ({ resumeData = {}, handleChange }) => {
  const [experiencesList, setExperiencesList] = useState(resumeData.experiences || []);
  const [formData, setFormData] = useState({ 
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    description: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddExperience = () => {
    if (formData.jobTitle && formData.company) {
      const newList = [...experiencesList, formData];
      setExperiencesList(newList);
      setFormData({
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        description: ""
      });
      handleChange({ target: { name: 'experiences', value: newList } });
    }
  };

  const handleDelete = (index) => {
    const updatedList = experiencesList.filter((_, i) => i !== index);
    setExperiencesList(updatedList);
    handleChange({ target: { name: 'experiences', value: updatedList } });
  };

  return (
    <Container sx={{ paddingTop: "30px", paddingBottom: "30px" }}>
      <Typography variant="h4" color="primary" textAlign="left" gutterBottom>
        Work Experience
      </Typography>
      <Typography variant="body1" textAlign="left" gutterBottom>
        Show your relevant experience (last 10 years).
      </Typography>

      <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
        <Grid item xs={6}>
          <TextField label="Job Title" fullWidth name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Company" fullWidth name="company" value={formData.company} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Start Date" type="date" fullWidth InputLabelProps={{ shrink: true }} name="startDate" value={formData.startDate} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={6}>
          <TextField label="End Date" type="date" fullWidth InputLabelProps={{ shrink: true }} name="endDate" value={formData.endDate} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Description" fullWidth multiline rows={4} name="description" value={formData.description} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={handleAddExperience}>+ Add Experience</Button>
        </Grid>
      </Grid>
      
      {experiencesList.map((experience, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{experience.jobTitle}</Typography>
            <Typography variant="body2">at {experience.company}</Typography>
            <Typography variant="body2">From {experience.startDate} to {experience.endDate}</Typography>
            <Typography variant="body2">{experience.description}</Typography>
            <IconButton onClick={() => handleDelete(index)}><DeleteIcon /></IconButton>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Experience;

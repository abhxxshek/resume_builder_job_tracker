
import React, { useEffect, useState } from "react";
import { Typography, Container, Box, Divider, Grid, Avatar } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Template1 = ({ resumeData = {} }) => {
  const [profilePic, setProfilePic] = useState("");

  // Function to update profile picture from localStorage
  const updateProfilePicture = () => {
    const storedImage = localStorage.getItem("profilePicture");
    setProfilePic(storedImage || "");
  };

  useEffect(() => {
    updateProfilePicture(); // Initial check

    // Listen for changes in localStorage
    const handleStorageChange = () => {
      updateProfilePicture();
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom events if needed
    window.addEventListener('profilePictureUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('profilePictureUpdated', handleStorageChange);
    };
  }, []);
  // Define consistent styling variables with more compact spacing
  const sectionStyle = {
    marginBottom: "12px",
  };
  
  const sectionTitleStyle = {
    fontSize: "16px",
    fontWeight: 600,
    color: "#2c3e50",
    marginBottom: "8px",
  };
  
  const dividerStyle = {
    margin: "8px 0",
    backgroundColor: "#e0e0e0",
    height: "1px",
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        width: "210mm", // Standard A4 width - you can change this
        height: "auto", // This allows for content expansion
        padding: "16px", // Adjust padding to control content area
        backgroundColor: "#ffffff",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Header Section - More Compact */}
      <Box
        sx={{
          textAlign: "center",
          mb: 2,
        }}
      >
        {/* Profile Picture */}
        
        {profilePic && (
  <Avatar
    src={profilePic}
    alt="Profile Picture"
    sx={{ width: 100, height: 100, margin: "0 auto", mb: 1 }}
  />
)}
          

        {/* Name and Designation */}
        <Typography variant="h5" sx={{ fontWeight: 600, color: "#2c3e50", mb: 0.5, lineHeight: 1.2 }}>
          {resumeData?.firstName || "John"} {resumeData?.lastName || "Doe"}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "#546e7a", fontWeight: 500, mb: 1, lineHeight: 1.2 }}>
          {resumeData?.designation || "Software Engineer"}
        </Typography>

        {/* Contact Information - Inline for space saving */}
        <Box sx={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
          flexWrap: "wrap",
          gap: 1.5,
          fontSize: "13px"
        }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <EmailIcon sx={{ fontSize: 14, mr: 0.5, color: "#546e7a" }} />
            <Typography variant="body2" sx={{ color: "#546e7a", fontSize: "13px" }}>
              {resumeData?.email || "john.doe@example.com"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PhoneIcon sx={{ fontSize: 14, mr: 0.5, color: "#546e7a" }} />
            <Typography variant="body2" sx={{ color: "#546e7a", fontSize: "13px" }}>
              {resumeData?.phoneNumber || "123456789"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LocationOnIcon sx={{ fontSize: 14, mr: 0.5, color: "#546e7a" }} />
            <Typography variant="body2" sx={{ color: "#546e7a", fontSize: "13px" }}>
              {resumeData?.city || "New York"}, {resumeData?.address || "123 Main St"}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={dividerStyle} />

      {/* About Me Section - More Concise */}
      <Box sx={sectionStyle}>
        <Typography variant="subtitle1" sx={sectionTitleStyle}>
          About Me
        </Typography>
        <Typography variant="body2" sx={{ lineHeight: 1.4, color: "#424242", fontSize: "13px" }}>
          {resumeData?.careerObjective || "To excel in software development and contribute to innovative projects."}
        </Typography>
      </Box>

      <Divider sx={dividerStyle} />

      {/* Experience Section */}
      <Box sx={sectionStyle}>
        <Typography variant="subtitle1" sx={sectionTitleStyle}>
          Work Experience
        </Typography>
        {resumeData.experience && resumeData.experience.length > 0 ? (
          resumeData.experience.map((experience, index) => (
            <Box key={index} sx={{ mb: index < resumeData.experience.length - 1 ? 1.5 : 0 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#2c3e50", mb: 0.25, lineHeight: 1.3 }}>
                {experience.jobTitle || "Software Developer"}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500, color: "#546e7a", mb: 0.25, lineHeight: 1.3, fontSize: "13px" }}>
                at {experience.company || "Tech Corp"} | {experience.startDate ? experience.startDate.substring(0, 10) : "2020-01-01"} to {experience.endDate ? experience.endDate.substring(0, 10) : "2022-01-01"}
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242", fontSize: "13px", lineHeight: 1.3 }}>
                {experience.description || "Developed web applications using JavaScript and Node.js."}
              </Typography>
            </Box>
          ))
        ) : (
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#2c3e50", mb: 0.25, lineHeight: 1.3 }}>
              Software Developer
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 500, color: "#546e7a", mb: 0.25, lineHeight: 1.3, fontSize: "13px" }}>
              at Tech Corp | 2020-01-01 to 2022-01-01
            </Typography>
            <Typography variant="body2" sx={{ color: "#424242", fontSize: "13px", lineHeight: 1.3 }}>
              Developed web applications using JavaScript and Node.js.
            </Typography>
          </Box>
        )}
      </Box>

      <Divider sx={dividerStyle} />

      {/* Education Section */}
      <Box sx={sectionStyle}>
        <Typography variant="subtitle1" sx={sectionTitleStyle}>
          Education
        </Typography>
        {resumeData.education && resumeData.education.length > 0 ? (
          resumeData.education.map((edu, index) => (
            <Box key={index} sx={{ mb: index < resumeData.education.length - 1 ? 1.5 : 0 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#2c3e50", mb: 0.25, lineHeight: 1.3 }}>
                {edu.institution || "State University"}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500, color: "#546e7a", mb: 0.25, lineHeight: 1.3, fontSize: "13px" }}>
                {edu.fieldOfStudy || "Computer Science"}
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242", fontSize: "13px", lineHeight: 1.3 }}>
                {edu.startYear || "2016"} to {edu.endYear || "2020"}
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242", fontSize: "13px", lineHeight: 1.3 }}>
                {edu.percentage || "85"}
              </Typography>
            </Box>
          ))
        ) : (
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#2c3e50", mb: 0.25, lineHeight: 1.3 }}>
              State University
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 500, color: "#546e7a", mb: 0.25, lineHeight: 1.3, fontSize: "13px" }}>
              Computer Science
            </Typography>
            <Typography variant="body2" sx={{ color: "#424242", fontSize: "13px", lineHeight: 1.3 }}>
              2016 to 2020
            </Typography>
            <Typography variant="body2" sx={{ color: "#424242", fontSize: "13px", lineHeight: 1.3 }}>
              85
            </Typography>
          </Box>
        )}
      </Box>

      <Divider sx={dividerStyle} />

      {/* Skills Section */}
      <Box sx={sectionStyle}>
        <Typography variant="subtitle1" sx={sectionTitleStyle}>
          Skills
        </Typography>
        <Grid container spacing={1}>
          {resumeData.skills && resumeData.skills.length > 0 ? (
            resumeData.skills.map((skill, index) => (
              <Grid item xs={6} key={index} sx={{ pb: "4px !important" }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#2c3e50", mb: 0, lineHeight: 1.3 }}>
                  {skill.skill || "JavaScript"}
                </Typography>
                <Typography variant="body2" sx={{ color: "#546e7a", fontSize: "13px", lineHeight: 1.3 }}>
                  Level: {skill.proficiency || "Advanced"}
                </Typography>
              </Grid>
            ))
          ) : (
            <>
              <Grid item xs={6} sx={{ pb: "4px !important" }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#2c3e50", mb: 0, lineHeight: 1.3 }}>
                  JavaScript
                </Typography>
                <Typography variant="body2" sx={{ color: "#546e7a", fontSize: "13px", lineHeight: 1.3 }}>
                  Level: Advanced
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ pb: "4px !important" }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#2c3e50", mb: 0, lineHeight: 1.3 }}>
                  Node.js
                </Typography>
                <Typography variant="body2" sx={{ color: "#546e7a", fontSize: "13px", lineHeight: 1.3 }}>
                  Level: Intermediate
                </Typography>
              </Grid>
            </>
          )}
        </Grid>
      </Box>

      <Divider sx={dividerStyle} />

      {/* Achievements Section */}
      <Box sx={sectionStyle}>
        <Typography variant="subtitle1" sx={sectionTitleStyle}>
          Achievements
        </Typography>
        {resumeData.achievements && resumeData.achievements.length > 0 ? (
          resumeData.achievements.map((achievements, index) => (
            <Box key={index} sx={{ mb: index < resumeData.achievements.length - 1 ? 1.5 : 0 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#2c3e50", mb: 0.25, lineHeight: 1.3 }}>
                {achievements.achievementTitle || "Best Coder Award"}
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242", fontSize: "13px", lineHeight: 1.3 }}>
                {achievements.description || "Awarded for outstanding performance in coding competitions."}
              </Typography>
              <Typography variant="body2" sx={{ color: "#546e7a", fontSize: "13px", lineHeight: 1.3 }}>
                {achievements.year|| "2021-01-01"}
              </Typography>
            </Box>
          ))
        ) : (
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#2c3e50", mb: 0.25, lineHeight: 1.3 }}>
              Best Coder Award
            </Typography>
            <Typography variant="body2" sx={{ color: "#424242", fontSize: "13px", lineHeight: 1.3 }}>
              Awarded for outstanding performance in coding competitions.
            </Typography>
            <Typography variant="body2" sx={{ color: "#546e7a", fontSize: "13px", lineHeight: 1.3 }}>
              2021-01-01
            </Typography>
          </Box>
        )}
      </Box>

      <Divider sx={dividerStyle} />

      {/* Training Section */}
      <Box sx={sectionStyle}>
        <Typography variant="subtitle1" sx={sectionTitleStyle}>
          Trainings
        </Typography>
        {resumeData.training && resumeData.training.length > 0 ? (
          resumeData.training.map((training, index) => (
            <Box key={index} sx={{ mb: index < resumeData.training.length - 1 ? 1.5 : 0 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#2c3e50", mb: 0.25, lineHeight: 1.3 }}>
                {training.trainingTitle || "Advanced JavaScript"}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500, color: "#546e7a", mb: 0, lineHeight: 1.3, fontSize: "13px" }}>
                Institute: {training.institute || "Code Academy"}
              </Typography>
              <Typography variant="body2" sx={{ color: "#546e7a", mb: 0.25, lineHeight: 1.3, fontSize: "13px" }}>
                Completion Date: {training.completion ? training.completion.substring(0, 10) : "2020-06-01"}
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242", fontSize: "13px", lineHeight: 1.3 }}>
                {training.description || "Completed an advanced course in JavaScript."}
              </Typography>
            </Box>
          ))
        ) : (
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#2c3e50", mb: 0.25, lineHeight: 1.3 }}>
              Advanced JavaScript
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 500, color: "#546e7a", mb: 0, lineHeight: 1.3, fontSize: "13px" }}>
              Institute: Code Academy
            </Typography>
            <Typography variant="body2" sx={{ color: "#546e7a", mb: 0.25, lineHeight: 1.3, fontSize: "13px" }}>
              Completion Date: 2020-06-01
            </Typography>
            <Typography variant="body2" sx={{ color: "#424242", fontSize: "13px", lineHeight: 1.3 }}>
              Completed an advanced course in JavaScript.
            </Typography>
          </Box>
        )}
      </Box>

      <Divider sx={dividerStyle} />

      {/* Projects Section */}
      <Box sx={sectionStyle}>
        <Typography variant="subtitle1" sx={sectionTitleStyle}>
          Projects
        </Typography>
        {resumeData.project && resumeData.project.length > 0 ? (
          resumeData.project.map((project, index) => (
            <Box key={index} sx={{ mb: index < resumeData.project.length - 1 ? 1.5 : 0 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#2c3e50", mb: 0.25, lineHeight: 1.3 }}>
                {project.projectTitle || "Online Book Store"}
              </Typography>
              <Typography variant="body2" sx={{ color: "#424242", mb: 0.25, fontSize: "13px", lineHeight: 1.3 }}>
                {project.description || "An e-commerce platform for books."}
              </Typography>
              {project.projectLink && (
                <Typography variant="body2" sx={{ color: "#1976d2", fontSize: "13px", lineHeight: 1.3 }}>
                  <a 
                    href={project.projectLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: "#1976d2", textDecoration: "none" }}
                  >
                    {project.projectLink}
                  </a>
                </Typography>
              )}
            </Box>
          ))
        ) : (
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#2c3e50", mb: 0.25, lineHeight: 1.3 }}>
              Online Book Store
            </Typography>
            <Typography variant="body2" sx={{ color: "#424242", mb: 0.25, fontSize: "13px", lineHeight: 1.3 }}>
              An e-commerce platform for books.
            </Typography>
            <Typography variant="body2" sx={{ color: "#1976d2", fontSize: "13px", lineHeight: 1.3 }}>
              <a 
                href="http://example.com/bookstore" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: "#1976d2", textDecoration: "none" }}
              >
                http://example.com/bookstore
              </a>
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Template1;